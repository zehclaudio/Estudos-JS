document.addEventListener("DOMContentLoaded", function(event) {
    if (document.getElementById('customers_view') !== null) {
        var customersView = document.getElementById('customers_view');
        var views = customersView.dataset.customerView.replace(/\s/g, '').split(',');
        var label = document.querySelector('#customers_view label');
        label.innerText = views[Math.floor(Math.random() * views.length)];
        //Atualiza o valor das views a cada 5 segundos
        setInterval(function () { label.innerText = views[Math.floor(Math.random() * views.length)] }, 5000);
    }
});
