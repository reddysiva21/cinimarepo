/**
 * Created by siva on 12/14/2015.
 */
var myapp = angular.module('sampleapp', [ 'youtube-embed']);

myapp.controller('samplecontoller', function ($scope) {

    $scope.theBestVideo = 'C0eKhACuTuk';
    $scope.isItClipsDiv = false;
    $scope.showData = function( ){

        $scope.curPage = 0;
        $scope.pageSize = 5;
        $scope.datalists = [
            {"name": "John","age":"16","designation":"Software Engineer1", videoId:"C0eKhACuTuk", "start":120, "end":200},
            {"name": "John2","age":"21","designation":"Software Engineer2", "videoId":"Ojy_UgBZbxo", "start":120, "end":200},
            {"name": "John3","age":"19","designation":"Software Engineer3", "videoId":"Ojy_UgBZbxo","start":120, "end":200},
            {"name": "John4","age":"17","designation":"Software Engineer4", "videoId":"Ojy_UgBZbxo"},
            {"name": "John5","age":"21","designation":"Software Engineer5", "videoId":"Ojy_UgBZbxo"},
            {"name": "John6","age":"31","designation":"Software Engineer6", "videoId":"Ojy_UgBZbxo"},
            {"name": "John7","age":"41","designation":"Software Engineer7", "videoId":"Ojy_UgBZbxo"},
            {"name": "John8","age":"16","designation":"Software Engineer8", "videoId":"Ojy_UgBZbxo"},
            {"name": "John18","age":"16","designation":"Software Engineer9", "videoId":"Ojy_UgBZbxo"},
            {"name": "John28","age":"16","designation":"Software Engineer10", "videoId":"Ojy_UgBZbxo"},
            {"name": "John38","age":"16","designation":"Software Engineer11", "videoId":"Ojy_UgBZbxo"},
            {"name": "John48","age":"16","designation":"Software Engineer12", "videoId":"Ojy_UgBZbxo"},
            {"name": "John58","age":"16","designation":"Software Engineer13", "videoId":"Ojy_UgBZbxo"},
            {"name": "John68","age":"16","designation":"Software Engineer14", "videoId":"Ojy_UgBZbxo"},
            {"name": "John68","age":"16","designation":"Software Engineer15", "videoId":"Ojy_UgBZbxo"}
        ]
        $scope.numberOfPages = function() {
            return Math.ceil($scope.datalists.length / $scope.pageSize);
        };

    };

    $scope.isDisabled = function(){
      return isItClipsDiv;
    };

});

angular.module('sampleapp').filter('pagination', function()
{
    return function(input, start)
    {
        start = +start;
        return input.slice(start);
    };
});


