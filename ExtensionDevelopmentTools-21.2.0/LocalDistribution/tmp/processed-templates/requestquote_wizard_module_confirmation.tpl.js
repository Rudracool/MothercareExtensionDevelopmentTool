define('requestquote_wizard_module_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"For immediate assistance call us at <strong>$(0)</strong> or email us at <a href=\"mailto:$(1)\">$(1)</a>",(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":3},"end":{"line":11,"column":150}}}))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimer","hash":{},"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":13,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"requestquote-wizard-module-confirmation\">\r\n	<h2 class=\"requestquote-wizard-module-confirmation-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Thank you!",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":2,"column":59},"end":{"line":2,"column":85}}}))
    + "</h2>\r\n	<p class=\"requestquote-wizard-module-confirmation-body\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Your Quote Request <a href=\"/quotes/$(0)\">#$(1)</a> was successfully placed.",(depth0 != null ? compilerNameLookup(depth0,"quoteId") : depth0),(depth0 != null ? compilerNameLookup(depth0,"quoteTranId") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":114}}}))
    + "\r\n	</p>\r\n	<p class=\"requestquote-wizard-module-confirmation-body\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"contactBusinessDaysMessage") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":7,"column":42}}}))
    + "\r\n	</p>\r\n	<p class=\"requestquote-wizard-module-confirmation-body\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "	</p>\r\n	<a class=\"requestquote-wizard-module-confirmation-new-quote\" href=\"/request-a-quote\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Request a new Quote",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":86},"end":{"line":16,"column":121}}}))
    + "</a>\r\n	<a class=\"requestquote-wizard-module-confirmation-continue\" href=\"/quotes\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"See Your Quotes",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":76},"end":{"line":17,"column":107}}}))
    + "</a>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'requestquote_wizard_module_confirmation'; return template;});