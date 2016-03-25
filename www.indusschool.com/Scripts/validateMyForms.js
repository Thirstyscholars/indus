/************************************************************************************
*	The Below Code Validates Form Data												*
*	Developed by Sandeep at RSolutions-India, Bangalore								*
*	23-Oct-2007																		*		
************************************************************************************/


function validateName(tststring, min)
{
//alert(tststring);
var str = tststring.toLowerCase();
var len = str.length;
var retMsg = 'pass';
	if (min != 0)
	{
		if (len < min)
		{
			retMsg = "Provided Value to this field is too short....\n\n atleast " + min + " characters are expected"
			return (retMsg);
		}
		
	
	if (str == "")
	{
		retMsg = "Cannot be Blank.... Please Provide Value To This Field"
		return (retMsg);
	}
	}	
	for (i=0;i < len; i++)
	{
		k = str.charAt(i);
		m = str.charCodeAt(i);
		
		if (m == 32 && i == 0)
		{
			retMsg = "Invalid Character at  " + (i + 1) + " String Cannot Start with a blank space Character"
			return (retMsg);
		}
		
		if (!((m >=97) && (m <=122)) || ((m >=65) && (m <=90)))  
		{
	
			if (m != 32)
			{
				retMsg = "Invalid Character found " + k + " at position " + (i + 1) 
				return (retMsg);
			}
			if (m == 32 && str.charCodeAt(i + 1) == 32)
			{
				retMsg = "Invalid Character at  " + (i + 1) + " Cannot have multiple spaces between characters"
				return (retMsg);
			}
		}	
	}	
return(retMsg);	
}




function validateEmail(str) 
{
	var at="@"
	var dot="."
	var lat=str.indexOf(at)
	var lstr=str.length
	var ldot=str.indexOf(dot)
	var retMsg = "pass"
	
	if (str == "")
	{
		retMsg = "Cannot be Blank.... Please Provide Value To This Field"
		return (retMsg);
	}
	
	
	if (str.indexOf(at)==-1)
	{
	   retMsg = "Invalid Entry"
	   return (retMsg);
	}
	
	if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr)
	{
	   retMsg = "Invalid Entry"
	   return (retMsg);
	}

	if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr)
	{
	    retMsg = "Invalid Entry"
	   return (retMsg);
	}

	if (str.indexOf(at,(lat+1))!=-1)
	{
	   retMsg = "Invalid Entry"
	   return (retMsg);
	}

	if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot)
	{
	   retMsg = "Invalid Entry"
	   return (retMsg);
	}

	if (str.indexOf(dot,(lat+2))==-1)
	{
	   retMsg = "Invalid Entry"
	   return (retMsg);
	}
		
	if (str.indexOf(" ")!=-1)
	{
	   retMsg = "Invalid Entry"
	   return (retMsg);
	}

	return (retMsg);			
}

function validatePhone(tststring, min)
{
var str =tststring;
var len = str.length;
var retMsg = "pass"
//alert(str);
	if (min != 0)
	{
		if (len < min)
		{
			retMsg = "Provided Value to this field is too short....\n\n atleast " + min + " characters are expected"
			return (retMsg);
		}
		
	
	if (str == "")
	{
		retMsg = "Cannot be Blank.... Please Provide Value To This Field"
		return (retMsg);
	}
	}
	
	for (i=0;i < len; i++)
	{
		k = parseInt(str.charAt(i));
		n = str.charAt(i);
		if (!((k >= 0) && (k <= 9)))
		{
			m = str.charCodeAt(i);
			/*if (m != 47)
			{
			retMsg = "Invalid Character found " + n + " at position " + (i + 1) 
			return (retMsg);
			}
			*/
			if (m == 32 && str.charCodeAt(i + 1) == 32)
			{
				retMsg = "Invalid Character at  " + (i + 1) + " Cannot have multiple spaces between characters \nValid Format xxx-xxxxxxx / xxx-xxxxxxx"
				return (retMsg);
			}
			//alert(m + " " + n);
			if (!((m == 32) || (m == 47) || (m == 45)))
			{
				retMsg = "Invalid Character found " + n + "  at position " + (i + 1) + "  \n\nValid Format xxx-xxxxxxx / xxx-xxxxxxx "
				return (retMsg);
			}
			/*if (!((!(m == 32 && str.charCodeAt(i + 1) == 47)) || (!(m == 32 && str.charCodeAt(i - 1) == 47))))
			{
				retMsg = "Invalid Character at  " + (i + 1) + " Cannot have blank spaces between digits \nValid Format xxx-xxxxxxx / xxx-xxxxxxx "
				return (retMsg);
			}*/
		}	
	}
return(retMsg);		
}


