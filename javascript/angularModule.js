var app = angular.module('portfolio', []);


app.controller('introController', function($scope){
    var self = this;
    $scope.firstString = '';
    $scope.secondString = '';

    self.array1String = 'hello my name is David Goodman';
    self.array2String = 'I am a full stack web developer..';

    self.type = function(string1, string2){
        var array1 = string1.split('');
        var array2 = string2.split('');

        //every second i want to go to the first text value, and replace the first string we the value/concat
        console.log('2 length' + '  ' + array2.length);
        var i = 0;
        var x = 0;
       setInterval(function(){
            if(i<array1.length){

                $scope.firstString = $scope.firstString + array1[i];
                console.log($scope.firstString);
                $scope.$apply();
                i++;

            }else{
                if(x<array2.length){
                    console.log('x is smaller!');
                    $scope.secondString = $scope.secondString + array2[x];
                    $scope.$apply();
                    x++;
                }
            }

        }, 100);

    };

    self.type(self.array1String, self.array2String);
});