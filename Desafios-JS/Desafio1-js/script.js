window.onload = function(){
    let produtos = [
        {descricao:' Mamão Papaia ', preco: 1.88},
        {descricao:' Laranja ', preco: 2.00},
        {descricao:' Manga ', preco: 1.00},
        {descricao:' Melão ', preco: 3.00},
        {descricao:' Melancia ', preco: 4.00}
    ]
  let listaProdutos = document.querySelector("#produtos");
    for(let itens of produtos){
        let lis = document.createElement('li');
        for(let prod in itens){
  
            if(prod == 'descricao'){
                listaProdutos.appendChild(lis).textContent = itens[prod];
            }else{
                listaProdutos.appendChild(lis).setAttribute('class', 'itemFruta');
                listaProdutos.appendChild(lis).setAttribute('data-preco', itens[prod]);
            }
        }
    }
  let cestaDoCliente = [];
    let selecionarItem = document.querySelectorAll("#produtos > li")
    let compraDoCliente = document.querySelector('#cestaDoCliente')
    let valorTotalCompra = document.querySelector("#mostraTotalCompra")
    let total=0;
    selecionarItem.forEach(function(item){
            item.addEventListener('click', function(){
  if(cestaDoCliente.indexOf(item.textContent) != -1){
                    alert("Este item já está na sua lista")
                }else{
                    total += Number(item.dataset.preco)
                    cestaDoCliente.push(item.textContent);
                    let itemCesta = document.createElement('li');
                    compraDoCliente.appendChild(itemCesta).textContent = item.textContent;
                    valorTotalCompra.value = total.toFixed(2);
                }
    })
  })
  }