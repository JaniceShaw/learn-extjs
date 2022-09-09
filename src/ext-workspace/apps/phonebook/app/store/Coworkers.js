// store / Coworkers
Ext.define('PB.store.Coworkers', {
    extend: 'Ext.data.Store',
    alias: 'store.coworkers',

    // created model : model/Coworker.js
    model: 'PB.model.Coworker',
    autoLoad: true,

    sorters: {
        property: 'firstname',
        direction: 'DESC'
    },
        
    
    filters: [{
        property: 'firstname',
        value: 'al',
        operator: 'like'
    }],

    proxy: {
        type: 'ajax',
        url: './simlet/coworker/get',
        reader: {
            type: 'json',
        }
    }
});