function validateNumber(tststring, min)
{

var str =tststring;
var len = str.length;
var retMsg = "pass"
	
	
	if (min != 0)
	{
		if (len < min)
		{
			retMsg = "Provided Value to this field is too short....\n\n atleast " + min + " characters are expected"
			return (retMsg);
		}
	
	
	if (str == "")
	{
		retMsg = "Cannot be Blank.... Please Provide Value To This Field"
		return (retMsg);
	}
	
	}
	
	for (i=0;i < len; i++)
	{
		k = parseInt(str.charAt(i));
		n = str.charAt(i);
		if (!((k >= 0) && (k <= 9)))
		{
			retMsg = "Invalid Character found " + n + " at position " + (i + 1) + "  \n This field expects Numeric values"
			return (retMsg);
		}	
	}	
return(retMsg);		
}

function validateCurrency(tststring, min)
{

var str =tststring;
var len = str.length;
var retMsg = "pass"
var passCnt = 0;	
	
	if (min != 0)
	{
		if (len < min)
		{
			retMsg = "Provided Value to this field is too short....\n\n atleast " + min + " characters are expected"
			return (retMsg);
		}
	
	
	if (str == "")
	{
		retMsg = "Cannot be Blank.... Please Provide Value To This Field"
		return (retMsg);
	}
	}
	for (i=0;i < len; i++)
	{
		k = parseInt(str.charAt(i));
		n = str.charAt(i);
		
		if (n == ".")
			passCnt++;
			
		if (n != ".")
		{
			if (!((k >= 0) && (k <= 9)))
			{
				if (n != "-")
				{
					retMsg = "Invalid Character found " + n + " at position " + (i + 1) + "  \n This field expects Numeric values"
					return (retMsg);
				}
			}	
		}	
	}	
	
	if (passCnt > 1)
	{
		retMsg = "Invalid Currency format Please Recheck the entered value"
		return (retMsg);
	}
return(retMsg);		
}

function validateAddress(tststring)
{
var str =tststring;
var len = str.length;
var retMsg = "pass"

	if (str == "")
	{
		retMsg = "Cannot be Blank.... Please Provide Value To This Field"
		return (retMsg);
	}
		
	
return(retMsg);	
}

function validateAlphanumeric(tststring,min)
{


var str =tststring;
var len = str.length;
var retMsg = "pass";

	if (min != 0)
	{
		if (len < min)
		{
			retMsg = "Provided Value to this field is too short....\n\n atleast " + min + " characters are expected"
			return (retMsg);
		}
			
	
		if (str == "")
		{
			retMsg = "Cannot be Blank.... Please Provide Value To This Field"
			return (retMsg);
		}
	}	
	
	
return(retMsg);	
}

function validateUID(tststring, min)
{
var str =tststring;
var len = str.length;
var retMsg = "pass"

	if (str == "")
	{
		retMsg = "Cannot be Blank.... Please Provide Value To This Field"
		return (retMsg);
	}
	
	if (min != 0)
	{
		if (len < min)
		{
			retMsg = "Provided Value to this field is too short....\n\n atleast " + min + " characters are expected"
			return (retMsg);
		}
	}
		
	for (i=0;i < len; i++)
	{
		k = str.charAt(i);
		m = str.charCodeAt(i);
		n = parseInt(str.charAt(i));
		
			
		if ( !(((n >=0) && (n<=9))  || ((m >=97) && (m <=122)) || ((m >=65) && (m <=90))) )
		{	
			//alert(m);
			if (!(m == 95))
			{
				retMsg = "Invalid Character found " + k + " at position " + (i + 1) + "  \n\nValid special characters allowed are\n\n( _ underScore )"
				return (retMsg);
			}				
		}	
			
	}	
return(retMsg);	
}


function validatePassword(tststring, tststring1, min)
{

var str =tststring;
var str1 =tststring1;
var len = str.length;
var retMsg = "pass"
	if (min != 0)
	{
		if (len < min)
		{
			retMsg = "Provided Value to this field is too short....\n\n atleast " + min + " characters are expected"
			return (retMsg);
		}
	}
	
	if (str == "")
	{
		retMsg = "Password Cannot be Blank.... Please Provide Value To This Field"
		return (retMsg);
	}
	
	if (str1 == "")
	{
		retMsg = "Renter Password Cannot be Blank.... Please Provide Value To This Field"
		return (retMsg);
	}
	
	if (!(str == str1))
	{
		retMsg = "Password Mismatch ... Please renter agian"
		return (retMsg);
	}	
		
return(retMsg);		
}

