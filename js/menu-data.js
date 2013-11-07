$(function(){
    console.log("ready");
    pizza(com.dawgpizza.menu.pizzas);
    drinks(com.dawgpizza.menu.drinks);
    desserts(com.dawgpizza.menu.desserts);
});


function pizza(entries) {
    var $pizza = $('.pizza');
    var $holder = $('.pizza-menu');
    var $repetition;
    $.each(entries, function() {
        $repetition= $pizza.clone();
        $repetition.find('.pizza-name').html(this.name);
        $repetition.find('.script').html(this.description);

        var price = this.prices[0];

        for (var i = 1; i < this.prices.length; i++) {
            price += ", " + this.prices[i]; 
        };

        $repetition.find('.pizza-prices').html(price);
        $holder.append($repetition);
    });
}

function drinks(entries) {
    var $drinks = $('.drinks');
    var $holder = $('.drinks-menu');
    var $repetition;
    $.each(entries, function() {
        $repetition= $drinks.clone();
        $repetition.find('.drinks-name').html(this.name);
        $repetition.find('.drinks-prices').html(this.price);
        $holder.append($repetition);
    });
}

function desserts(entries) {
    var $desserts = $('.desserts');
    var $holder = $('.desserts-menu');
    var $repetition;
    $.each(entries, function() {
        $repetition= $desserts.clone();
        $repetition.find('.desserts-name').html(this.name);
        $repetition.find('.desserts-prices').html(this.price);
        $holder.append($repetition);
    });
}