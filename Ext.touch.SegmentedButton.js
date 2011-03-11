Ext.ns("Ext.touch");
Ext.touch.SegmentedButton = Ext.extend(Ext.SegmentedButton, {
	direction : "horizontal",

	componentClsVert: "x-segmentedbutton-v",

	initComponent : function() {
		var me = this;

		if (me.direction === "vertical") {
			Ext.apply(me, {
				componentCls : me.componentClsVert || "x-segmentedbutton-v",
				layout       : {
					type  : "vbox",
					align : "stretch"
				}
			});

			var i = 0,
				items = me.items,
				ln = items.length,
				item;

			for (; i < ln; i++) {
				item = items[i];
				item.flex = item.flex || 1;
			}
		}

		Ext.touch.SegmentedButton.superclass.initComponent.call(me);
	}
});

Ext.reg("ext.touch.segmentedbutton", Ext.touch.SegmentedButton);