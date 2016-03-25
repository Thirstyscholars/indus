
function showUploadField(name,id){
	
$('#image-container').hide();
   $('#pop_body .crop-table').each(function(){ 
     if(this.id==name+'_table')
       $(this).show();
     else
       $(this).hide();
   });

$('#tabs .tab-link').each(function(){
  $(this).removeClass('selected-tab');
});   
  
$('#'+name).addClass('selected-tab')
$('#tabActive').val(name.replace('_tab',''));
$('#tabActiveId').val(id);
}


function setScroll(){
		var menuWidth=0;
		var count=0;
		$('#tabs a').each(function(){
			menuWidth+=$(this).width()+parseInt($(this).css('margin-left'))+40;
			count++;
		});

		if(menuWidth>800){
			$('#tabs')
			.css({'white-space':'nowrap','width':'825px','overflow':'hidden'})
			.wrap('<div class="tabScroller" style="width:100%; overflow:hidden; position:relative;">');

			$('#tabs a').css({'float':'none','display':'inline-block'});

			var tabNavHTML='';
				tabNavHTML+='<div style="position:absolute; top:0; right:0; padding:10px; width:40px; border-left:1px solid #555; background:#fafafa; text-align:center;">';
				tabNavHTML+='<div class="tabPrev" style="cursor:pointer; width:20px; height:20px; float:left; background:url(/EForms/images/admin/arrow-left2.png) no-repeat "></div>';
				tabNavHTML+='<div class="tabNext" style="cursor:pointer; width:20px; height:20px; float:left; background:url(/EForms/images/admin/arrow-right2.png) no-repeat "></div>';
				tabNavHTML+='</div>'; 

			$('.tabScroller').append(tabNavHTML);

			var scrolled=0;
			$('.tabNext').on('click',function(){
				if(scrolled + 825 <menuWidth){
					scrolled+=200;
					$('#tabs').animate({scrollLeft: scrolled}, 300);
				}
				else{
					$('#tabs').animate({scrollLeft: menuWidth+'px'}, 300);
				}
				//console.log(scrolled);
			});
			$('.tabPrev').on('click',function(){
				if(scrolled>0){
					scrolled-=200;
					$('#tabs').animate({scrollLeft: scrolled}, 300);
				}
				//console.log(scrolled);
			});

			//console.log("UL WIDTH=>"+menuWidth);
			//console.log("COUNT=>"+count);
		}
		else $('#tabs')
			.css({'width':'100%'});

	}


