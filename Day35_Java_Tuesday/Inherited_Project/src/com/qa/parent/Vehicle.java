package com.qa.parent;

//This is our template to create a vehicle
//When we create a vehicle we will use the fields and constructor according to which vehicle we want to create
public class Vehicle {
    //Fields/Attributes
    private String make;
    private String model;
    private String colour;
    private int milesDriven;
    //default constructor
    public Vehicle(){}
    //everything constructor
    public Vehicle(String make, String model, String colour, int milesDriven){
//the key word "this" helps to avoid confusion between the class fields (at the top) and the parameter fields
//of the constructor
        this.make = make;
        this.model = model;
        this.colour = colour;
        this.milesDriven = milesDriven;
    }
    //getters and setters
    public String getMake() {
        return make;
    }
    public void setMake(String make) {
        this.make = make;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public String getColour() {
        return colour;
    }
    public void setColour(String colour) {
        this.colour = colour;
    }
    public int getMilesDriven() {
        return milesDriven;
    }
    public void setMilesDriven(int milesDriven) {
        this.milesDriven = milesDriven;
    }

    //This toString method allows us to see the information about the vehicle, rather than the location of the vehicle object
    @Override
    public String toString() {
        return " Make: " + make + ", Model: " + model + ", Colour: " + colour + ", Miles driven: " + milesDriven;
    }
}
