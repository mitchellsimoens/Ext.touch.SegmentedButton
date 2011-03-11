Ext.setup({
	onReady: function() {
		var p = new Ext.Panel({
			renderTo: Ext.getBody(),
			height: 200,
			width: 400,
			padding: 10,
			dockedItems : {
				xtype : "toolbar",
				dock : "top",
				title: "Segmented Button"
			},
			items      : [
				{
					xtype : "ext.touch.segmentedbutton",
					direction: "vertical",
					items : [
						{
							text: 'Option 1'
						},
						{
							text: 'Option 2'
						},
						{
							text: 'Option 3'
						}
					]
				}
			]
		});
	}
});