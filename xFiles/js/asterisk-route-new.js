
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.route = asterisk.route || {} ;

	// manually set parameters 
	// --------------------------------------------------
	// ***REQUIRED*** to be set both [here] and in [asterisk-route.js]

		var localFile_rootPage = 'index.html';
		var localFile_rootPath = 'file:///d:/webfiles/testbuild' ;

	// route.info Object 
	// --------------------------------------------------

		asterisk.route.info = {
			predefined : {
				localFile_rootPage : '' ,
				localFile_rootPath : ''
			} ,
			currentTemplate : null , 
			url_rootHost    : ''   ,
			url_indexPage   : ''
		};
		if (localFile_rootPage && localFile_rootPage != '') { asterisk.route.info.predefined.localFile_rootPage = localFile_rootPage ; localFile_rootPage = undefined };
		if (localFile_rootPath && localFile_rootPath != '') { asterisk.route.info.predefined.localFile_rootPath = localFile_rootPath ; localFile_rootPath = undefined };

	// Routing Paths
	// --------------------------------------------------

		asterisk.route.paths = [

			// buildTool
			// --------------------------------------------------

					{ 
						filePath_html : '/buildTool.html' , 		// html file to be loaded
						filePath_js   : '/buildTool.js' , 			// js file to execute
						articleParameters : { 						// items outside the curent article, which need updating
							category : 'utility'
						}
					} ,

			// Utility
			// --------------------------------------------------

				// gridSystem-12col
				// --------------------------------------------------

					{ 
						filePath_html : '/utility/gridSystem-12col.html' , 									// html file to be loaded
						filePath_js   : '/xFiles/js/articleScripts/utility/gridSystem-12col.js' , 			// js file to execute
						articleParameters : { 																// items outside the curent article, which need updating
							category : 'utility'
						}
					} ,

				// flex
				// --------------------------------------------------

					{ 
						filePath_html : '/utility/flex.html' , 
						filePath_js   : '/xFiles/js/articleScripts/utility/flex.js' , 
						articleParameters : {
							category : 'utility'
						}
					} ,

				// spacing
				// --------------------------------------------------
				
					{ 
						filePath_html : '/utility/spacing.html' , 
						filePath_js   : '/xFiles/js/articleScripts/utility/spacing.js' , 
						articleParameters : {
							category : 'utility'
						}
					} ,

				// visibility
				// --------------------------------------------------
				
					{ 
						filePath_html : '/utility/visibility.html' , 
						filePath_js   : '/xFiles/js/articleScripts/utility/visibility.js' , 
						articleParameters : {
							category : 'utility'
						}
					} ,

				// visibility-extra
				// --------------------------------------------------
				
					{ 
						filePath_html : '/utility/visibility-extra.html' , 
						filePath_js   : '/xFiles/js/articleScripts/utility/visibility-extra.js' , 
						articleParameters : {
							category : 'utility'
						}
					} ,

				// text-style
				// --------------------------------------------------
				
					{ 
						filePath_html : '/utility/typography-textStyle.html' , 
						filePath_js   : '/xFiles/js/articleScripts/utility/typography-textStyle.js' , 
						articleParameters : {
							category : 'utility'
						}
					} ,

				// position
				// --------------------------------------------------
				
					{ 
						filePath_html : '/utility/position.html' , 
						filePath_js   : '/xFiles/js/articleScripts/utility/position.js' , 
						articleParameters : {
							category : 'utility'
						}
					} ,

				// float
				// --------------------------------------------------
				
					{ 
						filePath_html : '/utility/float.html' , 
						filePath_js   : '/xFiles/js/articleScripts/utility/float.js' , 
						articleParameters : {
							category : 'utility'
						}
					} ,

			// Functionality
			// --------------------------------------------------

				// syntacticSugar
				// --------------------------------------------------
				
					{  
						filePath_html : '/functionality/syntacticSugar.html' , 
						filePath_js   : '/xFiles/js/articleScripts/functionality/syntacticSugar.js' , 
						articleParameters : {
							category : 'functionality'
						}
					} ,

				// route
				// --------------------------------------------------
				
					{ 
						filePath_html : '/functionality/route.html' , 
						filePath_js   : null , 
						articleParameters : {
							category : 'functionality'
						}
					} ,

				// scrollTrigger
				// --------------------------------------------------
				
					{ 
						filePath_html : '/functionality/scrollTrigger.html' , 
						filePath_js   : '/xFiles/js/articleScripts/functionality/scrollTrigger.js' , 
						articleParameters : {
							category : 'functionality'
						}
					} ,

				// deferDOMLoaded
				// --------------------------------------------------
				
					{ 
						filePath_html : '/functionality/deferDOMLoaded.html' , 
						filePath_js   : '/xFiles/js/articleScripts/functionality/deferDOMLoaded.js' , 
						articleParameters : {
							category : 'functionality'
						}
					} ,

				// testPage
				// --------------------------------------------------
				
					{ 
						filePath_html : '/functionality/testPage.html' , 
						filePath_js   : '/xFiles/js/articleScripts/functionality/testPage.js' , 
						articleParameters : {
							category : 'functionality'
						}
					} ,

			// Effects
			// --------------------------------------------------

				// appear
				// --------------------------------------------------
				
					{ 
						filePath_html : '/effects/appear.html' , 
						filePath_js   : '/xFiles/js/articleScripts/effects/appear.js' , 
						articleParameters : {
							category : 'effects'
						}
					} ,

				// imgHover
				// --------------------------------------------------
				
					{ 
						filePath_html : '/effects/imgHover.html' , 
						filePath_js   : '/xFiles/js/articleScripts/effects/imgHover.js' , 
						articleParameters : {
							category : 'effects'
						}
					} ,

				// faSpinner
				// --------------------------------------------------
				
					{ 
						filePath_html : '/effects/faSpinner.html' , 
						filePath_js   : '/xFiles/js/articleScripts/effects/faSpinner.js' , 
						articleParameters : {
							category : 'effects'
						}
					} ,

				// filters
				// --------------------------------------------------
				
					{ 
						filePath_html : '/effects/filters.html' , 
						filePath_js   : '/xFiles/js/articleScripts/effects/filters.js' , 
						articleParameters : {
							category : 'effects'
						}
					} ,

				// hover
				// --------------------------------------------------
				
					{ 
						filePath_html : '/effects/hover.html' , 
						filePath_js   : '/xFiles/js/articleScripts/effects/hover.js' , 
						articleParameters : {
							category : 'effects'
						}
					} ,

				// tooltip
				// --------------------------------------------------
				
					{ 
						filePath_html : '/effects/tooltip.html' , 
						filePath_js   : '/xFiles/js/articleScripts/effects/tooltip.js' , 
						articleParameters : {
							category : 'effects'
						}
					} ,

				// tooltip
				// --------------------------------------------------
				
					{ 
						filePath_html : '/effects/ribbon.html' , 
						filePath_js   : '/xFiles/js/articleScripts/effects/ribbon.js' , 
						articleParameters : {
							category : 'effects'
						}
					} ,

				// tooltip
				// --------------------------------------------------
				
					{ 
						filePath_html : '/effects/skeletonOverlay.html' , 
						filePath_js   : '/xFiles/js/articleScripts/effects/skeletonOverlay.js' , 
						articleParameters : {
							category : 'effects'
						}
					} ,

			// Components
			// --------------------------------------------------

				// canvas
				// --------------------------------------------------
				
					{ 
						filePath_html : '/components/canvas.html' , 
						filePath_js   : '/xFiles/js/articleScripts/components/canvas.js' , 
						articleParameters : {
							category : 'components'
						}
					} ,

				// tabs
				// --------------------------------------------------
				
					{ 
						filePath_html : '/components/tabs.html' , 
						filePath_js   : '/xFiles/js/articleScripts/components/tabs.js' , 
						articleParameters : {
							category : 'components'
						}
					} ,

				// cssTabs
				// --------------------------------------------------
				
					{ 
						filePath_html : '/components/cssTabs.html' , 
						filePath_js   : null , 
						articleParameters : {
							category : 'components'
						}
					} ,

				// spinner
				// --------------------------------------------------
				
					{ 
						filePath_html : '/components/spinner.html' , 
						filePath_js   : '/xFiles/js/articleScripts/components/spinner.js' , 
						articleParameters : {
							category : 'components'
						}
					} ,

				// spoiler
				// --------------------------------------------------
				
					{ 
						filePath_html : '/components/spoiler.html' , 
						filePath_js   : '/xFiles/js/articleScripts/components/spoiler.js' , 
						articleParameters : {
							category : 'components'
						}
					} ,

				// cssCounter
				// --------------------------------------------------
				
					{ 
						filePath_html : '/components/cssCounter.html' , 
						filePath_js   : '/xFiles/js/articleScripts/components/cssCounter.js' , 
						articleParameters : {
							category : 'components'
						}
					} ,

				// checkbox
				// --------------------------------------------------
				
					{ 
						filePath_html : '/components/checkbox.html' , 
						filePath_js   : null , 
						articleParameters : {
							category : 'components'
						}
					} ,

					// input
					// --------------------------------------------------
					
						{ 
							filePath_html : '/components/input.html' , 
							filePath_js   : null , 
							articleParameters : {
								category : 'components'
							}
						} ,

			// Snippets
			// --------------------------------------------------

				// cssvendorPreffixes
				// --------------------------------------------------
				
					{ 
						filePath_html : '/snippets/cssvendorPreffixes.html' , 
						filePath_js   : '/xFiles/js/articleScripts/snippets/cssVendorPrefixes.js' , 
						articleParameters : {
							category : 'snippets'
						}
					} ,

				// cssResponsiveUtilityBaseline
				// --------------------------------------------------
				
					{ 
						filePath_html : '/snippets/cssResponsiveUtilityBaseline.html' , 
						filePath_js   : '/xFiles/js/articleScripts/snippets/cssResponsiveUtilityBaseline.js' , 
						articleParameters : {
							category : 'snippets'
						}
					} ,

				// cssSelectors
				// --------------------------------------------------
				
					{ 
						filePath_html : '/snippets/cssSelectors.html' , 
						filePath_js   : null , 
						articleParameters : {
							category : 'snippets'
						}
					} ,

				// cssVariablesFallbacks
				// --------------------------------------------------
				
					{ 
						filePath_html : '/snippets/cssVariablesFallbacks.html' , 
						filePath_js   : null , 
						articleParameters : {
							category : 'snippets'
						}
					} ,

				// table-checkersBackground
				// --------------------------------------------------
				
					{ 
						filePath_html : '/snippets/table-checkersBackground.html' , 
						filePath_js   : '/xFiles/js/articleScripts/snippets/table-checkersBackground.js' , 
						articleParameters : {
							category : 'snippets'
						}
					} ,

				// whenDocReady
				// --------------------------------------------------
				
					{ 
						filePath_html : '/snippets/whenDocReady.html' , 
						filePath_js   : null , 
						articleParameters : {
							category : 'snippets'
						}
					} ,

				// usefulHacks
				// --------------------------------------------------
				
					{ 
						filePath_html : '/snippets/usefulHacks.html' , 
						filePath_js   : null , 
						articleParameters : {
							category : 'snippets'
						}
					} ,

				// valueObjects
				// --------------------------------------------------
				
					{ 
						filePath_html : '/snippets/valueObjects.html' , 
						filePath_js   : '/xFiles/js/articleScripts/snippets/valueObjects.js' , 
						articleParameters : {
							category : 'snippets'
						}
					} ,

			// Tools
			// --------------------------------------------------

				// fontAwesomeIconList
				// --------------------------------------------------
				
					{ 
						filePath_html : '/tools/fontAwesomeIconList.html' , 
						filePath_js   : '/xFiles/js/articleScripts/tools/fontAwesomeIconList.js' , 
						articleParameters : {
							category : 'tools'
						}
					} ,

				// minifier
				// --------------------------------------------------
				
					{ 
						filePath_html : '/tools/minifier.html' , 
						filePath_js   : '/xFiles/js/articleScripts/tools/minifier.js' , 
						articleParameters : {
							category : 'tools'
						}
					} ,

				// cssColorNames
				// --------------------------------------------------
				
					{ 
						filePath_html : '/tools/cssColorNames.html' , 
						filePath_js   : '/xFiles/js/articleScripts/tools/cssColorNames.js' , 
						articleParameters : {
							category : 'tools'
						}
					} 
		];

	// intermediary functions
	// --------------------------------------------------

		// Create [intermediary] 'wrapper' Object
		// --------------------------------------------------

			asterisk.route.intermediary = {};

		// asterisk.route.intermediary.getUrlParameter()
		// --------------------------------------------------
		// -- separate individual url Parameters

			asterisk.route.intermediary.getUrlParameter = function(urlParamName__string) {
				var urlParamName__string = urlParamName__string.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
				var regex = new RegExp('[\\?&]' + urlParamName__string + '=([^&#]*)');
				var results = regex.exec(location.search);
				return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
			};

		// asterisk.route.currentPage
		// --------------------------------------------------
			// -- store the [current Page]'s [eventHandlers] and [eventListeners] in order to be able to remove them when a [new Page] is loaded

			asterisk.route.currentPage = {
				eventHandlers  : {} , // store eventHandlers  used in the [current Page]
				eventListeners : [] , // store eventListeners used in the [current Page]

				// optional parameters that can be used as an alternative to storing refferences within Clojures
				functions      : {} , // store functions      used in the [current Page]
				objects        : {} , // store objects        used in the [current Page]
			};

			// asterisk.route.page.addEvent()
			// --------------------------------------------------
				// -- saves all eventListeners added to the Elements within the [current Page] 
				// -- ONLY IF THIS FUNCTION IS USED FOR ADDING SAID EVENT

				asterisk.route.currentPage.addEvent = function( elem , eventType__string , eventHandlerRefference__function ) {

					elem.addEventListener(eventType__string , eventHandlerRefference__function);

					var newObj = {};
					newObj.eventListener_targetElement = elem;
					newObj.eventListener_type          = eventType__string;
					newObj.eventListener_handler       = eventHandlerRefference__function;

					asterisk.route.currentPage.eventListeners.push(newObj);
				};

			// when unloading a Page (the [current Page]) - before loading a [new Page]
			// --------------------------------------------------

				// asterisk.route.page.unload()
				// --------------------------------------------------
					// -- removes all STORED eventListeners (added with asterisk.route.currentPage.addEvent() ) from their respective Elements
					// -- removes all Parent/Child refferences and internal text nodes from all Elements
					// -- removes all STORED functions (added as asterisk.route.currentPage.functions.asdf = function(){} )
					// -- removes all eventListeners from asterisk components (if any are present)

					asterisk.route.currentPage.unload = function() {

						asterisk.route.currentPage.removeEventListeners();
						asterisk.route.currentPage.removeEventHandlerFunctions();
						asterisk.route.currentPage.removeOptionalParameters();
						asterisk.route.currentPage.removeElements();

						if (asterisk.components) { asterisk.route.currentPage.removeAsteriskComponentsEventListeners() };
					};

				// asterisk.route.currentPage.removeEventListeners()
				// --------------------------------------------------

					asterisk.route.currentPage.removeEventListeners = function() {

						asterisk.route.currentPage.eventListeners.map(function(item){

							item.eventListener_targetElement.removeEventListener(item.eventListener_type , item.eventListener_handler);

							item.eventListener_targetElement = undefined;
							item.eventListener_type          = undefined;
							item.eventListener_handler       = undefined;
						});

						asterisk.route.currentPage.eventListeners = [];
					};

				// asterisk.route.currentPage.removeEventHandlerFunctions()
				// --------------------------------------------------

					asterisk.route.currentPage.removeEventHandlerFunctions = function() {

						var currentPage_eventHandlers = asterisk.route.currentPage.eventHandlers;

						for (var key in currentPage_eventHandlers) {
							if (currentPage_eventHandlers.hasOwnProperty(key)) {
								currentPage_eventHandlers[key] = undefined
							}
						};

						asterisk.route.currentPage.eventHandlers = {};
					};

				// asterisk.route.currentPage.removeOptionalParameters()
				// --------------------------------------------------

					asterisk.route.currentPage.removeOptionalParameters = function() {

						var currentPage_functions = asterisk.route.currentPage.functions;

						for (var key in currentPage_functions) {
							if (currentPage_functions.hasOwnProperty(key)) {
								currentPage_functions[key] = undefined
							}
						};

						asterisk.route.currentPage.functions = {};

						////////// For objects/arrays it is required to do a recursion function to remove all keys refferences also - they might be objects also
						var currentPage_objects = asterisk.route.currentPage.objects;

						for (var key in currentPage_objects) {
							if (currentPage_objects.hasOwnProperty(key)) {
								currentPage_objects[key] = undefined
							}
						};

						asterisk.route.currentPage.objects = {};
					};

				// asterisk.route.currentPage.removeElements()
				// --------------------------------------------------
					// -- eliminates all Parent/Child refferences from Elements that are no longer in the DOM 

					asterisk.route.currentPage.removeElements = function(currentView__element) {

						var curr_view = currentView__element || document.getElementById('__route__mainView');
						var elements = Array.from(curr_view.querySelectorAll('*'));

						var trashBin = document.createElement('DIV');
						elements.map(x => trashBin.appendChild(x));
						elements.map(function(x) { 
							trashBin.removeChild(x);
							x.innerHTML = '';
							x = undefined;
						});

						trashBin.innerHTML = '';
					};

				// asterisk.route.currentPage.removeAsteriskComponentsEventListeners()
				// --------------------------------------------------
					// -- asterisk Components have an checkDOM() method attached, which removes the eventListeners on elements that are removed from the DOM

					asterisk.route.currentPage.removeAsteriskComponentsEventListeners = function() {
						for (var key in asterisk.components) {
							if (asterisk.components.hasOwnProperty(key)) {
								var checkDOM = asterisk.components[key].checkDOM;
								if (checkDOM) { checkDOM() }
							}
						}
					};

		// Loading a new Page
		// --------------------------------------------------

			asterisk.route.loadPage = function(urlIdentifier__string , historyState__string) {

				var historyState = historyState__string || 'push';
				var mainView = document.getElementById('__route__mainView');

				// Refferences
				var loadPage_onBegin          = asterisk.route.intermediary.loadPage_onBegin;
				var loadPage_updateDOM        = asterisk.route.intermediary.loadPage_updateDOM;
				var loadPage_runDefaultScript = asterisk.route.intermediary.loadPage_runDefaultScript;
				var loadPage_onEnd            = asterisk.route.intermediary.loadPage_onEnd;

				// add loading spinner
				loadPage_onBegin();

				// unload current Page
				asterisk.route.currentPage.unload();

				// get template Object
				var current_routeTemplate = asterisk.route.paths.find(item => item.filePath_html == urlIdentifier__string);

				if (current_routeTemplate) {

					loadPage_updateDOM(current_routeTemplate);

					asterisk.route.info.currentTemplate = current_routeTemplate;
					var filePath_html = current_routeTemplate.filePath_html;
					var filePath_js   = current_routeTemplate.filePath_js;

					if (filePath_html && filePath_html != '') {

						var htmlFile_url;
						switch(window.location.protocol) {
							case 'file:' :
								htmlFile_url = asterisk.route.info.url_rootHost + filePath_html; break;
							case 'http:' : 
							case 'https:': 
								htmlFile_url = filePath_html; break;
						};

						fetch(htmlFile_url)

							.then(function(response) {
								if (!response.ok) { throw Error(response.statusText) };
								return response.text() 
							})

							.then(function(text) {
								mainView.innerHTML = text;
								if      (historyState == 'replace') { history.replaceState(null, null, htmlFile_url) } 
								else if (historyState == 'push')    { history.pushState   (null, null, htmlFile_url) }
							})

							.then(function() {
								if (filePath_js && filePath_js != '') {

									var jsFile_url;
									switch(window.location.protocol) {
										case 'file:' :
											jsFile_url = asterisk.route.info.url_rootHost + filePath_js; break;
										case 'http:' : 
										case 'https:': 
											jsFile_url = filePath_js; break;
									};

									var newScript = document.createElement('SCRIPT');
									newScript.src = jsFile_url;
									newScript.onload = function() {
										loadPage_runDefaultScript(); 
										setTimeout(function(){ loadPage_onEnd() }, 1);
										newScript.onload = null;
									};
									mainView.appendChild(newScript);

								} else {

									loadPage_runDefaultScript();
									setTimeout(function(){ loadPage_onEnd() }, 1)

								}
							})

					} else {
						console.log('Current Template does not have a [filePath_html] : ', filePath_html)
					}

				} else {
					console.log('No routing template found, with [urlIdentifier] : ', urlIdentifier__string)
				}
			};

		// Article Click
		// --------------------------------------------------

			asterisk.route.articleClick = function(e) {

				var target = e.target; 

				if ((" "+target.className+" ").indexOf(" __route__pageLink ") > -1) {
					e.preventDefault();
					asterisk.route.loadPage(target.getAttribute('href'));
				}
			};

			document.addEventListener('click', asterisk.route.articleClick);

		// PopState
		// --------------------------------------------------

			asterisk.route.intermediary.popstate = function() {
				var urlIdentifier = window.location.href.replace(asterisk.route.info.url_rootHost , '').replace(window.location.protocol + '//' , '');
				asterisk.route.loadPage(urlIdentifier , 'replace');
			};

			window.addEventListener('popstate', asterisk.route.intermediary.popstate);

		// on initial loading of website
		// -----------------------------------------------------
			
			asterisk.route.intermediary.onInitialLoad = function() {

				switch(window.location.protocol) {
					case 'file:' :
						asterisk.route.info.url_rootHost  = asterisk.route.info.predefined.localFile_rootPath;
						asterisk.route.info.url_indexPage = asterisk.route.info.predefined.localFile_rootPath + '/' + asterisk.route.info.predefined.localFile_rootPage;
						break;

					case 'http:' : 
					case 'https:': 
						asterisk.route.info.url_rootHost  = window.location.host;
						asterisk.route.info.url_indexPage = window.location.host;
						break;
				};

				var currentArticleUrl = asterisk.route.intermediary.getUrlParameter('load').toLowerCase();

				if (currentArticleUrl) {

					if (currentArticleUrl != '') {

						var current_routeTemplate = asterisk.route.paths.find(item => item.filePath_html.toLowerCase() == currentArticleUrl);

						if (current_routeTemplate) {

							asterisk.route.info.currentTemplate = current_routeTemplate;
							asterisk.route.loadPage(current_routeTemplate.filePath_html , 'replace');

						} else {

							asterisk.route.loadPage(asterisk.route.paths[0].filePath_html , 'replace'); // load first page - as default if incorrect params

						};
					};

				} else {

					asterisk.route.loadPage(asterisk.route.paths[0].filePath_html , 'replace'); // load first page - as default if no params

				}

				document.body.classList.remove('faSpinner');
			};

		// Run when a new page has started loading
		// --------------------------------------------------

			asterisk.route.intermediary.loadPage_onBegin = function() {};

		// Update Elements outside of the [__route__mainView]
		// --------------------------------------------------

			asterisk.route.intermediary.loadPage_updateDOM = function() {};
			
		// Run for each page that is loaded
		// --------------------------------------------------

			asterisk.route.intermediary.loadPage_runDefaultScript = function() {};

		// Run when a new page has finished loading
		// --------------------------------------------------

			asterisk.route.intermediary.loadPage_onEnd = function() {};