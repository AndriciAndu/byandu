
	(function(){
		
		var generateDemos_container = document.getElementsByClassName('_route_mainView-generateDemos')[0];
		var demoItems = Array.from(generateDemos_container.getElementsByClassName('faSpinner-demoItem'));

		var buttons_speed = Array.from(generateDemos_container.getElementsByClassName('faSpinner-demoItemBtn-speed'));
		var buttons_size  = Array.from(generateDemos_container.getElementsByClassName('faSpinner-demoItemBtn-size'));

		var classesArray_speed = [ 'faSpinner-slow' , 'faSpinner-fast' ];
		var classesArray_size  = [ 	'faSpinner-xs' 	, 'faSpinner-sm'  , 'faSpinner-md'  	, 
									'faSpinner-lg'  , 'faSpinner-xl'  , 'faSpinner-xxl' 	];

		generateDemos_container.addEventListener('click', function(e) {

			var current_target = e.target;
			
			// size buttons
			// --------------------------------
			if (hasClass(current_target, 'faSpinner-demoItemBtn-size')) {

				var current_class = current_target.getAttribute('data-value');

				demoItems.map(function(item){ 
					classesArray_size.map(klass => item.classList.remove(klass));
					if (current_class != '') { item.classList.add(current_class) }
				});

				buttons_size.map(btn => btn.classList.remove('active'));
				current_target.classList.add('active');

			// speed buttons
			// --------------------------------
			} else if (hasClass(current_target, 'faSpinner-demoItemBtn-speed')) {

				var current_class = current_target.getAttribute('data-value');

				demoItems.map(function(item){ 
					classesArray_speed.map(klass => item.classList.remove(klass));
					if (current_class != '') { item.classList.add(current_class) }
				});

				buttons_speed.map(btn => btn.classList.remove('active'));
				current_target.classList.add('active');

			}

		});

	})();

	