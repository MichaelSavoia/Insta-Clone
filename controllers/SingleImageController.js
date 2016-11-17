(function() {

  angular
    .module('app')
    .controller('singlePicController', function (picData, $stateParams){

		let vm = this;

		id = $stateParams.id;
		index = $stateParams.index;

		// calls data from foundry
		let pic = picData.getsinglePic(id);

		// sets data when getPic function is finished
		pic.then(function(imageData){
			vm.pic = imageData.data;
			console.log(vm.pic)
		});

		// vm.deletePic = function(id, index){

		// }

		vm.likePic = function(id,pic){
			let response = picData.likePic(id);
			pic.likes++;
		}

    });

})();