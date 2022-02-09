define('subscriptions_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<a href=\"/\" class=\"subscriptions-list-button-back\">\r\n		<i class=\"subscriptions-list-button-back-icon\"></i>\r\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":33}}}))
    + "\r\n	</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"subscriptions-list-paginator\">\r\n				<div data-view=\"GlobalViews.Pagination\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showCurrentPage") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":4},"end":{"line":45,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "					<div data-view=\"GlobalViews.ShowCurrentPage\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\r\n<section class=\"subscriptions-list\">\r\n	<header class=\"subscriptions-list-title\">\r\n		<h2>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":20}}}) : helper)))
    + "</h2>\r\n	</header>\r\n\r\n\r\n		<div class=\"subscriptions-list-results-container\">\r\n			<table class=\"subscriptions-list-results-table\">\r\n				<thead class=\"subscriptions-list-actionable-header\">\r\n					<tr>\r\n						<th class=\"subscriptions-list-title-header-details\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Details",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":13},"end":{"line":19,"column":36}}}))
    + "</span>\r\n						</th>\r\n						<th class=\"subscriptions-list-table-header-row-date\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Last Bill",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":13},"end":{"line":22,"column":38}}}))
    + "</span>\r\n						</th>\r\n						<th class=\"subscriptions-list-table-header-row-date\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Next Bill",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":13},"end":{"line":25,"column":38}}}))
    + "</span>\r\n						</th>\r\n						<th class=\"subscriptions-list-title-header-activation-date\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Activation Date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":13},"end":{"line":28,"column":44}}}))
    + "</span>\r\n						</th>\r\n						<th class=\"subscriptions-list-title-header-status\">\r\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":13},"end":{"line":31,"column":35}}}))
    + "</span>\r\n						</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody data-view=\"Records.Collection\" class=\"subscriptions-list-collection\"></tbody>\r\n			</table>\r\n\r\n		</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPagination") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":2},"end":{"line":47,"column":9}}})) != null ? stack1 : "")
    + "\r\n</section>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_list'; return template;});