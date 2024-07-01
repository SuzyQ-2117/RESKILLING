package com.example.Person.rest;

import com.example.Person.entities.Person;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
@Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD,
        scripts = {"classpath:person-schema.sql", "classpath:person-data.sql"})
public class PersonControllerMvcTest {
    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper mapper;

    @Test
    void testCreate() throws Exception {
        Person newPerson = new Person("Bob", 42, "Builder");
        String newPersonAsJson = this.mapper.writeValueAsString(newPerson);
        RequestBuilder mockRequest = MockMvcRequestBuilders.post("/create").contentType(MediaType.APPLICATION_JSON).content(newPersonAsJson);

        ResultMatcher checkStatus = MockMvcResultMatchers.status().isOk();

        Person createdPerson = new Person(1,"Bob", 42, "Builder");
        String createdPersonAsJson = this.mapper.writeValueAsString(createdPerson);
        ResultMatcher checkBody = MockMvcResultMatchers.content().json(createdPersonAsJson);

        this.mvc.perform(mockRequest).andExpect(checkStatus).andExpect(checkBody);
    }

    @Test
    void testRead() throws Exception {
        int id = 1;
        RequestBuilder mockRequest = MockMvcRequestBuilders.get("/get/" + id);

        ResultMatcher checkStatus = MockMvcResultMatchers.status().isOk();

        Person existing = new Person("Pat", 53, "Postman");
        String existingPersonAsJson = this.mapper.writeValueAsString(existing);
        ResultMatcher checkBody = MockMvcResultMatchers.content().json(existingPersonAsJson);

        this.mvc.perform(mockRequest).andExpect(checkStatus).andExpect(checkBody);
    }

    @Test
    void testUpdate() throws Exception {
        int id = 1;
        Person updated = new Person("Top", 50, "Cat");

        RequestBuilder mockRequest = MockMvcRequestBuilders.patch("/update/" + id)
                .queryParam("name", updated.getName())
                .queryParam("age", String.valueOf(updated.getAge()))
                .queryParam("job", updated.getJob());

        ResultMatcher checkStatus = MockMvcResultMatchers.status().isOk();

        String updatedPersonAsJson = this.mapper.writeValueAsString(updated);
        ResultMatcher checkBody = MockMvcResultMatchers.content().json(updatedPersonAsJson);

        this.mvc.perform(mockRequest).andExpect(checkStatus).andExpect(checkBody);
    }

//    @Test
//    void testUpdate() throws Exception {
//
//        Person updated = new Person(1, "Betty", 89, "Stripper");
//
//        RequestBuilder mockRequest = MockMvcRequestBuilders.patch("/person/update/1")
//                .queryParam("name", updated.getName())
//                .queryParam("age", String.valueOf(updated.getAge()))
//                .queryParam("job", updated.getJob());
//        // Define a matcher to check if the HTTP status is OK (200)
//        ResultMatcher checkStatus = MockMvcResultMatchers.status().isOk();
//        // Convert the expected Person object to JSON format
//        String updatedPersonAsJson = this.mapper.writeValueAsString(updated);
//        // Define a matcher to check if the response body matches the expected JSON
//        ResultMatcher checkBody = MockMvcResultMatchers.content().json(updatedPersonAsJson);
//        // Perform the mock request using MockMvc and validate the expected results
//        this.mvc.perform(mockRequest)
//                .andExpect(checkStatus)
//                .andExpect(checkBody);
//    }

    @Test
    void testDelete() throws Exception {
        int id = 1;
        RequestBuilder mockRequest = MockMvcRequestBuilders.delete("/delete/" + id);

        ResultMatcher checkStatus = MockMvcResultMatchers.status().isOk();

        Person existing = new Person("Pat", 50, "Postman");
        String existingPersonAsJson = this.mapper.writeValueAsString(existing);
        ResultMatcher checkBody = MockMvcResultMatchers.content().json(existingPersonAsJson);

        this.mvc.perform(mockRequest).andExpect(checkBody).andExpect(checkStatus);
    }
}
