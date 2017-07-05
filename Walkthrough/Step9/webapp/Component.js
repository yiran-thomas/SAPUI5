sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel) {
   "use strict";

   return UIComponent.extend("sap.ui.demo.wt.Component",{
   	 metadata: {
       rootView: "sap.ui.demo.wt.view.App"
   	 },
   	 init: function(){
   	 	//call the init function of the parent
   	 	UIComponent.prototype.init.apply(this,arguments);
   	 	//set data model on view
        var oData = {
          recipient:{
            name:"World"
          }
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);
        //set i18n model on view
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.wt.i18n.i18n"
        });
        this.setModel(i18nModel, "i18n");
   	 }
   });
});
