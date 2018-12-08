
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.effects = asterisk.effects || {} ;

	// Asterisk Effects - [EnterExit]
	// -----------------------------------------------------

		(function(){

			// Effects.Object Setup 
			// -----------------------------------------------------

				asterisk.effects.appear = {};
				var appearEffectsObj = asterisk.effects.appear;

				appearEffectsObj.targetElements = [];

			// Dependencies 
			// -----------------------------------------------------

				asterisk.utility = asterisk.utility || {} ;

				// hasClass()
				// -----------------------------------------------------

					asterisk.utility.hasClass = asterisk.utility.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1; 
					};

					var hasClass = asterisk.utility.hasClass ;

			// Intermediary
			// -----------------------------------------------------

				// Apply the actual effect on an Element (will apply on call)
				// -----------------------------------------------------

					appearEffectsObj.target_applyEffect = function(targetElem) { 

						// if sequence
						if (hasClass(targetElem, 'effectsContainer-sequence')) {

							var targets = Array.from(targetElem.getElementsByClassName('hasAppearEffect'));
							var delay 	= targetElem.getAttribute('data-appearEffects-delay') || false ;
							var random 	= targetElem.getAttribute('data-appearEffects-randomOrder') === 'true';

							// random order in which items will appear
							if (random) { targets = targets.sort(function() { return 0.5 - Math.random() }) };

							if (delay) {
								var index = 0;
								targets.map(function(item) {
									setTimeout( function(){ item.classList.add('appearEffects-apply') }, delay * index);
									index++ 
								})
							} else {
								targets.map(item => item.classList.add('appearEffects-apply') )
							}

						// if singular Element
						} else {
							targetElem.classList.add('appearEffects-apply')
						};

					};

				// Check Range - Actual Function that checks and updates Effects on Elements
				// -----------------------------------------------------

					appearEffectsObj.checkRange = function() {

						var targetElem = appearEffectsObj.targetElements[0];

						if (targetElem) {

							var elem_Ytop = targetElem.getBoundingClientRect().top; 
							var page_Ytop = window.innerHeight * 0.8 + window.pageYOffset;

							if (elem_Ytop < page_Ytop) {
								appearEffectsObj.target_applyEffect(targetElem);
								appearEffectsObj.targetElements.shift();
								appearEffectsObj.checkRange();
							}
						}
					};

			// Functionality
			// -----------------------------------------------------

				// Generate Range - Initialization of all required parameters
				// -----------------------------------------------------
				
					appearEffectsObj.generateRange = function() {

						/*
							1. Get all containers
								- for each - check if they have items (elements to be shown)
									- if they do - create [entry]
										- add 'sequenced' class to each item that was stored

								- all child items will take effect on parent trigger

							2. Get all items
								- filter out those with the 'sequenced' class
									- if any are left after filter - create [entry], store that item

								- all individual items will take effect on individual trigger

							3. Sort the array in ascending numerical order

							*/

						// Generate 'Containers' Objects
						// -----------------------------------------------------

							var sequences_all = Array.from(document.getElementsByClassName('effectsContainer-sequence'));

							var sequences_scrollTriggered = sequences_all.filter( function(sequence) { 
								return !hasClass(sequence, 'appear-customTrigger') 
							});

							sequences_scrollTriggered.map(function(sequence){
								var targetElements = Array.from(sequence.getElementsByClassName('hasAppearEffect'));
								targetElements.map(elem => elem.classList.add('appearEffects-sequenced') );
								appearEffectsObj.targetElements.push(sequence);
							});

						// Generate 'Individual' Objects
						// -----------------------------------------------------

							var elements_all = Array.from(document.getElementsByClassName('hasAppearEffect'));

							elements_scrollTriggered = elements_all.filter(function(item){ 
								return (!hasClass(item, 'appearEffects-sequenced') && !hasClass(item, 'appear-customTrigger'))
							});

							elements_scrollTriggered.map(function(elem){
								appearEffectsObj.targetElements.push(elem);
							});

						// Sort the appearEffectsObj.targetElements array, ascending, by Y position within the document
						// -----------------------------------------------------

							appearEffectsObj.targetElements.sort(function(a, b) { 
								return parseFloat(a.getBoundingClientRect().top) - parseFloat(b.getBoundingClientRect().top) 
							});

					};

				// Check Scroll - checks every xxx miliseconds if update is necesary - stops when all elements have been updated
				// -----------------------------------------------------
			
					appearEffectsObj.checkScroll = function(){ 
						setTimeout(function(){
							appearEffectsObj.checkRange();
							if (appearEffectsObj.targetElements.length > 0) { appearEffectsObj.checkScroll() }
						}, 300);
					};

			// Init
			// -----------------------------------------------------
			
				appearEffectsObj.init = function() {
					appearEffectsObj.generateRange();
					appearEffectsObj.checkScroll();
				};

				// appearEffectsObj.init();

		})();