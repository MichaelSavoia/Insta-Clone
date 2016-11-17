(function() {

  angular
    .module('app')
    .controller('picController', function (picData){

		let vm = this;

		// calls data from foundry
		let promise = picData.getPics();

		// sets data when getPics function is finished
		promise.then(function(imageData){
			vm.pics = imageData.data.images;
			console.log(vm.pics)
		});

		vm.newPic = function(formData){
			formData.id = Date.now;
			picData.postPic(formData);
		};

		vm.likePic = function(id,pic){
			let response = picData.likePic(id);
			pic.likes++;
		}

    });

})();