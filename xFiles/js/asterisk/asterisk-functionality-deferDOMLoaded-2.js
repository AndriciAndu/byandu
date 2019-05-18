
	// Object setup
	// --------------------------------------------------

		var deferDOMLoaded = {
			count_targetValue  : 0;
			count_currentValue : 0;
		};

	// Intermediary
	// --------------------------------------------------

		deferDOMLoaded.checkCount = function() {
			return deferDOMLoaded.count_currentValue == deferDOMLoaded.count_targetValue
		};

		deferDOMLoaded.onLoad = function() {
			deferDOMLoaded.whenLoaded();
			document.removeEventListener('readystatechange', deferDOMLoaded.onLoad);
		};

	// Image eventHandlers and eventListeners
	// --------------------------------------------------

		deferDOMLoaded.img_addEventListeners = function( img__elem ) {
			img__elem.addEventListener('load'  , deferDOMLoaded.img_onload );
			img__elem.addEventListener('error' , deferDOMLoaded.img_onerror);
		};

		deferDOMLoaded.img_removeEventListeners = function( img__elem ) {
			img__elem.removeEventListener('load'  , deferDOMLoaded.img_onload );
			img__elem.removeEventListener('error' , deferDOMLoaded.img_onerror);
		};

		deferDOMLoaded.img_onload = function(e) {
			deferDOMLoaded.count_currentValue++;
			if (deferDOMLoaded.checkCount()) { deferDOMLoaded.onLoad() };
			deferDOMLoaded.img_removeEventListeners(e.target);
		};

		deferDOMLoaded.img_onerror = function(e) {
			deferDOMLoaded.count_currentValue++;
			if (deferDOMLoaded.checkCount()) { deferDOMLoaded.onLoad() };
			deferDOMLoaded.img_removeEventListeners(e.target);
		};

	// Init
	// --------------------------------------------------

		deferDOMLoaded.init = function() {

			var targetImages = Array.from(document.getElementsByClassName('deferDOMLoaded--target'));
			var nrOfTargets = targetImages.length;
			var state = document.readyState;

			deferDOMLoaded.count_targetValue  = 0;
			deferDOMLoaded.count_currentValue = 0;

			// if there are any 'images to wait for'
			if (nrOfTargets > 0) {

				deferDOMLoaded.count_targetValue = nrOfTargets;

				// initial check of the images' state
				targetImages.map(function(img) { 
					if (!img.complete) { 						// image still loading
						deferDOMLoaded.img_addEventListeners(img) 
					} else if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
						deferDOMLoaded.count_currentValue++ 	// image onerror
					} else {
						deferDOMLoaded.count_currentValue++ 	// image onload
					}
				});

			if (deferDOMLoaded.checkCount() && (state == 'interactive' || state == 'complete') ) {
				deferDOMLoaded.onLoad()
			} else {
				document.addEventListener('readystatechange', deferDOMLoaded.onLoad)
			}
			
		};

	// When loaded
	// --------------------------------------------------

		deferDOMLoaded.whenLoaded = function() {

			console.log('Document ready and images loaded');

		};