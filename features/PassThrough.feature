Feature: Pass Through / Bypass Bundling

  Scenario: When the request is not a query, bypass the bundler
    Given server responds "DismissNotification" with
      """json
      {"data":{}}
      """
    And the following request comes in
      """json
      {
      "operationName":"DismissNotification",
      "query":"mutation DismissNotification($id: ID!) {\n  dismissNotification(id: $id)\n}"
      }
      """
    When the bundling interval is hit
    Then the server should be called with
      """json
      {
      "operationName":"DismissNotification",
      "query":"mutation DismissNotification($id: ID!) {\n  dismissNotification(id: $id)\n}"
      }
      """
