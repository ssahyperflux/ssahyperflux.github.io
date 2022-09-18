// Define Current Price, Sizes, and Quantity
var currentPrice = 0;
const Sizes = {
    S: "small",
    M: "medium",
    L: "large"
}
const smallPrice = 25;
const smallPremiumPrice = smallPrice + 10;
const mediumPrice = 35;
const mediumPremiumPrice = mediumPrice + 15;
const largePrice = 50;
const largePremiumPrice = largePrice + 25;
var selectedQuantity = 1;

// Load URL Search Params
const urlParams = window.location.search;
const urlParamsObj = new URLSearchParams(urlParams);

let searchParams = new URLSearchParams(window.location.search);

// Load Size Search Param
const loadedSizeFromUrl = urlParamsObj.get('size');
if (loadedSizeFromUrl == "small") {
    // Select Small Size on website
    $('#size-s').toggleClass("product-size-option-selected");
} else if (loadedSizeFromUrl == "medium") {
    // Select Medium Size on website
    $('#size-m').toggleClass("product-size-option-selected");
} else if (loadedSizeFromUrl == "large") {
    // Select Large Size on website
    $('#size-l').toggleClass("product-size-option-selected");
}

// Load Premium Search Param
const loadedPremiumFromUrl = urlParamsObj.get('premium');
if (loadedPremiumFromUrl == "true") {
    // Select Premium on website
    $('#premium-yes').toggleClass("premium-product-option-selected");
    
    // Update Prices based off of selected size
    if (loadedSizeFromUrl == "small") {
        price = calculatePrice(Sizes.S, true);
        updatePrice(Sizes.S);
    } else if (loadedSizeFromUrl == "medium") {
        price = calculatePrice(Sizes.M, true);
        updatePrice(Sizes.M);
    } else if (loadedSizeFromUrl == "large") {
        price = calculatePrice(Sizes.L, true);
        updatePrice(Sizes.L);
    }

} else {
    $('#premium-no').toggleClass("premium-product-option-selected");
    // Update Prices based off of selected size
    if (loadedSizeFromUrl == "small") {
        price = calculatePrice(Sizes.S, false);
        updatePrice(Sizes.S);
    } else if (loadedSizeFromUrl == "medium") {
        price = calculatePrice(Sizes.M, false);
        updatePrice(Sizes.M);
    } else if (loadedSizeFromUrl == "large") {
        price = calculatePrice(Sizes.L, false);
        updatePrice(Sizes.L);
    }
}

const loadedQuantityFromUrl = urlParamsObj.get('qty');
if (loadedQuantityFromUrl == '1') {
    $('#quantity-dropdown').val('1').change();
} else if (loadedQuantityFromUrl == '2') {
    $('#quantity-dropdown').val('2').change();
} else if (loadedQuantityFromUrl == '3') {
    $('#quantity-dropdown').val('3').change();
} else if (loadedQuantityFromUrl == '4') {
    $('#quantity-dropdown').val('4').change();
} else if (loadedQuantityFromUrl == '5') {
    $('#quantity-dropdown').val('5').change();
} else if (loadedQuantityFromUrl == '6') {
    $('#quantity-dropdown').val('6').change();
} else if (loadedQuantityFromUrl == '7') {
    $('#quantity-dropdown').val('7').change();
} else if (loadedQuantityFromUrl == '8') {
    $('#quantity-dropdown').val('8').change();
} else if (loadedQuantityFromUrl == '9') {
    $('#quantity-dropdown').val('9').change();
} else if (loadedQuantityFromUrl == '10') {
    $('#quantity-dropdown').val('10').change();
}

selectedQuantity = $('#quantity-dropdown').val();
price = calculatePrice(findSelectedSize());
updatePrice(findSelectedSize());

$('#size-s').click(function() {
    if ($('#size-m').hasClass('product-size-option-selected')) {
        $('#size-m').toggleClass('product-size-option-selected');
        $('#size-s').toggleClass("product-size-option-selected");

        searchParams.set("size", "small");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(Sizes.S, $('premium-yes').hasClass('premium-product-option-selected'));
        updatePrice(Sizes.S);

        return;
    } else if ($('#size-l').hasClass('product-size-option-selected')) {
        $('#size-l').toggleClass('product-size-option-selected');
        $('#size-s').toggleClass("product-size-option-selected");

        searchParams.set("size", "small");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(Sizes.S, $('premium-yes').hasClass('premium-product-option-selected'));
        updatePrice(Sizes.S);

        return;
    } else {
        $('#size-s').toggleClass("product-size-option-selected");

        searchParams.set("size", "small");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(Sizes.S, $('premium-yes').hasClass('premium-product-option-selected'));
        updatePrice(Sizes.S);

        return;
    }
});

$('#size-m').click(function() {
    if ($('#size-s').hasClass('product-size-option-selected')) {
        $('#size-s').toggleClass('product-size-option-selected');
        $('#size-m').toggleClass("product-size-option-selected");

        searchParams.set("size", "medium");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(Sizes.M, $('premium-yes').hasClass('premium-product-option-selected'));
        updatePrice(Sizes.M);

        return;
    } else if ($('#size-l').hasClass('product-size-option-selected')) {
        $('#size-l').toggleClass('product-size-option-selected');
        $('#size-m').toggleClass("product-size-option-selected");

        searchParams.set("size", "medium");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(Sizes.M, $('premium-yes').hasClass('premium-product-option-selected'));
        updatePrice(Sizes.M);

        return;
    } else {
        $('#size-m').toggleClass("product-size-option-selected");

        searchParams.set("size", "medium");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(Sizes.M, $('premium-yes').hasClass('premium-product-option-selected'));
        updatePrice(Sizes.M);

        return;
    }
});

