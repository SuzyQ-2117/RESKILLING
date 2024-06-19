package com.qa;

public class Point {
    //Fields
    private double x;
    private double y;
    //Everything Constructor
    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
    //Getter & Setter
    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }
    //toString
    @Override
    public String toString() {
        return "Point{" + "x=" + x + ", y=" + y + '}';
    }
}
