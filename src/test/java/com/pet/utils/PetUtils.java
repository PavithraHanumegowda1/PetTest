package com.pet.utils;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.io.File;

import static io.restassured.RestAssured.given;

public class PetUtils {
    private static final String API_KEY = "1234567";
    private static final String BASE_URL = "https://petstore.swagger.io/v2";
    private static final String PET_IMAGE = "src\\test\\resources\\pet.jpg";
    RequestSpecification request;

    public void getBaseUri() {
        request = given().baseUri(BASE_URL)
                .contentType("application/json");
    }

    public Response getRequest(String status) {
        return given().log().all().relaxedHTTPSValidation()
                .headers("status", status)
                .header("Accept", "application/json")
                .header("Content-Type", "application/json")
                .get(BASE_URL + "/pet" + "/findByStatus");
    }

    public Response postImageRequest(String id) {
        File file = new File(PET_IMAGE);
        return given().log().all().relaxedHTTPSValidation()
                .pathParam("petId", id)
                .multiPart("file", file, "multipart/form-data")
                .post(BASE_URL + "/pet" + "/{petId}" + "/uploadImage");
    }

    public Response postRequest(String requestBody) {
        return given().log().all().relaxedHTTPSValidation()
                .header("Content-Type", "application/json")
                .body(requestBody)
                .post(BASE_URL + "/pet");
    }

    public Response putRequest(String requestBody) {
        return given().log().all().relaxedHTTPSValidation()
                .header("Content-Type", "application/json")
                .body(requestBody)
                .put(BASE_URL + "/pet");
    }

    public Response getRequestById(String id) {
        return given().log().all().relaxedHTTPSValidation()
                .header("Accept", "application/json")
                .pathParam("petId", id)
                .get(BASE_URL + "/pet" + "/{petId}");
    }

    public Response postRequestUpdatePetInfo(String id, String name, String status) {
        return given().log().all().relaxedHTTPSValidation()
                .header("Content-Type", "application/json")
                .pathParam("petId", id)
                .queryParam("name", name)
                .queryParam("status", status)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .post(BASE_URL + "/pet" + "/{petId}");
    }

    public Response deletePet(String id) {
        return given().log().all().relaxedHTTPSValidation()
                .pathParam("petId", id)
                .queryParam("api_key", API_KEY)
                .header("Content-Type", "application/json")
                .delete(BASE_URL + "/pet" + "/{petId}");
    }

}
