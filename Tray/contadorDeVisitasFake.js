document.addEventListener("DOMContentLoaded", function(event) {
    if (document.getElementById('customers_view') !== null) {
        var customersView = document.getElementById('customers_view');
        var views = customersView.dataset.customerView.replaceAll(' ', '').split(',');
        var label = document.querySelector('#customers_view label');
        label.innerText = views[Math.floor(Math.random() * views.length)];
    }
});
