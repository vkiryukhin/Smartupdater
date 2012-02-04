The only file you need to download and use in your project is

smartupdater.js

The rest stuff is demo, which you can see and play with at
http://www.eslinstructor.net/smartupdater3/

/**
* smartupdater - jQuery Plugin
*  
* Version - 4.0
* Copyright (c) 2010 - 2011 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* 
* http://www.eslinstructor.net/smartupdater/
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
* USAGE:
*
*	$("#myObject").smartupdater({
*			url : "foo.php"
*			}, function (data) {
*				//process data here;
*			}
*		);
*		
*	Public functions:
*		$("#myObject").smartupdater("stop")
*		$("#myObject").smartupdater("restart");
*		$("#myObject").smartupdater("setTimeout",timeout);
*		$("#myObject").smartupdater("alterUrl"[,"foo.php"[,data]]); 
*		$("#myObject").smartupdater("alterCallback"[, foo]); 
*
*	Public Attributes:
*		var status  = $("#myObject").smartupdater("getState"); 
*		var timeout = $("#myObject").smartupdater("getTimeout");
*
**/