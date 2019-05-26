
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.components = asterisk.components || {} ;

	// Asterisk Component - [accordion]
	// ------------------------------------------------------------------

		(function(){

			asterisk.components.accordion = {};
			asterisk.components.accordion.activatedItems = [];

			asterisk.utility = asterisk.utility || {} ;

			// getFirstParentByClassName()
			// -----------------------------------------------------

				asterisk.utility.getFirstParentByClassName = asterisk.utility.getFirstParentByClassName || function getFirstParentByClassName ( target__HTMLElem , class__string ) {

					let elemParent = target__HTMLElem.parentElement;
					let parentFound = false;

					while (elemParent && !parentFound) {
						if ((" "+elemParent.className+" ").indexOf(" "+class__string+" ") > -1) { 
							parentFound = true;
						} else {
							elemParent = elemParent.parentElement;
						}
					};
						
					return elemParent
				};

			// Event Handlers
			// -----------------------------------------------------

				// eventHandler_run
				// -----------------------------------------------------

					asterisk.components.accordion.eventHandler_run = function(e) {

						const targetBtn = e.target;
						const accordionParams = targetBtn.accordionParams || asterisk.components.accordion.parameters_set(targetBtn , true);
						const targetGroup   = accordionParams.targetGroup;

						targetGroup.style.maxHeight = targetGroup.scrollHeight + 'px';

						if (hasClass(targetGroup , 'accordion-group--expanded')) { // collapsing animation
							setTimeout(function(){ targetGroup.style.maxHeight = targetBtn.scrollHeight + 'px' }, 34);
							targetGroup.classList.remove('accordion-group--expanded');
						} else {
							targetGroup.classList.add('accordion-group--expanded');
						};
					};

				// parameters_set 
				// -----------------------------------------------------

					asterisk.components.accordion.parameters_set = function( accordionBtn__HTMLElem ) {

						const getFirstParentByClassName = asterisk.utility.getFirstParentByClassName;

						// var parentAccordion = getFirstParentByClassName(accordionBtn__HTMLElem, 'accordion');
						var targetGroup   = getFirstParentByClassName(accordionBtn__HTMLElem, 'accordion-group');
						//var targetContent = targetGroup.getElementsByClassName('accordion-content')[0]; // change to siblings or children

						accordionBtn__HTMLElem.accordionParams = { targetGroup };

						return { targetGroup }
					};

			// eventHandler_delegate
			// -----------------------------------------------------

				asterisk.components.accordion.eventHandler_delegate = function(e) {
					if ((" "+e.target.className+" ").indexOf(" accordion-btn ")>-1) { 
						asterisk.components.accordion.eventHandler_run(e) 
					}
				};

		// Main Functions
		// -----------------------------------------------------

			// activate
			// -----------------------------------------------------

				asterisk.components.accordion.activate = function( accordionBtn__HTMLElem ) {
					accordionBtn__HTMLElem.addEventListener('click', asterisk.components.accordion.eventHandler_delegate);
					asterisk.components.accordion.activatedItems.push(accordionBtn__HTMLElem);
				};

			// delegate
			// -----------------------------------------------------

				asterisk.components.accordion.delegate = function( target__HTMLElem ) {
					target__HTMLElem.addEventListener('click', asterisk.components.accordion.eventHandler_delegate);
					asterisk.components.accordion.activatedItems.push(target__HTMLElem)
				};

			// terminate
			// -----------------------------------------------------

				// asterisk.components.tabs.terminate = function( target__HTMLElem ) {

				// 	if ((" "+target__HTMLElem.className+" ").indexOf(" tabs ")>-1) { 
				// 		target__HTMLElem = target__HTMLElem.getElementsByClassName('tabs-btnGroup')[0];
				// 	}; 

				// 	const tabsObj = asterisk.components.tabs;
				// 	target__HTMLElem.removeEventListener('click', tabsObj.eventHandler_run);
				// 	target__HTMLElem.removeEventListener('click', tabsObj.eventHandler_delegate);
				// 	tabsObj.activatedItems = tabsObj.activatedItems.filter(item => item !== target__HTMLElem);

				// 	tabsObj.parameters_remove(target__HTMLElem);
				// };

				// // parameters_remove 
				// // -----------------------------------------------------

				// 	asterisk.components.tabs.parameters_remove = function( target__HTMLElem ) {
				// 		if ((" "+target__HTMLElem.className+" ").indexOf(" tabs ")>-1) { 
				// 			target__HTMLElem.getElementsByClassName('tabs-btnGroup')[0].tabsParams = null
				// 		} else {
				// 			Array.from(target__HTMLElem.getElementsByClassName('tabs-btnGroup')).map(function(item){
				// 				item.tabsParams = null
				// 			});
				// 		}
				// 	};

			// checkDOM
			// -----------------------------------------------------

				asterisk.components.accordion.checkDOM = function() {
					const accordionObj = asterisk.components.accordion;
					const targets = accordionObj.activatedItems.filter(item => (item !== document) && !document.contains(item) );
					targets.map(item => accordionObj.terminate(item));
				};

	// // Main Functions
	// // -----------------------------------------------------

	// 	// Activate (adds eventListeners)
	// 	// -----------------------------------------------------

	// 		asterisk.components.accordion.activate = function(targetElem, delegateEvent__boolean) {

	// 			if (targetElem && (targetElem instanceof HTMLElement)) { 

	// 				if (hasClass(targetElem, 'accordion-btn')) {

	// 					asterisk.components.accordion.attachEvt(targetElem) 

	// 				} else if (delegateEvent__boolean === true) {

	// 					asterisk.components.accordion.attachEvt(targetElem , 'delegate')

	// 				} else { 

	// 					var accordionBtns = Array.from(targetElem.getElementsByClassName('accordion-btn'));	
	// 					accordionBtns.map(accordionBtn => asterisk.components.accordion.attachEvt(accordionBtn));

	// 				}

	// 			} else if (delegateEvent__boolean === true) {

	// 				asterisk.components.accordion.attachEvt(document , 'delegate')

	// 			} else {

	// 				var allAccordionBtns = Array.from(document.getElementsByClassName('accordion-btn'));
	// 				allAccordionBtns.map(accordion => asterisk.components.accordion.attachEvt(accordionBtn));

	// 			}
	// 		};

	// 	// Terminate (removes eventListeners & on-element Parameters)
	// 	// -----------------------------------------------------

	// 	// checkDOM
	// 	// -----------------------------------------------------

	// 		asterisk.components.accordion.checkDOM = function() { console.log('checking DOM for accordion');

	// 			// remove EventListeners from Elements that are no longer in the DOM
	// 			asterisk.components.accordion.storedParameters.itemsWithEvents = asterisk.components.accordion.storedParameters.itemsWithEvents.filter(function(item){

	// 				if ((item !== document) && (!document.contains(item)) ) {
	// 					asterisk.components.accordion.detachEvt(item);
	// 					console.log('Removed item : ', item)
	// 					return false
	// 				} else {
	// 					return true
	// 				}
	// 			});
	// 		};

	// // Intermediary
	// // -----------------------------------------------------

	// 	// Add/Remove | Event Listeners
	// 	// -----------------------------------------------------

	// 		// store all Elements that have been given an EventListener
	// 		// -----------------------------------------------------

	// 			asterisk.components.accordion.storedParameters.itemsWithEvents = [];

	// 		// attatchEvt
	// 		// -----------------------------------------------------

	// 			asterisk.components.accordion.attachEvt = function(targetElem , scenario__string) {

	// 				if (scenario__string == 'delegate') {
	// 					targetElem.addEventListener('click', asterisk.components.accordion.delegate);
	// 				} else {
	// 					targetElem.addEventListener('click', asterisk.components.accordion.run);
	// 				};

	// 				asterisk.components.accordion.storedParameters.itemsWithEvents.push(targetElem);
	// 			};

	// 		// Delegate (adds eventListeners)
	// 		// -----------------------------------------------------

	// 			asterisk.components.accordion.delegate = function(e) {
	// 				if (hasClass(e.target, 'accordion-btn')) { asterisk.components.accordion.run(e) }
	// 			};

	// 		// detachEvt
	// 		// -----------------------------------------------------

	// 			asterisk.components.accordion.intermediary.detachEvt = function(targetElem) {
	// 				targetElem.removeEventListener('click' , asterisk.components.accordion.intermediary.run);
	// 				targetElem.removeEventListener('click' , asterisk.components.accordion.intermediary.delegate);

	// 				asterisk.components.accordion.storedParameters.itemsWithEvents = asterisk.components.accordion.storedParameters.itemsWithEvents.filter(x => x != targetElem);
	// 			};

	// 	// Run
	// 	// -----------------------------------------------------

			
		})();