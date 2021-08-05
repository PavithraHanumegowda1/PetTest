Feature: Everything about your Pets

  Background:
    Given Get pet store base uri

  @uploadImage
  Scenario Outline: Uploads pet image and empty image using petId
    When customer uploads an image with petId <petId>
    Then API response Status code <statusCode> is returned
    Examples:
      | petId | statusCode |
      | 1     | 200        |
      |       | 415        |

  @addNewPet
  Scenario: Add a new pet to the store
    When add a new pet info to store
    Then API response Status code 200 is returned
    And verify petID 1 and name Browny created in the response

  @addNewPet
  Scenario: Add a new pet to the store with not enough info
    When add a new pet with missing info to store
    Then API response Status code 405 is returned
    And I verify API response errorCode 405 and errorMessage no data

  @updatePetInfo
  Scenario: update an existing pet information
    When update existing pet info
    Then API response Status code 200 is returned
    And verify petID 1 and name Moggie created in the response

  @updatePetInfo
  Scenario: update an existing pet with wrong information
    When update existing pet with wrong info
    Then API response Status code 405 is returned

  @FindPetByStatus
  Scenario Outline: customer finds Pets by status
    When customer finds Pets by status <status>
    Then API response Status code <statusCode> is returned
    And verify API response is not empty
    Examples:
      | status    | statusCode |
      | available | 200        |
      | pending   | 200        |
      | sold      | 200        |

  @FindPetById
  Scenario: Find pet info by correct petId
    When customer get pet info by id 1
    Then API response Status code 200 is returned
    And I verify API response is not empty and pet id 1

  @FindPetById
  Scenario: Find pet info by incorrect petId
    When customer get pet info by id 10983
    Then API response Status code 404 is returned
    And I verify API response errorCode 1 and errorMessage Pet not found

  @updatePetInfo
  Scenario Outline: updates a pet in store with some valid and invalid data
    When update a pet info with name <name>  and status <status> with petId <petId> in the store
    Then API response Status code <statusCode> is returned
    Examples:
      | petId | name  | status    | statusCode |
      | 1     | Guffy | available | 200        |
      | 444   | Guffy | available | 404        |

  @deletePet
  Scenario Outline: delete a pet information with valid and invalid petId and verify errorCode
    When delete the pet info with id <petId>
    Then API response Status code <statusCode> is returned
    Examples:
      | petId | statusCode |
      | 1     | 200        |
      |       | 405        |
      | 0     | 404        |