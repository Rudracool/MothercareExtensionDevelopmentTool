define('overview_payment.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<div data-view=\"CreditCard.View\"></div>\r\n		<a class=\"overview-payment-card-button-edit\" href=\"/creditcards/"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"creditCardInternalid") || (depth0 != null ? compilerNameLookup(depth0,"creditCardInternalid") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"creditCardInternalid","hash":{},"data":data,"loc":{"start":{"line":9,"column":66},"end":{"line":9,"column":90}}}) : helper)))
    + "\" data-toggle=\"show-in-modal\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Edit",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":120},"end":{"line":9,"column":140}}}))
    + "</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "		<div class=\"overview-payment-card-content\">\r\n			<p>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"We have no default credit card on file for this account.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":78}}}))
    + "</p>\r\n		</div>	\r\n		<a href=\"/creditcards/new\" class=\"overview-payment-card-button-edit\" data-toggle=\"show-in-modal\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Add a Credit Card",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":99},"end":{"line":14,"column":132}}}))
    + "</a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<article class=\"overview-payment\">\r\n	<div class=\"overview-payment-header\">\r\n		<h4>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Payment",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":29}}}))
    + "</h4>\r\n	</div>\r\n	\r\n	<section class=\"overview-payment-card\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDefaultCreditCard") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":1},"end":{"line":15,"column":8}}})) != null ? stack1 : "")
    + "	</section>\r\n</article>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_payment'; return template;});