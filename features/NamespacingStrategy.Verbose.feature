Feature: Namespacing Strategy Options: Verbose

  Scenario: With Operation Name
    Given namespacingStrategy is set to "verbose"
    And server responds "BundledQuery_One" with
      """json
      {"data":{"One_hey_r0f0":15,"One_r0f1":{"id":"another-id"},"One_r0f2":"win"}}
      """
    And the following prettified request with variables '{"id": "some-id"}' and named "One" comes in
      """graphql
      fragment SubsetFields on Entity {
        id
      }
      
      query One($id: ID!) {
        hey: fieldA(id: $id)
        fieldB {
          ...SubsetFields
        }
        fieldC
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query with variables '{"One_id_r0v0": "some-id"}' and named "BundledQuery_One" looking like this
      """graphql
      fragment One_SubsetFields_r0fr0 on Entity {
        id
      }
      
      query BundledQuery_One($One_id_r0v0: ID!) {
        One_hey_r0f0: fieldA(id: $One_id_r0v0)
        One_r0f1: fieldB {
          ...One_SubsetFields_r0fr0
        }
        One_r0f2: fieldC
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"hey":15,"fieldB":{"id":"another-id"},"fieldC":"win"}}
      """

  Scenario: Asked for verbose, but the source query had no name
    Given namespacingStrategy is set to "verbose"
    And server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"bee_r0f1":"win"}}
      """
    And the following prettified request comes in
      """graphql
      {
        fieldA
        bee: fieldB
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query named "BundledQuery" looking like this
      """graphql
      query BundledQuery {
        r0f0: fieldA
        bee_r0f1: fieldB
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"bee":"win"}}
      """
