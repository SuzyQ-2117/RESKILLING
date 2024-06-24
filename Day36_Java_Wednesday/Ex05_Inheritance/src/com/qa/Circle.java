package com.qa;

public class Circle extends Shape implements Movable {
    private double radius;

    public Circle(String name, String colour, double x, double y, double radius) {
        super(name, colour, x, y);
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * (radius*radius);
    }

    @Override
    public Point getCentrePoint() {
        double centreX = getX();
        double centreY = getY();
        return new Point(centreX, centreY);
    }

    @Override
    public String toString() {
        return "Circle{" +
                "radius=" + radius +
                '}';
    }

    @Override
    public Point getCurrentLocation() {
        return getCentrePoint();
    }

    @Override
    public void move(double x, double y) {
        setX(getX() + x);
        setY(getY() + y);
    }
}
