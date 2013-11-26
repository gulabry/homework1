//File merges information from menu.js and menu.html. to
//create a dynamic menu.


if ($("title").html() == "Menu") { 
	$(function(){
		//console.log("ready!");
		pizzaRender(com.dawgpizza.menu.pizzas);
		dRender(com.dawgpizza.menu.drinks);
		dRender(com.dawgpizza.menu.desserts);
	}); //on ready function
}
if ($("title").html() == "Order") {
	$(function() {
		renderPizzaOrder(com.dawgpizza.menu.pizzas);
		renderDOrder(com.dawgpizza.menu.drinks, '.drinks', 'dr');
		renderDOrder(com.dawgpizza.menu.desserts, '.desserts', 'de');
	});
}

function pizzaRender(entries){
	var instance;
	var template = $('.pizza');
	var food = $('.food');
	$.each(entries, function(){
	    instance = template.clone();
	   	instance.find('.name').html(this.name);
	    instance.find('.desc').html(this.description);
	    instance.find('.pizza-s').html(this.prices[0]);
	    instance.find('.pizza-m').html(this.prices[1]);
	    instance.find('.pizza-l').html(this.prices[2]);
	    instance.removeClass('template');
        food.append(instance);

	}); //for each pizza, input name, description, and price
}

function dRender(entries, type, suffix){
	var instance;
	var template = $(type);
	var food = $('.food-' + suffix);
	$.each(entries, function(){
	    instance = template.clone();
	   	instance.find('.name-' + suffix).html(this.name);
	    instance.find('.price-' + suffix).html(this.price);
	    instance.removeClass('template');
        food.append(instance);

	}); //for each drink, input name and price
}

function renderPizzaOrder(entries) {
	var instance;
	var template = $('.pizza');
	var food = $('.food');
	$.each(entries, function(){
	    instance = template.clone();
	   	instance.find('.name').html(this.name);
	    instance.find('.desc').html(this.description);
	    
	    var tempSmall = instance.find('.pizza-s');
	    tempSmall.html('<a data-size="small" class="order" id="' + this.name + '=s">' + this.prices[0] + '</a>');
	    tempSmall.find("a").attr('data-price', this.prices[0]);

	   	var tempMedium = instance.find('.pizza-m');
	    tempMedium.html('<a data-size="medium" class="order" id="' + this.name + '=m">' + this.prices[1] + '</a>');
	    tempMedium.find("a").attr('data-price', this.prices[1]);

	    var tempLarge = instance.find('.pizza-l');
	    tempLarge.html('<a data-size="large" class="order" id="' + this.name + '=l">' + this.prices[2] + '</a>');
	    tempLarge.find("a").attr('data-price', this.prices[2]);

		instance.find('a').attr('data-name', this.name);
		instance.find('a').attr('data-type', this.type);
	    instance.removeClass('template');
        food.append(instance);
	});
}

function renderDOrder(entries, type, suffix){
	var instance;
	var template = $(type);
	var food = $('.food-' + suffix);
	$.each(entries, function(){
	    instance = template.clone();
	   	instance.find('.name-' + suffix).html(this.name);
	    instance.find('.price-' + suffix).html('<a class="order" id="' + this.name + '=' + suffix + '">' + this.price + '</a>');
	    
	    instance.find('a').attr('data-name', this.name);
	    instance.find('a').attr('data-type', this.type);
	    instance.find("a").attr('data-price', this.price);

	    instance.removeClass('template');
        food.append(instance);

	}); 
} 
