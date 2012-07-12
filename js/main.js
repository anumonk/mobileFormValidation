/*
 * Form validation example.
 *
 * Copyright 2012, Anu Shahi
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Initialises the formValidation plugin for our sample jQuery Mobile form
 * page.
 *
 */

$( document ).on( "pageinit", "#feedback", function( event ) {
    var form = $( event.target ).find( "form" );
    //initialise form validation for the snack feedback form
    formValidation.validate( form, {
        rules: {
            region: "required",
            snack: "required",
            feedback: "required"
        }
    });
});
