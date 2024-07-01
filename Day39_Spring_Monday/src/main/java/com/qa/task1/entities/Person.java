package com.qa.task1.entities;

public class Person {
    private String name;
    private int age;
    private String favouriteColour;

    public Person(String name, int age, String favouriteColour) {
        this.name = name;
        this.age = age;
        this.favouriteColour = favouriteColour;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getFavouriteColour() {
        return favouriteColour;
    }

    public void setFavouriteColour(String favouriteColour) {
        this.favouriteColour = favouriteColour;
    }


}
