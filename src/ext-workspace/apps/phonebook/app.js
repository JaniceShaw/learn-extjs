/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'PB.Application',

    name: 'PB',

    requires: [
        // This will automatically load all classes in the PB namespace
        // so that application classes do not need to require each other.
        'PB.*'
    ],

    // The name of the initial view to create.
    mainView: 'PB.view.main.Main',


    //other available here
    //as soon as definitions are set
    launch: function(){
        console.log('hello from launch');
       // debugger;
    },

   // before main view is launched
    // onBeforeLaunch: function(){
    //     debugger;
    //     this.callParent(arguments);
    // }
});
