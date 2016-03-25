/*jsp functions starts here*/
var Qualificationresult="";
var prevCheckboxList = "";
var tablecheckboxid = "";
var flag = "N";
var validate =true;
var finalCheck = "true"; 
var applicationData = new Array();

jQuery(function(){
		jQuery('#container-11').tabs();
	    jQuery('.nexttabbutton').click(  //function called onclick of next button takes the class
			function(){
				if(validate){
			     	 var xTab = 26;
			     	 var buttonid = jQuery(this).attr("id");
			     	 var ntab = buttonid.slice(-1);
			     	 var tabIndx = (parseInt(xTab)+parseInt(ntab))
			         var currfrag = "fragment-" + tabIndx;
					 var nextfrag = "fragment-" + (++tabIndx);
					 jQuery("#" + nextfrag).css("display","block");
					 jQuery("#" + currfrag).css("display","none");
					 jQuery("." + nextfrag).addClass("tabs-selected");
					 jQuery("." + currfrag).removeClass("tabs-selected");
					 return false;
			 	}
				else{
					}
		     });
		});  

function saveData(){
	if(document.getElementById('txtFEmail').value!=''){
			document.getElementById('txtEmail').value=document.getElementById('txtFEmail').value;
			}
			else if(document.getElementById('txtMEmail').value!=''){
				document.getElementById('txtEmail').value=document.getElementById('txtMEmail').value;
			}
		


		if(document.getElementById('State').style.display=='block'){
			var index=document.getElementById('State').selectedIndex;
			if(document.getElementById('State').options[index].text!="----Select-----"){
			document.getElementById('txtState').value=document.getElementById('State').options[index].text;
			}
			else
			{
				document.getElementById('txtState').value='';
			}
		}
		if(document.getElementById('FState').style.display=='block'){
			var index=document.getElementById('FState').selectedIndex;
			if(document.getElementById('FState').options[index].text!="----Select-----"){
			document.getElementById('txtFState').value=document.getElementById('FState').options[index].text;
			}
			else
			{
				document.getElementById('txtFState').value='';
			}
		}
		else if(document.getElementById('txtFState').style.display=='block'){
		}
		if(document.getElementById('GState').style.display=='block'){
			var index=document.getElementById('GState').selectedIndex;
			if(document.getElementById('GState').options[index].text!="----Select-----"){
			document.getElementById('txtGState').value=document.getElementById('GState').options[index].text;
			}
			else
			{
				document.getElementById('txtGState').value='';
			}
		}
		else if(document.getElementById('txtGState').style.display=='block'){
		}
		if(document.getElementById('MState').style.display=='block'){
			var index=document.getElementById('MState').selectedIndex;
			if(document.getElementById('MState').options[index].text!="----Select-----"){
			document.getElementById('txtMState').value=document.getElementById('MState').options[index].text;
			}
			else
			{
				document.getElementById('txtMState').value='';
			}
		}
		else if(document.getElementById('txtMState').style.display=='block'){
		}
		if(document.getElementById('PerState').style.display=='block'){
			var index=document.getElementById('PerState').selectedIndex;
			if(document.getElementById('PerState').options[index].text!="----Select-----"){
			document.getElementById('txtPerState').value=document.getElementById('PerState').options[index].text;
			}
			else
			{
				document.getElementById('txtPerState').value='';
			}
		}
		else if(document.getElementById('txtPerState').style.display=='block'){
		}
		if(document.getElementById('LGState').style.display=='block'){
			var index=document.getElementById('LGState').selectedIndex;
			if(document.getElementById('LGState').options[index].text!="----Select-----"){
			document.getElementById('txtLGState').value=document.getElementById('LGState').options[index].text;
			}
			else
			{
				document.getElementById('txtLGState').value='';
			}
		}
		else if(document.getElementById('txtLGState').style.display=='block'){
		}
		if(document.getElementById('txtMContactNoSTDCode').value=="STD Code"){
			document.getElementById('txtMContactNoSTDCode').value = "";
		}
		if(document.getElementById('txtMContactNo').value=="Telephone No."){
			document.getElementById('txtMContactNo').value = "";
		}
		if(document.getElementById('txtFContactNoSTDCode').value=="STD Code"){
			document.getElementById('txtFContactNoSTDCode').value = "";
		}
		if(document.getElementById('txtFContactNo').value=="Telephone No."){
			document.getElementById('txtFContactNo').value = "";
		}
		if(document.getElementById('txtLGContactNoSTDCode').value=="STD Code"){
			document.getElementById('txtLGContactNoSTDCode').value = "";
		}
		if(document.getElementById('txtLGContactNo').value=="Telephone No."){
			document.getElementById('txtLGContactNo').value = "";
		}
		if(document.getElementById('txtCorrContactNoSTDCode').value=="STD Code"){
			document.getElementById('txtCorrContactNoSTDCode').value = "";
		}
		if(document.getElementById('txtCorrContactNo').value=="Telephone No."){
			document.getElementById('txtCorrContactNo').value = "";
		}
		/*
		if(document.getElementById('txt_PIN_NO_Cash').value!=null && document.getElementById('txt_PIN_NO_Cash').value != ''){
				if(document.getElementById("isAdminEdit").value=="Y"){
					document.getElementById('Submit').setAttribute("disabled","disabled");
				 document.onlineAppForm.encoding = "multipart/form-data";
		         document.getElementById("subAction").value="saveFormData";
		         document.onlineAppForm.action = "onlineApplicationAction.do";
		         document.onlineAppForm.submit();
				
				//eval(validateCaptcha("saveFormData","Submit"));
			}
			else{
				eval(document.getElementById("ajaxMethod").value);
				document.getElementById('Submit').setAttribute("disabled","disabled");
				 document.onlineAppForm.encoding = "multipart/form-data";
		         document.getElementById("subAction").value="saveFormData";
		         document.onlineAppForm.action = "onlineApplicationAction.do";
		         document.onlineAppForm.submit();
				
				//eval(validateCaptcha("saveFormData","Submit"));
			}		
		}
			else{ 
				document.getElementById('Submit').setAttribute("disabled","disabled");
				 document.onlineAppForm.encoding = "multipart/form-data";
		         document.getElementById("subAction").value="saveFormData";
		         document.onlineAppForm.action = "onlineApplicationAction.do";
		         document.onlineAppForm.submit();
			//eval(validateCaptcha("saveFormData","Submit"));
		          } */
				  if(document.getElementById('txt_PIN_NO_Cash').value!=null && document.getElementById('txt_PIN_NO_Cash').value != ''){
				if(document.getElementById("isAdminEdit").value=="Y"){
				
				eval(validateIonCaptchatcha("saveFormData","Submit"));
			}
			else{
				eval(document.getElementById("ajaxMethod").value);
				
				eval(validateIonCaptcha("saveFormData","Submit"));
			}		
		}
			else{ 
			eval(validateIonCaptcha("saveFormData","Submit"));
		          }  
	}
