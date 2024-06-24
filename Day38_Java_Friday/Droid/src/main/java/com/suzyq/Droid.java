package com.suzyq;

public class Droid {
    int batteryLevel = 100;
    String name;

    public Droid(String droidName) {
        name = droidName;
    }

    public String toString() {
        return "Hello coders! I'm " + name +". Nice to meet you!";
    }

    public void performTask(String task) {
        System.out.println(name + " is performing task: " + task);
        batteryLevel -=10;
    }

    public void energyReport() {
        System.out.println(name + "s current battery level: " + batteryLevel + "%");
    }

    public void batteryRecharge() {
        System.out.println(batteryLevel);
        if((batteryLevel += 20) > 100) {
            batteryLevel = 100;
            System.out.println("A nap helped! " + name + " is feeling refreshed. New battery level: " + batteryLevel + "%");
        } else {
            batteryLevel += 20;
            System.out.println("A nap helped! " + name + " is feeling refreshed. New battery level: " + batteryLevel + "%");
        }
    }

    public void energyTransfer(Droid donor, int transferAmount) {
        System.out.println("Initiating " + transferAmount + "% energy transfer to " + name + ". Please stand by.");
        if ((batteryLevel += transferAmount) > 100 && (donor.batteryLevel -=transferAmount) == 0) {
            System.out.println("Energy transfer declined.");



        } else if(transferAmount > donor.batteryLevel) {
            System.out.println(donor.name + " doesn't have enough available battery for this transfer. Battery available for transfer: " + donor.batteryLevel + "%");

            donor.energyReport();
//             System.out.println(transferAmount);

            donor.batteryLevel = 0;
            donor.energyReport();
            System.out.println("transfer amount to be reassigned to remaining donor battery life, complete energy transfer and then donor takes a long sleep");



        } else if((batteryLevel += transferAmount) > 100) {
            int energyNotNeeded = batteryLevel - 100;
            int energyUsed = transferAmount - energyNotNeeded;
            batteryLevel = 100;
            donor.batteryLevel -= energyUsed;
            System.out.println("Max charge reached on receiving droid.");
        } else {
            batteryLevel += transferAmount;
            donor.batteryLevel -= transferAmount;
            System.out.println(name + " is feeling much better! Thank you " + donor.name + "! Battery restored to " + batteryLevel + "%");
            System.out.println(donor.name + " has transferred " + transferAmount + "% battery to " + name + ". New battery level: " + donor.batteryLevel + "%");
        }
    }
}