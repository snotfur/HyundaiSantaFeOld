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

var byoModelName = '';
$(function() {
    //Align form fields using label padding
    //	if (!sIFR.isActive){
    var formLabelMaxHeight = 0;
    $('.save_phone_number label, .save_extension label, .save_zip_container label').each(function() {
        formLabelMaxHeight = (formLabelMaxHeight >= $(this).outerHeight()) ? formLabelMaxHeight : $(this).outerHeight();
    });
    $('.save_phone_number label, .save_extension label, .save_zip_container label').each(function() {
        $(this).css('padding-top', (formLabelMaxHeight - $(this).outerHeight()) + 'px');
    });
    //	}

    $('#saveCreationModal .save_incentives_promotions input').click(function() {
        if ($(this).attr('checked')) {
            this.defaultChecked = true;
        } else {
            this.defaultChecked = false;
        }
    });

    //Setup Enter key submit on form
    $('#saveContactInfo').find('input[type=text]').enterKey(function() {
        $(this).parents('#saveContactInfo').find('a.submit').click();
    });

    $('#saveCreationModal .save_request_quote input.save_request_quote').click(function() {
        if ($(this).attr('checked')) {
            this.defaultChecked = true;
            $('.content_modal #saveCreationModal').addClass('request_quote');
            // check for dealerLocator		
            (function() {
                if (window.dealerLocator) {
                    el.postalCodeInput.trigger('change');
                } else {
                    setTimeout(arguments.callee, 100);
                }
            })();
            $('#saveCreationModal .save_email_disclaimer').hide();
        } else {
            this.defaultChecked = false;
            $('.content_modal #saveCreationModal').removeClass('request_quote');
            $('#saveCreationModal .save_email_disclaimer').show();
        }
    });

    $('#saveCreationModal #saveConfirmation a.save_close_window, #retrieveCreationModal a.retrieve_close_window').click(function() {
        $('.content_modal a.content_modalClose').click();
        return false;
    });

    var el = {};
    el.locator = $('#quoteDealerLocator');
    el.map = el.locator.find('.map');
    el.dealersList = el.locator.find('.dealer_list');
    el.dealerCodeInput = $('#saveContactInfo input.save_dealer_code');
    el.allDealerCodeInput = $('#saveContactInfo input.save_all_dealer_codes');
    el.postalCodeInput = $('#saveContactInfo input.save_zip');

    /* Dealers
    ===================================================*/
    el.postalCodeInput.change(function() {
        // Clean up any current values
        el.dealersList.empty();
        el.dealerCodeInput.val('');
        el.allDealerCodeInput.val('');

        if (el.postalCodeInput.val().length < 5) {
            el.locator.attr('class', 'no-dealers-found');
            return false;
        }

        el.locator.attr('class', 'searching');
        el.map.addClass('searching');

        // Get dealers
        dealerLocator.getDealersByPostalCode(el.postalCodeInput.val(), function() {
            var dealerCount = this.dealers[this.postalCode].length;
            this.dealers[this.postalCode] = this.dealers[this.postalCode].slice(0, 5);

            for (var loopDealers in this.dealers[this.postalCode]) {
                if (loopDealers == 0) {
                    el.allDealerCodeInput.val(this.dealers[this.postalCode][loopDealers].DealerCode);
                } else {
                    el.allDealerCodeInput.val(el.allDealerCodeInput.val() + ',' + this.dealers[this.postalCode][loopDealers].DealerCode);
                }
            }

            // Set state
            el.locator.attr('class', dealerCount ? 'dealers-found' : 'no-dealers-found');
            el.map.addClass('loaded');

            // Process dealer nodes
            this.dealersToHTML($('#templates .quoteDealerLocator li'), function(dealerNode, marker, index) {
                var dealerNode = $(dealerNode);

                dealerNode.appendTo(el.dealersList);
                dealerNode.hoverClass();
                dealerNode.click(function() {
                    // Handle the marker and dealer select states
                    var targetDealer = $(this);
                    var targetMarker = targetDealer.find('.dealer_marker');

                    if (targetDealer.siblings('li.selected').length) {
                        var currentDealer = targetDealer.siblings('li.selected');
                        var currentMarker = currentDealer.find('.dealer_marker');
                        currentMarker.attr('style', currentMarker.attr('style').replace('orange', 'blue'));
                        currentDealer.removeClass('selected');
                    }

                    el.dealersList.scrollTo(targetDealer, 800);
                    targetMarker.attr('style', targetMarker.attr('style').replace('blue', 'orange'));
                    targetDealer.addClass('selected');

                    var dealerCode = dealerLocator.dealers[dealerLocator.postalCode][index].DealerCode
                    el.dealerCodeInput.val(dealerCode);

                    $('#saveContactInfo').find('a.submit').focus();

                });


                    // Hide all dealer website links that do not have websites
                    dealerNode.find('.dealer_links a.dealer_url').each(function () {
                        if ($(this).attr('href') == 'http://' || $(this).attr('href') == 'http:///' || $(this).attr('href') == 'http://?cs:e=hma') {

                            $(this).hide();
                        }
                    });

                    // Hide all dealer Xtime website links that do not have websites
                    dealerNode.find('.dealer_links a.dealer_Xtimeurl').each(function () {
                        if ($(this).attr('href') == '' || $(this).attr('href') == null || $(this).attr('href') == '&cs:e=hma') {
                            $(this).hide();
                        }
                    });

                    // Hide all dealer Search Inventory URL if Cobalt Flag set to 'Y' and Dealer URl is Blank
                    dealerNode.find('.dealer_links a.dealer_CobaltDealerUrl').each(function () {
                        if ($(this).attr('href') == '' || $(this).attr('href') == null || $(this).attr('href') == 'http://' || $(this).attr('href') == 'http:///' || $(this).attr('href') == 'http://&cs:e=hma') {
                            $(this).hide();
                        }
                    });

                // Get/set the path for the marker based on index
                var markerPath = HN.imagePath + '/map/blue/marker' + String.fromCharCode('A'.charCodeAt(0) + index) + '.png';
                var markerCSS = ($.browser.msie && $.browser.version == 6) ?
					{ background: 'none', filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + markerPath + '", sizingMethod="crop")'} :
					{ background: 'transparent url(' + markerPath + ') no-repeat' };

                dealerNode.find('.dealer_marker').css(markerCSS);
            });
        });
    });
});


