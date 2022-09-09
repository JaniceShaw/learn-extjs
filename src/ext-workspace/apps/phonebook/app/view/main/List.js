/**
 * This view is an example list of people.
 */
Ext.define('PB.view.main.List', {
    extend: 'Ext.dataview.List',
    xtype: 'main-list',

    viewModel: { type: 'main-list' }, 
    controller: 'main-list', // ListController.js

    itemTpl: '<div class="coworker">{firstname} <strong>{name}</strong></div>',

    // todo set the width
    //width: 150,

    // store added : store/Coworkers.js
    bind: { store: '{coworkers}' },
    listeners: {
        childtap: 'onListItemClick' // looks in the controller
        // childtap: function (list, location) {
        //     // debugger
        //     console.log('tapped me', location.record.getData());
        // }
    }

});
