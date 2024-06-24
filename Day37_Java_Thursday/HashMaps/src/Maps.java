import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.*;

public class Maps {
    public static void main(String[] args) {

        //hashmap created, using country and key and food as value
        Map<String, String> worldFoods = new HashMap<>();

        //Hashmap created with a key and a list of foods values
        Map<String, List<String>> newList = new HashMap<>();

        //add to a hashmap
        worldFoods.put("Italy", "Pasta");
        worldFoods.put("America", "Everything");
        worldFoods.put("UK", "Roast dinner");
        worldFoods.put("Scotland", "Haggis");
        //adding an entry with a duplicate key will just overwrite the previous value with the new value
        worldFoods.put("Italy", "Pizza");

        //prints out the keys in worldFoods
         for(String s : worldFoods.keySet()){
            System.out.println(s);
         }

        System.out.println("---------------");

        //prints out the values in worldFoods
         for(String s : worldFoods.values()){
            System.out.println(s);
         }

        System.out.println("---------------");

        //print out the whole entry of data
         for(Entry<String, String> s : worldFoods.entrySet()){
            System.out.println(s);
         }

        System.out.println("---------------");

        //returns a true or false value based on whether there is data in the hashmap called worldFoods
        System.out.println(worldFoods.isEmpty());

        System.out.println("---------------");

        //prints out how many entries (key + value pair) exist in the hashmap called worldFoods
        System.out.println(worldFoods.size());

        System.out.println("---------------");

        worldFoods.remove("Italy");

        //prints out the keys in worldFoods
        for (String s : worldFoods.values()) {
            System.out.println(s);
        }

        System.out.println("---------------");

        //returns a true or false value based on if the search term exists in any of the keys inside the hashmap. Can also be used with .containsValue()
        System.out.println(worldFoods.containsKey("Pizza"));

    }

}
