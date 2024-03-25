

$.ajax({
    url: "../../data/data.json",
    success: (result) => {
        // console.log(category);
        console.log("Received data:", result);
        showPicture(result);
    }
});


const showPicture = (result) => {
    const div = document.getElementById("div");

    result.forEach(item => {
        console.log("Found matching item:", item);
        div.innerHTML += `<div class="style" data-product-id="${item.id}">
              <img class="img-styile" src="../../../assets/picture/${item.img}" width="200px"  display="flex"/>
              <h3 class="name">${item.name}</h3>
              <p class="price" > מחיר ${item.price} ש"ח</p>
              <p class="count" > יחי' ${item.count} </p>
              <button class="button" ><i class="fas fa-shopping-cart">  הוסף לסל</i></button>
          </div>`
    })
}