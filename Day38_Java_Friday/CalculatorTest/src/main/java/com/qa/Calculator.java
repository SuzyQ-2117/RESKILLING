package com.qa;

public class Calculator {
    int sum;

    public int add(int x, int y){
        sum = x + y;
        return sum;
    }

    public int subtract(int x, int y){
        sum = x - y;
        return sum;
    }

    public int multiply(int x, int y){
        sum = x * y;
        return sum;
    }

    public int divide(int x, int y){
        sum = x / y;
        return sum;
    }
}
