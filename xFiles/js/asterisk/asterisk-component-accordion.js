
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.components = asterisk.components || {} ;

	// Asterisk Component - [accordion]
	// ------------------------------------------------------------------

		(function(){

			// Component.Object Setup 
			// -----------------------------------------------------

				asterisk.components.accordion = {};

			// Wrappers
			// -----------------------------------------------------

				asterisk.components.accordion.intermediary     = {}; // holds intermediary [functions/methods]
				asterisk.components.accordion.storedParameters = {}; // holds [Elements] which have been altered (with [evtListener] or [on-elem parameters])

			// store all Elements that have been given an EventListener
			// -----------------------------------------------------

				asterisk.components.accordion.storedParameters.itemsWithEvents = [];

			// Dependencies 
			// -----------------------------------------------------

				asterisk.utility = asterisk.utility || {} ;

				// hasClass()
				// -----------------------------------------------------

					asterisk.utility.hasClass = asterisk.utility.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asterisk.utility.hasClass ;

				// getParent()
				// -----------------------------------------------------

					asterisk.utility.getParent = asterisk.utility.getParent || function ( elem, identifier ) {

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

					var getParent = asterisk.utility.getParent ;

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

					asterisk.components.accordion.activate = function(targetElem, delegateEvent__boolean) {

						if (targetElem && (targetElem instanceof HTMLElement)) { 

							if (hasClass(targetElem, 'accordion-btn')) {

								asterisk.components.accordion.attachEvt(targetElem) 

							} else if (delegateEvent__boolean === true) {

								asterisk.components.accordion.attachEvt(targetElem , 'delegate')

							} else { 

								var accordionBtns = Array.from(targetElem.getElementsByClassName('accordion-btn'));	
								accordionBtns.map(accordionBtn => asterisk.components.accordion.attachEvt(accordionBtn));

							}

						} else if (delegateEvent__boolean === true) {

							asterisk.components.accordion.attachEvt(document , 'delegate')

						} else {

							var allAccordionBtns = Array.from(document.getElementsByClassName('accordion-btn'));
							allAccordionBtns.map(accordion => asterisk.components.accordion.attachEvt(accordionBtn));

						}
					};

				// Terminate (removes eventListeners & on-element Parameters)
				// -----------------------------------------------------

				// checkDOM
				// -----------------------------------------------------

					asterisk.components.accordion.checkDOM = function() { console.log('checking DOM for accordion');

						// remove EventListeners from Elements that are no longer in the DOM
						asterisk.components.accordion.storedParameters.itemsWithEvents = asterisk.components.accordion.storedParameters.itemsWithEvents.filter(function(item){

							if ((item !== document) && (!document.contains(item)) ) {
								asterisk.components.accordion.detachEvt(item);
								console.log('Removed item : ', item)
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

					// store all Elements that have been given an EventListener
					// -----------------------------------------------------

						asterisk.components.accordion.storedParameters.itemsWithEvents = [];

					// attatchEvt
					// -----------------------------------------------------

						asterisk.components.accordion.attachEvt = function(targetElem , scenario__string) {

							if (scenario__string == 'delegate') {
								targetElem.addEventListener('click', asterisk.components.accordion.delegate);
							} else {
								targetElem.addEventListener('click', asterisk.components.accordion.run);
							};

							asterisk.components.accordion.storedParameters.itemsWithEvents.push(targetElem);
						};

					// Delegate (adds eventListeners)
					// -----------------------------------------------------

						asterisk.components.accordion.delegate = function(e) {
							if (hasClass(e.target, 'accordion-btn')) { asterisk.components.accordion.run(e) }
						};

					// detachEvt
					// -----------------------------------------------------

						asterisk.components.accordion.intermediary.detachEvt = function(targetElem) {
							targetElem.removeEventListener('click' , asterisk.components.accordion.intermediary.run);
							targetElem.removeEventListener('click' , asterisk.components.accordion.intermediary.delegate);

							asterisk.components.accordion.storedParameters.itemsWithEvents = asterisk.components.accordion.storedParameters.itemsWithEvents.filter(x => x != targetElem);
						};

				// Run
				// -----------------------------------------------------

					asterisk.components.accordion.run = function(accordionBtn) {

						var parentAccordion = getParent(accordionBtn, '.accordion');
						var targetGroup 	= accordionBtn.parentElement;
						var targetContent 	= targetGroup.getElementsByClassName('accordion-content')[0];

						targetGroup.style.maxHeight = getHeight(targetContent) + getHeight(accordionBtn) + 'px'; 

						// collapsing animation
						if (hasClass(targetGroup , 'accordion-group--expanded')) { 
							setTimeout(function(){ targetGroup.style.maxHeight = getHeight(accordionBtn) + 'px' }, 16);		
						};

						targetGroup.classList.toggle('accordion-group--expanded');
					};
		})();