function onlyNumbers(e) 
{
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 8) // backspace
        || (KeyCode == 9) // tab
        || (KeyCode == 37) // left arrow
        || (KeyCode == 39) // right arrow
        || (KeyCode == 46) // delete
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        
        );
}
function onlyCurrency(e) 
{
//alert(e.keyCode + " " +  e.which);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 8) // backspace
        || (KeyCode == 9) // tab
        || (KeyCode == 37) // left arrow
        || (KeyCode == 39) // right arrow
        || (KeyCode == 46) // delete
        || (KeyCode == 45) // -
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        );
}
function emailEntry(e) 
{
//alert(e.keyCode);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 8) // backspace
        || (KeyCode == 9) // tab
        || (KeyCode == 37) // left arrow
        || (KeyCode == 39) // right arrow
        || (KeyCode == 46) // delete
        || (KeyCode == 95) // underscore
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        || ((KeyCode > 63) && (KeyCode < 91))  // a - z & @
        || ((KeyCode > 96) && (KeyCode < 123)) // A - Z
        );
}
function searchEntry(e) 
{
//alert(e.keyCode);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 8) // backspace
        || (KeyCode == 9) // tab
       || (KeyCode == 32) // space
       // || (KeyCode == 39) // right arrow
       // || (KeyCode == 46) // delete
        || (KeyCode == 95) // underscore
        || (KeyCode == 45) // underscore
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        || ((KeyCode > 64) && (KeyCode < 91))  // a - z & @
        || ((KeyCode > 96) && (KeyCode < 123)) // A - Z
        );
}
function onlyTime(e) 
{
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
 //alert(e.keyCode);
   return ((KeyCode == 8) // backspace
        || (KeyCode == 9) // tab
        || (KeyCode == 37) // left arrow
        || (KeyCode == 39) // right arrow
        || (KeyCode == 46) // delete
      
        || ((KeyCode > 47) && (KeyCode < 59)) // 0 - 9 :
        
        );
}
function onlyRate(e) 
{
//alert(e.keyCode);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 8) // backspace
        || (KeyCode == 9) // tab
        || (KeyCode == 37) // left arrow
        || (KeyCode == 39) // right arrow
        || (KeyCode == 46) // delete
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        
        );
}
function onlyDate(e) 
{
//alert(e.keyCode);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 8) // backspace
        || (KeyCode == 9) // tab
        || (KeyCode == 37) // left arrow
        || (KeyCode == 39) // right arrow
        || (KeyCode == 46) // delete
        || (KeyCode == 45) // -
        || (KeyCode == 47) // /
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        
        );
}
function onlyAlphabets(e) 
{
//alert(e.keyCode);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 8) // backspace
        || (KeyCode == 9) // tab
        || (KeyCode == 37) // left arrow
        || (KeyCode == 39) // right arrow
        || (KeyCode == 46) // delete
        || (KeyCode == 32) // delete
        || ((KeyCode > 63) && (KeyCode < 91))  // a - z & @
        || ((KeyCode > 96) && (KeyCode < 123)) // A - Z
        );
}

function validTime(fld)
{
var testHH, testMM, inpHH, inpMM, msg;
var re = /\b\d{1,2}[\:]\d{1,2}\b/;
var inp = fld.value;
	if (re.test(inp)) 
	{
		//alert(re.test(inp));
		var delimChar = ":"
		var delim1 = inp.indexOf(delimChar);
		HH = parseInt(inp.substring(0, delim1), 10);
		MM = parseInt(inp.substr(delim1+1, 2), 10);
		//alert(MM);
		d = new Date();
		yr = d.getYear();
		mo = d.getMonth() + 1; 
		day = d.getDay();
		 
		var testTime = new Date(yr, mo-1, day, HH, MM);
		//alert(testTime.getHours());
		if (testTime.getMinutes() == MM)
		{
			if (testTime.getHours() == HH)
			{
			msg = ""
			}
			else
			{
			msg = "Invalid Hours... Range [00-23] \n\n Valid Format HH:MM"
			}
		} 
		else 
		{
			msg = "Invalid Minutes... Range [00-59] \n\n Valid Format HH:MM"
		}
	} 
	else 
	{
		msg = "Invalid Format \n\n Valid Format [00-23]:[00-59] HH:MM"
	}

	if (msg) 
	{
		alert(msg);
		//alert(fld.form.name + " " + fld.name);
		setTimeout("doSelection(document.forms['" + fld.form.name + "'].elements['" + fld.name + "'])", 0);
		return false;
	} 
	else 
	{	
		return true;
	}
}