function createData(http_request)
{
	if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null)
			{
				data=http_request.responseText;
			
  $("#pop_body").empty();
  $("#pop_body").append('<div class="tabs" id="tabs" ></div><input type="hidden" id="txtFilePathEdit" name="txtFilePathEdit"><input type="hidden" id="txtFileNameEdit" name="txtFileNameEdit">');
  jQuery('#search-beats-popup').css({'position':'fixed'});
			jQuery('#search-beats-popup, .shadow').fadeIn();
			popupAlign($('#search-beats-popup').height());
   //console.log("json::"+data);
   var firstChk='true';
   var tabActive='';
   var tabActiveId='';
   var parsedData=JSON.parse(data); 
   
   var txtFilePathArr=document.getElementById('txtFilePath').value.split("||");
   var txtFileNameArr=document.getElementById('txtFileName').value.split("||");

   var list='';
   for(var i=0;i<parsedData.msg.length;i++)
	{
     var mand="";
	 var crop="";
     var cropDiv="";
	 var validation=parsedData.msg[i].validation.split(',');
	 
	 if(validation.length>0)
		{
		 if(validation[0].toLowerCase()=='mandatory')
		 {
		    mand="<span class='red-text'> * </span>";
		    document.getElementById('imgMandChk').value=document.getElementById('imgMandChk').value+parsedData.msg[i].fieldName+"||";
		 }
		}

	 var previewLink='/EForms/'+parsedData.msg[i].displayImg;

	 var previewLinkDoc='';
	 var style='';
	 var style1='';
	
	 if(typeof parsedData.msg[i].path != 'undefined')
		{

          var txtFilePathEdit=document.getElementById('txtFilePathEdit').value;
		  txtFilePathEdit=txtFilePathEdit+parsedData.msg[i].path+"||";
		  var txtFileNameEdit=document.getElementById('txtFileNameEdit').value;
		  txtFileNameEdit=txtFileNameEdit+parsedData.msg[i].fieldName+"||";

          document.getElementById('txtFilePathEdit').value=txtFilePathEdit;
		  document.getElementById('txtFileNameEdit').value=txtFileNameEdit;

		  if(parsedData.msg[i].path != ''){
            if(parsedData.msg[i].fieldType.toLowerCase()=='image')
			{
               previewLink=parsedData.msg[i].path;
			   style='display:none';
			}else{
               previewLink='';
               previewLinkDoc="<div><a href='"+parsedData.msg[i].path+"' target='_blank'>Click here to download</a></div>";
			   style1="display:none";
			}
		    }
		}else{
               style="display:none";
		}
	 
	   
	 if(parsedData.msg[i].crop.toLowerCase()=='y' && parsedData.msg[i].fieldType.toLowerCase()=='image')
        var display="display:"
        if($('#entityId').val()=='')
		{ display='display:none';}

		if(style1=='')
		{display=display;}
		else{
        display=style1+' ;'+display
		}
		if(display==undefined){var display='display:none';}
		{crop="<div class='edit-appname-btn' id='"+parsedData.msg[i].fieldName+"_cropButt' style='"+display+"' style='cursor:pointer' ><a href='#'><b><font color='#fff'>Crop</font></b></a></div>";
		
		var list=list+parsedData.msg[i].fieldName+"_class|";

       }
    var displayChk="style='display:'";
	
    if(firstChk=='true')
		{
		$("#tabs").append("<a class='tab-link uploadTab selected-tab' href='#' id='"+parsedData.msg[i].fieldName+"_tab' onclick='showUploadField(this.id,"+parsedData.msg[i].id+")'>"+parsedData.msg[i].htmlName+"</a>");
		activeTab=parsedData.msg[i].fieldName;
		activeTabId=parsedData.msg[i].id;
		}
    else
		{
		$("#tabs").append("<a class='tab-link uploadTab' href='#' id='"+parsedData.msg[i].fieldName+"_tab' onclick='showUploadField(this.id,"+parsedData.msg[i].id+")'>"+parsedData.msg[i].htmlName+"</a>");
		displayChk="style='display:none'";
		}
		
		//console.log("<span id='"+parsedData.msg[i].fieldName+"_previewLink' style='"+style+"'/>"+previewLinkDoc+"</span>");
	$("#pop_body").append("<table cellpadding='0' cellspacing='0' class='crop-table' id='"+parsedData.msg[i].fieldName+"_tab_table' "+displayChk+"'><tr  height='80px'><td align='right' width='200' valign='bottom' style='padding-bottom : 10px'> "+mand+parsedData.msg[i].htmlName+" : </td><td align='left' valign='bottom' width='60%'><div class='uploadPanel'><span id='"+parsedData.msg[i].fieldName+"_loaderSpan' style='display:none'><img src='/EForms/images/onlineAppForm/crop/ajax-loader.gif' alt='uploading...'></span><span id='"+parsedData.msg[i].fieldName+"_uploadSpan'><table><tr><td><input type='file'  id='"+parsedData.msg[i].fieldName+"' name='"+parsedData.msg[i].fieldName+"' /></td><td><a class='upload-btn-up bold left fnt-11 progress-bar-trigger-btn' style='cursor:pointer' onClick='javascript:upload(\""+parsedData.msg[i].fieldName+"\",\""+parsedData.msg[i].validation+"\",\""+parsedData.msg[i].crop+"\",\""+parsedData.msg[i].fieldType+"\")'>Upload</a></td><td>"+crop+"</td></tr></table><div class='clear'></span> </div></div> </td><td rowspan='2'> <div id='preview-pane1'><div class='preview-container1'><span id='"+parsedData.msg[i].fieldName+"_previewLink' style='"+style+"'/>"+previewLinkDoc+"</span> 	<img width='120px' height='120px' src='"+previewLink+"' alt='Preview' id='"+parsedData.msg[i].fieldName+"_previewImg' style='"+style1+"'/></div></div></td></tr><tr><td>&nbsp;</td><td valign='top' style='padding-right:25px;'><span class='fnt-11 col-grey'>"+parsedData.msg[i].msg+"</span><div class='red-text' id='"+parsedData.msg[i].fieldName+"_error'></div><div class='green-text' id='"+parsedData.msg[i].fieldName+"_success'></div></td></tr><span><input type='hidden' id='crop"+parsedData.msg[i].id+"_x' class='x' value=''><input  type='hidden' id='crop"+parsedData.msg[i].id+"_y' class='y' value=''><input type='hidden' id='crop"+parsedData.msg[i].id+"_height' class='height' value=''><input type='hidden' id='crop"+parsedData.msg[i].id+"_width' class='width' value=''></span></table>");
 	firstChk='false';

	
 	for(var k=0;k<txtFileNameArr.length;k++)
 	{
 	    if(txtFileNameArr[k]==parsedData.msg[i].fieldName)
 	    {
 	         //console.log(txtFileNameArr[k]+"::file path::"+parsedData.msg[i].fieldName+":::"+txtFilePathArr[k]);
 	         var target=parsedData.msg[i].fieldName+'_target';
 	         var preview=parsedData.msg[i].fieldName+'_previewImg';
 	         var cropButt=parsedData.msg[i].fieldName+'_cropButt';
             var previewLink=parsedData.msg[i].fieldName+'_previewLink';
			 var field3=parsedData.msg[i].fieldName+'_previewLink';
			 var field2=parsedData.msg[i].fieldName+'_previewImg';
		 
		   if(parsedData.msg[i].fieldType.toLowerCase()=='image')
			{  
				 document.getElementById(preview).src=txtFilePathArr[k]+'?v='+Math.random();	  
			}
		   else{ 
				   var span = document.getElementById(field3);
                    document.getElementById(field2).style.display="none";
					    document.getElementById(field3).style.display="";
                   while( span.firstChild ) {
                      span.removeChild( span.firstChild );
                    }
					  var tempDiv = document.createElement('div');
					//  tempDiv.setAttribute('vertical-align', 'middle');
                      tempDiv.innerHTML = "<a href='"+txtFilePathArr[k]+"' target='_blank'>Click Here to Download</a>";
                      span.appendChild( tempDiv );
				}
 	        
 	         if(parsedData.msg[i].crop.toLowerCase()=='y')
 	         {
 	           // document.getElementById(target).src=txtFilePathArr[k];
 	            document.getElementById(cropButt).style.display='';
 	         }
 	    }
 	}
 	}
	

	cropDiv="<tr>  <td colspan='3'><div class='image-container' id='image-container' style='display:none' ><a href='#' onclick='closeCropper()' title='Close' class='image_crop_close' style='float:right;'></a><span class='boldText'>The preview below is not the actual size of your image and is used for cropping only.</span><span class='font12'>Click and drag on the image to make selection. Hold Shift for square</span><div class='photo_crop ><div class='photo_container'> <table><tr><td width='550px'> <div id='cropper'></div>  </td><td>  <span class='edit-appname-btn1' width='100%'><a href='#'><b><font color='#fff'>Submit</font></b></a></span></td></tr></table> </div></div></div></td></tr>";
	$('#pop_body').append(cropDiv);
	$('#pop_body').append("<input type='hidden' id='tabActive' name='tabActive' value='"+activeTab+"'><input type='hidden' id='tabActiveId' name='tabActiveId' value='"+activeTabId+"'>");
	if(list!=''){list=list.substring(0,list.length-1);}
	document.getElementById('cropList').value=list;
	$('.preview-container1 > div').remove();
	//console.log("this is it::"+list);
	setScroll();
}}}}


