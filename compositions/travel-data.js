import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

var moduleName = 'app.travel-data';

angular
    .module(moduleName, [
        angularUIRouter
    ])
    .config(require('../components/travel-data/app-routes'));

export default moduleName;
