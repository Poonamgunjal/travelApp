import homeTemplate from './index.html';
import stepOneTemplate from './step-one.html';
import stepTwoTemplate from './step-two.html';
import stepThreeTemplate from './step-three.html';
import appController from './app-controller.js';

require('./index.scss');
export default function appRoutes($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider.when('/', '/travel');
    $urlRouterProvider.otherwise('/travel/stepOne');

    $stateProvider
        .state('app', {
            abstract  : true,
            url       : '',
            template  : '<ui-view></ui-view>',
            controller: appController
        })
        .state('app.travel-data', {
            url     : '/travel',
            template: homeTemplate,
            controller: appController
        })
       .state('app.travel-data.step-one', {
        url     : '/stepOne',
        template: stepOneTemplate
    })
        .state('app.travel-data.step-two', {
        url     : '/stepTwo',
        template: stepTwoTemplate
    }) 
        .state('app.travel-data.step-three', {
        url     : '/stepThree',
        template: stepThreeTemplate
    });/**/

}