Ext.define('PB.view.main.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-list',
    
    onListItemClick: function(list, location){
        const record = location.record;

        viewModel = this.getViewModel();
        viewModel.set('selectedCoworker', record);

        console.log('tapped me', record.get('name'));
    }
});