function fncrop(id,name)
{  
	var xval='crop'+id+'_x'; var yval='crop'+id+'_y'; var heightval='crop'+id+'_height'; var widthval='crop'+id+'_width';
	var path=document.getElementById('target').src;

   $('#'+name+'_previewImg').removeAttr('height');
   $('#'+name+'_previewImg').removeAttr('width');
   var h1=$('#'+name+'_previewImg').height();
   var w1=$('#'+name+'_previewImg').width();

	var h=$('#target').height();
	var w=$('#target').width();
    

$('#'+name+'_previewImg').attr('height','120px');
$('#'+name+'_previewImg').attr('width','120px');

	var heightRatio=h1/h;
	var widthRatio=w1/w;

   // console.log('heightRatio::'+heightRatio);
	// console.log('widthRatio::'+widthRatio);
	if(path.indexOf('?v=')>-1)
	{	path=path.substring(0,path.indexOf('?v='));  }
	var x=document.getElementById(xval).value;
	var y=document.getElementById(yval).value;
	var height=document.getElementById(heightval).value;
	var width=document.getElementById(widthval).value;
   // console.log(path+'::'+x+'::'+y+'::'+height+'::'+width);
	x=parseInt(x*widthRatio);
	y=parseInt(y*heightRatio);

	height=parseInt(height*heightRatio);
	width=parseInt(width*widthRatio);
	//path=path.replace('/EForms','//Online/EForms');
	//console.log(path+'::'+x+'::'+y+'::'+height+'::'+width);
	var param='path='+path+'&x='+x+'&y='+y+'&height='+height+'&width='+width+'&subAction=crop';
	$.post( "/EForms/ImageFileUpload", param)
     .done(function( data ) {
     if(data.msg.toLowerCase()=='success')
     { document.getElementById(name+'_previewImg').src=path+'?v='+data.ts;
       //document.getElementById(name+'_target').src=path+'?v='+data.ts;
         document.getElementById(name+'_success').innerHTML='Photo cropped successfully.';
	     document.getElementById(name+'_error').innerHTML="";
         document.getElementById(name+'_error').style.display='none';
       setFilePath(name,path);
      }else{
	     document.getElementById(name+'_success').innerHTML="";
         document.getElementById(name+'_success').style.display='none';
         document.getElementById(name+'_error').innerHTML='Error occured while cropping photo';
      }
	  
     document.getElementById('image-container').style.display='none';
	 
    });
}