function saveBYO() {
    var userinfo = "<lead>" +
					"<comments>{{save_comments}}</comments>" +
					"<dealercode>{{save_dealer_code}}</dealercode>" +
					"<email>{{save_email_address}}</email>" +
					"<firstname>{{save_first_name}}</firstname>" +
					"<futureincentives>{{save_email_incentives}}</futureincentives>" +
					"<getquote>{{save_request_quote}}</getquote>" +
					"<lastname>{{save_last_name}}</lastname>" +
					"<phoneareacode>{{save_phone1}}</phoneareacode>" +
					"<phoneextension>{{save_phone4}}</phoneextension>" +
					"<phoneprefixcode>{{save_phone2}}</phoneprefixcode>" +
					"<phonesuffixcode>{{save_phone3}}</phonesuffixcode>" +
					"{{promotionNode}}" +
					"<zipcode>{{save_zip}}</zipcode>" +
					"</lead>";

    var userInfoData = {};
    $('#saveCreationModal input, #saveCreationModal textarea').each(function(index) {
        switch ($(this).attr('name')) {
            case 'save_email_incentives':
                userInfoData[$(this).attr('name')] = ($(this).attr('checked')) ? '1' : '0';
                break;
            case 'save_request_quote':
                userInfoData[$(this).attr('name')] = ($(this).attr('checked')) ? '1' : '0';
                break;
            default:
                userInfoData[$(this).attr('name')] = $(this).val();
        }
    });

    var xmlDoc = $('#saveCreationModal #saveContactInfo input.save_xml').val();

    // Put the promotion node where it belongs.
    // We have to do this as a string manipulation because IE is having trouble
    // doing it properly.
    var promotionNode = '';

    var selfClosing = /<promotion[^<\/>]*\/>/;
    var nonSelfClosing = /<promotion[^<>]*>.*<\/promotion>/;

    if (selfClosing.test(xmlDoc)) {
        promotionNode = xmlDoc.match(selfClosing)[0];
    } else if (nonSelfClosing.test(xmlDoc)) {
        promotionNode = xmlDoc.match(nonSelfClosing)[0];
    }

    userInfoData.promotionNode = promotionNode;

    xmlDoc = '<byo>' +
					xmlDoc.replace(promotionNode, '') +
					IC.Template.parse(userinfo, userInfoData).replace("&", "&amp;") +
				'</byo>';


    jQuery.ajax({
        url: HN.getServiceURL('saveBYO'),
        type: "POST",
        processData: false,
        contentType: "text/xml; charset=UTF-8",
        data: xmlDoc,
        success: function(data, textStatus) {
            if (textStatus == "success") {
                $('#saveConfirmation').find('p.error_text').remove();
                $('#saveConfirmation p').show();
                $('#saveConfirmation div').show();

                if ($('#saveCreationModal .save_request_quote input.save_request_quote').attr('checked')) {
                    $('#saveConfirmation').find('span.sent_date').html($.PHPDate("F j , Y", new Date()));
                    $('#saveConfirmation div ul.savedDealerInfo').html('');

                    dealerLocator.getDealersByPostalCode($('#saveCreationModal .save_request_quote input.save_zip').val(), function() {
                        for (var loopDealers in this.dealers[this.postalCode]) {
                            if (this.dealers[this.postalCode][loopDealers].DealerCode == $('#saveCreationModal .save_request_quote input.save_dealer_code').val()) {
                                var dealerInfo = IC.Template.parse($('#templates .quoteDealerLocator li'), this.dealers[this.postalCode][loopDealers]);
                                $('#saveConfirmation div ul.savedDealerInfo').append(dealerInfo);
                                break;
                            }
                        }
                    });
                    $('#saveConfirmation p:first').html(saveConfirmationMessage[0]);
                    $('#saveConfirmation div').show();
                    pageAction = "1708";
                    pixel();
//                    $('#RequestQuoteActionTag').html('<s' + 'cript language="JavaScript" src="https://web.archive.org/web/20130204105217/http://view.atdmt.com/jaction/iwchyu_20081215HyundaiRequestQuoteConfirmPage_3"></s' + 'cript><noscript><iframe src="https://web.archive.org/web/20130204105217/http://view.atdmt.com/iaction/iwchyu_20081215HyundaiRequestQuoteConfirmPage_3" width="1" height="1" frameborder="0" scrolling="No" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0"></iframe></noscript>');

                    // OMNITURE TRACKING: Request Quote					
                    s.linkTrackVars = 'events,channel';
                    s.linkTrackEvents = 'event2';
                    s.pageName = HN.getLanguage() + ' : hmausa : BYO : Dealer Quote : Confirmation';
                    s.channel = HN.getLanguage() + ' : hmausa : BYO';
                    s.events = 'event2';
                    s.tl(this, 'o', 'BYO Request Quote');

                } else {
                    $('#saveConfirmation p:first').html(saveConfirmationMessage[1]);
                    $('#saveCreationModal h2').attr('class', '').html(saveModalHeaders[2]);
                    $('#saveCreationModal h2').find('.modelName').text(byoModelName.getModelName());
                    /*					sIFR.replace(univers, {
                    selector: '#saveCreationModal h2',
                    transparent: true,
                    fitExactly: true,
                    css: {
                    '.sIFR-root': { 'letter-spacing': '-0.3', 'color': '#4c647e', 'background-color': 'transparent', 'text-transform': 'uppercase', 'font-size': '18px' }
                    }
                    });*/

                    $('#saveConfirmation div').hide();
                    // OMNITURE TRACKING: Save Vehicle				
                    s.linkTrackVars = 'events,channel';
                    s.linkTrackEvents = 'event17';
                    s.pageName = HN.getLanguage() + ' : hmausa : BYO : Save BYO : Confirmation';
                    s.channel = HN.getLanguage() + ' : hmausa : BYO';
                    s.events = 'event17';
                    s.tl(this, 'o', 'BYO Save Vehicle');
                }

                $('.content_modal #saveCreationModal').removeClass('request_quote').addClass('confirmation');
                $('#saveConfirmation').find('a.save_close_window').focus();

                //Pass the saved email address back to the flash
                if (typeof $('#pageFlash')[0].vehicleSaved == 'function') {
                    $('#pageFlash')[0].vehicleSaved($('input.save_email_address').val());
                }
            } else {
                console.log('Ajax Error via textStatus');
                saveError();
            }
        },
        error: function() {
            console.log('Ajax Error');
            saveError();
        }
    });

    function saveError() {
        $('#saveConfirmation').find('p.error_text').remove();
        $('#saveConfirmation p').hide();
        $('#saveConfirmation div').hide();
        $('#saveConfirmation').prepend("<p class=\"error_text\">" + saveErrorMsg + "</p>");
        $('.content_modal #saveCreationModal').removeClass('request_quote').addClass('confirmation');
        $('#saveConfirmation').find('a.save_close_window').focus();
    }
}



}
/*
     FILE ARCHIVED ON 10:52:17 Feb 04, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:01:09 Oct 09, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.536
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.013
  cdx.remote: 5.965
  LoadShardBlock: 71.546 (3)
  PetaboxLoader3.datanode: 79.545 (4)
  load_resource: 117.521
  PetaboxLoader3.resolve: 68.277
*/