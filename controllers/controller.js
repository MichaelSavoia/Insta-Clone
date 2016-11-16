(function() {

  angular
    .module('app')
    .controller('picController', function (picData){

		let vm = this;

		// calls data from foundry
		vm.allPics = picData.getPics();

		// sets data when getPics function is finished
		vm.allPics.then(function(imageData){
			vm.pics = imageData.data.images;
			console.log(vm.pics)
		});

		vm.newPic = function(formData){
			formData.id = Date.now;
			picData.postPic(formData);
			console.log(formData)
		};
		
    });

})();