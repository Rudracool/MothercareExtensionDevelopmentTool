define('order_wizard_register_guest_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"order-wizard-register-guest-module-form-container collapse\" id=\"register-guest-show-view\">\r\n	<form>\r\n		<div data-view=\"RegisterGuestForm\"></div>\r\n 		<p>\r\n			<button type=\"submit\" class=\"order-wizard-register-guest-module-create-account-button\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":34}}}))
    + "\r\n			</button>\r\n		</p> \r\n	</form>\r\n</div>\r\n<p>\r\n	<button class=\"order-wizard-register-guest-module-button-toggle-create-account\" data-action=\"remove-button\" data-toggle=\"collapse\" data-target=\"#register-guest-show-view\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Create Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":32}}}))
    + "\r\n	</button>\r\n</p>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_register_guest_module'; return template;});