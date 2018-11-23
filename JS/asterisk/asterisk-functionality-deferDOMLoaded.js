
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;

	// Asterisk - deferDOMReadyObj
	// -----------------------------------------------------

		(function(){

			// Object Setup 
			// -----------------------------------------------------

				asteriskObj.deferDOMReadyObj = {};
				deferDOMReadyObj = asteriskObj.deferDOMReadyObj;
				
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

							setTimeout(asteriskObj.deferDOMReadyObj.runFunctions, 500)

						} else {

							document.onreadystatechange = function () {
								if (document.readyState === "interactive") {
									setTimeout(asteriskObj.deferDOMReadyObj.runFunctions, 500)
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

							item.addEventListener('load', asteriskObj.deferDOMReadyObj.defer_items_update);
							// item.addEventListener('error', asteriskObj.deferDOMReadyObj.defer_items_update);

						} else {

							asteriskObj.deferDOMReadyObj.defer_items_update();

						}
						
					}
				});

			// Set callback to run after all img are loaded
			// -----------------------------------------------------

				asteriskObj.deferDOMReadyObj.runFunctions = function() {
					deferDOMReadyObj.functionsArray.map(function(item) { setTimeout(item[0], item[1]) }) 
				};

			// Set callback to run after all img are loaded
			// -----------------------------------------------------

				asteriskObj.deferDOMReadyObj.addFunction = function(newFunction , delay) {
					var setDelay = delay || 1 ;
					deferDOMReadyObj.functionsArray.push( [newFunction , setDelay] );
				};

		})();

		// asteriskObj.deferDOMReadyObj.addFunction( function() { console.log('DOM Loaded')   } );
		// asteriskObj.deferDOMReadyObj.addFunction( function() { console.log('DOM Loaded-2') } , 2500  );