Ext.define('PB.view.main.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-list',

    // data: {
    //     selectedCoworker: null

   // },

    stores: {
        coworkers: {
            type: 'coworkers',
        }
    }

    // formulars:{

    // }


})