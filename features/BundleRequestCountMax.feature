Feature: Keep Bundles Less Than This Many Queries

  Scenario: Executes before hitting the interval
    Given bundleRequestCountMax is set to 2
    And server responds "BundledQuery" with
      """json
      {"data":{ "r0f0": 15, "r0f1":"win", "r1f0": 10, "r2f0": true }}
      """
    And the following request comes in
      """json
      {"query":"{\n  fieldA\n  fieldB\n}"}
      """
    And the following request comes in
      """json
      {"query":"{\n  fieldA\n}"}
      """
    Then the bundled request #1 should look like this
      """json
      {
      "operationName":"BundledQuery",
      "query":"query BundledQuery {\n  r0f0: fieldA\n  r0f1: fieldB\n  r1f0: fieldA\n}"
      }
      """
    And request number 1 should be responded with
      """json
      {"data": {"fieldA": 15, "fieldB": "win"}}
      """
    And request number 2 should be responded with
      """json
      {"data": {"fieldA": 10}}
      """

  Scenario: Breaks the requests into two bundles
    Given bundleRequestCountMax is set to 3
    And namespacingStrategy is set to "with-operation-name"
    And server responds "BundledQuery_QueryOne_QueryTwo_QueryThree" with
      """json
      {"data":{
        "QueryOne_r0f0": 15,
        "QueryOne_r0f1":"win",
        "QueryTwo_r1f0": 10,
        "QueryThree_r2f0": true
      }}
      """
    And server responds "BundledQuery_Four_Five" with
      """json
      {"data":{
        "Four_r0f0": 20,
        "Four_r0f1":"score",
        "Five_r1f0": 30,
        "Five_r1f1": false
      }}
      """
    And the following request comes in
      """json
      {"operationName":"QueryOne", "query":"query QueryOne {\n  fieldA\n  fieldB\n}"}
      """
    And the following request comes in
      """json
      {"operationName":"QueryTwo", "query":"query QueryTwo {\n  fieldA\n}"}
      """
    And the following request comes in
      """json
      {"operationName":"QueryThree", "query":"query QueryThree {\n  fieldA\n}"}
      """
    And the following request comes in
      """json
      {"operationName":"Four", "query":"query Four {\n  fieldA\n  fieldB\n}"}
      """
    And the following request comes in
      """json
      {"operationName":"Five", "query":"query Five {\n  fieldA\n  fieldB\n}"}
      """
    When the bundling interval is hit
    Then the bundled request #1 should look like this
      """json
      {
      "operationName":"BundledQuery_QueryOne_QueryTwo_QueryThree",
      "query":"query BundledQuery_QueryOne_QueryTwo_QueryThree {\n  QueryOne_r0f0: fieldA\n  QueryOne_r0f1: fieldB\n  QueryTwo_r1f0: fieldA\n  QueryThree_r2f0: fieldA\n}"
      }
      """
    And the bundled request #2 should look like this
      """json
      {
      "operationName":"BundledQuery_Four_Five",
      "query":"query BundledQuery_Four_Five {\n  Four_r0f0: fieldA\n  Four_r0f1: fieldB\n  Five_r1f0: fieldA\n  Five_r1f1: fieldB\n}"
      }
      """
    And request number 1 should be responded with
      """json
      {"data": {"fieldA": 15, "fieldB": "win"}}
      """
    And request number 2 should be responded with
      """json
      {"data": {"fieldA": 10}}
      """
    And request number 3 should be responded with
      """json
      {"data": {"fieldA": true}}
      """
    And request number 4 should be responded with
      """json
      {"data": {"fieldA": 20, "fieldB": "score"}}
      """
    And request number 5 should be responded with
      """json
      {"data": {"fieldA": 30, "fieldB": false}}
      """
