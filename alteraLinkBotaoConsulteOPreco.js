$(document).ready(function () {
  var whats = '5522999922233';
  var botao = $('#produto-consulta-preco');
  botao
    .attr('href', 'https://api.whatsapp.com/send/?phone=' + whats + '&text&app_absent=0')
    .attr('target', '_blank')
    .attr('id', 'prod-consulta-preco');
  $(botao).css({
    border: 'none',
    'background-image': 'none',
    '-webkit-border-radius': '5px',
    '-moz-border-radius': '5px',
    'border-radius': '5px',
    'background-image': 'none',
    'font-size': '16px',
    'font-weight': 'bold',
    'text-shadow': 'none',
    'line-height': '49px',
    padding: '0',
    'box-shadow': '0px 2px 4px 0px rgba(203, 203, 203, 0.55)',
    display: 'block',
  });
});

setTimeout(function () {
  var whats = '5522999922233';
  var botao = $('#produto-consulta-preco');
  botao
    .attr('href', 'https://api.whatsapp.com/send/?phone=' + whats + '&text&app_absent=0')
    .attr('target', '_blank')
    .attr('id', 'prod-consulta-preco');
  $(botao).css({
    border: 'none',
    'background-image': 'none',
    '-webkit-border-radius': '5px',
    '-moz-border-radius': '5px',
    'border-radius': '5px',
    'background-image': 'none',
    'font-size': '16px',
    'font-weight': 'bold',
    'text-shadow': 'none',
    'line-height': '49px',
    padding: '0',
    'box-shadow': '0px 2px 4px 0px rgba(203, 203, 203, 0.55)',
    display: 'block',
  });
}, 1000);
