function singaraShop(money,quantity){
    let price = 10;
    const totalCost = price * quantity ;
    const backMoney = money - totalCost;
    const unbleMoney = totalCost - money;
    const niteParben = money / price;
    if(money === 0){
        console.log('You have give Zero money');
    }
    else if(quantity === 0){
        console.log('You have give Zero quantity');
    }
    else if(money === totalCost){
        console.log('Price : ' + totalCost);
    }else if(money >= totalCost && money % quantity !== 0){
        console.log('Your Total Cost : ' + totalCost);
        console.log('Back Paben : ' + backMoney);
    }else if(money <= totalCost){
        console.log('apnar R o ' + unbleMoney + ' Taka Lagbe ' + quantity + ' ta nite chaile');
        console.log('Apni Chaile ' + niteParben + ' ta Singara Nite Parben');
    }else{
        console.log('Back Paben : ' + backMoney)
    }
}

singaraShop(10,50);
