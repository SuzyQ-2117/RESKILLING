package com.qa.task1.rest;

import com.qa.task1.entities.Person;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PersonController {
    private List<Person> people = new ArrayList<>();

    @GetMapping("/getAll")
    public List<Person> getAll() {
        return this.people;
    }

    @PostMapping("/create")
    public Person createPerson(@RequestBody Person person) {
        this.people.add(person);
        return this.people.get(this.people.size() - 1);
    }

    @DeleteMapping("/remove")
    public Person removePerson(@PathVariable int id) {
        return this.people.remove(id);
    }
}


