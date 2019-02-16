
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.route = asterisk.route || {} ;

	// manually set parameters 
	// --------------------------------------------------
	// ***REQUIRED*** to be set both [here] and in [asterisk-route.js]

		var localFile_rootPage = 'index.html';
		var localFile_rootPath = 'file:///d:/webfiles/testbuild' ;

	// oute.info Object 
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

				// extra
				// --------------------------------------------------
				
					{ 
						filePath_html : '/functionality/extra.html' , 
						filePath_js   : '/xFiles/js/articleScripts/functionality/extra.js' , 
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
						filePath_js   : null , 
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

			// Components
			// --------------------------------------------------

				// loadingSpinner
				// --------------------------------------------------
				
					{ 
						filePath_html : '/components/loadingSpinner.html' , 
						filePath_js   : '/xFiles/js/articleScripts/components/loadingSpinner.js' , 
						articleParameters : {
							category : 'components'
						}
					} ,

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

		// separate individual url Parameters
		// --------------------------------------------------

			asterisk.route.intermediary.getUrlParameter = function(urlParamName__string) {
				var urlParamName__string = urlParamName__string.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
				var regex = new RegExp('[\\?&]' + urlParamName__string + '=([^&#]*)');
				var results = regex.exec(location.search);
				return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
			};

		// removeEistingElements
		// --------------------------------------------------

			asterisk.route.intermediary.removeExistingElements = function(currentView__element) {

				var curr_view = currentView__element || document.getElementById('__route__mainView');
				var trashBin = document.createElement('DIV');

				var elements = Array.from(curr_view.querySelectorAll('*'));
				elements.map(x => trashBin.appendChild(x));
				elements.map(function(x) { 
					trashBin.removeChild(x);
					x.innerHTML = '';
					x = null;
				});
				trashBin.innerHTML = '';

				for (var key in asterisk.components) {
					if (asterisk.components.hasOwnProperty(key)) {
						if (asterisk.components[key].checkDOM) { asterisk.components[key].checkDOM() }
					}
				};
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
				var removeExistingElements    = asterisk.route.intermediary.removeExistingElements;

				// add loading spinner
				loadPage_onBegin();
				removeExistingElements();

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

							asterisk.route.loadPage('/utility/gridSystem-12col.html' , 'replace'); // default page if incorrect params

						};
					};

				} else {

					asterisk.route.loadPage('/utility/gridSystem-12col.html' , 'replace'); // default page if no params

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