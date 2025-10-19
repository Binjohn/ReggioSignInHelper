/**
 * Reggio Sign In Helper
 *
 * @version 0.5
 */

javascript: (function () {
    // wait onload event to avoid password autocomplete
    window.addEventListener("load", bjtOnLoad, { once: true });
    /* Do not put addEventListener() in the else statement,
     * there might be a race condition and bjtOnLoad() never run.
     * Note that DOM rendering is asynchronous! */
    if (document.readyState === "complete") { bjtOnLoad(); }
    
    // main
    function bjtOnLoad() {
        // wait more to avoid password autocomplete // onload is not enough
        requestAnimationFrame(function () {
            var el = document.getElementById("attendances_newinput_2in1");
            if (el === null) { return; } // element not found
            if (el.type === "password") { return; } // prevent re-injeciton
            
            // inject
            el.type = "password"; // disable IME
            el.placeholder = "Student/Staff ID";
            
            // highlight to indicate injection state
            el.style.border = "3px solid limegreen";
            el.style.borderRight = "none";
            el.style.backgroundColor = "honeydew";
            
            // lock the focus to the input field
            bjtLock();
            window.addEventListener("focus", bjtLock);
            document.addEventListener("visibilitychange", bjtLock);
            document.addEventListener("click", bjtLock);
            
            // callback function
            function bjtLock(event) {
                if (!document.contains(el)) { return; } // prevent page modification
                if (event?.target?.closest?.("#attendances_newbtn_2in1, #attendances_newinput_2in1")) {
                    // the button or the input field is clicked
                    // closest() includes their children
                    return;
                } else {
                    // anything else is clicked
                    el.value = "   "; // fill 3 spaces to avoid password autocomplete
                    el.select(); // ready to be replaced by ID input
                    el.focus(); // focus last to avoid password autocomplete
                }
            }
        });
    }
})();

/**
 * changelog
 *
 * @version 0.5 2025-10-19
 * x Improves the logic to prevent re-injection.
 * + Allows re-injection if the user goes to another page and back.
 *
 * @version 0.4 2025-10-16
 * x Improves the logic to prevent re-injection.
 * x Improves the logic to avoid password autocomplete.
 * + Wait onload event to prevent race condition.
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
