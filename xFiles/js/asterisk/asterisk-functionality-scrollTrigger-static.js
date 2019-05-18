
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.functionality = asterisk.functionality || {} ;

	// Asterisk Effects - [EnterExit]
	// -----------------------------------------------------

		(function(){

			// Effects.Object Setup 
			// -----------------------------------------------------

				asterisk.functionality.scrollTrigger_static = {};
				var scrollTriggerObj = asterisk.functionality.scrollTrigger_static;

				scrollTriggerObj.trigger_btm = Math.ceil(window.innerHeight * 0.85);

				scrollTriggerObj.targetElements = [];
				scrollTriggerObj.furthestScroll = -1;			// stores the furthers the user has scroller -- starts at [-1] for initial check (when scroll might be 0)

				scrollTriggerObj.debounceInterval = 100;		// the interval at which the [checkScroll()] is called
				scrollTriggerObj.isRunning = false;				// 
				scrollTriggerObj.windowWasResized = false;		// when window is resized, run a [triggerPoints_generateMap()] before [triggerPoints_check()]

			// Functionality
			// -----------------------------------------------------

				// triggerPoints_generateMap 
				// -----------------------------------------------------
				// Gets all targets and set them in order (by Y position within the document)
				
					scrollTriggerObj.triggerPoints_generateMap = function( targetArea__element ) {

						var targetArea = targetArea__element || document;

						scrollTriggerObj.targetElements = 
							Array.from(targetArea.getElementsByClassName('scrollTrigger-target'))			// get all elements
							.map(function(item) {
								item.scrollTrigger_triggerPoint_top = item.getBoundingClientRect().top;		// add the [scrollTrigger_triggerPoint_top] property
								return item
							})
							.sort(function(a, b) { 															// sort the array in order
								return a.scrollTrigger_triggerPoint_top - b.scrollTrigger_triggerPoint_top 
							});
					};

				// Check Range - Actual Function that checks and updates Effects on Elements
				// -----------------------------------------------------
				// If the element is in view - run function | remove from array or move to another | run again (now will analize the second elem - and so on)

					scrollTriggerObj.triggerPoints_check = function() {

						var trigger_btm    = scrollTriggerObj.trigger_btm;
						var targetElements = scrollTriggerObj.targetElements;
						var continueCheck  = true;

						while (continueCheck) {

							var target = targetElements[0];

							if (target) {

								if (target.scrollTrigger_triggerPoint_top <= trigger_btm + pageYOffset) {
									scrollTriggerObj.scrollTrigger_apply(target);
									scrollTriggerObj.removeItem();
								} else {
									continueCheck = false;
								}

							} else {
								continueCheck = false;
							}
						};
					};

					// Memory Management -- de-refferences the [obj.elem] HTML Element from the Object
					scrollTriggerObj.removeItem = function(index__number) {
						var index  = index__number || 0;
						scrollTriggerObj.targetElements.splice(index, 1);
					};

				// Check Scroll - checks every xxx miliseconds if update is necesary 
				// -----------------------------------------------------

					scrollTriggerObj.checkScroll = function(){

						if (scrollTriggerObj.windowWasResized) { 
							scrollTriggerObj.trigger_btm = Math.ceil(window.innerHeight * 0.8);
							scrollTriggerObj.trigger_top = Math.ceil(window.innerHeight * 0.2);
							scrollTriggerObj.triggerPoints_generateMap();
							scrollTriggerObj.windowWasResized = false; 
						};

						if (scrollTriggerObj.furthestScroll < pageYOffset) { 
							scrollTriggerObj.furthestScroll = pageYOffset;
							scrollTriggerObj.triggerPoints_check(); 
						};

						setTimeout(function() { scrollTriggerObj.checkScroll() }, scrollTriggerObj.debounceInterval);
					};

				// Function to trigger when Element is scrolled into view
				// -----------------------------------------------------

					scrollTriggerObj.scrollTrigger_apply = function(elem) {
						if (elem.scrollTrigger__onEnterView) { 
							elem.scrollTrigger__onEnterView(elem)
						} else { 
							scrollTriggerObj.onEnterView(elem) 
						}
					};

					scrollTriggerObj.onEnterView = function(elem) {

						elem.style.backgroundColor = 'blue';

						// The default [function-to-trigger] is created, but it's actual content was not defined 
						// You must define the function's content - or the [scrollTrigger] functionality will only display this cute little log :)
						// asterisk.functionality.scrollTrigger.onEnterView 

					};

				scrollTriggerObj.eventHandler__onWindowResize = function() {
					scrollTriggerObj.windowWasResized = true
				};

			// Init
			// -----------------------------------------------------
			
				scrollTriggerObj.init = function() {

					//scrollTriggerObj.currentDocHeight = document.documentElement.scrollHeight;
					scrollTriggerObj.triggerPoints_generateMap();
					scrollTriggerObj.checkScroll();
					scrollTriggerObj.isRunning = true;

					window.addEventListener('resize' , scrollTriggerObj.eventHandler__onWindowResize);
				};

				scrollTriggerObj.init();

		})();