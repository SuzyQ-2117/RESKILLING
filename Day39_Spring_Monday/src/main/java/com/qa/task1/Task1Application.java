package com.qa.task1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication

public class Task1Application {
	public static void main(String[] args) {
		SpringApplication.run(Task1Application.class, args);
	}

	@GetMapping("/hello")
	public String greeting() {
		return "Hello, World!";
	}

}

