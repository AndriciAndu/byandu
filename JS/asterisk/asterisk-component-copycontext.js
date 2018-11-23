
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;
		asteriskObj.components = asteriskObj.components || {} ;

	// Asterisk Component - [CopyContext]
	// -----------------------------------------------------

		(function(){

			// Component.Object Setup 
			// -----------------------------------------------------
			
				asteriskObj.components.copyContext = {};
				var copyContextObj = asteriskObj.components.copyContext;

			// Dependencies
			// -----------------------------------------------------

					asteriskObj.dependencies = asteriskObj.dependencies || {} ;

				// hasClass()
				// -----------------------------------------------------

					asteriskObj.dependencies.hasClass = asteriskObj.dependencies.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asteriskObj.dependencies.hasClass;

				// getParent()
				// -----------------------------------------------------

					asteriskObj.dependencies.getParent = asteriskObj.dependencies.getParent || function ( elem, identifier ) {

						elemParent = elem.parentElement;

						if (elemParent) {

							var firstChar = identifier.charAt(0);

							if 	(verify()) 	{ return elemParent	} 
							else 			{ return getParent(elemParent, identifier) }

						} else { return null };

						// ---
						function verify() {

							var identif_substr = identifier.substring(1); // remove first char - for class/id cases

							if 		(firstChar === '.') { return ( " " + elemParent.className + " " ).indexOf( " " + identif_substr + " " ) > -1 } 
							else if (firstChar === '#') { return (elemParent.id 	 == identif_substr) } 
							else 						{ return (elemParent.tagName == identifier.toUpperCase()) }
						}
					};

					var getParent = asteriskObj.dependencies.getParent;

			// Init
			// -----------------------------------------------------

				copyContextObj.init = function(current_target, delegateEventListener) {

					if (current_target) {
						if (hasClass(current_target, 'copyContext-btn')) {

							copyContextObj.activate(current_target) 

						} else if (delegateEventListener === true) {

							copyContextObj.delegate(current_target) 

						} else {

							var copyButtons = Array.from(current_target.getElementsByClassName('copyContext-copyBtn'));	
							copyButtons.map(copyBtn => copyContextObj.activate(copyBtn));

						}

					} else { 

						var allCopyBtns = Array.from(document.getElementsByTagName('copyContext-copyBtn'));	
						allCopyBtns.map(copyBtn => copyContextObj.activate(copyBtn));	

					}

				};

			// Activate 
			// -----------------------------------------------------

				copyContextObj.activate = function(current_target) {

					if (hasClass(current_target, 'copyContext-btn-copyText')) {

						current_target.addEventListener('click', function() { 
							copyContextObj.run_copyText(this) 
						})

					} else if (hasClass(current_target, 'copyContext-btn-saveFile')) {

						current_target.addEventListener('click', function() { 
							copyContextObj.run_saveFile(this) 
						})

					} else if (hasClass(current_target, 'copyContext-btn-showLightbox')) {

						current_target.addEventListener('click', function() { 
							copyContextObj.run_viewLightbox(this) 
						})

					}

				};

			// Delegate
			// -----------------------------------------------------

				copyContextObj.delegate = function(current_target) {

					current_target.addEventListener('click', function(e) {
						if (hasClass(e.target, 'copyContext-btn')) { copyContextObj.run(e.target) }
					})

				};

			// Intermediry 
			// -----------------------------------------------------

				// Get Context
				// -----------------------------------------------------

					copyContextObj.getContext = function(copyContext_btn) {

						// [data-copyContextId] cab be set on each individual button or on the ['.copyContext-btnContainer'] parent container
						var targetId 		= copyContext_btn.getAttribute('data-copyContextId') 
											|| getParent(copyContext_btn, '.copyContext-btnContainer').getAttribute('data-copyContextId');

						var copyContexts 	= Array.from(document.getElementsByClassName('copyContext'));
						var targetContext 	= copyContexts.filter(x => x.getAttribute('data-copyContextId') === targetId)[0];

						return targetContext

					};

			// Run - copyText
			// -----------------------------------------------------

				copyContextObj.run_copyText = function(current_copyBtn) {

					var targetContext = copyContextObj.getContext(current_copyBtn);

					copyFromContext(targetContext);
					clearSelectedText();

					current_copyBtn.classList.add('success');
					setTimeout(function(){ current_copyBtn.classList.remove('success') }, 1000)

					// Intermediary
					// -----------------------------------------------------

						function copyFromContext(targetContext) {

							if (document.selection) { 

							    var range = document.body.createTextRange();
							    range.moveToElementText(targetContext);
							    range.select().createTextRange();

							} else if (window.getSelection) {

							    var range = document.createRange();
							    range.selectNode(targetContext);
							    window.getSelection().addRange(range);

							};

							document.execCommand("copy"); 

						};

						function clearSelectedText() {
							var current_selection = window.getSelection ? window.getSelection() : document.selection;
							if (current_selection) {
							    if 		(current_selection.removeAllRanges) { current_selection.removeAllRanges() 	} 
							    else if (current_selection.empty) 			{ current_selection.empty() 			}
							}
						};

				};

			// Run - saveFile
			// -----------------------------------------------------

				copyContextObj.run_saveFile = function(current_savefileBtn) {

					var targetContext = copyContextObj.getContext(current_savefileBtn);

					var file_name = current_savefileBtn.getAttribute('data-fileName') + current_savefileBtn.getAttribute('data-fileType');
					createFile(targetContext.innerText);

					current_savefileBtn.classList.add('success');

					setTimeout(function(){ current_savefileBtn.classList.remove('success') }, 1000);

					// Intermediary
					// -----------------------------------------------------

						function createFile(data) {

							var a = document.createElement("a");
							var file = new Blob([data], {type: "application/octet-stream"});

							if (window.navigator.msSaveOrOpenBlob) { 

								window.navigator.msSaveOrOpenBlob(file, file_name) // IE10+

							} else { 

								var url = URL.createObjectURL(file);
								a.href = url;
								a.download = file_name;
								document.body.appendChild(a);
								a.click();

								setTimeout(function() {
									document.body.removeChild(a);
									window.URL.revokeObjectURL(url);  
								}, 0); 

							};
						}

				};

			// Run - viewLightbox
			// -----------------------------------------------------

				copyContextObj.run_viewLightbox = function(current_viewLightboxBtn) {

					var targetContext = copyContextObj.getContext(current_viewLightboxBtn);

					var lightbox = document.createElement('div');
					lightbox.classList = 'copyContext-lightbox';
					lightbox.innerHTML = 
					'<div class="copyContext-lightbox-underlay"> </div> ' +
					'<pre class="copyContext-lightbox-textContainer">' + targetContext.innerText.replace(/</g, '&lt;') + '</pre>';

					document.body.appendChild(lightbox);

					lightbox.getElementsByClassName('copyContext-lightbox-underlay')[0].addEventListener('click', function(){
						this.parentElement.parentElement.removeChild(this.parentElement)
					});

				};

		})();
