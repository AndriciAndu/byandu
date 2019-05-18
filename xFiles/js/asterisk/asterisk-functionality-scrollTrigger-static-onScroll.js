
	// you have a static page:
	// -- all target elements are present - no new elements will be aded after init(), which would require a recalc of the triggerPointsMap
	// -- no non-target elements will be added removed - which might offset the position of the targets
	// -- there are no changes in document height - aka collapsible menus / tabs with varying heights - which might offset the position of the targets
	// >> this allows for the elements to be stored in order, with their position stored in memory from the very start

	// you have a semi-static page :
	// -- all target elements are present - no target elements will be added or removed
	// -- non-target elements might be removed or added - but the target elements still keep their 'ORDER'
	// -- changes in document height might occur - aka collapsible menus / tabs with varying heights - but the target elements still keep their 'ORDER'
	// >> this allows for the target elements to be stored in order, and allows for checking only 

	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.functionality = asterisk.functionality || {} ;

	// Asterisk Effects - [EnterExit]
	// -----------------------------------------------------

		(function(){

				asterisk.functionality.scrollTrigger_static = {};

			// Effects.Object Setup 
			// -----------------------------------------------------

				asterisk.functionality.scrollTrigger_static.targetElements   = [];
				asterisk.functionality.scrollTrigger_static.trigger_btm      = Math.ceil(window.innerHeight * 0.85); 
				asterisk.functionality.scrollTrigger_static.furthestScroll   = -1; 
				asterisk.functionality.scrollTrigger_static.windowWasResized = false;
				asterisk.functionality.scrollTrigger_static.debounceInterval = 100;
				asterisk.functionality.scrollTrigger_static.debounceInterval_hasPassed = true;

			// Functionality
			// -----------------------------------------------------

				// triggerPoints_generateMap 
				// -----------------------------------------------------
				// Gets all targets and set them in order (by Y position within the document)
				
					asterisk.functionality.scrollTrigger_static.triggerPoints_generateMap = function( targetArea__element ) {

						var targetArea = targetArea__element || document;

						asterisk.functionality.scrollTrigger_static.targetElements = 
							Array.from(targetArea.getElementsByClassName('scrollTrigger-target'))						// get all elements
							.map(function(item) {
								var elemOffset = item.getAttribute('data-scrollTrigget-offset') || 0;
								item.scrollTrigger_triggerPoint_top = item.getBoundingClientRect().top - elemOffset;	// add the [scrollTrigger_triggerPoint_top] property
								return item
							})
							.sort(function(a, b) { 																		// sort the array in order
								return a.scrollTrigger_triggerPoint_top - b.scrollTrigger_triggerPoint_top 
							});
					};

				// Check Range - Actual Function that checks and updates Effects on Elements
				// -----------------------------------------------------
				// If the element is in view - run function | remove from array or move to another | run again (now will analize the second elem - and so on)

					asterisk.functionality.scrollTrigger_static.triggerPoints_check = function() {

						var scrollTrigger_static = asterisk.functionality.scrollTrigger_static;

						var trigger_btm    = scrollTrigger_static.trigger_btm;
						var targetElements = scrollTrigger_static.targetElements;
						var continueCheck  = true;
						var targetsToTrigger = [];

						while (continueCheck) {

							var target = targetElements[0];

							if (target) {

								if (target.scrollTrigger_triggerPoint_top <= trigger_btm + pageYOffset) {
									targetsToTrigger.push(target);
									scrollTrigger_static.targetElements.shift();
								} else {
									continueCheck = false;
								}

							} else {
								continueCheck = false;
								asterisk.functionality.scrollTrigger_static.end();
							}
						};

						targetsToTrigger.map(function(target) { target.classList.remove('scrollTrigger-target')  });
						targetsToTrigger.map(function(target) { scrollTrigger_static.scrollTrigger_apply(target) });
									
					};

				// Check Scroll - checks every xxx miliseconds if update is necesary 
				// -----------------------------------------------------

					asterisk.functionality.scrollTrigger_static.checkScroll = function(){

						var scrollTrigger_static = asterisk.functionality.scrollTrigger_static;

						if (scrollTrigger_static.windowWasResized) { 
							scrollTrigger_static.trigger_btm = Math.ceil(window.innerHeight * 0.8);
							scrollTrigger_static.trigger_top = Math.ceil(window.innerHeight * 0.2);
							scrollTrigger_static.triggerPoints_generateMap();
							scrollTrigger_static.windowWasResized = false; 
						};

						if (scrollTrigger_static.furthestScroll < pageYOffset) { 
							scrollTrigger_static.furthestScroll = pageYOffset;
							scrollTrigger_static.triggerPoints_check(); 
						};

					};

				// Function to trigger when Element is scrolled into view
				// -----------------------------------------------------

					asterisk.functionality.scrollTrigger_static.scrollTrigger_apply = function(elem) {
						if (elem.scrollTrigger__onEnterView) { 
							elem.scrollTrigger__onEnterView(elem)
						} else { 
							asterisk.functionality.scrollTrigger_static.onEnterView(elem) 
						}
					};

					asterisk.functionality.scrollTrigger_static.onEnterView = function(elem) {

						elem.style.backgroundColor = 'blue';

						// The default [function-to-trigger] is created, but it's actual content was not defined 
						// You must define the function's content - or the [scrollTrigger] functionality will only display this cute little log :)
						// asterisk.functionality.scrollTrigger.onEnterView 

					};

				asterisk.functionality.scrollTrigger_static.eventHandler__onWindowResize = function() {
					asterisk.functionality.scrollTrigger_static.windowWasResized = true
				};

				asterisk.functionality.scrollTrigger_static.eventHandler__onWindowScroll = function() { 

					var scrollTrigger_static = asterisk.functionality.scrollTrigger_static;

					if (scrollTrigger_static.debounceInterval_hasPassed) { 
						scrollTrigger_static.debounceInterval_hasPassed = false;
						
						setTimeout(function() { 
							asterisk.functionality.scrollTrigger_static.checkScroll();
							asterisk.functionality.scrollTrigger_static.debounceInterval_hasPassed = true;
						},  scrollTrigger_static.debounceInterval)
					}
				};

			// Init
			// -----------------------------------------------------
			
				asterisk.functionality.scrollTrigger_static.init = function() {

					var scrollTrigger_static = asterisk.functionality.scrollTrigger_static;
					//asterisk.functionality.scrollTrigger_static.currentDocHeight = document.documentElement.scrollHeight;
					scrollTrigger_static.triggerPoints_generateMap();
					scrollTrigger_static.checkScroll();

					window.addEventListener('resize' , asterisk.functionality.scrollTrigger_static.eventHandler__onWindowResize);
					window.addEventListener('scroll' , asterisk.functionality.scrollTrigger_static.eventHandler__onWindowScroll);
				};

				asterisk.functionality.scrollTrigger_static.end = function() {
					window.addEventListener('resize' , asterisk.functionality.scrollTrigger_static.eventHandler__onWindowResize);
					window.addEventListener('scroll' , asterisk.functionality.scrollTrigger_static.eventHandler__onWindowScroll);
					asterisk.functionality.scrollTrigger_static.targetElements = [];
				};

				asterisk.functionality.scrollTrigger_static.init();

		})();