	
	// Remove [tab] spaces from <pre> elements
	// --------------------------------
	// allows to properly index <pre> elements within the markup, without offsetting the displayed content >> css tab-space is not globally supported

		(function(){

			var targetedPreElements = Array.from(document.getElementsByClassName('pre-removeTabSpaces'));

			targetedPreElements.map(function(item) {
				item.innerHTML = string_remove_tabSpaces(item.innerHTML)
			});

		})();