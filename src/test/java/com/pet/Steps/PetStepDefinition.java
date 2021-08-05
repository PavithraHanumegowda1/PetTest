package com.pet.Steps;

import com.pet.utils.PetUtils;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.not;

public class PetStepDefinition {
    private static final String PET_JSON = "src\\test\\resources\\jsonFileInput\\pet.json";
    private static final String PET1_JSON = "src\\test\\resources\\jsonFileInput\\pet1.json";
    private static final String PET2_JSON = "src\\test\\resources\\jsonFileInput\\pet2.json";
    Response response;

    public PetStepDefinition() {
    }

    @Given("Get pet store base uri")
    public void getPetStoreBaseUri() {
        PetUtils pet = new PetUtils();
        pet.getBaseUri();
    }

    @Given("^customer finds Pets by status (.*)$")
    public void customerFindsPetsByStatus(String status) {
        PetUtils pet = new PetUtils();
        response = pet.getRequest(status);
    }

    @When("API response Status code (.*) is returned")
    public void iShouldBeReturnedWithABasketResponse(int responseCode) {
        response.then().assertThat().log().ifError().statusCode(responseCode);
    }

    @When("customer uploads an image with petId (.*)")
    public void customerUploadsAnImageWithUrlPetUp(String id) {
        PetUtils pet = new PetUtils();
        response = pet.postImageRequest(id);
    }

    @When("add a new pet info to store")
    public void customerAddANewPetToStorePet() throws IOException {
        PetUtils pet = new PetUtils();
        String jsonBody = generateStringFromResource(PET_JSON);
        response = pet.postRequest(jsonBody);
    }

    @When("add a new pet with missing info to store")
    public void customerAddANewPetToStore() throws IOException {
        PetUtils pet = new PetUtils();
        String jsonBody = generateStringFromResource(PET2_JSON);
        response = pet.postRequest(jsonBody);
    }

    public String generateStringFromResource(String path) throws IOException {
        return new String(Files.readAllBytes(Paths.get(path)));
    }

    @When("update existing pet info")
    public void updateExistingPetInfoPet() throws IOException {
        String jsonBody = generateStringFromResource(PET1_JSON);
        PetUtils pet = new PetUtils();
        response = pet.putRequest(jsonBody);
    }

    @When("update existing pet with wrong info")
    public void updateExistingPetWrongInfoPet() throws IOException {
        String jsonBody = generateStringFromResource(PET2_JSON);
        PetUtils pet = new PetUtils();
        response = pet.putRequest(jsonBody);
    }

    @When("customer get pet info by id (.*)")
    public void customerGetPetInfoByIdPet(String petId) throws IOException {
        customerAddANewPetToStorePet();
        PetUtils pet = new PetUtils();
        response = pet.getRequestById(petId);
    }

    @And("I verify API response is not empty and pet id (.*)")
    public void iVerifyAPIResponseIsNotEmpty(int petId) {
        response.then().assertThat().body(not(empty()));
        response.then().assertThat()
                .body("id", equalTo(petId));
    }

    @When("update a pet info with name (.*)  and status (.*) with petId (.*) in the store")
    public void customerUpdateAPetInStoreWithSomeDataPet(String name, String status, String petId) {
        PetUtils pet = new PetUtils();
        response = pet.postRequestUpdatePetInfo(petId, name, status);
    }

    @When("delete the pet info with id (.*)")
    public void customerDeleteThePetInfoPet(String petId) {
        PetUtils pet = new PetUtils();
        response = pet.deletePet(petId);
    }

    @And("verify petID (.*) and name (.*) created in the response")
    public void verifyPetInfoCreatedInTheResponse(int petId, String name) {
        response.then().assertThat()
                .body("id", equalTo(petId))
                .body("name", equalTo(name));
    }

    @And("I verify API response errorCode (.*) and errorMessage (.*)")
    public void iVerifyAPIResponseErrorCodeAndErrorMessage(int errorCode, String errorMessage) {
        assertThat(response.path("code"), equalTo(errorCode));
        assertThat(response.path("message"), equalTo(errorMessage));
    }

    @And("verify API response is not empty")
    public void verifyAPIResponseIsNotEmpty() {
        response.then().assertThat().body(not(empty()));
    }

}



