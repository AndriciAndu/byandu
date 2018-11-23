
	// this will *RUN* only if the [page] is loaded directly
	// this will *NOT RUN* if loading the [index] page first

	(function() {

		// manually set parameters 
		// --------------------------------------------------
		// ***REQUIRED*** to be set both [here] and in [asterisk-route.js]

			var indexPageUrl = '/index.html' ;
			var templatePath = '/templates'  ;


		// set parameters for generating the link to redirect to 
		// --------------------------------------------------
		// (route details to be included in href - used after redirecting to index page)

			var href_initial = window.location.href.toLowerCase();

			// get the href (or portion of the href) - to check which page we are on
			var hrefString = href_initial;	
			if (templatePath.length > 1) {
				hrefString = href_initial.slice(href_initial.indexOf(templatePath) + templatePath.length)
			};

			// check which page we are on
			var currentMatch = hrefString.match(/\/[a-zA-Z0-9-.]+[^\/]/g);	// get all occurances of /something/somethingElse/etc
			var articleUrl   = currentMatch[currentMatch.length-1].replace(/\//g, '').replace('.html', '') + '.html'; 	// make sure to always have the .html extension
			var categoryName = currentMatch[currentMatch.length-2].replace(/\//g, '');

			var href_identifier = templatePath + '/' + categoryName + '/' + articleUrl;

			
			if (window.location.protocol == 'file:') { 		// if local file
				var rootPage = href_initial.replace(href_identifier, '')
			} else { 										// if online
				var rootPage = window.location.protocol + '//' + window.location.hostname;
				indexPageUrl = '';
			};

		// set [hrefDetails] - used in [asterisk-route.js] 
		// --------------------------------------------------

			var hrefDetails = {};
			hrefDetails.rootPage     	= rootPage;
			hrefDetails.articleUrl   	= articleUrl;
			hrefDetails.categoryName 	= categoryName;
			hrefDetails.href_identifier = href_identifier;
			hrefDetails = JSON.stringify(hrefDetails);

		// --------------------------------------------------
		// redirect to index page - (with route details included in the href)

			var redirectUrl = rootPage + indexPageUrl + '?load=' + hrefDetails;
			location.assign(redirectUrl);

	})();