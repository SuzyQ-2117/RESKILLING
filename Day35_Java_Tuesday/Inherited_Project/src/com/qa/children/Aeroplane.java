package com.qa.children;
import com.qa.parent.Vehicle;

public class Aeroplane extends Vehicle {
    //Fields specific to Aeroplane
    private String sizeOfWings;

    //Constructor specific to Aeroplane
    public Aeroplane(String sizeOfWings){
        this.sizeOfWings = sizeOfWings;
    }

    //Constructor
    public Aeroplane(String sizeOfWings, String make, String model, String colour, int milesDriven){
        super(make, model, colour, milesDriven);
        this.sizeOfWings = sizeOfWings;
    }

    //Getters and Setters
    public String getSizeOfWings() {
        return sizeOfWings;
    }

    public void setSizeOfWings(String sizeOfWings) {
        this.sizeOfWings = sizeOfWings;
    }

    @Override
    public String toString() {
        return "Aeroplane: " + " Size of Wings: " + sizeOfWings + "," + super.toString();
    }
}
