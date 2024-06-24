package com.qa;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int number;
        do {
            System.out.println("Please enter a number (or enter 0 to quit): ");
            number = scan.nextInt();
            if(number == 0) {
                break;
            }
            if(number % 3 == 0 && number % 5 == 0){
                System.out.println("FizzBuzz!");
            } else if(number % 3 == 0) {
                System.out.println("Fizz!");
            } else if(number % 5 == 0) {
                System.out.println("Buzz!");
            } else {
                System.out.println(number + " doesn't Fizz or Buzz :( Try again!");
            }
        }
        while(true);
    }
}
