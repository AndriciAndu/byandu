
	
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;
		asteriskObj.components = asteriskObj.components || {} ;

	// Asterisk Component - [Spoiler]
	// ------------------------------------------------------------------

		(function(){

			// Component.Object Setup 
			// -----------------------------------------------------

				asteriskObj.components.modal = {};
				var modalObj = asteriskObj.components.modal;

			// Dependencies 
			// -----------------------------------------------------

					asteriskObj.dependencies = asteriskObj.dependencies || {} ;

				// hasClass() 
				// -----------------------------------------------------

					asteriskObj.dependencies.hasClass = asteriskObj.dependencies.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asteriskObj.dependencies.hasClass;

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

					}

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

						target_modal.classList.add('modal-show')

					} else {

						console.log(
							'No [modal] element with [data-modal-id="'+current_modalBtn.getAttribute('data-modal-id')+'"] found within document.' + 
							' Event triggered by [modal-btn] : ' , current_modalBtn );

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
					modalButtons.map(btn => asteriskObj.components.modal.modalBtn_defineParameters(btn));

				};*/

		})();