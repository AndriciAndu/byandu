
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;

	// Asterisk - deferDOMReadyObj
	// -----------------------------------------------------

		(function(){

			// Object Setup 
			// -----------------------------------------------------

				asterisk.deferDOMReadyObj = {};
				deferDOMReadyObj = asterisk.deferDOMReadyObj;
				
				deferDOMReadyObj.defer_items = Array.from(document.getElementsByClassName('defer-DOMLoaded-item')) ;
				deferDOMReadyObj.defer_limit = Array.from(document.getElementsByClassName('defer-DOMLoaded-item')).length ;
				deferDOMReadyObj.defer_index = 0 ;

				deferDOMReadyObj.functionsArray = [];

			// Update index - after each iamge loads
			// Check index and run callback 
			// -----------------------------------------------------

				deferDOMReadyObj.defer_items_update = function() { 

					deferDOMReadyObj.defer_index++ ;

					if (deferDOMReadyObj.defer_index == deferDOMReadyObj.defer_limit) { 

						if (document.readyState === "interactive") {

							setTimeout(asterisk.deferDOMReadyObj.runFunctions, 500)

						} else {

							document.onreadystatechange = function () {
								if (document.readyState === "interactive") {
									setTimeout(asterisk.deferDOMReadyObj.runFunctions, 500)
								}
							}; 

						}
					}
				};

			// Initial check if already loded && Set onload on each img
			// -----------------------------------------------------

				deferDOMReadyObj.defer_items.map(function(item){

					if (item.tagName == 'IMG') {

						if (!item.complete) {

							item.addEventListener('load', asterisk.deferDOMReadyObj.defer_items_update);
							// item.addEventListener('error', asterisk.deferDOMReadyObj.defer_items_update);

						} else {

							asterisk.deferDOMReadyObj.defer_items_update();

						}
						
					}
				});

			// Set callback to run after all img are loaded
			// -----------------------------------------------------

				asterisk.deferDOMReadyObj.runFunctions = function() {
					deferDOMReadyObj.functionsArray.map(function(item) { setTimeout(item[0], item[1]) }) 
				};

			// Set callback to run after all img are loaded
			// -----------------------------------------------------

				asterisk.deferDOMReadyObj.addFunction = function(newFunction , delay) {
					var setDelay = delay || 1 ;
					deferDOMReadyObj.functionsArray.push( [newFunction , setDelay] );
				};

		})();

		// asterisk.deferDOMReadyObj.addFunction( function() { console.log('DOM Loaded')   } );
		// asterisk.deferDOMReadyObj.addFunction( function() { console.log('DOM Loaded-2') } , 2500  );