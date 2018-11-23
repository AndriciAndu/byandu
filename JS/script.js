/*
	// sideNav - 
	(function(){ 

		var categoriesItems = Array.from(document.getElementsByClassName('__route__categories-item'));
		var articleGroups 	= Array.from(document.getElementsByClassName('__route__articles-itemGroup'));

		categoriesItems.map(function(categoryItem){

			var identifier = categoryItem.getAttribute('data-category');

			// link the adequate [category-item] to it's [articleGroup]
			articleGroups.map(function(item){
				if (item.getAttribute('data-category') == identifier) { categoryItem.__route__targetArticleGroup = item }
			});

			// hover event listeners
			categoryItem.addEventListener('mouseenter', function(){
				articleGroups.map(item => item.classList.add('hidden'))
				this.__route__targetArticleGroup.classList.remove('hidden')
			});

		});

	})();
*/
	function byAndu_generateHTML_forCodeTab() {

		var codeTab = document.getElementsByClassName('article-mainTabs-codeTab')[0];

		// Parameters check and setup
		// --------------------------------

			var copyContextId 	= codeTab.getAttribute('data-setCopyContextId');
			var fileName 		= codeTab.getAttribute('data-setFileName');

			var includeDepString = '';
			if (codeTab.getAttribute('data-includeJSDependencies')) { includeDepString = 'data-includeDependencies="true"' };

		// Templates to be used in generating innerHTML
		// --------------------------------

			var tabBtn_html 			= '<button class="tabs-btn" data-tabs-id="1"> HTML Template </button>'	;
			var tabBtn_css  			= '<button class="tabs-btn" data-tabs-id="2"> CSS </button>'			;
			var tabBtn_css_singular  	= '<button class="tabs-btn" data-tabs-id="3"> CSS - Singular </button>';
			var tabBtn_js   			= '<button class="tabs-btn" data-tabs-id="4"> JS  </button>' 			;

			var tabContent_html = 
				'<!-- HTML --> '																					+
					'<div class="tabs-content tab-expanded pr-0 finalCode-container" data-tabs-id="1"> '			+

						'<div class="col-3 finalCode-radio-container finalCode-radio-container-html"></div> '		+

						'<div class="col-9 p-0 border-left"> '														+

							'<div class="copyContext-btnContainer" data-copyContextId="'+copyContextId+'-html"> '	+
								'<button class="copyContext-btn copyContext-btn-copyText"> </button> '				+
							'</div> '																				+

							'<div class="copyContext" data-copyContextId="'+copyContextId+'-html"> '				+
								'<div class="finalCode-blockContainer finalCode-blockContainer-html"></div> '		+
							'</div> '																				+

						'</div> '																					+

					'</div> '																						;
			
			var tabContent_css  = 
				'<!-- CSS --> '																						+
					'<div class="tabs-content pr-0 finalCode-container" data-tabs-id="2"> '							+

						'<div class="col-3 finalCode-checkbox-container finalCode-checkbox-container-css"> </div> '	+

						'<div class="col-9 p-0 border-left"> '														+

							'<div class="copyContext-btnContainer" data-copyContextId="'+copyContextId+'-css"> '	+
								'<button class="copyContext-btn copyContext-btn-copyText"> </button> '				+
								'<button class="copyContext-btn copyContext-btn-saveFile" ' 						+
										'data-fileName="'+fileName+'-spec" data-fileType=".css"> </button> '		+
								'<button class="copyContext-btn copyContext-btn-showLightbox"> </button> '			+
							'</div> '																				+

							'<div class="copyContext" data-copyContextId="'+copyContextId+'-css"> '					+
								'<div class="finalCode-blockContainer finalCode-blockContainer-css"></div> '		+
							'</div> '																				+

						'</div> '																					+

					'</div> '																						;

			var tabContent_css_singular  = 
				'<!-- CSS --> '																								+
					'<div class="tabs-content pr-0 finalCode-container" data-tabs-id="3"> '									+

						'<div class="col-3 finalCode-radio-container finalCode-radio-container-css-singular"> </div> '		+

						'<div class="col-9 p-0 border-left"> '																+

							'<div class="copyContext-btnContainer" data-copyContextId="'+copyContextId+'-css-singular"> '	+
								'<button class="copyContext-btn copyContext-btn-copyText"> </button> '						+
								'<button class="copyContext-btn copyContext-btn-saveFile" ' 								+
										'data-fileName="'+fileName+'-spec" data-fileType=".css"> </button> '				+
								'<button class="copyContext-btn copyContext-btn-showLightbox"> </button> '					+
							'</div> '																						+

							'<div class="copyContext" data-copyContextId="'+copyContextId+'-css-singular"> '				+
								'<div class="finalCode-blockContainer finalCode-blockContainer-css-singular"></div> '		+
							'</div> '																						+

						'</div> '																							+

					'</div> '																								;


			var tabContent_js   = 
				'<!-- JS --> '																											+
					'<div class="tabs-content pr-0 finalCode-container" data-tabs-id="4"> '												+

						'<div class="col-3 finalCode-checkbox-container finalCode-checkbox-container-js" '+includeDepString+'> </div> '	+

						'<div class="col-9 p-0 border-left"> '																			+

							'<div class="copyContext-btnContainer" data-copyContextId="'+copyContextId+'-js"> '							+
								'<button class="copyContext-btn copyContext-btn-copyText"> </button> '									+
								'<button class="copyContext-btn copyContext-btn-saveFile" '												+
										'data-fileName="'+fileName+'-spec" data-fileType=".js"> </button> '								+
								'<button class="copyContext-btn copyContext-btn-showLightbox"> </button> '								+
							'</div> '																									+

							'<div class="copyContext" data-copyContextId="'+copyContextId+'-js"> '										+
								'<div class="finalCode-blockContainer finalCode-blockContainer-js"></div> '								+
							'</div> '																									+

						'</div> '																										+

					'</div> '																											;

		// Generate innerHTML
		// --------------------------------

			codeTab.innerHTML = 
				'<div class="tabs ph-0"> '								+
					'<div class="tabs-btnGroup buttons-fill"></div> '	+
					'<div class="tabs-contentGroup"></div> '			+
				'</div> '												;


			var codeTab_tabs_btnGroup 	  = codeTab.getElementsByClassName('tabs-btnGroup')    [0];
			var codeTab_tabs_contentGroup = codeTab.getElementsByClassName('tabs-contentGroup')[0];

			var codeOptions = JSON.parse(codeTab.getAttribute('data-generateCodeFor').replace(/'/g, '"')); // create array from JSON-array string

			codeOptions.map(function(item){
				switch (item) {
					case 'html' : 
						codeTab_tabs_btnGroup    .insertAdjacentHTML('beforeend', tabBtn_html);
						codeTab_tabs_contentGroup.insertAdjacentHTML('beforeend', tabContent_html);
						break;
					case 'css' :  
						codeTab_tabs_btnGroup    .insertAdjacentHTML('beforeend', tabBtn_css);
						codeTab_tabs_contentGroup.insertAdjacentHTML('beforeend', tabContent_css);
						break;
					case 'css-singular' :  
						codeTab_tabs_btnGroup    .insertAdjacentHTML('beforeend', tabBtn_css_singular);
						codeTab_tabs_contentGroup.insertAdjacentHTML('beforeend', tabContent_css_singular);
						break;
					case 'js' :  
						codeTab_tabs_btnGroup    .insertAdjacentHTML('beforeend', tabBtn_js);
						codeTab_tabs_contentGroup.insertAdjacentHTML('beforeend', tabContent_js);
						break;
					default : console.log('Invalid [data-generateCodeFor] param: ' + item)
				}
			});

			codeTab.getElementsByClassName('tabs-btn')[0].classList.add('tabBtn-active');
			codeTab.getElementsByClassName('tabs-content')[0].classList.add('tab-expanded');

		// Intermediary htmlGenerators
		// --------------------------------

	};

	// Checkboxes 										- Kept separated cause they require the effectsArray as an param
	// --------------------------------

		// Generate checkboxes + search + checkbox Buttons - goTo | highlight
		// --------------------------------

			function byAndu_finalCode_generateCheckboxes(areaIdentifier, effectsArray, effectsIdentifier) {

				var targetArea;
				if 		(areaIdentifier === 'css') { targetArea = document.getElementsByClassName('finalCode-checkbox-container-css')[0] }
				else if (areaIdentifier === 'js' ) { targetArea = document.getElementsByClassName('finalCode-checkbox-container-js') [0] };

				targetArea.innerHTML = 
				'<row class="finalCode-checkbox-globalSelect-container">' 																	+
					'<span class="finalCode-checkbox-globalSelect-title"> Include: </span> ' 												+
					'<div  class="finalCode-checkbox-globalSelect-btnContainer">'															+
						'<button class="finalCode-checkbox-globalSelect-btn" data-selectItems="all">  All  </button> '						+
						'<button class="finalCode-checkbox-globalSelect-btn" data-selectItems="none"> None </button> '						+
					'</div> '																												+
					'<div  class="finalCode-checkbox-searchBox"> '																			+
						'<input  class="finalCode-checkbox-searchBox-input" type="text" placeholder="Search" data-category="checkbox"/> '	+
						'<button class="finalCode-checkbox-searchBox-clearBtn fa fa-times"> </button> '										+
					'</div> '																												+
				'</row> '																													+
				'<div class="finalCode-checkbox-innerContainer"> </div>' 																	;

				targetArea = targetArea.getElementsByClassName('finalCode-checkbox-innerContainer')[0];

				if (targetArea.parentElement.getAttribute('data-includeDependencies')) { generate_innerHTML(targetArea, 'dependencies') };

				if (effectsArray) {

					effectsArray.map(function(effect) {

						if (effectsIdentifier) {

							if (effect.indexOf(effectsIdentifier) > -1) { 

								generate_innerHTML(targetArea, effect) 

							} else if (effect != '~~line-break') {

								var newElem = document.createElement('row');
								newElem.classList = 'p-0 text-bold mt-sm';
								newElem.innerHTML = '// '+effect;

								targetArea.appendChild(newElem);
							}

						} else {  generate_innerHTML(targetArea, effect) }
					})
				};

				// Intermediary 
				// --------------------------------

					function generate_innerHTML(targetArea, effect) {

						var newElem = document.createElement('row');

						newElem.classList = 'finalCode-checkbox-parent pl-0';
						newElem.innerHTML = 
							'<input class="finalCode-checkbox finalCode-checkbox-'+effect+'" type="checkbox" checked="checked" ' +
									'data-finalCodeId="'+effect+'"> '+effect.replace(effectsIdentifier, '')+' ' 				 +
							'<button class="finalCode_checkbox_btn_goto"> </button> ' 											 +
							'<button class="finalCode_checkbox_btn_highlight"> </button> '										 ;
						
						targetArea.appendChild(newElem);

					};
			};

		// Generate radioButtons
		// --------------------------------

			function byAndu_finalCode_generateRadioSelects(areaIdentifier, effectsArray, effectsIdentifier) {

				var targetArea;
				if 		(areaIdentifier === 'html') 		 { targetArea = document.getElementsByClassName('finalCode-radio-container-html')[0] 			}
				else if (areaIdentifier === 'css-singular' ) { targetArea = document.getElementsByClassName('finalCode-radio-container-css-singular') [0] 	};

				targetArea.innerHTML = 
					'<row class="finalCode-checkbox-globalSelect-container">' 											+
						'<span class="finalCode-checkbox-globalSelect-title"> Generate: </span> ' 						+
						'<div  class="finalCode-checkbox-searchBox"> '													+
							'<input  class="finalCode-checkbox-searchBox-input" type="text" placeholder="Search" data-category="radio"/> '		+
							'<button class="finalCode-checkbox-searchBox-clearBtn fa fa-times"> </button> '				+
						'</div> '																						+
					'</row> '																							+
					'<div class="finalCode-checkbox-innerContainer"> </div>' 											;

				targetArea = targetArea.getElementsByClassName('finalCode-checkbox-innerContainer')[0];

				effectsArray.map(function(effect) {

					if (effectsIdentifier) {

						if (effect.indexOf(effectsIdentifier) > -1) { generate_innerHTML(targetArea, effect) } 

						else if (effect != '~~line-break') {

							var newElem = document.createElement('row');
							newElem.classList = 'p-0 text-bold mt-sm';
							newElem.innerHTML = '// '+effect;

							targetArea.appendChild(newElem);
						}

					} else { generate_innerHTML(targetArea, effect) }

				});

				targetArea.getElementsByClassName('finalCode-radioSelect')[0].checked = true;

				// Intermediary 
				// --------------------------------

					function generate_innerHTML(targetArea, effect) {

						var newElem = document.createElement('row');

						newElem.classList = 'finalCode-radio-parent pl-0';
						newElem.innerHTML = 
							'<input class="finalCode-radioSelect finalCode-radioSelect-'+effect+'" type="radio" name="finalCode-radioSelect-'+areaIdentifier+'" data-finalCodeId="'+effect+'"> '+effect.replace(effectsIdentifier, '')+' ';
						
						targetArea.appendChild(newElem);

					}
			};

		// select/deselect all - functionality
		// --------------------------------

			function byAndu_finalCode_checkboxGlobalUpdate(currentBtn) {

				var current_codeScope = getParent(currentBtn, '.finalCode-container'); 
				var checkboxes = Array.from(current_codeScope.getElementsByClassName('finalCode-checkbox'));
				var codeBlocks = Array.from(current_codeScope.getElementsByClassName('finalCode-block'));

				var codeBlocks_container = current_codeScope.getElementsByClassName('finalCode-blockContainer')[0];

				switch (currentBtn.getAttribute('data-selectItems')) {
					case 'all'  : 
						checkboxes.map(item => item.checked = true);
						codeBlocks.map(item => item.classList.remove('hidden'));
						codeBlocks_container.classList.remove('hidden');
						break;
					case 'none' : 
						checkboxes.map(item => item.checked = false);
						codeBlocks.map(item => item.classList.add('hidden'));
						codeBlocks_container.classList.add('hidden');
						break;
				}

			};

		// searchBox functionality
		// --------------------------------

			function byAndu_finalCode_searchBox_run(targetInput) {

				var current_value 	= targetInput.value.toLowerCase();
				var identifier 		= targetInput.getAttribute('data-category');
				var container 		= getParent(targetInput, '.finalCode-'+identifier+'-container');

				targetArea = container.getElementsByClassName('finalCode-checkbox-innerContainer')[0];
				targetArea.classList.add('faSpinner', 'faSpinner-fast');

				var targets 		= Array.from(container.getElementsByClassName('finalCode-'+identifier+'-parent'));

				targets.map(function(item){
					if (item.getElementsByTagName('INPUT')[0].getAttribute('data-finalCodeId').toLowerCase().indexOf(current_value) > -1) {
						item.classList.remove('hidden');
					} else {
						item.classList.add('hidden')
					}
				});

				setTimeout(function(){ targetArea.classList.remove('faSpinner', 'faSpinner-fast')}, 0);

			};

			function byAndu_finalCode_searchBox_clear(targetBtn) {

				var targetInput = targetBtn.parentElement.getElementsByClassName('finalCode-checkbox-searchBox-input')[0];
				targetInput.value = '';

				var identifier 		= targetInput.getAttribute('data-category');
				var container 		= getParent(targetInput, '.finalCode-'+identifier+'-container');
				var targets 		= Array.from(container.getElementsByClassName('finalCode-'+identifier+'-parent'));

				targets.map(item => item.classList.remove('hidden'));
			}

		// checkbox Functionality
		// --------------------------------

			function byAndu_finalCode_initCheckboxes() {
				document.getElementsByClassName('article-mainTabs-codeTab')[0].addEventListener('change', function(e){

					var target = e.target;

					if (hasClass(target, 'finalCode-checkbox')) {

						var identifier 	 	= target.getAttribute('data-finalCodeId');
						var target_class 	= 'finalCode-block-' + identifier;

						var current_codeScope 	= getParent(target, '.finalCode-container'); 
						var codeBlocks_target  	= current_codeScope.getElementsByClassName(target_class)[0];

						if (target.checked) { 
							codeBlocks_target.classList.remove('hidden');
							target.parentElement.getElementsByClassName('finalCode_checkbox_btn_goto')[0].classList.remove('disabled');
							target.parentElement.getElementsByClassName('finalCode_checkbox_btn_highlight')[0].classList.remove('disabled');
						} else { 
							codeBlocks_target.classList.add('hidden');
							target.parentElement.getElementsByClassName('finalCode_checkbox_btn_goto')[0].classList.add('disabled');
							target.parentElement.getElementsByClassName('finalCode_checkbox_btn_highlight')[0].classList.add('disabled');
						};


						var all_hidden = true;
						var codeSelects = Array.from(current_codeScope.getElementsByClassName('finalCode-checkbox'));
						codeSelects = codeSelects.filter(item => !hasClass(item, 'finalCode-checkbox-dependencies'));

						if (codeSelects.length > 0) { codeSelects.map(function(item){ if (item.checked) { all_hidden = false } }) }
						else { all_hidden = false }; // for the scenario where only the [dependencies] checkbox is present, with no other code show/hide options present

						var codeBlocks_container = current_codeScope.getElementsByClassName('finalCode-blockContainer')[0];

						if (all_hidden) { codeBlocks_container.classList.add   ('hidden') } 
						else 			{ codeBlocks_container.classList.remove('hidden') }

					}

				})
			};

		// checkbox-Buttons Functionality - goTo | highlight
		// --------------------------------

			function byAndu_checkboxContainer_goTo_run(targetBtn) {

				if (!hasClass(targetBtn, 'disabled')) { 

					var identifier 	 	= targetBtn.parentElement.getElementsByClassName('finalCode-checkbox')[0].getAttribute('data-finalCodeId');
					var target_class 	= 'finalCode-block-' + identifier;

					var current_codeScope 	= getParent(targetBtn, '.finalCode-container'); 
					var codeBlocks_targeted = Array.from(current_codeScope.getElementsByClassName(target_class));

					codeBlocks_targeted.map(function(item){
						scrollElementTo(getParent(item, '.finalCode-blockContainer'), item, 0)
					})
				} 
			};

			function byAndu_checkboxContainer_highlight_run(targetBtn) {

				if (!hasClass(targetBtn, 'disabled')) {

					var identifier 	 	= targetBtn.parentElement.getElementsByClassName('finalCode-checkbox')[0].getAttribute('data-finalCodeId');
					var target_class 	= 'finalCode-block-' + identifier;

					var current_codeScope 	= getParent(targetBtn, '.finalCode-container'); 
					var codeBlocks_all 		= Array.from(current_codeScope.getElementsByClassName('finalCode-block'));
					var codeBlocks_targeted = Array.from(current_codeScope.getElementsByClassName(target_class));

					codeBlocks_all.map(item => item.classList.remove('highlight'));
					codeBlocks_targeted.map(item => item.classList.add('highlight'));
				}
			};

		// radioButtons Functionality
		// --------------------------------

			function byAndu_radioContainer_run(target) {

				var current_radio = target.getElementsByClassName('finalCode-radioSelect')[0];

				current_radio.click();

				var identifier = current_radio.getAttribute('data-finalCodeId');
				var current_codeScope 	= getParent(target, '.finalCode-container'); 
				var codeBlocks_all 		= Array.from(current_codeScope.getElementsByClassName('finalCode-block'));

				codeBlocks_all.map(item => item.classList.add('hidden'));
				current_codeScope.getElementsByClassName('finalCode-block-'+identifier)[0].classList.remove('hidden');
			};


// ShowFileCode Test

/*	console.log(fetchHTML)

	function byAndu_getFileCode(target) {

		var lightbox = document.createElement('div');
		lightbox.classList = 'copyContext-lightbox';
		lightbox.innerHTML = 
		'<div class="copyContext-lightbox-underlay"> </div> ' +
		'<pre class="copyContext-lightbox-textContainer"></pre>';

		document.body.appendChild(lightbox);

		lightbox.getElementsByClassName('copyContext-lightbox-underlay')[0].addEventListener('click', function(){
			this.parentElement.parentElement.removeChild(this.parentElement)
		});

		console.log(target.getAttribute('data-fileSrc'))

		//var filePath = target.getAttribute('data-fileSrc');
		//lightbox.innerHTML = fetchHTML(filePath).replace(/</g, '&lt;');
	};*/

	var byAndu_current_codeSnippets;

	function byAndu_codeSnippetModal_generateCode(elem) {

		var targetValue; 

		if (hasClass(elem, 'demoItem-container')) 	{ targetValue = elem.getAttribute('data-finalCodeId') } 
		else 										{ targetValue = getParent(elem , '.demoItem-container').getAttribute('data-finalCodeId') };

		var targetObj = byAndu_current_codeSnippets.filter(item => item.name == targetValue)[0];

		if (targetObj) { 
			document.getElementById('byAndu-codeSnippetModal-code').innerHTML = targetObj.code;
			return true
		};

		return false 
	};

// Initialize Components
// --------------------------------------------------

	document.body.addEventListener('click', function(e) {

		var componentsObj = asteriskObj.components;
		// console.log(e.target);

		if 		(hasClass(e.target, 'tabs-btn')) 						{ componentsObj.tabs.run(e.target) 						}
		else if (hasClass(e.target, 'spoiler-btn')) 					{ componentsObj.spoiler.run(e.target) 					}
		else if (hasClass(e.target, 'modal-btn')) 						{ componentsObj.modal.run(e.target) 					}
		else if (hasClass(e.target, 'accordion-btn')) 					{ componentsObj.accordion.run(e.target) 				}

		else if (hasClass(e.target, 'copyContext-btn-copyText')) 		{ componentsObj.copyContext.run_copyText(e.target) 		}
		else if (hasClass(e.target, 'copyContext-btn-saveFile')) 		{ componentsObj.copyContext.run_saveFile(e.target) 		}
		else if (hasClass(e.target, 'copyContext-btn-showLightbox')) 	{ componentsObj.copyContext.run_viewLightbox(e.target)	}

		else if (hasClass(e.target, 'finalCode_checkbox_btn_goto')) 		{ byAndu_checkboxContainer_goTo_run(e.target)			}
		else if (hasClass(e.target, 'finalCode_checkbox_btn_highlight')) 	{ byAndu_checkboxContainer_highlight_run(e.target)		}

		else if (hasClass(e.target, 'finalCode-radio-parent')) 				{ byAndu_radioContainer_run(e.target)		}
		else if (hasClass(e.target, 'finalCode-checkbox-globalSelect-btn')) { byAndu_finalCode_checkboxGlobalUpdate(e.target) }

		//else if (hasClass(e.target, 'byAndu-file')) { byAndu_getFileCode(e.target) }

		//else if (hasClass(e.target, 'faSpinner')) { e.target.classList.remove('faSpinner') }

		else if (hasClass(e.target, 'finalCode-checkbox-searchBox-clearBtn')) { byAndu_finalCode_searchBox_clear(e.target) }

		else if (hasClass(e.target, 'demoItem') 
			|| hasClass(e.target, 'demoItem-container')) { 

			if (byAndu_codeSnippetModal_generateCode(e.target)) { 
				document.getElementById('byAndu-codeSnippetModal').classList.add('modal-show') 
			}
		}

	});

	// Modals
	document.getElementById('byAndu-modalsContainer').addEventListener('click', function(e) {
		if (hasClass(e.target, 'modal-underlay')) { e.target.parentElement.classList.remove('modal-show') }
	});

	// Code Checkboxes SearchBox
	document.getElementById('__route__mainView').addEventListener('input', function(e){
		if (hasClass(e.target, 'finalCode-checkbox-searchBox-input')) {
			byAndu_finalCode_searchBox_run(e.target)
		}
	});

	/*document.getElementById('byAndu-infoBtn').addEventListener('click', function(){

		var current_modal = document.getElementById('byAndu-info');

		current_modal.setAttribute('aria-hidden', 'false');
		current_modal.setAttribute('tabindex', '0');
		current_modal.focus();
		
		current_modal.classList.add('expanded');

	});

	function byAndu_modal_open() {

	};

	function byAndu_model_close() {

	};*/

	/*
	(function(){

		window.addEventListener('click', function(e){

			var clickRipple = document.createElement('div');
			clickRipple.classList = 'clickRipple';

			clickRipple.style.top  = (e.pageY + window.pageYOffset - 15) + 'px';
			clickRipple.style.left = (e.pageX + window.pageXOffset - 15) + 'px';

			document.body.appendChild(clickRipple);

			setTimeout(function(){ clickRipple.parentElement.removeChild(clickRipple)}, 400)

		})

	})();
	*/

	// static
	/*
	(function(){

		var x = 50;
		var y = 50;

		document.addEventListener('mousemove' , onMouseUpdate, false);
		document.addEventListener('mouseenter', onMouseUpdate, false);
		    
		function onMouseUpdate(e) {
		  x = e.pageX;
		  y = e.pageY;
		}

		setInterval(function(e){

			var clickRipple = document.createElement('div');
			clickRipple.classList = 'clickRipple';

			clickRipple.style.left = (x + window.pageXOffset - 15) + 'px';
			clickRipple.style.top  = (y + window.pageYOffset - 15) + 'px';

			document.body.appendChild(clickRipple);

			setTimeout(function(){ clickRipple.parentElement.removeChild(clickRipple)}, 300)

		}, 100)

	})();
	*/

	// random
	/*
	(function(){

		var x = 50;
		var y = 50;

		document.addEventListener('mousemove' , onMouseUpdate, false);
		document.addEventListener('mouseenter', onMouseUpdate, false);
		    
		function onMouseUpdate(e) {
		  x = e.pageX;
		  y = e.pageY;
		}

		setInterval(function(e){

			var clickRipple = document.createElement('div');
			clickRipple.classList = 'clickRipple';

			var randomX = Math.floor((Math.random() * 20) - 10);
			var randomY = Math.floor((Math.random() * 20) - 10);

			clickRipple.style.left = (x + window.pageXOffset + randomX - 15) + 'px';
			clickRipple.style.top  = (y + window.pageYOffset + randomY - 15) + 'px';

			document.body.appendChild(clickRipple);

			setTimeout(function(){ clickRipple.parentElement.removeChild(clickRipple)}, 300)

		}, 100)

	})();
	*/


	// Remove all tab-spaces from [code]
	// required to properly indent [code] within [js file] and when displayed in [pre] to user
	function byAndu_codeBlock_formatCodeString(codeObject) { 

		codeObject.map(function(item){ item.code = item.code.replace(/\t/g, '') + '\n' });

		return codeObject
	};

	function byAndu_codeBlock_generateInnerHTML(codeObject , targetContainer_classIdentifier) {

		var targetContainer_classIdentifier = 'finalCode-blockContainer-' + targetContainer_classIdentifier;
		var targetContainer = document.getElementById('__route__mainView').getElementsByClassName(targetContainer_classIdentifier)[0];

		var hiddenClass = '';
		if (targetContainer_classIdentifier.indexOf('singular') > -1) { hiddenClass = 'hidden' };

		codeObject.map(function(item){

	        var newElem = document.createElement('PRE');
	        newElem.innerHTML = item.code;

	        if (item.name !== null) {
	            newElem.classList = 'finalCode-block ' + hiddenClass;
	            newElem.classList.add('finalCode-block-'+item.name);
	            newElem.setAttribute('data-finalCodeId', item.name);
	        };

	        targetContainer.appendChild(newElem);
	    });

	    targetContainer.getElementsByClassName('finalCode-block')[0].classList.remove('hidden');

	};

	/*document.getElementById('mobile-showNav-btn').addEventListener('click', function(){
		document.getElementById('byAndu-navbarSide').classList.add('mobileViewports-showNav')
	});*/
