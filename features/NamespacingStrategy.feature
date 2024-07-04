Feature: Namespacing Strategy Options

  Scenario: With Operation Name
    Given namespacingStrategy is set to "with-operation-name"
    And server responds "BundledQuery_One" with
      """json
      {"data":{"One_r0f0":15,"One_r0f1":{"id":"another-id"},"One_r0f2":"win"}}
      """
    And the following prettified request with variables '{"id": "some-id"}' and named "One" comes in
      """graphql
      fragment SubsetFields on Entity {
        id
      }
      
      query One($id: ID!) {
        fieldA(id: $id)
        fieldB {
          ...SubsetFields
        }
        fieldC
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query with variables '{"One_r0v0": "some-id"}' and named "BundledQuery_One" looking like this
      """graphql
      fragment One_SubsetFields_r0fr0 on Entity {
        id
      }
      
      query BundledQuery_One($One_r0v0: ID!) {
        One_r0f0: fieldA(id: $One_r0v0)
        One_r0f1: fieldB {
          ...One_SubsetFields_r0fr0
        }
        One_r0f2: fieldC
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
    Then the server should be called with a query named "BundledQuery" looking like this
      """graphql
      query BundledQuery {
        r0f0: fieldA
        r0f1: fieldB
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"fieldB":"win"}}
      """
