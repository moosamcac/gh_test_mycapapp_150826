sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"boscj/project1/test/integration/pages/PurchaseOrderSetList.gen",
	"boscj/project1/test/integration/pages/PurchaseOrderSetObjectPage.gen",
	"boscj/project1/test/integration/pages/PurchaseItemSetObjectPage.gen"
], function (JourneyRunner, PurchaseOrderSetListGenerated, PurchaseOrderSetObjectPageGenerated, PurchaseItemSetObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('boscj/project1') + '/test/flp.html#app-preview',
        pages: {
			onThePurchaseOrderSetListGenerated: PurchaseOrderSetListGenerated,
			onThePurchaseOrderSetObjectPageGenerated: PurchaseOrderSetObjectPageGenerated,
			onThePurchaseItemSetObjectPageGenerated: PurchaseItemSetObjectPageGenerated
        },
        async: true
    });

    return runner;
});

