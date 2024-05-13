let day = 2

if (day==1){
    console.log("Take Backups")
}else{
    if (day==2){
        console.log("Do fresh installations")
    }else{
        if (day==3){
            console.log("Take Backups")
        }else{
            if (day==4){
                console.log("Change Passwords")
            }else{
                if(day==5){
                    console.log("Do fresh installations")
                }else{
                    if (day==6){
                        console.log("Change Passwords")
                    }
                }
            }
        }
    }
}

//using Switch instead - much more compact. Don't forget to add the break to stop all subsequent cases from being executed as well //

let task = 1

switch(task){
    case 1:     console.log("Take Backups"); break
    case 2:     console.log("Do fresh installations"); break
    case 3:     console.log("Take Backups"); break
    case 4:     console.log("Change Passwords"); break
    case 5:     console.log("Do fresh installations"); break
    case 6:     console.log("Change Passwords"); break
    default: 
        console.log("We don't have more than 7 days!")
}

