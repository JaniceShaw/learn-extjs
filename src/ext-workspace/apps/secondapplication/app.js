/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SApp.Application',

    name: 'SApp',

    requires: [
        // This will automatically load all classes in the SApp namespace
        // so that application classes do not need to require each other.
        'SApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'SApp.view.main.Main'
});
