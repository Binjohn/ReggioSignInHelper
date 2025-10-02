/**
 * Reggio Sign In Helper
 *
 * @version 0.2
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
        if (event?.target?.closest?.("#attendances_newbtn_2in1, #attendances_newinput_2in1")) {
            // the button or the input field is clicked
            // closest() includes their children
            return;
        } else {
            // anything else is clicked
            el.value = "   ";
            el.focus();
        }
    }
})();

/**
 * changelog
 *
 * @version 0.2 2025-10-02
 * + Avoid password autocomplete by set the value to three white spaces.
 * + Exclude when the button or the input field is clicked
 *
 * @version 0.1 2025-10-01
 */
