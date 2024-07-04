Feature: Embedding Fragments

  Scenario: Single Request With Fragment
    Given server responds "BundledQuery" with
      """json
      {"data":{"r0f0": {"color": "red", "id": "id-0", "name": "sample-name"}}}
      """
    And the following request comes in
      """json
      {
      "operationName":"QueryWithFragment",
      "query":"fragment xyz on Xyz {\n  id\n  name\n}\n\nquery QueryWithFragment($id: ID!) {\n  something(id: $id) {\n    id\n    color\n    ...xyz\n    weight\n  }\n}",
      "variables": {"id": "forId"}
      }
      """
    When the bundling interval is hit
    Then the server should be called with
      """json
      {
      "operationName":"BundledQuery",
      "query":"fragment r0fr0 on Xyz {\n  id\n  name\n}\n\nquery BundledQuery($r0v0: ID!) {\n  r0f0: something(id: $r0v0) {\n    id\n    color\n    ...r0fr0\n    weight\n  }\n}",
      "variables": {"r0v0": "forId"}
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
    And the following request comes in
      """json
      {
      "operationName":"One",
      "query":"fragment FooPartial on Foo {\n  id\n  name\n}\n\nfragment BarPartial on Bar {\n  shape\n}\n\nquery One($id: ID!) {\n  something(id: $id) {\n    id\n    color\n    ...BarPartial\n    weight\n    ...FooPartial\n  }\n}",
      "variables": {"id": "forId"}
      }
      """
    And the following request comes in
      """json
      {
      "operationName":"Two",
      "query":"query Two($id: ID!) {\n  something(id: $id) {\n    id\n    ...BazFields\n    packaging\n  }\n}\n\nfragment BazFields on Baz {\n  origin\n  expirationDate\n}",
      "variables": {"id": "fruitId-1"}
      }
      """
    When the bundling interval is hit
    Then the server should be called with
      """json
      {
      "operationName":"BundledQuery",
      "query":"fragment r0fr0 on Foo {\n  id\n  name\n}\n\nfragment r0fr1 on Bar {\n  shape\n}\n\nfragment r1fr0 on Baz {\n  origin\n  expirationDate\n}\n\nquery BundledQuery($r0v0: ID!, $r1v0: ID!) {\n  r0f0: something(id: $r0v0) {\n    id\n    color\n    ...r0fr1\n    weight\n    ...r0fr0\n  }\n  r1f0: something(id: $r1v0) {\n    id\n    ...r1fr0\n    packaging\n  }\n}",
      "variables": {"r0v0": "forId","r1v0": "fruitId-1"}
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
