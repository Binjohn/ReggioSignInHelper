/**
 * Reggio Sign In Helper
 *
 * @version 0.1
 */

javascript: (function () {
    var el = document.getElementById("attendances_newinput_2in1");
    el.type = "password"; // disable IME
    lock();
    
    // lock the focus to the input field
    window.addEventListener("focus", lock);
    document.addEventListener("visibilitychange", lock);
    document.addEventListener("click", lock);
    
    // callback function
    function lock(event) {
        el.focus();
    }
})();

/**
 * changelog
 *
 * @version 0.1 2025-10-01
 */
