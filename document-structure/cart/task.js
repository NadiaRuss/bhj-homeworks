let cartProducts = document.querySelector('.cart__products');
let products = Array.from(document.querySelectorAll('.product'));
let addBtn = Array.from(document.querySelectorAll('.product__add'));

for(let i = 0; i < products.length; i++){

let controlInc = products[i].querySelector('.product__quantity-control_inc');
let controlDec = products[i].querySelector('.product__quantity-control_dec');
let productValue = products[i].querySelector('.product__quantity-value');

controlInc.addEventListener('click', (event)=>{
    event.preventDefault();
    productValue.textContent ++;
})
controlDec.addEventListener('click', (event)=>{
    event.preventDefault();
    productValue.textContent --;

    if(+productValue.textContent < 1){
        productValue.textContent = 1;
    }
})
}

addBtn.forEach(elem => {
  elem.addEventListener('click', event =>{
    event.preventDefault();
    let target = event.target;
    let product = target.closest('.product');
    let productId = product.dataset.id;
    let productImg = product.querySelector('.product__image').src;
    let productCount = product.querySelector('.product__quantity-value').textContent;
    let checkedId = document.querySelector(`.cart__product[data-id="${productId}"]`);
    if(checkedId === null){
        cartProducts.innerHTML += `
        <div class="cart__product" data-id=${productId}>
        <img class="cart__product-image" src=${productImg}>
        <div class="cart__product-count">${productCount}</div>
        </div>
        `
    } else {
      let currentCount = checkedId.querySelector('.cart__product-count').innerHTML;
      let sum = Number(currentCount) + Number(productCount);
      checkedId.querySelector('.cart__product-count').innerHTML = sum;
		}
  })
})

