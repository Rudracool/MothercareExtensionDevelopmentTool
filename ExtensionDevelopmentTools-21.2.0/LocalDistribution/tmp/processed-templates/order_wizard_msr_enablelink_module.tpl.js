define('order_wizard_msr_enablelink_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "multishipto";
},"3":function(container,depth0,helpers,partials,data) {
    return "singleshipto";
},"5":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"I want to ship to a single address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":4,"column":53}}}))
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"I want to ship to multiple addresses",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":6,"column":55}}}))
    + "\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"PromocodesRemovedWarning\"></div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "		<i class=\"order-wizard-msr-enablelink-module-link-icon\" data-toggle=\"tooltip\" title=\"\" data-original-title=\""
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Click here if you want to divide your order and ship it to multiple addresses. All your data will be saved.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":110},"end":{"line":13,"column":233}}}))
    + "\" ></i>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"order-wizard-msr-enablelink-module\">\r\n	<a class=\"order-wizard-msr-enablelink-module-link\" href=\"#\" data-action=\"change-status-multishipto\" data-type=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMultiShipToEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":112},"end":{"line":2,"column":178}}})) != null ? stack1 : "")
    + "\" >\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMultiShipToEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":7,"column":9}}})) != null ? stack1 : "")
    + "	</a>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPromocodesRemovedWarning") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":11,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMultiShipToEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":1},"end":{"line":14,"column":12}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_msr_enablelink_module'; return template;});