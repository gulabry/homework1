
//document ready function
$(function(){

    //create a cart model as a simple object with
    //the properties we eventually need to post to
    //the server
    var cart = {
        name: null,
        address1: null,
        zip: null,
        phone: null,
        items: [] //empty array
    }; //cart data

    //click event handler for all buttons with the
    //style class 'add-to-cart'
    $('.order').click(function(){
        //use the attributes on the button to construct
        //a new cart item object that we can add to the
        //cart's items array
        var order = $(this);
        alert('dsadsa');
        var newCartItem = {
            type: this.getAttribute('data-type'),
            name: this.getAttribute('data-name'),
            size: this.getAttribute('data-size'),
            price: this.getAttribute('data-price')
        };

        //push the new item on to the items array
        cart.items.push(newCartItem);

        //render the cart's contents to the element
        //we're using to contain the cart information
        //note that you would need a <div> or some
        //other grouping element on the page that has a
        //style class of 'cart-container'
        renderCart(cart, $('.cart-container'));
    });

    $('.place-order').click(function(){
        
        //TODO: validate the cart to make sure all the required
        //properties have been filled out, and that the 
        //total order is greater than $20 (see homework 
        //instructions) 

        var signupForm = $(this);
        var addr1Input = signupForm.find('input[name="addr-1"]');
        var addr1Value = addr1Input.val();
        if(addr1Value.length > 0){
                var zipInput = signupForm.find('input[name="zip"]');
                var zipValue = zipInput.val();
                if(zipValue.length == 0){
                        alert('Please provide a zip code.');
                        return false;
                }
        }
        var min = total();
        if(min < 20){
            alert('Please place a minimum order of $20');
            return false;
        }
    });

}); //doc ready

// renderCart()
// renders the current cart information to the screen
// parameters are:
//  - cart (object) reference to the cart model
//  - container (jQuery object) reference to the container <div>
//
function renderCart(cart, container) {
    var idx, item;
    var tax = 0;
    var total = 0;
    
    //empty the container of whatever is there currently
    container.empty();

    //for each item in the cart...
    for (idx = 0; idx < cart.items.length; ++idx) {
        item = cart.items[idx];

        //TODO: code to render the cart item

    } //for each cart item


    cart.getTotalPrice = function() {
        var idx;
        var totalPrice = 0;
        for(idx = 0; idx < this.items.length; ++idx){
        totalPrice += this.items[idx].price;
        }
        return totalPrice.toFixed(2);
    }; //getTotalPrice

    cart.getTax = function (getTotalPrice) {
        var taxPrice = getTotalPrice;
        taxPrice = totalPrice * .095;
        return taxPrice.toFixed(2); 
    }

    //TODO: code to render sub-total price of the cart
    //the tax amount (see instructions), 
    //and the grand total

} //renderCart()

// postCart()
// posts the cart model to the server using
// the supplied HTML form
// parameters are:
//  - cart (object) reference to the cart model
//  - cartForm (jQuery object) reference to the HTML form
//
function postCart(cart, cartForm) {
    //find the input in the form that has the name of 'cart'    
    //and set it's value to a JSON representation of the cart model
    cartForm.find('input[name="cart"]').val(JSON.stringify(cart));

    //submit the form--this will navigate to an order confirmation page
    cartForm.submit();

} //postCart()
