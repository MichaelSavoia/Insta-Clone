(function() {


    angular
        .module('app')
        .factory("picData", function($http) {


            // gets pictures from api
            const getPics = function(){
                let call = $http({
                    method: 'GET',
                    headers: { 'X_CSRF_TOKEN': 'michael' },
                    url: 'http://instagramcloneclass.herokuapp.com/images',
                });

                return call;
            }

            // posts new image to api
            const postPic = function(picData){
                let call = $http({
                    method: 'POST',
                    data: {
                        'title': picData.title,
                        'url': picData.url,
                        'description': picData.description,
                    },
                    headers: { 'X_CSRF_TOKEN': 'michael' },
                    url: 'http://instagramcloneclass.herokuapp.com/image/post'
                });

                return call;
            }

            // gets a single image
            const getsinglePic = function(id){
                var call = $http({
                    method: 'GET',
                    headers: { 'X_CSRF_TOKEN': 'michael' },
                    url: `http://instagramcloneclass.herokuapp.com/images/${id}`
                });

                return call;
            }

            // likes an image
            const likePic = function(imageid){
                var call = $http({
                    method: 'POST',
                    data: {imageid},
                    url: `http://instagramcloneclass.herokuapp.com/images/vote`,
                })

                return call;
            }

            // deletes a single image from the array
            // const deletePic = function(id){
            //     var call = $http({
            //         method: 'GET',
            //         headers: { 'X_CSRF_TOKEN': 'michael' },
            //         url: `http://instagramcloneclass.herokuapp.com/images/${id}`
            //     });

            // }


            // exposes functions
            return{
                getPics,
                getsinglePic,
                postPic,
                likePic,
            }


        });

})();