
	// Component - [Tabs]
	// -----------------------------------------------------

		const component__tabs = {};

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

					const target_contentGroup = component__tabs.getParentByClassName(tabsBtnGroup__HTMLElem, 'tabs').getElementsByClassName('tabs-contentGroup')[0];
					const target_contentItems = Array.from(target_contentGroup.getElementsByClassName('tabs-content')).filter(function(item){
						return item.parentElement === target_contentGroup
					});

					target_buttons = Array.from(tabsBtnGroup__HTMLElem.parentElement.getElementsByClassName('tabs-btn'));

					// update [.tabs-btn] Elements
					target_buttons.map(btn => btn.classList.remove('tabs-btn--active'));
					target.classList.add('tabs-btn--active');

					// update [.tabs-content] Elements
					const currentIndex = target.getAttribute('data-tabs-id');
					target_contentItems.map(function(item) {
						if (item.getAttribute('data-tabs-id') == currentIndex) { 
							item.classList.add   ('tabs-content--active') 
						} else { 
							item.classList.remove('tabs-content--active')
						}
					})
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
				};

			// delegate
			// -----------------------------------------------------

				component__tabs.delegate = function( target__HTMLElem ) {
					target__HTMLElem.addEventListener('click', component__tabs.eventHandler_delegate)
				};

			// terminate
			// -----------------------------------------------------

				component__tabs.terminate = function( target__HTMLElem ) {
					target__HTMLElem.removeEventListener('click', component__tabs.eventHandler_run);
					target__HTMLElem.removeEventListener('click', component__tabs.eventHandler_delegate);
				};