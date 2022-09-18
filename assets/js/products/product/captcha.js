function successCallback(token) {
    alert('Success');
    grecaptcha.reset();
    $('.recaptcha-option').hide(0);
}
function expiredCallback(token) {
    alert('The Captcha expired and must be re-tried. The page will reload after you dismiss this message.');
    window.location.reload();
}
function errorCallback(token) {
    alert('There was most likely a network error and the captcha must be re-tried. The page will reload after you dismiss this message.');
    window.location.reload();
}