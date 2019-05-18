
	// Component - [Spoiler]
	// -----------------------------------------------------

		const component__spoiler = {};

		// Event Handlers
		// -----------------------------------------------------

			// eventHandler_run
			// -----------------------------------------------------

				component__spoiler.eventHandler_run = function(e) {

					const targetId = e.target.getAttribute('data-spoiler-id');

					const targetSpoiler = Array.from(document.getElementsByClassName('spoiler')).find(function(spoiler) { 
						return spoiler.getAttribute('data-spoiler-id') === targetId 
					});
					const targetButtons = Array.from(document.getElementsByClassName('spoiler-btn')).filter(function(spoilerBtn) { 
						return spoilerBtn.getAttribute('data-spoiler-id') === targetId 
					});

					if (targetSpoiler) {

						targetSpoiler.style.maxHeight = targetSpoiler.scrollHeight + 'px';

						if (hasClass(targetSpoiler , 'spoiler--expanded')) { // collapsing animation
							setTimeout(function(){ targetSpoiler.style.maxHeight = 0 }, 34);
							targetButtons.map((btn) => btn.classList.remove('spoiler-btn--active'));
						} else {
							targetButtons.map((btn) => btn.classList.add   ('spoiler-btn--active'));
						};

						targetSpoiler.classList.toggle('spoiler--expanded');

					} else {

						console.log(
							'No [spoiler] element with [data-spoiler-id="'+targetId+'"] found within document.' + 
							' Event triggered by [spoiler-btn] : ' , spoilerBtn__HTMLElem );
					}
				};

			// eventHandler_delegate
			// -----------------------------------------------------

				component__spoiler.eventHandler_delegate = function(e) {
					if ((" "+e.target.className+" ").indexOf(" spoiler-btn ")>-1) { 
						component__spoiler.eventHandler_run(e) 
					}
				};

		// Main Functions
		// -----------------------------------------------------

			// activate
			// -----------------------------------------------------

				component__spoiler.activate = function( spoilerBtn__HTMLElem ) {
					spoilerBtn__HTMLElem.addEventListener('click', component__spoiler.eventHandler_run)
				};

			// delegate
			// -----------------------------------------------------

				component__spoiler.delegate = function( target__HTMLElem ) {
					target__HTMLElem.addEventListener('click', component__spoiler.eventHandler_delegate)
				};

			// terminate
			// -----------------------------------------------------

				component__spoiler.terminate = function( target__HTMLElem ) {
					target__HTMLElem.removeEventListener('click', component__spoiler.eventHandler_run);
					target__HTMLElem.removeEventListener('click', component__spoiler.eventHandler_delegate);
				};
