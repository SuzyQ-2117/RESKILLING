package com.qa;

public class Main {
    public static void main(String[] args) {
        Shape rec1 = new Rectangle("rec1", "Red", 2, 9, 14, 6);
        Shape circ1 = new Circle("circ1", "Green", 5, 7, 10);


        rec1.getArea();
        rec1.getCentrePoint();

        circ1.getArea();
        circ1.getCentrePoint();

        System.out.println(rec1.getArea() + " " + rec1.getCentrePoint());
        System.out.println(circ1.getArea() + " " + circ1.getCentrePoint());
    }
}
