$(document).ready(function(){
    console.log($('header button'));
    $('header button').click(function() {
        $('form').slideDown();
    })
})


$('#botao-cancelar').click(function(){
    $('form').slideUp();
})

$('form').on('submit', function(e) {
    e.preventDefault();
    const novaImagem = $('#nova-imagem').val();
    const novoItem = $('<li style="display:none"></li>');
    $(`<img src="${novaImagem}" />`).appendTo(novoItem);
    $(`
    <div class="imagem-link">
    <a href="${novaImagem}" target="_blank" title=" Ver Imagem em Tamanho Real"> Ver Imagem em Tamanho Real </a>
    </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(700);
    $('#nova-imagem').val(' ');
})

