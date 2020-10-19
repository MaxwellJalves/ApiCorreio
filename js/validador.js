var resposta= "" ;

function consultaCep(){
var cepCli = document.getElementById('cep').value;
var url = `http://viacep.com.br/ws/${cepCli}/json`;

console.log( cepCli);
  $.ajax({
          url  :  url,
          type : "GET",
          success: function(response){
            console.log(response)
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#cidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#ibge").html(response.ibge);
          
            $(".row").show();
          
          } 
      });
} 

function limparTela(){
 clean();
}

function clean(){
  $(function(){
    $(".row").hide();
  })
}