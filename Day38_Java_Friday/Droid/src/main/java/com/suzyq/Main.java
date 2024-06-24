package com.suzyq;

public class Main {
    public static void main(String[] args) {
        Droid droid1 = new Droid("Codey");
        System.out.println(droid1);
        droid1.energyReport();
        droid1.performTask("Sweeping the floor");
        droid1.performTask("Hoovering the tumbleweeds");
        droid1.performTask("Walk the dog");
        droid1.performTask("Sweeping the floor");
        droid1.performTask("Hoovering the tumbleweeds");
        // droid1.performTask("Walk the dog");
        droid1.energyReport();
        Droid droid2 = new Droid("Rob-ot");
        System.out.println(droid2);
        droid2.performTask("Sweeping the floor");
        droid2.performTask("Hoovering the tumbleweeds");
        droid2.performTask("Walk the dog");
        droid2.performTask("Sweeping the floor");
        droid2.performTask("Hoovering the tumbleweeds");
        droid2.performTask("Walk the dog");
        droid2.energyReport();
        droid1.energyTransfer(droid2, 60);
        // droid2.energyReport();
        // droid2.batteryRecharge();
    }
}
