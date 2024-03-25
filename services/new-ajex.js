
let price = 0;

const cartProducts = (cart) => {
    if (cart !== null) {
        console.log("Calling products for cart:", cart);
        $.ajax({
            url: "../../../data/data.json",
            success: (result) => {
                showPicture(result, cart);
            }
        });
    }
}


const showPicture = (result, cart) => {
    const div = document.getElementById("div");
    console.log("Showing pictures for cart:", cart);
    for (let i = 0; i < cart.length; i++) {
        console.log("i in the for:", i);
        console.log("cart in the for:", cart[i]);
        result.forEach(item => {
            console.log(item);
            if (item.id === cart[i]) {
                price += Number(item.price);
                console.log(price);
                div.innerHTML += `<div class="style" data-product-id="${item.id}">
                    <img class="img-styile" src="../../../assets/picture/${item.img}" width="200px"  display="flex"/>
                    <h3 class="name">${item.name}</h3>
                    <div class="price-container" >
                    <p class="priceD" >ש"ח</p>
                    <p class="price" >${item.price}</p>
                    <p class="priceD" >מחיר</p>
                    </div>
                    <p class="count" > יחי' ${item.count} </p>
                    <button class="button2" ><i  class="fas fa-trash"> למחיקת פריט</i></button>
                </div>`
            }
        })
    }
    localStorage.setItem("price", JSON.stringify(price));
}


// let price = 0;
// let staticCart = [];

// const cartProducts = (cart) => {
//     if (cart !== null) {
//         console.log("Calling products for cart:", cart);
//         $.ajax({
//             url: "../../../data/data.json",
//             success: (result) => {
//                 showPicture(result, cart);
//             }
//         });
//     }
// }


// const showPicture = (result, cart) => {
//     const div = document.getElementById("div");
//     console.log("Showing pictures for cart:", cart);
//     for (let i = 0; i < cart.length; i++) {
//         console.log("i in the for:", i);
//         console.log("cart in the for:", cart[i]);
//         result.forEach(item => {
//             console.log(item);
//             if (item.id === cart[i]) {
//                 staticCart.push(item.id);
//             }
//         })

//         result.forEach(item => {
//             console.log(item);
//             if (item.id === staticCart[i]) {
//                 price += Number(item.price);
//                 console.log(price);
//                 div.innerHTML += `<div class="style" data-product-id="${item.id}">
//                     <img class="img-styile" src="../../../assets/picture/${item.img}" width="200px"  display="flex"/>
//                     <h3 class="name">${item.name}</h3>
//                     <div class="price-container" >
//                     <p class="priceD" >ש"ח</p>
//                     <p class="price" >${item.price}</p>
//                     <p class="priceD" >מחיר</p>
//                     </div>
//                     <p class="count" > יחי' ${item.count} </p>
//                     <button class="button2" ><i  class="fas fa-trash"> למחיקת פריט</i></button>
//                 </div>`

//             }
//         })

//     }
//     localStorage.setItem("price", JSON.stringify(price));
//     localStorage.setItem("staticCart", JSON.stringify(staticCart))
// }