/*$('body').on('click','.edit-appname-btn',function(){
	$(this).parents('.crop-table').find('.image-container').show();
});*/



function imagecropclose(id)
{  
	$("#crop"+id).hide(); 
}


function setpath(id)
{
	var field=id+'_txt';
document.getElementById(field).value=document.getElementById(id).value;
}

function upload(fieldname,validation,crop,fieldType)
{
/*try{
     if ($.browser.msie) {
    //before making an object of ActiveXObject,
    //please make sure ActiveX is enabled in your IE browser
    var objFSO = new ActiveXObject("Scripting.FileSystemObject"); 
	 }
	 }catch(e)
	{
		 alert('Please make sure ActiveX is enabled in your IE browser');
	 return false;
	 }*/
	if(document.getElementById(fieldname).value=='')
	{
       alert('Please upload file');
       return false;
	}
	
	//console.log(fieldname+":::"+validation);
	document.getElementById(fieldname+'_uploadSpan').style.display='none';
	document.getElementById(fieldname+'_loaderSpan').style.display='';
	document.getElementById(fieldname+'_success').innerHTML="";
	document.getElementById(fieldname+'_error').innerHTML="";
    var size="80";
    var validationArr=validation.split(",");
    if(validationArr.length>1)
	{ size=validationArr[1]; }
     //console.log(size)
   var resp=GetFileSize(fieldname,size);
   //console.log(resp);
   if(resp==true)
	{
      var field=fieldname+"_error";
      document.getElementById(field).innerHTML="";
      
	   var http_request=fnGetXMLHttpObject();
  
        var file = document.getElementById(fieldname);
        var entity_id=document.getElementById("entityId").value;
       
      if(typeof FormData == "undefined"){
       ajaxFileUpload(fieldname,validation,crop,fieldType);
      }else{
      /* Add the file */ 
	   var formData = new FormData();
      formData.append(fieldname , file.files[0]);
	   formData.append("validation" , validation);
	   formData.append("entity_id" , entity_id);   
	   formData.append("fileName" , fieldname);
	 var client = new XMLHttpRequest();
	 var pValidationServlet = ""; 
	 var chksum="";
			var imgChkSum=document.getElementById("imgChkSum").value;
			if(document.getElementById('checksum')!=null)
		    {
			   chksum="&checkSum="+document.getElementById('checksum').value;
			}
			pValidationServlet = "/EForms/ImageFileUpload?imgChkSum="+imgChkSum+"&fieldName="+fieldname+chksum; 
      client.open("post", pValidationServlet, true);
      client.onreadystatechange = function() { fnGetUploadRespRaw(client,fieldname,crop,fieldType); }; 	
      client.send(formData);  /* Send to server */ 
       }

	}
}


