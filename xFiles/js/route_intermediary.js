
	// this will *RUN* only if the [page] is loaded directly
	// this will *NOT RUN* if loading the [index] page first

	(function() {

		// manually set parameters 
		// --------------------------------------------------
		// ***REQUIRED*** to be set both [here] and in [asterisk-route.js]

			var indexPageName  = 'index.html';
			var localFile_rootFolder = 'file:///d:/webfiles/testbuild';

		// set parameters for generating the link to redirect to 
		// --------------------------------------------------
		// (route details to be included in href - used after redirecting to index page)

			var href_current = window.location.href.toLowerCase();

			var href_search = window.location.search;
			var href_hash   = window.location.hash;
			href_current = href_current.replace(href_search , '').replace(href_hash , '');

			var url_rootHost , url_indexPage , url_article;
			switch(window.location.protocol) {
				case 'file:' :
					url_rootHost  = localFile_rootFolder;
					url_indexPage = localFile_rootFolder + '/' + indexPageName;
					url_article   = href_current.replace(url_rootHost , '');
					break;

				case 'http:' : 
				case 'https:': 
					url_rootHost  = window.location.host;
					url_indexPage = window.location.host;
					url_article   = window.location.pathname;
					break;
			};

			var url_articleString = '?load=' + url_article;

			var url_hashString = '';
			var url_searchString = '';
			if (href_hash   != '') { url_hashString   = '&hash='   + href_hash   };
			if (href_search != '') { url_searchString = '&search=' + href_search };

		// --------------------------------------------------
		// redirect to index page - (with route details included in the href)

			var redirectUrl = url_indexPage + url_articleString + href_hash + href_search;
			console.log(redirectUrl);
			location.href = redirectUrl;


			// var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;

			// var xhref = window.location.href;
			// var xprotocol = window.location.protocol;
			// var xhost = window.location.host;
			// var xsearch = window.location.search;
			// var xhash = window.location.hash;
			// //var xhostname = window.location.hostname;
			// var xpathname = window.location.pathname;

			// console.log({ xhref , xhost, /*xhostname ,*/ xpathname , xprotocol , xsearch , xhash });

			// console.log(window.location.href);
			// console.log(window.location.protocol);
			// console.log(window.location.host);
			// console.log(window.location.search);
			// console.log(window.location.hash);
			// console.log(window.location.pathname);

			// working prototype - prevent popstate if internal anchor link
			// ----------------------------------------------------------
				// console.log(href_initial);

				// var asdf_id = '';
				// if (href_initial.indexOf('#') > -1) { 
				// 	href_initial = href_initial.slice(0, href_initial.indexOf('#'));
				// 	asdf_id = href_initial.slice(href_initial.indexOf('#'));
				// };
			// ----------------------------------------------------------

	})();