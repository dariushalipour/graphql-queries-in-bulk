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
      "query":"query BundledQuery($r0v0: ID!) {\n  r0f0: something(id: $r0v0) {\n    id\n    color\n    name\n    weight\n  }\n}",
      "variables": {"r0v0": "forId"}
      }
      """
    And request number 1 should be responded with
      """json
      {"data":{"something": {"color": "red", "id": "id-0", "name": "sample-name"}}}
      """
