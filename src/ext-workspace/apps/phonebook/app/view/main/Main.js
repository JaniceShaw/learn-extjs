/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('PB.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    viewModel:{type: 'main'},

    title: 'title: Coworkers',

    layout: 'fit',
    items: [
       {
        xtype:'main-list'
       },
       {
        xtype: 'formpanel',

        items: [{
            xtype: 'textfield',
            name: 'name',
            label: 'Name',
            bind: {value: '{selectedCoworker.name}'}
        }, {
            xtype: 'emailfield',
            name: 'email',
            label: 'Email',
            bind: {value: '{selectedCoworker.email}'}
        }, {
            xtype: 'textfield',
            name: 'phone',
            label: 'Phone Number',
            bind: {value: '{selectedCoworker.phone}'}
        }]
       }
       
    ]
});
