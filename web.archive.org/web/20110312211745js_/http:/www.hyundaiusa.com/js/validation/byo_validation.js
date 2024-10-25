var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function() {
    //Intercept the form submission and run some client-side validation
    $('#' + formId + ' a.submit').click(function() {
        var form = $(this).parents('#' + formId);
        var errorSummary = form.find('.error_summary').empty().hide().append('<p>' + summaryMsg + '</p>');
        var validated = false;

        form.find('.invalid_input').removeClass('invalid_input');

        var empty = {};
        if ($('#' + formId + ' .save_request_quote input.save_request_quote').attr('checked')) {
            var phoneEntered = false;
            $('div.save_phone_number input').each(function() {
                if ($(this).val().length > 0) {
                    phoneEntered = true;
                }
            });

            //			$('div.save_phone_number input, div.save_extension input').each(function() {
            //			    if ($(this).val().length > 0) {
            //			        phoneEntered = true;
            //			    }
            //			});

            //			phoneExtEntered = $('div.save_extension input').val() !== '' ?
            //				true :
            //				false;

            if (phoneEntered) {
                saveRules = $.extend(empty, saveCreationRules, saveRequestQuoteRules, savePhoneValidation);

                //				if (phoneExtEntered) {
                //					saveRules = $.extend(empty, saveRules, savePhoneExtValidation);
                //				}
            } else {
                saveRules = $.extend(empty, saveCreationRules, saveRequestQuoteRules);
            }
        } else {
            saveRules = $.extend(empty, saveCreationRulesWithoutPhone); //CreationRules);
        }

        validated = IC.Validator.validateForm(saveRules, $('#' + formId), {
            fieldAttribute: 'class',
            fieldError: function(field, ruleName, errorMessage) {
                $(field).addClass('invalid_input');
            },
            complete: function(errors) {
                errorSummary.append('<ul></ul>');
                $(errors).each(function(i) {
                    errorSummary.find('ul').append('<li>' + errors[i] + '</li>');
                });
                if (errors.length) {
                    if ($('#modal').height() > $(window).height()) {
                        $.scrollTo('body');
                    }

                    errorSummary.fadeIn(2000);
                }
            }
        });

        if (validated) saveBYO();

        return false;
    });
});


}
/*
     FILE ARCHIVED ON 10:52:08 Feb 04, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:01:09 Oct 09, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.434
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 7.269
  LoadShardBlock: 219.805 (3)
  PetaboxLoader3.datanode: 150.519 (4)
  PetaboxLoader3.resolve: 241.882 (2)
  load_resource: 183.434
*/