$('#size-l').click(function() {
    if ($('#size-s').hasClass('product-size-option-selected')) {
        $('#size-s').toggleClass('product-size-option-selected');
        $('#size-l').toggleClass("product-size-option-selected");

        searchParams.set("size", "large");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(Sizes.L, $('premium-yes').hasClass('premium-product-option-selected'));
        updatePrice(Sizes.L);

        return;
    } else if ($('#size-m').hasClass('product-size-option-selected')) {
        $('#size-m').toggleClass('product-size-option-selected');
        $('#size-l').toggleClass("product-size-option-selected");

        searchParams.set("size", "large");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(Sizes.L, $('premium-yes').hasClass('premium-product-option-selected'));
        updatePrice(Sizes.L);

        return;
    } else {
        $('#size-l').toggleClass("product-size-option-selected");

        searchParams.set("size", "large");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(Sizes.L, $('premium-yes').hasClass('premium-product-option-selected'));
        updatePrice(Sizes.L);
        
        return;
    }
});

$('#premium-no').click(function() {
    if ($('#premium-yes').hasClass('premium-product-option-selected')) {
        $('#premium-yes').toggleClass('premium-product-option-selected');
        $('#premium-no').toggleClass("premium-product-option-selected");

        searchParams.set("premium", "false");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(findSelectedSize(), false);
        updatePrice(findSelectedSize());

        return;
    } else {
        $('#premium-no').toggleClass("premium-product-option-selected");

        searchParams.set("premium", "false");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(findSelectedSize(), false);
        updatePrice(findSelectedSize());

        return;
    }
});

$('#premium-yes').click(function() {
    if ($('#premium-no').hasClass('premium-product-option-selected')) {
        $('#premium-no').toggleClass('premium-product-option-selected');
        $('#premium-yes').toggleClass("premium-product-option-selected");

        searchParams.set("premium", "true");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(findSelectedSize(), true);
        updatePrice(findSelectedSize());

        return;
    } else {
        $('#premium-yes').toggleClass("premium-product-option-selected");

        searchParams.set("premium", "true");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

        price = calculatePrice(findSelectedSize(), true);
        updatePrice(findSelectedSize());

        return;
    }
});

$('#quantity-dropdown').change(function() {
    selectedQuantity = this.value;

    searchParams.set("qty", selectedQuantity.toString());

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?" 
                        + searchParams.toString();

            window.history.replaceState({
                path: url
            }, "", url)
        }

    price = calculatePrice(findSelectedSize());
    updatePrice(findSelectedSize());
});

$('#purchase-btn').click(function() {
    $('.recaptcha-option').fadeIn(1000);
});

function findSelectedSize() {
    var foundSize = 0;
    if ($('#size-s').hasClass('product-size-option-selected')) {
        foundSize = Sizes.S;
    } else if ($('#size-m').hasClass('product-size-option-selected')) {
        foundSize = Sizes.M;
    } else if ($('#size-l').hasClass('product-size-option-selected')) {
        foundSize = Sizes.L;
    }

    return foundSize;
}

function calculatePrice(size, premium, quantity) {
    if (!premium) {
        premium = $('#premium-yes').hasClass('premium-product-option-selected');
    }

    if (!quantity) {
        quantity = selectedQuantity;
    }

    if (size == Sizes.S) {
        if (premium) {
            return smallPremiumPrice * quantity;
        } else if (!premium) {
            return smallPrice * quantity;
        }
    } else if (size == Sizes.M) {
        if (premium) {
            return mediumPremiumPrice * quantity;
        } else if (!premium) {
            return mediumPrice * quantity;
        }
    } else if (size == Sizes.L) {
        if (premium) {
            return largePremiumPrice * quantity;
        } else if (!premium) {
            return largePrice * quantity;
        }
    }
}

function updatePrice(size, premium, quantity) {
    if (!premium) {
        premium = $('#premium-yes').hasClass('premium-product-option-selected');
    }

    if (!quantity) {
        quantity = selectedQuantity;
    }

    if (size == Sizes.S) {
        price = calculatePrice(Sizes.S, premium, selectedQuantity);
        $('#price').text('Price (Tax not Included): $' + price);
        $('#premium-yes').text('+RGB ($' + (smallPremiumPrice - smallPrice) + ')');
    } else if (size == Sizes.M) {
        price = calculatePrice(Sizes.M, premium, selectedQuantity);
        $('#price').text('Price (Tax not Included): $' + price);
        $('#premium-yes').text('+RGB ($' + (mediumPremiumPrice - mediumPrice) + ')');
    } else if (size == Sizes.L) {
        price = calculatePrice(Sizes.L, premium, selectedQuantity);
        $('#price').text('Price (Tax not Included): $' + price);
        $('#premium-yes').text('+RGB ($' + (largePremiumPrice - largePrice) + ')');
    }
}