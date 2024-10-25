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


var formId = 'saveCreationModal';
var summaryMsg = 'There seems to be an error in your form. Please check the fields below for details.';
var saveErrorMsg = 'There was an error saving your vehicle. Please try again later.';		
var saveCreationRules = '';
var saveRequestQuoteRules = '';
var savePhoneValidation = '';	
$(function () {		
	saveCreationRules = {
		'save_first_name': 
			[
				{ ruleName:'required', errorMessage:'Please enter your first name.' }
			],
		'save_last_name': 
			[
				{ ruleName:'required', errorMessage:'Please enter your last name.' }
			],
		'save_email_address': 
			[ 
				{ ruleName:'required', errorMessage:'Please enter your email address.' },
				{ ruleName:'email', errorMessage:'Please enter a valid email address.' }
			],
		'save_confirm_email_address': 
			[
				{ ruleName:'required', errorMessage:'Please confirm your email address.' },
				{ ruleName:'match', param:$('input.save_email_address'), errorMessage:'The two email addresses you entered don’t match. Please check them again.' }
			],
		'save_phone1': 
			[
				{ ruleName:'required', errorMessage:'Please enter your phone area code' }
			],
		'save_phone2': 
			[
				{ ruleName:'required', errorMessage:'Please enter your phone prefix number' }
			],
		'save_phone3': 
			[
				{ ruleName:'required', errorMessage:'Please enter your phone number' }
			],
			
		'save_comments': [
			{ ruleName: 'maxLength', param: '250', errorMessage: 'Max message length is 250 characters.' }
		]
	};			
	saveRequestQuoteRules = {
		'save_zip': 
			[ 
				{ ruleName:'required', errorMessage:'Please enter your ZIP code.' },
				{ ruleName:'postalCode.us.short', errorMessage:'Please enter a valid ZIP code.' }
			],
		'save_dealer_code': 
			[
				{ ruleName:'required', errorMessage:'You must select a dealer to request a quote.'}
			]
	};

	savePhoneValidation = {			
		'valid_phone_area': 
			[					
				{ ruleName:'minLength', param:'3', errorMessage:'Phone area code must have at least 3 numbers.' },
				{ ruleName:'numeric', errorMessage:'Phone area code entered is invalid.'}
			],
		'valid_phone_prefix': 
			[					
				{ ruleName:'minLength', param:'3', errorMessage:'Phone prefix must have at least 3 numbers.' },
				{ ruleName:'numeric', errorMessage:'Phone prefix entered is invalid.'}
			],
		'valid_phone_number': 
			[					
				{ ruleName:'minLength', param:'4', errorMessage:'Phone number must have at least 4 numbers.' },
				{ ruleName:'numeric', errorMessage:'Phone number entered is invalid.'}
			]
	};				

	saveCreationRulesWithoutPhone = {
		'save_first_name': 
			[
				{ ruleName:'required', errorMessage:'Please enter your first name.' }
			],
		'save_last_name': 
			[
				{ ruleName:'required', errorMessage:'Please enter your last name.' }
			],
		'save_email_address': 
			[ 
				{ ruleName:'required', errorMessage:'Please enter your email address.' },
				{ ruleName:'email', errorMessage:'Please enter a valid email address.' }
			],
		'save_confirm_email_address': 
			[
				{ ruleName:'required', errorMessage:'Please confirm your email address.' },
				{ ruleName:'match', param:$('input.save_email_address'), errorMessage:'The two email addresses you entered don’t match. Please check them again.' }
			]
	};			

});


}
/*
     FILE ARCHIVED ON 10:52:11 Feb 04, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:01:09 Oct 09, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.62
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.011
  esindex: 0.01
  cdx.remote: 6.343
  LoadShardBlock: 124.48 (3)
  PetaboxLoader3.datanode: 112.646 (4)
  load_resource: 520.848
  PetaboxLoader3.resolve: 131.117
*/