function getLanguage(id)
{
	var selbox = document.getElementById('txtSecLang');
	selbox.options.length = 0;
	selbox.style.width=180;
	if(id.value=="")
	{
		selbox.options[selbox.options.length] = new Option('Please Select a Grade First','');
	}
	if(id.value=="PREP1" || id.value=="PREP2" || id.value=="Nursery and Reception")
	{
		selbox.options[selbox.options.length] = new Option('No language option available for grade selected','');
	}
	else if (document.getElementById("txtAdmisnGrade").value == "Grade1" ||document.getElementById("txtAdmisnGrade").value == "Grade2"
	|| document.getElementById("txtAdmisnGrade").value == "Grade3" ) {
		selbox.options[selbox.options.length] = new Option('---Select---','');
		selbox.options[selbox.options.length] = new Option('Hindi','Hindi');
		selbox.options[selbox.options.length] = new Option('Spanish','Spanish');
		selbox.options[selbox.options.length] = new Option('ESL (English as Second Language)','ESL (English as Second Language)');
		}
	else if (document.getElementById("txtAdmisnGrade").value == "Grade4" ||document.getElementById("txtAdmisnGrade").value == "Grade5"
	|| document.getElementById("txtAdmisnGrade").value == "Grade6" || document.getElementById("txtAdmisnGrade").value == "Grade7"
	|| document.getElementById("txtAdmisnGrade").value == "Grade8") {
		selbox.options[selbox.options.length] = new Option('---Select---','');
		selbox.options[selbox.options.length] = new Option('Hindi','Hindi');
		selbox.options[selbox.options.length] = new Option('Spanish','Spanish');
		selbox.options[selbox.options.length] = new Option('French','French');
		selbox.options[selbox.options.length] = new Option('ESL (English as Second Language)','ESL (English as Second Language)');
		}
	else if (document.getElementById("txtAdmisnGrade").value == "Grade9" ||document.getElementById("txtAdmisnGrade").value == "Grade10") {
		selbox.options[selbox.options.length] = new Option('---Select---','');
		selbox.options[selbox.options.length] = new Option('Hindi','Hindi');
		selbox.options[selbox.options.length] = new Option('Spanish','Spanish');
		selbox.options[selbox.options.length] = new Option('French (self taught)','French (self taught)');
		selbox.options[selbox.options.length] = new Option('Korean','Korean');
		selbox.options[selbox.options.length] = new Option('Thai','Thai');
		selbox.options[selbox.options.length] = new Option('Japanese','Japanese');
		selbox.options[selbox.options.length] = new Option('Mandarin','Mandarin');
		selbox.options[selbox.options.length] = new Option('ESL (English as Second Language)','ESL (English as Second Language)');
		}
	else if (document.getElementById("txtAdmisnGrade").value == "Grade11" ||document.getElementById("txtAdmisnGrade").value == "Grade12") {
		selbox.options[selbox.options.length] = new Option('---Select---','');
		selbox.options[selbox.options.length] = new Option('Hindi HL/SL','Hindi HL/SL');
		selbox.options[selbox.options.length] = new Option('English HL/SL','English HL/SL');
		selbox.options[selbox.options.length] = new Option('Spanish Ab initio','Spanish Ab initio');
		selbox.options[selbox.options.length] = new Option('French Ab initio','French Ab initio');
		selbox.options[selbox.options.length] = new Option('German Ab initio','German Ab initio');
		selbox.options[selbox.options.length] = new Option('ESL (English as Second Language)','ESL (English as Second Language)');
		}
}
function getNewMotherAddress(id){
	document.getElementById('permFMAddressCheck').value=id.value;
	switch(id.value){
		case 'Y':	
		document.getElementById('txtMAddress1').value=document.getElementById('txtFAddress1').value;
		document.getElementById('txtMMobileAreaCode').value=document.getElementById('txtFMobileAreaCode').value;
		document.getElementById('txtMMobileNo').value=document.getElementById('txtFMobileNo').value;
		document.getElementById('txtMAddress2').value=document.getElementById('txtFAddress2').value;
		document.getElementById('txtMContactNoAreaCode').value=document.getElementById('txtFContactNoAreaCode').value;
		document.getElementById('txtMContactNoSTDCode').value=document.getElementById('txtFContactNoSTDCode').value;
		document.getElementById('txtMContactNo').value=document.getElementById('txtFContactNo').value;
		document.getElementById('txtMCity').value=document.getElementById('txtFCity').value;
		document.getElementById('txtMEmail').value=document.getElementById('txtFEmail').value;
	    document.getElementById('txtMConfirmEmail').value=document.getElementById('txtFConfirmEmail').value;
		document.getElementById('txtMCountry').value=document.getElementById('txtCountryOther').value;
		if(document.getElementById('FState').style.display=='block'){
			
			document.getElementById('MState').style.display='block';
			document.getElementById('txtFState').style.display='none';
			
			var fieldCountryValue=document.getElementById('txtMCountry').value;
			fnGetDependentData('app_statecode_master',fieldCountryValue,'entity_id@state_name','country_id','MState,PerDistrict','MState,PerDistrict');
			var selectedStateValue=document.getElementById('FState').value;
			setTimeout("fnSelectValue('MState','"+selectedStateValue+"')",500);
			
		}
		else if(document.getElementById('txtFState').style.display=='block'){
			document.getElementById('MState').style.display='none';
			document.getElementById('txtMState').style.display='block';
			
			document.getElementById('txtMState').value=document.getElementById('txtFState').value;			
		}
		document.getElementById('txtMPincode').value=document.getElementById('txtFPincode').value;
		
				break;
		
		case 'N':		
		
				document.getElementById('txtMAddress1').value = "";
				document.getElementById('txtMMobileAreaCode').value = "";
				document.getElementById('txtMMobileNo').value = "";
				document.getElementById('txtMAddress2').value = "";
				document.getElementById('txtMContactNoAreaCode').value = "";
				document.getElementById('txtMContactNoSTDCode').value = "";
				document.getElementById('txtMContactNo').value = "";
				document.getElementById('txtMCity').value = "";
				document.getElementById('txtMEmail').value = "";
				document.getElementById('txtMCountry').value = "";
				if(document.getElementById('MState').style.display=='block'){
					document.getElementById('MState').value = "0";
				}
				else if(document.getElementById('txtMState').style.display=='block'){
					document.getElementById('txtMState').value = "";
				}
				document.getElementById('txtMConfirmEmail').value = "";
				document.getElementById('txtMPincode').value = "";
			
		break;
	}
	
}
function onlyAlphaNumWithSCharwithPlus(key,e){

if (navigator.appName =="Microsoft Internet Explorer"){
	var oKey = event.keyCode;
	
	

	if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 32)  || (oKey >= 44 && oKey <= 57)|| (oKey == 43))
	{
		return true;
	}
	else
	{
		return false;
	}
}else{

	var oKey = e.charCode;
	
	
	if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 0) || (oKey == 32)  || (oKey >= 44 && oKey <= 57)|| (oKey == 43))
	{
		return true;
	}
	else
	{
		return false;		
	}
}	
}

