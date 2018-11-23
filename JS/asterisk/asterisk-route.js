
// Updating Questions - by category - navbar-item click
// --------------------------------------------------

	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;

		asteriskObj.routeObject = {} ;
		routeObject = asteriskObj.routeObject;

		// Intermediary Functions
		// --------------------------------------------------

			// Set href parameters
			// --------------------------------------------------

				switch(window.location.protocol) {
					case 'http:':
					case 'https:':	
					// remote file over http or https
						routeObject.href_hostname 	= window.location.hostname;
						break;

					case 'file:':	
					// local file
						var href_initial = window.location.href.toLowerCase();
						
						var href_identifier = '';
						if (href_initial.indexOf('/templates')  > -1) { 
							href_identifier = href_initial.slice(href_initial.indexOf('/templates'));
							routeObject.href_hostname = href_initial.replace(href_identifier, '');
						};

						routeObject.href_hostname = routeObject.href_hostname || href_initial;
						routeObject.href_hostname = routeObject.href_hostname.replace('?load=', '');
						routeObject.href_hostname = routeObject.href_hostname.replace('/index.html', ''); 
						break;

					default: 		
					// some other protocol
						console.log("Protocol is neither of: 'http:', 'https:' or 'file:'. [routeObject.href_hostname] will not be defined.");
				};

			// Get category - used in routeObject.articleItems_updateArticleList() as unique parameter 
			// --------------------------------------------------

				routeObject.getCategoryFromUrl = function() { 

					var urlString = window.location.href.toLowerCase();
					var current_category = null;

					if (urlString.indexOf('templates/') > -1) {
						var updated_urlString = urlString.slice(urlString.indexOf('templates/') + 10);			// slice right after "templates/"
						current_category = updated_urlString.substring(0, updated_urlString.indexOf('/'));		// slice until the first "/"
					}
					
					return current_category;
				};

			// Fetch HTML for updating mainView innerHTML
			// --------------------------------------------------

				routeObject.fetchHTML = function(urlString) { 
					fetch(urlString)
						.then(function(response) { return response.text() })
							.then(function(text) { document.getElementById('__route__mainView').innerHTML = text })
								.then(function() { routeObject.checkExtraScript() });
				};

			// Check if updated mainView has an extra script that needs to run
			// --------------------------------------------------

				routeObject.checkExtraScript = function() {
					var myScript = document.getElementById('runScript');
					if (myScript) {
						fetch(myScript.getAttribute('data-src'))
							.then(function(response) { return response.text() })
								.then(function(text) {
									eval(text);
									document.getElementById('__route__mainView').classList.remove('faSpinner', 'faSpinner-fast', 'faSpinner-lg');
								})
					}
				};

		// Navbar-top- Items Update (Active status)
		// --------------------------------------------------

			routeObject.categoryItems_updateActiveStatus = function(current_item) {
				var items = Array.from(document.getElementById('__route__categories').getElementsByClassName('__route__categories-item'));
				items.map(item => item.classList.remove('active'));
				current_item.classList.add('active');
			};

		// Navbar-side 
		// --------------------------------------------------

			// Navbar-side - Categories Update (Show/Hide status)
			// --------------------------------------------------

				routeObject.articleItems_updateArticleList = function(current_category) {

					var articlesContainer = document.getElementById('__route__articles');
					var articlesGroups = Array.from(articlesContainer.getElementsByClassName('__route__articles-itemGroup'));

					var allHidden = true;

					articlesGroups.map(function(item){
						if (item.getAttribute('data-category') == current_category) {
							item.classList.remove('hidden');
							item.classList.add('shine');
							allHidden = false;
						} else {
							item.classList.add('hidden');
							item.classList.remove('shine');
						}
					});
						
					// for index page - can't get category from URL, as the url doesn't have it
					if (allHidden) { articlesGroups[0].classList.remove('hidden') }; 
				};	

			// Navbar-side - Items Update (Active status)
			// --------------------------------------------------

				routeObject.articleItems_updateActiveStatus = function(current_item) {
					var items = Array.from(document.getElementById('__route__articles').getElementsByClassName('__route__articles-item'));
					items.map(item => item.classList.remove('active'));
					current_item.classList.add('active');
				};

		// MainView - innerHTML update
		// --------------------------------------------------		

			routeObject.mainView_updateInnerHTML = function(urlString) {

				urlString = routeObject.href_hostname + '/' + urlString;
				history.pushState(null, null, urlString);

				fetch(urlString)
					.then(function(response) { return response.text() })
						.then(function(text) { 

							var mainView = document.getElementById('__route__mainView');
							mainView.classList.add('faSpinner', 'faSpinner-fast', 'faSpinner-lg')
							mainView.innerHTML = text;

							if (!document.getElementById('runScript')) {
								mainView.classList.remove('faSpinner', 'faSpinner-fast', 'faSpinner-lg')
							}
						})
						.then(function() { routeObject.checkExtraScript() });
			};