//This is a fall back method for IE, if formData is not supported, this method will be invoked and the file will be uploaded using iFrame
 function ajaxFileUpload(fieldname,validation,crop,fieldType)
    {
	   var imgChkSum=document.getElementById("imgChkSum").value;
	    var entId="";
                if(document.getElementById('entityId').value!='' )
                {
                   entId="&entity_id="+document.getElementById('entityId').value;
                }
				
       $.ajaxFileUpload
        (
            {
               
                url:pValidationServlet = "/EForms/ImageFileUpload?imgChkSum="+imgChkSum+"&fieldName="+fieldname+entId,
                secureuri:false,
                fileElementId:fieldname,
                dataType: 'json',
                success: function (data, status)
                {					
                    if(typeof(data.error) != 'undefined')
                    {
                        if(data.error != '')
                        {
                            alert(data.error);
                        }else
                        {
                            alert(data.path);
                        }
                    }
                },
                error: function (data, status, e)
                {
					
                   var rawResp=data.responseText;
				   if(rawResp.substring(0,5).toLowerCase()=='<pre>')
					{
                        rawResp=rawResp.substring(5,rawResp.length-6);
					}

					fnGetUploadResp(fieldname,crop,fieldType,rawResp)
                }
            }
        )
       
        return false;
       
   }  


function fnGetUploadRespRaw(client,fieldname,crop,fieldType){
if(client.readyState == 4){
		if (client.status == 200){
			if(client.responseText != null){
				fnGetUploadResp(fieldname,crop,fieldType,client.responseText);
				}
			}
		}
}

function fnGetUploadResp(fieldname,crop,fieldType,rawResp)
{
	            var obj=JSON.parse(rawResp);
				document.getElementById(fieldname+'_uploadSpan').style.display='';
	            document.getElementById(fieldname+'_loaderSpan').style.display='none';
				if(obj.validationFlag=='N')
				{
					field1=fieldname+'_error';
                   document.getElementById(field1).innerHTML=obj.msg;
				}else
				{
                     var field1=fieldname+'_success';
					 var field2=fieldname+'_previewImg';
					 var field3=fieldname+'_previewLink'
				   document.getElementById(field1).innerHTML="File uploaded successfully";
				   if(fieldType.toLowerCase()=='image')
					{  
					   document.getElementById(field2).style.display="";
					    document.getElementById(field3).style.display="none";
					   document.getElementById(field2).src=obj.path;  }
				   else{ 
				   var span = document.getElementById(field3);
                    document.getElementById(field2).style.display="none";
					    document.getElementById(field3).style.display="";
                   while( span.firstChild ) {
                      span.removeChild( span.firstChild );
                    }
					  var tempDiv = document.createElement('div');
					//  tempDiv.setAttribute('vertical-align', 'middle');
                      tempDiv.innerHTML = "<a href='"+obj.path+"' target='_blank'>Click Here to Download</a>";
                      span.appendChild( tempDiv );
				   }
				   setFilePath(fieldname,obj.path);
				   var mandChk=document.getElementById('imgMandChk').value;
				   var mandChkArr=mandChk.split("||");
				   var newMandArr="";
				   for(var i=0;i<mandChkArr.length;i++)
				   {
				      if(mandChkArr[i]!='')
				      {
				         if(mandChkArr[i]==fieldname)
				         {  mandChkArr[i]=''; }
				         newMandArr=newMandArr+mandChkArr[i]+"||";
				      }
				   }
                   document.getElementById('imgMandChk').value=newMandArr;
                   var chk=false;
                   var mandArr=newMandArr.split("||");
                   for(var i=0;i<mandArr.length;i++)
                   {
                     if(mandArr[i]!=''){ chk= false;}
                   }
                    if(chk==true)
                   {documenet.getElementById('txtPhotopath_hidden').value='Y';}
                   
				  }
				if(crop.toLowerCase()=='y' && fieldType.toLowerCase()=='image')
				{
					var field3=fieldname+'_cropButt';
					//var field4=fieldname+'_target';
					document.getElementById(field3).style.display="";
					//document.getElementById(field4).src=obj.path;
				}
}


