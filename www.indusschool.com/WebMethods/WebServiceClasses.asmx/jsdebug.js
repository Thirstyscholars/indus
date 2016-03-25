Type.registerNamespace('Rsolutions.WebService');
Rsolutions.WebService.WebScriptMethods=function() {
Rsolutions.WebService.WebScriptMethods.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
Rsolutions.WebService.WebScriptMethods.prototype={
GetAluminiMessages:function(Parameters,succeededCallback, failedCallback, userContext) {
return this._invoke(Rsolutions.WebService.WebScriptMethods.get_path(), 'GetAluminiMessages',false,{Parameters:Parameters},succeededCallback,failedCallback,userContext); },
GetAluminiMasterMessages:function(Parameters,succeededCallback, failedCallback, userContext) {
return this._invoke(Rsolutions.WebService.WebScriptMethods.get_path(), 'GetAluminiMasterMessages',false,{Parameters:Parameters},succeededCallback,failedCallback,userContext); },
GetMessages:function(Parameters,succeededCallback, failedCallback, userContext) {
return this._invoke(Rsolutions.WebService.WebScriptMethods.get_path(), 'GetMessages',false,{Parameters:Parameters},succeededCallback,failedCallback,userContext); },
GetCompletionList:function(prefixText,count,contextKey,succeededCallback, failedCallback, userContext) {
return this._invoke(Rsolutions.WebService.WebScriptMethods.get_path(), 'GetCompletionList',false,{prefixText:prefixText,count:count,contextKey:contextKey},succeededCallback,failedCallback,userContext); }}
Rsolutions.WebService.WebScriptMethods.registerClass('Rsolutions.WebService.WebScriptMethods',Sys.Net.WebServiceProxy);
Rsolutions.WebService.WebScriptMethods._staticInstance = new Rsolutions.WebService.WebScriptMethods();
Rsolutions.WebService.WebScriptMethods.set_path = function(value) { 
var e = Function._validateParams(arguments, [{name: 'path', type: String}]); if (e) throw e; Rsolutions.WebService.WebScriptMethods._staticInstance._path = value; }
Rsolutions.WebService.WebScriptMethods.get_path = function() { return Rsolutions.WebService.WebScriptMethods._staticInstance._path; }
Rsolutions.WebService.WebScriptMethods.set_timeout = function(value) { var e = Function._validateParams(arguments, [{name: 'timeout', type: Number}]); if (e) throw e; if (value < 0) { throw Error.argumentOutOfRange('value', value, Sys.Res.invalidTimeout); }
Rsolutions.WebService.WebScriptMethods._staticInstance._timeout = value; }
Rsolutions.WebService.WebScriptMethods.get_timeout = function() { 
return Rsolutions.WebService.WebScriptMethods._staticInstance._timeout; }
Rsolutions.WebService.WebScriptMethods.set_defaultUserContext = function(value) { 
Rsolutions.WebService.WebScriptMethods._staticInstance._userContext = value; }
Rsolutions.WebService.WebScriptMethods.get_defaultUserContext = function() { 
return Rsolutions.WebService.WebScriptMethods._staticInstance._userContext; }
Rsolutions.WebService.WebScriptMethods.set_defaultSucceededCallback = function(value) { 
var e = Function._validateParams(arguments, [{name: 'defaultSucceededCallback', type: Function}]); if (e) throw e; Rsolutions.WebService.WebScriptMethods._staticInstance._succeeded = value; }
Rsolutions.WebService.WebScriptMethods.get_defaultSucceededCallback = function() { 
return Rsolutions.WebService.WebScriptMethods._staticInstance._succeeded; }
Rsolutions.WebService.WebScriptMethods.set_defaultFailedCallback = function(value) { 
var e = Function._validateParams(arguments, [{name: 'defaultFailedCallback', type: Function}]); if (e) throw e; Rsolutions.WebService.WebScriptMethods._staticInstance._failed = value; }
Rsolutions.WebService.WebScriptMethods.get_defaultFailedCallback = function() { 
return Rsolutions.WebService.WebScriptMethods._staticInstance._failed; }
Rsolutions.WebService.WebScriptMethods.set_path("/WebMethods/WebServiceClasses.asmx");
Rsolutions.WebService.WebScriptMethods.GetAluminiMessages= function(Parameters,onSuccess,onFailed,userContext) {Rsolutions.WebService.WebScriptMethods._staticInstance.GetAluminiMessages(Parameters,onSuccess,onFailed,userContext); }
Rsolutions.WebService.WebScriptMethods.GetAluminiMasterMessages= function(Parameters,onSuccess,onFailed,userContext) {Rsolutions.WebService.WebScriptMethods._staticInstance.GetAluminiMasterMessages(Parameters,onSuccess,onFailed,userContext); }
Rsolutions.WebService.WebScriptMethods.GetMessages= function(Parameters,onSuccess,onFailed,userContext) {Rsolutions.WebService.WebScriptMethods._staticInstance.GetMessages(Parameters,onSuccess,onFailed,userContext); }
Rsolutions.WebService.WebScriptMethods.GetCompletionList= function(prefixText,count,contextKey,onSuccess,onFailed,userContext) {Rsolutions.WebService.WebScriptMethods._staticInstance.GetCompletionList(prefixText,count,contextKey,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
if (typeof(Rsolutions.WebService.MessageDetails) === 'undefined') {
Rsolutions.WebService.MessageDetails=gtc("Rsolutions.WebService.MessageDetails");
Rsolutions.WebService.MessageDetails.registerClass('Rsolutions.WebService.MessageDetails');
}
