define('subscriptions_addon_review.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "                <p class=\"subscriptions-addon-review-summary-message-info\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Costs will be prorated to the current subscription billing period",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":75},"end":{"line":27,"column":156}}}))
    + "</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"subscriptions-addon-review\">\r\n    <h2 class=\"subscriptions-addon-review-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":2,"column":49},"end":{"line":2,"column":61}}}) : helper)))
    + "</h2>\r\n    <div class=\"subscriptions-addon-review-container\">\r\n        <div class=\"subscriptions-addon-review-left\">\r\n            <div class=\"subscriptions-addon-review-review\">\r\n                <section class=\"subscriptions-addon-review-review\">\r\n                    <div class=\"subscriptions-addon-review-review-image\">\r\n                        <img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"itemImage") : depth0),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":8,"column":34},"end":{"line":8,"column":71}}}))
    + "\" />\r\n                    </div>\r\n                    <div class=\"subscriptions-addon-review-review-data\">\r\n                        <h4>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":11,"column":28},"end":{"line":11,"column":40}}}) : helper)))
    + "</h4>\r\n                        <p>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemPrice") || (depth0 != null ? compilerNameLookup(depth0,"itemPrice") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemPrice","hash":{},"data":data,"loc":{"start":{"line":12,"column":27},"end":{"line":12,"column":40}}}) : helper)))
    + "</p>\r\n                        <p>"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":27},"end":{"line":13,"column":51}}}))
    + ": "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemQuantity") || (depth0 != null ? compilerNameLookup(depth0,"itemQuantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemQuantity","hash":{},"data":data,"loc":{"start":{"line":13,"column":53},"end":{"line":13,"column":69}}}) : helper)))
    + "</p>\r\n                        <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemDescription") || (depth0 != null ? compilerNameLookup(depth0,"itemDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemDescription","hash":{},"data":data,"loc":{"start":{"line":14,"column":27},"end":{"line":14,"column":48}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </div>\r\n        <div class=\"subscriptions-addon-review-right\">\r\n            <div class=\"subscriptions-addon-review-summary\" data-view=\"Summary.View\"></div>\r\n            <div class=\"subscriptions-addon-review-row-fluid\">\r\n                <button class=\"subscriptions-addon-review-button-continue\" data-action=\"submit\">\r\n                    "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Place Order",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":23,"column":47}}}))
    + "\r\n                </button>\r\n            </div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInfoMessage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":28,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/Mothrecare/MotherCareTheme/3.0.2/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'subscriptions_addon_review'; return template;});