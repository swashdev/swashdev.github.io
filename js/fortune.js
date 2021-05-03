/* This file constitutes free and unencumbered software released into the
 * public domain.  Anyone is free to copy, modify, publish, use, compile,
 * sell, or distribute this software, for any purpose, commercial or
 * non-commercial, and by any means.  This software is presented "as-is" and
 * with no warantees or guarantees.
 * For more information, see <https://unlicense.org>
 */

function populateFortune( xml )
{
	var cookieList, cookie, xmlDoc, txt;
	xmlDoc = xml.responseXML;

	cookieList = xmlDoc.getElementsByTagName("cookie");
	var i = Math.floor(Math.random() * cookieList.length);
	cookie = cookieList.item(i);

	txt = "<p>" + cookie.getElementsByTagName( "fortune" ).item(0).textContent + "</p>";

	if (cookie.getElementsByTagName( "cite" ).length > 0) {
		txt = txt + "<p class = \"cite\">" + cookie.getElementsByTagName( "cite" ).item(0).textContent + "</p>";
	}

	document.getElementById("fortune").innerHTML = txt;
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			populateFortune(this);
		}
	};
xmlhttp.open("GET", "/xml/fortunes.xml", true);
xmlhttp.send();
