import java.util.InputMismatchException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //Create a Scanner object called "scan"
        //We use this to take in input - almost like taking input from a keyboard

//        Scanner scan = new Scanner(System.in);

        //our resources go inside the brackets (hence Try with Resources)

        //if we create the scanner as a resource, this will close itself off once the Try Catch block has completed. We don't want the scanner to still be running if we don't need it, so we instate is as a resource and it closes itself off.
        try(Scanner scan = new Scanner(System.in);){
            System.out.println("Please enter a number");
            //This gives the user an opportunity to enter something in
            int num1 = scan.nextInt();

            System.out.println("Please enter another number");
            int num2 = scan.nextInt();

            System.out.println(num1 + num2);
        } catch(InputMismatchException ime){
            System.out.println("The only type of data allowed is a number. Please try again.");
        }
    }
}
