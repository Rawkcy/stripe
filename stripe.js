var stripeHandler = function(status, response) {
    if (response.error) {
        // some error has occured
        $(".payment-errors").text(response.error.message);
    } else {
        var pm_form = 
    }
}

Stripe.setPublishableKey('pk_test_fCFFStJ1Eum0dKY1FlxmOZbv');

