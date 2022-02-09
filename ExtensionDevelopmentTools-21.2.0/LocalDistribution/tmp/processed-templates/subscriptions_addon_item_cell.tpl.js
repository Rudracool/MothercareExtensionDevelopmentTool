define('subscriptions_addon_item_cell.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subscriptions-addon-item-cell-view-span3\" data-type=\"item\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineNumber") || (depth0 != null ? compilerNameLookup(depth0,"lineNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineNumber","hash":{},"data":data,"loc":{"start":{"line":1,"column":80},"end":{"line":1,"column":94}}}) : helper)))
    + "\">\r\n	<meta itemprop=\"url\" content=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemurl") || (depth0 != null ? compilerNameLookup(depth0,"itemurl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemurl","hash":{},"data":data,"loc":{"start":{"line":2,"column":31},"end":{"line":2,"column":42}}}) : helper)))
    + "\"/>\r\n\r\n	<div class=\"subscriptions-addon-item-cell-grid-image-wrapper\">\r\n		<a class=\"subscriptions-addon-item-cell-grid-link-image\" data-action=\"add\">\r\n			<img class=\"subscriptions-addon-item-cell-grid-image\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"image") || (depth0 != null ? compilerNameLookup(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":6,"column":62},"end":{"line":6,"column":71}}}) : helper)))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\" itemprop=\"image\"/>\r\n		</a>\r\n	</div>\r\n\r\n	<div class=\"subscriptions-addon-item-cell-grid-details\">\r\n		<div class=\"subscriptions-addon-item-cell-grid-title\">\r\n            <a class=\"subscriptions-addon-item-cell-grid-title-link\" href=\"\" data-action=\"add\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"lineNumber") || (depth0 != null ? compilerNameLookup(depth0,"lineNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lineNumber","hash":{},"data":data,"loc":{"start":{"line":12,"column":104},"end":{"line":12,"column":118}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":120},"end":{"line":12,"column":129}}}) : helper)))
    + "</a>\r\n		</div>\r\n\r\n		<div class=\"subscriptions-addon-item-cell-grid-price\">\r\n            "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"price") || (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":21}}}) : helper)))
    + "\r\n		</div>\r\n		<div class=\"subscriptions-addon-item-cell-grid-description\">\r\n			"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":19,"column":3},"end":{"line":19,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_item_cell'; return template;});