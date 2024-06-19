package com.qa.children;
import com.qa.parent.Vehicle;

public class Car extends Vehicle {
    //Fields
    private String spareWheel;

    //Constructor
    public Car(String spareWheel) {
        this.spareWheel = spareWheel;
    }

    //Everything Constructor

    public Car(String make, String model, String colour, int milesDriven, String spareWheel) {
        super(make, model, colour, milesDriven);
        this.spareWheel = spareWheel;
    }

    //Getter & Setter

    public String getSpareWheel() {
        return spareWheel;
    }

    public void setSpareWheel(String spareWheel) {
        this.spareWheel = spareWheel;
    }

    //toString

    @Override
    public String toString() {
        return "Car: " + " Spare Wheel: " + spareWheel + "," + super.toString();
    }
}
