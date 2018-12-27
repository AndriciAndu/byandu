
	(function(){

		var bgOptions = [ 'demoItem-bgImg' , 'demoItem-bgGrad' , 'demoItem-bgGif' , 'demoItem-bgVid' ];

		document.getElementsByClassName('demoItem-bgType')[0].addEventListener('change', function(){

			var targets = Array.from(document.getElementsByClassName('demoItem'));
			var current_class = this.value;

			targets.map(function(item){
				item.classList.remove(...bgOptions);
				item.classList.add(current_class);
			})
		});

		// Usage Tab - demo1 - radio overlay

			var usageTab_demo1_radioContainers = Array.from(document.getElementsByClassName('usageTab-demo1-radioContainer'));
			usageTab_demo1_radioContainers.map(function(item){
				item.addEventListener('click', function(){
					this.getElementsByClassName('usageTab-demo1-radio')[0].click()
				})
			});

		// Usage Tab - demo1 - radio functionality

			var usageTab_demo1_radios_options = [ 
				'text-clip-black'         , 'text-clip-white'       ,
				'text-clip-black-full'    , 'text-clip-white-full'  ,
				'text-clip-black-border'  , 'text-clip-white-border'
			];

			var usageTab_demo1_radios = Array.from(document.getElementsByClassName('usageTab-demo1-radio'));
			var usageTab_demo1_targets = Array.from(document.getElementsByClassName('usageTab-demo1-target '));

			usageTab_demo1_radios.map(function(item){
				item.addEventListener('change', function(){

					var current_value = this.value;

					usageTab_demo1_targets.map(function(item){
						item.classList.remove(...usageTab_demo1_radios_options);
						item.classList.add(current_value)
					});
				})
			});

	})();