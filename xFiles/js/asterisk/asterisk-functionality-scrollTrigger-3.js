
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

				scrollTriggerObj.lastScroll = 0;

				scrollTriggerObj.triggerPoint_btm = window.innerHeight * 0.8 + window.pageYOffset;
				scrollTriggerObj.triggerPoint_top = window.innerHeight * 0.2 + window.pageYOffset;

				scrollTriggerObj.debounceInterval  = 10000;		// the interval at which the [checkScroll()] is called
				scrollTriggerObj.isRunning = false;				// 
				scrollTriggerObj.windowResized = false;			// when window is resized, run a [triggerPoints_generateMap()] before [triggerPoints_check()]

			// Functionality
			// -----------------------------------------------------

				// triggerPoints_generateMap 
				// -----------------------------------------------------
				// Gets all targets and set them in order (by Y position within the document)
				
					scrollTriggerObj.triggerPoints_generateMap = function( targetArea__element ) {

						var targetElements  = []; 

						var targetArea      = targetArea__element || document;
						var targets_static  = Array.from(targetArea.getElementsByClassName('scrollTrigger-static'));
						var targets_dynamic = Array.from(targetArea.getElementsByClassName('scrollTrigger-dynamic'));

						// Set Targets within the [targetElements] Array [&&] define the [scrollTriggerObj] [type]
							if (targets_dynamic.length > 0) {
								targetElements = targets_static.concat(targets_dynamic).sort(function(a, b) { 
									return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
								})
							};

						// Checks the Targets' Position in comparison to the View

							var limit = targetElements.length;
							var trigger_btm = scrollTriggerObj.triggerPoint_btm;
							var trigger_top = scrollTriggerObj.triggerPoint_top;

							if (limit > 0) {
								
								scrollTriggerObj.targetElements_aboveView = []; // will be used for 'dynamic' targets only
								scrollTriggerObj.targetElements_inView    = []; // will be used for 'dynamic' targets only
								scrollTriggerObj.targetElements_belowView = []; // will be used for 'static' && 'dynamic' targets

								for (var i=0; i<limit; i++) {

									var targetElem = targetElements[i];

									if (hasClass(targetElem, 'scrollTrigger-dynamic')) { 	// If [dynamic] target
										if (targetElem.getBoundingClientRect().top <= trigger_btm) { 
											if (targetElem.getBoundingClientRect().bottom <= trigger_top) { scrollTriggerObj.targetElements_aboveView.push(targetElem) } 
											else                                                          { scrollTriggerObj.targetElements_inView   .push(targetElem) }
										} else                                                            { scrollTriggerObj.targetElements_belowView.push(targetElem) }
									} else { 												// If [static] target
										if (targetElem.getBoundingClientRect().top <= trigger_btm)        { scrollTriggerObj.targetElements_inView   .push(targetElem) } 
										else                                                              { scrollTriggerObj.targetElements_belowView.push(targetElem) }
									}
								};

								// Sort Arrays
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

								// console.log('above : ', scrollTriggerObj.targetElements_aboveView);
								// console.log('in : ',scrollTriggerObj.targetElements_inView);
								// console.log('below : ',scrollTriggerObj.targetElements_belowView);

							}
					};

				// Check Range - Actual Function that checks and updates Effects on Elements
				// -----------------------------------------------------
				// If the element is in view - run function | remove from array or move to another | run again (now will analize the second elem - and so on)

					scrollTriggerObj.triggerPoints_check = function() {

						if (scrollTriggerObj.lastScroll > pageYOffset) { // scroll down

							// check below items - that would enter view
							var addedToView_fromBelow = [];
							var belowItems = scrollTriggerObj.targetElements_belowView;
							var belowItems_index = 0;

							for (var i=0; i<belowItems.length; i++) {
								if (belowItems[i] && belowItems[i].getBoundingClientRect().top <= scrollTriggerObj.triggerPoint_btm) {
									addedToView_fromBelow.push(inViewItems[i]);
									belowItems_index++
								} else { break }
							};
							scrollTriggerObj.targetElements_belowView = scrollTriggerObj.targetElements_belowView.slice(belowItems_index);

							// check inView items - that would be removed from view
							var removedFromView = [];
							var inViewItems = scrollTriggerObj.targetElements_inView;
							var inViewItems_index = 0;

							for (var i=0; i<inViewItems.length; i++) {
								if (inViewItems[i] && inViewItems[i].getBoundingClientRect().bottom <= scrollTriggerObj.triggerPoint_top) {
									removedFromView.push(inViewItems[i]);
									inViewItems_index++
								} else { break }
							};
							scrollTriggerObj.targetElements_inView = scrollTriggerObj.targetElements_inView.slice(belowItems_index);

							removedFromView      .map(x => scrollTriggerObj.targetElements_aboveView.push(x));
							addedToView_fromBelow.map(x => scrollTriggerObj.targetElements_inView   .push(x));

						} else if (scrollTriggerObj.lastScroll < pageYOffset) { // scroll up

							// check above items - that would enter view
							var addedToView_fromAbove = [];
							var aboveItems = scrollTriggerObj.targetElements_aboveView;
							var aboveItems_index = 0;

							for (var i=aboveItems.length-1; i>-1; i--) {
								if (aboveItems[i] && aboveItems[i].getBoundingClientRect().bottom <= scrollTriggerObj.triggerPoint_top) {
									addedToView_fromAbove.push(aboveItems[i]);
									aboveItems_index++
								} else { break }
							};
							scrollTriggerObj.targetElements_aboveView = scrollTriggerObj.targetElements_aboveView.slice(0, -aboveItems_index);

							// check inView items - that would be removed from view
							var removedFromView = [];
							var inViewItems = scrollTriggerObj.targetElements_inView;
							var inViewItems_index = 0;

							for (var i=inViewItems.length-1; i>-1; i--) {
								if (inViewItems[i] && inViewItems[i].getBoundingClientRect().top <= scrollTriggerObj.triggerPoint_btm) {
									removedFromView.push(inViewItems[i]);
									inViewItems_index++
								} else { break }
							};
							scrollTriggerObj.targetElements_inView = scrollTriggerObj.targetElements_inView.slice(0, -belowItems_index);

							removedFromView      .map(x => scrollTriggerObj.targetElements_aboveView.push(x));
							addedToView_fromAbove.map(x => scrollTriggerObj.targetElements_inView   .push(x));

						};

						console.log('above : ', scrollTriggerObj.targetElements_aboveView);
						console.log('inView : ', scrollTriggerObj.targetElements_inView);
						console.log('below : ', scrollTriggerObj.targetElements_belowView);

					};

					function xasd(elem) {

						if (checkTop) {

							// if in-view Elem has left view - scrolled down passed it
							if (elem && elem.getBoundingClientRect().bottom <= scrollTriggerObj.triggerPoint_top) {

								scrollTriggerObj.targetElements_inView.shift(); // remove first item from array
								// run function for 'exit'
								if (scrollTriggerObj.targetElements_inView[0]) { xasd(scrollTriggerObj.targetElements_inView[0]) }

							} else if (target_below && target_below.getBoundingClientRect().top <= scrollTriggerObj.triggerPoint_btm) {



							}

						} else if (checkBtm) {

						}

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