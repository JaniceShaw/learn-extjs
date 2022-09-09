// model / Coworker
Ext.define('PB.model.Coworker', {
    extend: 'PB.model.Base',

    fields: [
        { name: 'index', type: 'int' },
        { name: '_id', type: 'string' },

        { name: 'city', type: 'string' },
        { name: 'company', type: 'string' },
        { name: 'country', type: 'string' },
        { name: 'dob', type: 'date', separator: '.', dateFormat: 'dd.mm.yyyy' },
        { name: 'email', type: 'string' },
        { name: 'firstname', type: 'string' },
        { name: 'gender', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'street', type: 'string' },
    ]
});
