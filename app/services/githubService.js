angular.module('showcaseApp.services.github', [])
.factory('GithubService', [
  '$http',
  '$q',

  function($http, $q) {
    var service = {
      getReposByUsername: function getReposByUsername(username) {
        var requestUrl = getRequestUrl(username);
        return $http.get(requestUrl)
      }
    };

    function getRequestUrl(username) {
      return 'https://api.github.com/users/' + username + '/repos';
    }

    return service;
  }
]);
