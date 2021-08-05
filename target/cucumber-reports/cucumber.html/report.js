$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\pet.feature");
formatter.feature({
  "name": "Everything about your Pets",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Uploads pet image and empty image using petId",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@uploadImage"
    }
  ]
});
formatter.step({
  "name": "customer uploads an image with petId \u003cpetId\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "API response Status code \u003cstatusCode\u003e is returned",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "petId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "200"
      ]
    },
    {
      "cells": [
        "",
        "415"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Uploads pet image and empty image using petId",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@uploadImage"
    }
  ]
});
formatter.step({
  "name": "customer uploads an image with petId 1",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerUploadsAnImageWithUrlPetUp(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Uploads pet image and empty image using petId",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@uploadImage"
    }
  ]
});
formatter.step({
  "name": "customer uploads an image with petId ",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerUploadsAnImageWithUrlPetUp(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 415 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a new pet to the store",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addNewPet"
    }
  ]
});
formatter.step({
  "name": "add a new pet info to store",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerAddANewPetToStorePet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify petID 1 and name Browny created in the response",
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDefinition.verifyPetInfoCreatedInTheResponse(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a new pet to the store with not enough info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addNewPet"
    }
  ]
});
formatter.step({
  "name": "add a new pet with missing info to store",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerAddANewPetToStore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 405 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify API response errorCode 405 and errorMessage no data",
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDefinition.iVerifyAPIResponseErrorCodeAndErrorMessage(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "update an existing pet information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@updatePetInfo"
    }
  ]
});
formatter.step({
  "name": "update existing pet info",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.updateExistingPetInfoPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify petID 1 and name Moggie created in the response",
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDefinition.verifyPetInfoCreatedInTheResponse(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "update an existing pet with wrong information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@updatePetInfo"
    }
  ]
});
formatter.step({
  "name": "update existing pet with wrong info",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.updateExistingPetWrongInfoPet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 405 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "customer finds Pets by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FindPetByStatus"
    }
  ]
});
formatter.step({
  "name": "customer finds Pets by status \u003cstatus\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "API response Status code \u003cstatusCode\u003e is returned",
  "keyword": "Then "
});
formatter.step({
  "name": "verify API response is not empty",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "statusCode"
      ]
    },
    {
      "cells": [
        "available",
        "200"
      ]
    },
    {
      "cells": [
        "pending",
        "200"
      ]
    },
    {
      "cells": [
        "sold",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "customer finds Pets by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FindPetByStatus"
    }
  ]
});
formatter.step({
  "name": "customer finds Pets by status available",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerFindsPetsByStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify API response is not empty",
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDefinition.verifyAPIResponseIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "customer finds Pets by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FindPetByStatus"
    }
  ]
});
formatter.step({
  "name": "customer finds Pets by status pending",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerFindsPetsByStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify API response is not empty",
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDefinition.verifyAPIResponseIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "customer finds Pets by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FindPetByStatus"
    }
  ]
});
formatter.step({
  "name": "customer finds Pets by status sold",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerFindsPetsByStatus(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify API response is not empty",
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDefinition.verifyAPIResponseIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find pet info by correct petId",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FindPetById"
    }
  ]
});
formatter.step({
  "name": "customer get pet info by id 1",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerGetPetInfoByIdPet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify API response is not empty and pet id 1",
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDefinition.iVerifyAPIResponseIsNotEmpty(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find pet info by incorrect petId",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FindPetById"
    }
  ]
});
formatter.step({
  "name": "customer get pet info by id 10983",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerGetPetInfoByIdPet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 404 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify API response errorCode 1 and errorMessage Pet not found",
  "keyword": "And "
});
formatter.match({
  "location": "PetStepDefinition.iVerifyAPIResponseErrorCodeAndErrorMessage(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "updates a pet in store with some valid and invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@updatePetInfo"
    }
  ]
});
formatter.step({
  "name": "update a pet info with name \u003cname\u003e  and status \u003cstatus\u003e with petId \u003cpetId\u003e in the store",
  "keyword": "When "
});
formatter.step({
  "name": "API response Status code \u003cstatusCode\u003e is returned",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "petId",
        "name",
        "status",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "Guffy",
        "available",
        "200"
      ]
    },
    {
      "cells": [
        "444",
        "Guffy",
        "available",
        "404"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "updates a pet in store with some valid and invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@updatePetInfo"
    }
  ]
});
formatter.step({
  "name": "update a pet info with name Guffy  and status available with petId 1 in the store",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerUpdateAPetInStoreWithSomeDataPet(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "updates a pet in store with some valid and invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@updatePetInfo"
    }
  ]
});
formatter.step({
  "name": "update a pet info with name Guffy  and status available with petId 444 in the store",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerUpdateAPetInStoreWithSomeDataPet(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 404 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "delete a pet information with valid and invalid petId and verify errorCode",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deletePet"
    }
  ]
});
formatter.step({
  "name": "delete the pet info with id \u003cpetId\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "API response Status code \u003cstatusCode\u003e is returned",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "petId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "200"
      ]
    },
    {
      "cells": [
        "",
        "405"
      ]
    },
    {
      "cells": [
        "0",
        "404"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "delete a pet information with valid and invalid petId and verify errorCode",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deletePet"
    }
  ]
});
formatter.step({
  "name": "delete the pet info with id 1",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerDeleteThePetInfoPet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 200 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "delete a pet information with valid and invalid petId and verify errorCode",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deletePet"
    }
  ]
});
formatter.step({
  "name": "delete the pet info with id ",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerDeleteThePetInfoPet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 405 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Get pet store base uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PetStepDefinition.getPetStoreBaseUri()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "delete a pet information with valid and invalid petId and verify errorCode",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@deletePet"
    }
  ]
});
formatter.step({
  "name": "delete the pet info with id 0",
  "keyword": "When "
});
formatter.match({
  "location": "PetStepDefinition.customerDeleteThePetInfoPet(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API response Status code 404 is returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PetStepDefinition.iShouldBeReturnedWithABasketResponse(int)"
});
formatter.result({
  "status": "passed"
});
});