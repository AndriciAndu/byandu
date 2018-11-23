
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;
		asteriskObj.components = asteriskObj.components || {} ;

	// Asterisk Component - [accordion]
	// ------------------------------------------------------------------

		(function(){

			// Component.Object Setup 
			// -----------------------------------------------------

				asteriskObj.components.accordion = {};
				var accordionObj = asteriskObj.components.accordion;

				accordionObj.transitionDuration = 300;

			// Dependencies 
			// -----------------------------------------------------

				asteriskObj.dependencies = asteriskObj.dependencies || {} ;

				// hasClass()
				// -----------------------------------------------------

					asteriskObj.dependencies.hasClass = asteriskObj.dependencies.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asteriskObj.dependencies.hasClass ;

				// getParent()
				// -----------------------------------------------------

					asteriskObj.dependencies.getParent = asteriskObj.dependencies.getParent || function ( elem, identifier ) {

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

					var getParent = asteriskObj.dependencies.getParent ;

			// Init
			// -----------------------------------------------------

				accordionObj.init = function(current_target, delegateEventListener) {

					if (current_target) { 

						if (hasClass(current_target, 'accordion')) {

							accordionObj.activate(current_target) 

						} else if (delegateEventListener === true) {

							accordionObj.delegate(current_target)

						} else { 

							var accordionBtns = Array.from(current_target.getElementsByClassName('accordion'));	
							accordionBtns.map(accordionBtn => accordionObj.activate(accordionBtn));

						}

					} else {

						var allAccordions = Array.from(document.getElementsByClassName('accordion'));
						allAccordionBs.map(accordion => accordionObj.activate(accordion));

					}

				};

			// Activate 
			// -----------------------------------------------------

				accordionObj.activate = function(current_target) {

					current_target.addEventListener('click', function(e) {
						if (hasClass(e.target, 'accordion-btn')) { accordionObj.run(e.target) }
					})

				};

			// Delegate
			// -----------------------------------------------------

				accordionObj.delegate = function(current_target) {

					current_target.addEventListener('click', function(e) {
						if (hasClass(e.target, 'accordion-btn')) { accordionObj.run(e.target) }
					})

				};

			// Run
			// -----------------------------------------------------

				accordionObj.run = function(accordionBtn) {

					var parentAccordion = getParent(accordionBtn, '.accordion');
					var targetGroup 	= accordionBtn.parentElement;
					var targetContent 	= targetGroup.getElementsByClassName('accordion-content')[0];

					// collapsing animation
					if (hasClass(targetGroup , 'accordion-group-expanded')) { 

						accordionObj.group_collapse(targetGroup);
						accordionBtn.classList.remove('active');

					// expanding animation
					} else {

						accordionObj.group_expand(targetGroup);
						accordionBtn.classList.add('active');

					}
				};

				// Intermediary
				// -----------------------------------------------------

					// Expand
					// -----------------------------------------------------

						accordionObj.group_expand = function(targetGroup) {

							setTimeout(function(){ 

								targetGroup.style.maxHeight = accordionObj.getMaxHeightValue(targetGroup);	// apply maxHeight

								// set max-height to default after the transition is over - to allow the accordion-group to adapt to other expanding/collapsing children
								setTimeout(function(){ 
									if (hasClass(targetGroup , 'accordion-group-expanded')) { // don't fire in case the spoiler was clicked rapidly => and is coapsing by the time this fires
										targetGroup.style.maxHeight = 'none';
										targetGroup.style.overflow  = 'visible';
									}
								}, accordionObj.transitionDuration);
							}, 0);

							targetGroup.classList.add('accordion-group-expanded');
						};

					// Collapse
					// -----------------------------------------------------

						accordionObj.group_collapse = function(targetGroup) {

							targetGroup.style.maxHeight = accordionObj.getMaxHeightValue(targetGroup); 	// set [maxHeight: 'it's actual height'] (as it defaults to 'none' after expand transition)
							targetGroup.style.overflow  = 'hidden';

							setTimeout(function(){ // defer and set [maxHeight] to the height of the accordion-btn, for the transition to take place
								targetGroup.style.maxHeight = targetGroup.parentElement.getElementsByClassName('accordion-btn')[0].offsetHeight + 'px';
							}, 16);				
							
							targetGroup.classList.remove('accordion-group-expanded');
						};

					// getMaxHeightValue
					// -----------------------------------------------------

						accordionObj.getMaxHeightValue = function(targetGroup) {
							var targetContent 	= targetGroup.getElementsByClassName('accordion-content')[0];
							var targetBtn 		= targetGroup.getElementsByClassName('accordion-btn')[0];
							var content_height 	= targetContent.offsetHeight;
							var btn_height 		= targetBtn.offsetHeight;

							return (content_height + btn_height) + 'px';
						};

		})();