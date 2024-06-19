package com.qa.children;
import com.qa.parent.Vehicle;

public class Bus extends Vehicle {
    //Specific Field
    private int numberOfFloors;

    //Specific Constructor
    public Bus(int numberOfFloors){
        this.numberOfFloors = numberOfFloors;
    }

    //Everything Constructor
    public Bus(int numberOfFloors, String make, String model, String colour, int milesDriven){
        super(make, model, colour, milesDriven);
        this.numberOfFloors = numberOfFloors;
    }

    //Getter
    public int numberOfFloors() {
        return numberOfFloors;
    }

    //Setter
    public void setHasUpstairs(int numberOfFloors) {
        this.numberOfFloors = numberOfFloors;
    }

    @Override
    public String toString() {
        return "Bus: " + " Number of Floors: " + numberOfFloors + "," + super.toString();
    }
}
