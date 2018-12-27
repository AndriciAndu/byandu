
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.components = asterisk.components || {} ;

	// Asterisk Component - [Spoiler]
	// ------------------------------------------------------------------

		(function(){

			// Component.Object Setup 
			// -----------------------------------------------------

				asterisk.components.spoiler = {};

				// store all [Spoiler-btn] Elements that have been given an EventListener / on-element attribute refferences
				asterisk.components.spoiler.itemsWithEvents = [];
				asterisk.components.spoiler.itemsWithParams = [];

			// Dependencies 
			// -----------------------------------------------------

				// [asterisk.utility] init 
				// -----------------------------------------------------

					asterisk.utility = asterisk.utility || {} ;

				// hasClass()
				// -----------------------------------------------------

					asterisk.utility.hasClass = asterisk.utility.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asterisk.utility.hasClass;

				// getHeight()
				// -----------------------------------------------------

					asterisk.utility.getHeight = asterisk.utility.getHeight || function ( elem ) {
						return (elem.offsetHeight +
						parseInt(getComputedStyle(elem, null).getPropertyValue("margin-top")) +
						parseInt(getComputedStyle(elem, null).getPropertyValue("margin-bottom")))
					};

					var getHeight = asterisk.utility.getHeight ;

			// Init (adds eventListeners)
			// -----------------------------------------------------

				asterisk.components.spoiler.initialize = function(targetElem, delegateEvent__boolean) {

					if (targetElem && (targetElem instanceof HTMLElement)) { 

						if (hasClass(targetElem, 'spoiler-btn')) {

							asterisk.components.spoiler.attachEvt(targetElem)

						} else if (delegateEvent__boolean === true) {

							asterisk.components.spoiler.attachEvt(targetElem , 'delegate')

						} else {

							var spoilerBtns = Array.from(targetElem.getElementsByClassName('spoiler-btn'));	
							spoilerBtns.map(spoilerBtn => asterisk.components.spoiler.attachEvt(spoilerBtn));
						}

					} else if (delegateEvent__boolean === true) {

						asterisk.components.spoiler.attachEvt(document , 'delegate')

					} else {

						var allSpoilerBtns = Array.from(document.getElementsByClassName('spoiler-btn'));
						allSpoilerBtns.map(spoilerBtn => asterisk.components.spoiler.attachEvt(spoilerBtn));

					}

				};

				asterisk.components.spoiler.attachEvt = function(targetElem , scenario__string) {

					if (scenario__string == 'delegate') {
						targetElem.addEventListener('click', asterisk.components.spoiler.delegate);
					} else {
						targetElem.addEventListener('click', asterisk.components.spoiler.run);
					};

					asterisk.components.spoiler.itemsWithEvents.push(targetElem);
				};

			// Delegate (adds eventListeners)
			// -----------------------------------------------------

				asterisk.components.spoiler.delegate = function(e) {
					if (hasClass(e.target, 'spoiler-btn')) { asterisk.components.spoiler.run(e) }
				};
					
			// Run 
			// -----------------------------------------------------

				asterisk.components.spoiler.run = function(e) {

					var targetParametersObj = e.target.targetParameters || asterisk.components.spoiler.intermediary.spoilerBtn_defineParameters(e.target , true);

					var targetSpoiler = targetParametersObj.targetSpoiler;
					var targetButtons = targetParametersObj.targetButtons;

					if (targetSpoiler) {

						var spoiler_content = targetSpoiler.getElementsByClassName('spoiler-content')[0];
						targetSpoiler.style.maxHeight = getHeight(spoiler_content) + 'px';
						targetButtons.map((btn) => btn.classList.remove('active'));

						if (hasClass(targetSpoiler , 'spoiler--expanded')) { // collapsing animation
							setTimeout(function(){ targetSpoiler.style.maxHeight = 0 }, 16);
						};
							
						targetSpoiler.classList.toggle('spoiler--expanded');

					} else {

						console.log(
							'No [spoiler] element with [data-spoiler-id="'+e.target.getAttribute('data-spoiler-id')+'"] found within document.' + 
							' Event triggered by [spoiler-btn] : ' , e.target );

					};

					console.log(asterisk.components.spoiler.itemsWithParams)
				};

			// Intermediary
			// -----------------------------------------------------

				// Values
				// -----------------------------------------------------

					asterisk.components.spoiler.intermediary = {};

				// Define Parameters
				// -----------------------------------------------------
				// Performance - skip checking document (for target-elements : spoiler | spoiler-btn) on each function call

					// Will set the target parameters for each [spoiler-btn]
					// will run automatically on first spoiler-btn click
					// will be more efficient for future calls there-after

					asterisk.components.spoiler.intermediary.spoilerBtn_defineParameters = function(current_spoilerBtn , willReturnTheObject__boolean) {

						if (!current_spoilerBtn.targetParameters) {

							current_spoilerBtn.targetParameters = {};

							var targetId = current_spoilerBtn.getAttribute('data-spoiler-id');

							// targetSpoiler - which [spoiler] will be affected
							var spoilers = Array.from(document.getElementsByClassName('spoiler'));
							current_spoilerBtn.targetParameters.targetSpoiler = spoilers.filter(spoiler => spoiler.getAttribute('data-spoiler-id') === targetId )[0];

							// targetButtons - which [spoiler buttons] point to the same [spoiler]
							var spoilerButtons = Array.from(document.getElementsByClassName('spoiler-btn'));
							current_spoilerBtn.targetParameters.targetButtons = spoilerButtons.filter(spoilerBtn => spoilerBtn.getAttribute('data-spoiler-id') === targetId );

							asterisk.components.spoiler.itemsWithParams.push(current_spoilerBtn);

							// return the newly-created object - for use in asterisk.components.spoiler.run()
							if (willReturnTheObject__boolean === true) { return current_spoilerBtn.targetParameters }

						}
					};

				// Run initial parameter-definition (optional || not recommended if dynamically-generated content)
				// Best called as one of the final functions in the scripts 
				// -----------------------------------------------------

					asterisk.components.spoiler.intermediary.spoilerBtn_defineParameters_all = function() {
						var spoilerButtons = Array.from(document.getElementsByClassName('spoiler-btn'));
						spoilerButtons.map(btn => asterisk.components.spoiler.spoilerBtn_defineParameters(btn));
					};

			// Remove EventListeners
			// -----------------------------------------------------

				// detachEvt
				// -----------------------------------------------------

					asterisk.components.spoiler.detachEvt = function(targetElem) {
						targetElem.removeEventListener('click' , asterisk.components.spoiler.run);
						targetElem.removeEventListener('click' , asterisk.components.spoiler.delegate);
					};

				// checkDOM
				// -----------------------------------------------------

					asterisk.components.spoiler.checkDOM = function() { console.log('checking DOM for spoiler');

						// remove EventListeners from Elements that are no longer in the DOM
						asterisk.components.spoiler.itemsWithEvents = asterisk.components.spoiler.itemsWithEvents.filter(function(item){

							if ((item !== document) && (!document.contains(item)) ) {
								asterisk.components.spoiler.detachEvt(item);
								console.log('Removed item : ', item)
								return false
							} else {
								return true
							}
						});

						// remove Eon-element Parameters from Elements that are no longer in the DOM
						asterisk.components.spoiler.itemsWithParams = asterisk.components.spoiler.itemsWithParams.filter(function(item){

							if ((item !== document) && (!document.contains(item)) ) {
								item.targetParameters = null;
								return false
							} else {
								return true
							}
						});

					};

		})();