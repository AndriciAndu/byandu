
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

				spoilerObj.transitionDuration = 300;

			// Dependencies 
			// -----------------------------------------------------

				asterisk.utility = asterisk.utility || {} ;

				// hasClass()
				// -----------------------------------------------------

					asterisk.utility.hasClass = asterisk.utility.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asterisk.utility.hasClass;

			// Init
			// -----------------------------------------------------

				spoilerObj.init = function(current_target, delegateEventListener) {

					if (current_target) { 

						if (hasClass(current_target, 'spoiler-btn')) {

							spoilerObj.activate(current_target) 

						} else if (delegateEventListener === true) {

							spoilerObj.delegate(current_target)

						} else { 

							var spoilerBtns = Array.from(current_target.getElementsByClassName('spoiler-btn'));	
							spoilerBtns.map(spoilerBtn => spoilerObj.activate(spoilerBtn));

						}

					} else {

						var allSpoilerBtns = Array.from(document.getElementsByClassName('spoiler-btn'));
						allSpoilerBtns.map(spoilerBtn => spoilerObj.activate(spoilerBtn));

					}

				};

			// Activate 
			// -----------------------------------------------------

				spoilerObj.activate = function(current_target) {

					current_target.addEventListener('click', function() { 
						spoilerObj.run(this) 
					})

				};

			// Delegate
			// -----------------------------------------------------

				spoilerObj.delegate = function(current_target) {

					current_target.addEventListener('click', function(e) {
						if (hasClass(e.target, 'spoiler-btn')) { spoilerObj.run(e.target) }
					})

				};
					
			// Run
			// -----------------------------------------------------

				spoilerObj.run = function(current_spoilerBtn) {

					var targetParametersObj = current_spoilerBtn.targetParameters || spoilerObj.spoilerBtn_defineParameters(current_spoilerBtn , true);

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
							'No [spoiler] element with [data-spoiler-id="'+current_spoilerBtn.getAttribute('data-spoiler-id')+'"] found within document.' + 
							' Event triggered by [spoiler-btn] : ' , current_spoilerBtn );

					}
				};

				// Intermediary
				// -----------------------------------------------------

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

				spoilerObj.spoilerBtn_defineParameters = function(current_spoilerBtn , willReturnTheObject) {

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
						if (willReturnTheObject === true) { return current_spoilerBtn.targetParameters }

					}
				};

			// Run initial parameter-definition (optional || not recommended if dynamically-generated content)
			// Best called as one of the final functions in the scripts 
			// -----------------------------------------------------

				spoilerObj.spoilerBtn_defineParameters_all = function() {

					var spoilerButtons = Array.from(document.getElementsByClassName('spoiler-btn'));
					spoilerButtons.map(btn => asterisk.components.spoiler.spoilerBtn_defineParameters(btn));

				};

		})();