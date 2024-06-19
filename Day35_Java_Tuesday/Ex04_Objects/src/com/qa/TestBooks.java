package com.qa;

public class TestBooks {
    public static void main(String[] args) {
        String[] arr = {"Author1", "Author2", "Author3"};
        Book b1 = new Book("title", arr, 10.99);
        Book b2 = new Book("title2", arr, 5.99);
        Book b3 = new Book("title3", arr, 1.50);

//        System.out.println(b1);
//        System.out.println(b2);
//        System.out.println(b3);

        Book[] bookArray = new Book[3];

        bookArray[0] = b1;
        bookArray[1] = b2;
        bookArray[2] = b3;

//        Another way to add the book objects into an array would be:
//        Book[] bookArray = {b1, b2, b3};
//        This is structured as what object the array is made up of (Book[]), the name of the array (bookArray) nd the contents (b1, b2 and b3 - these are items we've declared on lines 6, 7, & 8)

        for (int x=1; x< bookArray.length; x++) {
            System.out.println(bookArray[x]);
        }
    }
}
