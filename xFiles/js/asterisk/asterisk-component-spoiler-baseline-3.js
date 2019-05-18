	
	// Component - [Spoiler]
	// -----------------------------------------------------

		const component__spoiler = {
			activatedItems : []
		};

		// Event Handlers
		// -----------------------------------------------------

			// eventHandler_run
			// -----------------------------------------------------

				component__spoiler.eventHandler_run = function(e) {

					const spoilerParams = e.target.spoilerParams || component__spoiler.parameters_set(e.target , true);
					const targetSpoiler = spoilerParams.targetSpoiler;
					const targetButtons = spoilerParams.targetButtons;

					targetSpoiler.style.maxHeight = targetSpoiler.scrollHeight + 'px';

					if (hasClass(targetSpoiler , 'spoiler--expanded')) { // collapsing animation
						setTimeout(function(){ targetSpoiler.style.maxHeight = 0 }, 34);
						targetButtons.map((btn) => btn.classList.remove('spoiler-btn--active'));
					} else {
						targetButtons.map((btn) => btn.classList.add   ('spoiler-btn--active'));
					};

					targetSpoiler.classList.toggle('spoiler--expanded');
				};

				// parameters_set 
				// -----------------------------------------------------

					component__spoiler.parameters_set = function( spoilerBtn__HTMLElem ) {

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
					spoilerBtn__HTMLElem.addEventListener('click', component__spoiler.eventHandler_run);
					component__spoiler.activatedItems.push(spoilerBtn__HTMLElem)
				};

			// delegate
			// -----------------------------------------------------

				component__spoiler.delegate = function( target__HTMLElem ) {
					target__HTMLElem.addEventListener('click', component__spoiler.eventHandler_delegate);
					component__spoiler.activatedItems.push(target__HTMLElem)
				};

			// terminate
			// -----------------------------------------------------

				component__spoiler.terminate = function( target__HTMLElem ) {

					target__HTMLElem.removeEventListener('click', component__spoiler.eventHandler_run);
					target__HTMLElem.removeEventListener('click', component__spoiler.eventHandler_delegate);
					component__spoiler.activatedItems = component__spoiler.activatedItems.filter(item => item !== target__HTMLElem);

					component__spoiler.parameters_remove(target__HTMLElem);
				};

				// parameters_remove 
				// -----------------------------------------------------

					component__spoiler.parameters_remove = function( target__HTMLElem ) {
						if ((" "+target__HTMLElem.className+" ").indexOf(" spoiler-btn ")>-1) { 
							target__HTMLElem.spoilerParams = null;
						} else {
							Array.from(target__HTMLElem.getElementsByClassName('spoiler-btn')).map(function(item){
								item.spoilerParams = null
							});
						}
					};

			// checkDOM
			// -----------------------------------------------------

				component__spoiler.checkDOM = function() {
					const targets = component__spoiler.activatedItems.filter(item => (item !== document) && !document.contains(item) );
					targets.map(item => component__spoiler.terminate(item));
				};