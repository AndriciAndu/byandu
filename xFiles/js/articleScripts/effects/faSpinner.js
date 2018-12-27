
	(function(){

		articleFunctions.generateDemos_container__demoItemBtn__run = function(e) {

			var target = e.target;

			if (hasClass(target, 'faSpinner-demoItemBtn-size') || hasClass(target, 'faSpinner-demoItemBtn-speed')) {

				var generateDemos_container = document.getElementById('__route__mainView__generateDemos');
				var demoItems = Array.from(generateDemos_container.getElementsByClassName('faSpinner-demoItem'));
				var current_class = target.getAttribute('data-value');

				if (hasClass(target, 'faSpinner-demoItemBtn-size')) {

					var classesArray_size = [ 'faSpinner-xs', 'faSpinner-sm', 'faSpinner-md', 'faSpinner-lg', 'faSpinner-xl', 'faSpinner-xxl' ];

					demoItems.map(function(item){ 
						classesArray_size.map(klass => item.classList.remove(klass));
						if (current_class != '') { item.classList.add(current_class) }
					});

					var buttons_size = Array.from(generateDemos_container.getElementsByClassName('faSpinner-demoItemBtn-size'));
					buttons_size.map(btn => btn.classList.remove('active'));
					target.classList.add('active');

				// speed buttons
				// --------------------------------
				} else if (hasClass(target, 'faSpinner-demoItemBtn-speed')) {

					var classesArray_speed = [ 'faSpinner-slow' , 'faSpinner-fast' ];

					demoItems.map(function(item){ 
						classesArray_speed.map(klass => item.classList.remove(klass));
						if (current_class != '') { item.classList.add(current_class) }
					});

					var buttons_speed = Array.from(generateDemos_container.getElementsByClassName('faSpinner-demoItemBtn-speed'));
					buttons_speed.map(btn => btn.classList.remove('active'));
					target.classList.add('active');

				}
				
			}
		};

		article_addEvent(document.getElementById('__route__mainView__generateDemos') , 'click' , articleFunctions.generateDemos_container__demoItemBtn__run)

		console.log(articleFunctions);

		//asterisk.components.spoiler.init(document.getElementById('byAndu-main'));

	})();

	