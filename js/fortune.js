/* This file constitutes free and unencumbered software released into the
 * public domain.  Anyone is free to copy, modify, publish, use, compile,
 * sell, or distribute this software, for any purpose, commercial or
 * non-commercial, and by any means.  This software is presented "as-is" and
 * with no warranties or guarantees.
 * For more information, see <https://unlicense.org>
 */

function populateFortune( xml )
{
	var jarList, jar, cookieList, cookie, xmlDoc, html;
	xmlDoc = xml.responseXML;

	/* Select a random jar to get cookies from first. */
	jarList = xmlDoc.getElementsByTagName("jar");
	var i = Math.floor(Math.random() * jarList.length);
	jar = jarList.item(i);

	/* Now select a cookie from that jar. */
	cookieList = jar.getElementsByTagName("cookie");
	i = Math.floor(Math.random() * cookieList.length);
	cookie = cookieList.item(i);

	/* Extract the fortune from the cookie and wrap it in a paragraph.
	 * The resulting HTML is stored in `html` to be dumped into the web page
	 * afterwards.
	 */
	html = "<p>" + cookie.getElementsByTagName( "fortune" ).item(0).textContent + "</p>";

	/* If the cookie contains a citation, extract that as well and wrap it in
	 * another paragraph.  This paragraph is given the "cite" class so that it
	 * can be formatted to look like a citation.
	 */
	if (cookie.getElementsByTagName( "cite" ).length > 0) {
		html = html + "<p class = \"cite\">" + cookie.getElementsByTagName( "cite" ).item(0).textContent + "</p>";
	}

	/* Dump the contents of `html` into the HTML page at the ID "fortune". */
	document.getElementById("fortune").innerHTML = html;
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			populateFortune(this);
		}
	};
xmlhttp.open("GET", "/xml/fortunes.xml", true);
xmlhttp.send();
