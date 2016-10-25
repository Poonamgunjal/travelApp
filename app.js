import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import angularUIRouter from 'angular-ui-router';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularUISelect from 'ui-select';
import travelApp from './compositions/travel-data';


export default angular
    .module('app', [
        ngSanitize,
        angularUIRouter,
        angularUIBootstrap,
        angularUISelect,
        travelApp
    ]).run(function () {
        'ngInject';
    });
