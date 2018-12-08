
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.components = asterisk.components || {} ;

	// Asterisk Component - [Canvas]
	// -----------------------------------------------------

		(function(){			

			// Component.Object Setup 
			// -----------------------------------------------------
			
				asterisk.components.modal.states = {
					modal_open    : false ,
					current_modal : null  ,
					last_focused  : null  
				};
				var modalObj = asterisk.components.modal;

				modalObj.openModal = function(targetModal) {
					modalObj.states.modal_open    = true;
					modalObj.states.current_modal = targetModal;
					modalObj.states.last_focused  = document.activeElement;

					targetModal.classList.add('show');

					targetModal.setAttribute('aria-hidden', 'false');
					targetModal.setAttribute('tabindex', '0');
					targetModal.focus();
				};

				modalObj.closeModal = function(targetModal) {
					modalObj.states.modal_open    = false ;
					modalObj.states.current_modal = null  ;
					modalObj.states.last_focused  = null  ;

					targetModal.classList.remove('show');

					targetModal.setAttribute('aria-hidden', 'true');
					targetModal.setAttribute('tabindex', '-1');
					modalObj.last_focused.focus();
				};

				// modalObj.updateState = function(current_stateString) { }

			// Dependencies (not required if using [asterisk-utility.js])
			// -----------------------------------------------------
