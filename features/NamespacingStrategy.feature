Feature: Namespacing Strategy Options

  Scenario: With Operation Name
    Given namespacingStrategy is set to "with-operation-name"
    And server responds "BundledQuery_One" with
      """json
      {"data":{"One_r0f0":15,"One_r0f1":{"id":"another-id"},"One_r0f2":"win"}}
      """
    And the following request comes in
      """json
      {
      "operationName": "One",
      "query":"fragment SubsetFields on Entity {\n  id\n}\n\nquery One($id: ID!) {\n  fieldA(id: $id)\n  fieldB {\n    ...SubsetFields\n  }\n  fieldC\n}",
      "variables":{"id": "some-id"}
      }
      """
    When the bundling interval is hit
    Then the bundled request should look like this
      """json
      {
      "operationName":"BundledQuery_One",
      "query":"fragment One_SubsetFields_r0fr0 on Entity {\n  id\n}\n\nquery BundledQuery_One($One_r0v0: ID!) {\n  One_r0f0: fieldA(id: $One_r0v0)\n  One_r0f1: fieldB {\n    ...One_SubsetFields_r0fr0\n  }\n  One_r0f2: fieldC\n}",
      "variables":{"One_r0v0": "some-id"}
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"fieldB":{"id":"another-id"},"fieldC":"win"}}
      """

  Scenario: Asked for with-operation-name, but the source query had no name
    Given namespacingStrategy is set to "with-operation-name"
    And server responds "BundledQuery" with
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
