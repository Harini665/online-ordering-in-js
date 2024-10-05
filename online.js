let choice 
let user
user = prompt("Enter your name: ")
console.log(`${user} \nHere is your menu`)
console.log("Menu\n1.pizza \n2.Burger \n3.ChickenBiriyani \n4.AppleJuice \n5.Idly")
let quantity
quantity = prompt("Enter your quantity: ")
choice = parseInt(prompt("Enter your choice:"))
let price 
    switch(choice){
    case 1:
        price = quantity*200
        break
    case 2:
       price = quantity*300
        break;
    case 3:
       price = quantity*250
        break;
    case 4:
        price = quantity*100
        break;
    case 5:
        price = quantity*80
        break;
    default:
        window.alert("enter valid choice");
        price =0;
    }
    if(price>0){
    if(price > 500){
        let discount = price*0.1;
        console.log("Congratulations you have got an offer of 10% on your current order:" +discount)
    }
    else{
        console.log("Thankyou for ordering! continue to order to get exciting offers");
    }
    console.log("TotalPrice: "+price);
}