function getNewGuardianAddress(id){
	document.getElementById('permFGAddressCheck1').value=id.value;
	switch(id.value){
		case 'Y':	
		document.getElementById('txtLGAddress1').value=document.getElementById('txtFAddress1').value;
		document.getElementById('txtLocalGContactNoAreaCode').value=document.getElementById('txtFMobileAreaCode').value;
		document.getElementById('txtLocalGContactNo').value=document.getElementById('txtFMobileNo').value;
		document.getElementById('txtLGAddress2').value=document.getElementById('txtFAddress2').value;
		document.getElementById('txtLGContactNoAreaCode').value=document.getElementById('txtFContactNoAreaCode').value;
		document.getElementById('txtLGContactNoSTDCode').value=document.getElementById('txtFContactNoSTDCode').value;
		document.getElementById('txtLGContactNo').value=document.getElementById('txtFContactNo').value;
		document.getElementById('txtLGCity').value=document.getElementById('txtFCity').value;
		document.getElementById('txtLGEMail').value=document.getElementById('txtFEmail').value;
	    document.getElementById('txtLGCountry').value=document.getElementById('txtCountryOther').value;
		if(document.getElementById('FState').style.display=='block'){
			
			document.getElementById('LGState').style.display='block';
			document.getElementById('txtLGState').style.display='none';
			
			var fieldCountryValue=document.getElementById('txtLGCountry').value;
			fnGetDependentData('app_statecode_master',fieldCountryValue,'entity_id@state_name','country_id','LGState,PerDistrict','LGState,PerDistrict');
			var selectedStateValue=document.getElementById('FState').value;
			setTimeout("fnSelectValue('LGState','"+selectedStateValue+"')",500);
			
		}
		else if(document.getElementById('txtFState').style.display=='block'){
			document.getElementById('LGState').style.display='none';
			document.getElementById('txtLGState').style.display='block';
			
			document.getElementById('txtLGState').value=document.getElementById('txtFState').value;			
		}
		document.getElementById('txtLGPincode').value=document.getElementById('txtFPincode').value;
		
				break;
		
		case 'N':		
		
				document.getElementById('txtLGAddress1').value = "";
				document.getElementById('txtLocalGContactNoAreaCode').value = "";
				document.getElementById('txtLocalGContactNo').value = "";
				document.getElementById('txtLGAddress2').value = "";
				document.getElementById('txtLGContactNoAreaCode').value = "";
				document.getElementById('txtLGContactNoSTDCode').value = "";
				document.getElementById('txtLGContactNo').value = "";
				document.getElementById('txtLGCity').value = "";
				document.getElementById('txtLGEMail').value = "";
				document.getElementById('txtLGCountry').value = "63";
				if(document.getElementById('LGState').style.display=='block'){
					document.getElementById('LGState').value = "0";
				}
				else if(document.getElementById('txtLGState').style.display=='block'){
					document.getElementById('txtLGState').value = "";
				}
				document.getElementById('txtLGPincode').value = "";
			
		break;
	}
	
}
function getNewFatherCorrAddress(id){
	document.getElementById('permCFAddressCheck').value=id.value;
	switch(id.value){
		case 'Y':	
		document.getElementById('txtCorrAddress1').value=document.getElementById('txtFAddress1').value;
		document.getElementById('txtLocaCorrContactNoAreaCode').value=document.getElementById('txtFMobileAreaCode').value;
		document.getElementById('txtLocaCorrContactNo').value=document.getElementById('txtFMobileNo').value;
		document.getElementById('txtCorrAddress2').value=document.getElementById('txtFAddress2').value;
		document.getElementById('txtCorrContactNoAreaCode').value=document.getElementById('txtFContactNoAreaCode').value;
		document.getElementById('txtCorrContactNoSTDCode').value=document.getElementById('txtFContactNoSTDCode').value;
		document.getElementById('txtCorrContactNo').value=document.getElementById('txtFContactNo').value;
		document.getElementById('txtCorrCity').value=document.getElementById('txtFCity').value;
		document.getElementById('txtCorrEMail').value=document.getElementById('txtFEmail').value;
	    document.getElementById('txtGCountry').value=document.getElementById('txtCountryOther').value;
		if(document.getElementById('FState').style.display=='block'){
			
			document.getElementById('GState').style.display='block';
			document.getElementById('txtGState').style.display='none';
			
			var fieldCountryValue=document.getElementById('txtGCountry').value;
			fnGetDependentData('app_statecode_master',fieldCountryValue,'entity_id@state_name','country_id','GState,PerDistrict','GState,PerDistrict');
			var selectedStateValue=document.getElementById('FState').value;
			setTimeout("fnSelectValue('GState','"+selectedStateValue+"')",500);
			
		}
		else if(document.getElementById('txtFState').style.display=='block'){
			document.getElementById('GState').style.display='none';
			document.getElementById('txtGState').style.display='block';
			
			document.getElementById('txtGState').value=document.getElementById('txtFState').value;			
		}
		document.getElementById('txtCorrPincode').value=document.getElementById('txtFPincode').value;
		
				break;
		
		case 'N':		
		
				document.getElementById('txtCorrAddress1').value = "";
				document.getElementById('txtLocaCorrContactNoAreaCode').value = "";
				document.getElementById('txtLocaCorrContactNo').value = "";
				document.getElementById('txtCorrAddress2').value = "";
				document.getElementById('txtCorrContactNoAreaCode').value = "";
				document.getElementById('txtCorrContactNoSTDCode').value = "";
				document.getElementById('txtCorrContactNo').value = "";
				document.getElementById('txtCorrCity').value = "";
				document.getElementById('txtCorrEMail').value = "";
				document.getElementById('txtGCountry').value = "63";
				
				if(document.getElementById('GState').style.display=='block'){
					document.getElementById('GState').value = "0";
				}
				else if(document.getElementById('txtGState').style.display=='block'){
					document.getElementById('txtGState').value = "";
				}
				document.getElementById('txtCorrPincode').value = "";
			
		break;
	}
	
}
function getNewMotherCorrAddress(id){
	document.getElementById('permCMAddressCheck').value=id.value;
	switch(id.value){
		case 'Y':	
		document.getElementById('txtCorrAddress1').value=document.getElementById('txtMAddress1').value;
		document.getElementById('txtLocaCorrContactNoAreaCode').value=document.getElementById('txtMMobileAreaCode').value;
		document.getElementById('txtLocaCorrContactNo').value=document.getElementById('txtMMobileNo').value;
		document.getElementById('txtCorrAddress2').value=document.getElementById('txtMAddress2').value;
		document.getElementById('txtCorrContactNoAreaCode').value=document.getElementById('txtMContactNoAreaCode').value;
		document.getElementById('txtCorrContactNoSTDCode').value=document.getElementById('txtMContactNoSTDCode').value;
		document.getElementById('txtCorrContactNo').value=document.getElementById('txtMContactNo').value;
		document.getElementById('txtCorrCity').value=document.getElementById('txtMCity').value;
		document.getElementById('txtCorrEMail').value=document.getElementById('txtMEmail').value;
	    document.getElementById('txtGCountry').value=document.getElementById('txtMCountry').value;
		if(document.getElementById('MState').style.display=='block'){
			
			document.getElementById('GState').style.display='block';
			document.getElementById('txtGState').style.display='none';
			
			var fieldCountryValue=document.getElementById('txtGCountry').value;
			fnGetDependentData('app_statecode_master',fieldCountryValue,'entity_id@state_name','country_id','GState,PerDistrict','GState,PerDistrict');
			var selectedStateValue=document.getElementById('MState').value;
			setTimeout("fnSelectValue('GState','"+selectedStateValue+"')",500);
			
		}
		else if(document.getElementById('txtMState').style.display=='block'){
			document.getElementById('GState').style.display='none';
			document.getElementById('txtGState').style.display='block';
			
			document.getElementById('txtGState').value=document.getElementById('txtMState').value;			
		}
		document.getElementById('txtCorrPincode').value=document.getElementById('txtMPincode').value;
		
				break;
		
		case 'N':		
		
				document.getElementById('txtCorrAddress1').value = "";
				document.getElementById('txtLocaCorrContactNoAreaCode').value = "";
				document.getElementById('txtLocaCorrContactNo').value = "";
				document.getElementById('txtCorrAddress2').value = "";
				document.getElementById('txtCorrContactNoAreaCode').value = "";
				document.getElementById('txtCorrContactNoSTDCode').value = "";
				document.getElementById('txtCorrContactNo').value = "";
				document.getElementById('txtCorrCity').value = "";
				document.getElementById('txtCorrEMail').value = "";
				document.getElementById('txtGCountry').value = "63";
				
				if(document.getElementById('GState').style.display=='block'){
					document.getElementById('GState').value = "";
				}
				else if(document.getElementById('txtGState').style.display=='block'){
					document.getElementById('txtGState').value = "0";
				}
				document.getElementById('txtCorrPincode').value = "";
			
		break;
	}
	
}
function getNewMotherCorrAddress(id){
	document.getElementById('permCGAddressCheck').value=id.value;
	switch(id.value){
		case 'Y':	
		document.getElementById('txtCorrAddress1').value=document.getElementById('txtLGAddress1').value;
		document.getElementById('txtLocaCorrContactNoAreaCode').value=document.getElementById('txtLocalGContactNoAreaCode').value;
		document.getElementById('txtLocaCorrContactNo').value=document.getElementById('txtLocalGContactNo').value;
		document.getElementById('txtCorrAddress2').value=document.getElementById('txtLGAddress2').value;
		document.getElementById('txtCorrContactNoAreaCode').value=document.getElementById('txtLGContactNoAreaCode').value;
		document.getElementById('txtCorrContactNoSTDCode').value=document.getElementById('txtLGContactNoSTDCode').value;
		document.getElementById('txtCorrContactNo').value=document.getElementById('txtLGContactNo').value;
		document.getElementById('txtCorrCity').value=document.getElementById('txtLGCity').value;
		document.getElementById('txtCorrEMail').value=document.getElementById('txtLGEMail').value;
	    document.getElementById('txtGCountry').value=document.getElementById('txtLGCountry').value;
		if(document.getElementById('LGState').style.display=='block'){
			
			document.getElementById('GState').style.display='block';
			document.getElementById('txtGState').style.display='none';
			
			var fieldCountryValue=document.getElementById('txtGCountry').value;
			fnGetDependentData('app_statecode_master',fieldCountryValue,'entity_id@state_name','country_id','GState,PerDistrict','GState,PerDistrict');
			var selectedStateValue=document.getElementById('LGState').value;
			setTimeout("fnSelectValue('GState','"+selectedStateValue+"')",500);
			
		}
		else if(document.getElementById('txtLGState').style.display=='block'){
			document.getElementById('GState').style.display='none';
			document.getElementById('txtGState').style.display='block';
			
			document.getElementById('txtGState').value=document.getElementById('txtLGState').value;			
		}
		document.getElementById('txtCorrPincode').value=document.getElementById('txtLGPincode').value;
		
				break;
		
		case 'N':		
		
				document.getElementById('txtCorrAddress1').value = "";
				document.getElementById('txtLocaCorrContactNoAreaCode').value = "";
				document.getElementById('txtLocaCorrContactNo').value = "";
				document.getElementById('txtCorrAddress2').value = "";
				document.getElementById('txtCorrContactNoAreaCode').value = "";
				document.getElementById('txtCorrContactNoSTDCode').value = "";
				document.getElementById('txtCorrContactNo').value = "";
				document.getElementById('txtCorrCity').value = "";
				document.getElementById('txtCorrEMail').value = "";
				document.getElementById('txtGCountry').value = "63";
				
				if(document.getElementById('GState').style.display=='block'){
					document.getElementById('GState').value = "0";
				}
				else if(document.getElementById('txtGState').style.display=='block'){
					document.getElementById('txtGState').value = "";
				}
				document.getElementById('txtCorrPincode').value = "";
			
		break;
	}
	
}
function showOtherMCheck()
{
	if(document.getElementById("permCFAddressCheck").value=="N" && document.getElementById("permCMAddressCheck").value=="N")
	{
	  document.getElementById("corr_Guardian_tr").style.display="";
	  document.getElementById("corr_Guardian_space_tr").style.display="";
	  
	}
	else 
	{
	document.getElementById("corr_Guardian_tr").style.display="none";
	document.getElementById("corr_Guardian_space_tr").style.display="none";
	eval(resetElementsInDiv('corr_Guardian_tr')); 
	}

}
function showOtherCheck()
{
	if(document.getElementById("permCFAddressCheck").value=="N")
	{
	  document.getElementById("corr_mother_tr").style.display="";
	  document.getElementById("corr_mother_space_tr").style.display="";
	   document.getElementById("corr_Guardian_tr").style.display="none";
	  document.getElementById("corr_Guardian_space_tr").style.display="none";	  
	}
	else
	{
	  document.getElementById("corr_mother_tr").style.display="none";
	  document.getElementById("corr_mother_space_tr").style.display="none";
	  document.getElementById("corr_Guardian_tr").style.display="none";
	  document.getElementById("corr_Guardian_space_tr").style.display="none";
	  eval(resetElementsInDiv('corr_mother_tr')); 	 
	}
}	
function showMotherCountry()
{
	if(document.getElementById("txtMCountry").value=="63")
	{
	 document.getElementById("mother_Country_td").style.display="";
	  document.getElementById("mother_country_value").style.display="";
	}
	else
	{
	 document.getElementById("mother_Country_td").style.display="none";
	 document.getElementById("mother_country_value").style.display="none";
	document.getElementById("txtmotherCountry").value="";
	}
}
function fnShowFatherOtherCountry()
{
	if(document.getElementById("txtCountryOther").value=="63")
	{
	 document.getElementById("father_Country_tr").style.display="";
	 document.getElementById("father_det_td").setAttribute('rowspan','7');
	 document.getElementById("fatherDet_img").setAttribute('height','225');
	}
	else
	{
	 document.getElementById("father_Country_tr").style.display="none";
	document.getElementById("txtfatherCountry").value="";
	 document.getElementById("father_det_td").setAttribute('rowspan','6');
	 document.getElementById("fatherDet_img").setAttribute('height','190');
	}
}
function getOtherNatioDetails(id)
{
	if(document.getElementById("txtAppNationality").value=="63")
	{
	 document.getElementById("otherNation_head_td").style.display="";
	 document.getElementById("otherNation_td").style.display="";
	}
	else
	{
	 document.getElementById("otherNation_head_td").style.display="none";
	document.getElementById("otherNation_td").style.display="none";
	document.getElementById("txtNation").value="";
	}
}
function getOtherDetails(id)
{
	if( document.getElementById("txtLangFlue1").value=="Others" || document.getElementById("txtLangFlue2").value=="Others"){
	if(document.getElementById("txtLangFlue1").value=="Others")
	{
	 document.getElementById("other_Stream_tr").style.display="";
	 document.getElementById("fimg_td").setAttribute('rowspan','2');
	 document.getElementById("FImg").setAttribute('height','52');
	 document.getElementById("other_Mother_td").style.display="";
	 document.getElementById("other_Mother_value").style.display="";
	}
	else
	{
	document.getElementById("txtOtherMother").value="";
	document.getElementById("other_Mother_td").style.display="none";
	document.getElementById("other_Mother_value").style.display="none";
	}
	if(document.getElementById("txtLangFlue2").value=="Others")
	{
	  document.getElementById("other_Stream_tr").style.display="";
	 document.getElementById("fimg_td").setAttribute('rowspan','2');
	 document.getElementById("FImg").setAttribute('height','52');
	 document.getElementById("other_OtherFlu_td").style.display="";
	 document.getElementById("other_otherFlu_value").style.display="";
	}
	else
	{
	 document.getElementById("txtOthersSpeTong").value="";
	 document.getElementById("other_OtherFlu_td").style.display="none";
	 document.getElementById("other_otherFlu_value").style.display="none";
	}
	}
	else
	{
		 document.getElementById("other_Stream_tr").style.display="none";
		 document.getElementById("fimg_td").setAttribute('rowspan','1');
	     document.getElementById("FImg").setAttribute('height','26');
	}
}	
function cleardiv(pDivName)
{var lDIV = document.getElementById(pDivName);
var lCount;
	if (lDIV.childNodes != null)
	{
		if (lDIV.childNodes.length > 0)
		{
			for(lCount = lDIV.childNodes.length - 1; lCount >= 0; lCount--)
			{
				lDIV.removeChild(lDIV.childNodes[lCount]);
			}
		}
	}
}
function doCheckLength(event,iLength)
{
 if (navigator.appName =="Microsoft Internet Explorer"){
  if(event.srcElement.value.length >= iLength )
  {
    event.keyCode=0;
  }
 }else {
  if(event.target.value.length >= iLength )
  {
   if(event.charCode !=0)
      {
    event.preventDefault();	
    }
  }
 
 } 
}
function checkSignUpEnter(e){
  var characterCode;
  
  if(e && e.which){
  		e = e;
  		characterCode = e.which;
  }
  else{
  	characterCode = e.keyCode;
  	
  }
  
  if(characterCode == 13){
	  alert(characterCode);
  	verify();
  }
}

