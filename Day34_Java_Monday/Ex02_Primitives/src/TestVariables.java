public class TestVariables {
    public static void main(String[] args) {
        String name = "Suzy";
        int age = 32;
        System.out.println(name + "'s age is "+ age + ". She will be " + (age + 1) + " on her next birthday.");
        int m = 1;
        float x = 0.5f;
        int c = 15;
        float y = m * x + c;
        System.out.println(y);

        boolean isRaining = true;
        boolean happy = true;
        System.out.println(isRaining || happy);
        System.out.println(isRaining || !happy);
        System.out.println(!isRaining || happy);
        System.out.println(!isRaining || !happy);

    }
}
