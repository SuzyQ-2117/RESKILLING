package com.qa;
import com.qa.children.Aeroplane;
import com.qa.children.Bus;
import com.qa.children.Car;

public class Main {
    public static void main(String[] args) {
        Aeroplane plane1 = new Aeroplane("Large", "Boeing", "737", "White", 500);
        Aeroplane plane2 = new Aeroplane("Medium", "Plane", "Medium Sized", "Green", 9999);
        Bus bus1 = new Bus(2, "Passenger", "Double Decker", "Blue", 120000);
        Car car1 = new Car("VW", "Tiguan", "Blue", 16000, "Tyre Gel");

        System.out.println(plane1);
        System.out.println(plane2);
        System.out.println(bus1);
        System.out.println(car1);
    }
}
