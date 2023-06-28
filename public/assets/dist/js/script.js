// adicionar quantidade de produtos no carrinho

var count = localStorage.getItem('cartCount') || 0; // Obtém o valor do contador do armazenamento local

function increment() {
 count++;
 updateBadge();
}

function decrement() {
  if (count > 0) {
   count--;
   updateBadge();
  }
}

function updateBadge() {
  fetch(`/cartCount`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    // Aqui está o objeto JSON
    console.log(data[0].quantidadeItens);
    var quantidade = data[0].quantidadeItens;

    var badge = document.getElementById('badge');
    badge.textContent = quantidade;
    if (quantidade === 0) {
       badge.classList.add('hidden');
     } else {
       badge.classList.remove('hidden');
     }
       // Armazena o valor atual do contador no armazenamento local
  localStorage.setItem('cartCount', quantidade);
  })
  .catch(error => {
    console.log('Ocorreu um erro:', error);
  });

}

// Atualiza o badge quando a página é carregada
window.addEventListener('load', function() {
 updateBadge();
});


function tocaMusica(){
  var teste = new Audio();
  teste.src = '../assets/som/Buy.mp3';
  teste.play();
}
// decição de eventos dos modais

$(document).ready(function () {

  // Função para exibir o modal
  function exibirModal() {
    $('#staticBackdrop3').modal('show');
  }

  // Função para iniciar o contador de tempo e exibir o modal após 10 segundos
  function iniciarContador() {
    setTimeout(exibirModal, 20000);
  }

  // Função para exibir o modal
  function exibirModalL() {
    $('#staticBackdrop3').modal('show');
  }
  // Função para iniciar o contador de tempo e exibir o modal após 10 segundos
  function iniciarContadorL() {
    setTimeout(exibirModalL, 20000);
  }

  $('#staticBackdrop3').on('shown.bs.modal', function () {
    tocaMusica();
  });



  $("#keypix").on("click", function(){
    if($("#dado").text() == ''){
      $("#dado").text('62f5c5e6-e95a-4cfa-92f4-2e7b027fbaf1');
      $("#dinheiro").prop('disabled', true);
      $("#dinheiroTexto").val('');
      $("#dinheiroTexto").prop('disabled', true);
      $("input[name='cartao']").prop('checked', false);
      $("input[name='cartao']").prop('disabled', true);
    } else {
      $("#dado").text('');
      $("#dinheiro").prop('disabled', false);
      $("input[name='cartao']").prop('disabled', false);
    }
  });

  $("input[name='cartao']").on("click", function(){
    $("#dado").text('');
    $("#dinheiroTexto").val('');
  });

  $("#dinheiro").on("click", function(){
    $("#dinheiroTexto").val(25123642);
    $("input[name='cartao']").prop('checked', false);
    $("#dado").text('');
  });

  $("#confirmarCompra").on("click", function(){
    let end = false;
    let dinheiro = $("#dinheiroTexto").val();
    let pix = $("#dado").text();
    let cartao = "";

    
  console.log($("input[name='endereco']:checked").val());
    if($("input[name='endereco']:checked").prop("checked")){
      
      console.log("end true");
      if($("input[name='cartao']:checked").prop("checked")){
        cartao = $("input[name='cartao']:checked").val();
      };

      if(dinheiro != "" || pix != ""){
        // chame modal pendente
        $("#staticBackdrop4").modal('show');
        iniciarContador();
        
      }

      if(cartao != ""){
        // chame modal loading
        $("#staticBackdrop5").modal('show');
        iniciarContador();
      }

      if(dinheiro == "" && pix == "" && cartao == ""){
        console.log("desmarcados");
        $("#staticBackdrop2").modal('show');
      }

    }
    else{
      console.log("end false");
      alert("selecione endereço");
    }

  });
});


