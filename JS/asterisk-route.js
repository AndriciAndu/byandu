
// Updating Questions - by category - navbar-item click
// --------------------------------------------------

	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;

		asteriskObj.routeObject = asteriskObj.routeObject || {} ;
		var routeObject = asteriskObj.routeObject;

	// manually set parameters 
	// --------------------------------------------------
	// ***REQUIRED*** to be set both [here] and in [asterisk-route.js]

		routeObject.config = {
			pathItems : ['category' , 'article']
		}

		routeObject.info = {
			indexPageUrl : '/index.html' ,	// [string] manually set - required for [://file] || ignored for [http://] or [https://]
			templatePath : '/templates'		// [string] manually set - [string] if path || empty [string] if not

			/*
				pathItems : ['category' , 'article']
			*/
		};

		// on initial loading of website
		// -----------------------------------------------------
			
			(function(){

				var infoObj = routeObject.info;

				infoObj.mainView = document.getElementById('__route__mainView');
				infoObj.navElements_category = Array.from(document.getElementsByClassName('__route__category'));
				infoObj.navElements_article  = Array.from(document.getElementsByClassName('__route__articleBtn'));

				var currentUrl = window.location.href;

				// if loading the website from [article] page
				if (currentUrl.indexOf('?load=') > -1) {

					// get hrefDetails object - which was sent through the url from [route-intermediary.js]
					var hrefDetailsString = currentUrl.slice(currentUrl.indexOf('?load=') + 6).replace(/%22/g, '"');
					var hrefDetailsObj = JSON.parse(hrefDetailsString);

					infoObj.rootPage               = hrefDetailsObj.rootPage;
					infoObj.current_categoryName   = hrefDetailsObj.categoryName;
					infoObj.current_articleUrl     = hrefDetailsObj.articleUrl;
					infoObj.current_hrefIdentifier = hrefDetailsObj.href_identifier;

				// if loading website from the [index] page
				} else {

					infoObj.rootPage = currentUrl.replace(infoObj.indexPageUrl , '');
					infoObj.current_categoryName   = infoObj.navElements_category[0].getAttribute('data-categoryName').replace(/\//g, '');
					infoObj.current_articleUrl     = infoObj.navElements_article [0].getAttribute('href').replace(/\//g, '');
					infoObj.current_hrefIdentifier = infoObj.templatePath + '/' + infoObj.current_categoryName + '/' + infoObj.current_articleUrl;
					
				};
					
				infoObj.current_redirectUrl = infoObj.rootPage + infoObj.current_hrefIdentifier;
				history.replaceState(null, null, infoObj.current_redirectUrl);

				/*
					routeObject.info {

						rootPage : [string]

						indexPageUrl : [string]
						templatePath : [string]

						current_categoryName   : [string]
						current_articleUrl     : [string]
						current_hrefIdentifier : [string] - templatePath + '/' + current_categoryName + '/' + current_articleUrl

						navElements_category   : [array] of [HTML Elements]
						navElements_article    : [array] of [HTML Elements]
					}
					*/

			})();

		// Route - Navigation 
		// --------------------------------------------------

				routeObject.onPageLoad = function() {
					var targetedPreElements = Array.from(document.getElementsByClassName('pre-removeTabSpaces'));

					targetedPreElements.map(function(item) {
						item.innerHTML = string_remove_tabSpaces(item.innerHTML);
					});
				};
				//

			// Categories - Active Status
			// --------------------------------------------------

				routeObject.navElements_category_updateActiveStatus = function() {

					var categoryName = routeObject.info.current_categoryName.replace(/\//g, '').toLowerCase();
					var items        = routeObject.info.navElements_category;

					items.map(function(item) {
						if (item.getAttribute('data-categoryName').toLowerCase() == categoryName) 	{ item.classList   .add('active') } 
						else 																		{ item.classList.remove('active') }
					})
				};

			// Articles - Active Status
			// --------------------------------------------------

				routeObject.navElements_article_updateActiveStatus = function() {

					var articleUrl = routeObject.info.current_articleUrl.replace(/\//g, '').toLowerCase();
					var items      = routeObject.info.navElements_article;

					items.map(function(item) {
						if (item.getAttribute('href').toLowerCase() == articleUrl)	{ item.classList   .add('active') } 
						else 											 			{ item.classList.remove('active') }
					})
				};

			// Fetch HTML for updating mainView innerHTML
			// --------------------------------------------------

				routeObject.fetchAndUpdateInnerHTML = function(urlString) { 
					fetch(urlString)
						.then(function(response) { return response.text() })
							.then(function(text) { 
								routeObject.info.mainView.classList.add('faSpinner', 'faSpinner-fast', 'faSpinner-lg');
								routeObject.info.mainView.innerHTML = text; 
							})
							.then(function() { routeObject.checkArticleScripts() });
				};

			// Check if updated mainView has an extra script that needs to run
			// --------------------------------------------------

				routeObject.checkArticleScripts = function() {

					var myScript = document.getElementById('runScript'); // __route__articleScript

					if (myScript) {

						fetch(myScript.getAttribute('data-src'))
							.then(function(response) { return response.text() })
								.then(function(text) {
									eval(text);
									routeObject.onPageLoad(); // default script that runs for all pages
									setTimeout(function(){
										routeObject.info.mainView.classList.remove('faSpinner', 'faSpinner-fast', 'faSpinner-lg')
									}, 1)
								})
					} else {

						routeObject.onPageLoad(); // default script that runs for all pages

						setTimeout(function(){
							routeObject.info.mainView.classList.remove('faSpinner', 'faSpinner-fast', 'faSpinner-lg')
						}, 1)
					};

				};

			// Load Page
			// --------------------------------------------------

				routeObject.updateArticleInfo = function (categoryName , articleUrl) {

					var infoObj = routeObject.info;

					var categoryName    = '/' + categoryName.replace(/\//g,'');
					var articleUrl      = '/' + articleUrl.replace(/\//g,'');
					var hrefIdentifier  = infoObj.templatePath + categoryName + articleUrl;

					infoObj.current_categoryName   = categoryName;
					infoObj.current_articleUrl     = articleUrl;
					infoObj.current_hrefIdentifier = hrefIdentifier;
					infoObj.current_redirectUrl    = infoObj.rootPage + hrefIdentifier;

				};

				routeObject.loadPage = function() {

					routeObject.info.mainView.classList.add('faSpinner', 'faSpinner-fast', 'faSpinner-lg');

					var infoObj = routeObject.info;

					var articleUrl   = infoObj.current_articleUrl;
					var categoryName = infoObj.current_categoryName;

					routeObject.navElements_article_updateActiveStatus(articleUrl);
					routeObject.navElements_category_updateActiveStatus(categoryName);
					routeObject.fetchAndUpdateInnerHTML(infoObj.current_redirectUrl);

				};

				routeObject.articleClick = function(elem) {

					var categoryName = elem.parentElement.getAttribute('data-categoryName');
					var articleUrl   = elem.getAttribute('href');
					
					routeObject.updateArticleInfo(categoryName , articleUrl);
					routeObject.loadPage();
					history.pushState(null, null, routeObject.info.current_redirectUrl);

					routeObject.info.mainView.focus(); // set focus to article (also collapses navigation menu if not hovered)

					setTimeout(function(){	// on mobile
						document.getElementById('body-sideNav-toggleDisplay-mobile').checked = false;
					}, 200);

				};

// Initial Load
// --------------------------------------------------

		(function(){

			routeObject.loadPage();
			history.replaceState(null, null, routeObject.info.current_redirectUrl);

			setTimeout(function(){
				var body = document.body;
				body.classList.remove('faSpinner')
			}, 1);

		})();


// Back/Forward - Popstate eventListener
// --------------------------------------------------

	(function(){

		window.addEventListener('popstate', function(event) { 

			var href_initial = window.location.href.toLowerCase();

			// get the href (or portion of the href) - to check which page we are on
			var hrefString = href_initial;	
			var templatePath = routeObject.info.templatePath

			if (templatePath.length > 1) {
				hrefString = href_initial.slice(href_initial.indexOf(templatePath) + templatePath.length)
			};

			// check which page we are on
			var currentMatch = hrefString.match(/\/[a-zA-Z0-9-.]+[^\/]/g);							// get all occurances of /something/somethingElse/etc
			var articleUrl   = currentMatch[currentMatch.length-1].replace(/\//g, '').replace('.html', '') + '.html'; 	// make sure to always have the .html extension
			var categoryName = currentMatch[currentMatch.length-2].replace(/\//g, '');

			routeObject.updateArticleInfo(categoryName , articleUrl);
			routeObject.loadPage();

		});

	})();

// Route HTMLElements - Event Listeners Init
// --------------------------------------------------

	(function(){

		// Question Click Event Listener 
		// --------------------------------------------------

			var articleButtons = Array.from(document.getElementsByClassName('__route__articleBtn'));
			
			articleButtons.map(function(item) { 
				item.addEventListener('click', function(e) { e.preventDefault(); routeObject.articleClick(this) })
			});
	})();

		// Build - if generating the navItems through JS
		// -----------------------------------------------------
		/*
			routeObject.build.categories = {

				utility 		: [
					{ name : 'Asterisk - Utility (Main)' 		, link : 'utility-main.html' 						} ,
					{ name : 'Grid System - 12 Col' 			, link : 'gridSystem-12col.html' 					} ,
					{ name : 'Grid System - Row' 				, link : 'gridSystem-row.html' 						} ,
					{ name : 'Flex' 							, link : 'flex.html' 								} ,
					{ name : 'Spacing' 							, link : 'spacing.html'								} ,
					{ name : 'Spacing - Row' 					, link : 'spacing-row.html' 						} ,
					{ name : 'Visibility' 						, link : 'visibility.html' 							} ,
					{ name : 'Visibility - Extra' 				, link : 'visibility-extra.html' 					} ,
					{ name : 'Text Style' 						, link : 'typography-textStyle.html' 				} ,
					{ name : 'Position' 						, link : 'position.html' 							} ,
					{ name : 'Float' 							, link : 'float.html' 								} 
				],

				functionality 	: [
					{ name : 'Checks || has* is*' 				, link : 'checks.html' 								} ,
					{ name : 'Returns || get* fetch*' 			, link : 'returns.html' 							} ,
					{ name : 'Array' 							, link : 'array.html' 								} ,
					{ name : 'Extra ~' 							, link : 'extra.html' 								} 
				],

				effects 		: [
					{ name : 'Appear Effects' 					, link : 'appear.html'								} ,
					{ name : 'Image Hover Effects' 				, link : 'imgHover.html' 							} ,
					{ name : 'faSpinner' 						, link : 'faSpinner.html' 							} ,
					{ name : 'Filters' 							, link : 'filters.html' 							} ,
					{ name : 'Hover Effects' 					, link : 'hover.html' 								} ,
					{ name : 'Text Clip Effects' 				, link : 'textClip.html' 							} ,
					{ name : 'Title' 							, link : 'title.html' 								}
				],

				components 		: [
					{ name : 'Loading Spinner' 					, link : 'loadingSpinner.html' 						} ,
					{ name : 'Canvas' 							, link : 'canvas.html' 								} ,
					{ name : 'Tabs' 							, link : 'tabs.html' 								} ,
					{ name : 'CSS-Only Tabs' 					, link : 'cssTabs.html'								} ,
					{ name : 'Accordion' 						, link : 'accordion.html' 							} ,
					{ name : 'Spoiler' 							, link : 'spoiler.html' 							} ,
					{ name : 'Onboarding' 						, link : 'onboarding.html' 							} ,
					{ name : 'Counter' 							, link : 'counter.html' 							} ,
					{ name : 'Checkbox' 						, link : 'checkbox.html' 							} ,
					{ name : 'Tooltip' 							, link : 'tooltip.html' 							} 
				],
				
				snippets 		: [
					{ name : 'CSS Vendor Prefixes' 				, link : 'cssvendorPreffixes.html' 					} ,
					{ name : 'CSS Variables - Fallback Syntax' 	, link : 'cssVariablesFallbacks.html'				} ,
					{ name : 'CSS Responsive-Utility Baseline' 	, link : 'cssResponsiveUtilityBaseline.html' 		} ,
					{ name : '* start-of-className' 			, link : 'cssSelector-startOfClassName.html' 		} ,
					{ name : '* if-n-siblings' 					, link : 'cssSelector-ifNSiblings.html' 			} ,
					{ name : '* at-least-n-siblings' 			, link : 'cssSelector-atLeastNSiblings.html' 		} ,
					{ name : 'Table-Cell - Checkers Background' , link : 'table-checkersBackground.html' 			} ,
					{ name : 'whenDocReady()' 					, link : 'whenDocReady.html' 						} ,
					{ name : 'Usefull \'Hacks\'' 				, link : 'usefulHacks.html' 						} 
				],
				
				tools 			: [
					{ name : 'FontAwesome (4.7.0) Icon List' 	, link : 'fontAwesomeIconList.html' 				} ,
					{ name : 'Tooltip Generator' 				, link : 'tooltipGenerator.html' 					} ,
					{ name : 'Table Cell - Checkers Background' , link : 'tableCheckersBackgroundGenerator.html' 	} 
				],
				
				articles 		: [
					{ 
						name : 'Prevent Child Focus Within Collapsed Parent' , 
						link : 'preventChildFocusWithinCollapsedParent.html' 				
					} ,

					{ 
						name : 'Better maxHeight Transition With Multiple transitionDelay' , 
						link : 'betterMaxHeightTransitionWithMultipleTransitionDelay.html' 					
					} ,

					{ 
						name : 'Better keyboard navigation for collapsible menus and interactible components with :focus-within' , 
						link : 'BetterKeyboardNavigationForCollapsibleMenusAndInteractibleComponentsWithFocus-within.html' 	
					} 
				]
			};
			*/