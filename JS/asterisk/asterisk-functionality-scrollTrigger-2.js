
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;
		asteriskObj.functionality = asteriskObj.functionality || {} ;

	// Asterisk Effects - [EnterExit]
	// -----------------------------------------------------

		(function(){

			// Effects.Object Setup 
			// -----------------------------------------------------

				asteriskObj.functionality.scrollTrigger_2 = {};
				var scrollTriggerObj = asteriskObj.functionality.scrollTrigger_2;

				scrollTriggerObj.targetElements_in = [];		// stores the [Elements] that are to-be-affected
				scrollTriggerObj.targetElements_out = [];		// stores the [Elements] that are to-be-affected
				scrollTriggerObj.debounceInterval  = 300;		// the interval at which the [checkScroll()] is called
				scrollTriggerObj.isRunning = false;				// 
				scrollTriggerObj.windowesized = false;			// when window is resized, run a [triggerPoints_generateMap()] before [triggerPoints_check()]

			// Functionality
			// -----------------------------------------------------

				// triggerPoints_generateMap 
				// -----------------------------------------------------
				// Gets all targets and set them in order (by Y position within the document)
				
					scrollTriggerObj.triggerPoints_generateMap = function() {

						// in
						// -----------------------------------------------------

							var targets_in    = Array.from(document.getElementsByClassName('scrollTrigger-target-in'));
							var targets_inOut = Array.from(document.getElementsByClassName('scrollTrigger-target-inOut'));
							targets_inOut  =  targets_inOut.filter(item => !hasClass(item, 'scrollTrigger-target-inView'));

							var targets = targets_in.concat(targets_inOut);

							if (targets.length > 0) {

								targets.sort(function(a, b) { 
									return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
								});
							};

							scrollTriggerObj.targetElements_in = targets;

						// bottom
						// -----------------------------------------------------

							var scrollTrigger_targets_out = Array.from(document.getElementsByClassName('scrollTrigger-target-inView'));

							if (scrollTrigger_targets_out.length > 0) {

								scrollTrigger_targets_out.sort(function(a, b) { 
									return parseFloat(a.getBoundingClientRect().bottom) - parseFloat(b.getBoundingClientRect().bottom) 
								});
							};

							scrollTriggerObj.targetElements_out = scrollTrigger_targets_out;
					};

				// Check Range - Actual Function that checks and updates Effects on Elements
				// -----------------------------------------------------
				// If the element is in view - run function | remove from array | run again (now will analize the second elem - and so on)

					scrollTriggerObj.triggerPoints_check = function() {

						// top
						// -----------------------------------------------------

							var targetElem_in = scrollTriggerObj.targetElements_in[0];

							if (targetElem_in) {

								var elem_triggerPoint = targetElem_in.getBoundingClientRect().top; 
								var view_triggerPoint = window.innerHeight * 0.8 + window.pageYOffset;
								var elem_isInView     = (elem_triggerPoint <= view_triggerPoint);

								if (elem_isInView) {
									console.log(targetElem_in);
									scrollTriggerObj.scrollTrigger_apply(targetElem_in , 'in');
									scrollTriggerObj.targetElements_in.shift();

									if (hasClass(targetElem_in, 'scrollTrigger-target-inOut')) {
										//scrollTriggerObj.targetElements_out.push()
									};

									scrollTriggerObj.triggerPoints_check();
								}
							};

						// bottom
						// -----------------------------------------------------

							var targetElem_out = scrollTriggerObj.targetElements_out[0];

							if (targetElem_out) {

								var elem_triggerPoint = targetElem_out.getBoundingClientRect().bottom; 
								var view_triggerPoint = window.innerHeight * 0.2 + window.pageYOffset;
								var elem_isInView     = (elem_triggerPoint <= view_triggerPoint);

								if (elem_isInView) {
									console.log(targetElem_out);
									scrollTriggerObj.scrollTrigger_apply(targetElem_out , 'out');
									scrollTriggerObj.targetElements_out.shift();
									scrollTriggerObj.triggerPoints_check();
								}
							};
					};

				// Check Scroll - checks every xxx miliseconds if update is necesary 
				// -----------------------------------------------------

					//
						// 1. Checks if triggerPoints-map needs to be refreshed
						// 2. Checks if any target Elements are in view
						// 	* If any Element is in view - trigger it 
						//	* Call Function again (to check for the next elem)
						// -----------------------------------------------------
						// - stops when all elements have been 'scroll-triggered' <> [targetElements] array becomes empty
						// - can be interrupted at any time, by removing all item in the [targetElements] Array
						// -----------------------------------------------------

					scrollTriggerObj.checkScroll = function(){ 

						if (scrollTriggerObj.windowResized) { 
							scrollTriggerObj.triggerPoints_generateMap();
							scrollTriggerObj.windowResized = false; 
						};

						scrollTriggerObj.triggerPoints_check();

						if (scrollTriggerObj.targetElements.length > 0) { 
							setTimeout(function() { scrollTriggerObj.checkScroll() }, scrollTriggerObj.debounceInterval);
						};
					};

				// Function to trigger when Element is scrolled into view
				// -----------------------------------------------------

					scrollTriggerObj.scrollTrigger_apply = function(elem , triggerScenario) {

						var elem_triggerFunction = elem.triggerFunction;

						if (elem_triggerFunction && elem_triggerFunction instanceof Function) 	{ elem_triggerFunction(elem , triggerScenario) 				} 
						else 																	{ scrollTriggerObj.triggerFunction(elem , triggerScenario) 	}

					};

					scrollTriggerObj.triggerFunction = function(elem , triggerScenario) {

						console.log(elem, triggerScenario)

						// The default [function-to-trigger] is created, but it's actual content was not defined 
						// You must define the function's content - or the [scrollTrigger] functionality will only display this cute little log :)
						// asteriskObj.functionality.scrollTrigger.triggerFunction 

					};

			// Init
			// -----------------------------------------------------
			
				scrollTriggerObj.init = function() {

					scrollTriggerObj.currentDocHeight = document.documentElement.scrollHeight;
					scrollTriggerObj.triggerPoints_generateMap();
					scrollTriggerObj.checkScroll();
					scrollTriggerObj.isRunning = true;

					window.addEventListener('resize' , function(){
						scrollTriggerObj.windowResized = true 
					})
				};

				// scrollTriggerObj.init();

		})();


	/*scrollTriggerObj.checkDocHeight = function() {
		return scrollTriggerObj.currentDocHeight != document.documentElement.scrollHeight 
	};*/