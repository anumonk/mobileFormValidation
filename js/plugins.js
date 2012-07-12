/*
 * jQuery Mobile Validation Module
 *
 * Copyright 2012, Anu Shahi
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Module for configuring the jQuery Validation plugin to prevent problems 
 * encountered when attaching validation to form elements enhanced by jQuery Mobile.  
 * Specifically, a function is provided to place errors around enhanced controls 
 * so that error labels are presented in a sensible way; the plugin is also
 * configured to trigger validation on changes made to select menus/radio buttons.
 *
 */
var formValidation = (function( $ ) {

    var settingsForMobile = {
        errorPlacement: function( error, element ) {
            var container;
            if ( element.is( ":radio, select" ) ) {
                //place error in the element's field container
                container = element.closest( "[data-role='fieldcontain']" );
                if ( container.length ) {
                    error.appendTo( container );
                }
            }
            else {
                //for all text inputs and text areas insert error as normal
                error.insertAfter( element );
            }
        }
    };

    function handleChangeEvent( event ) {
        // code based on the jQuery validation framework
        var validator = $.data( this[0].form, "validator" );
        validator.element( this[0] );
    };

    return {

        validate: function( form, rules ) {
            var validator,
                validationModel = $.extend( true, {}, settingsForMobile, rules ),
                changeEventTargets = "[type='radio'], [type='checkbox'], select, option";

            validator = form.validate( validationModel );
            form.validateDelegate( changeEventTargets, "change", handleChangeEvent );
        }

    };

})( jQuery );

