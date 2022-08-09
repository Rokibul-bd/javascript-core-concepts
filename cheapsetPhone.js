const phones = [
    {name:'Sumsung', color:'silver', camera:45, price:60000},
    {name:'Oppo', color:'silver', camera:45, price:22000},
    {name:'iphone', color:'silver', camera:45, price:280000},
    {name:'Sumsung', color:'silver', camera:45, price:26000}
]


function cheapset(phones){
    let cheapset = phones[0];
    for(let i = 0; i<phones.length; i++){
        const phone = phones[i]
        if(cheapset.price > phone.price){
            cheapset = phone;
        }
    }
    return cheapset;

}

console.log(cheapset(phones))