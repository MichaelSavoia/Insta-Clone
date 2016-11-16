(function() {

  angular
    .module('app')
    .controller('singlePicController', function (picData, $stateParams){

		let vm = this;

		id = $stateParams.id

		// calls data from foundry
		let pic = picData.getsinglePic(id);

		// sets data when getPic function is finished
		pic.then(function(imageData){
			vm.pic = imageData.data;
			console.log(vm.pic)
		});

    });

})();