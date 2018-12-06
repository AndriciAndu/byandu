
	var byAndu = {};

	byAndu.pageConfigObj_resetObj = function() {

		byAndu_pageConfigObj = {

			html : {
				generate_tab        : false , // boolean : [true] will generate the [code tab] 
				generate_checkBoxes : false , // false || [array of strings]
				generate_codeBlocks : false   // false || [array of objects]
			} ,

			css : {
				generate_tab        : false ,
				generate_checkBoxes : false ,
				generate_codeBlocks : false 
			} ,

			css_singular : {
				generate_tab        : false ,
				generate_checkBoxes : false ,
				generate_codeBlocks : false 
			} ,

			js : {
				generate_tab        : false ,
				generate_checkBoxes : false ,
				generate_codeBlocks : false 
			} ,

			searchBox_removeString : '' , // string
			demoItems_codeLink : null     // refference to [code block] array
		}
	};

	/*
		paramObj = {

			checkBoxes : {
				[scenario = css] : [refference array] (strings)
				[scenario = js]  : [refference array] (strings)
			} ,

			codeBlocks : {
				[scenario = css] : [refference array] (objects)
				[scenario = js]  : [refference array] (objects)
			} ,

			removeString : 'string' , 
			demoItems_codeLink : [refference array] (objects)
		}
		*/

	// sets up the [byAndu_pageConfigObj] - will be later used to generate HTML and etc
	byAndu.pageConfigObj_setupObj = function( paramObj ) {

		// console.log( paramObj );

		byAndu.pageConfigObj_resetObj();

		var codeTab = document.getElementsByClassName('article-mainTabs-codeTab')[0];
		var codeOptions = codeTab.getAttribute('data-generateCodeFor');

		if (codeOptions) {

			codeOptions = JSON.parse(codeOptions.replace(/'/g, '"')); 
			var pageConfigObj = byAndu_pageConfigObj;

			// sets what items will be generated within [byAndu.codeTab_generateBaselineHTML()]
			// kept separate from the other [check] - in case the code to be generated has not been added yet (article still in development)
			codeOptions.map(function(item){
				switch (item) {
					case 'html' 		:  pageConfigObj.html         .generate_tab = true ; break;
					case 'css' 			:  pageConfigObj.css          .generate_tab = true ; break;
					case 'css-singular' :  pageConfigObj.css_singular .generate_tab = true ; break;
					case 'js' 			:  pageConfigObj.js           .generate_tab = true ; break;
					default : console.log('Invalid [data-generateCodeFor] param: ' + item)
				}
			});

			if (paramObj) {

				pageConfigObj.html         .generate_checkBoxes = paramObj.checkBoxes.html         || false ;
				pageConfigObj.css          .generate_checkBoxes = paramObj.checkBoxes.css          || false ;
				pageConfigObj.css_singular .generate_checkBoxes = paramObj.checkBoxes.css_singular || false ;
				pageConfigObj.js           .generate_checkBoxes = paramObj.checkBoxes.js           || false ;

				pageConfigObj.html         .generate_codeBlocks = paramObj.codeBlocks.html         || false ;
				pageConfigObj.css          .generate_codeBlocks = paramObj.codeBlocks.css          || false ;
				pageConfigObj.css_singular .generate_codeBlocks = paramObj.codeBlocks.css_singular || false ;
				pageConfigObj.js           .generate_codeBlocks = paramObj.codeBlocks.js           || false ;

				pageConfigObj.removeString       = paramObj.removeString       || ''   ;
				pageConfigObj.demoItems_codeLink = paramObj.demoItems_codeLink || null ;
			}
		};
	};

	byAndu.pageConfigObj_runConfig = function() {

		// generate basline HTML (markup scheleton - tabs)
		byAndu.codeTab_generateBaselineHTML();

		// if provided with [object] - create checkboxes
		var pageConfigObj = byAndu_pageConfigObj;

		var removeString = pageConfigObj.removeString || '';

		var cb_html  = pageConfigObj.html         .generate_checkBoxes ; if (cb_html)  { byAndu.codeTab_generateCheckboxes('html'         , cb_html  , removeString) };
		var cb_css   = pageConfigObj.css          .generate_checkBoxes ; if (cb_css)   { byAndu.codeTab_generateCheckboxes('css'          , cb_css   , removeString) };
		var cb_css_s = pageConfigObj.css_singular .generate_checkBoxes ; if (cb_css_s) { byAndu.codeTab_generateCheckboxes('css-singular' , cb_css_s , removeString) };
		var cb_js    = pageConfigObj.js           .generate_checkBoxes ; if (cb_js)    { byAndu.codeTab_generateCheckboxes('js'           , cb_js    , removeString) };

		// initialize checkboxes
		byAndu.codeTab_initCheckboxes();

		// generate codeBlocks
		var xcb_html  = pageConfigObj.html         .generate_codeBlocks ; if (xcb_html)  { byAndu_codeBlock_generateInnerHTML(xcb_html  , 'html'        ) };
		var xcb_css   = pageConfigObj.css          .generate_codeBlocks ; if (xcb_css)   { byAndu_codeBlock_generateInnerHTML(xcb_css   , 'css'         ) };
		var xcb_css_s = pageConfigObj.css_singular .generate_codeBlocks ; if (xcb_css_s) { byAndu_codeBlock_generateInnerHTML(xcb_css_s , 'css-singular') };
		var xcb_js    = pageConfigObj.js           .generate_codeBlocks ; if (xcb_js)    { byAndu_codeBlock_generateInnerHTML(xcb_js    , 'js'          ) };
	};

	byAndu.codeTab_generateBaselineHTML = function() {

		/*
			.article-mainTabs-codeTab
				.codeTab-wrapper
					.codeTab__sideNav
					.codeTab__main

			*/

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
			var tabBtn_css_singular  	= '<button class="tabs-btn" data-tabs-id="3"> CSS - Singular </button>' ;
			var tabBtn_js   			= '<button class="tabs-btn" data-tabs-id="4"> JS  </button>' 			;

			var tabContent_html = 
				'<!-- HTML --> '																								+
					'<div class="tabs-content tab-expanded codeTab" data-tabs-id="1"> '						+

						'<div class="codeTab__sideNav" data-searchBox-codeType="html"></div> '									+

						'<div class="codeTab__main"> '																			+
							'<div class="copyContext-btnContainer" data-copyContextId="'+copyContextId+'-html"> '				+
								'<button class="copyContext-btn copyContext-btn-copyText"> </button> '							+
							'</div> '																							+
							'<div class="copyContext" data-copyContextId="'+copyContextId+'-html"> '							+
								'<div id="codeSection-html" class="codeTab__main__codeSection" data-code="html"></div> '		+
							'</div> '																							+
						'</div> '																								+
					'</div> '																									;
			
			var tabContent_css  = 
				'<!-- CSS --> '																									+
					'<div class="tabs-content codeTab" data-tabs-id="2"> '									+

						'<div class="codeTab__sideNav" data-searchBox-codeType="css"> </div> '									+

						'<div class="codeTab__main"> '																			+
							'<div class="copyContext-btnContainer" data-copyContextId="'+copyContextId+'-css"> '				+
								'<button class="copyContext-btn copyContext-btn-copyText"> </button> '							+
								'<button class="copyContext-btn copyContext-btn-saveFile" ' 									+
										'data-fileName="'+fileName+'-spec" data-fileType=".css"> </button> '					+
								'<button class="copyContext-btn copyContext-btn-showLightbox"> </button> '						+
							'</div> '																							+
							'<div class="copyContext" data-copyContextId="'+copyContextId+'-css"> '								+
								'<div id="codeSection-css" class="codeTab__main__codeSection" data-code="css"></div> '			+
							'</div> '																							+
						'</div> '																								+
					'</div> '																									;

			var tabContent_css_singular  = 
				'<!-- CSS --> '																												+
					'<div class="tabs-content codeTab" data-tabs-id="3"> '												+

						'<div class="codeTab__sideNav" data-searchBox-codeType="css-singular"> </div> '										+

						'<div class="codeTab__main"> '																						+
							'<div class="copyContext-btnContainer" data-copyContextId="'+copyContextId+'-css-singular"> '					+
								'<button class="copyContext-btn copyContext-btn-copyText"> </button> '										+
								'<button class="copyContext-btn copyContext-btn-saveFile" ' 												+
										'data-fileName="'+fileName+'-spec" data-fileType=".css"> </button> '								+
								'<button class="copyContext-btn copyContext-btn-showLightbox"> </button> '									+
							'</div> '																										+
							'<div class="copyContext" data-copyContextId="'+copyContextId+'-css-singular"> '								+
								'<div id="codeSection-css-singular" class="codeTab__main__codeSection" data-code="css-singular"></div> '	+
							'</div> '																										+
						'</div> '																											+
					'</div> '																												;

			var tabContent_js   = 
				'<!-- JS --> '																									+
					'<div class="tabs-content codeTab" data-tabs-id="4"> '									+

						'<div class="codeTab__sideNav" data-searchBox-codeType="js" '+includeDepString+'> </div> '				+

						'<div class="codeTab__main"> '																			+
							'<div class="copyContext-btnContainer" data-copyContextId="'+copyContextId+'-js"> '					+
								'<button class="copyContext-btn copyContext-btn-copyText"> </button> '							+
								'<button class="copyContext-btn copyContext-btn-saveFile" '										+
										'data-fileName="'+fileName+'-spec" data-fileType=".js"> </button> '						+
								'<button class="copyContext-btn copyContext-btn-showLightbox"> </button> '						+
							'</div> '																							+
							'<div class="copyContext" data-copyContextId="'+copyContextId+'-js"> '								+
								'<div id="codeSection-js" class="codeTab__main__codeSection" data-code="js"></div> '			+
							'</div> '																							+
						'</div> '																								+
					'</div> '																									;

		// Generate innerHTML
		// --------------------------------

			codeTab.innerHTML = 
				'<div class="tabs ph-0"> '								+
					'<div class="tabs-btnGroup buttons-fill"></div> '	+
					'<div class="tabs-contentGroup"></div> '			+
				'</div> '												;


			var codeTab_tabs_btnGroup 	  = codeTab.getElementsByClassName('tabs-btnGroup')    [0];
			var codeTab_tabs_contentGroup = codeTab.getElementsByClassName('tabs-contentGroup')[0];

			if (byAndu_pageConfigObj.html.generate_tab) {
				codeTab_tabs_btnGroup    .insertAdjacentHTML('beforeend', tabBtn_html);
				codeTab_tabs_contentGroup.insertAdjacentHTML('beforeend', tabContent_html);
			};

			if (byAndu_pageConfigObj.css.generate_tab) {
				codeTab_tabs_btnGroup    .insertAdjacentHTML('beforeend', tabBtn_css);
				codeTab_tabs_contentGroup.insertAdjacentHTML('beforeend', tabContent_css);
			};

			if (byAndu_pageConfigObj.css_singular.generate_tab) {
				codeTab_tabs_btnGroup    .insertAdjacentHTML('beforeend', tabBtn_css_singular);
				codeTab_tabs_contentGroup.insertAdjacentHTML('beforeend', tabContent_css_singular);
			};

			if (byAndu_pageConfigObj.js.generate_tab) {
				codeTab_tabs_btnGroup    .insertAdjacentHTML('beforeend', tabBtn_js);
				codeTab_tabs_contentGroup.insertAdjacentHTML('beforeend', tabContent_js);
			};

			var firstTabBtn     = codeTab.getElementsByClassName('tabs-btn')    [0];
			var firstTabContent = codeTab.getElementsByClassName('tabs-content')[0];
			if (firstTabBtn)     { firstTabBtn    .classList.add('tabBtn-active') };
			if (firstTabContent) { firstTabContent.classList.add('tab-expanded')  };
	};

	// Checkboxes - Kept separated cause they require the itemsArray as an param
	// --------------------------------

		// Generate checkboxes + search + checkbox Buttons - goTo | highlight
		// --------------------------------

			byAndu.codeTab_generateCheckboxes = function(areaIdentifier, itemsArray, effectsIdentifier) {

				// console.log({areaIdentifier, itemsArray, effectsIdentifier})

				// get the adequate [code-tab] [searchBox-wrapper]
				var searchBox_wrappers = Array.from(document.getElementsByClassName('codeTab__sideNav'));
				var targetArea = searchBox_wrappers.find(item => item.getAttribute('data-searchBox-codeType') == areaIdentifier);

				getParent(targetArea, '.codeTab').classList.add('codeTab-hasSearch');

				// generate baseline html for [searchBox-wrapper]
				var searchBox_type = null;
				if 		(areaIdentifier == 'html' || areaIdentifier == 'css-singular') { searchBox_type = 'radio' }
				else if (areaIdentifier == 'css'  || areaIdentifier == 'js')           { searchBox_type = 'check' };

				if (searchBox_type == 'check') {

					targetArea.innerHTML = 
						'<div class="searchBox-top-sticky"> '																			+
							'<div class="col-12 p-0 searchBox-overallSelect-wrapper"> '													+
								'<div class="searchBox-overallSelect-title"> Include: </div> '											+
								'<div class="searchBox-overallSelect-btnGroup"> '														+
									'<button class="searchBox-overallSelect-btn" data-selectItems="all">  All  </button> '				+
									'<button class="searchBox-overallSelect-btn" data-selectItems="none"> None </button> '				+
								'</div> '																								+
							'</div> '																									+

							'<div class="col-12 p-0 searchBox-search-wrapper"> '														+
								'<input  class="searchBox-search-input" type="text" placeholder="Search" data-category="checkbox"/> '	+
								'<button class="searchBox-search-clearBtn fa fa-times"> </button> '										+
							'</div> '																									+
						'</div> '																										+
						'<div class="col-12 searchBox-results-wrapper"> </div> '														;

				} else if (searchBox_type == 'radio') {

					targetArea.innerHTML = 
						'<div class="searchBox-top-sticky"> '																			+
							'<div class="col-12 p-0 searchBox-search-wrapper"> '														+
								'<input class ="searchBox-search-input" type="text" placeholder="Search" data-category="radio"/> '		+
								'<button class="searchBox-search-clearBtn fa fa-times"> </button> '										+
							'</div> '																									+
						'</div> '																										+
						'<div class="col-12 searchBox-results-wrapper"> </div> '														;
				};

				// generate actual checkboxes within [searchBox-wrapper] > [results-wrapper]
				targetArea = targetArea.getElementsByClassName('searchBox-results-wrapper')[0];

				// if (targetArea.parentElement.getAttribute('data-includeDependencies')) { generate_innerHTML(targetArea, 'dependencies') };

				if (itemsArray) {

					if (searchBox_type == 'check') {

						itemsArray.map(function(effect) {

							if (effect != '~~line-break') {

								// Generate Titles
								if (effect.indexOf('~~title: ') > -1) {

									var newElem = document.createElement('row');
									newElem.classList = 'p-0 text-bold mt-sm';
									newElem.innerHTML = '// '+effect.replace('~~title: ','');
									targetArea.appendChild(newElem);

								// Generate Checkboxes
								} else {

									var newElem = document.createElement('div');
									newElem.classList = 'col-12 finalCode-checkbox-parent';
									newElem.innerHTML = 
										'<input class="finalCode-checkbox finalCode-checkbox-'+effect+'" type="checkbox" checked="checked" ' +
												'data-finalCodeId="'+effect+'"> '+effect.replace(effectsIdentifier, '')+' ' 				 +
										'<button class="finalCode_checkbox_btn_goto"> </button> ' 											 +
										'<button class="finalCode_checkbox_btn_highlight"> </button> '										 ;
									targetArea.appendChild(newElem);
								}
							}
						});

					} else if (searchBox_type == 'radio') {

						itemsArray.map(function(effect) {

							if (effect != '~~line-break') {

								// Generate Titles
								if (effect.indexOf('~~title: ') > -1) {

									var newElem = document.createElement('row');
									newElem.classList = 'p-0 text-bold mt-sm';
									newElem.innerHTML = '// '+effect.replace('~~title: ','');
									targetArea.appendChild(newElem);

								// Generate Checkboxes
								} else {

									var newElem = document.createElement('row');
									newElem.classList = 'finalCode-radio-parent pl-0';
									newElem.innerHTML = 
										'<input class="finalCode-radioSelect finalCode-radioSelect-'+effect+'" '						+
										'type="radio" name="finalCode-radioSelect-'+areaIdentifier+'" data-finalCodeId="'+effect+'"> '	+
											effect.replace(effectsIdentifier, '') + ' '													;
									targetArea.appendChild(newElem);
								}
							}
						});

						targetArea.getElementsByClassName('finalCode-radioSelect')[0].checked = true;
					};
				};
			};

		// select/deselect all - functionality
		// --------------------------------

			byAndu.codeTab_checkbox_globalUpdate = function(currentBtn) {

				var current_codeScope = getParent(currentBtn, '.codeTab'); 
				var checkboxes = Array.from(current_codeScope.getElementsByClassName('finalCode-checkbox'));
				var codeBlocks = Array.from(current_codeScope.getElementsByClassName('finalCode-block'));

				var codeBlocks_container = current_codeScope.getElementsByClassName('codeTab__main__codeSection')[0];

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

			byAndu.codeTab_searchBox_run = function(targetInput) { console.log('asd')

				var current_value 	= targetInput.value.toLowerCase();
				var identifier 		= targetInput.getAttribute('data-category');
				var container 		= getParent(targetInput, '.codeTab__sideNav');

				targetArea = container.getElementsByClassName('searchBox-results-wrapper')[0];
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

			byAndu.codeTab_searchBox_clear = function(targetBtn) {

				var targetInput = targetBtn.parentElement.getElementsByClassName('searchBox-search-input')[0];
				targetInput.value = '';

				var identifier 		= targetInput.getAttribute('data-category');
				var container 		= getParent(targetInput, '.codeTab__sideNav');
				var targets 		= Array.from(container.getElementsByClassName('finalCode-'+identifier+'-parent'));

				targets.map(item => item.classList.remove('hidden'));
			};

		// checkbox Functionality
		// --------------------------------

			byAndu.codeTab_initCheckboxes = function() {

				document.getElementsByClassName('article-mainTabs-codeTab')[0].addEventListener('change', function(e){

					var target = e.target;

					if (hasClass(target, 'finalCode-checkbox')) {

						var identifier 	 	= target.getAttribute('data-finalCodeId');
						var target_class 	= 'finalCode-block-' + identifier;

						var current_codeScope 	= getParent(target, '.codeTab'); 
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

						var codeBlocks_container = current_codeScope.getElementsByClassName('codeTab__main__codeSection')[0];

						if (all_hidden) { codeBlocks_container.classList.add   ('hidden') } 
						else 			{ codeBlocks_container.classList.remove('hidden') }

					}

				})
			};

		// checkbox-Buttons Functionality - goTo | highlight
		// --------------------------------

			byAndu.checkboxBtn_goTo = function(targetBtn) {

				if (!hasClass(targetBtn, 'disabled')) { 

					var identifier 	 	= targetBtn.parentElement.getElementsByClassName('finalCode-checkbox')[0].getAttribute('data-finalCodeId');
					var target_class 	= 'finalCode-block-' + identifier;

					var current_codeScope 	= getParent(targetBtn, '.codeTab'); 
					var codeBlocks_targeted = Array.from(current_codeScope.getElementsByClassName(target_class));

					codeBlocks_targeted.map(function(item){
						scrollElementTo(getParent(item, '.codeTab__main'), item, 0)
					})
				} 
			};

			byAndu.checkboxBtn_highlight = function(targetBtn) {

				if (!hasClass(targetBtn, 'disabled')) {

					var identifier 	 	= targetBtn.parentElement.getElementsByClassName('finalCode-checkbox')[0].getAttribute('data-finalCodeId');
					var target_class 	= 'finalCode-block-' + identifier;

					var current_codeScope 	= getParent(targetBtn, '.codeTab'); 
					var codeBlocks_all 		= Array.from(current_codeScope.getElementsByClassName('finalCode-block'));
					var codeBlocks_targeted = Array.from(current_codeScope.getElementsByClassName(target_class));

					codeBlocks_all.map(item => item.classList.remove('highlight'));
					codeBlocks_targeted.map(item => item.classList.add('highlight'));
				}
			};

		// radioButtons Functionality
		// --------------------------------

			byAndu.radio_run = function(target) {

				var current_radio;
				if (hasClass(target, 'finalCode-radioSelect')) { 
					current_radio = target 
				} else {
					current_radio = target.getElementsByClassName('finalCode-radioSelect')[0];
				};

				current_radio.click();

				var identifier = current_radio.getAttribute('data-finalCodeId');
				var current_codeScope 	= getParent(target, '.codeTab'); 
				var codeBlocks_all 		= Array.from(current_codeScope.getElementsByClassName('finalCode-block'));

				codeBlocks_all.map(item => item.classList.add('hidden'));
				current_codeScope.getElementsByClassName('finalCode-block-'+identifier)[0].classList.remove('hidden');
			};

	function byAndu_codeSnippetModal_generateCode(elem) {

		var targetValue; 

		if (hasClass(elem, 'demoItem-container')) 	{ targetValue = elem.getAttribute('data-finalCodeId') } 
		else 										{ targetValue = getParent(elem , '.demoItem-container').getAttribute('data-finalCodeId') };

		var targetObj = byAndu_pageConfigObj.demoItems_codeLink.filter(item => item.name == targetValue)[0];

		if (targetObj) { 
			document.getElementById('byAndu-codeSnippetModal-code').innerHTML = targetObj.code;
			return true
		};

		return false 
	};

	// Remove all tab-spaces from [code]
	// required to properly indent [code] within [js file] and when displayed in [pre] to user
	function byAndu_codeBlock_formatCodeString(codeObject) { 

		codeObject.map(function(item){ item.code = item.code.replace(/\t/g, '') + '\n' });

		return codeObject
	};

	function byAndu_codeBlock_generateInnerHTML(codeObject , codeType) {

		var allCodeContainers = Array.from(document.getElementsByClassName('codeTab__main__codeSection'));
		var targetContainer = allCodeContainers.find(item => item.getAttribute('data-code') == codeType);

		var hiddenClass = '';
		if (codeType.indexOf('singular') > -1) { hiddenClass = 'hidden' };

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

		else if (hasClass(e.target, 'finalCode_checkbox_btn_goto')) 		{ byAndu.checkboxBtn_goTo(e.target)			}
		else if (hasClass(e.target, 'finalCode_checkbox_btn_highlight')) 	{ byAndu.checkboxBtn_highlight(e.target)		}

		else if (hasClass(e.target, 'finalCode-radio-parent')) 				{ byAndu.radio_run(e.target)		}
		else if (hasClass(e.target, 'searchBox-overallSelect-btn')) 		{ byAndu.codeTab_checkbox_globalUpdate(e.target) }

		//else if (hasClass(e.target, 'byAndu-file')) { byAndu_getFileCode(e.target) }

		//else if (hasClass(e.target, 'faSpinner')) { e.target.classList.remove('faSpinner') }

		else if (hasClass(e.target, 'searchBox-search-clearBtn')) { byAndu.codeTab_searchBox_clear(e.target) }

		else if (hasClass(e.target, 'demoItem') 
			|| hasClass(e.target, 'demoItem-container')) { 

			if (byAndu_codeSnippetModal_generateCode(e.target)) { 
				document.getElementById('byAndu-codeSnippetModal').classList.add('modal-show') 
			}
		}

	});

	// Modals
	document.getElementById('byAndu-modalsContainer').addEventListener('click', function(e) {
		if (hasClass(e.target, 'modal-underlay')) { asteriskObj.components.modal.closeModal(e.target.parentElement) }
	});

	document.getElementById('sideNav-byAndu-infoBtn').addEventListener('click', function(){
		document.getElementById('byAndu-info').classList.add('modal-show')
	});

	//
	if (!asteriskObj.components.modal.states.hasEvtListener_keypress_esc) {
		asteriskObj.components.modal.states.hasEvtListener_keypress_esc = true;
		document.addEventListener('keydown', function(e) {

			var e = e || window.event; 

			if (e.keyCode == 27 || e.key == 'Escape' || e.code == 'Escape') {
				var openModal  = asteriskObj.components.modal.states.openModal;
				if (openModal) { asteriskObj.components.modal.closeModal(openModal) }
			};
		});
	};

	// Code Checkboxes SearchBox
	document.getElementById('__route__mainView').addEventListener('input', function(e){
		if (hasClass(e.target, 'searchBox-search-input')) {
			byAndu.codeTab_searchBox_run(e.target)
		}
	});




	function run123(klass) {
		var items = Array.from(document.getElementsByClassName(klass));

		items.map(function(item){
			console.log(item);
			console.log(document.body.contains(item))
		})
	}

	// document.getElementById('byAndu-beta-welcome').classList.add('modal-show');

	// function qweqweqweqw() {
	// 	console.log(document.activeElement);
	// 	setTimeout(qweqweqweqw , 1000)
	// };
	// qweqweqweqw();

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

	/*document.getElementById('mobile-showNav-btn').addEventListener('click', function(){
		document.getElementById('byAndu-navbarSide').classList.add('mobileViewports-showNav')
	});*/


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



















				/*
				var checkBoxes_html = paramObj.checkBoxes['html'];
				if (checkBoxes_html) { pageConfigObj['html'].generate_checkBoxes = checkBoxes_html };

				var checkBoxes_css = paramObj.checkBoxes['css'];
				if (checkBoxes_css) { pageConfigObj['css'].generate_checkBoxes = checkBoxes_css };

				var checkBoxes_css_singular = paramObj.checkBoxes['css_singular'];
				if (checkBoxes_css_singular) { pageConfigObj['css_singular'].generate_checkBoxes = checkBoxes_css_singular };

				var checkBoxes_js = paramObj.checkBoxes['js'];
				if (checkBoxes_js) { pageConfigObj['js'].generate_checkBoxes = checkBoxes_js };

				if (paramObj.template_html) 		{ pageConfigObj.template_html 			= paramObj.template_html 			};
				if (paramObj.template_css) 			{ pageConfigObj.template_css 			= paramObj.template_css 			};
				if (paramObj.template_css_singular) { pageConfigObj.template_css_singular 	= paramObj.template_css_singular 	};
				if (paramObj.template_js) 			{ pageConfigObj.template_js 			= paramObj.template_js 				};
				if (paramObj.searchBox_items) 		{ pageConfigObj.searchBox_items 		= paramObj.searchBox_items 			};
				if (paramObj.searchBox_removeString){ pageConfigObj.searchBox_removeString 	= paramObj.searchBox_removeString 	};
				*/