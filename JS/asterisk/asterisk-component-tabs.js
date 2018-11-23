
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

			var asteriskObj = asteriskObj || {} ;
			asteriskObj.components = asteriskObj.components || {} ;

		/*
			class DomObject {
				constructor(domElem) {
					this.myElem = domElem;
				}

				setTextNodeToGigi() {
					this.myElem.firstChild().setText('gigi')
				}
			}

			class SpecialSpan extends DomObject {
				constructor(domElem) {
					super()
				}
			}

			const elem1 = new DomOject(elem);

			elem1.setTextNodeToGigi();

			function DomOjectF(domElem) {
				this.myElem = domElem;
			}

			DomOjectF.prototype.setTextNodeToGigi = function

			SpecialSpanF.prototype = Object.create(DomOjectF.prototype);
			SpecialSpanF.prototype.constructor = SpecialSpanF
		*/

	// Asterisk Component - [Tabs]
	// -----------------------------------------------------

		(function(){

			// Component.Object Setup 
			// -----------------------------------------------------
			
				asteriskObj.components.tabs = {};
				var tabsObj = asteriskObj.components.tabs;

			// Dependencies
			// -----------------------------------------------------

					asteriskObj.dependencies = asteriskObj.dependencies || {} ;
			
				// hasClass()
				// -----------------------------------------------------

					asteriskObj.dependencies.hasClass = asteriskObj.dependencies.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asteriskObj.dependencies.hasClass;
				
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

					var getParent = asteriskObj.dependencies.getParent;

			// Init
			// -----------------------------------------------------

				tabsObj.init = function(current_target, delegateEventListener) {
					
					if (current_target) {

						if (hasClass(current_target, 'tabs')) {

							tabsObj.activate(current_target)

						} else if (delegateEventListener === true) {

							tabsObj.delegate(current_target)

						} else { 

							var tabs = Array.from(current_target.getElementsByClassName('tabs'));	
							tabs.map(tabs => tabsObj.activate(tabs));

						}

					} else {

						var allTabs = Array.from(document.getElementsByClassName('tabs'));	
						allTabs.map(tabs => tabsObj.activate(tabs));	

					}

				};

			// Activate 
			// -----------------------------------------------------

				tabsObj.activate = function(current_target) {

					current_target = current_target.getElementsByClassName('tabs-btnGroup')[0];

					current_target.addEventListener('click', function(e) {
						if (hasClass(e.target, 'tabs-btn')) { tabsObj.run(e.target) }
					})
				};

			// Delegate
			// -----------------------------------------------------

				tabsObj.delegate = function(current_target) {

					current_target.addEventListener('click', function(e) {
						if (hasClass(e.target, 'tabs-btn')) { tabsObj.run(e.target) }
					})
				};
					
			// Run
			// -----------------------------------------------------

				tabsObj.run = function(current_tabBtn) {

					// update 'active' status on Btn
					var tabButtons = Array.from(current_tabBtn.parentElement.getElementsByClassName('tabs-btn'));
					tabButtons.map(btn => btn.classList.remove('tabBtn-active'));
					current_tabBtn.classList.add('tabBtn-active');

					// update 'expanded' status on content
					var currentIndex = current_tabBtn.getAttribute('data-tabs-id');
					var targetParent = getParent(current_tabBtn, '.tabs');

					var contentItems = Array.from(targetParent.getElementsByClassName('tabs-content'));
					contentItems = contentItems.filter(item => getParent(item, '.tabs') === targetParent);
					contentItems.map(function(item) { 
						if (item.getAttribute('data-tabs-id') == currentIndex) { item.classList.add   ('tab-expanded') }
						else 													{ item.classList.remove('tab-expanded')	}
					})

				};
			
		})();