
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

			// Wrappers
			// -----------------------------------------------------

				asterisk.components.spoiler.intermediary     = {}; // holds intermediary [functions/methods]
				asterisk.components.spoiler.storedParameters = {}; // holds [Elements] which have been altered (with [evtListener] or [on-elem parameters])

			// store all Elements that have been given an EventListener
			// -----------------------------------------------------

				asterisk.components.spoiler.storedParameters.itemsWithEvents = [];

			// store all [Spoiler-btn] Elements that have been given on-element Parameters
			// -----------------------------------------------------

				asterisk.components.spoiler.storedParameters.itemsWithParams = [];

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

			// Main Functions
			// -----------------------------------------------------

				// Activate (adds eventListeners)
				// -----------------------------------------------------

					asterisk.components.spoiler.activate = function(targetElem, delegateEvent__boolean) {

						var methods = asterisk.components.spoiler.intermediary;

						if (targetElem && (targetElem instanceof HTMLElement)) { 

							if (hasClass(targetElem, 'spoiler-btn')) {

								methods.attachEvt(targetElem)

							} else if (delegateEvent__boolean === true) {

								methods.attachEvt(targetElem , 'delegate')

							} else {

								var spoilerBtns = Array.from(targetElem.getElementsByClassName('spoiler-btn'));	
								spoilerBtns.map(spoilerBtn => methods.attachEvt(spoilerBtn));
							}

						} else if (delegateEvent__boolean === true) {

							methods.attachEvt(document , 'delegate')

						} else {

							var allSpoilerBtns = Array.from(document.getElementsByClassName('spoiler-btn'));
							allSpoilerBtns.map(spoilerBtn => methods.attachEvt(spoilerBtn));

						}
					};

				// Terminate (removes eventListeners & on-element Parameters)
				// -----------------------------------------------------

					asterisk.components.spoiler.terminate = function(targetElem) {

						var methods = asterisk.components.spoiler.intermediary;
						var itemsWithParams = asterisk.components.spoiler.storedParameters.itemsWithParams;

						if (targetElem && (targetElem instanceof HTMLElement)) { 

							if (hasClass(targetElem, 'spoiler-btn')) {

								methods.terminateTarget(targetElem)

							} else {

								methods.detachEvt(targetElem);
								var spoilerBtns = Array.from(targetElem.getElementsByClassName('spoiler-btn'));	
								spoilerBtns.map(spoilerBtn => methods.terminateTarget(spoilerBtn));
							}

						} else {

							methods.detachEvt(document);
							var allSpoilerBtns = Array.from(document.getElementsByClassName('spoiler-btn'));
							allSpoilerBtns.map(spoilerBtn => methods.terminateTarget(spoilerBtn));

						}
					};

					asterisk.components.spoiler.intermediary.terminateTarget = function(targetElem) {
						asterisk.components.spoiler.intermediary.detachEvt(targetElem);
						asterisk.components.spoiler.intermediary.spoilerBtn_removeParameters(targetElem);
					};

				// checkDOM
				// -----------------------------------------------------

					asterisk.components.spoiler.checkDOM = function() { console.log('checking DOM for spoiler');

						// remove EventListeners from Elements that are no longer in the DOM
						asterisk.components.spoiler.storedParameters.itemsWithEvents = asterisk.components.spoiler.storedParameters.itemsWithEvents.filter(function(item){

							if ((item !== document) && (!document.contains(item)) ) {
								asterisk.components.spoiler.intermediary.detachEvt(item);
								console.log('Removed item : ', item)
								return false
							} else {
								return true
							}
						});

						// remove Eon-element Parameters from Elements that are no longer in the DOM
						asterisk.components.spoiler.storedParameters.itemsWithParams = asterisk.components.spoiler.storedParameters.itemsWithParams.filter(function(item){

							if ((item !== document) && (!document.contains(item)) ) {
								item.targetParameters = null;
								return false
							} else {
								return true
							}
						});
					};

			// Intermediary
			// -----------------------------------------------------

				// Add/Remove | Event Listeners
				// -----------------------------------------------------

					// attatchEvt
					// -----------------------------------------------------

						asterisk.components.spoiler.intermediary.attachEvt = function(targetElem , scenario__string) {

							if (scenario__string == 'delegate') {
								targetElem.addEventListener('click', asterisk.components.spoiler.intermediary.delegate);
							} else {
								targetElem.addEventListener('click', asterisk.components.spoiler.intermediary.run);
							};

							asterisk.components.spoiler.storedParameters.itemsWithEvents.push(targetElem);
						};

					// Delegate (adds eventListeners)
					// -----------------------------------------------------

						asterisk.components.spoiler.intermediary.delegate = function(e) {
							if (hasClass(e.target, 'spoiler-btn')) { asterisk.components.spoiler.intermediary.run(e) }
						};

					// detachEvt
					// -----------------------------------------------------

						asterisk.components.spoiler.intermediary.detachEvt = function(targetElem) {
							targetElem.removeEventListener('click' , asterisk.components.spoiler.intermediary.run);
							targetElem.removeEventListener('click' , asterisk.components.spoiler.intermediary.delegate);

							asterisk.components.spoiler.storedParameters.itemsWithEvents = asterisk.components.spoiler.storedParameters.itemsWithEvents.filter(x => x != targetElem);
						};

				// Add/Remove | On-Element Parameters
				// -----------------------------------------------------
					
					// Define Parameters
					// -----------------------------------------------------

						asterisk.components.spoiler.intermediary.spoilerBtn_defineParameters = function(current_spoilerBtn , willReturnTheObject__boolean) {

							current_spoilerBtn.targetParameters = {};

							var targetId = current_spoilerBtn.getAttribute('data-spoiler-id');

							var spoilers = Array.from(document.getElementsByClassName('spoiler'));
							current_spoilerBtn.targetParameters.targetSpoiler = spoilers.filter(spoiler => spoiler.getAttribute('data-spoiler-id') === targetId )[0];

							var spoilerButtons = Array.from(document.getElementsByClassName('spoiler-btn'));
							current_spoilerBtn.targetParameters.targetButtons = spoilerButtons.filter(spoilerBtn => spoilerBtn.getAttribute('data-spoiler-id') === targetId );

							if (!asterisk.components.spoiler.storedParameters.itemsWithParams.includes(current_spoilerBtn)) {
								 asterisk.components.spoiler.storedParameters.itemsWithParams.push(current_spoilerBtn)
							};

							// return the newly-created object - for use in asterisk.components.spoiler.intermediary.run()
							if (willReturnTheObject__boolean === true) { return current_spoilerBtn.targetParameters }
						};

					// Remove Defined Parameters
					// -----------------------------------------------------

						asterisk.components.spoiler.intermediary.spoilerBtn_removeParameters = function(current_spoilerBtn) {
							current_spoilerBtn.targetParameters = null;
							var itemsWithParams = asterisk.components.spoiler.storedParameters.itemsWithParams;
							itemsWithParams = itemsWithParams.filter(x => x != targetElem);
						};

				// Run 
				// -----------------------------------------------------

					asterisk.components.spoiler.intermediary.run = function(e) {

						var targetParametersObj = e.target.targetParameters || asterisk.components.spoiler.intermediary.spoilerBtn_defineParameters(e.target , true);

						var targetSpoiler = targetParametersObj.targetSpoiler;
						var targetButtons = targetParametersObj.targetButtons;

						if (targetSpoiler) {

							var spoiler_content = targetSpoiler.getElementsByClassName('spoiler-content')[0];
							targetSpoiler.style.maxHeight = getHeight(spoiler_content) + 'px';

							if (hasClass(targetSpoiler , 'spoiler--expanded')) { // collapsing animation
								setTimeout(function(){ targetSpoiler.style.maxHeight = 0 }, 16);
								targetButtons.map((btn) => btn.classList.remove('active'));
							} else {
								targetButtons.map((btn) => btn.classList.add('active'));
							};
								
							targetSpoiler.classList.toggle('spoiler--expanded');

						} else {

							console.log(
								'No [spoiler] element with [data-spoiler-id="'+e.target.getAttribute('data-spoiler-id')+'"] found within document.' + 
								' Event triggered by [spoiler-btn] : ' , e.target );

						};
					};

		})();