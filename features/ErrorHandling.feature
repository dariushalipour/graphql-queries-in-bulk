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
    And the following prettified request comes in
      """graphql
      {
        fieldA
        fieldB
      }
      """
    When the bundling interval is hit
    Then the bundled request #1 should be named "BundledQuery" and look like this
      """graphql
      query BundledQuery {
        r0f0: fieldA
        r0f1: fieldB
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
    And the following prettified request comes in
      """graphql
      {
        fieldA
        fieldB
      }
      """
    And the following prettified request comes in
      """json
      {
        fieldC
      }
      """
    When the bundling interval is hit
    Then the bundled request #1 should be named "BundledQuery" and look like this
      """graphql
      query BundledQuery {
        r0f0: fieldA
        r0f1: fieldB
        r1f0: fieldC
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
    And the following prettified request named "QueryOne" comes in
      """graphql
      query QueryOne {
        fieldA
        fieldB
      }
      """
    And the following prettified request named "QueryTwo" comes in
      """graphql
      query QueryTwo {
        fieldC
      }
      """
    When the bundling interval is hit
    Then the bundled request #1 should be named "BundledQuery" and look like this
      """graphql
      query BundledQuery {
        r0f0: fieldA
        r0f1: fieldB
        r1f0: fieldC
      }
      """
    And the server should also be called 1 times with a query named "QueryOne" looking like this
      """graphql
      query QueryOne {
        fieldA
        fieldB
      }
      """
    And the server should also be called 1 times with a query named "QueryTwo" looking like this
      """graphql
      query QueryTwo {
        fieldC
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
