
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.functionality = asterisk.functionality || {} ;

	// Asterisk Effects - [EnterExit]
	// -----------------------------------------------------

		(function(){

			// Effects.Object Setup 
			// -----------------------------------------------------

				asterisk.functionality.scrollTrigger = {};
				var scrollTriggerObj = asterisk.functionality.scrollTrigger;

				scrollTriggerObj.targetElements = [];
				scrollTriggerObj.aboveView_index = 0;
				scrollTriggerObj.firstInView_index = 0;
				scrollTriggerObj.lastInView_index  = 0;
				scrollTriggerObj.belowView_index = 1;

				scrollTriggerObj.lastScroll = 0;

				scrollTriggerObj.debounceInterval  = 100;		// the interval at which the [checkScroll()] is called
				scrollTriggerObj.isRunning = false;				// 
				scrollTriggerObj.windowResized = false;			// when window is resized, run a [triggerPoints_generateMap()] before [triggerPoints_check()]

			// Functionality
			// -----------------------------------------------------

				// triggerPoints_generateMap 
				// -----------------------------------------------------
				// Gets all targets and set them in order (by Y position within the document)
				
					scrollTriggerObj.triggerPoints_generateMap = function( targetArea__element ) {

						var targetElements  = []; 

						var targetArea = targetArea__element || document;
						var allTargets = Array.from(targetArea.getElementsByClassName('scrollTrigger-target'));

						targetElements = allTargets.sort(function(a, b) { 
							return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
						});

						scrollTriggerObj.targetElements = targetElements = targetElements.map(function(x , index) {
							return { elem : x , index : index }
						});

						// Checks the Targets' Position in comparison to the View

							var inView = [];
							var limit = targetElements.length;
							var trigger_btm = window.innerHeight * 0.8;
							var trigger_top = window.innerHeight * 0.2;

							if (limit > 0) {
								for (var i=0; i<limit; i++) {

									var target = targetElements[i];

									if (target.elem.getBoundingClientRect().top <= trigger_btm) {
										if (target.elem.getBoundingClientRect().bottom >= trigger_top) {
											inView.push(target)
										}
									} else { break }									
								};
							};

							if (inView[0]) {
								scrollTriggerObj.aboveInView_index = inView[0].index-1;
								scrollTriggerObj.firstInView_index = inView[0].index;
								scrollTriggerObj.lastInView_index  = inView[inView.length-1].index;
								scrollTriggerObj.belowView_index   = inView[inView.length-1].index+1;

								inView.map(x => scrollTriggerObj.triggerFunction(x.elem , 'enterView'))
							}
					};

				// Check Range - Actual Function that checks and updates Effects on Elements
				// -----------------------------------------------------
				// If the element is in view - run function | remove from array or move to another | run again (now will analize the second elem - and so on)

					scrollTriggerObj.triggerPoints_check = function() {

						var trigger_btm = window.innerHeight * 0.8;
						var trigger_top = window.innerHeight * 0.2;

						if (scrollTriggerObj.lastScroll < pageYOffset) { // scroll down

							// in view
							var checkInView = true;
							var i = scrollTriggerObj.firstInView_index;
							while (checkInView) {

								var target_inView = scrollTriggerObj.targetElements[i];

								if (target_inView && 
									!hasClass(target_inView, 'scrollTrigger-static') && 
									target_inView.elem.getBoundingClientRect().bottom <= trigger_top) { // has exited the view
									scrollTriggerObj.triggerFunction(target_inView.elem , 'exitView');
									i++
								} else {
									checkInView = false;
									scrollTriggerObj.firstInView_index = i
								}
							};

							// below view
							var checkBelowView = true;
							var i = scrollTriggerObj.lastInView_index;
							while (checkBelowView) {

								var target_belowView = scrollTriggerObj.targetElements[i+1];

								if (target_belowView && target_belowView.elem.getBoundingClientRect().top <= trigger_btm) { // has exited the view
									scrollTriggerObj.triggerFunction(target_belowView.elem , 'enterView');
									i++
								} else {
									checkBelowView = false;
									scrollTriggerObj.lastInView_index = i
								}
							};


						} else if (scrollTriggerObj.lastScroll > pageYOffset) { // scroll up

							// in view
							var checkInView = true;
							var i = scrollTriggerObj.lastInView_index;
							while (checkInView) {

								var target_inView = scrollTriggerObj.targetElements[i];

								if (target_inView && 
									!hasClass(target_inView, 'scrollTrigger-static') && 
									target_inView.elem.getBoundingClientRect().top >= trigger_btm) { // has exited the view
									scrollTriggerObj.triggerFunction(target_inView.elem , 'exitView');
									i--
								} else {
									checkInView = false;
									scrollTriggerObj.lastInView_index = i
								}
							};

							// above view
							var checkAboveView = true;
							var i = scrollTriggerObj.firstInView_index;
							while (checkAboveView) {

								var target_aboveView = scrollTriggerObj.targetElements[i-1];

								if (target_aboveView && target_aboveView.elem.getBoundingClientRect().bottom >= trigger_top) { // has exited the view
									scrollTriggerObj.triggerFunction(target_aboveView.elem , 'enterView');
									i--
								} else {
									checkAboveView = false;
									scrollTriggerObj.firstInView_index = i
								}
							};
						};
					};

					scrollTriggerObj.terminate = function() {
						scrollTriggerObj.targetElements = [];
						scrollTriggerObj.aboveView_index = 0;
						scrollTriggerObj.firstInView_index = 0;
						scrollTriggerObj.lastInView_index  = 0;
						scrollTriggerObj.belowView_index = 1;

						scrollTriggerObj.lastScroll = 0;
					};

				// Check Scroll - checks every xxx miliseconds if update is necesary 
				// -----------------------------------------------------

					scrollTriggerObj.checkScroll = function(){ 

						if (scrollTriggerObj.windowResized) { 
							scrollTriggerObj.triggerPoints_generateMap();
							scrollTriggerObj.windowResized = false; 
						};

						scrollTriggerObj.triggerPoints_check();

						// if (scrollTriggerObj.furthestScroll < pageYOffset) { scrollTriggerObj.furthestScroll = pageYOffset };
						scrollTriggerObj.lastScroll = pageYOffset;

						setTimeout(function() { scrollTriggerObj.checkScroll() }, scrollTriggerObj.debounceInterval);
					};

				// Function to trigger when Element is scrolled into view
				// -----------------------------------------------------

					scrollTriggerObj.scrollTrigger_apply = function(elem , triggerScenario__string) {

						// Apply Function
							var elem_triggerFunction = elem.triggerFunction;

							if (elem_triggerFunction && elem_triggerFunction instanceof Function) 	{ elem_triggerFunction(elem , triggerScenario__string) 				} 
							else 																	{ scrollTriggerObj.triggerFunction(elem , triggerScenario__string) 	}

					};

					scrollTriggerObj.triggerFunction = function(elem , triggerScenario__string) {

						if (triggerScenario__string == 'enterView') {
							elem.style.backgroundColor = 'blue';
						} else {
							elem.style.backgroundColor = 'yellow';
						}

						// The default [function-to-trigger] is created, but it's actual content was not defined 
						// You must define the function's content - or the [scrollTrigger] functionality will only display this cute little log :)
						// asterisk.functionality.scrollTrigger.triggerFunction 

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

				scrollTriggerObj.init();

		})();