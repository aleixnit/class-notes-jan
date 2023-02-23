// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  const productos = document.getElementsByClassName('product');
  let totalValue = 0;
  for (let productos of products) {
    totalValue += updateSubtotal(productos);
  }
  document.querySelector('#total-value span').innerText = totalValue;
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(evento) {

 
  const target = evento.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
 //usar parentNode para apuntar al abuelo
  const fila = target.parentNode.parentNode;
  console.log(fila);
    // Usamos el parentNode en la variable row para aprovechar los selectores de manioluacion del DOM para eliminar el hijo de parent.
    const padre = row.parentNode;
    console.log(padre);
//llamamos al padre con removeChild
    padre.removeChild(fila);

      // calculateAll() - vuelve a calcular los numeros para tener un resultado correcto una vez borremos el producto.
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

    // Parte 1
    const createRow = document.querySelector('.create-product');
    let newProdNameInput = createRow.querySelector('input');
    let newProdNameValue = newProdNameInput.value;
    let newProdPriceInput = createRow.querySelector("input[type='number']");
    let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);
  
    // Parte 2
    const nuevaFila = document.createElement('tr');
    nuevaFila.className = 'product';
    nuevaFila.innerHTML = `
          <td class="name">
          <span>${newProdNameValue}</span>
        </td>
        <td class="price">$<span>${newProdPriceValue}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
    `;
  
    // Parte 3
    // Agarrr el padre de los rows mediante un poco de DOM
    const parent = document.querySelector('#cart tbody');
  
    // Adjuntar la variable nuevaFila dentro de parent :)
    parent.appendChild(nuevaFila);
  
    // Recibir logica de botones
    const removeBtn = nuevaFila.querySelector('.btn-remove');
    removeBtn.addEventListener('click', removeProduct);
  
    // Limpiar los inputs una vez el usaurio haya creado un producto
    newProdNameInput.value = '';
    newProdPriceInput.value = 0;


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //borrar productos
  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  //crear productos
  const createBtn = document.querySelector('#create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }
});
