const urlParams = window.location.search;
const urlParamsObj = new URLSearchParams(urlParams);

let searchParams = new URLSearchParams(window.location.search);

const loadedSizeFromUrl = urlParamsObj.get('size');
if (loadedSizeFromUrl == "small") {
    $('#size-s').toggleClass("product-size-option-selected");
} else if (loadedSizeFromUrl == "medium") {
    $('#size-m').toggleClass("product-size-option-selected");
} else if (loadedSizeFromUrl == "large") {
    $('#size-l').toggleClass("product-size-option-selected");
}

$('#size-s').click(function() {
    if ($('#size-m').hasClass('product-size-option-selected')) {
        $('#size-m').toggleClass('product-size-option-selected');
        $('#size-s').toggleClass("product-size-option-selected");

        searchParams.set("size", "small");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?size=small"

            window.history.replaceState({
                path: url
            }, "", url)
        }

        return;
    } else if ($('#size-l').hasClass('product-size-option-selected')) {
        $('#size-l').toggleClass('product-size-option-selected');
        $('#size-s').toggleClass("product-size-option-selected");

        searchParams.set("size", "small");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?size=small"

            window.history.replaceState({
                path: url
            }, "", url)
        }

        return;
    } else {
        $('#size-s').toggleClass("product-size-option-selected");

        searchParams.set("size", "small");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?size=small"

            window.history.replaceState({
                path: url
            }, "", url)
        }

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
                        + "?size=medium"

            window.history.replaceState({
                path: url
            }, "", url)
        }

        return;
    } else if ($('#size-l').hasClass('product-size-option-selected')) {
        $('#size-l').toggleClass('product-size-option-selected');
        $('#size-m').toggleClass("product-size-option-selected");

        searchParams.set("size", "medium");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?size=medium"

            window.history.replaceState({
                path: url
            }, "", url)
        }

        return;
    } else {
        $('#size-m').toggleClass("product-size-option-selected");

        searchParams.set("size", "medium");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?size=medium"

            window.history.replaceState({
                path: url
            }, "", url)
        }

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
                        + "?size=large"

            window.history.replaceState({
                path: url
            }, "", url)
        }

        return;
    } else if ($('#size-m').hasClass('product-size-option-selected')) {
        $('#size-m').toggleClass('product-size-option-selected');
        $('#size-l').toggleClass("product-size-option-selected");

        searchParams.set("size", "large");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?size=large"

            window.history.replaceState({
                path: url
            }, "", url)
        }

        return;
    } else {
        $('#size-l').toggleClass("product-size-option-selected");

        searchParams.set("size", "large");

        if (window.history.replaceState) {
            const url = window.location.protocol 
                        + "//" + window.location.host 
                        + window.location.pathname 
                        + "?size=large"

            window.history.replaceState({
                path: url
            }, "", url)
        }
        
        return;
    }
});