	
	(function(){

		var targetedPreElements = Array.from(document.getElementsByClassName('pre-removeTabSpaces'));

		targetedPreElements.map(function(item) {
			item.innerHTML = string_remove_tabSpaces(item.innerHTML)
		});

	})();