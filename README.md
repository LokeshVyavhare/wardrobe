## fixed-thread-889

### Description: Construct week Project Block 20 RCT201+NEM101


1) Landing page:-Shivang
2) Mens/Womens/Kids page :- Suraj
3) Navbar, footer:-Shivang
4) Product page:- Abhijeet
5) Category page:- Somya
6) Cart page, Checkout page:-Lokesh
7) Registastion, Login page:-Shivang
8) Admin Page:- Lokesh

// Profile page


Backend: (Abhijeet, Soumya)
1) Users: Signup Login
2) Carts: get post delete update
3) Products: id, category, post, ??delete , update


//Categories Men, kids, Women
//Subcategories: Shoes, lower, bags, shirts, jwellery, hats, coats

//User:- Abhijeet

Schema:{
    email(mandatory),
    password(mandatory),
    name(mandatory),
    age:optional,
    gender:optional,
    type:admin/user (mandatory),
}

Routes:
1(signup):post, {error:true/false, messgage:""}
2(login):post, {error:true/false, token:'' messgage:""}


//Products:- Somya

Product Schema:{
    "name": "K",
    "image1": "url1",
    "image2": "url2",
    "description": "",
    "prize": 10000,
    "category":"MEN/WOMEN/KIDS",
    "tags": "string"
}

routes :-
1)admin:-post (adding products, delete products);
2)user:- a)id: get
        b)category:get
        c)tags:get


//Cart: Abhijeet

cart Schema:{
    productid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    } ,
    userid:string;
    quantity: number,
    isOrdered:false(in the cart)\true(delivered),
}

routes:
1) get:-(userid);
2) post:-{
    userid, productid
}
3) delete:- (cartid)
4) update: quantity: (cartid, newquantity)
        : isOrder: (cartid);


