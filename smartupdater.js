/**
* smartupdater - jQuery Plugin
*  
* Version - 3.0.00 beta
*
* Copyright (c) 2011 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* 
* http://www.eslinstructor.net/demo/smartupdater2/smartupdater_home.html
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
* USAGE:
*
*	$("#myObject").smartupdater({
*			url : "demo.php"
*			}, function (data) {
*				//process data here;
*			}
*		);
*		
*	Public functions:
*		$("#myObject").smartupdaterStop();
*		$("#myObject").smartupdaterRestart();
*		$("#myObject").smartupdaterSetTimeout();
*		$("#myObject").smartupdaterSetUrl();
*
*	Public Attributes:
*		var smStatus = $("#myObject")[0].smartupdaterStatus.state; // "ON" | "OFF" | "undefined"
*		var smTimeout = $("#myObject")[0].smartupdaterStatus.timeout; // current timeout
*
**/

(function(jQuery) {
	jQuery.fn.smartupdater = function (options, callback) {

		return this.each(function () {
			var elem = this,
			es = {};

			elem.settings = jQuery.extend({
				url					: '',		// see jQuery.ajax for details
				type				: 'get', 	// see jQuery.ajax for details
				data				: '',   	// see jQuery.ajax for details
				dataType			: 'text', 	// see jQuery.ajax for details
						
				minTimeout			: 60000, 	// 1 minute by default
				maxFailedRequests 	: 10, 		// max. number of consecutive ajax failures by default
				httpCache 			: false,	// no http cache by default
				rCallback			: false		// no remote callback functions by default

			}, options);
				
			elem.smartupdaterStatus = {state:'',timeout:0};

			es = elem.settings;
				
			es.prevContent 		= '';
			es.failedRequests	= 0;
			es.etag 			= '0';
			es.lastModified 	= '0';
			es.callback 		= callback;
			es.origReq = {url:es.url,data:es.data,callback:callback};
			
			function start() {
				$.ajax({
					url		: es.url,
					type	: es.type,
					data	: es.data,
					dataType: es.dataType,
					cache	: false, // MUST be set to false to prevent IE caching bug.

					success: function (data, statusText, xhr) {
					
						var dataNotModified = false, 
							rCallback = false, 
							xSmart = jQuery.parseJSON(xhr.getResponseHeader("X-Smartupdater")),
							xhrEtag, xhrLM;
						
						if(xSmart) { // remote control 
						
							// remote timeout 
							es.minTimeout = xSmart.timeout ? xSmart.timeout : es.minTimeout;
							
							// remote callback
							rCallback = xSmart.callback ? xSmart.callback : false;
						}
						
						if(es.httpCache) { // http cache process here
						
							xhrEtag = xhr.getResponseHeader("ETag");
							xhrLM = xhr.getResponseHeader("Last-Modified");
							
							dataNotModified = (es.etag ==  xhrEtag || es.lastModified == xhrLM) ? true : false;
							es.etag 		=  xhrEtag ? xhrEtag : es.etag;
							es.lastModified =  xhrLM   ? xhrLM   : es.lastModified;
						}
						
						if ( 	dataNotModified || 
								es.prevContent == xhr.responseText || 
								xhr.status == 304 ) { // data is not changed 
								
									es.h = setTimeout(start, es.minTimeout);
									
						} else { // data is changed 

						// cache response data 
							es.prevContent = xhr.responseText;
							
						// reset timeout 
							es.h = setTimeout(start, es.minTimeout);
							
						// run callback function 
							if(es.rCallback && rCallback && es.rCallback.search(rCallback) != -1) {
								window[rCallback](data);
							} else  { 
								es.callback(data);
							}
						}
						
						elem.smartupdaterStatus.timeout = es.minTimeout;
						es.failedRequests = 0;
					}, 
							
					error: function(xhr, textStatus, errorThrown) { 
						if ( ++es.failedRequests < es.maxFailedRequests ) {
						
						// increment falure counter and reset timeout 
							es.h = setTimeout(start, es.minTimeout);
							elem.smartupdaterStatus.timeout = es.minTimeout;
							
						} else {
						
						// stop smartupdater
							clearTimeout(es.h);
							elem.smartupdaterStatus.state = 'OFF';
						}
					},
					
					beforeSend: function(xhr, settings) {
					
						if(es.httpCache) {
						
						// set http cache-related headers 
							xhr.setRequestHeader("If-None-Match", es.etag );
							xhr.setRequestHeader("If-Modified-Since", es.lastModified );
						}
						
					// Feedback: Smartupdater sends it's current timeout to server 
						xhr.setRequestHeader("X-Smartupdater", '{"timeout":"'+elem.smartupdaterStatus.timeout+'"}');
					}
				});
				
				elem.smartupdaterStatus.state = 'ON';
			} 
				
			es.fnStart = start;
			start();
		});
	}; 
	
	jQuery.fn.smartupdaterStop = function () {
		return this.each(function () {
			clearTimeout(this.settings.h);
            this.smartupdaterStatus.state = 'OFF';
		});
	}; 
        
    jQuery.fn.smartupdaterRestart = function () {        
		return this.each(function () {
			clearTimeout(this.settings.h);
 			this.settings.etag = "0";
			this.settings.lastModified = "0";
			this.settings.fnStart();
		});
	}; 
	
	jQuery.fn.smartupdaterSetTimeout = function (period) {
		return this.each(function () {
			clearTimeout(this.settings.h);
			this.settings.minTimeout = period;
            this.settings.fnStart();
		});
	}; 
	
	jQuery.fn.smartupdaterAlter = function (url,data,callback) {
		return this.each(function () {
			this.settings.url 	= url 	? url 		: this.settings.origReq.url;
			this.settings.data	= data 	? data 		: this.settings.origReq.data;
			this.settings.callback  = callback	? callback 	: this.settings.origReq.callback;
 		});
	}; 
	
})(jQuery);
