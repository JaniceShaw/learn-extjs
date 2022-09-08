Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: { items: [
        { name: 'Janice Shaw', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Will',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Diana',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Dave',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