function verify(){
	var sec = trim(document.getElementById("seccode").value);
	var ses = trim(s);	
    ses = ses.replace(/\n/g, "");

   return true;   
}
function trimWS( text ) {return (text || "").replace( /^\s+|\s+$/g, "" );} // white space removel function

function copyUpload(){
}

function displayMandatoryMark(){
if(document.onlineAppForm.isPhotoUpload.value=='Y'){
		document.getElementById('span1').style.display = 'none';
	}
 	if(document.onlineAppForm.isSignatureUpload.value=='Y'){
		document.getElementById('span2').style.display = 'none';
	}
 if(document.onlineAppForm.isThumbUpload.value=='Y'){
		document.getElementById('span3').style.display = 'none';
	}
if(document.onlineAppForm.isParentSignUpload.value=='Y'){
		document.getElementById('span4').style.display = 'none';
	}
}
function replace(str)
{	
	var string="";	
	var newstr = str.replace(/<!\[CDATA\[/, string);
	newstr=newstr.replace(/\]\]>/, string);	
	return newstr;
} 
function ajaxValidationForEntity1(){
    var http_request = false;	   
	if (window.XMLHttpRequest)
		{ // Mozilla, Safari,...
			http_request = new XMLHttpRequest();
			if (http_request.overrideMimeType)
			{
				http_request.overrideMimeType('text/xml');
			}
		} 
	else if (window.ActiveXObject)
		{ // IE		           
			try {
				 http_request = new ActiveXObject("Msxml2.XMLHTTP");
		 		} catch (e)
					{
			   			 try {
			     		  http_request = new ActiveXObject("Microsoft.XMLHTTP");
				  			 } catch (e) {}
			    	}
		 }
 if (!http_request)
	  {
	         return false;
       }
var orgId = document.getElementById("OID");
 	var formId = document.getElementById("FID");
 	var scratchValue= document.getElementById("txt_PIN_NO_Cash").value;
var vClassName = document.getElementById("vClassName");
    var pValidationServlet = document.onlineAppForm.preSubmitValidation.value;
    
    var parameters = "orgId="+orgId.value+"&formId="+formId.value+"&vClassName="+vClassName.value+"&ScratchedNumber="+scratchValue;
    
    http_request.open('POST',pValidationServlet+parameters,true);       
	http_request.onreadystatechange = function() { handleServerResponse(http_request); }; 	 	                    
	http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");           
http_request.send(null); //Posting txtname to Servlet
}
function handleServerResponse(http_request){
var ERRORStr = new Array();
var responseError='';	
var fields;	
var flag='';
  if (http_request.readyState == 4) { 
if (http_request.status == 200) {
		 if(http_request.responseText != null)
                {    var responseDoc= http_request.responseXML;	 
					 var docs = responseDoc.getElementsByTagName("DOCUMENT");
					 var noOfDocuments = docs.length; 
					 for(count=0;count<noOfDocuments;count++)		//loop document
			 	    {	
			 		  fields = docs[count].getElementsByTagName("FIELD");
			 	     for(fieldCount=0;fieldCount<fields.length;fieldCount++)  //loop field
							{
							  var fieldName = fields[fieldCount].getAttribute("name");	
				   				if(fieldName=="error")
								{
									ERRORStr[count] = fields[fieldCount].firstChild.nodeValue;
									ERRORStr[count] = replace(ERRORStr[count]);
								  responseError = responseError+'<br/>'+ERRORStr[count];
									alert(ERRORStr[count]);
								    	return false;
															    
								}	
							
								if(fieldName=="status")
								{  responseError = responseError+'<br/>'+"Image Not Uploaded";
								    flag='Image not uploaded.';
								  alert("You have not uploaded images.");
								}}  
					}
			    }
            }
        }
}
function doValidate() {
var tab1_Validation=false; 
	var tab2_Validation=false;
 	var tab3_Validation=false;
 	var tab4_Validation=false;
 	var tab5_Validation=false;
 	tab1_Validation = eval('validatePersonalDetails()');
if(tab1_Validation) {
		tab2_Validation = eval('validateQualificationDetails()');
	}
	if(tab2_Validation){	
		
		if(confirm("Are you sure you want to submit the form ?"))
		{
			eval('saveData()');
		}
		else 
		{
			validate=false;
        	return false;	
		}
		
	}
}

