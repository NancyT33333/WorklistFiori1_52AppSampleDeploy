sap.ui.define([
		"teamidea/test/VSCodeDeplTest/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("teamidea.test.VSCodeDeplTest.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);