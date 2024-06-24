package com.qa;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class MyConsoleReader {
    public void readInputPrint() throws IOException {
        StringBuffer stringb = new StringBuffer();
        try(BufferedReader br = new BufferedReader(new InputStreamReader(System.in));){
            System.out.println("Enter a line of text or 'stop'");
            String line = br.readLine();
            while(!line.equals("stop")){
                stringb.append(line + "\n");
                System.out.println("Enter a line of text or 'stop'");
                line = br.readLine();
            }
            System.out.println(stringb);
        } catch(IOException io){
            System.out.println("Error on console input: " + io);
            io.printStackTrace();
        }
    }


}
