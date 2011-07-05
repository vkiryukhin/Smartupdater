The only file you need to download and use in your project is

smartupdater.js

The rest stuff is demo, which you can see and play with at
http://www.eslinstructor.net/smartupdater3/

/**
* smartupdater - jQuery Plugin
*  
* Version - 3.1.00.beta
* Copyright (c) 2011 Vadim Kiryukhin
* vkiryukhin @ gmail.com
* 
* http://www.eslinstructor.net/smartupdater3/
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
* USAGE:
*
*       $("#myObject").smartupdater({
*                       url : "foo.php"
*                       }, function (data) {
*                               //process data here;
*                       }
*               );
*               
*       Public functions:
*               $("#myObject").smartupdaterStop();
*               $("#myObject").smartupdaterRestart();
*               $("#myObject").smartupdaterSetTimeout();
*               $("#myObject").smartupdaterAlterUrl();
*               $("#myObject").smartupdaterAlterCallback();
*
*       Public Attributes:
*               var smStatus  = $("#myObject")[0].smartupdaterStatus.state; 
*               var smTimeout = $("#myObject")[0].smartupdaterStatus.timeout;
*
**/