function doSelection(fld) 
{
fld.focus();
fld.select();
}


function MultiDimensionalArray(iRows,iCols)
{
var i;
var j;
var a = new Array(iRows);
for (i=0; i < iRows; i++)
{
a[i] = new Array(iCols);
for (j=0; j < iCols; j++)
{
a[i][j] = '';
}
}
return(a);
}

function validDateSearch(fld) {
var testMo, testDay, testYr, inpMo, inpDay, inpYr, msg;
if (fld.value != "")
	var inp = fld.value;
else	
	var inp = "01-01-1900";
	
status = "";
var re = /\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/;
if (re.test(inp)) 
{
	var delimChar = (inp.indexOf("/") != -1) ? "/" : "-";
	var delim1 = inp.indexOf(delimChar);
	var delim2 = inp.lastIndexOf(delimChar);
	day = parseInt(inp.substring(0, delim1), 10);
	mo = parseInt(inp.substring(delim1+1, delim2), 10);
	yr = parseInt(inp.substring(delim2+1), 10);
	var testDate = new Date(yr, mo-1, day);
	if (testDate.getDate() == day) 
	{
		if (testDate.getMonth() + 1 == mo) 
		{
			if (testDate.getFullYear() == yr) 
			{
				msg = "";
			} 
			else 
			{
				msg = "There is a problem with the year entry.";
			}
		} 
		else 
		{
			msg = "There is a problem with the month entry.";
		}
	} else 
	{
		msg = "There is a problem with the date entry.";
	}
} else 
{
msg = "Incorrect date format. Enter as dd/mm/yyyy.";
}
if (msg) {
// there’s a message, so something failed
alert(msg);
// work around IE timing problem with alert by
// invoking a focus/select function through setTimeout();
// must pass along reference of fld (as string)
setTimeout("doSelection(document.forms['" + fld.form.name + "'].elements['" + fld.name + "'])", 0);
return false;
} else {
if (day < 10)
day = "0" + day;
if (mo < 10)
mo = "0" + mo;


if (fld.value != "")
	fld.value = day + "-" + mo + "-" + yr;
	
// everything’s OK; if browser supports new date method,
// show just date string in status bar
//alert(testDate.toLocaleDateString());
//window.status = (testDate.toLocaleDateString) ? testDate.toLocaleDateString() : "Date OK";
return true;
}
}



function validDate(fld) {
var testMo, testDay, testYr, inpMo, inpDay, inpYr, msg;
var inp = fld.value;
status = "";
var re = /\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/;
if (re.test(inp)) 
{
	var delimChar = (inp.indexOf("/") != -1) ? "/" : "-";
	var delim1 = inp.indexOf(delimChar);
	var delim2 = inp.lastIndexOf(delimChar);
	day = parseInt(inp.substring(0, delim1), 10);
	mo = parseInt(inp.substring(delim1+1, delim2), 10);
	yr = parseInt(inp.substring(delim2+1), 10);
	var testDate = new Date(yr, mo-1, day);
	if (testDate.getDate() == day) 
	{
		if (testDate.getMonth() + 1 == mo) 
		{
			if (testDate.getFullYear() == yr) 
			{
				msg = "";
			} 
			else 
			{
				msg = "There is a problem with the year entry.";
			}
		} 
		else 
		{
			msg = "There is a problem with the month entry.";
		}
	} else 
	{
		msg = "There is a problem with the date entry.";
	}
} else 
{
msg = "Incorrect date format. Enter as dd/mm/yyyy.";
}
if (msg) {
// there’s a message, so something failed
alert(msg);
// work around IE timing problem with alert by
// invoking a focus/select function through setTimeout();
// must pass along reference of fld (as string)
setTimeout("doSelection(document.forms['" + fld.form.name + "'].elements['" + fld.name + "'])", 0);
return false;
} else {
if (day < 10)
day = "0" + day;
if (mo < 10)
mo = "0" + mo;



fld.value = day + "-" + mo + "-" + yr;
// everything’s OK; if browser supports new date method,
// show just date string in status bar
//alert(testDate.toLocaleDateString());
//window.status = (testDate.toLocaleDateString) ? testDate.toLocaleDateString() : "Date OK";
return true;
}
}

