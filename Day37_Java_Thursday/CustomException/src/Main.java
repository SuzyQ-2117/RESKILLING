public class Main {
    public static void main(String[] args) {
        try{
            ageCheck(12);
        } catch(AgeCheckException e){
            System.out.println(e);
        }
    }


    static void ageCheck(int age) throws AgeCheckException {
        if(age<16){
            throw new AgeCheckException("Minimum required age is 16.");
        } else {
            System.out.println("You are old enough");
        }
    }
}
