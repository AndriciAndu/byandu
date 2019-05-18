	
	// Component - [Tabs]
	// -----------------------------------------------------

		const component__tabs = {
			activatedItems : []
		};

		// Dependencies
		// -----------------------------------------------------

			// getParentByClassName
			// -----------------------------------------------------

				component__tabs.getParentByClassName = component__tabs.getParentByClassName || function ( target__HTMLElem, klass ) {

					elemParent = target__HTMLElem.parentElement;

					if (elemParent) {

						if ((" "+elemParent.className+" ").indexOf(" "+klass+" ") > -1) {
							return elemParent
						} else {
							return component__tabs.getParentByClassName(elemParent, klass)
						}

					} else { 

						console.log('No Parent Element with the class of ['+klass+'] was found for : ', target__HTMLElem);
						console.trace();
						return null 
						
					};
				};

		// Event Handlers
		// -----------------------------------------------------

			// eventHandler_run
			// -----------------------------------------------------

				component__tabs.eventHandler_run = function(e) {

					const target = e.target;

					const targetTabsBtnGroup = asterisk.utility.getParentByClassName(target, 'tabs-btnGroup');
					const targetParams = targetTabsBtnGroup.tabsParams || component__tabs.parameters_set(target);

					// update [.tabs-btn] Elements
					targetParams.target_buttons.map(btn => btn.classList.remove('tabs-btn--active'));
					target.classList.add('tabs-btn--active');

					// update [.tabs-content] Elements
					const currentIndex = target.getAttribute('data-tabs-id');
					targetParams.target_contentItems.map(function(item) {
						if (item.getAttribute('data-tabs-id') == currentIndex) { 
							item.classList.add   ('tabs-content--active') 
						} else { 
							item.classList.remove('tabs-content--active')
						}
					})
				};

				// parameters_set 
				// -----------------------------------------------------

					component__tabs.parameters_set = function( tabsBtnGroup__HTMLElem ) {

						const target_contentGroup = component__tabs.getParentByClassName(tabsBtnGroup__HTMLElem, 'tabs').getElementsByClassName('tabs-contentGroup')[0];
						const target_contentItems = Array.from(target_contentGroup.getElementsByClassName('tabs-content')).filter(function(item){
							return item.parentElement === target_contentGroup
						});

						const target_buttons = Array.from(tabsBtnGroup__HTMLElem.parentElement.getElementsByClassName('tabs-btn'));

						tabsBtnGroup__HTMLElem.tabsParams = { target_contentItems , target_buttons };

						return { target_contentItems , target_buttons }
					};

			// eventHandler_delegate
			// -----------------------------------------------------

				component__tabs.eventHandler_delegate = function(e) {
					if ((" "+e.target.className+" ").indexOf(" tabs-btn ")>-1) { 
						component__tabs.eventHandler_run(e) 
					}
				};

		// Main Functions
		// -----------------------------------------------------

			// activate
			// -----------------------------------------------------

				component__tabs.activate = function( tabs__HTMLElem ) {
					const target_tabsBtnGroup = tabs__HTMLElem.getElementsByClassName('tabs-btnGroup')[0];
					target_tabsBtnGroup.addEventListener('click', component__tabs.eventHandler_delegate);
					component__tabs.activatedItems.push(target_tabsBtnGroup);
				};

			// delegate
			// -----------------------------------------------------

				component__tabs.delegate = function( target__HTMLElem ) {
					target__HTMLElem.addEventListener('click', component__tabs.eventHandler_delegate);
					component__tabs.activatedItems.push(target__HTMLElem)
				};

			// terminate
			// -----------------------------------------------------

				component__tabs.terminate = function( target__HTMLElem ) {

					target__HTMLElem.removeEventListener('click', component__tabs.eventHandler_run);
					target__HTMLElem.removeEventListener('click', component__tabs.eventHandler_delegate);
					component__tabs.activatedItems = component__tabs.activatedItems.filter(item => item !== target__HTMLElem);

					component__tabs.parameters_remove(target__HTMLElem);
				};

				// parameters_remove 
				// -----------------------------------------------------

					component__tabs.parameters_remove = function( target__HTMLElem ) {

						if ((" "+target__HTMLElem.className+" ").indexOf(" tabs-btnGroup ")>-1) { 
							target__HTMLElem.tabsParams = null
						} else {
							Array.from(target__HTMLElem.getElementsByClassName('tabs-btnGroup')).map(function(item){
								item.tabsParams = null
							});
						}
					};

			// checkDOM
			// -----------------------------------------------------

				component__tabs.checkDOM = function() {
					const targets = component__tabs.activatedItems.filter(item => (item !== document) && !document.contains(item) );
					targets.map(item => component__tabs.terminate(item));
				};

					