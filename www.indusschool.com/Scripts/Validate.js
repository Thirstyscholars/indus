
/************************************************************************************
*	The Below Code Validates Form Data												*
*	Author - Sandeep Devaraj                                                        *
*   Location - RSolutions-India, Bangalore								            *
*	06-Jun-2009	                                                                    *
*   All Copyrights reserved to RSolutions 									    	*		
************************************************************************************/

function noWhiteSpace(e) 
{
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode != 32));
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


function onlyNumbers(e) 
{
//alert(e.keyCode + " " +  e.which);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 45) // backspace
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        
        );
}
function onlyPNumbers(e) 
{
//alert(e.keyCode + " " +  e.which);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return (((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        
        );
}
function onlyDecimals(e) 
{
//alert(e.keyCode + " " +  e.which);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 45) // backspace
        || (KeyCode == 46) // .    
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        
        );
}
function onlyPDecimals(e) 
{
//alert(e.keyCode + " " +  e.which);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 46) 
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
   return (
            (KeyCode == 45) // -
        //|| (KeyCode == 36) // $
        || (KeyCode == 46) // .    
        || (KeyCode == 95) // underscore
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        || ((KeyCode > 63) && (KeyCode < 91))  // a - z & @
        || ((KeyCode > 96) && (KeyCode < 123)) // A - Z
        );
}
function phoneEntry(e) 
{
//alert(e.keyCode);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return (
            (KeyCode == 43) // +
        || (KeyCode == 44) // ,
        || (KeyCode == 32) // space    
        || (KeyCode == 95) // underscore
        || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
       
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
   return ( 
        ((KeyCode > 47) && (KeyCode < 59)) // 0 - 9 :
        
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
   return ((KeyCode == 32)
            || ((KeyCode > 64) && (KeyCode < 91))  // a - z & @
            || ((KeyCode > 96) && (KeyCode < 123)) // A - Z
        );
}
function onlyAlphaNumeric(e) 
{
//alert(e.keyCode);
   var KeyCode = (e.keyCode) ? e.keyCode : e.which;
   return ((KeyCode == 32)
            || ((KeyCode > 64) && (KeyCode < 91))  // a - z & @
            || ((KeyCode > 96) && (KeyCode < 123)) // A - Z
            || ((KeyCode > 47) && (KeyCode < 58)) // 0 - 9
        );
}

function limitTextBoxLengthTo(obj, len)
{
    var text = obj.value;
    if (text.length >= parseInt(len,10))
    {
        
        alert(obj.title + " : cannot exceed length " + len);
        obj.value = text.substring(0,len);
        return false;
    }
    return true;
    
}

function doSelection(fld) 
{
fld.focus();
fld.select();
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
function getValidationRule(valRule)
{
   
    var arrParams = valRule.split(";");
    var arrDictionary = new ActiveXObject("Scripting.Dictionary");

    for (var i=0; i < arrParams.length; i++)
    {
        var objArray = arrParams[i].split(":");
        arrDictionary.Add(objArray[0],objArray[1]);
    }
    return (arrDictionary);

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

function validateLength(obj)
{
    var arrDictionary = getValidationRule(obj.ValidationRule)
    //alert(arrDictionary.Item("type"));
    var msg = "";
    if (arrDictionary.Item("type") == "alph" || arrDictionary.Item("type") == "alpb" || arrDictionary.Item("type") == "phon" || arrDictionary.Item("type") == "mobl" || arrDictionary.Item("type") == "afax" )
    {
    
        if (arrDictionary.Item("validate") == "1" )
        {
            if (parseInt(arrDictionary.Item("min"),10) > obj.value.length)
                msg = " Minimum length should be " + arrDictionary.Item("min")
           
		}	
		else
		{
		    if (obj.value.length > 0)
		    {
		       if (parseInt(arrDictionary.Item("min"),10) > obj.value.length)
                    msg = " Minimum length should be " + arrDictionary.Item("min")
		    }
		
		}
    }
    
    
    if (msg) 
	{
		alert(obj.getAttribute('title') + " : " +  msg);
		setTimeout("doSelection(document.forms['" + obj.form.name + "'].elements['" + obj.name + "'])", 0);
		return false;
		
	} 
	else 
	{
		return true;
	}
    

}

/******************************Validation Rules*****************************
*           type:alpb;validate:1;mode:M;min:0;max:50                       *
*           type:alph;validate:1;mode:S;min:0;max:50                       *
*           type:mail;validate:1                                           *        
*           type:file;validate:1;filefilter:doc,ppt,pdf,txt                *
*           type:mobl;validate:1;mode:S;min:0;max:50                       *
*           type:phon;validate:1;mode:S;min:0;max:50                       *
*           type:afax;validate:1;mode:S;min:0;max:50                       *

*           type:date;validate:1;sysdate:none;refdate:none;refcol:none     *
*           type:pnum;validate:1                                           *
*           type:numb;validate:1                                           *
*           type:nnum;validate:1                                           *

*           type:decm;validate:0                                           *
*           type:pdec;validate:0                                           *
*           type:ndec;validate:1                                           *
******************************Validation Rules******************************/


function validateThisControl(obj)
{
    var arrDictionary = getValidationRule(obj.ValidationRule)
    //alert(arrDictionary.Item("type"));
    var msg = "";
    if (arrDictionary.Item("type") == "mail")
    {
    
        if (arrDictionary.Item("validate") == "1")
        {
    
            msg = validateEmail(obj.value);
		    if (msg == "pass")
			    msg = "";
		}	
		else
		{
		    if (obj.value.length > 0)
		    {
		        msg = validateEmail(obj.value);
		        if (msg == "pass")
			        msg = "";
		    }
		
		}
    }
    else if(arrDictionary.Item("type") == "numb")
    {
        if (arrDictionary.Item("validate") == "1")
        {
            numb = parseInt(obj.value,10);
            if (isNaN(numb))
                msg = "Enter a valid Number"
            else
               obj.value = numb;     
                
		        
		}	
		else
		{
		    if (obj.value.length > 0)
		    {
		        numb = parseInt(obj.value,10);
                if (isNaN(numb))
                    msg = "Enter a valid Number"
                else
                   obj.value = numb;     
		    }
		
		}
    }
    else if(arrDictionary.Item("type") == "pnum")
    {
        if (arrDictionary.Item("validate") == "1")
        {
            numb = parseInt(obj.value,10);
            if (isNaN(numb) || numb < 0)
                msg = "Enter a valid positive number"
            else
               obj.value = numb;     
                
		        
		}	
		else
		{
		    if (obj.value.length > 0)
		    {
		        numb = parseInt(obj.value,10);
                if (isNaN(numb) || numb < 0)
                    msg = "Enter a valid positive number"
                else
                   obj.value = numb;     
		    }
		
		}
    }
    else if(arrDictionary.Item("type") == "nnum")
    {
        if (arrDictionary.Item("validate") == "1")
        {
            numb = parseInt(obj.value,10);
            if (isNaN(numb) || numb > 0)
                msg = "Enter a valid negative number"
            else
               obj.value = numb;     
                
		        
		}	
		else
		{
		    if (obj.value.length > 0)
		    {
		        numb = parseInt(obj.value,10);
                if (isNaN(numb) || numb > 0)
                    msg = "Enter a valid negative number"
                else
                   obj.value = numb;     
		    }
		
		}
    }
    
     else if(arrDictionary.Item("type") == "decm")
    {
        if (arrDictionary.Item("validate") == "1")
        {
            numb = parseFloat(obj.value);
            if (isNaN(numb))
                msg = "Enter a valid Decimal Number"
            else
               obj.value = format(numb,2);     
                
		        
		}	
		else
		{
		    if (obj.value.length > 0)
		    {
		       numb = parseFloat(obj.value);
                if (isNaN(numb))
                    msg = "Enter a valid Decimal Number"
                else
                   obj.value = format(numb,2);   
		    }
		
		}
    }
    
    else if(arrDictionary.Item("type") == "pdec")
    {
        if (arrDictionary.Item("validate") == "1")
        {
            numb = parseFloat(obj.value);
            if (isNaN(numb))
                msg = "Enter a valid positive number"
            else
               obj.value = format(numb,2);     
                
		     
		}	
		else
		{
		    if (obj.value.length > 0)
		    {
		        numb = parseFloat(obj.value);
                if (isNaN(numb))
                    msg = "Enter a valid positive number"
                else
                   obj.value = format(numb,2);     
		    }
		
		}
    }
    
    else if(arrDictionary.Item("type") == "ndec")
    {
        if (arrDictionary.Item("validate") == "1")
        {
            numb = parseFloat(obj.value);
            if (isNaN(numb) || numb > 0)
                msg = "Enter a valid negative number"
            else
               obj.value = format(numb,2);     
                
		        
		}	
		else
		{
		    if (obj.value.length > 0)
		    {
		        numb = parseFloat(obj.value);
                if (isNaN(numb) || numb > 0)
                    msg = "Enter a valid negative number"
                else
                   obj.value = format(numb,2);     
		    }
		
		}
    }
    
    
    if (msg) 
	{
		alert(obj.getAttribute('title') + " : " +  msg);
		setTimeout("doSelection(document.forms['" + obj.form.name + "'].elements['" + obj.name + "'])", 0);
		return false;
		
	} 
	else 
	{
		return true;
	}
    

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


function compareDatesWithOp(date1, date2, opr)
{
    var result = false;
    switch(opr){
		case ">": 
			{
			    if (Date.parse(date1) > Date.parse(date2))    
			        result = true;
			        
			    break;
			}
		case ">=": 
			{
			    if (Date.parse(date1) >= Date.parse(date2))    
			        result = true;
			        
			    break;
			}
		case "==": 
			{
			    if (Date.parse(date1) == Date.parse(date2))    
			        result = true;
			        
			    break;
			}
		case "<": 
			{
			    if (Date.parse(date1) < Date.parse(date2))    
			        result = true;
			        
			    break;
			}		
		case "<=": 
			{
			    if (Date.parse(date1) <= Date.parse(date2))    
			        result = true;
			        
			    break;
			}			
		}	
return(result)
}

function GlobalUploadFile(Obj, FilePath)
{
    TxtBox = document.getElementById(Obj);
  
    var windowOptions = 'left=20,top=20,history=no,toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=no,scrollbars=yes,width=750,height=450';
    var strFname = "../../FileUploader/CustomFileUploader.aspx?TxtId=" + Obj + "&FilePath=" + FilePath + "&FileFilter=" + TxtBox.FileFilter + "&GlobalFile=Y";
   	window.open(strFname, 'InsertImage', windowOptions);

}

function PasteGlobalFile(fileName, txtId)
{
    TxtBox = document.getElementById(txtId);
    fileName = TxtBox.GlobalFilePath + fileName;
    PasteFile(fileName, txtId);

}



function UploadFile(Obj)
{
    TxtBox = document.getElementById(Obj);
  
    var windowOptions = 'left=20,top=20,history=no,toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=no,scrollbars=yes,width=750,height=450';
    var strFname = "../../FileUploader/CustomFileUploader.aspx?TxtId=" + Obj + "&FilePath=" + TxtBox.FilePath + "&FileFilter=" + TxtBox.FileFilter;
   	window.open(strFname, 'InsertImage', windowOptions);
    
    
}
function PasteFile(fileName, txtId)
{
     TxtBox = document.getElementById(txtId);
     TxtBox.value = fileName;
     CFileId = TxtBox.ChangeFileID;
     VFileId = TxtBox.ViewFileID;
     RFileId = TxtBox.RemoveFileID;
     document.getElementById(CFileId).innerHTML= "Change&nbsp;&nbsp;";
     document.getElementById(RFileId).innerHTML="Remove";
     document.getElementById(VFileId).innerHTML="View&nbsp;&nbsp;";
}

function RemoveFile(Obj)
{
     TxtBox = document.getElementById(Obj);
     TxtBox.value = "";
     CFileId = TxtBox.ChangeFileID;
     VFileId = TxtBox.ViewFileID;
     RFileId = TxtBox.RemoveFileID;
     document.getElementById(CFileId).innerHTML= "Upload&nbsp;&nbsp;";
     document.getElementById(RFileId).innerText="";
     document.getElementById(VFileId).innerText="";
}

function DisplayFile(Obj)
{
    TxtBox = document.getElementById(Obj);
    CFPath = TxtBox.FilePath;
    //alert(TxtBox.FilePath);
    var windowOptions = 'left=20,top=20,history=no,toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=no,scrollbars=yes,width=850,height=500';
    if (TxtBox.value.substr(0,3) == "../" )
        strFname = "../../" + CFPath + TxtBox.value;
    else
        strFname = "../../" + CFPath + "/" + TxtBox.value;
    //alert(strFname)
  	window.open(strFname, 'InsertImage', windowOptions);
}

function isEmpty(inputStr) {
var re = /.+/;
if (!inputStr.match(re)) {
return true;
}
return false;
}

function chkYearEntry(obj)
{
    
    var yr;
    if (obj.value != "")
    {
	    if(parseInt(obj.value,10) > 2199)
	    {
		    var tDte = new Date();
		    yr = tDte.getYear();
		    obj.value = yr;
		    //alert(yr);
	    }
	    else if(parseInt(obj.value,10) < 2000)
	    {
		    var tDte = new Date();
		    yr = tDte.getYear();
		    obj.value = yr;
		    //alert(yr);
	    }
	    else if (obj.value.length == 4)
	    {
		    yr = obj.value;
		
	    }
	    else
	    {
		    var tDte = new Date();
		    yr = tDte.getYear();
		    obj.value = yr;
	    }
    }
    else
    {
	    var tDate = new Date();
	    yr = tDate.getYear();
	    obj.value = yr;
    }	
	
}
String.prototype.trim = function () {
var reExtraSpace = /\s+$/;
return this.replace(reExtraSpace, "");
};

String.prototype.fileExtension = function () {
return this.substr((this.lastIndexOf(".")+1),(this.length - (this.lastIndexOf(".")+1)))
};