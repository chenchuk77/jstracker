	var services = angular.module('ngdemo.services', ['ngResource']);

docker_server='192.168.1.18'

services.factory('ImagesFactory', function ($resource) {
    return $resource('http://' +docker_server+ '\\:4243/images/json', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});
services.factory('ImageFactory', function ($resource) {
    return $resource('http://' +docker_server+ '\\:4243/images/json/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});



services.factory('ContainersFactory', function ($resource) {
    return $resource('http://' +docker_server+ '\\:4243/containers/json', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});
services.factory('ContainerFactory', function ($resource) {
    return $resource('http://' +docker_server+ '\\:4243/containers/json/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
