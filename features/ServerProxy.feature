Feature: ServerProxy

  Scenario: When the request is not a query, bypass the bundler
    Given server responds "DismissNotification" with
      """json
      {"data":{}}
      """
    And the following request comes in
      """json
      {
      "operationName":"DismissNotification",
      "query":"mutation DismissNotification($id: ID!) {\n  dismissNotification(id: $id)\n}"
      }
      """
    When the bundling interval is hit
    Then the server should be called with
      """json
      {
      "operationName":"DismissNotification",
      "query":"mutation DismissNotification($id: ID!) {\n  dismissNotification(id: $id)\n}"
      }
      """

  Scenario: When the request has more than one definition, bypass the bundler
    Given server responds "QueryWithFragment" with
      """json
      {"data":{}}
      """
    And the following request comes in
      """json
      {
      "operationName":"QueryWithFragment",
      "query":"fragment xyz on Xyz {\n  id\n}\n\nquery QueryWithFragment($id: ID!) {\n  ...xyz\n}"
      }
      """
    When the bundling interval is hit
    Then the server should be called with
      """json
      {
      "operationName":"QueryWithFragment",
      "query":"fragment xyz on Xyz {\n  id\n}\n\nquery QueryWithFragment($id: ID!) {\n  ...xyz\n}"
      }
      """

  Scenario: Single Request Without Alias
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"r0f1":"win"}}
      """
    And the following request comes in
      """json
      {"query":"{\n  fieldA\n  fieldB\n}"}
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName":"BundledQuery",
      "query":"query BundledQuery {\n  r0f0: fieldA\n  r0f1: fieldB\n}"
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"fieldB":"win"}}
      """

  Scenario: Single Request With Partial Error
    Given server responds "BundledQuery" with
      """json
      {
      "errors": [
      {
      "message": "oops!",
      "locations": [{"line":6,"column":3}],
      "path": ["r0f0"],
      "extensions": ["Error: oops!", "stack-of.js:30:10"]
      }
      ],
      "data": {"r0f0":null,"r0f1":"win"}
      }
      """
    And the following request comes in
      """json
      {"query":"{\n  fieldA\n  fieldB\n}"}
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName":"BundledQuery",
      "query":"query BundledQuery {\n  r0f0: fieldA\n  r0f1: fieldB\n}"
      }
      """
    And request number 1 should be responded with
      """json
      {
      "errors": [
      {
      "message": "oops!",
      "locations": [{"line":6,"column":3}],
      "path": ["fieldA"],
      "extensions": ["Error: oops!", "stack-of.js:30:10"]
      }
      ],
      "data":{"fieldA":null,"fieldB":"win"}
      }
      """

  Scenario: Single Request With Nested Selections
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"r0f1":{"result":"win"}}}
      """
    And the following request comes in
      """json
      {"query":"{\n  fieldA\n  fieldB {\n    result\n  }\n}"}
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName":"BundledQuery",
      "query":"query BundledQuery {\n  r0f0: fieldA\n  r0f1: fieldB {\n    result\n  }\n}"
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"fieldB":{"result":"win"}}}
      """

  Scenario: Single Request With Alias
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"r0f1":"win"}}
      """
    And the following request comes in
      """json
      {"query":"{\n  fieldA\n  bee: fieldB\n}"}
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName":"BundledQuery",
      "query":"query BundledQuery {\n  r0f0: fieldA\n  r0f1: fieldB\n}"
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"bee":"win"}}
      """

  Scenario: Single Request With Hardcoded Arguments
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"r0f1":"win"}}
      """
    And the following request comes in
      """json
      {"query":"{\n  fieldA(id: 999)\n  bee: fieldB(id: \"xyz\")\n}"}
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName":"BundledQuery",
      "query":"query BundledQuery {\n  r0f0: fieldA(id: 999)\n  r0f1: fieldB(id: \"xyz\")\n}"
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"bee":"win"}}
      """

  Scenario: Single Request With Variables
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"r0f1":"win","r0f2":"score"}}
      """
    And the following request comes in
      """json
      {
      "operationName": "QueryOne",
      "query": "query QueryOne($userInput: String!) {\n  fieldA\n  bee: fieldB\n  see: fieldC(input: $userInput)\n}",
      "variables": {"userInput": "forUserInput"}
      }
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName": "BundledQuery",
      "query": "query BundledQuery($r0v0: String!) {\n  r0f0: fieldA\n  r0f1: fieldB\n  r0f2: fieldC(input: $r0v0)\n}",
      "variables": {"r0v0": "forUserInput"}
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"bee":"win","see":"score"}}
      """

  Scenario: Dual Request
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"r1f0":16,"r1f1":"score"}}
      """
    Given the following request comes in
      """json
      {
      "operationName": "QueryOne",
      "query": "query QueryOne($itemId: String, $filter: Boolean!) {\n  fieldA(filter: $filter, id: $itemId)\n}",
      "variables": {"itemId": "forItemId", "filter": true}
      }
      """
    And the following request comes in
      """json
      {
      "operationName":"QueryTwo",
      "query":"query QueryTwo($filter: String!) {\n  see: fieldC(filter: $filter)\n  fieldD(id: \"xyz\")\n}",
      "variables": {"filter": "forFilter"}
      }
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName":"BundledQuery",
      "query":"query BundledQuery($r0v0: String, $r0v1: Boolean!, $r1v0: String!) {\n  r0f0: fieldA(filter: $r0v1, id: $r0v0)\n  r1f0: fieldC(filter: $r1v0)\n  r1f1: fieldD(id: \"xyz\")\n}",
      "variables": {"r0v0": "forItemId", "r0v1": true, "r1v0": "forFilter"}
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15}}
      """
    And request number 2 should be responded with
      """json
      {"data":{"see":16,"fieldD":"score"}}
      """

  Scenario: Dual Request With Partial Error
    Given server responds "BundledQuery" with
      """json
      {
      "errors": [
      {
      "message": "oops!",
      "locations": [{"line":6,"column":3}],
      "path": ["r0f0"],
      "extensions": ["Error: oops!", "stack-of.js:30:10"]
      }
      ],
      "data": {"r0f0":null,"r0f1":"win","r1f0":15}
      }
      """
    And the following request comes in
      """json
      {"query":"{\n  fieldA\n  fieldB\n}"}
      """
    And the following request comes in
      """json
      {"query":"{\n  fieldC\n}"}
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName":"BundledQuery",
      "query":"query BundledQuery {\n  r0f0: fieldA\n  r0f1: fieldB\n  r1f0: fieldC\n}"
      }
      """
    And request number 1 should be responded with
      """json
      {
      "errors": [
      {
      "message": "oops!",
      "locations": [{"line":6,"column":3}],
      "path": ["fieldA"],
      "extensions": ["Error: oops!", "stack-of.js:30:10"]
      }
      ],
      "data":{"fieldA":null,"fieldB":"win"}
      }
      """
    And request number 2 should be responded with
      """json
      {"data":{"fieldC":15}}
      """

  Scenario: Dual Request With Errors and no data property
    Given server responds "BundledQuery" with
      """json
      {
      "errors": [
      {
      "message": "oops!",
      "locations": [{"line":6,"column":3}],
      "path": ["r0f0"],
      "extensions": ["Error: oops!", "stack-of.js:30:10"]
      }
      ]
      }
      """
    And server responds "QueryOne" with
      """json
      {"data":{"fieldA":15,"fieldB":"win"}}
      """
    And server responds "QueryTwo" with
      """json
      {"data":{"fieldC":"score"}}
      """
    And the following request comes in
      """json
      {
      "operationName": "QueryOne",
      "query":"query QueryOne {\n  fieldA\n  fieldB\n}"
      }
      """
    And the following request comes in
      """json
      {
      "operationName": "QueryTwo",
      "query":"query QueryTwo {\n  fieldC\n}"
      }
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName":"BundledQuery",
      "query":"query BundledQuery {\n  r0f0: fieldA\n  r0f1: fieldB\n  r1f0: fieldC\n}"
      }
      """
    And the server should also be called 1 times with
      """json
      {
      "operationName": "QueryOne",
      "query":"query QueryOne {\n  fieldA\n  fieldB\n}"
      }
      """
    And the server should also be called 1 times with
      """json
      {
      "operationName": "QueryTwo",
      "query":"query QueryTwo {\n  fieldC\n}"
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"fieldB":"win"}}
      """
    And request number 2 should be responded with
      """json
      {"data":{"fieldC":"score"}}
      """
