/**
 * Reggio Sign In Helper
 *
 * @version 0.3
 */

javascript: (function () {
    // #ifndef // prevent re-injection
    if (typeof(bjtLocked) !== "undefined") { return; }
    window.bjtLocked = true;
    
    // inject
    var el = document.getElementById("attendances_newinput_2in1");
    el.type = "password"; // disable IME
    lock();
    
    // highlight to indicate injection state
    el.style.border = "3px solid limegreen";
    el.style.borderRight = "none";
    el.style.backgroundColor = "honeydew";
    
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
            el.focus(); // focus last to ensure the cursor blinks
            el.value = "   "; // avoid password auto-complete
            el.select(); // select all text
        }
    }
})();

/**
 * changelog
 *
 * @version 0.3 2025-10-03
 * x Selects all text in the input field for intuitiveness.
 * x Prevents re-injection.
 * * Highlights the input field as injection indicator.
 *
 * @version 0.2 2025-10-02
 * + Avoids password autocomplete by inserting white spaces.
 * + Excludes clicks on the button or the input field.
 *
 * @version 0.1 2025-10-01
 */