function popupAlign(height)
		{
			var win_width = $(window).width();
			var win_height = $(window).height();
			var pop_width = $('.popup').width();
			//var pop_height = $('.popup').height();
			var pop_top = (win_height - height) / 2 ;
			var pop_left = (win_width - pop_width) / 2 ;
			pop_top=20;
			$('.popup').css({'top':pop_top+'px','left':pop_left+'px'});			
		}


function GetFileSize(fileid,size) {
    try {
    var fileSize = 0;
    //for IE
    if ($.browser.msie) {
    //before making an object of ActiveXObject,
    //please make sure ActiveX is enabled in your IE browser
    var objFSO = new ActiveXObject("Scripting.FileSystemObject"); 
    var filePath = $("#" + fileid)[0].value;
    var objFile = objFSO.getFile(filePath);
    var fileSize = objFile.size; //size in kb
    fileSize = fileSize / 1048576; //size in mb
    }
    //for FF, Safari, Opeara and Others
    else {
    fileSize = $("#" + fileid)[0].files[0].size //size in kb
    //fileSize = fileSize / 1048576; //size in mb
    }
	//console.log(fileSize+"::"+size*1024);
	if(parseInt(fileSize)>parseInt(size)*parseInt(1024))
	{
		var field=fileid+'_error';
		//console.log(field);
	document.getElementById(field).innerHTML="File size larger than the specified limit";
	document.getElementById(fileid+'_uploadSpan').style.display='';
	document.getElementById(fileid+'_loaderSpan').style.display='none';
	return false;
	}else
		{
          return true;
		}
    }
    catch (e) {
    return true;
    }
    }


	function fnGetXMLHttpObject(){
	var http_req = null;	   
	if (window.XMLHttpRequest){ // Mozilla, Safari,...
		http_req = new XMLHttpRequest();
		
		if (http_req.overrideMimeType)
		{
			http_req.overrideMimeType('text/xml');
		}
		return http_req;
	}else if (window.ActiveXObject){ // IE		           
		try {
			http_req = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try {
				http_req = new ActiveXObject("Microsoft.XMLHTTP");
			} 
			catch(e){}
		}
		return http_req;
	}
	}

	function  openImagePopUp(formId){
    openImagePopUpWithIdentifier(formId,"");
	
}

