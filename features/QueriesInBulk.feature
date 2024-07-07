Feature: Queries In Bulk

  Scenario: Single Request Without Alias
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"r0f1":"win"}}
      """
    And the following prettified request comes in
      """graphql
      {
        fieldA
        fieldB
      }
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

  Scenario: Single Request With Nested Selections
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"r0f1":{"result":"win"}}}
      """
    And the following prettified request comes in
      """graphql
      {
        fieldA
        fieldB {
          result
        }
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query named "BundledQuery" looking like this
      """graphql
      query BundledQuery {
        r0f0: fieldA
        r0f1: fieldB {
          result
        }
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"fieldB":{"result":"win"}}}
      """

  Scenario: Single Request With Alias
    Given server responds "BundledQuery" with
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

  Scenario: Single Request With Hardcoded Arguments
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"bee_r0f1":"win"}}
      """
    And the following prettified request comes in
      """graphql
      {
        fieldA(id: 999)
        bee: fieldB(id: "xyz")
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query named "BundledQuery" looking like this
      """graphql
      query BundledQuery {
        r0f0: fieldA(id: 999)
        bee_r0f1: fieldB(id: "xyz")
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"bee":"win"}}
      """

  Scenario: Single Request With Variables
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"bee_r0f1":"win","see_r0f2":"score"}}
      """
    And the following prettified request with variables '{"userInput": "forUserInput"}' and named "QueryOne" comes in
      """graphql
      query QueryOne($userInput: String!) {
        fieldA
        bee: fieldB
        see: fieldC(input: $userInput)
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query with variables '{"userInput_r0v0": "forUserInput"}' and named "BundledQuery" looking like this
      """graphql
      query BundledQuery($userInput_r0v0: String!) {
        r0f0: fieldA
        bee_r0f1: fieldB
        see_r0f2: fieldC(input: $userInput_r0v0)
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"fieldA":15,"bee":"win","see":"score"}}
      """

  Scenario: Dual Request
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0":15,"see_r1f0":16,"r1f1":"score"}}
      """
    Given the following prettified request with variables '{"itemId": "forItemId", "filter": true}' and named "QueryOne" comes in
      """graphql
      query QueryOne($itemId: String, $filter: Boolean!) {
        fieldA(filter: $filter, id: $itemId)
      }
      """
    And the following prettified request with variables '{"filter": "forFilter"}' and named "QueryTwo" comes in
      """graphql
      query QueryTwo($filter: String!) {
        see: fieldC(filter: $filter)
        fieldD(id: "xyz")
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query with variables '{"itemId_r0v0": "forItemId", "filter_r0v1": true, "filter_r1v0": "forFilter"}' and named "BundledQuery" looking like this
      """graphql
      query BundledQuery($itemId_r0v0: String, $filter_r0v1: Boolean!, $filter_r1v0: String!) {
        r0f0: fieldA(filter: $filter_r0v1, id: $itemId_r0v0)
        see_r1f0: fieldC(filter: $filter_r1v0)
        r1f1: fieldD(id: "xyz")
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
