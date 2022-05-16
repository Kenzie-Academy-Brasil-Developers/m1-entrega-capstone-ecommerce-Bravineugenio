const vitri3 = document.querySelector(".products-section")
const carrinho = document.querySelector(".product-carrinho")


function vitrine(array) {
  
  const qtdArray = document.createElement("p")
  const valorSoma = document.createElement("p")
  
  const productUl = document.createElement("ul");

  for(let i=0;i<array.length;i++){
    const productCard = document.createElement("li");
    const productImg = document.createElement("img");
    const productMain2 = document.createElement("main");
    const productDiv1 = document.createElement("div");
    const productH1 = document.createElement("h1");
    const productH5 = document.createElement("h5");
    const productStrong = document.createElement("strong");
    const productButton = document.createElement("button");
    
    
    productCard.classList.add("product");
    productMain2.classList.add("product-content");
    productDiv1.classList.add("tag");
    productH1.classList.add("nameItem");
    productH5.classList.add("description");
    productButton.classList.add("addCart");
    qtdArray.classList.add("qtdArray")
    valorSoma.classList.add("valorSoma")
    
    productImg.src =  array[i].img;
    productDiv1.innerText = array[i].tag[0];
    productH1.innerText = array[i].nameItem;
    productH5.innerText =array[i].description;
    productStrong.innerText = `R$${array[i].value},00`;
    productButton.innerText = array[i].addCart;
    
    
    
    productCard.appendChild(productImg);
    productCard.appendChild(productH1);
    productCard.appendChild(productH5);
    productCard.appendChild(productStrong);
    productCard.appendChild(productButton);
    productUl.appendChild(productCard);



    const arrayCarrinho = []
    productButton.addEventListener('click', apertar);
    function apertar() {
    arrayCarrinho.push(data[i])
    console.log(arrayCarrinho)

    
  
      
  
  
  
  }

    

  }


  vitri3.appendChild(productUl)
}



  

vitrine(data)