function  openImagePopUpWithIdentifier(formId,popupFieldIdentifier){
	var txtFileName=document.getElementById('txtFileName').value;
	var txtFilePath=document.getElementById('txtFilePath').value;
	
	
	var orgId=document.getElementById('orgId').value;
	var entityId ="";
    if(document.onlineAppForm.entityId != null){
    	entityId = document.onlineAppForm.entityId.value;
    	
    } else {
    	entityId = document.onlineAppForm.entity_Id.value;
    }
	var http_request=fnGetXMLHttpObject();
	
	var formElements='';
	 if($('#entityId').val()!='')
	   {
	     $( ":input" ).each(function() {
	     if($( this ).attr('id')!='strDisplayProfile')
         {
	     if(formElements=='')
	     {  formElements=$( this ).attr('id')+"="+$( this ).val();}
	     else
         {  formElements=formElements+"&"+$( this ).attr('id')+"="+$( this ).val();  }
         }
         });
       }

	var parameters = "subAction=Display&entityId="+entityId+"&formId="+formId+"&txtFileName="+txtFileName+"&popupFieldIdentifier="+popupFieldIdentifier+"&txtFilePath="+txtFilePath+"&orgId="+orgId+"&"+formElements;
	if(http_request!=null){
		var pValidationServlet = "/EForms/ImageFileUpload"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { createData(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send(parameters);
	}
}

function setFilePath(fileName,filePath)
{
       var txtFileName=document.getElementById('txtFileName').value;
	  var txtFilePath=document.getElementById('txtFilePath').value;
	  
	  var fileNameArr=txtFileName.split("||");
	  var filePathArr=txtFilePath.split("||");
	  var present='false';
	  var newTxtFileName="";
	  var newTxtFilePath="";
	   for(var i=0;i<fileNameArr.length;i++)
	   {
       
       if(fileNameArr[i]!=''){
	       if(fileNameArr[i]==(fileName))
	       {
	          present='true';
	          fileNameArr[i]=fileName;
	          filePathArr[i]=filePath;
	       }
        newTxtFileName=newTxtFileName+fileNameArr[i]+"||";
	          newTxtFilePath=newTxtFilePath+filePathArr[i]+"||";
       }
	   }
	   if(present=='true')
	   {
	      txtFileName=newTxtFileName.substring(0,newTxtFileName.length-2);
	      txtFilePath=newTxtFilePath.substring(0,newTxtFilePath.length-2);
	   
	   }else{
          if(txtFileName=='' || txtFileName.substring(txtFileName.length-2,txtFileName.length)=='||')
	      {
          txtFileName=txtFileName+fileName;
	      }else{
	         txtFileName=txtFileName+"||"+fileName;
	      }
	   
	   
	      if(txtFilePath=='' || txtFilePath.substring(txtFilePath.length-2,txtFilePath.length)=='||')
	       {
	       txtFilePath=txtFilePath+filePath;
	        }else{
              txtFilePath=txtFilePath+"||"+filePath;
            }
	   
	   }
	   
	   document.getElementById('txtFileName').value=txtFileName;
	   document.getElementById('txtFilePath').value=txtFilePath;
}

function fnChkMandatory(){

var chk=true;
var mandValue=document.getElementById('imgMandChk').value;
var mandArr1=mandValue.split("||");
var fileNameArr=document.getElementById('txtFileName').value.split("||");
var mandArrString="";
for(var i=0;i<mandArr1.length;i++)
	{
	var dup='false';
     for(var j=0;j<fileNameArr.length;j++)
		{
          if(fileNameArr[j]==mandArr1[i])
			{dup='true';}
		}
     if(dup=='false') 
		{   mandArrString=mandArrString+mandArr1[i]+"||";  }
	}
mandArr=mandArrString.split('||');
if(document.getElementById('txtPhotopath_hidden').value!='Y')
{
for(var i=0;i<mandArr.length;i++)
{
   if(mandArr[i]!=''){ 
	    chk= false;
	var txtFileNameEdit=document.getElementById('txtFileNameEdit').value.split('||');
	var txtFilePathEdit=document.getElementById('txtFilePathEdit').value.split('||');
	for(var j=0;j<txtFileNameEdit.length;j++)
	   {
		   
	       if(txtFileNameEdit[j]==mandArr[i])
		   { 
			   if(txtFilePathEdit[j]!='')
			   {  chk=true; break;  }
		   }
	   }
	  
  }
}
}
if(chk==true)
{document.getElementById('txtPhotopath_hidden').value='Y';}
return chk;
}	

function closeCropper(){
$('#image-container').hide();
}