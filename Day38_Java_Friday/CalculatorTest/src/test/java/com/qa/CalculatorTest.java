package com.qa;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    Calculator calc = new Calculator();

    @Test
    public void addTwoNumbers() {
        assertEquals(4, calc.add(2,2));
    }

    @Test
    public void subtractTwoNumbers() {
        assertEquals(2, calc.subtract(4,2));
    }

    @Test
    public void multiplyTwoNumbers() {
        assertEquals(24, calc.multiply(6,4));
    }

    @Test
    public void divideTwoNumbers() {
        assertEquals(3, calc.divide(18,6));
    }
}
