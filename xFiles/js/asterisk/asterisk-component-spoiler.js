
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.components = asterisk.components || {} ;

	// Asterisk Component - [Spoiler]
	// -----------------------------------------------------

		(function(){

			asterisk.components.spoiler = {};
			asterisk.components.spoiler.activatedItems = [];

			// Dependencies
			// -----------------------------------------------------

				asterisk.utility = asterisk.utility || {};

				asterisk.utility.hasClass = asterisk.utility.hasClass || function ( target__HTMLElem , class__string ) {
					return (" " + target__HTMLElem.className + " " ).indexOf( " " + class__string + " " ) > -1
				};

			// Event Handlers
			// -----------------------------------------------------

				// eventHandler_run
				// -----------------------------------------------------

					asterisk.components.spoiler.eventHandler_run = function(e) {

						const spoilerParams = e.target.spoilerParams || asterisk.components.spoiler.parameters_set(e.target , true);
						const targetSpoiler = spoilerParams.targetSpoiler;
						const targetButtons = spoilerParams.targetButtons;

						targetSpoiler.style.maxHeight = targetSpoiler.scrollHeight + 'px';

						if (asterisk.utility.hasClass(targetSpoiler , 'spoiler--expanded')) { // collapsing animation
							setTimeout(function(){ targetSpoiler.style.maxHeight = 0 }, 34);
							targetButtons.map((btn) => btn.classList.remove('spoiler-btn--active'));
						} else {
							targetButtons.map((btn) => btn.classList.add('spoiler-btn--active'));
						};

						targetSpoiler.classList.toggle('spoiler--expanded');
					};

				// parameters_set 
				// -----------------------------------------------------

					asterisk.components.spoiler.parameters_set = function( spoilerBtn__HTMLElem ) {

						const targetId = spoilerBtn__HTMLElem.getAttribute('data-spoiler-id');

						const targetSpoiler = Array.from(document.getElementsByClassName('spoiler')).find(function(spoiler) { 
							return spoiler.getAttribute('data-spoiler-id') === targetId 
						});
						const targetButtons = Array.from(document.getElementsByClassName('spoiler-btn')).filter(function(spoilerBtn) { 
							return spoilerBtn.getAttribute('data-spoiler-id') === targetId 
						});

						spoilerBtn__HTMLElem.spoilerParams = { targetSpoiler , targetButtons };

						if (targetSpoiler) {
							return { targetSpoiler , targetButtons }
						} else {
							console.log(
								'No [spoiler] element with [data-spoiler-id="'+targetId+'"] found within document.' + 
								' Event triggered by [spoiler-btn] : ' , spoilerBtn__HTMLElem );
						}
					};

			// eventHandler_delegate
			// -----------------------------------------------------

				asterisk.components.spoiler.eventHandler_delegate = function(e) {
					if ((" "+e.target.className+" ").indexOf(" spoiler-btn ")>-1) { 
						asterisk.components.spoiler.eventHandler_run(e) 
					}
				};

		// Main Functions
		// -----------------------------------------------------

			// activate
			// -----------------------------------------------------

				asterisk.components.spoiler.activate = function( spoilerBtn__HTMLElem ) {
					spoilerBtn__HTMLElem.addEventListener('click', asterisk.components.spoiler.eventHandler_run);
					asterisk.components.spoiler.activatedItems.push(spoilerBtn__HTMLElem)
				};

			// delegate
			// -----------------------------------------------------

				asterisk.components.spoiler.delegate = function( target__HTMLElem ) {
					target__HTMLElem.addEventListener('click', asterisk.components.spoiler.eventHandler_delegate);
					asterisk.components.spoiler.activatedItems.push(target__HTMLElem)
				};

			// terminate
			// -----------------------------------------------------

				asterisk.components.spoiler.terminate = function( target__HTMLElem ) {

					const spoilerObj = asterisk.components.spoiler;
					target__HTMLElem.removeEventListener('click', spoilerObj.eventHandler_run);
					target__HTMLElem.removeEventListener('click', spoilerObj.eventHandler_delegate);
					spoilerObj.activatedItems = spoilerObj.activatedItems.filter(item => item !== target__HTMLElem);

					spoilerObj.parameters_remove(target__HTMLElem);
				};

				// parameters_remove 
				// -----------------------------------------------------

					asterisk.components.spoiler.parameters_remove = function( target__HTMLElem ) {
						if ((" "+target__HTMLElem.className+" ").indexOf(" spoiler-btn ")>-1) { 
							target__HTMLElem.spoilerParams = null
						} else {
							Array.from(target__HTMLElem.getElementsByClassName('spoiler-btn')).map(function(item){
								item.spoilerParams = null
							});
						}
					};

			// checkDOM
			// -----------------------------------------------------

				asterisk.components.spoiler.checkDOM = function() {
					const spoilerObj = asterisk.components.spoiler;
					const targets = spoilerObj.activatedItems.filter(item => (item !== document) && !document.contains(item) );
					targets.map(item => spoilerObj.terminate(item));
				};
	})();