function validDateF(fld) {
var testMo, testDay, testYr, inpMo, inpDay, inpYr, msg;
var inp = fld.value;
status = "";
var re = /\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/;
if (re.test(inp)) 
{
	var delimChar = (inp.indexOf("/") != -1) ? "/" : "-";
	var delim1 = inp.indexOf(delimChar);
	var delim2 = inp.lastIndexOf(delimChar);
	day = parseInt(inp.substring(0, delim1), 10);
	mo = parseInt(inp.substring(delim1+1, delim2), 10);
	yr = parseInt(inp.substring(delim2+1), 10);
	var testDate = new Date(yr, mo-1, day);
	if (testDate.getDate() == day) 
	{
		if (testDate.getMonth() + 1 == mo) 
		{
			if (testDate.getFullYear() == yr) 
			{
				msg = "";
			} 
			else 
			{
				msg = "There is a problem with the year entry.";
			}
		} 
		else 
		{
			msg = "There is a problem with the month entry.";
		}
	} else 
	{
		msg = "There is a problem with the date entry.";
	}
	
	
	
	
} 
else 
{
msg = "Incorrect date format. Enter as dd/mm/yyyy.";
}
	if (msg == "")
	{
		var dateOk = 0;
		var todayDate = new Date();
		//alert(testDate.getYear() + " >= " + todayDate.getYear() + " " + (testDate.getMonth() + 1) + " >= " + (todayDate.getMonth()+1) + " " +  testDate.getDate() + " >= " + todayDate.getDate());
		
		if (testDate.getYear() >= todayDate.getYear())
		{
			dateOk = 1;  
			if (testDate.getYear() == todayDate.getYear())
			{
				if (testDate.getMonth() >= todayDate.getMonth())
				{
					dateOk = 1; 
					if(testDate.getMonth() == todayDate.getMonth())
					{
						if	(testDate.getDate() >= todayDate.getDate())	
						{
							dateOk = 1;  
						}
						else
						{
							dateOk = 0;  
						}	
					}
				}	
				else
				{
					dateOk = 0;
				}
			}			
		
		}
		else
		{
			dateOk = 0;
		}	
	}	
	if (dateOk)
		msg1 = "";
	else
		msg1 = "Cannot Accept Past Dates";
		
	if (msg) 
	{
		alert(msg);
		setTimeout("doSelection(document.forms['" + fld.form.name + "'].elements['" + fld.name + "'])", 0);
		return false;
	} 
	else if(msg1)
	{
		alert(msg1);
		setTimeout("doSelection(document.forms['" + fld.form.name + "'].elements['" + fld.name + "'])", 0);
		return false;
	}
	else
	{
		if (day < 10)
		day = "0" + day;
		if (mo < 10)
		mo = "0" + mo;
		fld.value = day + "-" + mo + "-" + yr;
		return true;
	}
}

function validDateR(fld) {
var testMo, testDay, testYr, inpMo, inpDay, inpYr, msg;
var inp = fld.value;
status = "";
var re = /\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/;
if (re.test(inp)) 
{
	var delimChar = (inp.indexOf("/") != -1) ? "/" : "-";
	var delim1 = inp.indexOf(delimChar);
	var delim2 = inp.lastIndexOf(delimChar);
	day = parseInt(inp.substring(0, delim1), 10);
	mo = parseInt(inp.substring(delim1+1, delim2), 10);
	yr = parseInt(inp.substring(delim2+1), 10);
	var testDate = new Date(yr, mo-1, day);
	if (testDate.getDate() == day) 
	{
		if (testDate.getMonth() + 1 == mo) 
		{
			if (testDate.getFullYear() == yr) 
			{
				msg = "";
			} 
			else 
			{
				msg = "There is a problem with the year entry.";
			}
		} 
		else 
		{
			msg = "There is a problem with the month entry.";
		}
	} else 
	{
		msg = "There is a problem with the date entry.";
	}
	
	
	
	
} 
else 
{
msg = "Incorrect date format. Enter as dd/mm/yyyy.";
}
	
	var todayDate = new Date();
	
	if (todayDate >= testDate)
		msg1 = "";
	else
		msg1 = "Cannot Accept Future Dates";
		
	if (msg) 
	{
		alert(msg);
		setTimeout("doSelection(document.forms['" + fld.form.name + "'].elements['" + fld.name + "'])", 0);
		return false;
	} 
	else if(msg1)
	{
		alert(msg1);
		setTimeout("doSelection(document.forms['" + fld.form.name + "'].elements['" + fld.name + "'])", 0);
		return false;
	}
	else
	{
		if (day < 10)
		day = "0" + day;
		if (mo < 10)
		mo = "0" + mo;
		fld.value = day + "-" + mo + "-" + yr;
		return true;
	}
}

