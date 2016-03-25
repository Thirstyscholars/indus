function AJAXInteraction(url, callback, pSynchronous)
{

	var req = init();
	

	var synchronous;
	if (!pSynchronous)
	{
		synchronous = false;
	}
	else
	{
		synchronous = true;
	}
	req.onreadystatechange = processRequest;
	
	function init()
	{
	
		if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		} else if (window.ActiveXObject) 
			{
				var aVersions = ["MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp.2.0",
					"MSXML2.XMLHttp","Microsoft.XMLHTTP"];
				for(var i=0;i<aVersions.length;i++)
				{
					try
					{
						var	oXmlHttp =  new ActiveXObject(aVersions[i]);
						return oXmlHttp;
					}
					catch (oError)
					{
						//Do Nothing.
					}
					
				}
			
		}
	}
	
	
	function processRequest(){
	
		if (req.readyState == 4) {
			removeInProcess();
			if (req.status == 200 || req.status == 0) {
				if (handleHTMLResponse(req))
				{
					if (callback) callback(req);
				}
			}
			else {
				alert("error posting " + req.status);
			}
		}
	}
	this.doGet = function() {
		showInProcess();
		
		if (synchronous)
		{
			req.open("GET", url, false);
		}
		else
		{
			req.open("GET", url, true);
		}
		req.send(null);
		if (synchronous)
		{
			removeInProcess();
			if (handleHTMLResponse(req))
			{
				return req;
			}
			else
			{
				return null;
			}
		}
	}
	this.doPost = function(body) {
		showInProcess();
		if (synchronous)
		{
			req.open("POST", url, false);
		}
		else
		{
			req.open("POST", url, true);
		}
		req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		req.setRequestHeader("MimeType", "text/xml");
		req.send(body);
		if (synchronous)
		{
			removeInProcess();
			if (handleHTMLResponse(req))
			{
				return req;
			}
			else
			{
				return null;
			}
		}
	}
}
function getXMLHttpRequest ()
{
	 if (window.XMLHttpRequest)
	 {
		return new XMLHttpRequest();
	 }
	 else if (window.ActiveXObject)
	 {
		var aVersions = ["MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp.2.0",
					"MSXML2.XMLHttp","Microsoft.XMLHTTP"];
				for(var i=0;i<aVersions.length;i++)
				{
					try
					{
						return new ActiveXObject(aVersions[i]);
					}
					catch (oError)
					{
						//Do Nothing.
					}
					
				}
	 }
}
function processRequest ()
{
	if (req.readyState == 4)
	{
		removeInProcess();
		if (req.status == 200)
		{
			if (handleHTMLResponse(req))
			{
				if (callback) callback(req.get);
			}
		}
	}
}
/*
function showInProcess()
{
	var lMessageDiv;
	lMessageDiv = document.getElementById("MESSAGEDIV");
	lMessageDiv.innerHTML = "<table><tr><td><font color='#000000'>Processing ...</font></td></tr></table>";
	lMessageDiv.style.position = "absolute";
	lMessageDiv.style.top = 0;
	lMessageDiv.style.left = windowWidth() - 100;
	lMessageDiv.style.backgroundColor = "#FF0000";
	lMessageDiv.style.visibility = "visible";
}
*/

function showInProcess()
{
	 var scrollX, scrollY;
      
      if (document.all)
      {
         if (!document.documentElement.scrollLeft)
            scrollX = document.body.scrollLeft;
         else
            scrollX = document.documentElement.scrollLeft;
               
         if (!document.documentElement.scrollTop)
            scrollY = document.body.scrollTop;
         else
            scrollY = document.documentElement.scrollTop;
      }   
      else
      {
         scrollX = window.pageXOffset;
         scrollY = window.pageYOffset;
      }
        //	var lMessageDiv;
	//lMessageDiv = document.getElementById("MESSAGEDIV");
	//lMessageDiv.innerHTML = "<table><tr><td id=processing><font color='#000000'>Processing ...</font></td></tr></table>";	lMessageDiv.style.position = "absolute";
	//lMessageDiv.style.top = scrollY+50;	lMessageDiv.style.left = windowWidth() - 100;	lMessageDiv.style.backgroundColor = "#FEEDAB";	lMessageDiv.style.visibility = "visible";
}

function removeInProcess()
{
	//var lMessageDiv;
	//lMessageDiv = document.getElementById("MESSAGEDIV");
	//lMessageDiv.innerHTML = "";
	//lMessageDiv.style.visibility = "hidden";
}

function handleHTMLResponse(pXMLObject)
{
	var lCount;
	if (pXMLObject.getResponseHeader("Content-Type").indexOf("text/html") == 0)
	{
		if (pXMLObject.responseText.indexOf("<TITLE>Login</TITLE>") > 0)
		{
			window.location.href = "/TCSFramework/jsp/global/AccessDenied.jsp";
			return false;
		}
	}
	return true;
}
