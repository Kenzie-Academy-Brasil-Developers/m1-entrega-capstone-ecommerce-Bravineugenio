const vitri3 = document.querySelector(".products-section")
const carrinho = document.querySelector(".product-carrinho")
const carrinho2 = document.querySelector(".carrinho")

function soma(array){
  let somaArray=0
  for(let i = 0; i < array.length; i++){ 
    somaArray = somaArray + array[i].value;
    
}
return `R$${somaArray}`
}


function vitrine(array) {
  
  const qtdArray = document.createElement("p");
  const valorSoma = document.createElement("p");
  const divCarrinho = document.createElement("div");
  const productUl = document.createElement("ul");
  const arrayCarrinho = [];
  const qtdCarrinho = document.createElement("p");
  const valorCarrinho = document.createElement("p");
  
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
    qtdArray.classList.add("qtdArray");
    valorSoma.classList.add("valorSoma");
    divCarrinho.classList.add("valorCarrinho");
    qtdCarrinho.classList.add("qtd");
    valorCarrinho.classList.add("valor");
    productStrong.classList.add("value")

    qtdCarrinho.innerText = "Valor Total"
    valorCarrinho.innerText = "Quantidade"

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
    divCarrinho.appendChild(qtdArray);
    divCarrinho.appendChild(valorSoma);
    divCarrinho.appendChild(valorCarrinho);
    divCarrinho.appendChild(qtdCarrinho);
  
    productButton.addEventListener('click', apertar);
    function apertar() {
      
      const itemAtual = array[i]
      
      arrayCarrinho.push(itemAtual)
      qtdArray.innerText = arrayCarrinho.length
      console.log(arrayCarrinho)
      soma(arrayCarrinho)
      valorSoma.innerText=soma(arrayCarrinho)
      
      const divContainerCarrinho = document.createElement("div");
      const ulCarrinho = document.createElement("ul");
      const liCarrinho = document.createElement("li");
      const imgCarrinho = document.createElement("img");
      const mainCarrinho = document.createElement("main");
      const h1Carrinho = document.createElement("h1");
      const strongCarrinho = document.createElement("strong");
      const removeCarrinho = document.createElement("button")
      
      divContainerCarrinho.classList.add("carrinho");
      liCarrinho.classList.add("product-carrinho");
      imgCarrinho.classList.add("img-carrinho");
      mainCarrinho.classList.add("product-main-carrinho");
      h1Carrinho.classList.add("nameItem");
      strongCarrinho.classList.add("value");
      removeCarrinho.classList.add("removeCart");
  
      divContainerCarrinho.appendChild(ulCarrinho);
      ulCarrinho.appendChild(liCarrinho);
      liCarrinho.appendChild(imgCarrinho);
      liCarrinho.appendChild(mainCarrinho);
      mainCarrinho.appendChild(h1Carrinho);
      mainCarrinho.appendChild(strongCarrinho);
      mainCarrinho.appendChild(removeCarrinho);
      carrinho2.appendChild(liCarrinho);

      imgCarrinho.src = itemAtual.img;
      h1Carrinho.innerText = itemAtual.nameItem;
      strongCarrinho.innerText =`R$${itemAtual.value},00`;
      removeCarrinho.innerText = "Remover Item"
      
      removeCarrinho.addEventListener('click', atualizarCarrinho);
      function atualizarCarrinho(event) {
      liCarrinho.style.display= "none"
      arrayCarrinho.pop(arrayCarrinho[i])
      qtdArray.innerText = arrayCarrinho.length
      soma(arrayCarrinho)
      valorSoma.innerText=soma(arrayCarrinho)



    }
    
  }
  
  vitri3.appendChild(productUl)
  vitri3.appendChild(divCarrinho)
}
}

vitrine(data)
