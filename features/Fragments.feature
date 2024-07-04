Feature: Embedding Fragments

  Scenario: Single Request With Fragment
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0": {"color": "red", "id": "id-0", "name": "sample-name"}}}
      """
    And the following prettified request with variables '{"id": "forId"}' and named "QueryWithFragment" comes in
      """graphql
      fragment xyz on Xyz {
        id
        name
      }
      
      query QueryWithFragment($id: ID!) {
        something(id: $id) {
          id
          color
          ...xyz
          weight
        }
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query with variables '{"r0v0": "forId"}' and named "BundledQuery" looking like this
      """graphql
      fragment r0fr0 on Xyz {
        id
        name
      }
      
      query BundledQuery($r0v0: ID!) {
        r0f0: something(id: $r0v0) {
          id
          color
          ...r0fr0
          weight
        }
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"something": {"color": "red", "id": "id-0", "name": "sample-name"}}}
      """

  Scenario: Two Requests With 3 Fragments in Total
    Given server responds "BundledQuery" with
      """json
      {
      "data":{
        "r0f0": {"color": "red", "id": "id-0", "name": "sample-name", "weight": 5, "shape": "hexagonal"},
        "r1f0": {"origin": "there", "id": "id-0", "expirationDate": "1999-01-01", "packaging": "none"}
        }
      }
      """
    And the following prettified request with variables '{"id": "forId"}' and named "One" comes in
      """graphql
      fragment FooPartial on Foo {
        id
        name
      }
      
      fragment BarPartial on Bar {
        shape
      }
      
      query One($id: ID!) {
        something(id: $id) {
          id
          color
          ...BarPartial
          weight
          ...FooPartial
        }
      }
      """
    And the following prettified request with variables '{"id": "fruitId-1"}' and named "Two" comes in
      """graphql
      query Two($id: ID!) {
        something(id: $id) {
          id
          ...BazFields
          packaging
        }
      }
      
      fragment BazFields on Baz {
        origin
        expirationDate
      }
      """
    When the bundling interval is hit
    Then the server should be called with a query with variables '{"r0v0": "forId","r1v0": "fruitId-1"}' and named "BundledQuery" looking like this
      """graphql
      fragment r0fr0 on Foo {
        id
        name
      }
      
      fragment r0fr1 on Bar {
        shape
      }
      
      fragment r1fr0 on Baz {
        origin
        expirationDate
      }
      
      query BundledQuery($r0v0: ID!, $r1v0: ID!) {
        r0f0: something(id: $r0v0) {
          id
          color
          ...r0fr1
          weight
          ...r0fr0
        }
        r1f0: something(id: $r1v0) {
          id
          ...r1fr0
          packaging
        }
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"something": {"color": "red", "id": "id-0", "name": "sample-name", "weight": 5, "shape": "hexagonal"}}}
      """
    And request number 2 should be responded with
      """json
      {"data":{"something": {"origin": "there", "id": "id-0", "expirationDate": "1999-01-01", "packaging": "none"}}}
      """
