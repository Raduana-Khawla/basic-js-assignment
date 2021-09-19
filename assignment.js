
//1.First problem:
function seerToMon(seer){
    if(seer != 0){
    var mon = seer/40;
    return mon;
    }
    else{
        console.log('sorry!Its not acceptable');
    }
}
const result = seerToMon(120);
console.log(result);
/*----------------------end-------------------*/


//2.Second problem:
function totalSales(num1,num2,num3){
      
    if(num1>0 && num2>0 && num3>0)
     {
     const multiply1=num1*100;
     const multiply2=num2*200;
     const multiply3=num3*500;
     totalMultiply = multiply1+multiply2+multiply3;
     return totalMultiply;
     }
     else{
         console.log('sorry!Its not acceptable');
     }
}
let shirt = 15;
let pant = 10;
let shoe = 5;
// let shirt = 5;
// let pant = 10;
// let shoe = 15;
const totalResult = totalSales(shirt,pant,shoe);
console.log(totalResult);
/*---------------end-------------------------------*/



// 3.problem:
function deliveryCost(tShirtdelivery){
    const first100PerDelivery = 100;
    const second100PerDelivery = 80;
    const more200PerDelivery = 50;
    if(tShirtdelivery<=100){
        const ship1 = tShirtdelivery * first100PerDelivery;
        return ship1;
    }
    else if(tShirtdelivery<200){
        const first100Delivery = 100 * first100PerDelivery;
        const restDelivery1 = tShirtdelivery - 100;
        const ship2 = restDelivery1 * second100PerDelivery;
        const totalShip2 = first100Delivery + ship2;
        return totalShip2;
    }
    else if(tShirtdelivery>=200){
        const first100Delivery = 100 * first100PerDelivery;
        const ship2 = 100 * second100PerDelivery;
        const restDelivery2 = tShirtdelivery - 200;
        const ship3 = restDelivery2 * more200PerDelivery;
        const totaldeliveryCost = first100Delivery + ship2 + ship3;
        return totaldeliveryCost;
    }
    else{
        console.log("it's not a number");
    }
    
}
const numberOfDelivery = deliveryCost(150);
console.log(numberOfDelivery);
/*--------------------end-----------------------*/



// 4.problem:
function perfectFriend(friends)
{
    let bestFriend ='';
   for(let friendList of friends){
      
       if(friendList.length == 5) 
       {
        bestFriend = friendList;
        break;
        //console.log(bestFriend);
       }
       else if(friendList.length < 5 && friendList.length > 5){
           console.log("its not 5 character word");
       }
    }
       return bestFriend;
}
let friendsName = ['Nadia','salam','mukta','rahim','Laboni','Nafisa','Sumaiya'];
let names = perfectFriend(friendsName);
console.log(names);

/*-------------------------end------------*/