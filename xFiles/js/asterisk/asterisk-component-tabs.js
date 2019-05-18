

	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.components = asterisk.components || {} ;

	// Asterisk Component - [Tabs]
	// -----------------------------------------------------

		(function(){

			asterisk.components.tabs = {};
			asterisk.components.tabs.activatedItems = [];
				
			// getParentByClassName()
			// -----------------------------------------------------

				asterisk.utility.getParentByClassName = asterisk.utility.getParentByClassName || function ( target__HTMLElem , klass ) {

					elemParent = target__HTMLElem.parentElement;

					if (elemParent) {

						if ((" "+elemParent.className+" ").indexOf(" "+klass+" ") > -1) {
							return elemParent
						} else {
							return asterisk.utility.getParentByClassName(elemParent, klass)
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

					asterisk.components.tabs.eventHandler_run = function(e) {

						const target = e.target;

						const targetTabsBtnGroup = asterisk.utility.getParentByClassName(target, 'tabs-btnGroup');
						const targetParams = targetTabsBtnGroup.tabsParams || asterisk.components.tabs.parameters_set(targetTabsBtnGroup)

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

					asterisk.components.tabs.parameters_set = function( tabsBtnGroup__HTMLElem ) {

						const target_contentGroup = asterisk.utility.getParentByClassName(tabsBtnGroup__HTMLElem, 'tabs').getElementsByClassName('tabs-contentGroup')[0];
						const target_contentItems = Array.from(target_contentGroup.getElementsByClassName('tabs-content')).filter(function(item){
							return item.parentElement === target_contentGroup
						});

						const target_buttons = Array.from(tabsBtnGroup__HTMLElem.getElementsByClassName('tabs-btn'));

						tabsBtnGroup__HTMLElem.tabsParams = { target_contentItems , target_buttons };

						return { target_contentItems , target_buttons }
					};

			// eventHandler_delegate
			// -----------------------------------------------------

				asterisk.components.tabs.eventHandler_delegate = function(e) {
					if ((" "+e.target.className+" ").indexOf(" tabs-btn ")>-1) { 
						asterisk.components.tabs.eventHandler_run(e) 
					}
				};

		// Main Functions
		// -----------------------------------------------------

			// activate
			// -----------------------------------------------------

				asterisk.components.tabs.activate = function( tabs__HTMLElem ) {
					const target_tabsBtnGroup = tabs__HTMLElem.getElementsByClassName('tabs-btnGroup')[0];
					target_tabsBtnGroup.addEventListener('click', asterisk.components.tabs.eventHandler_delegate);
					asterisk.components.tabs.activatedItems.push(target_tabsBtnGroup);
				};

			// delegate
			// -----------------------------------------------------

				asterisk.components.tabs.delegate = function( target__HTMLElem ) {
					target__HTMLElem.addEventListener('click', asterisk.components.tabs.eventHandler_delegate);
					asterisk.components.tabs.activatedItems.push(target__HTMLElem)
				};

			// terminate
			// -----------------------------------------------------

				asterisk.components.tabs.terminate = function( target__HTMLElem ) {

					if ((" "+target__HTMLElem.className+" ").indexOf(" tabs ")>-1) { 
						target__HTMLElem = target__HTMLElem.getElementsByClassName('tabs-btnGroup')[0];
					}; 

					const tabsObj = asterisk.components.tabs;
					target__HTMLElem.removeEventListener('click', tabsObj.eventHandler_run);
					target__HTMLElem.removeEventListener('click', tabsObj.eventHandler_delegate);
					tabsObj.activatedItems = tabsObj.activatedItems.filter(item => item !== target__HTMLElem);

					tabsObj.parameters_remove(target__HTMLElem);
				};

				// parameters_remove 
				// -----------------------------------------------------

					asterisk.components.tabs.parameters_remove = function( target__HTMLElem ) {
						if ((" "+target__HTMLElem.className+" ").indexOf(" tabs ")>-1) { 
							target__HTMLElem.getElementsByClassName('tabs-btnGroup')[0].tabsParams = null
						} else {
							Array.from(target__HTMLElem.getElementsByClassName('tabs-btnGroup')).map(function(item){
								item.tabsParams = null
							});
						}
					};

			// checkDOM
			// -----------------------------------------------------

				asterisk.components.tabs.checkDOM = function() {
					const tabsObj = asterisk.components.tabs;
					const targets = tabsObj.activatedItems.filter(item => (item !== document) && !document.contains(item) );
					targets.map(item => tabsObj.terminate(item));
				};
	})();