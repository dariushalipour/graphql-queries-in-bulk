Feature: Namespacing Strategy Options: Sufficient

  Scenario: With Operation Name
    Given namespacingStrategy is set to "sufficient"
    And server responds "BundledQuery" with
      """json
      {"data":{"hey_r0f0":15,"bee_r0f1":{"id":"another-id"},"r0f2":"win"}}
      """
    And the following prettified request with variables '{"id": "some-id"}' and named "One" comes in
      """graphql
      fragment SubsetFields on Entity {
        id
      }
      
      query One($id: ID!) {
        hey: fieldA(id: $id)
        bee: fieldB {
          ...SubsetFields
        }
        fieldC
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query with variables '{"id_r0v0": "some-id"}' and named "BundledQuery" looking like this
      """graphql
      fragment SubsetFields_r0fr0 on Entity {
        id
      }
      
      query BundledQuery($id_r0v0: ID!) {
        hey_r0f0: fieldA(id: $id_r0v0)
        bee_r0f1: fieldB {
          ...SubsetFields_r0fr0
        }
        r0f2: fieldC
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"hey":15,"bee":{"id":"another-id"},"fieldC":"win"}}
      """
