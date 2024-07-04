Feature: Keep Bundles Less Than This Many Queries

  Scenario: Executes before hitting the interval
    Given bundleRequestCountMax is set to 2
    And server responds "BundledQuery" with
      """json
      {"data":{ "r0f0": 15, "r0f1":"win", "r1f0": 10, "r2f0": true }}
      """
    And the following prettified request comes in
      """graphql
      {
        fieldA
        fieldB
      }
      """
    And the following prettified request comes in
      """graphql
      {
        fieldA
      }
      """
    Then the bundled request #1 should be named "BundledQuery" and look like this
      """graphql
      query BundledQuery {
        r0f0: fieldA
        r0f1: fieldB
        r1f0: fieldA
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
    And the following prettified request named "QueryOne" comes in
      """graphql
      query QueryOne {
        fieldA
        fieldB
      }
      """
    And the following prettified request named "QueryTwo" comes in
      """graphql
      query QueryTwo {
        fieldA
      }
      """
    And the following prettified request named "QueryThree" comes in
      """graphql
      query QueryThree {
        fieldA
      }
      """
    And the following prettified request named "Four" comes in
      """graphql
      query Four {
        fieldA
        fieldB
      }
      """
    And the following prettified request named "Five" comes in
      """graphql
      query Five {
        fieldA
        fieldB
      }
      """
    When the bundling interval is hit
    Then the bundled request #1 should be named "BundledQuery_QueryOne_QueryTwo_QueryThree" and look like this
      """graphql
      query BundledQuery_QueryOne_QueryTwo_QueryThree {
        QueryOne_r0f0: fieldA
        QueryOne_r0f1: fieldB
        QueryTwo_r1f0: fieldA
        QueryThree_r2f0: fieldA
      }
      """
    And the bundled request #2 should be named "BundledQuery_Four_Five" and look like this
      """graphql
      query BundledQuery_Four_Five {
        Four_r0f0: fieldA
        Four_r0f1: fieldB
        Five_r1f0: fieldA
        Five_r1f1: fieldB
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