function fnMakeMandatory()
{
	 if (document.getElementById("txtAdmisnGrade").value =="Nursery and Reception" ||
     document.getElementById("txtAdmisnGrade").value =="PREP1" || document.getElementById("txtAdmisnGrade").value =="PREP2") {
      document.getElementById("second_lang").style.display="none";
       document.getElementById("txtSecLang").setAttribute('class','Country_field');
       document.getElementById("PreSchoolDet_Span").style.display="none";
       document.getElementById("preschool_other").style.display="";
        document.getElementById("txtInstitute1").setAttribute('class','text_field');
     document.getElementById("txtLocation1").setAttribute('class','text_field');
     document.getElementById("txtPassYear1").setAttribute('class','Country_field');
     document.getElementById("txtGrade1").setAttribute('class','text_field');
     document.getElementById("txtCurriculm1").setAttribute('class','text_field');
     document.getElementById("txtPerc1").setAttribute('class','text_field');
    }
    else
    {
     document.getElementById("second_lang").style.display="";
     document.getElementById("txtSecLang").setAttribute('class','Country_field_required');
    document.getElementById("PreSchoolDet_Span").style.display="";
     document.getElementById("preschool_other").style.display="none";
     document.getElementById("txtInstitute1").setAttribute('class','text_field_required');
     document.getElementById("txtLocation1").setAttribute('class','text_field_required');
     document.getElementById("txtPassYear1").setAttribute('class','Country_field_required');
     document.getElementById("txtGrade1").setAttribute('class','text_field_required');
     document.getElementById("txtCurriculm1").setAttribute('class','text_field_required');
     document.getElementById("txtPerc1").setAttribute('class','text_field_required');
    }
}
function validatePersonalDetails(){
 if (document.getElementById("txtAppFirstName").value == '') {
	 $('#container-11').triggerTab(1);
        alert("Please enter the Applicant's First Name.");
		document.getElementById("txtAppFirstName").focus();
       	validate=false;
        return false;
    }
    else{
    	validate=true;
    }
   if (document.getElementById("txtAppLastName").value == '') {
	   $('#container-11').triggerTab(1);
        alert("Please enter the Applicant's Last Name.");
		//document.getElementById("txtAppLastName").focus();
       	validate=false;
        return false;
    }
    else{
    	validate=true;
    }
   if (document.getElementById("appDob").value == '') {
	   $('#container-11').triggerTab(1);
        alert("Please select the Applicant's Date of Birth.");
		//document.getElementById("appDob").focus();
        validate=false;
        return false;
    }
    else{
    	validate=true;
    }
     var currentTime=new Date();
    var dob=new Date(document.getElementById("appDob").value);
    
    if(dob>currentTime){
    	$('#container-11').triggerTab(1);
    	alert("Please select correct Date of Birth");
		document.getElementById("appDob").focus();
    	validate=false;
    	return false;
    }
    else{
    	validate=true;
    }
	
	Date.prototype.defaultView=function(){
	var dd=this.getDate();
	if(dd<10)dd='0'+dd;
	var mm=this.getMonth()+1;
	if(mm<10)mm='0'+mm;
	var yyyy=this.getFullYear();
	return String(mm+"\/"+dd+"\/"+yyyy)
}

var currentTimes = new Date();
 var str1 =document.getElementById("appDob").value;
var str2 = currentTimes.defaultView();


var mon1 = parseInt(str1.substring(0, 2), 10);
var dt1 = parseInt(str1.substring(3, 5), 10);
var yr1 = parseInt(str1.substring(6, 10), 10);
var mon2 = parseInt(str2.substring(0, 2), 10);
var dt2= parseInt(str2.substring(3, 5), 10);
var yr2 = parseInt(str2.substring(6, 10), 10);


 if (dt1==dt2 && mon1==mon2  && yr1==yr2) {
alert("Please select correct Date of Birth");
validate=false;
return false;
}
 else{
 	validate=true;
 }	
     
	
	if (document.getElementById("txtAppGender").value == '') {
	  // $('#container-11').triggerTab(1);
        alert("Please select the Applicant's Gender.");
		validate=false;
        return false;
    }
    else{
    	validate=true;
    }
	
	
    if (document.getElementById("txtAdmisnGrade").value == '') {
		//$('#container-11').triggerTab(1);
        alert("Please select Applicant's admission grade.");
		//document.getElementById("txtAdmisnGrade").focus();
        validate=false;
        return false;
    }
    else{
    	validate=true;
    }
     if (document.getElementById("txtAppNationality").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please select Applicant's Nationality.");
		//document.getElementById("txtAppNationality").focus();
        validate=false;
        return false;
    }
    else{
    	validate=true;
    }
     if (document.getElementById("txtSubStream").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please select Applicant's Academic Program.");
		//document.getElementById("txtSubStream").focus();
        validate=false;
        return false;
    }
    else{
    	validate=true;
    }
     if (document.getElementById("txtBoarding").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please select Applicant's choice of boarding.");
		//document.getElementById("txtBoarding").focus();
        validate=false;
        return false;
    }
    else{
    	validate=true;
    }
	
	 if (document.getElementById("txtAcademicYear").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please select Applicant's Academic Year.");
		//document.getElementById("txtBoarding").focus();
        validate=false;
        return false;
    }
    else{
    	validate=true;
    }
	
	 if ((document.getElementById("txtAdmisnGrade").value !="Nursery and Reception" && 
     document.getElementById("txtAdmisnGrade").value !="PREP1" && document.getElementById("txtAdmisnGrade").value !="PREP2")
      && document.getElementById("txtSecLang").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please select Applicant's second language.");
		//document.getElementById("txtSecLang").focus();
        validate=false;
        return false;
    }
    else{
    	validate=true;
    }
	
	
     if (document.getElementById("appDoJ").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please select Applicant's approximate date of joining.");
		//document.getElementById("appDoJ").focus();
        validate=false;
        return false;
    }
    else{
    	validate=true;
    }
     var doj=new Date(document.getElementById("appDoJ").value);
 var dob=new Date(document.getElementById("appDob").value);    
 if(doj<dob){
	// $('#container-11').triggerTab(1);
    	alert("Please select correct Date of joining");
		document.getElementById("appDoJ").focus();
    	validate=false;
    	return false;
    }
    else{
    	validate=true;
    }
    
   
	if (document.getElementById("txtAppSEN").value == '') {
	 //$('#container-11').triggerTab(1);
        alert("Please select the Applicant's SEN(Special Education Need).");
		
        validate=false;
        return false;
    }
   else{
    	validate=true;
    }
	
 if (document.getElementById("txtFName").value == '') {
	 //$('#container-11').triggerTab(1);
        alert("Please enter the Applicant's father name.");
		//document.getElementById("txtFName").focus();
        validate=false;
        return false;
    }
   else{
    	validate=true;
    }
    if (document.getElementById("txtFAddress1").value == '') {
		//$('#container-11').triggerTab(1);
        alert("Please enter the father address line 1.");
		//document.getElementById("txtFAddress1").focus();
        validate=false;
        return false;
    }
   else{
    	validate=true;
    }
      if( ((trimWS(document.getElementById("txtFContactNo").value) == 'Telephone No.') || (trimWS(document.getElementById("txtFContactNo").value) == '')) && (trimWS(document.getElementById("txtFMobileNo").value) == '')) {
       // $('#container-11').triggerTab(1);
		alert("Please enter mobile No. or telephone number with area code in father's address.");
		//document.getElementById("txtFContactNo").focus();
        validate=false;
        return false;
    }
    else{    	
    	if(trimWS(document.getElementById("txtFContactNo").value) != 'Telephone No.' && trimWS(document.getElementById("txtFContactNo").value) != ''){
    		if(trimWS(document.getElementById("txtFContactNoSTDCode").value) == '' || trimWS(document.getElementById("txtFContactNoSTDCode").value) == 'STD Code'){
    		//	$('#container-11').triggerTab(1);
				alert("Please enter the STD Code for telephone number in father's details.");
				//document.getElementById("txtFContactNoSTDCode").focus();
        		validate=false;
        		return false;
    		}
    		else{
    			validate=true;
    		}    		
    	}
    	if(document.getElementById("txtFMobileNo").value!='')
    	{
    	var len = trimWS(document.getElementById("txtFMobileNo").value).length;
    	if(len<10){
		//	$('#container-11').triggerTab(1);
    	alert("Please enter 10 digit mobile number in father details.");
		//document.getElementById("txtFMobileNo").focus();
    	validate=false;
    	return false;
    	}
    	else{
    		validate=true;
    	}  
    	} 
    }       
     if (document.getElementById("txtCountryOther").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please select country in father's address.");
		//document.getElementById("txtCountryOther").focus();
        validate=false;
        return false;
    }
   else{
    	validate=true;
    }
   if(document.getElementById("FState").style.display =='block'){
    	if (document.getElementById("FState").value == "0") {
        	//$('#container-11').triggerTab(1);
        	alert("Please select state in father's address.");
			//document.getElementById("FState").focus();
        	validate=false;
        	return false;
    	}
    	else{
    		validate=true;
    	}
    }
      if(document.getElementById("txtFState").style.display =='block'){
    	if (document.getElementById("txtFState").value == '') {
	      //  $('#container-11').triggerTab(1);
	        alert("Please enter state in father's address.");
		//	document.getElementById("FState").focus();
	        validate=false;
	        return false;
    	}
    	else{
    		validate=true;
    	}
    }
	
	 if(document.getElementById("txtFEmail").value == ''){
		// $('#container-11').triggerTab(1);
		alert("Please enter email id in father's address.");
		//document.getElementById("txtFEmail").focus();
		validate=false;
        return false;
    }
    else{
    	validate=true;
    }
	
		if(!validateEmail(document.getElementById('txtFEmail').value,false)){
	  //	$('#container-11').triggerTab(1);
	  alert('The Email ID format in fathers address is invalid,the valid Email Id format is name@org.com or name@org.co.in ' );
 document.getElementById("txtFEmail").focus();
 validate=false;
	return false;
	
    }
    else{
    	validate=true;
    }
	
	
	 if (document.getElementById("txtFPincode").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please enter pin code in father's address.");
		//document.getElementById("txtFPincode").focus();
        validate=false;
        return false;
    }
   else{
    	validate=true;
    }
    if(document.getElementById("txtCountryOther").value == '25'){
		if((document.getElementById("txtFPincode").value).length != '6'){
		//	$('#container-11').triggerTab(1);
		alert("Please enter pincode of 6 digits in father's address.");
		//document.getElementById("txtFPincode").focus();
		validate=false;
        return false;
    }
    else{
		validate=true;
	}	  
	}
	
	if(document.getElementById("txtFConfirmEmail").value == ''){
		//$('#container-11').triggerTab(1);
		alert("Please confirm email id in father's address.");
		//document.getElementById("txtFConfirmEmail").focus();
		validate=false;
        return false;
    }
    else{
    	validate=true;
    }
    
	if(document.getElementById("txtFEmail").value !='' && document.getElementById("txtFConfirmEmail").value!=''){
   if(document.getElementById("txtFEmail").value != document.getElementById("txtFConfirmEmail").value){
		//$('#container-11').triggerTab(1);
		alert("The confirmed email id does not match with email id in father's address.");
		//document.getElementById("txtFConfirmEmail").focus();
		validate=false;
        return false;
    }
    else{
    	validate=true;
    }
    }
  	
  
    
    if(!validateEmail(document.getElementById('txtFConfirmEmail').value,false)){
      //	$('#container-11').triggerTab(1);
	  alert('The confirmed Email ID format is invalid in fathers address,the valid Email Id format is name@org.com or name@org.co.in' );
 //document.getElementById("txtFConfirmEmail").focus();
 validate=false;
	return false;
	
    }
    else{
    	validate=true;
    }
    if(document.getElementById("txtCountryOther").value == '63'){
		if(document.getElementById("txtfatherCountry").value==""){
		//	$('#container-11').triggerTab(1);
		alert("Please specify father's country in case of other.");
		//document.getElementById("txtfatherCountry").focus();
		validate=false;
        return false;
    }
    else{
		validate=true;
	}	  
	}
    if (document.getElementById("txtMName").value == '') {
		//$('#container-11').triggerTab(1);
        alert("Please enter the Applicant's mother name.");
		//document.getElementById("txtMName").focus();
        validate=false;
        return false;
    }
   else{
    	validate=true;
    }
    if (document.getElementById("txtMAddress1").value == '') {
		//$('#container-11').triggerTab(1);
        alert("Please enter the mother address line 1.");
		//document.getElementById("txtMAddress1").focus();
        validate=false;
        return false;
    }
   else{
    	validate=true;
    }
     if (document.getElementById("txtMCountry").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please select country in mother's address.");
		//document.getElementById("txtMCountry").focus();
        validate=false;
        return false;
    }
   else{
    	validate=true;
    }
   if(document.getElementById("MState").style.display =='block'){
    	if (document.getElementById("MState").value == "0") {
        	//$('#container-11').triggerTab(1);
        	alert("Please select state in mother's address.");
		//	document.getElementById("MState").focus();
        	validate=false;
        	return false;
    	}
    	else{
    		validate=true;
    	}
    }
      if(document.getElementById("txtMState").style.display =='block'){
    	if (document.getElementById("txtMState").value == '') {
	      //  $('#container-11').triggerTab(1);
	        alert("Please enter state in mother's address.");
			//document.getElementById("MState").focus();
	        validate=false;
	        return false;
    	}
    	else{
    		validate=true;
    	}
    }
	
	if(document.getElementById("txtMEmail").value == ''){
		// $('#container-11').triggerTab(1);
		alert("Please enter email id in mother's address.");
		//document.getElementById("txtMEmail").focus();
		validate=false;
        return false;
    }
    else{
    	validate=true;
    }
	
		if(!validateEmail(document.getElementById('txtMEmail').value,false)){
		//$('#container-11').triggerTab(1);
	 alert('The Email ID format in mothers address is invalid,the valid Email Id format is name@org.com or name@org.co.in ' );
 //document.getElementById("txtMEmail").focus();
 validate=false;
	return false;
	
    }
    else{
    	validate=true;
    }
	
	
	 if (document.getElementById("txtMPincode").value == '') {
		// $('#container-11').triggerTab(1);
        alert("Please enter pin code in mother's address.");
		//document.getElementById("txtMPincode").focus();
        validate=false;
        return false;
    }
   else{
    	validate=true;
    }
    if(document.getElementById("txtMCountry").value == '25'){
		if((document.getElementById("txtMPincode").value).length != '6'){
		//	$('#container-11').triggerTab(1);
		alert("Please enter pincode of 6 digits in mother's address.");
		//document.getElementById("txtMPincode").focus();
		validate=false;
        return false;
    }
    else{
		validate=true;
	}	  
	}
     

	if(document.getElementById("txtMConfirmEmail").value == ''){
		//$('#container-11').triggerTab(1);
		alert("Please confirm email id in mother's address.");
		//document.getElementById("txtMConfirmEmail").focus();
		validate=false;
        return false;
    }
    else{
    	validate=true;
    }
    
    if(document.getElementById("txtMEmail").value != document.getElementById("txtMConfirmEmail").value){
		//$('#container-11').triggerTab(1);
		alert("The confirmed email id does not match with email id in mother's address.");
		//document.getElementById("txtMConfirmEmail").focus();
		validate=false;
        return false;
    }
    else{
    	validate=true;
    }
  	
  	if(!validateEmail(document.getElementById('txtMEmail').value,false)){
		//$('#container-11').triggerTab(1);
	 alert('The Email ID format in mothers address is invalid,the valid Email Id format is name@org.com or name@org.co.in ' );
 //document.getElementById("txtMEmail").focus();
 validate=false;
	return false;
	
    }
    else{
    	validate=true;
    }
    
    if(!validateEmail(document.getElementById('txtMConfirmEmail').value,false)){
		//$('#container-11').triggerTab(1);
      alert('The confirmed Email ID format is invalid in mothers address,the valid Email Id format is name@org.com or name@org.co.in' );
 //document.getElementById("txtMConfirmEmail").focus();
 validate=false;
	return false;
	 }
    else{
    	validate=true;
    }
     if(document.getElementById("txtMCountry").value == '63'){
		if(document.getElementById("txtmotherCountry").value==""){
		//	$('#container-11').triggerTab(1);
		alert("Please specify mother's country in case of other.");
		//document.getElementById("txtmotherCountry").focus();
		validate=false;
        return false;
    }
    else{
		validate=true;
	}	  
	}
	if(document.getElementById("txtFOffPincode").value != ''){
    if(document.getElementById("txtCountry").value == '25'){
		if((document.getElementById("txtFOffPincode").value).length != '6'){
		//	$('#container-11').triggerTab(1);
		alert("Please enter pincode of 6 digits in father's company address.");
		//document.getElementById("txtFOffPincode").focus();
		validate=false;
        return false;
    }
    else{
		validate=true;
	}	  
	}
	}
	if(document.getElementById("txtMOffPincode").value != ''){
	if(document.getElementById("txtPerCountry").value == '25'){
		if((document.getElementById("txtMOffPincode").value).length != '6'){
		//	$('#container-11').triggerTab(1);
		alert("Please enter pincode of 6 digits in mother's company address.");
		//document.getElementById("txtMOffPincode").focus();
		validate=false;
        return false;
    }
    else{
		validate=true;
	}	  
	}
	}
	 if(document.getElementById("txtFOffEMail").value != ''){
    if(!validateEmail(document.getElementById('txtFOffEMail').value,false)){
	  //	$('#container-11').triggerTab(1);
	  alert('The Email ID format in fathers company address is invalid,the valid Email Id format is name@org.com or name@org.co.in ' );
//document.getElementById("txtFOffEMail").focus();
 validate=false;
	return false;
	
    }
    else{
    	validate=true;
    }
	}
	if(document.getElementById("txtMOffEMail").value != ''){
     if(!validateEmail(document.getElementById('txtMOffEMail').value,false)){
		// $('#container-11').triggerTab(1);
	  alert('The Email ID format in mothers company address is invalid,the valid Email Id format is name@org.com or name@org.co.in ' );
 //document.getElementById("txtMOffEMail").focus();
 validate=false;
	return false;
	
    }
    else{
    	validate=true;
    }
	}
	 if(document.getElementById("txtFOffMobile").value!=""){
    if(trim(document.getElementById("txtFOffMobile").value).length < 10 ){
		//$('#container-11').triggerTab(1);
    	alert("Please enter 10 digit Mobile Number in father's office Address.");
		//document.getElementById("txtFOffMobile").focus();
      	validate=false;
        return false;
    }else{
    	validate=true;
    }
    }
   if(document.getElementById("txtMOffMobile").value!=""){
    if(trim(document.getElementById("txtMOffMobile").value).length < 10 ){
	//	$('#container-11').triggerTab(1);
    	alert("Please enter 10 digit Mobile Number in mother's office Address.");
      	//document.getElementById("txtMOffMobile").focus();
		validate=false;
        return false;
    }else{
    	validate=true;
    }
    }
	
	if(document.getElementById("txtLGPincode").value != ''){
		if(document.getElementById("txtLGCountry").value == '25'){
			if((document.getElementById("txtLGPincode").value).length != '6'){
		//			$('#container-11').triggerTab(1);
				alert("Please enter pincode of 6 digits in Guardians details.");
				//document.getElementById("txtLGPincode").focus();
				validate=false;
				return false;
			}
			else{
				validate=true;
			}	  
		}
	}
	
	
    if(document.getElementById("txtLGEMail").value != ''){
    if(!validateEmail(document.getElementById('txtLGEMail').value,false)){
	//	$('#container-11').triggerTab(1);
	 alert('The Email ID format in Guardians details is invalid,the valid Email Id format is name@org.com or name@org.co.in ' );
 //document.getElementById("txtLGEMail").focus();
 validate=false;
	return false;
	 }
    else{
    	validate=true;
    }
    }
	if(document.getElementById("txtLocaCorrContactNo").value!=""){
    if(trim(document.getElementById("txtLocaCorrContactNo").value).length < 10 ){
	//	$('#container-11').triggerTab(1);
    	alert("Please enter 10 digit Mobile Number in correspondence address details.");
      //	document.getElementById("txtLocaCorrContactNo").focus();
		validate=false;
        return false;
    }else{
    	validate=true;
    }
    }
	
		if(document.getElementById("txtCorrPincode").value != ''){
		if(document.getElementById("txtGCountry").value == '25'){
			if((document.getElementById("txtCorrPincode").value).length != '6'){
			//		$('#container-11').triggerTab(1);
				alert("Please enter pincode of 6 digits in Guardians details.");
				//document.getElementById("txtCorrPincode").focus();
				validate=false;
				return false;
			}
			else{
				validate=true;
			}	  
		}
	}
	
	
    if(document.getElementById("txtCorrEMail").value!=""){
    if(!validateEmail(document.getElementById('txtCorrEMail').value,false)){
	//	$('#container-11').triggerTab(1);
	 alert('The Email ID format in correspondence address is invalid,the valid Email Id format is name@org.com or name@org.co.in ' );
//document.getElementById("txtCorrEMail").focus();
 validate=false;
	return false;
	
    }
    else{
    	validate=true;
    }
    }
    	if (document.getElementById("upload_now").value == '') {
      //  $('#container-11').triggerTab(1);
        alert("Please Choose photo preference before proceeding.");
		//document.getElementById("upload_now").focus();
       	validate=false;
        return false;
    }
    else{
    	validate=true;
    }
    if (document.getElementById("upload_now").value == 'Y') {
       if(document.getElementById("txtPhotopath_hidden").value == ''){
		//   $('#container-11').triggerTab(1);
			alert("Please upload your latest photo");
			//document.getElementById("upload_now").focus();
			validate=false;
        	return false;
	}
    else{
    	validate=true;
    }
    }
	 return true;
}
function validateQualificationDetails(){
	 if (document.getElementById("txtAdmisnGrade").value !="Nursery and Reception" &&
     document.getElementById("txtAdmisnGrade").value !="PREP1" &&  document.getElementById("txtAdmisnGrade").value !="PREP2") {
	if (document.getElementById("txtInstitute1").value=='') {
	//	$('#container-11').triggerTab(2);
    	alert("Please enter institute name 1 in Previous Schools Details.");
		//document.getElementById("txtInstitute1").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			}
	if (document.getElementById("txtLocation1").value=='') {
//$('#container-11').triggerTab(2);
    	alert("Please enter location 1 in Previous Schools Details..");
		//document.getElementById("txtLocation1").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			}
   if (document.getElementById("txtPassYear1").value=='') {
	 //  $('#container-11').triggerTab(2);
    	alert("Please pass year 1 in Previous Schools Details..");
		//document.getElementById("txtPassYear1").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			}
    if (trim(document.getElementById("txtPassYear1").value)!= '') {
	    if (document.getElementById("appDob").value!=""){
	    var j =new Date(document.getElementById("appDob").value);
 		var d=j.getFullYear();
 		if (d >=document.getElementById("txtPassYear1").value) {
		//	$('#container-11').triggerTab(2);
    	 alert("year 1 can not be less or equal to year of birth in Previous Schools Details.");
        // document.getElementById("txtPassYear1").focus();
        validate=false;
        return false;
 		}
 		else{
 		validate=true;
 		}
 		}
 		else{}
 		}			 
     if (document.getElementById("txtGrade1").value=='') {
		// $('#container-11').triggerTab(2);
    	alert("Please enter grade 1 in Previous Schools Details..");
		//document.getElementById("txtGrade1").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			}  
    if (document.getElementById("txtCurriculm1").value=='') {
		//$('#container-11').triggerTab(2);
    	alert("Please enter curriculum 1 in Previous Schools Details..");
		//document.getElementById("txtCurriculm1").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			}  	
 if (document.getElementById("txtPerc1").value=='') {
	// $('#container-11').triggerTab(2);
    	alert("Please enter percentage 1 in Previous Schools Details..");
		//document.getElementById("txtPerc1").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			} 
    if (Number(document.getElementById("txtPerc1").value)>100) {
	//	$('#container-11').triggerTab(2);
    	alert("percentage 1 in Previous Schools Details can not be greater than 100.");
		//document.getElementById("txtPerc1").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			} 
    			}
    	 if (trim(document.getElementById("txtPassYear2").value)!= '') {
	    if (document.getElementById("appDob").value!=""){
	    var j =new Date(document.getElementById("appDob").value);
 		var d=j.getFullYear();
 		if (d >=document.getElementById("txtPassYear2").value) {
		//	$('#container-11').triggerTab(2);
    	 alert("year 2 can not be less or equal to year of birth in Previous Schools Details..");
       //  document.getElementById("txtPassYear2").focus();
        validate=false;
        return false;
 		}
 		else{
 		validate=true;
 		}
 		}
 		else{}
 		}			
 		 if (trim(document.getElementById("txtPassYear3").value)!= '') {
	    if (document.getElementById("appDob").value!=""){
	    var j =new Date(document.getElementById("appDob").value);
 		var d=j.getFullYear();
 		if (d >=document.getElementById("txtPassYear3").value) {
		//	$('#container-11').triggerTab(2);
    	 alert("year 3 can not be less or equal to year of birth in Previous Schools Details..");
        // document.getElementById("txtPassYear3").focus();
        validate=false;
        return false;
 		}
 		else{
 		validate=true;
 		}
 		}
 		else{}
 		}			
 		 if (trim(document.getElementById("txtPassYear4").value)!= '') {
	    if (document.getElementById("appDob").value!=""){
	    var j =new Date(document.getElementById("appDob").value);
 		var d=j.getFullYear();
 		if (d >=document.getElementById("txtPassYear4").value) {
			//$('#container-11').triggerTab(2);
    	 alert("year 4 can not be less or equal to year of birth in Previous Schools Details..");
        // document.getElementById("txtPassYear4").focus();
        validate=false;
        return false;
 		}
 		else{
 		validate=true;
 		}
 		}
 		else{}
 		}
 		if (document.getElementById("txtLangFlue1").value=='') {
		//	$('#container-11').triggerTab(2);
    	alert("Please select Mother tongue.");
		//document.getElementById("txtLangFlue1").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			} 
    if (document.getElementById("txtLangFlue2").value=='') {
		//$('#container-11').triggerTab(2);
    	alert("Please select other language.");
		document.getElementById("txtLangFlue2").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			} 		
    	if (document.getElementById("txtLangFlue1").value=='Others') {				
 	if (document.getElementById("txtOtherMother").value=='') {
		//$('#container-11').triggerTab(2);
    	alert("Please specify mother tongue.");
		//document.getElementById("txtOtherMother").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			} 	
 			}	
 	if (document.getElementById("txtLangFlue2").value=='Others') {				
 	if (document.getElementById("txtOthersSpeTong").value=='') {
		//$('#container-11').triggerTab(2);
    	alert("Please specify other language.");
		//document.getElementById("txtOthersSpeTong").focus();
        			validate=false;
        			return false;
    			}
    			else{
    				validate=true;
    			} 	
 			}	
	if(document.getElementById("appDoPassExp").value!='')
{	
 var Validity =new Date(trim(document.getElementById("appDoPassExp").value));
		var currentTime=new Date();
	if(Validity<currentTime){
    	//$('#container-11').triggerTab(1);
    	alert("Please select correct Passport Expiry Date");
    	validate=false;
    	return false;
    }
    else{
    	validate=true;
    }	
}	
			
			
			
			
 	 if(document.getElementById("acceptanceCHK").checked==false){
		// $('#container-11').triggerTab(2);
	alert("Please accept the Terms and Conditions.");
	//document.getElementById("acceptanceCHK").focus();
	validate="false";
			return false;
	  }else{
	  		validate="true";
	   }							
 return true;
} 






function fnCloseImage(){
var closeimage = document.getElementById('savedimage').style.display="none";    
}

function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}
function getCheckedValue1(inputObj){
var objLength = inputObj.length;
if(objLength == undefined){
if(inputObj.checked)
return inputObj.value;
else
return "";
}else{
for(var i = 0; i < objLength; i++) {
if(inputObj[i].checked) {
return inputObj[i].value;
}
}
}
return "";
}

function fnEditApplication(){
	document.loginForm.action="/EForms/editApplication.do?orgId=502&formId=185";
	document.loginForm.method="POST";
	document.loginForm.submit();
}
function clearvalue(elem){
	if(isNaN(document.getElementById(elem.id).value) || 
	document.getElementById(elem.id).value == ''){
	document.getElementById(elem.id).value="";
	document.getElementById(elem.id).style.color="#000000";
	}
}
function retainvalue(elem,value){
	if(document.getElementById(elem.id).value == ''){
		document.getElementById(elem.id).value = value;
		document.getElementById(elem.id).style.color="#808080";
	}
	else if(document.getElementById(elem.id).value == value){
		document.getElementById(elem.id).style.color="#808080";
	}
	else{
		document.getElementById(elem.id).style.color="#000000";
	}
}

function changecolor(id){
	if(id.value == "Y"){
		document.getElementById("txtPerContactNoSTDCode").onblur();
		document.getElementById("txtPerContactNo").onblur();
	}
	else if(id.value == "N"){
		document.getElementById('txtPerContactNoSTDCode').value = "STD Code";
		document.getElementById('txtPerContactNo').value = "Telephone No.";
		document.getElementById('txtPerContactNoSTDCode').style.color="#808080";
		document.getElementById('txtPerContactNo').style.color="#808080";
				
	}
}
function doTaskInEdit(){
if(document.getElementById('isAdminEdit').value=="Y"){
	if(!isNaN(document.getElementById('txtMContactNoSTDCode').value)){
			document.getElementById('txtMContactNoSTDCode').style.color="#000000";
		}
	if(!isNaN(document.getElementById('txtMContactNo').value)){
			document.getElementById('txtMContactNo').style.color="#000000";
		}
	if(!isNaN(document.getElementById('txtFContactNoSTDCode').value)){
			document.getElementById('txtFContactNoSTDCode').style.color="#000000";
		}
	if(!isNaN(document.getElementById('txtFContactNo').value)){
			document.getElementById('txtFContactNo').style.color="#000000";
		}
	if(!isNaN(document.getElementById('txtLGContactNoSTDCode').value)){
			document.getElementById('txtLGContactNoSTDCode').style.color="#000000";
		}
	if(!isNaN(document.getElementById('txtLGContactNo').value)){
			document.getElementById('txtLGContactNo').style.color="#000000";
		}
	if(!isNaN(document.getElementById('txtCorrContactNoSTDCode').value)){
			document.getElementById('txtCorrContactNoSTDCode').style.color="#000000";
		}
	if(!isNaN(document.getElementById('txtCorrContactNo').value)){
			document.getElementById('txtCorrContactNo').style.color="#000000";
		}
		/*
		if(document.getElementById('appDoPassExp').value='//null'){
	document.getElementById('appDoPassExp').value='';
	}*/
	}	
		
document.getElementById('txtAppFirstName').removeAttribute("readOnly");
document.getElementById('txtAppLastName').removeAttribute("readOnly");
	
	if(document.getElementById('txtAdmisnGrade').value == ''){
		document.getElementById('txtAdmisnGrade').value = getDatafromXML('txtAdmisnGrade');
		document.getElementById('txtAdmisnGrade').onclick();
	}	
	if(document.getElementById('txtSecLang').value == ''){
		document.getElementById('txtSecLang').value = getDatafromXML('txtSecLang');
	}
	
}
function fnHideEmptyFields(){ 

	if(document.getElementById("txtCountry_div").innerHTML=='Other')
	{
	document.getElementById('txtCountry_tr').style.display='none';
	}
	
	if(document.getElementById("txtPerCountry_div").innerHTML=='Other')
	{
	document.getElementById('txtPerCountry_tr').style.display='none';
	}
	
	if(document.getElementById("txtLGCountry_div").innerHTML=='Other')
	{
	document.getElementById('txtLGCountry_tr').style.display='none';
	}
	
	if(document.getElementById("txtGCountry_div").innerHTML=='Other')
	{
	document.getElementById('txtGCountry_tr').style.display='none';
	}
	
	if(document.getElementById("appPhotoImgPath").getAttribute("src")==""){
		document.getElementById("appPhotoImgPath").src='images/onlineAppForm/nophoto.gif';
	}	
	if(document.getElementById('txtFName_tr').style.display == 'none' && document.getElementById('txtCountryOther_tr').style.display == 'none' 
	&& document.getElementById('txtFAddress1_tr').style.display == 'none' && document.getElementById('txtFState_tr').style.display == 'none'
	&& document.getElementById('txtFMobileNo_tr').style.display == 'none' && document.getElementById('txtFPincode_tr').style.display == 'none' 
	&& document.getElementById('txtFContactNoSTDCode_tr').style.display == 'none' 
	&& document.getElementById('txtFCity_tr').style.display == 'none'){
	   		document.getElementById('Father_det_div').style.display='none';
	   		document.getElementById('Father_det_table').style.display='none';
	   }
	   else{
	   		document.getElementById('Father_det_div').style.display='';
	   		document.getElementById('Father_det_table').style.display='';
	   }
	if(document.getElementById('txtMName_tr').style.display == 'none' && document.getElementById('txtMCountry_tr').style.display == 'none' 
	&& document.getElementById('txtMAddress1_tr').style.display == 'none' && document.getElementById('txtMState_tr').style.display == 'none'
	&& document.getElementById('txtMMobileNo_tr').style.display == 'none' && document.getElementById('txtMPincode_tr').style.display == 'none' 
	&& document.getElementById('txtMContactNoSTDCode_tr').style.display == 'none' 
	&& document.getElementById('txtMCity_tr').style.display == 'none'){
	   		document.getElementById('Mother_det_div').style.display='none';
	   		document.getElementById('Mother_det_table').style.display='none';
	   }
	   else{
	   		document.getElementById('Mother_det_div').style.display='';
	   		document.getElementById('Mother_det_table').style.display='';
	   } 
if(document.getElementById('txtFCompName_tr').style.display == 'none' && document.getElementById('txtState_tr').style.display == 'none' 
	&& document.getElementById('txtFDesigna_tr').style.display == 'none' && document.getElementById('txtFOffPincode_tr').style.display == 'none'
	&& document.getElementById('txtFCompAdd_tr').style.display == 'none' && document.getElementById('txtFOffEMail_tr').style.display == 'none' 
	&& document.getElementById('txtFCompCity_tr').style.display == 'none' 
	&& document.getElementById('txtCountry_tr').style.display == 'none'){
	   		document.getElementById('Father_comp_div').style.display='none';
	   		document.getElementById('Father_comp_table').style.display='none';
	   }
	   else{
	   		document.getElementById('Father_comp_div').style.display='';
	   		document.getElementById('Father_comp_table').style.display='';
	   } 	    
	 
	if(document.getElementById('txtMCompName_tr').style.display == 'none' && document.getElementById('txtPerState_tr').style.display == 'none' 
	&& document.getElementById('txtMDesigna_tr').style.display == 'none' && document.getElementById('txtMOffPincode_tr').style.display == 'none'
	&& document.getElementById('txtMCompAdd_tr').style.display == 'none' && document.getElementById('txtMOffEMail_tr').style.display == 'none' 
	&& document.getElementById('txtMCompCity_tr').style.display == 'none' 
	&& document.getElementById('txtPerCountry_tr').style.display == 'none'){
	   		document.getElementById('Mother_comp_div').style.display='none';
	   		document.getElementById('Mother_comp_table').style.display='none';
	   }
	   else{
	   		document.getElementById('Mother_comp_div').style.display='';
	   		document.getElementById('Mother_comp_table').style.display='';
	   }  
 
	if(document.getElementById('txtLocalGName_tr').style.display == 'none' && document.getElementById('txtLGState_tr').style.display == 'none' 
	&& document.getElementById('txtLGAddress1_tr').style.display == 'none' && document.getElementById('txtLGPincode_tr').style.display == 'none'
	&& document.getElementById('txtLGAddress2_tr').style.display == 'none' && document.getElementById('txtLGEMail_tr').style.display == 'none' 
	&& document.getElementById('txtLGCity_tr').style.display == 'none' 
	&& document.getElementById('txtLGCountry_tr').style.display == 'none'){
	   		document.getElementById('Guardian_det_div').style.display='none';
	   		document.getElementById('Guardian_det_table').style.display='none';
	   }
	   else{
	   		document.getElementById('Guardian_det_div').style.display='';
	   		document.getElementById('Guardian_det_table').style.display='';
	   }  	    
	if(document.getElementById('txtCorrAddress1_tr').style.display == 'none' && document.getElementById('txtCorrEMail_tr').style.display == 'none' 
	&& document.getElementById('txtCorrCity_tr').style.display == 'none' && document.getElementById('txtLocaCorrContactNo_tr').style.display == 'none'
	&& document.getElementById('txtGCountry_tr').style.display == 'none' && document.getElementById('txtCorrContactNoSTDCode_tr').style.display == 'none' 
	&& document.getElementById('txtGState_tr').style.display == 'none' 
	&& document.getElementById('txtCorrPincode_tr').style.display == 'none'){
	   		document.getElementById('presentAdd_div').style.display='none';
	   		document.getElementById('presentAdd_table').style.display='none';
	   }
	   else{
	   		document.getElementById('presentAdd_div').style.display='';
	   		document.getElementById('presentAdd_table').style.display='';
	   }
	if(document.getElementById('txtInstitute1_tr').style.display == 'none' && document.getElementById('txtGrade1_tr').style.display == 'none' 
	&& document.getElementById('txtLocation1_tr').style.display == 'none' && document.getElementById('txtCurriculm1_tr').style.display == 'none'
	&& document.getElementById('txtPassYear1_tr').style.display == 'none' && document.getElementById('txtPerc1_tr').style.display == 'none'){
	   		document.getElementById('Qual_Div').style.display='none';
	   		document.getElementById('Qual_table').style.display='none';
	   }
	   else{
	   		document.getElementById('Qual_Div').style.display='';
	   		document.getElementById('Qual_table').style.display='';
	   }
if(document.getElementById('txtLangFlue1_tr').style.display == 'none' && document.getElementById('txtOtherMother_tr').style.display == 'none' 
	&& document.getElementById('txtLangFlue2_tr').style.display == 'none' && document.getElementById('txtOthersSpeTong_tr').style.display == 'none' ){
	   		document.getElementById('Other_div').style.display='none';
	   		document.getElementById('Other_table').style.display='none';
	   }
	   else{
	   		document.getElementById('Other_div').style.display='';
	   		document.getElementById('Other_table').style.display='';
	   }
if(document.getElementById('txtPassNo_tr').style.display == 'none' && document.getElementById('appDoPassExp_tr').style.display == 'none' 
	&& document.getElementById('txtPlaceIssue_tr').style.display == 'none' ){
	   		document.getElementById('passport_div').style.display='none';
	   		document.getElementById('passport_table').style.display='none';
	   }
	   else{
	   		document.getElementById('passport_div').style.display='';
	   		document.getElementById('passport_table').style.display='';
	   }	
if(document.getElementById('adminFlag').value== 'Y'){
	   		document.getElementById('Parent_offline_sign').style.display='';
	   		document.getElementById('candidate_offline_sign').style.display='';
	   		document.getElementById('admin_show_date').style.display='';
	   		document.getElementById('enclo_div').style.display='';
	   		document.getElementById('enclo_table').style.display='';
	   }
	   else{
	   		document.getElementById('Parent_offline_sign').style.display='none';
	   		document.getElementById('candidate_offline_sign').style.display='none';
	   		document.getElementById('admin_show_date').style.display='none';
	   		document.getElementById('enclo_div').style.display='none';
	   		document.getElementById('enclo_table').style.display='none';
	   } 	    
	 	       		      	      		      	   
}

function showAdmissionGrade(){
	var selbox = document.getElementById('txtAdmisnGrade');
	selbox.options.length = 0;
	selbox.style.width=180;
					
	if(document.getElementById('txtSubStream').value == 'IB-PYP'){
		selbox.options[selbox.options.length] = new Option('---Select---','');
		selbox.options[selbox.options.length] = new Option('Nursery and Reception','Nursery and Reception');
		selbox.options[selbox.options.length] = new Option('PREP1','PREP1');
		selbox.options[selbox.options.length] = new Option('PREP2','PREP2');
		selbox.options[selbox.options.length] = new Option('Grade1','Grade1');
		selbox.options[selbox.options.length] = new Option('Grade2','Grade2');
		selbox.options[selbox.options.length] = new Option('Grade3','Grade3');
		selbox.options[selbox.options.length] = new Option('Grade4','Grade4');
		selbox.options[selbox.options.length] = new Option('Grade5','Grade5');
	}
	if(document.getElementById('txtSubStream').value == 'MSP'){
		selbox.options[selbox.options.length] = new Option('---Select---','');
		selbox.options[selbox.options.length] = new Option('Grade6','Grade6');
		selbox.options[selbox.options.length] = new Option('Grade7','Grade7');
		selbox.options[selbox.options.length] = new Option('Grade8','Grade8');
	}
	if(document.getElementById('txtSubStream').value == 'IGCSE'){
		selbox.options[selbox.options.length] = new Option('---Select---','');
		selbox.options[selbox.options.length] = new Option('Grade9','Grade9');
		selbox.options[selbox.options.length] = new Option('Grade10','Grade10');
	}
	if(document.getElementById('txtSubStream').value == 'IB-DP'){
		selbox.options[selbox.options.length] = new Option('---Select---','');
		selbox.options[selbox.options.length] = new Option('Grade11','Grade11');
		selbox.options[selbox.options.length] = new Option('Grade12','Grade12');
	}
}

function getDatafromXML(fieldName){
	var t = document.onlineAppForm.strDisplayProfile.value;
    if (t == null || t == "") {
        if (document.getElementById("strDisplayProfile") != null) {
            t = document.getElementById("strDisplayProfile").value
        }
    }	
	var displayProfile = replaceCData(t);
    var responseDoc = fnStringtoXML(displayProfile);
	var docs = responseDoc.getElementsByTagName("FIELD");
    var noOfDocuments = docs.length;
	if (noOfDocuments > 0) {
        for (count = 0; count < noOfDocuments; count++) {
			var dochtmlName = docs[count].getElementsByTagName("HTMLNAME");
			var htmlElement = dochtmlName[0].firstChild.nodeValue;
			if(htmlElement == fieldName){
				var dochtmlValue = docs[count].getElementsByTagName("VALUE");
				var value = dochtmlValue[0].firstChild.nodeValue;
				return value;
				break;
			}
		}
	}
}