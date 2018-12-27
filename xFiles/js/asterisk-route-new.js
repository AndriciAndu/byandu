
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.route = asterisk.route || {} ;

	// manually set parameters 
	// --------------------------------------------------
	// ***REQUIRED*** to be set both [here] and in [asterisk-route.js]

		asterisk.route.templates = [

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

		asterisk.route.info = {
			predefined : {
				localFile_rootFolder : 'file:///d:/webfiles/testbuild' ,
				indexPageName : 'index.html'
			} ,
			currentTemplate : null , 
			url_rootHost    : ''   ,
			url_indexPage   : ''
		};
		asterisk.route.info.mainView = document.getElementById('__route__mainView');

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

		// Run when a new page has started loading
		// --------------------------------------------------

			asterisk.route.intermediary.loadPage_onBegin = function() {
				asterisk.route.info.mainView.classList.add('faSpinner', 'faSpinner-fast', 'faSpinner-lg');

				// while (asterisk.route.info.mainView.firstChild) {
				// 	console.log(asterisk.route.info.mainView.firstChild)
				// 	asterisk.route.info.mainView.removeChild(asterisk.route.info.mainView.firstChild);
				// }
			};

		// Run when a new page has finished loading
		// --------------------------------------------------

			asterisk.route.intermediary.loadPage_onEnd = function() {
				asterisk.route.info.mainView.classList.remove('faSpinner', 'faSpinner-fast', 'faSpinner-lg');

				asterisk.route.info.mainView.focus(); // set focus to article (also collapses navigation menu if not hovered)

				setTimeout(function(){	// on mobile
					document.getElementById('body-sideNav-toggleDisplay-mobile').checked = false;
				}, 200);

				for (var key in asterisk.components) {
					if (asterisk.components.hasOwnProperty(key)) {

						var asteriskComponent = asterisk.components[key];

						if (asteriskComponent.checkDOM) {
							asteriskComponent.checkDOM()
						}

					}
				};
			};

		// Run for each page that is loaded
		// --------------------------------------------------

			asterisk.route.intermediary.loadPage_runDefaultScript = function() {
				var targetedPreElements = Array.from(document.getElementsByClassName('pre-removeTabSpaces'));

				targetedPreElements.map(function(item) {
					item.innerHTML = string_remove_tabSpaces(item.innerHTML);
				});
			};

		// Update Elements outside of the [__route__mainView]
		// --------------------------------------------------

			asterisk.route.intermediary.updateDOM = function(articleParams__obj) {

				var myTargets_1 = Array.from(document.getElementsByClassName('__route__category'));
				var identifierValue = articleParams__obj.articleParameters.category;

				myTargets_1.map(function(elem) {
					if (elem.getAttribute('data-categoryName') == identifierValue) { 
						elem.classList.add('active') 
					} else { 
						elem.classList.remove('active') 
					}
				});

				var myTargets_2 = Array.from(document.getElementsByClassName('__route__articleBtn'));
				var identifierValue = articleParams__obj.filePath_html;

				myTargets_2.map(function(elem) {
					if (elem.pathname == identifierValue) { 
						elem.classList.add   ('active') 
					} else { 
						elem.classList.remove('active') 
					}
				});

			};

		// Loading a new Page
		// --------------------------------------------------

			asterisk.route.loadPage = function(urlIdentifier__string , historyState__string) { // example: 'utility/flex'

				var historyState = historyState__string || 'push';
				var mainView = asterisk.route.info.mainView;

				// add loading spinner
				asterisk.route.intermediary.loadPage_onBegin();

				// get template Object
				var current_routeTemplate = asterisk.route.templates.find(item => item.filePath_html == urlIdentifier__string);
				console.log(current_routeTemplate);
				if (current_routeTemplate) {

					asterisk.route.intermediary.updateDOM(current_routeTemplate);

					asterisk.route.info.currentTemplate = current_routeTemplate;
					var filePath_html   = current_routeTemplate.filePath_html;
					console.log(filePath_html)

					if (filePath_html && filePath_html != '') {

						var htmlFile_url = asterisk.route.info.url_rootHost + filePath_html;
						console.log(htmlFile_url)
						// 1. get the html file
						fetch(htmlFile_url)

						// 2. check the response
						.then(function(response) { console.log(response)
							if (!response.ok) { throw Error(response.statusText) }
							return response.text() 
						})

						// 3. update the innerHTML
						.then(function(text) {
							mainView.innerHTML = text;

							console.log(text)

							if (historyState == 'replace') { 
								history.replaceState(null, null, htmlFile_url);
							} else if (historyState == 'push') {
								history.pushState(null, null, htmlFile_url);
							} // ignore if [null]

							console.log('asd')
						})

						// 4. check if script
						.then(function() {

							var filePath_js = current_routeTemplate.filePath_js;

							if (filePath_js && filePath_js != '') {

								var jsFile_url = asterisk.route.info.url_rootHost + filePath_js;
								var newScript = document.createElement('SCRIPT');
								newScript.src = jsFile_url;

								newScript.onload = function() {
									asterisk.route.intermediary.loadPage_runDefaultScript(); 
									setTimeout(function(){ asterisk.route.intermediary.loadPage_onEnd() }, 1);
									newScript.onload = null;
								};

								mainView.appendChild(newScript);

							} else {

								asterisk.route.intermediary.loadPage_runDefaultScript();
								setTimeout(function(){ asterisk.route.intermediary.loadPage_onEnd() }, 1)

							}
						})

					} else {
						console.log('Current Template does not have a [filePath_html] : ', filePath_html)
					}

				} else {
					console.log('No template found, with [urlIdentifier] : ', urlIdentifier__string)
				}
			};

		// Article Click
		// --------------------------------------------------

			asterisk.route.articleClick = function(e) {

				var target = e.target; 

				if ((" "+target.className+" ").indexOf(" __route__articleBtn ") > -1) {
					e.preventDefault();
					asterisk.route.loadPage(target.getAttribute('href'));
				}
			};

			document.getElementById('byAndu-navbarSide').addEventListener('click', asterisk.route.articleClick);

		// PopState
		// --------------------------------------------------

			asterisk.route.intermediary.popstate = function() {
				var urlIdentifier = window.location.href.replace(asterisk.route.info.url_rootHost , '');
				asterisk.route.loadPage(urlIdentifier , 'replace');
			};

			window.addEventListener('popstate', asterisk.route.intermediary.popstate);

		// on initial loading of website
		// -----------------------------------------------------
			
			(function(){ 

				switch(window.location.protocol) {
					case 'file:' :
						asterisk.route.info.url_rootHost  = asterisk.route.info.predefined.localFile_rootFolder;
						asterisk.route.info.url_indexPage = asterisk.route.info.predefined.localFile_rootFolder + '/' + asterisk.route.info.predefined.indexPageName;
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

						var current_routeTemplate = asterisk.route.templates.find(item => item.filePath_html.toLowerCase() == currentArticleUrl);
						console.log(current_routeTemplate);

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

			})();