// Initial Loading - check if redirected from individual question page
// --------------------------------------------------

	(function(){

		var currentUrl = window.location.href;

		if (currentUrl.indexOf('?load=') > -1) {

			var urlString = currentUrl.replace('/index.html?load=', '');
			history.replaceState(null, null, urlString);
			routeObject.fetchHTML(urlString);

			// Update current category shown
			var current_category = routeObject.getCategoryFromUrl();
			routeObject.articleItems_updateArticleList(current_category);

			// Update active status on topNav items
			var _route_categories_items = Array.from(document.getElementById('__route__categories').getElementsByClassName('__route__categories-item'));
			_route_categories_items.map(function(item) {
				if (item.getAttribute('data-category') == current_category) { item.classList.add   ('active') }
				else 														{ item.classList.remove('active') }
			});

			// Update active status on sideNav items
			var _route_articles_items = Array.from(document.getElementById('__route__articles').getElementsByClassName('__route__articles-item'));
			_route_articles_items.map(function(item) {
				if (currentUrl.indexOf(item.getAttribute('data-url')) > -1) { item.classList.add   ('active') }
				else 														{ item.classList.remove('active') }
			});
		
		} else { 
			routeObject.articleItems_updateArticleList('general');
		};

	})();

// Back/Forward - Popstate eventListener
// --------------------------------------------------

	(function(){

		window.addEventListener('popstate', function(event) { 

			if (window.location.href.indexOf('index.html') == '-1') {

				fetch(window.location.href)
				.then(function(response) { return response.text() })
					.then(function(text) { document.getElementById('__route__mainView').innerHTML = text });

				var current_category = routeObject.getCategoryFromUrl();
				routeObject.articleItems_updateArticleList(current_category);

			} else {

				document.getElementById('__route__articles').getElementsByClassName('__route__articles-itemGroup')[0].classList.remove('hidden')

			}
		});

	})();

// Route HTMLElements - Event Listeners Init
// --------------------------------------------------

	(function(){

		// Navbar-top - Categories - Event Listener
		// --------------------------------------------------

			document.getElementById('__route__categories').addEventListener('click', function(e){
				if (hasClass(e.target, '__route__categories-item')) { 
					asteriskObj.routeObject.categoryItems_updateActiveStatus(e.target);
					asteriskObj.routeObject.articleItems_updateArticleList(e.target.getAttribute('data-category')); 
				}
			});

		// Question Click Event Listener 
		// --------------------------------------------------

			document.getElementById('__route__articles').addEventListener('click', function(e) {
				if (hasClass(e.target, '__route__articles-item')) { 
					asteriskObj.routeObject.articleItems_updateActiveStatus(e.target);
					asteriskObj.routeObject.mainView_updateInnerHTML(e.target.getAttribute('data-url'));
				};
			});

	})();
