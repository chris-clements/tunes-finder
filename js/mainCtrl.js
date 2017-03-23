angular.module('itunes').controller('mainCtrl', function($scope, itunesService){
  //working with ng grid pass through for arranging the data to be diplayed from the api
  $scope.gridOptions = {
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Song', displayName: 'Song'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ]
  };

    $scope.getSongData = function(){
      var artist = $scope.artist;
      var songData = [];
      itunesService
          .getSongs(artist)
          .then(function(artist) {
            $scope.artistData = artist.data.results;
           $scope.songData = artist.data.results.map( function( artist ) {
             return {
               Song: artist.trackName
               , Artist: artist.artistName
               , Collection: artist.collectionName
               , Type: artist.kind
               , AlbumArt: artist.artworkUrl30
               , CollectionPrice: `$` + artist.collectionPrice
               , Play: artist.previewUrl
             }
           } );
           
         })
}

});