function getposOffset(overlay, offsettype){
var totaloffset=(offsettype=="left")? overlay.offsetLeft : overlay.offsetTop;
var parentEl=overlay.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}

function overlay(curobj, subobjstr, opt_position){
if (document.getElementById){
//alert(subobjstr);
var subobj=document.getElementById(subobjstr)
subobj.style.display=(subobj.style.display!="block")? "block" : "none"
var xpos=getposOffset(curobj, "left")+((typeof opt_position!="undefined" && opt_position.indexOf("right")!=-1)? -(subobj.offsetWidth-curobj.offsetWidth) : 0) 
var ypos=getposOffset(curobj, "top")+((typeof opt_position!="undefined" && opt_position.indexOf("bottom")!=-1)? curobj.offsetHeight : 0)
subobj.style.left=xpos+"px"
subobj.style.top=ypos+"px"
return false
}
else
return true
}

function overlayclose(subobj){
document.getElementById(subobj).style.display="none"
}

var jsalarm={
	padfield:function(f){
		return (f<10)? "0"+f : f
	},
	showcurrenttime:function(){
		var dateobj=new Date()
		var ct=this.padfield(dateobj.getHours())+":"+this.padfield(dateobj.getMinutes())+":"+this.padfield(dateobj.getSeconds())
		if (typeof this.hourwake!="undefined"){ //if alarm is set
			if (ct==(this.hourwake+":"+this.minutewake+":"+this.secondwake)){
				dtMyDate = jsalarm.timer;
				var curDay = new Date();
				var d = new Date(curDay.getYear(), curDay.getMonth(), curDay.getDay(), this.hourwake, this.minutewake, (parseInt(this.secondwake,10) + 1800) );
				jsalarm.setalarm(d)
				this.createNewPopUp();
			}
		}
	},
	init:function(logedTime){
		var MinMilli = 1000 * 60;
		var HrMilli = MinMilli * 60;
		var DyMilli = HrMilli * 24;
		//alert(logedTime);
		arrDtDate = logedTime.split(", ");
		
		var d = new Date(parseInt(arrDtDate[0],10), parseInt(arrDtDate[1],10), parseInt(arrDtDate[2],10), parseInt(arrDtDate[3],10), parseInt(arrDtDate[4],10), parseInt(arrDtDate[5],10));
		var curdtTime=new Date()
		
		//alert(curdtTime + " " +  d );
		//alert( parseInt(Date.parse(curdtTime),10) + " " +   parseInt(Date.parse(d),10))
		
		var d, s, t;
		t =    parseInt(Date.parse(curdtTime),10) - parseInt(Date.parse(d),10)
		//alert(t);
		if (t <= 0)
			jsalarm.setalarm(d);
		else
		{
			s = Math.round(Math.abs(t / 1000)) ;
			
			intInc = parseInt(Math.round((s/1800)),10);
			if (intInc == 0) 
				intInc = 1
			
			intInc = intInc*1800;
				
			
			d = new Date(parseInt(arrDtDate[0],10), parseInt(arrDtDate[1],10), parseInt(arrDtDate[2],10), parseInt(arrDtDate[3],10), parseInt(arrDtDate[4],10), (parseInt(arrDtDate[5],10)+intInc));
			
			if (curdtTime >= d)
				d = new Date(parseInt(arrDtDate[0],10), parseInt(arrDtDate[1],10), parseInt(arrDtDate[2],10), parseInt(arrDtDate[3],10), parseInt(arrDtDate[4],10), (parseInt(arrDtDate[5],10)+intInc+1800));
				
			jsalarm.setalarm(d);
		}	
		setInterval(function(){jsalarm.showcurrenttime()}, 1000)
	},
	setalarm:function(newDate){
		
		this.hourwake=this.padfield(newDate.getHours());
		this.minutewake=this.padfield(newDate.getMinutes());
		this.secondwake=this.padfield(newDate.getSeconds());
		//alert(this.hourwake + " " + this.minutewake + " " + this.secondwake);
	},
	createNewPopUp:function(){
		var windowOptions = 'left=0,top=1000,history=no,toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=no,scrollbars=yes,width=5,height=5';
		var fname = strPath + "showReminder.asp"
		//alert(strPath);
		var win = window.open(fname, "", windowOptions);
	}
}

function format(expr, decplaces) {
var str = "" + Math.round(parseFloat(expr) * Math.pow(10,decplaces));
//alert(Math.pow(10,decplaces));
while (str.length <= decplaces) {
str = "0" + str;
}
var decpoint = str.length - decplaces;
return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length);
}


