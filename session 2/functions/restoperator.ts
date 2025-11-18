    function displayFullname(firstname:string,...othername:string[]){
        console.log(firstname+othername.join("  "));
    }
    displayFullname("John","Wick","Cena","Smith");
    displayFullname("Alice");
    displayFullname("Bob","Marley");

    function calulatetotalprice(...charges:number[]){
        console.log("total price is: ",charges.reduce((prev,curr)=>prev+curr,0));

    }
    calulatetotalprice(100,200,50);
    calulatetotalprice(500,150);
    calulatetotalprice(300);

    interface product{
        name:string;
        price:number;
    }
    let pd1:product={name:"laptop",price:60000};
    let pd2:product={name:"phone",price:20000};
    let pd3:product={name:"tablet",price:35000};
    function addproducts(...items:product[]){
        let total=0;
        items.map((p) => (total+=p.price));
        return total;
    }
    console.log("Total product price: ",addproducts(pd1,pd2,pd3));
    console.log(addproducts(pd1,pd2));
    console.log(addproducts(pd3));