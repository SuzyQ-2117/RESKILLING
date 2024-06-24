package com.qa;

import java.io.IOException;

public class TestCalc {
//    public static void main(String[] args) {
//        BadCalc calc = new BadCalc();
//        System.out.println("Multiply result: " + calc.mult(6, 5));
//        try {
//            System.out.println("Divide result: " + calc.div(6, 0));
//        } catch(ArithmeticException ae){
//            System.out.println("Illegal division!");
//            System.out.println(ae);
//            ae.printStackTrace();
//        }
//    }

    public static void main(String[] args) throws IOException {
        MyConsoleReader mcr = new MyConsoleReader();
        mcr.readInputPrint();
    }
}
