
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

				scrollTriggerObj.targetElements_aboveView = [];	// stores the [Elements] that have been inview and scrolled by already
				scrollTriggerObj.targetElements_inView    = [];	// stores the [Elements] that are currently within view
				scrollTriggerObj.targetElements_belowView = [];	// stores the [Elements] that are bellow the current view/scroll and have not come into view yet

				scrollTriggerObj.furthestScroll = 0;
				scrollTriggerObj.lastScroll = 0;

				scrollTriggerObj.triggerPoint_btm = window.innerHeight * 0.8 + window.pageYOffset;
				scrollTriggerObj.triggerPoint_top = window.innerHeight * 0.2 + window.pageYOffset;

				scrollTriggerObj.debounceInterval  = 300;		// the interval at which the [checkScroll()] is called
				scrollTriggerObj.isRunning = false;				// 
				scrollTriggerObj.windowResized = false;			// when window is resized, run a [triggerPoints_generateMap()] before [triggerPoints_check()]

				scrollTriggerObj.type = null;

			// Functionality
			// -----------------------------------------------------

				// triggerPoints_generateMap 
				// -----------------------------------------------------
				// Gets all targets and set them in order (by Y position within the document)
				
					scrollTriggerObj.triggerPoints_generateMap = function( targetArea__element ) {

						var targetElements  = []; 
						scrollTriggerObj.type = null;

						var targetArea      = targetArea__element || document;
						var targets_static  = Array.from(targetArea.getElementsByClassName('scrollTrigger-static'));
						var targets_dynamic = Array.from(targetArea.getElementsByClassName('scrollTrigger-dynamic'));

						// Set Targets within the [targetElements] Array [&&] define the [scrollTriggerObj] [type]

							// If dynamic Elements present
							if (targets_dynamic.length > 0) {

								targetElements = targets_static.concat(targets_dynamic).sort(function(a, b) { 
									return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
								});

								scrollTriggerObj.type = 'dynamic';

							// If only static Elements present
							} else if (targets_static.length > 0) {

								targetElements = targets_static.sort(function(a, b) { 
									return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
								});

								scrollTriggerObj.type = 'static';

							};

						// Checks the Targets' Position in comparison to the View

							var limit = targetElements.length;
							var trigger_btm = scrollTriggerObj.triggerPoint_btm;
							var trigger_top = scrollTriggerObj.triggerPoint_top;

							if (targetElements.length > 0) {
								
								scrollTriggerObj.targetElements_aboveView = []; // will be used for 'dynamic' targets only
								scrollTriggerObj.targetElements_inView    = []; // will be used for 'dynamic' targets only
								scrollTriggerObj.targetElements_belowView = []; // will be used for 'static' && 'dynamic' targets

								if (scrollTriggerObj.type == 'dynamic') {

									for (var i=0; i<limit; i++) {

										var targetElem = targetElements[i];

										// If [dynamic] target
										if (hasClass(targetElem, 'scrollTrigger-dynamic')) {

											if (targetElem.getBoundingClientRect().top <= trigger_btm) { 				// in view or above
												
												if (targetElem.getBoundingClientRect().bottom <= trigger_top) { 		// above the view [^]
													scrollTriggerObj.targetElements_aboveView.push(targetElem)
												} else { 																// in view [>]
													scrollTriggerObj.scrollTrigger_apply(targetElem , 'enterView');
												}
											
											} else {																	// below the view [v]
												scrollTriggerObj.targetElements_belowView.push(targetElem);
											}

										// If [static] target
										} else {

											if (targetElem.getBoundingClientRect().top <= trigger_btm) {
												scrollTriggerObj.scrollTrigger_apply(targetElem , 'enterView') // will remove the [scrollTrigger-static] class from the Element
											} else {
												scrollTriggerObj.targetElements_belowView.push(targetElem);
											}
										}
									};

									if (scrollTriggerObj.targetElements_aboveView.length > 1) {
										scrollTriggerObj.targetElements_aboveView = scrollTriggerObj.targetElements_aboveView.sort(function(a, b) { 
											return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
										});
									};

									if (scrollTriggerObj.targetElements_inView.length > 1) {
										scrollTriggerObj.targetElements_inView = scrollTriggerObj.targetElements_inView.sort(function(a, b) { 
											return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
										});
									};

									if (scrollTriggerObj.targetElements_belowView.length > 1) {
										scrollTriggerObj.targetElements_belowView = scrollTriggerObj.targetElements_belowView.sort(function(a, b) { 
											return parseFloat(a.getBoundingClientRect().bottom) - parseFloat(b.getBoundingClientRect().bottom) 
										});
									};

									console.log('above : ', scrollTriggerObj.targetElements_aboveView);
									console.log('in : ',scrollTriggerObj.targetElements_inView);
									console.log('below : ',scrollTriggerObj.targetElements_belowView);

								} else if (scrollTriggerObj.type == 'static') {

									for (var i=0; i<limit; i++) {
										if (targetElements[i].getBoundingClientRect().top <= trigger_btm) {
											scrollTriggerObj.scrollTrigger_apply(targetElements[i] , 'enterView') // will remove the [scrollTrigger-static] class from the Element
										} else {
											break
										}
									};

									scrollTriggerObj.targetElements_belowView = Array.from(targetArea.getElementsByClassName('scrollTrigger-static'));
									scrollTriggerObj.targetElements_belowView = scrollTriggerObj.targetElements_belowView.sort(function(a, b) { 
										return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
									});

								}

							}
					};

				// Check Range - Actual Function that checks and updates Effects on Elements
				// -----------------------------------------------------
				// If the element is in view - run function | remove from array or move to another | run again (now will analize the second elem - and so on)

					scrollTriggerObj.triggerPoints_check = function() {

						if (scrollTriggerObj.type == 'dynamic') {

							if      (scrollTriggerObj.lastScroll > pageYOffset) { checkTP('scroll-down') } 
							else if (scrollTriggerObj.lastScroll < pageYOffset) { checkTP('scroll-up')   }

						} else if (scrollTriggerObj.type == 'static') {

							// When static scenario - run check only if scrolled further than than the last-recorder-furthest scroll
							if (scrollTriggerObj.furthestScroll < pageYOffset) {

								var target = scrollTriggerObj.targetElements_belowView[0];

								if (target) {

									if (target.getBoundingClientRect().top <= scrollTriggerObj.triggerPoint_btm) {

										scrollTriggerObj.scrollTrigger_apply(target , 'enterView');

									}
								}
							}

						};
					};

					function checkTP(scenario) {

						var target_below  = scrollTriggerObj.targetElements_belowView[0];
						var target_inView = scrollTriggerObj.targetElements_inView[0];
						var target_above  = scrollTriggerObj.targetElements_aboveView[0];

						if (scenario == 'scroll-down') {

							if (target_inView && target_inView.getBoundingClientRect().bottom <= scrollTriggerObj.triggerPoint_top) {

								scrollTriggerObj.scrollTrigger_apply(target_inView , 'exitView');

							} else if (target_below && target_below.getBoundingClientRect().top <= scrollTriggerObj.triggerPoint_btm) {

								scrollTriggerObj.scrollTrigger_apply(target_below , 'enterView');

							} 

						} else if (scenario == 'scroll-up') {

							if (target_inView && target_inView.getBoundingClientRect().top <= scrollTriggerObj.triggerPoint_btm) {

								scrollTriggerObj.scrollTrigger_apply(target_inView , 'exitView');

							} else if (target_above && target_above.getBoundingClientRect().bottom <= scrollTriggerObj.triggerPoint_top) {

								scrollTriggerObj.scrollTrigger_apply(target_above , 'enterView');

							}

						}

					};

					function checkElem(elem) {



					}

				// Check Scroll - checks every xxx miliseconds if update is necesary 
				// -----------------------------------------------------

					scrollTriggerObj.checkScroll = function(){ 

						if (scrollTriggerObj.windowResized) { 
							scrollTriggerObj.triggerPoints_generateMap();
							scrollTriggerObj.windowResized = false; 
						};

						scrollTriggerObj.triggerPoints_check();

						if (scrollTriggerObj.furthestScroll < pageYOffset) { scrollTriggerObj.furthestScroll = pageYOffset };
						scrollTriggerObj.lastScroll = pageYOffset;

						if (scrollTriggerObj.targetElements_belowView.length > 0 || scrollTriggerObj.targetElements_aboveView.length > 0) { 
							setTimeout(function() { scrollTriggerObj.checkScroll() }, scrollTriggerObj.debounceInterval);
						};
					};

				// Function to trigger when Element is scrolled into view
				// -----------------------------------------------------

					scrollTriggerObj.scrollTrigger_apply = function(elem , triggerScenario__string) {

						// Modify Arrays
							if (hasClass(elem, 'scrollTrigger-dynamic')) {

								if      (scrollTriggerObj.targetElements_aboveView[0] == elem) { scrollTriggerObj.targetElements_aboveView.shift() }
								else if (scrollTriggerObj.targetElements_belowView[0] == elem) { scrollTriggerObj.targetElements_belowView.shift() };
								scrollTriggerObj.targetElements_inView.push(elem)

							} else if (hasClass(elem, 'scrollTrigger-static')) {

								elem.classList.remove('scrollTrigger-static');
								scrollTriggerObj.targetElements_belowView.shift();

							};

						// Apply Function
							var elem_triggerFunction = elem.triggerFunction;

							if (elem_triggerFunction && elem_triggerFunction instanceof Function) 	{ elem_triggerFunction(elem , triggerScenario__string) 				} 
							else 																	{ scrollTriggerObj.triggerFunction(elem , triggerScenario__string) 	}

					};

					scrollTriggerObj.triggerFunction = function(elem , triggerScenario__string) {

						// console.log(elem, triggerScenario__string);

						if (triggerScenario__string == 'enterView') {
							elem.style.backgroundColor = 'blue';
						} else {
							elem.style.backgroundColor = 'red';
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