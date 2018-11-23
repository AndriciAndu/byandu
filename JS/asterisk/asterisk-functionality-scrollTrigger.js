
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;
		asteriskObj.functionality = asteriskObj.functionality || {} ;

	// Asterisk Effects - [EnterExit]
	// -----------------------------------------------------

		(function(){

			// Effects.Object Setup 
			// -----------------------------------------------------

				asteriskObj.functionality.scrollTrigger = {};
				var scrollTriggerObj = asteriskObj.functionality.scrollTrigger;

				scrollTriggerObj.targetElements = [];				// stores the [Elements] that are to-be-affected
				scrollTriggerObj.debounceInterval  = 300;			// the interval at which the [checkScroll()] is called
				scrollTriggerObj.isRunning = false;					// 
				scrollTriggerObj.refreshTargetElements = false;		// when window is resized, run a [triggerPoints_generateMap()] before [triggerPoints_check()]

			// Functionality
			// -----------------------------------------------------

				// triggerPoints_generateMap 
				// -----------------------------------------------------
				// Gets all targets and set them in order (by Y position within the document)
				// Creates an ordered Array : [scrollTriggerObj.targetElements] - acts as a 'coordinate map'
				
					scrollTriggerObj.triggerPoints_generateMap = function() {

						var scrollTrigger_targets = Array.from(document.getElementsByClassName('scrollTrigger-target'));

						if (scrollTrigger_targets.length > 0) {

							scrollTrigger_targets.sort(function(a, b) { 
								return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
							});
						};

						scrollTriggerObj.targetElements = scrollTrigger_targets;
					};

				// Check Range - Actual Function that checks and updates Effects on Elements
				// -----------------------------------------------------
				// If the element is in view - run function | remove from array | run again (now will analize the second elem - and so on)

					scrollTriggerObj.triggerPoints_check = function() {

						var targetElem = scrollTriggerObj.targetElements[0];

						if (targetElem) {

							var elem_triggerPoint = targetElem.getBoundingClientRect().top; 
							var view_triggerPoint = window.innerHeight * 0.8 + window.pageYOffset;
							var elem_isInView     = (elem_triggerPoint <= view_triggerPoint);

							if (elem_isInView) {
								scrollTriggerObj.scrollTrigger_apply(targetElem);
								scrollTriggerObj.targetElements.shift();
								targetElem.classList.remove('scrollTrigger-target');
								scrollTriggerObj.triggerPoints_check();
							}
						}
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

						if (scrollTriggerObj.refreshTargetElements) { 
							scrollTriggerObj.triggerPoints_generateMap();
							scrollTriggerObj.refreshTargetElements = false ; 
						};

						scrollTriggerObj.triggerPoints_check();

						if (scrollTriggerObj.targetElements.length > 0) { 
							setTimeout(function() { scrollTriggerObj.checkScroll() }, scrollTriggerObj.debounceInterval);
						}

					};

					/*scrollTriggerObj.checkDocHeight = function() {
						return scrollTriggerObj.currentDocHeight != document.documentElement.scrollHeight 
					};*/

				// Function to trigger when Element is scrolled into view
				// -----------------------------------------------------

					scrollTriggerObj.scrollTrigger_apply = function(elem) {

						var elem_triggerFunction = elem.triggerFunction;

						if (elem_triggerFunction && elem_triggerFunction instanceof Function) 	{ elem_triggerFunction() 				} 
						else 																	{ scrollTriggerObj.triggerFunction() 	}

					};

					scrollTriggerObj.triggerFunction = function() {

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
						scrollTriggerObj.refreshTargetElements = true 
					})
				};

				// scrollTriggerObj.init();

		})();