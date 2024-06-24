package com.qa;
import com.qa.model.Animal;
import com.qa.model.Cat;
import com.qa.model.Dog;
import com.qa.model.Rabbit;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Cat cat1 = new Cat("Smudge", 10);
        Cat cat2 = new Cat("Ollie", 3);
        Dog dog1 = new Dog("Storm", 2);
        Dog dog2 = new Dog("Travis", 2);
        Rabbit rabbit1 = new Rabbit("Thumper", 6);
        Rabbit rabbit2 = new Rabbit("Laila", 3);

        ArrayList<Animal> animalList = new ArrayList<Animal>();
        animalList.add(cat1);
        animalList.add(cat2);
        animalList.add(dog1);
        animalList.add(dog2);
        animalList.add(rabbit1);
        animalList.add(rabbit2);


//        ArrayList<Cat> catList = new ArrayList<Cat>();
//        catList.add(c);


        System.out.println("For Loop on ArrayList");
        for (Animal animal : animalList) {
            System.out.println(animal);
        }

        System.out.println("-------------------");

        HashSet<Animal> set = new HashSet<>();
        set.add(cat1);
        set.add(cat2);
        set.add(dog1);
        set.add(dog2);
        set.add(rabbit1);
        set.add(rabbit2);

        Map<String, Animal> animalMap = new HashMap<>();
        animalMap.put(cat1.getName(), cat1);
        animalMap.put(cat2.getName(), cat2);
        animalMap.put(dog1.getName(), dog1);
        animalMap.put(dog2.getName(), dog2);
        animalMap.put(rabbit1.getName(), rabbit1);
        animalMap.put(rabbit2.getName(), rabbit2);

        Map<Animal, String> animalMap2 = new HashMap<>();
        animalMap2.put(cat1, "A cat");
        animalMap2.put(cat2, "Another cat");
        animalMap2.put(dog1, "A dog");
        animalMap2.put(dog2, "Another dog");
        animalMap2.put(rabbit1, "A rabbit");
        animalMap2.put(rabbit2, "Another rabbit");

        for (Map.Entry<Animal, String> s : animalMap2.entrySet()) {
            System.out.println(s);
        }
    }
}