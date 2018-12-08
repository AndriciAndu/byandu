
	
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.components = asterisk.components || {} ;

	// Asterisk Component - [Spoiler]
	// ------------------------------------------------------------------

		(function(){

			// Component.Object Setup 
			// -----------------------------------------------------

				asterisk.components.modal = {};
				var modalObj = asterisk.components.modal;

			// States
			// -----------------------------------------------------

				modalObj.states = {
					hasEvtListener_keypress_esc : false ,
					lastFocusedElem   : null ,
					openModal         : null ,
					fosusableChildren : null
				};

			// Dependencies 
			// -----------------------------------------------------

					asterisk.utility = asterisk.utility || {} ;

				// hasClass() 
				// -----------------------------------------------------

					asterisk.utility.hasClass = asterisk.utility.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asterisk.utility.hasClass;

				// getFocusableChildren() 
				// -----------------------------------------------------

					asterisk.utility.getFocusableChildren = asterisk.utility.getFocusableChildren || function ( elem ) {

						var activeElem = document.activeElement;

						var children_all = Array.from(elem.getElementsByTagName("*"));
						var children_focusable = children_all.filter(function(child){
							child.focus();
							return document.activeElement === child
						});

						return children_focusable
					};

					var getFocusableChildren = asterisk.utility.getFocusableChildren;

			// Init
			// -----------------------------------------------------

				modalObj.init = function(current_target, delegateEventListener) {

					if (current_target) { 

						if (hasClass(current_target, 'modal-btn')) {

							modalObj.activate(current_target) 

						} else if (delegateEventListener === true) {

							modalObj.delegate(current_target)

						} else { 

							var modalBtns = Array.from(current_target.getElementsByClassName('modal-btn'));	
							modalBtns.map(modalBtn => modalObj.activate(modalBtn));

						}

					} else {

						var allmodalBtns = Array.from(document.getElementsByClassName('modal-btn'));
						allModalBtns.map(modalBtn => modalObj.activate(modalBtn));

					};	

					if (!modalObj.states.hasEvtListener_keypress_esc) {

						modalObj.states.hasEvtListener_keypress_esc = true;

						document.addEventListener('keydown', function(e) {

							var e = e || window.event; 

							if (e.keyCode == 27 || e.key == 'Escape' || e.code == 'Escape') {
								var openModal = modalObj.states.openModal;
								if (openModal) { modalObj.closeModal(openModal); console.log('asd') }
							};
						});

					};

				};

			// Activate 
			// -----------------------------------------------------

				modalObj.activate = function(current_target) {

					current_target.addEventListener('click', function() { 
						modalObj.run(this) 
					})

				};

			// Delegate
			// -----------------------------------------------------

				modalObj.delegate = function(current_target) {

					current_target.addEventListener('click', function(e) {
						if (hasClass(e.target, 'modal-btn')) { modalObj.run(e.target) }
					})

				};
					
			// Run
			// -----------------------------------------------------

				modalObj.run = function(current_modalBtn) {

					if (!current_modalBtn.targetElems) { 
						modalObj.modalBtn_defineParameters(current_modalBtn)
					};

					var target_modal = current_modalBtn.targetElems.target_modal;

					if (target_modal) {

						modalObj.states.openModal = target_modal;

						// store last-focused element - to restore focus when closing the modal
						modalObj.states.lastFocusedElem = current_modalBtn; 

						target_modal.classList.add('modal-show');
						document.body.classList.add('hasOpenModal');

						target_modal.getElementsByClassName('modal-content')[0].focus();
						modalObj.states.fosusableChildren = getFocusableChildren(target_modal);
						window.addEventListener('keydown', modalObj.onTabKeypress);

					} else {

						console.log(
							'No [modal] element with [data-modal-id="'+current_modalBtn.getAttribute('data-modal-id')+'"] found within document.' + 
							' Event triggered by [modal-btn] : ' , current_modalBtn );

					}

				};

			// Close
			// -----------------------------------------------------

				modalObj.closeModal = function(current_target) { console.log(current_target)
					current_target.classList.remove('modal-show');
					document.body.classList.remove('hasOpenModal');
					modalObj.states.lastFocusedElem.focus();

					modalObj.states.openModal         = null;
					modalObj.states.lastFocusedElem   = null;
					modalObj.states.fosusableChildren = null;

					window.removeEventListener('keydown', modalObj.onTabKeypress);
				};

			// Close
			// -----------------------------------------------------

				modalObj.onTabKeypress = function(e) {

					var e = e || window.event; 

					if (e.key == 'Tab' || e.code == 'Tab') {

						var activeElem = document.activeElement;
						var focusableChildren = modalObj.states.fosusableChildren;

						if (activeElem == focusableChildren[focusableChildren.length - 1]) {
							e.preventDefault();
							focusableChildren[0].focus();
						};
					}
				};

			// Define Parameters
			// -----------------------------------------------------
			// Performance - skip checking document (for target-elements : modal | modal-btn) on each function call

				// Will set the target parameters for each [modal-btn]
				// will run automatically on first modal-btn click
				// will be more efficient for future calls there-after

				modalObj.modalBtn_defineParameters = function(current_modalBtn) {

					if (!current_modalBtn.targetElems) {

						current_modalBtn.targetElems = {};

						var targetId = current_modalBtn.getAttribute('data-modal-id');

						var modals = Array.from(document.getElementsByClassName('modal')); 
						current_modalBtn.targetElems.target_modal = modals.filter(item => item.getAttribute('data-modal-id') === targetId )[0];
					}

				};

			// Run initial parameter-definition (optional || not recommended if dynamically-generated content)
			// Best called as one of the final functions in the scripts 
			// -----------------------------------------------------

				/*modalObj.modalBtn_defineParameters_all = function() {

					var modalButtons = Array.from(document.getElementsByClassName('modal-btn'));
					modalButtons.map(btn => asterisk.components.modal.modalBtn_defineParameters(btn));

				};*/

		})();