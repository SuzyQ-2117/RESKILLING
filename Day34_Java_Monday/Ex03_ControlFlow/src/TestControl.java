public class TestControl {
    public static void main(String[] args) {
//        TASK 3.1

//        int i = 0;
//        while (i < 10) {
//            System.out.println(i + " " + (i + 10));
//            i++;
//        }

//        int n = 1;
//        int nsquared = 1;
//        while (n < 10) {
//            nsquared = nsquared * 2;
//            System.out.println(n + " " + nsquared);
//            n++;
//        }

//        for (int i = 0; i < 10; i++) {
//            System.out.println(i + " " + (i+10));
//        }

//        int sum2 = 1;
//        for (int i = 0; i < 10; i++) {
//            sum2 = sum2*2;
//            System.out.println(i + " " + sum2);
//        }

//        TASK 3.2
//        int i = 6;
//        if (i <= 5) {
//            System.out.println("Weekday - time to work!");
//        } else if (i <= 7) {
//            System.out.println("It's the weekend! Chill time :)");
//        } else if (i >= 8) {
//            System.out.println("INVALID DAY");
//        }

//        int i = 6;
//        switch(i) {
//            case 1:
//                System.out.println("Weekday - time to work!");
//                break;
//            case 2:
//                System.out.println("Weekday - time to work!");
//                break;
//            case 3:
//                System.out.println("Weekday - time to work!");
//                break;
//            case 4:
//                System.out.println("Weekday - time to work!");
//                break;
//            case 5:
//                System.out.println("Weekday - time to work!");
//                break;
//            case 6:
//                System.out.println("It's the weekend! Chill time :)");
//                break;
//            case 7:
//                System.out.println("It's the weekend! Chill time :)");
//                break;
//            default:
//                System.out.println("INVALID DAY");
//        }

            for (int y = 1900; y <=2024; y++) {
                if ((y % 4 ==0) && (y % 100 != 0) ||
                                    (y % 400 == 0)) {
                    System.out.println(y + " was a leap year.");
                }
            }

    }
}
