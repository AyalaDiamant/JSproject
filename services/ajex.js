

const callProducts = (category) => {
  console.log("Calling products for category:", category);
  $.ajax({
    url: "../../../data/data.json",
    success: (result) => {
      // console.log(category);
      console.log("Received data:", result);
      showPicture(result,category);
    }
  });
}

const showPicture = (result,category) => {
  const div = document.getElementById("div");
  console.log("Showing pictures for category:", category);

  result.forEach(item => {
    console.log("Found matching item:", item);
    if (item.category === category) {
      console.log(category);
      div.innerHTML += `<div class="style" data-product-id="${item.id}">
            <img class="img-styile" src="../../../assets/picture/${item.img}" width="200px"  display="flex"/>
            <h3 class="name">${item.name}</h3>
            <p class="price" > מחיר ${item.price} ש"ח</p>
            <p class="count" > יחי' ${item.count} </p>
            <button class="button" ><i class="fas fa-shopping-cart">  הוסף לסל</i></button>
        </div>`
    }
  })
}