function removeParensIfNegNo(number)
{
str = number;
if (str.substring(0,0) == "(")
{
	//alert(parseFloat(str));

}

}
function formatNew(expr, decplaces) {
var str = "" + Math.round(eval(expr) * Math.pow(10,decplaces));
//alert(Math.pow(10,decplaces));
while (str.length <= decplaces) {
str = "0" + str;
}
var decpoint = str.length - decplaces;
if (parseFloat(str) < 0)
	return "(" + str.substring(1,decpoint) + "." + str.substring(decpoint,str.length) + ")";

return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length);
}



function convertToRs(expr) {
//alert(expr);
return "Rs. " + format(expr,2);
}

function trimNewLineChar(obj)
{
	
	var str =obj.value;
	var len = str.length;
	//alert(len);
	var tstString="";
	for (var i=0;i < len; i++)
	{
		
		var m = str.charCodeAt(i);
		//alert(m);
		if (m == 10 || m==13)
			tstString = tstString + " ";
		else if(m==34)
			tstString = tstString + "``";
		else if(m==39)
			tstString = tstString + "`";
		else	
			tstString = tstString + str.charAt(i);
		
		
			
	}
	
	obj.value = tstString;
	tstString="";
	str =obj.value;
	
	for (var i=0;i < str.length; i++)
	{
		
		var m = str.charCodeAt(i);
		
		if (m == 32 && str.charCodeAt(i + 1) == 32)
			tstString = tstString + "";
		else
			tstString = tstString + str.charAt(i);
		
	}
	
	obj.value = tstString;
	
}


function validateThis(fld)
{

	var msg;
	var str = fld.value;
	var chkStr = String(fld.getAttribute('rel'));
	
	var chkType = String(chkStr.substr(0,4));
	var tmp = 	parseInt(chkStr.length,10) - 7			
	var min = chkStr.substr(7,tmp);
	var len = str.length;
	var req =  String(chkStr.substr(5,1));
	if (parseInt(req,10) == 0)
		min = 0;
	
	
	if (chkType == "alph" ) 
	{
		var msg = validateAlphanumeric(str,min);
		trimNewLineChar(fld);
		if (msg == "pass")
			msg = "";
	}
	else if (chkType =="addr")
	{
		msg = validateAddress(str);
		if (msg == "pass")
			msg = "";				
	}
	else if(chkType == "text")
	{
		msg = validateName(str,min);
		if (msg == "pass")
			msg = "";				
	}
	else if(chkType == "cntc")
	{
		msg = validatePhone(str,min);
		if (msg == "pass")
			msg = "";
	}
	else if(chkType == "numb")
	{
		msg = validateNumber(str,min);
		if (msg == "pass")
			msg = "";
	}
	else if(chkType == "webe")
	{
		msg = validateEmail(str);
		if (msg == "pass")
			msg = "";
	}
	else if(chkType == "curn")
	{
		msg = validateCurrency(str,min);
		if (msg == "pass")
		{
			msg = "";
			if (isNaN(format(fld.value,2)))
				fld.value = "";
			else
				fld.value = format(fld.value,2);
		}	
	}
	else if(chkType == "prcn")
	{
		msg = validateCurrency(str,min);
		if (msg == "pass")
		{
			msg = "";
			fld.value = format(fld.value,2);
		}	
		if (parseFloat(fld.value) > 100)
		{
			msg = "Cannot exceed more than 100";
			fld.value = format(fld.value,2);
		}
		
	}
	if (msg) 
	{
		alert(fld.getAttribute('title') + " : " +  msg);
		setTimeout("doSelection(document.forms['" + fld.form.name + "'].elements['" + fld.name + "'])", 0);
		return false;
		
	} 
	else 
	{
		return true;
	}
	
}

function isEmpty(inputStr) {
var re = /.+/;
if (!inputStr.match(re)) {
return true;
}
return false;
}

function revert() {
document.releaseCapture();
hideMenu();
//hideMenu1();
}
function hideMenu() {

contextMenu.style.visibility = "hidden";
}

function hideMenu1() {
contextMenu1.style.visibility = "hidden";
}

function highlight() {
var elem = event.srcElement;
if (elem.className == "menuItem") {
elem.className = "menuItemOn";
}

}
function unhighlight() {
var elem = event.srcElement
if (elem.className == "menuItemOn") {
elem.className = "menuItem";}
}

function setMsg(msg)
{
window.status = msg;
return true;
}


