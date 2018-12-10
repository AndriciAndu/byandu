
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
				var spoilerObj = asterisk.components.spoiler;

				// store all [Spoiler] Components that have been given an EventListener
				spoilerObj.initializedItems = [];

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

			// Init (adds eventListeners)
			// -----------------------------------------------------

				spoilerObj.init = function(targetElem, delegateEvent__boolean) {

					if ( targetElem && (targetElem instanceof HTMLElement) ) { 

						if (hasClass(targetElem, 'spoiler-btn')) {

							spoilerObj.attachEvt(targetElem)

						} else if (delegateEvent__boolean === true) {

							spoilerObj.attachEvt(targetElem , 'delegate')

						} else {

							var spoilerBtns = Array.from(targetElem.getElementsByClassName('spoiler-btn'));	
							spoilerBtns.map(spoilerBtn => spoilerObj.attachEvt(targetElem));
						}

					} else if (delegateEvent__boolean === true) {

						spoilerObj.attachEvt(document , 'delegate')

					} else {

						var allSpoilerBtns = Array.from(document.getElementsByClassName('spoiler-btn'));
						allSpoilerBtns.map(spoilerBtn => spoilerObj.attachEvt(targetElem));

					}

				};

				spoilerObj.attachEvt = function(targetElem , scenario__string) {

					// targetElem.removeEventListener('click' , spoilerObj.run);
					// targetElem.removeEventListener('click' , spoilerObj.delegate);



					if (scenario__string == 'delegate') {
						targetElem.addEventListener('click', spoilerObj.delegate);
						spoilerObj.initializedItems.push(targetElem);

					} else {
						targetElem.addEventListener('click', spoilerObj.run);
						spoilerObj.initializedItems.push(targetElem);
					}
				};

			// Delegate (adds eventListeners)
			// -----------------------------------------------------

				spoilerObj.delegate = function(e) {

					if (hasClass(e.target, 'spoiler-btn')) { spoilerObj.run(e) }

				};
					
			// Run 
			// -----------------------------------------------------

				spoilerObj.run = function(e) {

					var spoilerBtn = e.target ;

					var targetParametersObj = spoilerBtn.targetParameters || spoilerObj.spoilerBtn_defineParameters(spoilerBtn , true);

					var targetSpoiler = targetParametersObj.targetSpoiler;
					var targetButtons = targetParametersObj.targetButtons;

					if (targetSpoiler) {

						// collapsing animation
						if (hasClass(targetSpoiler , 'spoiler-expanded')) { 

							spoilerObj.collapse(targetSpoiler);
							targetButtons.map((btn) => btn.classList.remove('active'));

						// expanding animation
						} else {

							spoilerObj.expand(targetSpoiler);
							targetButtons.map((btn) => btn.classList.add('active'));		// update  buttons  status

						}

					} else {

						console.log(
							'No [spoiler] element with [data-spoiler-id="'+spoilerBtn.getAttribute('data-spoiler-id')+'"] found within document.' + 
							' Event triggered by [spoiler-btn] : ' , spoilerBtn );

					}
				};

			// Intermediary
			// -----------------------------------------------------

				// Values
				// -----------------------------------------------------

					spoilerObj.intermediary = {};

					spoilerObj.transitionDuration = 300;

				// Expand
				// -----------------------------------------------------

					spoilerObj.expand = function(targetSpoiler) {

						setTimeout(function(){ 

							// set the maxHeight to transition to
							targetSpoiler.style.maxHeight = spoilerObj.getMaxHeightValue(targetSpoiler);	

							// after the transition has finished - remove/default the max-height
							// this allows the expanded-spoiler to adapt to other expanding/collapsing children
							setTimeout(function(){ 
								if (hasClass(targetSpoiler , 'spoiler-expanded')) { // don't fire in case the spoiler was clicked rapidly => and is coapsing by the time this fires
									targetSpoiler.style.maxHeight = 'none';
									targetSpoiler.style.overflow  = 'visible';
								}
							}, spoilerObj.transitionDuration);
						}, 0);

						targetSpoiler.classList.add('spoiler-expanded');
					};

				// Collapse
				// -----------------------------------------------------

					spoilerObj.collapse = function(targetSpoiler) {

						// set [maxHeight: 'it's actual height'] (as it defaults to 'none' after expand transition)
						targetSpoiler.style.maxHeight = spoilerObj.getMaxHeightValue(targetSpoiler); 
						targetSpoiler.style.overflow  = 'hidden';

						// defer and set [maxHeight: 0] , for the transition to take place
						setTimeout(function(){ 
							targetSpoiler.style.maxHeight = 0 
						}, 16);	
						
						targetSpoiler.classList.remove('spoiler-expanded');
					};

				// getMaxHeightValue
				// -----------------------------------------------------

					spoilerObj.getMaxHeightValue = function(targetSpoiler) {
						var spoiler_content = targetSpoiler.getElementsByClassName('spoiler-content')[0];

						var margin_top = parseInt(getComputedStyle(spoiler_content, null).getPropertyValue("margin-top"));
						var margin_btm = parseInt(getComputedStyle(spoiler_content, null).getPropertyValue("margin-bottom"));
						var content_height = spoiler_content.offsetHeight;

						return (content_height + margin_top + margin_btm) + 'px';
					};

				// Define Parameters
				// -----------------------------------------------------
				// Performance - skip checking document (for target-elements : spoiler | spoiler-btn) on each function call

					// Will set the target parameters for each [spoiler-btn]
					// will run automatically on first spoiler-btn click
					// will be more efficient for future calls there-after

					spoilerObj.spoilerBtn_defineParameters = function(current_spoilerBtn , willReturnTheObject__boolean) {

						if (!current_spoilerBtn.targetParameters) {

							current_spoilerBtn.targetParameters = {};

							var targetId = current_spoilerBtn.getAttribute('data-spoiler-id');

							// targetSpoiler - which [spoiler] will be affected
							var spoilers = Array.from(document.getElementsByClassName('spoiler'));
							current_spoilerBtn.targetParameters.targetSpoiler = spoilers.filter(spoiler => spoiler.getAttribute('data-spoiler-id') === targetId )[0];

							// targetButtons - which [spoiler buttons] point to the same [spoiler]
							var spoilerButtons = Array.from(document.getElementsByClassName('spoiler-btn'));
							current_spoilerBtn.targetParameters.targetButtons = spoilerButtons.filter(spoilerBtn => spoilerBtn.getAttribute('data-spoiler-id') === targetId );

							// return the newly-created object - for use in spoilerObj.run()
							if (willReturnTheObject__boolean === true) { return current_spoilerBtn.targetParameters }

						}
					};

				// Run initial parameter-definition (optional || not recommended if dynamically-generated content)
				// Best called as one of the final functions in the scripts 
				// -----------------------------------------------------

					spoilerObj.spoilerBtn_defineParameters_all = function() {

						var spoilerButtons = Array.from(document.getElementsByClassName('spoiler-btn'));
						spoilerButtons.map(btn => asterisk.components.spoiler.spoilerBtn_defineParameters(btn));

					};

			// Remove EventListeners
			// -----------------------------------------------------

				// detachEvt
				// -----------------------------------------------------

					spoilerObj.detachEvt = function(targetElem) {
						targetElem.removeEventListener('click' , spoilerObj.run);
						targetElem.removeEventListener('click' , spoilerObj.delegate);
					};

				// checkDOM
				// -----------------------------------------------------

					spoilerObj.checkDOM = function() {
						console.log('----------')
						console.log(spoilerObj.initializedItems)
						spoilerObj.initializedItems = spoilerObj.initializedItems.filter(function(item){

							if ((item !== document) && (!document.contains(item)) ) {
								console.log('removed', item)
								spoilerObj.detachEvt(item)
							} else {
								console.log('kept', item)
								return true
							}
						})
					};

		})();