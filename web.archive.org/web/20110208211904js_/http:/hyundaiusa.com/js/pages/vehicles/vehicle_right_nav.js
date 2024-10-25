var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function vehicleTrimData (modelID) {
	// HTML elements
	var el = {};

	el.vehicleInfo = $('#dynVehicleContent');
	el.vehicleYear = el.vehicleInfo.find('.vehicle_year span');
	el.vehicleModel = el.vehicleInfo.find('.vehicle_model');
	el.vehicleTrims = el.vehicleInfo.find('ul.vehicle_trims');
	el.vehicleSpecs = el.vehicleInfo.find('ul.vehicle_specs');
	el.vehiclePrice = el.vehicleInfo.find('.vehicle_price span');
	
	var intVehicleInfoWidth = el.vehicleInfo.outerWidth();
	//Add 360 Marker Data Div
	el.vehicle360MarkerData = $('<div id="vehicle360MarkerData"></div>').appendTo('body');
	
	//Retrieve Model and Trims
	var currentModel = HN.Vehicles.findModelByID(modelID);
	var currentModelTrims = currentModel.findAllTrims();
	
	el.vehicleYear.text(currentModel.getModelYear());
	el.vehicleModel.text(currentModel.getModelName());
	
	
	if($('#vehicleToolTip').length){
		//PNG fix
		$('#vehicleToolTip').pngFix();
		
		//Set up Clue Tip for Features	
		el.vehicleSpecs.find('li').each(function(){
			$(this).cluetip({					
				cluezIndex: 10000,
				cluetipAddClass: 'vehicle_cluetip',
				cursor: 'pointer',
				dropShadow: false,			
				local: true,
				arrows: true,
				width: 225,
				topOffset: -13,
				leftOffset: 50,
				showTitle: false,			
				positionBy: 'bottomTop',
				clickThrough: false,
				sticky: false					
			});									 
		});
	}
	
	//Specs/Tool Tip Population Function
	function updateSpecs(index, duration){		
		IC.CookieJar.setCookie('model360_' + modelID, currentModelTrims[index].getID().replace('.','_'));
		el.vehicleSpecs.find('li.mpg span').html(currentModelTrims[index].getMPGCity() + '/' + currentModelTrims[index].getMPGHighway());			
		el.vehicleSpecs.find('li.hp span').html(currentModelTrims[index].getHorsePower());	
		el.vehicleSpecs.find('li.seats span').html(currentModelTrims[index].getNoOfSeats());		
		el.vehiclePrice.animatePrice({amount: currentModelTrims[index].getPrice(), duration: duration});
		if($('#vehicleToolTip').length){
			el.vehicleInfo.find('#vehicle_tip_mpg .tip_specs span').html(currentModelTrims[index].getMPGCity() + '/' + currentModelTrims[index].getMPGHighway());
			el.vehicleInfo.find('#vehicle_tip_hp .tip_specs span').html(currentModelTrims[index].getHorsePower());
			el.vehicleInfo.find('#vehicle_tip_seats .tip_specs span').html(currentModelTrims[index].getNoOfSeats());
		}else{
			el.vehicleSpecs.find('li').addClass('cluetip_off');	
		}
	}
	
	//Find Model Cookie and set the correct trim on
	var modelCookie = IC.CookieJar.getCookie('model360_' + modelID);	
	
	//loop through Trims and set up Right Nav
	for (var index=0;index < currentModelTrims.length;index++){
		var tempTrimID = 'trimId_' + currentModelTrims[index].getID().replace('.','_');
		el.vehicleTrims.append('<li><a href="#" class="' + tempTrimID + '" rel="#tip_' + tempTrimID + '">Select ' + currentModelTrims[index].getTrimName() +'</a></li>');
		
		if($('#vehicleToolTip').length){
			var trimToolTip = '<div id="tip_' + tempTrimID + '" class="tip">' +
				'<div class="vehicle_tip_trim_image"><img src="'+ currentModelTrims[index].getDefaultImageSmall() +'" alt="" /></div>' +
				'<div class="vehicle_tip_trim_info">' +
					'<div class="vehicle_tip_title"><span class="trim_name">'+ currentModelTrims[index].getTrimName() +'</span> <span class="trim_price">$'+ currentModelTrims[index].getNicePrice() +'</span></div>' +
					'<p>'+ currentModelTrims[index].getTrimDescription() +'</p>' +
				'</div>' +
			'</div>';
			
			$('#vehicleToolTip').append(trimToolTip);
			
			//PNG fix
			$('#tip_' + tempTrimID).pngFix();
			
			$('a.' + tempTrimID).cluetip({					
				cluezIndex: 10000,
				cluetipAddClass: 'vehicle_cluetip',
				cursor: 'pointer',
				dropShadow: false,			
				local: true,
				arrows: true,
				width: 300,
				topOffset: -13,
				leftOffset: 50,
				showTitle: false,			
				positionBy: 'bottomTop',
				clickThrough: false,
				sticky: false					
			});	
		}
		
		if (index == 0 && modelCookie === ''){		
			el.vehicleTrims.find('li a.' + tempTrimID).addClass('trimOn');
			el.vehicleTrims.find('li a.' + tempTrimID).text(currentModelTrims[index].getTrimName() + ' Selected');
			updateSpecs(index, 50);
		}else if (modelCookie === currentModelTrims[index].getID().replace('.','_')){			
			el.vehicleTrims.find('li a.' + tempTrimID).addClass('trimOn');
			el.vehicleTrims.find('li a.' + tempTrimID).text(currentModelTrims[index].getTrimName() + ' Selected');
			updateSpecs(index, 50);	
		}
	}
	
	var intTrimNameWidth = 0;
	var intTrimWidthOffset = 0;
	
	//Set up Trim click event
	el.vehicleTrims.find('li a').each(function (index) {	
		//Get max trim name width and padding offset
		intTrimWidthOffset = ($(this).parent().outerWidth() - $(this).parent().width()) + ($(this).outerWidth() - $(this).width());								
		intTrimNameWidth = ($(this).parent().outerWidth() > intTrimNameWidth) ? $(this).parent().outerWidth() : intTrimNameWidth;

		$(this).click(function () {
			var clickedTrim = currentModelTrims[index];
			
			for (var i=0;i < currentModelTrims.length; i++){
				var tempTrimID = 'trimId_' + currentModelTrims[i].getID().replace('.','_');
				el.vehicleTrims.find('li a.' + tempTrimID).text('Select ' + currentModelTrims[i].getTrimName());
			}
			el.vehicleTrims.find('.trimOn').removeClass('trimOn');			
			updateSpecs(index, 400);			
			$(this).addClass('trimOn');
			$(this).text(clickedTrim.getTrimName() + ' Selected');
			
			//Set up 360 Flash
			if ($('#vehicle_head_flash')[0] && typeof $('#vehicle_head_flash')[0].update !== 'undefined') {				
				//Update 360 Flash
				$('#vehicle_head_flash')[0].update(HN.getLanguagePath() + '/xml/viewer360/config.xml', HN.getLanguagePath() + '/xml/vehicles/' + currentModel.getModelYear() + '/' + currentModel.getDeepLink() + '/' + clickedTrim.getID() + '.xml');
				
				//Clear 360 Marker Data
				el.vehicle360MarkerData.html('');
				
				//Add 360 Marker Data
				$.ajax({
					type: "GET",
					url: HN.getLanguagePath() + '/xml/vehicles/' + currentModel.getModelYear() + '/' + currentModel.getDeepLink() + '/' + clickedTrim.getID() + '.xml?timestamp=' + (new Date()).getTime(),
					dataType: "xml",
					success: function(xml) {
						$(xml).find('marker').each(function(){	
							//alert($(this).text().replace(/\"/g, "'"));
							el.vehicle360MarkerData.append("<a href=\""+ $(this).attr('href') +"\" rel=\"pp[mixed]\" title=\""+ $(this).attr('expandedTitle') +"\"><img alt=\""+ $(this).text().replace(/\"/g, "'") +"\" /></a>");								
						});	
						$("a[rel^='pp']").prettyPhoto({
							animationSpeed: 'normal', /* fast/slow/normal */
							padding: 0, /* padding for each side of the picture */
							opacity: 0.35, /* Value betwee 0 and 1 */
							showTitle: true, /* true/false */
							allowresize: false, /* true/false */
							counter_separator_label: ' of ', /* The separator for the gallery counter 1 "of" 2 */
							theme: 'gallery', /* light_rounded / dark_rounded / light_square / dark_square */
							flashPlayer: '/swf/flvplayer.swf',
							iframeWidth: 750,
							iframeHeight: 350,
							modalSection: 'Features'							
						});		
					}
				});
			}
			return false;
		});
	});
	
	//Set width on Trim names for layout	
//	if(intTrimNameWidth > intVehicleInfoWidth / 2){
		el.vehicleTrims.find('li a').css('width', (intVehicleInfoWidth - intTrimWidthOffset) + 'px');	
//	}else{
//		el.vehicleTrims.find('li a').css('width', ((intVehicleInfoWidth / 2) - intTrimWidthOffset - 1) + 'px');	
//	}
	
	//Show Vehicle Content
	el.vehicleInfo.css('visibility','visible');
};



}
/*
     FILE ARCHIVED ON 02:59:03 Feb 09, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:10:35 Oct 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.456
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.012
  esindex: 0.008
  cdx.remote: 5.945
  LoadShardBlock: 168.229 (3)
  PetaboxLoader3.datanode: 160.759 (4)
  PetaboxLoader3.resolve: 101.329 (2)
  load_resource: 115.84
*/