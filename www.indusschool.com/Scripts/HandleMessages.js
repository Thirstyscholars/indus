/************************************************************************************
*	The Below Code fetches messages form database 											*
*	Author - Sandeep Devaraj                                                        *
*   Location - RSolutions-India, Bangalore								            *
*	29-Jun-2009	                                                                    *
*   All Copyrights reserved to RSolutions 									    	*		
************************************************************************************/
function FailedCallback(error)
{
    var stackTrace = error.get_stackTrace();
    var message = error.get_message();
    var statusCode = error.get_statusCode();
    var exceptionType = error.get_exceptionType();
    var timedout = error.get_timedOut();
   
    // Display the error.    
   
    var RsltElem = 
       // "Stack Trace: " +  stackTrace + "\n\n" +
        "Service Error: " + message + "\n\n" +
        "Status Code: " + statusCode + "\n\n" +
        "Exception Type: " + exceptionType + "\n\n" +
        "Timedout: " + timedout;
        alert(RsltElem);
}

function PopUpLoading()
{
	strHtml = "<table border=0 width=100% height=100% align=left cellpadding=3px style=\"border:1px solid black;background-color:'#ffffff'\">";
	strHtml =  strHtml + "<tr height=100% valign=middle>";
	strHtml =  strHtml + "<td align=center  style=\"color:black;font-size:12px\"><img src=\"../../images/loading.gif\"><br><br><b>Loading Data......</b></td>";
	strHtml =  strHtml + "</tr>";
	strHtml =  strHtml + "</table>";
	oPopup.document.body.innerHTML = strHtml; 
	
}

function VirtualButton(Cell, ButtonDown) {
   if (ButtonDown) {
      Cell.style.borderLeft = 'buttonshadow 1px solid';
      Cell.style.borderTop = 'buttonshadow 1px solid';
      Cell.style.borderBottom = 'buttonhighlight 1px solid';
      Cell.style.borderRight = 'buttonhighlight 1px solid';
   }
   else {
      Cell.style.borderLeft = 'buttonhighlight 1px solid';
      Cell.style.borderTop = 'buttonhighlight 1px solid';
      Cell.style.borderBottom = 'buttonshadow 1px solid';
      Cell.style.borderRight = 'buttonshadow 1px solid';
   }
}
/*Message Call back routines */
var GlobalMessageBoardPath = "";
function GetMessageDetails(school,path)  
{
  GlobalMessageBoardPath = path;
   var parameters = "school:" + school + ";systemcode:MESSAGEBOARD" ;
   Rsolutions.WebService.WebScriptMethods.GetAluminiMessages(parameters,MessagesFound, FailedCallback);  
}
function GetTestimonialDetails(school,path)  
{
  GlobalMessageBoardPath = path;
   var parameters = "school:" + school + ";systemcode:TESTIMONIALS" ;
   Rsolutions.WebService.WebScriptMethods.GetAluminiMessages(parameters,TestimonialsFound, FailedCallback);  
}
function GetMasterMessageDetails(path)  
{
  GlobalMessageBoardPath = path;
   var parameters = "systemcode:MESSAGEBOARD" ;
   Rsolutions.WebService.WebScriptMethods.GetAluminiMasterMessages(parameters,MessagesFound, FailedCallback);  
}
function GetMasterTestimonialDetails(path)  
{
  GlobalMessageBoardPath = path;
   var parameters = "systemcode:TESTIMONIALS" ;
   Rsolutions.WebService.WebScriptMethods.GetAluminiMasterMessages(parameters,TestimonialsFound, FailedCallback);  
}
function GetMasterNewDetails(path)  
{
  GlobalMessageBoardPath = path;
   var parameters = "systemcode:WHATSNEW" ;
   Rsolutions.WebService.WebScriptMethods.GetAluminiMasterMessages(parameters,NewsFound, FailedCallback);  
}

function MessagesFound(result)
{
   if (result.length > 0)
   {
       for(var i=0; i< result.length; i++)
       {
          var Link = "<span style=\"cursor:pointer\" onclick=\"javascript:window.open('" + GlobalMessageBoardPath + "InternationalSchool/PopupHmPgDetails.aspx?DataId=" + result[i].Msg_DataID + "&CtgId=" + result[i].Msg_CategoryID + "','','height=400,width=500,top=20,left=400,history=no,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=no')\">" + result[i].Msg_Details + "</span>";  
            pausecontent[i] = Link;
            //alert(pausecontent[i]);
       }
   }
   else
   {
    pausecontent[0] = "Data not available";
   }
}
function TestimonialsFound(result)
{
  
  
   
   if ( result.length > 0)
   {
       for(var i=0; i< result.length; i++)
       {
          var Link = "<span style=\"cursor:pointer\" onclick=\"javascript:window.open('" + GlobalMessageBoardPath + "InternationalSchool/PopupHmPgDetails.aspx?DataId=" + result[i].Msg_DataID + "&CtgId=" + result[i].Msg_CategoryID + "','','height=400,width=500,top=20,left=400,history=no,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=no')\">" + result[i].Msg_Details + "</span>";  
            pausecontent1[i] = Link;
            //alert(pausecontent[i]);
       }
       
       
   }
   else
   {
    pausecontent1[0] = "Data not available";
     
    
   }
   
   window.setTimeout("HideTestimonial(" + result.length + ")", 50);

}

function HideTestimonial(len)
{
     var trParentSpeak = document.getElementById("trParentSpeak");
       if (len > 0)
       { 
         if (trParentSpeak  != null)
            trParentSpeak.style.display = 'block';
       }
       else
       {
         if (trParentSpeak  != null)
                trParentSpeak.style.display = 'none';
       }
}

function NewsFound(result)
{
   if (result.length > 0)
   {
       for(var i=0; i< result.length; i++)
       {
          var Link = "<span style=\"cursor:pointer\" onclick=\"javascript:window.open('" + GlobalMessageBoardPath + "InternationalSchool/PopupHmPgDetails.aspx?DataId=" + result[i].Msg_DataID + "&CtgId=" + result[i].Msg_CategoryID + "','','height=400,width=500,top=20,left=400,history=no,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=no')\">" + result[i].Msg_Details + "</span>";  
            pausecontent2[i] = Link;
            //alert(pausecontent[i]);
       }
   }
   else
   {
    pausecontent2[0] = "Data not available";
   }
}
/*End of Message Callback routines */



if (typeof(Sys) !== "undefined") Sys.Application.notifyScriptLoaded();
