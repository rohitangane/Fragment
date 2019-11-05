sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Fragment.Fragment.controller.Fragment", {
		onValueHelp: function (oEvent) {
         var oDialog = new sap.ui.xmlfragment("Fragment.Fragment.Fragment.SelectDialog",this);
		this.getView().addDependent(oDialog);
		oDialog.bindAggregation("items",{
			path:"language>/Language",
			template:new sap.m.StandardListItem({
			title : "{language>language}"	
			})
		});
		oDialog.open();	
		},

		onValueHelpOkPress: function (oEvent) {

var Otitle = oEvent.getParameter("selectedItem").getTitle();

		this._oInput = this.getView().byId("language");
	     this._oInput.setValue(Otitle);
		}
	});
});