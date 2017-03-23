angular.module('itunes').service('itunesService', function($http, $q){
  //This service hits the Itunes API.
    var baseUrl = "https://itunes.apple.com/search?term="
    var songData = [];

     this.getSongs = function (artist) {
       return $http ({
                  method: 'JSONP',
                  url: ('https://itunes.apple.com/search?term=' + artist + '&limit=10' + '&callback=JSON_CALLBACK')
                })
      };

});