function monthName(mth)
{
var strMth = "";
mth = parseInt(mth,10)
switch(mth){
		case 1: 
			strMth = "January";
			break;
		case 2: 
			strMth = "February";
			break;
		case 3: 
			strMth = "March";
			break;
		case 4: 
			strMth = "April";
			break;
		case 5: 
			strMth = "May";
			break;
		case 6: 
			strMth = "June";
			break;
		case 7: 
			strMth = "July";
			break;
		case 8: 
			strMth = "August";
			break;
		case 9: 
			strMth = "September";
			break;
		case 10: 
			strMth = "October";
			break;
		case 11: 
			strMth = "November";
			break;
		case 12: 
			strMth = "December";
			break;
	}
	return(strMth);
}

function sMonthName(mth)
{
var strMth = "";
mth = parseInt(mth,10)
switch(mth){
		case 1: 
			strMth = "Jan";
			break;
		case 2: 
			strMth = "Feb";
			break;
		case 3: 
			strMth = "Mar";
			break;
		case 4: 
			strMth = "Apr";
			break;
		case 5: 
			strMth = "May";
			break;
		case 6: 
			strMth = "Jun";
			break;
		case 7: 
			strMth = "Jul";
			break;
		case 8: 
			strMth = "Aug";
			break;
		case 9: 
			strMth = "Sep";
			break;
		case 10: 
			strMth = "Oct";
			break;
		case 11: 
			strMth = "Nov";
			break;
		case 12: 
			strMth = "Dec";
			break;
	}
	return(strMth);
}




function splitDate(dtDate)
{
	var objDate = new Object();
	
	inp = dtDate;
	delimChar = (inp.indexOf("/") != -1) ? "/" : "-";
	delim1 = inp.indexOf(delimChar);
	delim2 = inp.lastIndexOf(delimChar);
	mo = parseInt(inp.substring(0, delim1), 10);
	day = parseInt(inp.substring(delim1+1, delim2), 10);
	yr = parseInt(inp.substring(delim2+1), 10);
	
	if (mo < 10)
		mo = "0" + mo;
	
	if (day < 10)
		day = "0" + day;
		
	year = yr.toString();	
	objDate = {'dd':day,'mm':mo,'yyyy':year,'yy':year.substring(2,2),'month':monthName(mo),'mon':sMonthName(mo) };
	return (objDate);
}

function convertTextToDate(dtDate,format)
{
	var objDate = new Object();
	
	var inp = dtDate;
	var delimChar = (inp.indexOf("/") != -1) ? "/" : "-";
	var delim1 = inp.indexOf(delimChar);
	var delim2 = inp.lastIndexOf(delimChar);
	if (format == 'ddmmyyyy')
	{
		var day = parseInt(inp.substring(0, delim1), 10);
		var mo = parseInt(inp.substring(delim1+1, delim2), 10);
		var yr = parseInt(inp.substring(delim2+1), 10);
	}
	else if(format == 'mmddyyyy')
	{
		var mo = parseInt(inp.substring(0, delim1), 10);
		var day = parseInt(inp.substring(delim1+1, delim2), 10);
		var yr = parseInt(inp.substring(delim2+1), 10);
	}
	else if(format == 'ddmonyyyy')
	{
		var day = parseInt(inp.substring(0, delim1), 10);
		var mo = translateMonth(inp.substring(delim1+1, delim2).toLowerCase());
		var yr = parseInt(inp.substring(delim2+1), 10);
		
	}
	
	if (mo < 10)
		mo = "0" + mo;
	
	if (day < 10)
		day = "0" + day;
	
	if (yr <= 99 && yr >= 10)
		yr = "20" + yr;
	
	if (yr < 10)
		yr = "200" + yr;
		
	year = yr.toString();	
	
	objDate = {'dd':day,'mm':mo,'yyyy':year,'yy':year.substring(2,2),'month':monthName(mo),'mon':sMonthName(mo) };
	
	return (objDate);
}

function translateMonth(mo)
{

if (mo == "jan")
	return 1;
else if	(mo == "feb")
	return 2;
else if	(mo == "mar")
	return 3;
else if	(mo == "apr")
	return 4;
else if	(mo == "may")
	return 5;
else if	(mo == "jun")
	return 6;
else if	(mo == "jul")
	return 7;
else if	(mo == "aug")
	return 8;
else if	(mo == "sep")
	return 9;
else if	(mo == "oct")
	return 10;
else if	(mo == "nov")
	return 11;
else if	(mo == "dec")
	return 12;
	
}
