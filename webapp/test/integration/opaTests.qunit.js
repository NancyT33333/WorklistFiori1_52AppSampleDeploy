/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"teamidea/test/VSCodeDeplTest/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});