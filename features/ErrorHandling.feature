Feature: Error Handling

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
