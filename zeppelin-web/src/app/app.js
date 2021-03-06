/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

angular.module('zeppelinWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'angular-websocket',
    'ui.ace',
    'ui.bootstrap',
    'ui.sortable',
    'ngTouch',
    'ngDragDrop',
    'angular.filter',
    'monospaced.elastic',
    'puElasticInput',
    'xeditable',
    'ngToast'
  ])
  .filter('breakFilter', function() {
    return function (text) {
      if (!!text) {
        return text.replace(/\n/g, '<br />');
      }
    };
  })
  .config(function ($routeProvider, ngToastProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })
      .when('/notebook/:noteId', {
        templateUrl: 'app/notebook/notebook.html',
        controller: 'NotebookCtrl'
      })
      .when('/notebook/:noteId/paragraph/:paragraphId?', {
        templateUrl: 'app/notebook/notebook.html',
        controller: 'NotebookCtrl'
      })
      .when('/interpreter', {
        templateUrl: 'app/interpreter/interpreter.html',
        controller: 'InterpreterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  
    ngToastProvider.configure({
      dismissButton: true,
      dismissOnClick: false,
      timeout: 6000
    });
  });
