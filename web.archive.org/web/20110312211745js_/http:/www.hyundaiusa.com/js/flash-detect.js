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

(function () {
	var requiredFlashVersion = /Safari|safari/.test(navigator.userAgent) ?
		"10.0.32.18" :
		"9.0.115";

	if (!swfobject.hasFlashPlayerVersion(requiredFlashVersion) && !(typeof upgradeFlashPage != "undefined")) {
		for (var prop in CONFIG.languages) if (CONFIG.languages.hasOwnProperty(prop)) {
			var languagePath = '';
	
			if ((new RegExp('^' + CONFIG.languages[prop])).test(window.pathname)) {
				languagePath = CONFIG.languages[prop];	
			}
		}

	
	}
})();


}
/*
     FILE ARCHIVED ON 00:17:25 Mar 07, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:03:01 Oct 09, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.531
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 26.542
  LoadShardBlock: 111.731 (3)
  PetaboxLoader3.datanode: 98.121 (5)
  PetaboxLoader3.resolve: 154.389 (3)
  load_resource: 148.464 (2)
*/