public class Main {
    public static void main(String[] args) {
        //This is instatiating
        Vehicle car1 = new Vehicle("Ford", "Focus", 2020);
        Vehicle car2 = new Vehicle( "VW", "Tiguan", 2022);
        Vehicle car3 = new Vehicle("Fiat", "Panda", 2006);

        //Put all the cars into an array
    Vehicle[] vehicles = {car1, car2, car3};

    for (int i = 0; i < vehicles.length; i++){
        System.out.println(vehicles[i]);
    }

    }
}

