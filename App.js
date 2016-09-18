Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:[{xtype: 'rallyiterationcombobox'}, {xtype: 'rallyreleasecombobox'}],
    layout: 'hbox',
    launch: function() {
        //Write app code here
        //API Docs: https://help.rallydev.com/apps/2.1/doc/
    }
});
