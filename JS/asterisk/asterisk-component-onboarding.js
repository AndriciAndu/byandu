

// remove 'target' and add individual target for hightlight and scrollTo

// add to pandura

// video overlay - add as component

/* center on screen and hide bubble

	target : document.getElementsByClassName('onboarding')[0],
	notifBox_setPosition : [['center', 0], ['center', 0]],
	notifBox_setBubble : ' ',
*/


	// ComponentsObject init - if necessary
	// ------------------------------------------------------------------

		var componentsObject = componentsObject || {} ;

		componentsObject.onboarding = {};

	// Onboarding
	// ------------------------------------------------------------------

		(function(){

			// Dependencies
			// ------------------------------------------------------------------

					asteriskObj.utility = asteriskObj.utility || {} ;

				// hasClass()
				// -----------------------------------------------------

					asteriskObj.utility.hasClass = asteriskObj.utility.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asteriskObj.utility.hasClass;

				// isHTMLCollection()
				// -----------------------------------------------------

					asteriskObj.utility.isHTMLCollection = asteriskObj.utility.isHTMLCollection || function ( targetVar ) {
						return targetVar instanceof HTMLCollection
					};

					var isHTMLCollection = asteriskObj.utility.isHTMLCollection;

				// getParent()
				// -----------------------------------------------------

					asteriskObj.utility.getParent = asteriskObj.utility.getParent || function ( elem, identifier ) {

						elemParent = elem.parentElement;

						if (elemParent) {

							var firstChar = identifier.charAt(0);

							if 	(verify()) 	{ return elemParent	} 
							else 			{ return getParent(elemParent, identifier) }

						} else { return null };

						// ---
						function verify() {

							var identif_substr = identifier.substring(1); // remove first char - for class/id cases

							if 		(firstChar === '.') { return ( " " + elemParent.className + " " ).indexOf( " " + identif_substr + " " ) > -1 } 
							else if (firstChar === '#') { return (elemParent.id 	 == identif_substr) } 
							else 						{ return (elemParent.tagName == identifier.toUpperCase()) }
						}
					};

					var getParent = asteriskObj.utility.getParent;

			// Onboarding - init
			// ------------------------------------------------------------------

				componentsObject.onboarding.init = function(current_target) {

					if (current_target) { 

						if (hasClass(current_target, 'onboarding')) { 

							componentsObject.onboarding.activate(current_target) 

						} else {

							var onboardingComponents = Array.from(current_target.getElementsByClassName('onboarding'));
							onboardingComponents.map(comp => componentsObject.onboarding.activate(comp));

						} 

					} else {

						var allOnboardingComponents = Array.from(document.getElementsByClassName('onboarding'));
						allOnboardingComponents.map(comp => componentsObject.onboarding.activate(comp));

					}

				};

			// Run
			// ------------------------------------------------------------------

				componentsObject.onboarding.run = function(current_onboarding) { 

					// Set used variables
					// ------------------------------------------------------------------

						var notifBox = current_onboarding.getElementsByClassName('onboarding-notification')[0];
						var textBox  = current_onboarding.getElementsByClassName('onboarding-notification-textBox')[0];

						var stepsObj = current_onboarding.stepsObj;
						var current_step = parseInt(current_onboarding.getAttribute('data-onboarding-currentStep'));

					// Remove previous highlights

						Array.from(document.getElementsByClassName('onboarding-highlight')).map(x => componentsObject.onboarding.highlight_remove(x));

					// Check steps and apply actions
					// ------------------------------------------------------------------

						if (stepsObj[current_step] != undefined) {

							var step = stepsObj[current_step];

							/* Check [target] */
							// ------------------------------------------------------------------

								// If no target is provided - set the target to the [onboarding] component itself
								var target = step['step_defaultTarget'];
								if (!isElement(target)) { target = current_onboarding };

							/* Check Step Properties - click | highlight */
							// ------------------------------------------------------------------

								function check_elementEvents(stepProp, functionToCall) {

									if (stepProp) {

										// if no specific target/targets were provided - use the default [target]
										// if an Element - run it
										// if an Array - check if each param is a HTML Element - run each
										// if none of the conditions were passed - throw Log

										if (stepProp === true) { 

											functionToCall(target) 	

										} else if (isElement(stepProp)) { 

											functionToCall(stepProp)

										} else if (Array.isArray(stepProp) || isHTMLCollection(stepProp)) { 

											if (isHTMLCollection(stepProp)) { stepProp = Array.from(stepProp) };

											stepProp.filter(elem => isElement(elem)).map(elem => functionToCall(elem))	

										} else {

											console.log('Invalid parameter: '); 
											console.log(stepProp);

										}
									}
								};

								check_elementEvents(step['click']		, 	componentsObject.onboarding.clickElem);
								check_elementEvents(step['highlight']	, 	componentsObject.onboarding.highlight);

								// if an array was provided as an argument for [scrollTo], take only the first element within it
								if (step['scrollTo'] && Array.isArray(step['scrollTo'])) { step['scrollTo'] = step['scrollTo'][0] };
								check_elementEvents(step['scrollTo']	, 	componentsObject.onboarding.scrollTo);

							/* Check Scroll Event */
							// ------------------------------------------------------------------

								if (step['notifBox_setText']) {
									componentsObject.onboarding.notifBox_setText(notifBox, step['notifBox_setText'])
								};

								if (step['notifBox_setPosition']) { 

									var x = step['notifBox_setPosition'];

									if (x == 'center-on-screen') {
										componentsObject.onboarding.notifBox_setPosition(notifBox, current_onboarding, ['center', 0], ['center', 0])
									} else {
										componentsObject.onboarding.notifBox_setPosition(notifBox, target, x[0], x[1]) 
									}

								};

								if (step['notifBox_setBubble']) {
									componentsObject.onboarding.notifBox_setBubble(notifBox, step['notifBox_setBubble']);
								};
						};

					// Update next/prev buttons
					// ------------------------------------------------------------------

						var prevBtn = current_onboarding.getElementsByClassName('onboarding-prevBtn')[0];
						var nextBtn = current_onboarding.getElementsByClassName('onboarding-nextBtn')[0];

						if (current_step > 0) 					{ prevBtn.classList.remove('disable') } 
						else 									{ prevBtn.classList.add   ('disable') };

						if (current_step < stepsObj.length - 1) { nextBtn.classList.remove('disable') } 
						else 									{ nextBtn.classList.add   ('disable') };

				};

			// Update Step Nr
			// ------------------------------------------------------------------

				componentsObject.onboarding.updateStepIndex = function(current_onboarding, changeValue) {

					var current_index = parseInt(current_onboarding.getAttribute('data-onboarding-currentStep'));
					current_onboarding.setAttribute('data-onboarding-currentStep', current_index + changeValue);

				};

			// TargetElem Functions
			// ------------------------------------------------------------------

				componentsObject.onboarding.highlight = function(target) {
					target.classList.add('onboarding-highlight')
				};

				componentsObject.onboarding.highlight_remove = function(target) {
					target.classList.remove('onboarding-highlight')
				};

				componentsObject.onboarding.scrollTo = function(target) {
					myScroll(target) // Test Example: myScroll(document.getElementById('r4'), 100)
				};

				componentsObject.onboarding.clickElem = function(target) {
					target.click()
				};

			// NotifBox Functions
			// ------------------------------------------------------------------

				// NotifBox - setSize 
				// ------------------------------------------------------------------

					// must rethink min-width max-width
					/*componentsObject.onboarding.notifBox_setSize = function(notifBox, widthParam, heightParam) {
						if (!isNaN(widthParam))  { notifBox.style.width  = widthParam  + 'px' };
						if (!isNaN(heightParam)) { notifBox.style.height = heightParam + 'px' };
					};*/

						/* Test Example: 
							componentsObject.onboarding.notifBox_setSize(document.getElementsByClassName('onboarding-notification')[0], 500, 50);
							*/

				// NotifBox - setPosition 
				// ------------------------------------------------------------------

					componentsObject.onboarding.notifBox_setPosition = function(current_notifBox, targetElem, xAxisArray, yAxisArray) {

						var notifBox = current_notifBox;

						var set_x, set_y;
						var targetRekt 	= targetElem.getBoundingClientRect();

						var x_start = xAxisArray[0];	var xAxis_offset = parseInt(xAxisArray[1]) || null;
						var y_start = yAxisArray[0];	var yAxis_offset = parseInt(yAxisArray[1]) || null;

						switch (x_start) {

							case 'left-in': 
								set_x = targetRekt.left;
								break;

							case 'left-out': 
								set_x = targetRekt.left - notifBox.offsetWidth;
								break;

							case 'center': 
								set_x = targetRekt.left + ((targetRekt.right - targetRekt.left) / 2) - (notifBox.offsetWidth / 2);
								break;

							case 'right-in': 
								set_x = targetRekt.right - notifBox.offsetWidth;
								break;

							case 'right-out': 
								set_x = targetRekt.right;
								break;
						};

						if (xAxis_offset) { 
							if (x_start == 'left-out' || x_start == 'right-in') { 
								xAxis_offset = -xAxis_offset 
							};

							set_x +=  xAxis_offset;
						};

						switch (y_start) {

							case 'top-in': 
								set_y = targetRekt.top;
								break;

							case 'top-out': 
								set_y = targetRekt.top - notifBox.offsetHeight;
								break;

							case 'center': 
								set_y = targetRekt.top + ((targetRekt.bottom - targetRekt.top) / 2) - (notifBox.offsetHeight / 2);
								break;

							case 'bottom-in': 
								set_y = targetRekt.bottom - notifBox.offsetHeight;
								break;

							case 'bottom-out': 
								set_y = targetRekt.bottom;
								break;
						};

						if (yAxis_offset) { 
							if (y_start == 'top-out' || x_start == 'bottom-in') { 
								yAxis_offset = -yAxis_offset 
							};

							set_y += yAxis_offset; 
						};

						notifBox.style.left = set_x + 'px';
						notifBox.style.top  = set_y + 'px';

						notifBox.sticky_y = set_y + window.pageYOffset;
					};

				// NotifBox - setBubble 
				// ------------------------------------------------------------------

					componentsObject.onboarding.notifBox_bubbleClasses = {
						positions  : [	'bubble-left'  , 'bubble-right' , 'bubble-top' 	, 'bubble-btm' , 'bubble-bottom' ] ,
						alignment  : [	'bubble-start' , 'bubble-center', 'bubble-end'	] ,
						allClasses : [	'bubble-left'  , 'bubble-right' , 'bubble-top' 	, 'bubble-btm' , 'bubble-bottom' , 'bubble-start' , 'bubble-center', 'bubble-end' ]
					};
					
					componentsObject.onboarding.notifBox_setBubble = function(notifBox, classString) {
						notifBox.classList.remove(...componentsObject.onboarding.notifBox_bubbleClasses.allClasses);
						notifBox.className += ' ' + classString;
					};
				
				// NotifBox - setText 
				// ------------------------------------------------------------------

					componentsObject.onboarding.notifBox_setText = function(notifBox, innerHTMLString) {
						notifBox.getElementsByClassName('onboarding-notification-textBox')[0].innerHTML = innerHTMLString;
					};

				// NotifBox - show/hide 
				// ------------------------------------------------------------------

					componentsObject.onboarding.notifBox_show = function(notifBox) {
						notifBox.classList.remove('hidden')
					};

					componentsObject.onboarding.notifBox_hide = function(notifBox) {
						notifBox.classList.add('hidden')
					};

				// NotifBox - Scroll EvtListener - reposition on scroll 
				// ------------------------------------------------------------------

						componentsObject.onboarding.notifBox_scrollRepositioning = function(notifBox) {

							notifBox.scollRepositioningFunc = function() {
								notifBox.style.top = notifBox.sticky_y - window.pageYOffset + 'px';
							}

							window.addEventListener('scroll', notifBox.scollRepositioningFunc);

						};

			// Finish
			// ------------------------------------------------------------------

				componentsObject.onboarding.finish = function(current_onboarding) {

					var notifBox_scrollEvt = current_onboarding.getElementsByClassName('onboarding-notification')[0].scollRepositioningFunc;
					window.removeEventListener('scroll', notifBox_scrollEvt);

					current_onboarding.classList.add('hidden');
				};

			// Activate 
			// ------------------------------------------------------------------

				componentsObject.onboarding.activate = function(current_target) {

					if (!current_target.getAttribute('data-onboarding-currentStep')) {
						 current_target.setAttribute('data-onboarding-currentStep', 0)
					};

					current_target.addEventListener('click', function(e) { 

						if (hasClass(e.target, 'onboarding-nextBtn')) 	 { 

							if (parseInt(this.getAttribute('data-onboarding-currentStep')) < this.stepsObj.length - 1) { // run only if not last step
								componentsObject.onboarding.updateStepIndex(current_target,  1); 
								componentsObject.onboarding.run(current_target) 	
							}

						} else if (hasClass(e.target, 'onboarding-prevBtn')) { 

							if (parseInt(this.getAttribute('data-onboarding-currentStep')) > 0) { // run only if not first step
								componentsObject.onboarding.updateStepIndex(current_target, -1); 
								componentsObject.onboarding.run(current_target)
							} 

						} else if (hasClass(e.target, 'onboarding-finishBtn')) { 

							componentsObject.onboarding.finish(getParent(e.target, '.onboarding'))

						}

					});

					// activate scroll-based repositioning for notifBox
					componentsObject.onboarding.notifBox_scrollRepositioning(current_target.getElementsByClassName('onboarding-notification')[0]);

					// set baseline stepsObj - if it was not defined previously
					if (current_target.stepsObj == undefined) {
						current_target.stepsObj = [
							{
								target 					: current_target	,
								notifBox_setPosition 	: [['center', 0], ['center', 0]]	,

								notifBox_setText : 
									'<p> Onboarding Loaded! </p>' +
									'<p> Add updated [stepsObj] information for this component,' + 
									' before calling [componentsObject.onboarding.activate()] or [componentsObject.onboarding.init()], for it to take effect.'
							}
						]
					}

					componentsObject.onboarding.run(current_target)

				};

				// Test init
				//componentsObject.onboarding.activate(document.getElementsByClassName('onboarding')[0]);

		})();