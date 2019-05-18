
	(function() {

		var items = [
			'imgHvr-flash' ,
			'imgHvr-shine' ,
			'imgHvr-zoomIn' ,
			'imgHvr-zoomOut' ,
			'imgHvr-zoomIn-rotateLeft' ,
			'imgHvr-zoomIn-rotateRight' ,
			'imgHvr-zoomOut-rotateLeft' ,
			'imgHvr-zoomOut-rotateRight'
		];

		var innerHTML_stringToApply = '';
		items.map(function(item){
			var htmlString =
				`<div class="buildTool--generateCheckbox col-4 mb-xs" 
					data-config="{
						'checkbox_text' : '`+item+`' ,
						'checkbox_type' : 'checkbox' ,
						'checkbox_isChecked' : false ,

						'target_main'  : 'effects__imgHover' ,
						'target_group' : '`+item.replace('imgHvr-', '').replace(/-/g, '_')+`' ,

						'ifChecked'    : { 
							'willGenerate_static'      : true , 
							'willGenerate_responsive'  : false ,
							'target_valuesArrayName'   : null
						} ,
						'ifUnchecked'  : { 
							'willGenerate_static'      : false , 
							'willGenerate_responsive'  : false ,
							'target_valuesArrayName'   : null 
						} 
					}"></div> `;

			// remove line-breask | tab-spaces | make multiple spaces to single space
			htmlString = htmlString.replace(/\n/g, '').replace(/\t/g, '').replace(/ +/g, ' ');

			innerHTML_stringToApply += htmlString;
		});

		document.getElementById('generateCheckboxPresets--imgHover').innerHTML = innerHTML_stringToApply;
	})();

	(function() {

		var items = [
			'hasFilter-1977' ,
			'hasFilter-aden' ,
			'hasFilter-amaro' ,
			'hasFilter-ashby' ,
			'hasFilter-brannan' ,
			'hasFilter-brooklyn' ,
			'hasFilter-charmes' ,
			'hasFilter-clarendon' ,
			'hasFilter-crema' ,
			'hasFilter-dogpatch' ,
			'hasFilter-earlybird' ,
			'hasFilter-gingham' ,
			'hasFilter-ginza' ,
			'hasFilter-hefe' ,
			'hasFilter-helena' ,
			'hasFilter-hudson' ,
			'hasFilter-inkwell' ,
			'hasFilter-juno' ,
			'hasFilter-kelvin' ,
			'hasFilter-lark' ,
			'hasFilter-lofi' ,
			'hasFilter-ludwig' ,
			'hasFilter-maven' ,
			'hasFilter-mayfair' ,
			'hasFilter-moon' ,
			'hasFilter-nashville' ,
			'hasFilter-perpetua' ,
			'hasFilter-poprocket' ,
			'hasFilter-reyes' ,
			'hasFilter-rise' ,
			'hasFilter-sierra' ,
			'hasFilter-skyline' ,
			'hasFilter-slumber' ,
			'hasFilter-stinson' ,
			'hasFilter-sutro' ,
			'hasFilter-toaster' ,
			'hasFilter-valencia' ,
			'hasFilter-vesper' ,
			'hasFilter-walden' ,
			'hasFilter-willow' ,
			'hasFilter-xpro-ii'
		];

		var innerHTML_stringToApply = '';
		items.map(function(item){
			var htmlString =
				`<div class="buildTool--generateCheckbox col-4 mb-xs" 
					data-config="{
						'checkbox_text' : '`+item+`' ,
						'checkbox_type' : 'checkbox' ,
						'checkbox_isChecked' : false ,

						'target_main'  : 'effects__filter' ,
						'target_group' : '`+item.replace(/-/g, '_')+`' ,

						'ifChecked'    : { 
							'willGenerate_static'      : true , 
							'willGenerate_responsive'  : false ,
							'target_valuesArrayName'   : null
						} ,
						'ifUnchecked'  : { 
							'willGenerate_static'      : false , 
							'willGenerate_responsive'  : false ,
							'target_valuesArrayName'   : null 
						} 
					}"></div> `;

			// remove line-breask | tab-spaces | make multiple spaces to single space
			htmlString = htmlString.replace(/\n/g, '').replace(/\t/g, '').replace(/ +/g, ' ');

			innerHTML_stringToApply += htmlString;
		});

		document.getElementById('generateCheckboxPresets--filter').innerHTML = innerHTML_stringToApply;
	})();

	(function() {

		var items = [
			'push-up-alt' ,
			'push-down-alt' ,
			'buzz' ,
			'buzz-out' ,
			'bg-sweep' ,
			'bg-bounce' ,
			'bg-radial' ,
			'bg-rectangle' ,
			'bg-shutter' ,
			'border-fade' ,
			'border-reveal' ,
			'border-outline' ,
			'border-underline-overline' ,
			'shadow-glow' ,
			'shadow-push' ,
			'bubble-left' ,
			'bubble-right' ,
			'bubble-top' ,
			'bubble-btm' ,
			'bubble-push-left' ,
			'bubble-push-right' ,
			'bubble-push-top' ,
			'bubble-push-btm' 
		];

		var innerHTML_stringToApply = '';
		items.map(function(item){
			var htmlString =
				`<div class="buildTool--generateCheckbox col-4 mb-xs" 
					data-config="{
						'checkbox_text' : '`+item+`' ,
						'checkbox_type' : 'checkbox' ,
						'checkbox_isChecked' : false ,

						'target_main'  : 'effects__hover' ,
						'target_group' : '`+item.replace(/-/g, '_')+`' ,

						'ifChecked'    : { 
							'willGenerate_static'      : true , 
							'willGenerate_responsive'  : false ,
							'target_valuesArrayName'   : null
						} ,
						'ifUnchecked'  : { 
							'willGenerate_static'      : false , 
							'willGenerate_responsive'  : false ,
							'target_valuesArrayName'   : null 
						} 
					}"></div> `;

			// remove line-breask | tab-spaces | make multiple spaces to single space
			htmlString = htmlString.replace(/\n/g, '').replace(/\t/g, '').replace(/ +/g, ' ');

			innerHTML_stringToApply += htmlString;
		});

		document.getElementById('generateCheckboxPresets--hover').innerHTML = innerHTML_stringToApply;
	})();

	function buildTool_generateCheckboxes( targetCheckbox__elem ) {

		var configObj = JSON.parse(targetCheckbox__elem.getAttribute('data-config').replace(/'/g, '"'));

		// if the checkbox/radio is checked or not
		var stringToSet__isChecked  = (configObj.checkbox_isChecked ? 'checked ' : '');

		var stringToSet__extraClassNames = '';
		var stringToSet__targetFile = '';

		if (configObj.targetFile) {

			stringToSet__extraClassNames = 'buildTool--checkbox--generateDirectlyFromFile';
			stringToSet__targetFile = 'data-targetFile="'+configObj.targetFile+'" ';

			// apply the HTML
			targetCheckbox__elem.innerHTML =
				'<label class="field--toggle field__background--radial--out"> ' 			+

					'<input class="buildTool--checkbox '+stringToSet__extraClassNames+'" '	+
						'type="'+configObj.checkbox_type+'" '+
						stringToSet__isChecked +
						stringToSet__targetFile + ' /> '+

					'<div class="field__checkbox"></div>'									+
					'<div class="field__text">'+configObj.checkbox_text+'</div>'			+
					'<div class="field__background"></div>'									+
				'</label>'																	;

		} else {

			// if radio - generate a 'name' attribute, to link them
			var stringToSet__radioName = '';
			if (configObj.checkbox_type === 'radio') { 
				stringToSet__radioName = 'name="'+configObj.target_main+'--'+configObj.target_group+'" ' 
			};

			var stringToSet__data_main = (configObj.target_main
				? 'data-main="'+configObj.target_main+'" '
				: '');

			var stringToSet__data_group = (configObj.target_group
				? 'data-group="'+configObj.target_group+'" '
				: '');

			// generate [ ifChecked ] / [ ifUncheched ] JSONs
			var stringToSet__data_ifChecked = (configObj.ifChecked
				? 'data-ifChecked="'   + JSON.stringify(configObj.ifChecked)  .replace(/"/g, "'") + '" '
				: '');

			var stringToSet__data_ifUnchecked = (configObj.ifUnchecked 
				? 'data-ifUnchecked="' + JSON.stringify(configObj.ifUnchecked).replace(/"/g, "'") + '" ' 
				: '');

			// apply the HTML
			targetCheckbox__elem.innerHTML =
				'<label class="field--toggle field__background--radial--out"> ' 			+

					'<input class="buildTool--checkbox" type="'+configObj.checkbox_type+'" '+
						stringToSet__radioName +
						stringToSet__isChecked +
						stringToSet__data_main + 
						stringToSet__data_group +
						stringToSet__data_ifChecked + 
						stringToSet__data_ifUnchecked + ' /> '+

					'<div class="field__checkbox"></div>'									+
					'<div class="field__text">'+configObj.checkbox_text+'</div>'			+
					'<div class="field__background"></div>'									+
				'</label>'																	;
		};

		

		// cleanup
		targetCheckbox__elem.removeAttribute('data-config');
		configObj = null;
	};

	Array.from(document.getElementsByClassName('buildTool--generateCheckbox')).map(x => buildTool_generateCheckboxes(x));

	function buildTool_generateInputGroups( targetInputGroup__elem ) {

		var configObj = JSON.parse(targetInputGroup__elem.getAttribute('data-config').replace(/'/g, '"'));

		targetInputGroup__elem.innerHTML =
			'<div class="col-11 p-0"> ' +

				'<div class="col-6 p-0"> ' +
					'<label class="field--text"> ' +
						'<input class="buildTool--valueInput--name" type="text" placeholder="Name" ' +
							'value="'+configObj.default_name+'" required/> ' +
						'<div class="field__validation"></div> ' +
					'</label> ' +
				'</div> ' +

				'<div class="col-6 p-0"> ' +
					'<label class="field--text"> ' +
						'<input class="buildTool--valueInput--value" type="text" placeholder="Value" ' + 
							'value="'+configObj.default_value+'" required/> ' +
						'<div class="field__validation"></div> ' +
					'</label> ' +
				'</div> ' +
			'</div> ' +

			'<button class="col-1 p-0 buildTool--valueInput--removeItemBtn"> X </button> ' ;

		targetInputGroup__elem.setAttribute('data-target', configObj.target_main);
		targetInputGroup__elem.removeAttribute('data-config');
		configObj = null;
	};

	Array.from(document.getElementsByClassName('buildTool--generateInputGroup--setValues')).map(x => buildTool_generateInputGroups(x));

	var viewportPrefixes = [ 
		{ prefix : ''      , after : ''    , before : '' } , 
		{ prefix : 'xs-o-' , after : ' } ' , before : ' @media (max-width: 575.98px) { ' } , 
		{ prefix : 'sm-'   , after : ' } ' , before : ' @media (min-width: 575.98px) { ' } , 
		{ prefix : 'sm-o-' , after : ' } ' , before : ' @media (min-width: 575.98px) and (max-width: 767.98px) { ' } , 
		{ prefix : 'md-'   , after : ' } ' , before : ' @media (min-width: 767.98px) { ' } , 
		{ prefix : 'md-o-' , after : ' } ' , before : ' @media (min-width: 767.98px) and (max-width: 991.98px) { ' } , 
		{ prefix : 'lg-'   , after : ' } ' , before : ' @media (min-width: 991.98px) { ' } , 
		{ prefix : 'lg-o-' , after : ' } ' , before : ' @media (min-width: 991.98px) and (max-width: 1199.98px) { ' } , 
		{ prefix : 'xl-'   , after : ' } ' , before : ' @media (min-width: 1199.98px) { ' }
	];

	// Normalize

		var baseline_normalize = {
			groups : {
				normalize : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:' +
						'content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}' +
						'abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}' +
						'code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;' +
						'position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,' +
						'select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,' +
						'select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}' +
						'[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,' +
						'button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,' +
						'[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}' +
						'legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}' +
						'progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}' +
						'[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}' +
						'[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}' +
						'::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}' +
						'template{display:none}[hidden]{display:none}'
					]
				}
			}
		};

		var baseline_normalize_extra = {
			groups : {
				normalize_extra : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						`    * , *:before , *:after {
					        -webkit-box-sizing: border-box;
					           -moz-box-sizing: border-box;
					                box-sizing: border-box;
					    }

					    /* Anchor Tags */
					    a, a:hover, a:visited, a:active {
					        color: white;
					        text-decoration: none;
					    }

					    a:before,           a:after,
					    a:hover:before,     a:hover:after,
					    a:visited:before,   a:visited:after,
					    a:active:before,    a:active:after {
					        color: inherit;
					    }

					    img {
					        float: left;
					        width: 100%;
					        margin: 0;
					    }

					    .container {
					        position: relative;     display: block;
					        height: 100%;           padding: 15px 15px;
					        margin-right: auto;     margin-left: auto;  
					    }
					    
					    @media (min-width: 768px)  { container, .container { width: 750px; }}
					    @media (min-width: 992px)  { container, .container { width: 970px; }}
					    @media (min-width: 1200px) { container, .container { width: 1170px;}}

					    .container::after   {
					        content: '';
					        display: table;
					        clear: both;
					    }

					    button {
					        border: none;   margin: 0;
					        color: inherit; text-align: left;
					        background-color: transparent;
					        cursor: pointer; cursor: hand;

					        -webkit-touch-callout: none;
					          -webkit-user-select: none;
					             -moz-user-select: none;
					              -ms-user-select: none;
					                  user-select: none;
					    }`
					]
				}
			}
		};

	// Utility

		var utility__gridSystem = {

			groups : {

				col    : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					classes  : [ { classStart : 'col-'        , appliedProp: [ 'width: '       ] } ] ,

					staticCode : `				
						.col-1    ,  .sm-col-1    ,  .md-col-1    ,  .lg-col-1    ,  .xl-col-1    , 
						.col-2    ,  .sm-col-2    ,  .md-col-2    ,  .lg-col-2    ,  .xl-col-2    , 
						.col-3    ,  .sm-col-3    ,  .md-col-3    ,  .lg-col-3    ,  .xl-col-3    , 
						.col-4    ,  .sm-col-4    ,  .md-col-4    ,  .lg-col-4    ,  .xl-col-4    , 
						.col-5    ,  .sm-col-5    ,  .md-col-5    ,  .lg-col-5    ,  .xl-col-5    , 
						.col-6    ,  .sm-col-6    ,  .md-col-6    ,  .lg-col-6    ,  .xl-col-6    , 
						.col-7    ,  .sm-col-7    ,  .md-col-7    ,  .lg-col-7    ,  .xl-col-7    , 
						.col-8    ,  .sm-col-8    ,  .md-col-8    ,  .lg-col-8    ,  .xl-col-8    , 
						.col-9    ,  .sm-col-9    ,  .md-col-9    ,  .lg-col-9    ,  .xl-col-9    , 
						.col-10   ,  .sm-col-10   ,  .md-col-10   ,  .lg-col-10   ,  .xl-col-10   , 
						.col-11   ,  .sm-col-11   ,  .md-col-11   ,  .lg-col-11   ,  .xl-col-11   , 
						.col-12   ,  .sm-col-12   ,  .md-col-12   ,  .lg-col-12   ,  .xl-col-12   , 
						.col-auto ,  .sm-col-auto ,  .md-col-auto ,  .lg-col-auto ,  .xl-col-auto , 
						.xs-o-col-1    ,  .sm-o-col-1    ,  .md-o-col-1    ,  .lg-o-col-1    ,  .xl-o-col-1    , 
						.xs-o-col-2    ,  .sm-o-col-2    ,  .md-o-col-2    ,  .lg-o-col-2    ,  .xl-o-col-2    , 
						.xs-o-col-3    ,  .sm-o-col-3    ,  .md-o-col-3    ,  .lg-o-col-3    ,  .xl-o-col-3    , 
						.xs-o-col-4    ,  .sm-o-col-4    ,  .md-o-col-4    ,  .lg-o-col-4    ,  .xl-o-col-4    , 
						.xs-o-col-5    ,  .sm-o-col-5    ,  .md-o-col-5    ,  .lg-o-col-5    ,  .xl-o-col-5    , 
						.xs-o-col-6    ,  .sm-o-col-6    ,  .md-o-col-6    ,  .lg-o-col-6    ,  .xl-o-col-6    , 
						.xs-o-col-7    ,  .sm-o-col-7    ,  .md-o-col-7    ,  .lg-o-col-7    ,  .xl-o-col-7    , 
						.xs-o-col-8    ,  .sm-o-col-8    ,  .md-o-col-8    ,  .lg-o-col-8    ,  .xl-o-col-8    , 
						.xs-o-col-9    ,  .sm-o-col-9    ,  .md-o-col-9    ,  .lg-o-col-9    ,  .xl-o-col-9    , 
						.xs-o-col-10   ,  .sm-o-col-10   ,  .md-o-col-10   ,  .lg-o-col-10   ,  .xl-o-col-10   , 
						.xs-o-col-11   ,  .sm-o-col-11   ,  .md-o-col-11   ,  .lg-o-col-11   ,  .xl-o-col-11   , 
						.xs-o-col-12   ,  .sm-o-col-12   ,  .md-o-col-12   ,  .lg-o-col-12   ,  .xl-o-col-12   , 
						.xs-o-col-auto ,  .sm-o-col-auto ,  .md-o-col-auto ,  .lg-o-col-auto ,  .xl-o-col-auto {
							float: left;
							position: relative; 	min-height: 1px;
							padding-right: 15px; 	padding-left: 15px;
						} `
				} ,

				pull   : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					classes  : [ { classStart : 'col-pull-'   , appliedProp: [ 'right: '       ] } ] 
				} ,

				push   : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					classes  : [ { classStart : 'col-push-'   , appliedProp: [ 'left: '        ] } ] 
				},

				offset : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					classes  : [ { classStart : 'col-offset-' , appliedProp: [ 'margin-left: ' ] } ]
				}
			} ,

			values : [
				{ prefix : '1'    , appliedValue :  '8.333333%' } ,
				{ prefix : '2'    , appliedValue : '16.666666%' } ,
				{ prefix : '3'    , appliedValue : '25%'        } ,
				{ prefix : '4'    , appliedValue : '33.333333%' } ,
				{ prefix : '5'    , appliedValue : '41.666666%' } ,
				{ prefix : '6'    , appliedValue : '50%'        } ,
				{ prefix : '7'    , appliedValue : '58.333333%' } ,
				{ prefix : '8'    , appliedValue : '66.666666%' } ,
				{ prefix : '9'    , appliedValue : '75%'        } ,
				{ prefix : '10'   , appliedValue : '83.333333%' } ,
				{ prefix : '11'   , appliedValue : '91.666666%' } ,
				{ prefix : '12'   , appliedValue : '100%'       } ,
				{ prefix : 'auto' , appliedValue : 'auto'       } 
			] 
		};

		var utility__spacing = {

			groups : {

				margin : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					classes  : [
						{ classStart : 'm-'  , appliedProp: [ 'margin: '        ] } ,
						{ classStart : 'ml-' , appliedProp: [ 'margin-left: '   ] } ,
						{ classStart : 'mr-' , appliedProp: [ 'margin-right: '  ] } ,
						{ classStart : 'mb-' , appliedProp: [ 'margin-bottom: ' ] } ,
						{ classStart : 'mt-' , appliedProp: [ 'margin-top: '    ] } ,
						{ classStart : 'mx-' , appliedProp: [ 'margin-left: ' , 'margin-right: ' ] } ,
						{ classStart : 'my-' , appliedProp: [ 'margin-bottom: ' , 'margin-top: ' ] } 
					]
				} ,

				padding : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					classes  : [
						{ classStart : 'p-'  , appliedProp: [ 'padding: '        ] } ,
						{ classStart : 'pl-' , appliedProp: [ 'padding-left: '   ] } ,
						{ classStart : 'pr-' , appliedProp: [ 'padding-right: '  ] } ,
						{ classStart : 'pb-' , appliedProp: [ 'padding-bottom: ' ] } ,
						{ classStart : 'pt-' , appliedProp: [ 'padding-top: '    ] } ,
						{ classStart : 'px-' , appliedProp: [ 'padding-left: ' , 'padding-right: ' ] } ,
						{ classStart : 'py-' , appliedProp: [ 'padding-bottom: ' , 'padding-top: ' ] } 
					]
				}
			} ,

			values_clearsOnly : [
				{ prefix : '0'  , appliedValue :   '0'   } 
			] ,

			values_withOffsets : [
				{ prefix : '0'  , appliedValue :   '0'   } ,
				{ prefix : 'xs' , appliedValue : '7.5px' } ,
				{ prefix : 'sm' , appliedValue : '10px'  } ,
				{ prefix : 'md' , appliedValue : '15px'  } ,
				{ prefix : 'lg' , appliedValue : '30px'  } ,
				{ prefix : 'xl' , appliedValue : '60px'  } 
			] 
		};

		var utility__flex = {

			groups : {

				flex : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						('.flex { '												+
							'display: -webkit-box; 	display: -moz-box; '		+
							'display: -ms-flexbox;	display: -webkit-flex; '	+
							'display: flex; '									+
						'} ')
					]
				} ,

				flex_direction : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'.flex-row { flex-direction: row; } ' 				,
						'.flex-col { flex-direction: column; } ' 			,
						'.flex-row-rev { flex-direction: row-reverse; } ' 	,
						'.flex-col-rev { flex-direction: column-reverse; } '
					]
				} ,

				flex_wrap : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'.flex-wrap { flex-wrap: wrap; } '				,
						'.flex-nowrap { flex-wrap: nowrap; } '			,
						'.flex-wrap-rev { flex-wrap: wrap-reverse; } '
					]
				} ,

				flex_main : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'.flex-main-start { justify-content: flex-start; } '		,
						'.flex-main-end { justify-content: flex-end; } '			,
						'.flex-main-center { justify-content: center; } '			,
						'.flex-main-between { justify-content: space-between; } '	,
						'.flex-main-around { justify-content: space-around; } '		,
						'.flex-main-evenly { justify-content: space-evenly; } '
					]
				} ,

				flex_cross : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'.flex-cross-start { align-items: flex-start; } '	,
						'.flex-cross-end { align-items: flex-end; } '		,
						'.flex-cross-center { align-items: center; } '		,
						'.flex-cross-stretch { align-items: stretch; } '	,
						'.flex-cross-baseline { align-items: baseline; } '
					]
				} ,

				flex_extra : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'.flex-extra-start { align-content: flex-start; } '		,
						'.flex-extra-end { align-content: flex-end; } '			,
						'.flex-extra-center { align-content: center; } '		,
						'.flex-extra-between { align-content: space-between; } ',
						'.flex-extra-around { align-content: space-around; } '	,
						'.flex-extra-stretch { align-content: stretch; } '
					]
				} ,

				flex_equal : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ '.flex-equal > * { flex: 1; } ' ]
				} ,

				flex_center : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ '.flex-center { align-items: center; justify-content: center; }' ]
				} ,

				flex_stretch_center : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'.flex-stretch-center { align-items: stretch; } '	,

						('.flex-stretch-center > * { '						+
							'display: -webkit-box; display: -moz-box; '		+
							'display: -ms-flexbox; display: -webkit-flex; '	+
							'display: flex; '								+
							'align-items: center; '							+
						'} ')
					]
				} ,

				flex_self : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'.flex-self-start { align-self: flex-start; } ' 	,
						'.flex-self-end { align-self: flex-end; } ' 		,
						'.flex-self-center { align-self: center; } ' 		,
						'.flex-self-stretch { align-self: stretch; } ' 		,
						'.flex-self-baseline { align-self: baseline; } '
					]
				}
			} 
		};

		var utility__position = {

			groups : {

				position : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						'.position-static { position: static !important; }' ,
						'.position-relative { position: relative !important; }' ,
						'.position-absolute { position: absolute !important; }' ,
						'.position-fixed { position: fixed !important; }' ,
						'.position-sticky { position: sticky !important; }'
					]
				} 
			} 
		};

		var utility__visibility = {

			groups : {

				visibility : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						'.hidden { display: none !important; }' ,

						('@media (max-width: 575.98px) { '		+
							'.xs-hidden, '						+
							'.sm-visible:not(.xs-visible), '	+
							'.md-visible:not(.xs-visible), '	+
							'.lg-visible:not(.xs-visible), '	+
							'.xl-visible:not(.xs-visible) { '	+
								'display: none !important; '	+
							'} '								+
						'} ') ,

						('@media (min-width: 575.98px) and (max-width: 767.98px) { ' 	+
							'.xs-visible:not(.sm-visible), '							+
							'.sm-hidden, '												+
							'.md-visible:not(.sm-visible), '							+
							'.lg-visible:not(.sm-visible), '							+
							'.xl-visible:not(.sm-visible) { '							+
								'display: none !important; '							+
							'} '														+
						'} ') ,

						('@media (min-width: 767.98px) and (max-width: 991.98px) { '	+
							'.xs-visible:not(.md-visible), '							+
							'.sm-visible:not(.md-visible), '							+
							'.md-hidden, '												+
							'.lg-visible:not(.md-visible), '							+
							'.xl-visible:not(.md-visible) { '							+
								'display: none !important; '							+
							'} '														+
						'} ') ,

						('@media (min-width: 991.98px) and (max-width: 1199.98px) { '	+
							'.xs-visible:not(.lg-visible), '							+
							'.sm-visible:not(.lg-visible), '							+
							'.md-visible:not(.lg-visible), '							+
							'.lg-hidden, '												+
							'.xl-visible:not(.lg-visible) { '							+
								'display: none !important; '							+
							'} '														+
						'} ') ,

						('@media (min-width: 1199.98px) { '								+
							'.xs-visible:not(.xl-visible), '							+
							'.sm-visible:not(.xl-visible), '							+
							'.md-visible:not(.xl-visible), '							+
							'.lg-visible:not(.xl-visible), '							+
							'.xl-hidden { '												+
								'display: none !important; '							+
							'} '														+
						'} ')
					]
				} 
			} 
		};

		var utility__visibility__extra = {

			groups : {

				before_hidden : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ '.before-hidden::before { display: none !important; }' ]
				} ,

				after_hidden : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ '.after-hidden::after { display: none !important; }' ]
				} ,

				visibility_hidden : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ '.visibility-hidden { visibility: hidden !important; }' ]
				} ,

				opacity_0 : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ '.opacity-0 { opacity: 0 !important; }' ]
				} ,

				pointerEvents_none : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ '.pointerEvents-none { pointer-events: none !important; }' ]
				} ,

				userSelect_none : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						('.userSelect-none { '							+
							  '-webkit-user-select: none !important; '	+
								 '-moz-user-select: none !important; '	+
								  '-ms-user-select: none !important; '	+
									  'user-select: none !important; '	+
						'} ')
					]
				} 
			} 
		};

		var utility__float = {

			groups : {

				float : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'.float-right { float: right !important; } ' ,
						'.float-left { float: left !important; } '   ,
						'.float-none { float: none !important; } '
					]
				} ,

				clear : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						'.clear-left { clear: left !important; } '   ,
						'.clear-right { clear: right !important; } ' ,
						'.clear-both { clear: both !important; } '   ,
						'.float-clear { clear: both !important; } '
					]
				} 
			} 
		};

		var utility__typography = {

			groups : {

				font_style : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						'.text-fontStyle-italic { font-style: italic !important; } '	,
						'.text-italic { font-style: italic !important; } '				,
						'.text-fontStyle-oblique { font-style: oblique !important; } '	,
						'.text-oblique { font-style: oblique !important; } '			,
						'.text-fontStyle-normal { font-style: normal !important; } '	,
						'.text-fontStyle-inherit { font-style: inherit !important; } '	,
						'.text-fontStyle-initial { font-style: initial !important; } '
					]
				} ,

				font_weight : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						'.text-fontWeight-bold { font-weight: bold !important; } '		,
						'.text-bold { font-weight: bold !important; } '					,
						'.text-fontWeight-bolder { font-weight: bolder !important; } '	,
						'.text-bolder { font-weight: bolder !important; } '				,
						'.text-fontWeight-lighter { font-weight: lighter !important; } ',
						'.text-lighter { font-weight: lighter !important; } '			,
						'.text-fontWeight-normal { font-weight: normal !important; } '	,
						'.text-fontWeight-inherit { font-weight: inherit !important; } ',
						'.text-fontWeight-initial { font-weight: initial !important; } '
					]
				} ,

				text_align : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						'.text-align-left { text-align: left !important; } '		,
						'.text-left { text-align: left !important; } '				,
						'.text-align-center { text-align: center !important; } '	,
						'.text-center { text-align: center !important; } '			,
						'.text-align-right { text-align: right !important; } '		,
						'.text-right { text-align: right !important; } '			,
						'.text-align-justify { text-align: justify !important; } '	,
						'.text-justify { text-align: justify !important; } '		,
						'.text-align-inherit { text-align: inherit !important; } '	,
						'.text-align-initial { text-align: initial !important; } '
					]
				} ,

				text_transform : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						'.text-transform-lowercase { text-transform: lowercase !important; } '	,
						'.text-lowercase { text-transform: lowercase !important; } '			,
						'.text-transform-uppercase { text-transform: uppercase !important; } '	,
						'.text-uppercase { text-transform: uppercase !important; } '			,
						'.text-transform-capitalize { text-transform: capitalize !important; } ',
						'.text-capitalize { text-transform: capitalize !important; } '			,
						'.text-transform-normal { text-transform: normal !important; } '		,
						'.text-transform-inherit { text-transform: inherit !important; } '		,
						'.text-transform-initial { text-transform: initial !important; } '
					]
				} ,

				text_decoration : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						'.text-decoration-lineThrough { text-decoration: line-through !important; } '				,
						'.text-lineThrough { text-decoration: line-through !important; } '							,
						'.text-decoration-underline { text-decoration: underline !important; } '					,
						'.text-underline { text-decoration: underline !important; } '								,
						'.text-decoration-overline { text-decoration: overline !important; } '						,
						'.text-overline { text-decoration: overline !important; } '									,
						'.text-decoration-underline-overline { text-decoration: underline overline !important; } '	,
						'.text-underline-overline { text-decoration: underline overline !important; } '				,
						'.text-decoration-inherit { text-decoration: inherit !important; } '						,
						'.text-decoration-initial { text-decoration: initial !important; } '
					]
				}
			} 
		};

	// Effects

		var effects__imgHover = {

			groups : {

				flash : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						`        /* Image Hover - Flash */
						        /* --------------------------------------- */

						            .imgHvr-flash {
						                padding: 0 !important;
						                overflow: hidden;
						            }

						            .imgHvr-flash:hover   img { 
						                opacity: 1 ;  
						                -webkit-animation: imgHvr-flash 1.5s;  
						                        animation: imgHvr-flash 1.5s;
						            }
						            @-webkit-keyframes imgHvr-flash { 0%   { opacity: .4 ;} 100% { opacity:  1 ;} }
						                    @keyframes imgHvr-flash { 0%   { opacity: .4 ;} 100% { opacity:  1 ;} }`
					]
				} ,

				shine : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						`        /* Image Hover - Shine */
						        /* --------------------------------------- */

						            .imgHvr-shine { 
						                position: relative; 
						                padding: 0 !important;
						                overflow: hidden;
						            }

						            .imgHvr-shine::before {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: -75%;
						                width: 50%; height: 100%;
						                
						                background: -webkit-linear-gradient(    left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
						                background:         linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);

						                -webkit-transform: skewX(-25deg);
						                    -ms-transform: skewX(-25deg);
						                        transform: skewX(-25deg);
						            }
						            .imgHvr-shine:hover::before {
						                -webkit-animation: imgHvr-shine .75s;
						                        animation: imgHvr-shine .75s;
						            }
						            @-webkit-keyframes imgHvr-shine  { 100% { left: 125%; } }
						                    @keyframes imgHvr-shine  { 100% { left: 125%; } }`
					]
				} ,

				zoomIn : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						`        /* Image Hover - Zoom-in */
						        /* --------------------------------------- */

						            .imgHvr-zoomIn {
						                padding: 0 !important;
						                overflow: hidden;
						            }

						            .imgHvr-zoomIn        img {
						                -webkit-transform: scale(1);
						                    -ms-transform: scale(1);
						                        transform: scale(1);
						                -webkit-transition: transform .5s; 
						                   -moz-transition: transform .5s; 
						                     -o-transition: transform .5s; 
						                        transition: transform .5s; 
						                width: 100%; 
						            }
						            .imgHvr-zoomIn:hover  img {
						                -webkit-transform: scale(1.1);
						                    -ms-transform: scale(1.1);
						                        transform: scale(1.1);
						            }`
					]
				} ,

				zoomOut : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						`        /* Image Hover - Zoom-out */
						        /* --------------------------------------- */

						            .imgHvr-zoomOut {
						                padding: 0 !important;
						                overflow: hidden;
						            }

						            .imgHvr-zoomOut       img {
						                -webkit-transform: scale(1.1);
						                    -ms-transform: scale(1.1);
						                        transform: scale(1.1);
						                -webkit-transition: transform .5s; 
						                   -moz-transition: transform .5s; 
						                     -o-transition: transform .5s; 
						                        transition: transform .5s; 
						                width: 100%; 
						            }

						            .imgHvr-zoomOut:hover img {
						                -webkit-transform: scale(1);
						                    -ms-transform: scale(1);
						                        transform: scale(1);
						            }`
					]
				} ,

				zoomIn_rotateLeft : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						`        /* Image Hover - ZoomIn - rotate Left */
						        /* --------------------------------------- */

						            .imgHvr-zoomIn-rotateLeft {
						                padding: 0 !important;
						                overflow: hidden;
						            }

						            .imgHvr-zoomIn-rotateLeft         img {
						                -webkit-transform: scale(1)     rotate(0deg);
						                    -ms-transform: scale(1)     rotate(0deg);
						                        transform: scale(1)     rotate(0deg);
						                -webkit-transition: transform .5s; 
						                   -moz-transition: transform .5s; 
						                     -o-transition: transform .5s; 
						                        transition: transform .5s; 
						                width: 100%; 
						            }
						            .imgHvr-zoomIn-rotateLeft:hover   img {
						                -webkit-transform: scale(1.1)   rotate(-2.5deg);
						                    -ms-transform: scale(1.1)   rotate(-2.5deg);
						                        transform: scale(1.1)   rotate(-2.5deg);
						            }`
					]
				} ,

				zoomIn_rotateRight : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						`        /* Image Hover - ZoomIn - rotate Right */
						        /* --------------------------------------- */

						            .imgHvr-zoomIn-rotateRight {
						                padding: 0 !important;
						                overflow: hidden;
						            }

						            .imgHvr-zoomIn-rotateRight        img { 
						                -webkit-transform: scale(1)     rotate(0deg);
						                    -ms-transform: scale(1)     rotate(0deg);
						                        transform: scale(1)     rotate(0deg);
						                -webkit-transition: transform .5s; 
						                   -moz-transition: transform .5s; 
						                     -o-transition: transform .5s; 
						                        transition: transform .5s; 
						                width: 100%; 
						            }
						            .imgHvr-zoomIn-rotateRight:hover  img { 
						                -webkit-transform: scale(1.1)   rotate(2.5deg);
						                    -ms-transform: scale(1.1)   rotate(2.5deg);
						                        transform: scale(1.1)   rotate(2.5deg);
						            }`
					]
				} ,

				zoomOut_rotateLeft : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						`        /* Image Hover - ZoomOut - rotate Left */
						        /* --------------------------------------- */

						            .imgHvr-zoomOut-rotateLeft {
						                padding: 0 !important;
						                overflow: hidden;
						            }

						            .imgHvr-zoomOut-rotateLeft        img {
						                -webkit-transform: scale(1.2)   rotate(0deg);
						                    -ms-transform: scale(1.2)   rotate(0deg);
						                        transform: scale(1.2)   rotate(0deg);
						                -webkit-transition: transform .5s; 
						                   -moz-transition: transform .5s; 
						                     -o-transition: transform .5s; 
						                        transition: transform .5s; 
						                width: 100%; 
						            }
						            .imgHvr-zoomOut-rotateLeft:hover  img {
						                -webkit-transform: scale(1.1)   rotate(-2.5deg);
						                    -ms-transform: scale(1.1)   rotate(-2.5deg);
						                        transform: scale(1.1)   rotate(-2.5deg);
						            }`
					]
				} ,

				zoomOut_rotateRight : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [ 
						`        /* Image Hover - ZoomOut - rotate Right */
						        /* --------------------------------------- */

						            .imgHvr-zoomOut-rotateRight {
						                padding: 0 !important;
						                overflow: hidden;
						            }

						            .imgHvr-zoomOut-rotateRight       img { 
						                -webkit-transform: scale(1.2)   rotate(0deg);
						                    -ms-transform: scale(1.2)   rotate(0deg);
						                        transform: scale(1.2)   rotate(0deg);
						                -webkit-transition: transform .5s; 
						                   -moz-transition: transform .5s; 
						                     -o-transition: transform .5s; 
						                        transition: transform .5s; 
						                width: 100%; 
						            }
						            .imgHvr-zoomOut-rotateRight:hover img { 
						                -webkit-transform: scale(1.1)   rotate(2.5deg);
						                    -ms-transform: scale(1.1)   rotate(2.5deg);
						                        transform: scale(1.1)   rotate(2.5deg);
						            }`
					]
				} 
			} 
		};

		var effects_faSpinner = {

			groups : {

				faSpinner : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`    /* Font Awesome Spinner */
						    /* ------------------------------- */

						        /* General */
						        /* ------------------------------- */

						            .faSpinner {
						                position: relative;
						                padding: 0 !important;
						                max-width:  100vw !important;
						                max-height: 100vh !important;
						                overflow: hidden !important;
						            }

						            /* hide all content and not allow click events to take place */
						            .faSpinner * { 
						                visibility: hidden !important;
						                z-index: -1 !important;
						            }

						        /* background overlay */
						        /* ------------------------------- */

						            .faSpinner:after {
						                content: '';
						                position: absolute;
						                top: 0; right: 0; bottom: 0; left: 0;
						                background-color: inherit;
						                z-index: 2;
						            }

						        /* Spinner Icon */
						        /* ------------------------------- */

						            .faSpinner::before {
						                content: "\f021" !important;
						                font-family: FontAwesome !important;

						                position: absolute;
						                left: 50%; top: 50%;
						                -webkit-transform: translate3d(-50%, -50%, 0) rotate(0deg);
						                    -ms-transform: translate3d(-50%, -50%, 0) rotate(0deg);
						                        transform: translate3d(-50%, -50%, 0) rotate(0deg); 
						                z-index: 3;

						                -webkit-animation: faSpinner 1s linear infinite;
						                        animation: faSpinner 1s linear infinite;

						                -webkit-filter: blur(0);
						                        filter: blur(0);

						                font-size: 24px; color: #000000;
						                line-height: .86 !important;
						                /*line-height: calc(100% - 1px);*/

						                -webkit-transform-origin: 50% 50%;
						                        transform-origin: 50% 50%;

						                text-shadow: none     !important;
						                font-weight: normal   !important; 
						                text-decoration: none !important;
						            }

						            @-webkit-keyframes faSpinner {
						                0% {
						                    -webkit-transform: translate3d(-50%, -50%, 0) rotate(0deg);
						                        -ms-transform: translate3d(-50%, -50%, 0) rotate(0deg);
						                            transform: translate3d(-50%, -50%, 0) rotate(0deg);
						                }
						                100% {
						                    -webkit-transform: translate3d(-50%, -50%, 0) rotate(359deg);
						                        -ms-transform: translate3d(-50%, -50%, 0) rotate(359deg);
						                            transform: translate3d(-50%, -50%, 0) rotate(359deg);
						                }
						            }

						            @keyframes faSpinner {
						                0% {
						                    -webkit-transform: translate3d(-50%, -50%, 0) rotate(0deg);
						                        -ms-transform: translate3d(-50%, -50%, 0) rotate(0deg);
						                            transform: translate3d(-50%, -50%, 0) rotate(0deg);
						                }
						                100% {
						                    -webkit-transform: translate3d(-50%, -50%, 0) rotate(359deg);
						                        -ms-transform: translate3d(-50%, -50%, 0) rotate(359deg);
						                            transform: translate3d(-50%, -50%, 0) rotate(359deg);
						                }
						            }


						        /* icon alternatives */
						        /* ------------------------------- */

						            .faSpinner.faSpinner-cog::before {
						                content: "\f013" !important;
						            }

						            .faSpinner.faSpinner-spinner::before {
						                content: "\f110" !important;
						            }

						            .faSpinner.faSpinner-circle::before {
						                content: "\f1ce" !important;
						            }

						        /* color */
						        /* ------------------------------- */

						            .faSpinner.faSpinner-white::before {
						                color: #FFFFFF;
						            }

						        /* Size */
						        /* ------------------------------- */

						            .faSpinner-xs::before   { font-size: 12px; }
						            .faSpinner-sm::before   { font-size: 18px; }
						            .faSpinner-md::before   { font-size: 24px; } /* default value */
						            .faSpinner-lg::before   { font-size: 36px; }
						            .faSpinner-xl::before   { font-size: 48px; }
						            .faSpinner-xxl::before  { font-size: 60px; }

						        /* Speed */
						        /* ------------------------------- */

						            .faSpinner.faSpinner-slow::before { -webkit-animation-duration: 1.5s; animation-duration: 1.5s; } 
						            .faSpinner.faSpinner-fast::before { -webkit-animation-duration:  .5s; animation-duration:  .5s; } 

						        /* For initial loading - placement on body */
						        /* ------------------------------- */

						            body.faSpinner:after {
						                position: fixed;
						                top: 0; left: 0;
						            }

						            body.faSpinner::before {
						                position: fixed;
						                left: 50vw; top: 50vh;
						            }`
					]
				} 
			} 
		};

		var effects__filter = {

			groups : {

				hasFilter_1977 : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - 1977 */
						        /* ------------------------------- */

						            .hasFilter-1977            , 
						            .hasFilter-hvr-1977:hover  {
						                -webkit-filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);
						                        filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_aden : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - aden */
						        /* ------------------------------- */

						            .hasFilter-aden            , 
						            .hasFilter-hvr-aden:hover  {
						                -webkit-filter: sepia(.2) brightness(1.15) saturate(1.4);
						                        filter: sepia(.2) brightness(1.15) saturate(1.4);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-aden::before            , 
						            .hasFilter-hvr-aden:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;

						                background: rgba(125, 105, 24, .1);
						                mix-blend-mode: multiply;
						            }`
					]
				} ,

				hasFilter_amaro : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - amaro */
						        /* ------------------------------- */

						            .hasFilter-amaro            , 
						            .hasFilter-hvr-amaro:hover  {
						                -webkit-filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);
						                        filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-amaro::before            , 
						            .hasFilter-hvr-amaro:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(125, 105, 24, .2);
						                mix-blend-mode: overlay;
						            }`
					]
				} ,

				hasFilter_ashby : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - ashby */
						        /* ------------------------------- */

						            .hasFilter-ashby            , 
						            .hasFilter-hvr-ashby:hover  {
						                -webkit-filter: sepia(.5) contrast(1.2) saturate(1.8);
						                        filter: sepia(.5) contrast(1.2) saturate(1.8);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-ashby::before            , 
						            .hasFilter-hvr-ashby:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(125, 105, 24, .35);
						                mix-blend-mode: lighten;
						            }`
					]
				} ,

				hasFilter_brannan : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - brannan */
						        /* ------------------------------- */

						            .hasFilter-brannan            , 
						            .hasFilter-hvr-brannan:hover  {
						                -webkit-filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);
						                        filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_brooklyn : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - brooklyn */
						        /* ------------------------------- */

						            .hasFilter-brooklyn            , 
						            .hasFilter-hvr-brooklyn:hover  {
						                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);
						                        filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-brooklyn::before            , 
						            .hasFilter-hvr-brooklyn:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(127, 187, 227, .2);
						                mix-blend-mode: overlay;
						            }`
					]
				} ,

				hasFilter_charmes : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - charmes */
						        /* ------------------------------- */

						            .hasFilter-charmes            , 
						            .hasFilter-hvr-charmes:hover  {
						                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);
						                        filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-charmes::before            , 
						            .hasFilter-hvr-charmes:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(125, 105, 24, .25);
						                mix-blend-mode: darken;
						            }`
					]
				} ,

				hasFilter_clarendon : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - clarendon */
						        /* ------------------------------- */

						            .hasFilter-clarendon            , 
						            .hasFilter-hvr-clarendon:hover  {
						                -webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);
						                        filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-clarendon::before            , 
						            .hasFilter-hvr-clarendon:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(127, 187, 227, .4);
						                mix-blend-mode: overlay;
						            }`
					]
				} ,

				hasFilter_crema : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - crema */
						        /* ------------------------------- */

						            .hasFilter-crema            , 
						            .hasFilter-hvr-crema:hover  {
						                -webkit-filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);
						                        filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-crema::before            , 
						            .hasFilter-hvr-crema:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(125, 105, 24, .2);
						                mix-blend-mode: multiply;
						            }`
					]
				} ,

				hasFilter_dogpatch : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - dogpatch */
						        /* ------------------------------- */

						            .hasFilter-dogpatch            , 
						            .hasFilter-hvr-dogpatch:hover  {
						                -webkit-filter: sepia(.35) saturate(1.1) contrast(1.5);
						                        filter: sepia(.35) saturate(1.1) contrast(1.5);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_earlybird : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - earlybird */
						        /* ------------------------------- */

						            .hasFilter-earlybird            , 
						            .hasFilter-hvr-earlybird:hover  {
						                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
						                        filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-earlybird::before            , 
						            .hasFilter-hvr-earlybird:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%);
						                mix-blend-mode: multiply;
						            }`
					]
				} ,

				hasFilter_gingham : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - gingham */
						        /* ------------------------------- */

						            .hasFilter-gingham            , 
						            .hasFilter-hvr-gingham:hover  {
						                -webkit-filter: contrast(1.1) brightness(1.1);
						                        filter: contrast(1.1) brightness(1.1);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-gingham::before            , 
						            .hasFilter-hvr-gingham:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: #e6e6e6;
						                mix-blend-mode: soft-light;
						            }`
					]
				} ,

				hasFilter_ginza : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - ginza */
						        /* ------------------------------- */

						            .hasFilter-ginza            , 
						            .hasFilter-hvr-ginza:hover  {
						                -webkit-filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);
						                        filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-ginza::before            , 
						            .hasFilter-hvr-ginza:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(125, 105, 24, .15);
						                mix-blend-mode: darken;
						            }`
					]
				} ,

				hasFilter_hefe : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - hefe */
						        /* ------------------------------- */

						            .hasFilter-hefe            , 
						            .hasFilter-hvr-hefe:hover  {
						                -webkit-filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);
						                        filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-hefe::before            , 
						            .hasFilter-hvr-hefe:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%);
						                mix-blend-mode: multiply;
						            }`
					]
				} ,

				hasFilter_helena : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - helena */
						        /* ------------------------------- */

						            .hasFilter-helena            , 
						            .hasFilter-hvr-helena:hover  {
						                -webkit-filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);
						                        filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-helena::before            , 
						            .hasFilter-hvr-helena:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(158, 175, 30, .25);
						                mix-blend-mode: overlay;
						            }`
					]
				} ,

				hasFilter_hudson : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - hudson */
						        /* ------------------------------- */

						            .hasFilter-hudson            , 
						            .hasFilter-hvr-hudson:hover  {
						                -webkit-filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);
						                        filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-hudson::before            , 
						            .hasFilter-hvr-hudson:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%);
						                mix-blend-mode: multiply;
						            }`
					]
				} ,

				hasFilter_inkwell : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - inkwell */
						        /* ------------------------------- */

						            .hasFilter-inkwell            , 
						            .hasFilter-hvr-inkwell:hover  {
						                -webkit-filter: brightness(1.25) contrast(.85) grayscale(1);
						                        filter: brightness(1.25) contrast(.85) grayscale(1);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_juno : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - juno */
						        /* ------------------------------- */

						            .hasFilter-juno            , 
						            .hasFilter-hvr-juno:hover  {
						                -webkit-filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);
						                        filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-juno::before            , 
						            .hasFilter-hvr-juno:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(127, 187, 227, .2);
						                mix-blend-mode: overlay;
						            }`
					]
				} ,

				hasFilter_kelvin : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - kelvin */
						        /* ------------------------------- */

						            .hasFilter-kelvin            , 
						            .hasFilter-hvr-kelvin:hover  {
						                -webkit-filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);
						                        filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-kelvin::before            , 
						            .hasFilter-hvr-kelvin:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%);
						                mix-blend-mode: overlay;
						            }`
					]
				} ,

				hasFilter_lark : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - lark */
						        /* ------------------------------- */

						            .hasFilter-lark            , 
						            .hasFilter-hvr-lark:hover  {
						                -webkit-filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);
						                        filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_lofi : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - lofi */
						        /* ------------------------------- */

						            .hasFilter-lofi            , 
						            .hasFilter-hvr-lofi:hover  {
						                -webkit-filter: saturate(1.1) contrast(1.5);
						                        filter: saturate(1.1) contrast(1.5);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_ludwig : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - ludwig */
						        /* ------------------------------- */

						            .hasFilter-ludwig            , 
						            .hasFilter-hvr-ludwig:hover  {
						                -webkit-filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);
						                        filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-ludwig::before            , 
						            .hasFilter-hvr-ludwig:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(125, 105, 24, .1);
						                mix-blend-mode: overlay;
						            }`
					]
				} ,

				hasFilter_maven : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - maven */
						        /* ------------------------------- */

						            .hasFilter-maven            , 
						            .hasFilter-hvr-maven:hover  {
						                -webkit-filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);
						                        filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-maven::before            , 
						            .hasFilter-hvr-maven:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(158, 175, 30, .25);
						                mix-blend-mode: darken;
						            }`
					]
				} ,

				hasFilter_mayfair : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - mayfair */
						        /* ------------------------------- */

						            .hasFilter-mayfair            , 
						            .hasFilter-hvr-mayfair:hover  {
						                -webkit-filter: contrast(1.1) brightness(1.15) saturate(1.1);
						                        filter: contrast(1.1) brightness(1.15) saturate(1.1);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-mayfair::before            , 
						            .hasFilter-hvr-mayfair:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%);
						                mix-blend-mode: multiply;
						            }`
					]
				} ,

				hasFilter_moon : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - moon */
						        /* ------------------------------- */

						            .hasFilter-moon            , 
						            .hasFilter-hvr-moon:hover  {
						                -webkit-filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);
						                        filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_nashville : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - nashville */
						        /* ------------------------------- */

						            .hasFilter-nashville            , 
						            .hasFilter-hvr-nashville:hover  {
						                -webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
						                        filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-nashville::before            , 
						            .hasFilter-hvr-nashville:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%);
						                mix-blend-mode: screen;
						            }`
					]
				} ,

				hasFilter_perpetua : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - perpetua */
						        /* ------------------------------- */

						            .hasFilter-perpetua            , 
						            .hasFilter-hvr-perpetua:hover  {
						                -webkit-filter: contrast(1.1) brightness(1.25) saturate(1.1);
						                        filter: contrast(1.1) brightness(1.25) saturate(1.1);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-perpetua::before            , 
						            .hasFilter-hvr-perpetua:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: linear-gradient(to bottom, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25));
						                mix-blend-mode: multiply;
						            }`
					]
				} ,

				hasFilter_poprocket : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - poprocket */
						        /* ------------------------------- */

						            .hasFilter-poprocket            , 
						            .hasFilter-hvr-poprocket:hover  {
						                -webkit-filter: sepia(.15) brightness(1.2);
						                        filter: sepia(.15) brightness(1.2);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-poprocket::before            , 
						            .hasFilter-hvr-poprocket:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%);
						                mix-blend-mode: screen;
						            }`
					]
				} ,

				hasFilter_reyes : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - reyes */
						        /* ------------------------------- */

						            .hasFilter-reyes            , 
						            .hasFilter-hvr-reyes:hover  {
						                -webkit-filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);
						                        filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_rise : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - rise */
						        /* ------------------------------- */

						            .hasFilter-rise            , 
						            .hasFilter-hvr-rise:hover  {
						                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);
						                        filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-rise::before            , 
						            .hasFilter-hvr-rise:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%);
						                mix-blend-mode: lighten;
						            }`
					]
				} ,

				hasFilter_sierra : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - sierra */
						        /* ------------------------------- */

						            .hasFilter-sierra            , 
						            .hasFilter-hvr-sierra:hover  {
						                -webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
						                        filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-sierra::before            , 
						            .hasFilter-hvr-sierra:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%);
						                mix-blend-mode: screen;
						            }`
					]
				} ,

				hasFilter_skyline : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - skyline */
						        /* ------------------------------- */

						            .hasFilter-skyline            , 
						            .hasFilter-hvr-skyline:hover  {
						                -webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);
						                        filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_slumber : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - slumber */
						        /* ------------------------------- */

						            .hasFilter-slumber            , 
						            .hasFilter-hvr-slumber:hover  {
						                -webkit-filter: sepia(.35) contrast(1.25) saturate(1.25);
						                        filter: sepia(.35) contrast(1.25) saturate(1.25);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-slumber::before            , 
						            .hasFilter-hvr-slumber:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(125, 105, 24, .2);
						                mix-blend-mode: darken;
						            }`
					]
				} ,

				hasFilter_stinson : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - stinson */
						        /* ------------------------------- */

						            .hasFilter-stinson            , 
						            .hasFilter-hvr-stinson:hover  {
						                -webkit-filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);
						                        filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-stinson::before            , 
						            .hasFilter-hvr-stinson:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(125, 105, 24, .45);
						                mix-blend-mode: lighten;
						            }`
					]
				} ,

				hasFilter_sutro : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - sutro */
						        /* ------------------------------- */

						            .hasFilter-sutro            , 
						            .hasFilter-hvr-sutro:hover  {
						                -webkit-filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);
						                        filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-sutro::before            , 
						            .hasFilter-hvr-sutro:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%);
						                mix-blend-mode: darken;
						            }`
					]
				} ,

				hasFilter_toaster : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - toaster */
						        /* ------------------------------- */

						            .hasFilter-toaster            , 
						            .hasFilter-hvr-toaster:hover  {
						                -webkit-filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);
						                        filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-toaster::before            , 
						            .hasFilter-hvr-toaster:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25));
						                mix-blend-mode: screen;
						            }`
					]
				} ,

				hasFilter_valencia : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - valencia */
						        /* ------------------------------- */

						            .hasFilter-valencia            , 
						            .hasFilter-hvr-valencia:hover  {
						                -webkit-filter: sepia(.25) contrast(1.1) brightness(1.1);
						                        filter: sepia(.25) contrast(1.1) brightness(1.1);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-valencia::before            , 
						            .hasFilter-hvr-valencia:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(230, 193, 61, .1);
						                mix-blend-mode: lighten;
						            }`
					]
				} ,

				hasFilter_vesper : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - vesper */
						        /* ------------------------------- */

						            .hasFilter-vesper            , 
						            .hasFilter-hvr-vesper:hover  {
						                -webkit-filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);
						                        filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-vesper::before            , 
						            .hasFilter-hvr-vesper:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(125, 105, 24, .25);
						                mix-blend-mode: overlay;
						            }`
					]
				} ,

				hasFilter_walden : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - walden */
						        /* ------------------------------- */

						            .hasFilter-walden            , 
						            .hasFilter-hvr-walden:hover  {
						                -webkit-filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);
						                        filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-walden::before            , 
						            .hasFilter-hvr-walden:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: rgba(229, 240, 128, .5);
						                mix-blend-mode: darken;
						            }`
					]
				} ,

				hasFilter_willow : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - willow */
						        /* ------------------------------- */

						            .hasFilter-willow            , 
						            .hasFilter-hvr-willow:hover  {
						                -webkit-filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);
						                        filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }`
					]
				} ,

				hasFilter_xpro_ii : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`        /* Filter - xpro-ii */
						        /* ------------------------------- */

						            .hasFilter-xpro-ii            , 
						            .hasFilter-hvr-xpro-ii:hover  {
						                -webkit-filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);
						                        filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);

						                -webkit-transition: filter 0.4s ease-out;
						                   -moz-transition: filter 0.4s ease-out;
						                     -o-transition: filter 0.4s ease-out;
						                        transition: filter 0.4s ease-out; 
						            }

						            .hasFilter-xpro-ii::before            , 
						            .hasFilter-hvr-xpro-ii:hover::before  {
						                content: '';
						                position: absolute; z-index: 2;
						                top: 0; left: 0; right: 0; bottom: 0;
						                
						                background: radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%);
						                mix-blend-mode: multiply;
						            }`
					]
				} 
			} 
		};

		var effects__hover = {

			groups : {

				push_up_alt : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - push-up-alt */
						            /* ---------------------------- */

						                .hvr-push-up-alt {
						                    position: relative;
						                }

						                @-webkit-keyframes hvr-push-up-alt-step1 {
						                    100% {
						                        -webkit-transform: translate3d(0, -8px, 0);
						                            -ms-transform: translate3d(0, -8px, 0);
						                                transform: translate3d(0, -8px, 0);  }
						                }
						                @keyframes hvr-push-up-alt-step1 {
						                    100% {
						                        -webkit-transform: translate3d(0, -8px, 0);
						                            -ms-transform: translate3d(0, -8px, 0);
						                                transform: translate3d(0, -8px, 0);  }
						                }

						                @-webkit-keyframes hvr-push-up-alt-step2 {
						                    0% , 100% {
						                        -webkit-transform: translate3d(0, -8px, 0);
						                            -ms-transform: translate3d(0, -8px, 0);
						                                transform: translate3d(0, -8px, 0);  }
						                    50%  {
						                        -webkit-transform: translate3d(0, -4px, 0);
						                            -ms-transform: translate3d(0, -4px, 0);
						                                transform: translate3d(0, -4px, 0);  }
						                }
						                @keyframes hvr-push-up-alt-step2 {
						                    0% , 100%  {
						                        -webkit-transform: translate3d(0, -8px, 0);
						                            -ms-transform: translate3d(0, -8px, 0);
						                                transform: translate3d(0, -8px, 0);  }
						                    50%  {
						                        -webkit-transform: translate3d(0, -4px, 0);
						                            -ms-transform: translate3d(0, -4px, 0);
						                                transform: translate3d(0, -4px, 0);  }
						                }

						                .hvr-push-up-alt:hover  , 
						                .hvr-push-up-alt:focus  , 
						                .hvr-push-up-alt:active {
						                    -webkit-animation:  hvr-push-up-alt-step1    .3s     0s     ease-out            1       forwards    normal      , 
						                                        hvr-push-up-alt-step2   1.5s    .3s     ease-in-out     infinite    forwards    alternate   ;
						                            animation:  hvr-push-up-alt-step1    .3s     0s     ease-out            1       forwards    normal      , 
						                                        hvr-push-up-alt-step2   1.5s    .3s     ease-in-out     infinite    forwards    alternate   ;
						                }`
					]
				} ,

				push_down_alt : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - push-down-alt */
						            /* ---------------------------- */

						                .hvr-push-down-alt {
						                    position: relative;
						                }

						                @-webkit-keyframes hvr-push-down-alt-step1 {
						                    100% {
						                        -webkit-transform: translate3d(0, 8px, 0);
						                            -ms-transform: translate3d(0, 8px, 0);
						                                transform: translate3d(0, 8px, 0);  }
						                }
						                @keyframes hvr-push-down-alt-step1 {
						                    100% {
						                        -webkit-transform: translate3d(0, 8px, 0);
						                            -ms-transform: translate3d(0, 8px, 0);
						                                transform: translate3d(0, 8px, 0);  }
						                }

						                @-webkit-keyframes hvr-push-down-alt-step2 {
						                    0% , 100%  {
						                        -webkit-transform: translate3d(0, 8px, 0); 
						                            -ms-transform: translate3d(0, 8px, 0);
						                                transform: translate3d(0, 8px, 0);  }
						                    50%  {
						                        -webkit-transform: translate3d(0, 4px, 0);
						                            -ms-transform: translate3d(0, 4px, 0);
						                                transform: translate3d(0, 4px, 0);  }
						                }
						                @keyframes hvr-push-down-alt-step2 {
						                    0% , 100%  {
						                        -webkit-transform: translate3d(0, 8px, 0);
						                            -ms-transform: translate3d(0, 8px, 0);
						                                transform: translate3d(0, 8px, 0);  }
						                    50%  {
						                        -webkit-transform: translate3d(0, 4px, 0);
						                            -ms-transform: translate3d(0, 4px, 0);
						                                transform: translate3d(0, 4px, 0);  }
						                }

						                .hvr-push-down-alt:hover  , 
						                .hvr-push-down-alt:focus  , 
						                .hvr-push-down-alt:active {
						                    -webkit-animation:  hvr-push-down-alt-step1   .3s     0s     ease-out            1       forwards    normal      , 
						                                        hvr-push-down-alt-step2  1.5s    .3s     ease-in-out     infinite    forwards    alternate   ;
						                            animation:  hvr-push-down-alt-step1   .3s     0s     ease-out            1       forwards    normal      , 
						                                        hvr-push-down-alt-step2  1.5s    .3s     ease-in-out     infinite    forwards    alternate   ;
						                }`
					]
				} ,

				buzz : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Buzz */
						            /* ---------------------------- */

						                .hvr-buzz {
						                    position: relative;
						                }

						                @-webkit-keyframes hvr-buzz {
						                    50%  {
						                        -webkit-transform: translateX( 3px) rotate( 2deg);
						                            -ms-transform: translateX( 3px) rotate( 2deg);
						                                transform: translateX( 3px) rotate( 2deg);  }
						                    100% {
						                        -webkit-transform: translateX(-3px) rotate(-2deg);
						                            -ms-transform: translateX(-3px) rotate(-2deg);
						                                transform: translateX(-3px) rotate(-2deg);  }
						                }
						                @keyframes hvr-buzz {
						                    50%  {
						                        -webkit-transform: translateX( 3px) rotate( 2deg);
						                            -ms-transform: translateX( 3px) rotate( 2deg);
						                                transform: translateX( 3px) rotate( 2deg);  }
						                    100% {
						                        -webkit-transform: translateX(-3px) rotate(-2deg);
						                            -ms-transform: translateX(-3px) rotate(-2deg);
						                                transform: translateX(-3px) rotate(-2deg);  }
						                }

						                .hvr-buzz:hover  , 
						                .hvr-buzz:focus  , 
						                .hvr-buzz:active {
						                    -webkit-animation: hvr-buzz  15ms  linear  infinite;
						                            animation: hvr-buzz  15ms  linear  infinite;
						                }`
					]
				} ,

				buzz_out : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Buzz Out */
						            /* ---------------------------- */

						                .hvr-buzz-out {
						                    position: relative;
						                }

						                @-webkit-keyframes hvr-buzz-out {
						                    10%  {    -webkit-transform: translateX( 3px) rotate( 2deg);    -ms-transform: translateX( 3px) rotate( 2deg);      transform: translateX( 3px) rotate( 2deg);  }
						                    20%  {    -webkit-transform: translateX(-3px) rotate(-2deg);    -ms-transform: translateX(-3px) rotate(-2deg);      transform: translateX(-3px) rotate(-2deg);  }
						                    30%  {    -webkit-transform: translateX( 3px) rotate( 2deg);    -ms-transform: translateX( 3px) rotate( 2deg);      transform: translateX( 3px) rotate( 2deg);  }
						                    40%  {    -webkit-transform: translateX(-3px) rotate(-2deg);    -ms-transform: translateX(-3px) rotate(-2deg);      transform: translateX(-3px) rotate(-2deg);  }
						                    50%  {    -webkit-transform: translateX( 2px) rotate( 1deg);    -ms-transform: translateX( 2px) rotate( 1deg);      transform: translateX( 2px) rotate( 1deg);  }
						                    60%  {    -webkit-transform: translateX(-2px) rotate(-1deg);    -ms-transform: translateX(-2px) rotate(-1deg);      transform: translateX(-2px) rotate(-1deg);  }
						                    70%  {    -webkit-transform: translateX( 2px) rotate( 1deg);    -ms-transform: translateX( 2px) rotate( 1deg);      transform: translateX( 2px) rotate( 1deg);  }
						                    80%  {    -webkit-transform: translateX(-2px) rotate(-1deg);    -ms-transform: translateX(-2px) rotate(-1deg);      transform: translateX(-2px) rotate(-1deg);  }
						                    90%  {    -webkit-transform: translateX( 1px) rotate( 0   );    -ms-transform: translateX( 1px) rotate( 0   );      transform: translateX( 1px) rotate( 0   );  }
						                    100% {    -webkit-transform: translateX(-1px) rotate( 0   );    -ms-transform: translateX(-1px) rotate( 0   );      transform: translateX(-1px) rotate( 0   );  }}
						                        @keyframes hvr-buzz-out {
						                    10%  {    -webkit-transform: translateX( 3px) rotate( 2deg);    -ms-transform: translateX( 3px) rotate( 2deg);      transform: translateX( 3px) rotate( 2deg);  }
						                    20%  {    -webkit-transform: translateX(-3px) rotate(-2deg);    -ms-transform: translateX(-3px) rotate(-2deg);      transform: translateX(-3px) rotate(-2deg);  }
						                    30%  {    -webkit-transform: translateX( 3px) rotate( 2deg);    -ms-transform: translateX( 3px) rotate( 2deg);      transform: translateX( 3px) rotate( 2deg);  }
						                    40%  {    -webkit-transform: translateX(-3px) rotate(-2deg);    -ms-transform: translateX(-3px) rotate(-2deg);      transform: translateX(-3px) rotate(-2deg);  }
						                    50%  {    -webkit-transform: translateX( 2px) rotate( 1deg);    -ms-transform: translateX( 2px) rotate( 1deg);      transform: translateX( 2px) rotate( 1deg);  }
						                    60%  {    -webkit-transform: translateX(-2px) rotate(-1deg);    -ms-transform: translateX(-2px) rotate(-1deg);      transform: translateX(-2px) rotate(-1deg);  }
						                    70%  {    -webkit-transform: translateX( 2px) rotate( 1deg);    -ms-transform: translateX( 2px) rotate( 1deg);      transform: translateX( 2px) rotate( 1deg);  }
						                    80%  {    -webkit-transform: translateX(-2px) rotate(-1deg);    -ms-transform: translateX(-2px) rotate(-1deg);      transform: translateX(-2px) rotate(-1deg);  }
						                    90%  {    -webkit-transform: translateX( 1px) rotate( 0   );    -ms-transform: translateX( 1px) rotate( 0   );      transform: translateX( 1px) rotate( 0   );  }
						                    100% {    -webkit-transform: translateX(-1px) rotate( 0   );    -ms-transform: translateX(-1px) rotate( 0   );      transform: translateX(-1px) rotate( 0   );  }}

						                .hvr-buzz-out:hover  , 
						                .hvr-buzz-out:focus  , 
						                .hvr-buzz-out:active {
						                    -webkit-animation: hvr-buzz-out  750ms  linear  1;
						                            animation: hvr-buzz-out  750ms  linear  1;
						                }`
					]
				} ,

				bg_sweep : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - bg-sweep */
						            /* ---------------------------- */

						                .hvr-bg-sweep-left  ,
						                .hvr-bg-sweep-right ,
						                .hvr-bg-sweep-top   ,
						                .hvr-bg-sweep-btm   {
						                    position: relative;
						                    -webkit-transform: perspective(1px);
						                        -ms-transform: perspective(1px);
						                            transform: perspective(1px);
						                }

						                .hvr-bg-sweep-left::after {
						                    content: "";
						                    position: absolute; z-index: -1;
						                    top: 0; bottom: 0; left: 0; right: 0;

						                    background-color: #2098D1;

						                    -webkit-transition: transform 0.3s ease-out;
						                       -moz-transition: transform 0.3s ease-out;
						                         -o-transition: transform 0.3s ease-out;
						                            transition: transform 0.3s ease-out;
						                    -webkit-transform: scaleX(0);
						                        -ms-transform: scaleX(0);
						                            transform: scaleX(0);
						                }

						                .hvr-bg-sweep-left::after {
						                    -webkit-transform-origin: 0 50%;
						                        -ms-transform-origin: 0 50%;
						                            transform-origin: 0 50%;
						                }
						                .hvr-bg-sweep-right::after {
						                    -webkit-transform-origin: 100% 50%;
						                        -ms-transform-origin: 100% 50%;
						                            transform-origin: 100% 50%;
						                }
						                .hvr-bg-sweep-top::after {
						                    -webkit-transform-origin: 50% 0%;
						                        -ms-transform-origin: 50% 0%;
						                            transform-origin: 50% 0%;
						                }
						                .hvr-bg-sweep-btm::after {
						                    -webkit-transform-origin: 50% 100%;
						                        -ms-transform-origin: 50% 100%;
						                            transform-origin: 50% 100%;
						                }

						                .hvr-bg-sweep-left:hover::after  , .hvr-bg-sweep-left:focus::after  , .hvr-bg-sweep-left:active::after  ,
						                .hvr-bg-sweep-right:hover::after , .hvr-bg-sweep-right:focus::after , .hvr-bg-sweep-right:active::after ,
						                .hvr-bg-sweep-top:hover::after   , .hvr-bg-sweep-top:focus::after   , .hvr-bg-sweep-top:active::after   ,
						                .hvr-bg-sweep-btm:hover::after   , .hvr-bg-sweep-btm:focus::after   , .hvr-bg-sweep-btm:active::after   {
						                    -webkit-transform: scaleX(1);
						                        -ms-transform: scaleX(1);
						                            transform: scaleX(1);
						                }`
					]
				} ,

				bg_bounce : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - bg-bounce */
						            /* ---------------------------- */

						                .hvr-bg-bounce-left  ,
						                .hvr-bg-bounce-right ,
						                .hvr-bg-bounce-top   , 
						                .hvr-bg-bounce-btm   {
						                    position: relative;
						                    -webkit-transform: perspective(1px);
						                        -ms-transform: perspective(1px);
						                            transform: perspective(1px);
						                }

						                .hvr-bg-bounce-left::after  ,
						                .hvr-bg-bounce-right::after ,
						                .hvr-bg-bounce-top::after   , 
						                .hvr-bg-bounce-btm::after   {
						                    content: "";
						                    position: absolute; z-index: -1;
						                    top: 0; bottom: 0; left: 0; right: 0;
						                    
						                    background-color: #2098D1;

						                    -webkit-transition: transform 0.3s ease-out;
						                       -moz-transition: transform 0.3s ease-out;
						                         -o-transition: transform 0.3s ease-out;
						                            transition: transform 0.3s ease-out;
						                    -webkit-transform: scaleX(0);
						                        -ms-transform: scaleX(0);
						                            transform: scaleX(0);
						                }

						                .hvr-bg-bounce-left::after {
						                    -webkit-transform-origin:  0%   50% ;
						                        -ms-transform-origin:  0%   50% ;
						                            transform-origin:  0%   50% ;
						                }
						                .hvr-bg-bounce-right::after {
						                    -webkit-transform-origin: 100%  50% ;
						                        -ms-transform-origin: 100%  50% ;
						                            transform-origin: 100%  50% ;
						                }
						                .hvr-bg-bounce-top:after {
						                    -webkit-transform-origin:  50%   0% ;
						                        -ms-transform-origin:  50%   0% ;
						                            transform-origin:  50%   0% ;
						                }
						                .hvr-bg-bounce-btm:after {
						                    -webkit-transform-origin:  50% 100% ;
						                        -ms-transform-origin:  50% 100% ;
						                            transform-origin:  50% 100% ;
						                }

						                .hvr-bg-bounce-left:hover::after  , .hvr-bg-bounce-left:focus::after  , .hvr-bg-bounce-left:active::after  ,
						                .hvr-bg-bounce-right:hover::after , .hvr-bg-bounce-right:focus::after , .hvr-bg-bounce-right:active::after ,
						                .hvr-bg-bounce-top:hover::after   , .hvr-bg-bounce-top:focus::after   , .hvr-bg-bounce-top:active::after   ,
						                .hvr-bg-bounce-btm:hover::after   , .hvr-bg-bounce-btm:focus::after   , .hvr-bg-bounce-btm:active::after   {
						                    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
						                       -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
						                         -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
						                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);

						                    -webkit-transform: scaleX(1);
						                        -ms-transform: scaleX(1);
						                            transform: scaleX(1);
						                }`
					]
				} ,

				bg_radial : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - bg-radial */
						            /* ---------------------------- */

						                .hvr-bg-radial-out ,
						                .hvr-bg-radial-in  {
						                    position: relative;
						                    -webkit-transform: perspective(1px);
						                        -ms-transform: perspective(1px);
						                            transform: perspective(1px);
						                }

						                .hvr-bg-radial-out::after ,
						                hvr-bg-radial-in::after   {
						                    content: "";
						                    position: absolute; z-index: -1;
						                    left: 50%; top: 50%;
						                    width: 100%; padding-bottom: 100%;

						                    border-radius: 100%;
						                    background-color: #2098D1;

						                    -webkit-transition: transform 0.3s ease-out;
						                       -moz-transition: transform 0.3s ease-out;
						                         -o-transition: transform 0.3s ease-out;
						                            transition: transform 0.3s ease-out;
						                }

						                .hvr-bg-radial-out::after       ,
						                .hvr-bg-radial-in:hover::after  , 
						                .hvr-bg-radial-in:focus::after  , 
						                .hvr-bg-radial-in:active::after {
						                    -webkit-transform: translate(-50%, -50%) scale(0);
						                        -ms-transform: translate(-50%, -50%) scale(0);
						                            transform: translate(-50%, -50%) scale(0);
						                }

						                .hvr-bg-radial-in::after         ,
						                .hvr-bg-radial-out:hover::after  , 
						                .hvr-bg-radial-out:focus::after  , 
						                .hvr-bg-radial-out:active::after {
						                    -webkit-transform: translate(-50%, -50%) scale(1.2);
						                        -ms-transform: translate(-50%, -50%) scale(1.2);
						                            transform: translate(-50%, -50%) scale(1.2);
						                }`
					]
				} ,

				bg_rectangle : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - bg-rectangle */
						            /* ---------------------------- */

						                .hvr-bg-rectangle-out ,
						                .hvr-bg-rectangle-in  {
						                    position: relative;
						                    -webkit-transform: perspective(1px);
						                        -ms-transform: perspective(1px);
						                            transform: perspective(1px);
						                }

						                .hvr-bg-rectangle-out:after ,
						                .hvr-bg-rectangle-in:after {
						                    content: "";
						                    position: absolute; z-index: -1;
						                    top: 0; bottom: 0; left: 0; right: 0;

						                    background-color: #2098D1;

						                    -webkit-transition: transform 0.3s ease-out;
						                       -moz-transition: transform 0.3s ease-out;
						                         -o-transition: transform 0.3s ease-out;
						                            transition: transform 0.3s ease-out;
						                }

						                .hvr-bg-rectangle-out:after       ,
						                .hvr-bg-rectangle-in:hover:after  , 
						                .hvr-bg-rectangle-in:focus:after  , 
						                .hvr-bg-rectangle-in:active:after {
						                    -webkit-transform: scale(0);
						                        -ms-transform: scale(0);
						                            transform: scale(0);
						                }
						                .hvr-bg-rectangle-in:after         ,
						                .hvr-bg-rectangle-out:hover:after  , 
						                .hvr-bg-rectangle-out:focus:after  , 
						                .hvr-bg-rectangle-out:active:after {
						                    -webkit-transform: scale(1);
						                        -ms-transform: scale(1);
						                            transform: scale(1);
						                }`
					]
				} ,

				bg_shutter : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - bg-shutter */
						            /* ---------------------------- */

						                .hvr-bg-shutter-out-hor ,
						                .hvr-bg-shutter-out-ver ,
						                .hvr-bg-shutter-in-hor  ,
						                .hvr-bg-shutter-in-ver  {
						                    position: relative;
						                    -webkit-transform: perspective(1px);
						                        -ms-transform: perspective(1px);
						                            transform: perspective(1px);
						                }

						                .hvr-bg-shutter-out-hor::after ,
						                .hvr-bg-shutter-out-ver::after ,
						                .hvr-bg-shutter-in-hor::after  ,
						                .hvr-bg-shutter-in-ver::after  {
						                    content: "";
						                    position: absolute; z-index: -1;
						                    top: 0; bottom: 0; left: 0; right: 0;

						                    background-color: #2098D1;

						                    -webkit-transform-origin: 50%;
						                        -ms-transform-origin: 50%;
						                            transform-origin: 50%;

						                    -webkit-transition: transform 0.3s ease-out;
						                       -moz-transition: transform 0.3s ease-out;
						                         -o-transition: transform 0.3s ease-out;
						                            transition: transform 0.3s ease-out;
						                }

						                .hvr-bg-shutter-out-hor::after      ,
						                .hvr-bg-shutter-in-hor:hover:after  ,
						                .hvr-bg-shutter-in-hor:focus:after  , 
						                .hvr-bg-shutter-in-hor:active:after {
						                    -webkit-transform: scaleX(0);
						                        -ms-transform: scaleX(0);
						                            transform: scaleX(0);
						                }
						                .hvr-bg-shutter-in-hor::after         ,
						                .hvr-bg-shutter-out-hor:hover::after  ,
						                .hvr-bg-shutter-out-hor:focus::after  ,
						                .hvr-bg-shutter-out-hor:active::after {
						                    -webkit-transform: scaleX(1);
						                        -ms-transform: scaleX(1);
						                            transform: scaleX(1);
						                }
						                .hvr-bg-shutter-out-ver:after       ,
						                .hvr-bg-shutter-in-ver:hover:after  ,
						                .hvr-bg-shutter-in-ver:focus:after  ,
						                .hvr-bg-shutter-in-ver:active:after {
						                    -webkit-transform: scaleY(0);
						                        -ms-transform: scaleY(0);
						                            transform: scaleY(0);
						                }
						                .hvr-bg-shutter-in-ver:after         ,
						                .hvr-bg-shutter-out-ver:hover:after  ,
						                .hvr-bg-shutter-out-ver:focus:after  ,
						                .hvr-bg-shutter-out-ver:active:after {
						                    -webkit-transform: scaleY(1);
						                        -ms-transform: scaleY(1);
						                            transform: scaleY(1);
						                }`
					]
				} ,

				border_fade : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - border-fade */
						            /* ---------------------------- */

						                .hvr-border-fade:after   {
						                    content: '';
						                    position: absolute; z-index: -1;
						                    left: 0; right: 0; top: 0; bottom: 0;

						                    -webkit-transition: border-color  0.3s;
						                       -moz-transition: border-color  0.3s;
						                         -o-transition: border-color  0.3s;
						                            transition: border-color  0.3s;

						                    border: 4px solid transparent;  
						                }

						                .hvr-border-fade:hover:after  , 
						                .hvr-border-fade:focus:after  , 
						                .hvr-border-fade:active:after {
						                    border-color: #2098D1;
						                }`
					]
				} ,

				border_reveal : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - border-reveal */
						            /* ---------------------------- */

						                .hvr-border-reveal       ,
						                .hvr-border-reveal-left  ,
						                .hvr-border-reveal-right ,
						                .hvr-border-reveal-top   ,
						                .hvr-border-reveal-btm   {
						                    position: relative;
						                }

						                .hvr-border-reveal::after       ,
						                .hvr-border-reveal-left::after  ,
						                .hvr-border-reveal-right::after ,
						                .hvr-border-reveal-top::after   ,
						                .hvr-border-reveal-btm::after   {
						                    content: '';
						                    position: absolute; z-index: -1;
						                    left: 0; right: 0; top: 0; bottom: 0;
						                    
						                    border: 0 solid #2098D1;

						                    -webkit-transition: border-width 0.1s ease-out;
						                       -moz-transition: border-width 0.1s ease-out;
						                         -o-transition: border-width 0.1s ease-out;
						                            transition: border-width 0.1s ease-out;
						                }

						                .hvr-border-reveal:hover::after  , 
						                .hvr-border-reveal:focus:after  , 
						                .hvr-border-reveal:active:after { 
						                    border-width: 4px; 
						                }
						                .hvr-border-reveal-left:hover:after  , 
						                .hvr-border-reveal-left:focus:after  , 
						                .hvr-border-reveal-left:active:after { 
						                    border-left-width: 4px; 
						                }
						                .hvr-border-reveal-right:hover:after  , 
						                .hvr-border-reveal-right:focus:after  , 
						                .hvr-border-reveal-right:active:after { 
						                    border-right-width: 4px; 
						                }
						                .hvr-border-reveal-top:hover:after  , 
						                .hvr-border-reveal-top:focus:after  , 
						                .hvr-border-reveal-top:active:after { 
						                    border-top-width: 4px; 
						                }
						                .hvr-border-reveal-btm:hover:after  , 
						                .hvr-border-reveal-btm:focus:after  , 
						                .hvr-border-reveal-btm:active:after { 
						                    border-bottom-width: 4px; 
						                }`
					]
				} ,

				border_outline : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - border-outline */
						            /* ---------------------------- */

						                .hvr-border-outline-out ,
						                .hvr-border-outline-in  {
						                    position: relative;
						                    overflow: visible;
						                }

						                .hvr-border-outline-out::after ,
						                .hvr-border-outline-in::after  {
						                    content: '';
						                    position: absolute;

						                    opacity:   0;
						                    border: 4px solid #2098D1;

						                    -webkit-transition: top .3s, bottom .3s, left .3s, right .3s;  
						                       -moz-transition: top .3s, bottom .3s, left .3s, right .3s;  
						                         -o-transition: top .3s, bottom .3s, left .3s, right .3s;  
						                            transition: top .3s, bottom .3s, left .3s, right .3s;
						                }
						                .hvr-border-outline-out::after {
						                    top: 0; right: 0; bottom: 0; left: 0;
						                }
						                .hvr-border-outline-in::after {
						                    top: -16px; right: -16px; bottom: -16px; left: -16px;
						                }

						                .hvr-border-outline-out:hover:after  , 
						                .hvr-border-outline-out:focus:after  , 
						                .hvr-border-outline-out:active:after ,
						                .hvr-border-outline-in:hover:after   , 
						                .hvr-border-outline-in:focus:after   , 
						                .hvr-border-outline-in:active:after  {
						                    top: -8px; right: -8px; bottom: -8px; left: -8px;
						                    opacity:   1;
						                }`
					]
				} ,

				border_underline_overline : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - border-overline / border-underline */
						            /* ---------------------------- */

						                .hvr-border-underline-left   ,
						                .hvr-border-underline-center ,
						                .hvr-border-underline-right  ,
						                .hvr-border-overline-left    ,
						                .hvr-border-overline-center  ,
						                .hvr-border-overline-right   {
						                    position: relative;
						                }

						                .hvr-border-underline-left::after   ,
						                .hvr-border-underline-center::after ,
						                .hvr-border-underline-right::after  ,
						                .hvr-border-overline-left::after    ,
						                .hvr-border-overline-center::after  ,
						                .hvr-border-overline-right::after   {
						                    content: '';
						                    position: absolute; z-index: -1;
						                    height: 4px;

						                    background-color: #2098D1;

						                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
						                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
						                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
						                            transition: right 0.3s ease-out, left 0.3s ease-out;
						                }

						                .hvr-border-underline-left:after   { left: 0;    right: 100%; bottom: 0; }
						                .hvr-border-underline-center:after { left: 50%;  right: 50%;  bottom: 0; }
						                .hvr-border-underline-right:after  { left: 100%; right: 0;    bottom: 0; }
						                .hvr-border-overline-left:after    { left: 0;    right: 100%; top: 0; }
						                .hvr-border-overline-center:after  { left: 50%;  right: 50%;  top: 0; }
						                .hvr-border-overline-right:after   { left: 100%; right: 0;    top: 0; }

						                .hvr-border-underline-left:hover:after  , 
						                .hvr-border-underline-left:focus:after  , 
						                .hvr-border-underline-left:active:after ,
						                .hvr-border-overline-left:hover:after   , 
						                .hvr-border-overline-left:focus:after   , 
						                .hvr-border-overline-left:active:after  { 
						                    right: 0; 
						                }
						                .hvr-border-underline-center:hover:after  , 
						                .hvr-border-underline-center:focus:after  , 
						                .hvr-border-underline-center:active:after ,
						                .hvr-border-overline-center:hover:after   , 
						                .hvr-border-overline-center:focus:after   , 
						                .hvr-border-overline-center:active:after  { 
						                    right: 0; left: 0; 
						                }
						                .hvr-border-underline-right:hover:after  , 
						                .hvr-border-underline-right:focus:after  , 
						                .hvr-border-underline-right:active:after ,
						                .hvr-border-overline-right:hover:after   , 
						                .hvr-border-overline-right:focus:after   , 
						                .hvr-border-overline-right:active:after  { 
						                    left: 0; 
						                }`
					]
				} ,

				shadow_glow : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - shadow-glow */
						            /* ---------------------------- */

						                .hvr-shadow-glow {
						                    -webkit-transition: box-shadow  0.3s;
						                       -moz-transition: box-shadow  0.3s;
						                         -o-transition: box-shadow  0.3s;
						                            transition: box-shadow  0.3s;
						                }

						                .hvr-shadow-glow:hover  , 
						                .hvr-shadow-glow:focus  , 
						                .hvr-shadow-glow:active {
						                    box-shadow: 0 0 8px #2098D1;
						                }`
					]
				} ,

				shadow_push : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - shadow-push */
						            /* ---------------------------- */

						                .hvr-shadow-push-left  ,
						                .hvr-shadow-push-right ,
						                .hvr-shadow-push-top   ,
						                .hvr-shadow-push-btm   {
						                    position: relative;
						                    overflow: visible;
						                    -webkit-transition: transform 0.3s;  
						                       -moz-transition: transform 0.3s;  
						                         -o-transition: transform 0.3s;  
						                            transition: transform 0.3s;
						                }

						                .hvr-shadow-push-left::after  ,
						                .hvr-shadow-push-right::after ,
						                .hvr-shadow-push-top::after   ,
						                .hvr-shadow-push-btm::after   {
						                    position: absolute; z-index: -1;
						                    content: ''; pointer-events: none;
						                    opacity: 0;

						                    background: -webkit-radial-gradient(center,  ellipse,  #2098D1 0% , transparent 80%);
						                    background:         radial-gradient(ellipse at center, #2098D1 0% , transparent 80%);

						                    -webkit-transition: transform 0.3s, opacity 0.3s;
						                       -moz-transition: transform 0.3s, opacity 0.3s;
						                         -o-transition: transform 0.3s, opacity 0.3s;
						                            transition: transform 0.3s, opacity 0.3s;
						                }

						                .hvr-shadow-push-left::after {
						                    top:      5%;  left:   100%;  
						                    height:  90%;  width:  10px;
						                }
						                .hvr-shadow-push-right::after {
						                    top:      5%;  right:  100%;  
						                    height:  90%;  width:  10px;
						                }
						                .hvr-shadow-push-top::after {
						                    bottom: 100%;  left:     5%;  
						                    height: 10px;  width:   90%;
						                }
						                .hvr-shadow-push-btm::after   {
						                    top:    100%;  left:    5%;  
						                    height: 10px;  width:  90%;
						                }

						                .hvr-shadow-push-left:hover:after  , .hvr-shadow-push-left:focus:after  , .hvr-shadow-push-left:active:after  ,
						                .hvr-shadow-push-right:hover:after , .hvr-shadow-push-right:focus:after , .hvr-shadow-push-right:active:after ,
						                .hvr-shadow-push-top:hover:after   , .hvr-shadow-push-top:focus:after   , .hvr-shadow-push-top:active:after   ,
						                .hvr-shadow-push-btm:hover:after   , .hvr-shadow-push-btm:focus:after   , .hvr-shadow-push-btm:active:after   {
						                    opacity: 1;
						                }

						                .hvr-shadow-push-left:hover         , .hvr-shadow-push-left:focus         , .hvr-shadow-push-left:active        ,
						                .hvr-shadow-push-right:hover:after  , .hvr-shadow-push-right:focus:after  , .hvr-shadow-push-right:active:after {
						                    -webkit-transform: translateX(-5px);
						                        -ms-transform: translateX(-5px);
						                            transform: translateX(-5px); 
						                }
						                .hvr-shadow-push-right:hover       , .hvr-shadow-push-right:focus       , .hvr-shadow-push-right:active      ,
						                .hvr-shadow-push-left:hover:after  , .hvr-shadow-push-left:focus:after  , .hvr-shadow-push-left:active:after {
						                    -webkit-transform: translateX(5px);
						                        -ms-transform: translateX(5px);
						                            transform: translateX(5px);
						                }
						                .hvr-shadow-push-btm:hover        , .hvr-shadow-push-btm:focus        , .hvr-shadow-push-btm:active       ,
						                .hvr-shadow-push-top:hover:after  , .hvr-shadow-push-top:focus:after  , .hvr-shadow-push-top:active:after {
						                    -webkit-transform: translateY(-5px); 
						                        -ms-transform: translateY(-5px); 
						                            transform: translateY(-5px); 
						                }
						                .hvr-shadow-push-top:hover        , .hvr-shadow-push-top:focus        , .hvr-shadow-push-top:active       ,
						                .hvr-shadow-push-btm:hover:after  , .hvr-shadow-push-btm:focus:after  , .hvr-shadow-push-btm:active:after {
						                    -webkit-transform: translateY(5px);
						                        -ms-transform: translateY(5px); 
						                            transform: translateY(5px);  
						                }`
					]
				} ,

				bubble_left : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Bubble Left */
						            /* ---------------------------- */

						                .hvr-bubble-left {
						                    overflow: visible;

						                    border-color: #008080;
						                }

						                .hvr-bubble-left:after {
						                    content: '';
						                    position: absolute; z-index: -1;
						                    opacity: 0; pointer-events: none;

						                    border-style: solid;

						                    top: calc(50% - 10px);  left: 0;
						                    border-top:     10px solid transparent;
						                    border-right-width: 10px; border-right-color: inherit;
						                    border-bottom:  10px solid transparent;
						                    border-left:    0    solid transparent;

						                    -webkit-transition: transform 0.3s, opacity 0.3s;
						                       -moz-transition: transform 0.3s, opacity 0.3s;
						                         -o-transition: transform 0.3s, opacity 0.3s;
						                            transition: transform 0.3s, opacity 0.3s;

						                    -webkit-transform: translateX(0);
						                        -ms-transform: translateX(0);
						                            transform: translateX(0);
						                }

						                .hvr-bubble-left:hover:after  ,
						                .hvr-bubble-left:focus:after  ,
						                .hvr-bubble-left:active:after {
						                    -webkit-transform: translateX(-10px);
						                        -ms-transform: translateX(-10px);
						                            transform: translateX(-10px);
						                    opacity: 1;
						                }`
					]
				} ,

				bubble_left : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Bubble Right */
						            /* ---------------------------- */

						                .hvr-bubble-right {
						                    overflow: visible;

						                    border-color: #008080;
						                }

						                .hvr-bubble-right:after {
						                    content: '';
						                    position: absolute; z-index: -1;
						                    opacity: 0; pointer-events: none;

						                    border-style: solid;

						                    top: calc(50% - 10px);  right: 0;
						                    border-top:    10px solid transparent;
						                    border-right:  0 solid transparent;
						                    border-bottom: 10px solid transparent;
						                    border-left-width: 10px; border-left-color: inherit;

						                    -webkit-transition: transform 0.3s, opacity 0.3s;
						                       -moz-transition: transform 0.3s, opacity 0.3s;
						                         -o-transition: transform 0.3s, opacity 0.3s;
						                            transition: transform 0.3s, opacity 0.3s;

						                    -webkit-transform: translateX(0);
						                        -ms-transform: translateX(0);
						                            transform: translateX(0);
						                }

						                .hvr-bubble-right:hover:after  ,
						                .hvr-bubble-right:focus:after  ,
						                .hvr-bubble-right:active:after {
						                    -webkit-transform: translateX(10px);
						                        -ms-transform: translateX(10px);
						                            transform: translateX(10px);
						                    opacity: 1;
						                }`
					]
				} ,

				bubble_right : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Bubble Right */
						            /* ---------------------------- */

						                .hvr-bubble-right {
						                    overflow: visible;

						                    border-color: #008080;
						                }

						                .hvr-bubble-right:after {
						                    content: '';
						                    position: absolute; z-index: -1;
						                    opacity: 0; pointer-events: none;

						                    border-style: solid;

						                    top: calc(50% - 10px);  right: 0;
						                    border-top:    10px solid transparent;
						                    border-right:  0 solid transparent;
						                    border-bottom: 10px solid transparent;
						                    border-left-width: 10px; border-left-color: inherit;

						                    -webkit-transition: transform 0.3s, opacity 0.3s;
						                       -moz-transition: transform 0.3s, opacity 0.3s;
						                         -o-transition: transform 0.3s, opacity 0.3s;
						                            transition: transform 0.3s, opacity 0.3s;

						                    -webkit-transform: translateX(0);
						                        -ms-transform: translateX(0);
						                            transform: translateX(0);
						                }

						                .hvr-bubble-right:hover:after  ,
						                .hvr-bubble-right:focus:after  ,
						                .hvr-bubble-right:active:after {
						                    -webkit-transform: translateX(10px);
						                        -ms-transform: translateX(10px);
						                            transform: translateX(10px);
						                    opacity: 1;
						                }`
					]
				} ,

				bubble_top : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Bubble Top */
						            /* ---------------------------- */

						                .hvr-bubble-top {
						                    overflow: visible;

						                    border-color: #008080;
						                }

						                .hvr-bubble-top:after {
						                    content: '';
						                    position: absolute; z-index: -1;
						                    opacity: 0; pointer-events: none;

						                    border-style: solid;

						                    left: calc(50% - 10px); top: 0;
						                    border-top:     0    solid transparent;
						                    border-right:   10px solid transparent;
						                    border-bottom-width: 10px; border-bottom-color: inherit;
						                    border-left:    10px solid transparent;

						                    -webkit-transition: transform 0.3s, opacity 0.3s;
						                       -moz-transition: transform 0.3s, opacity 0.3s;
						                         -o-transition: transform 0.3s, opacity 0.3s;
						                            transition: transform 0.3s, opacity 0.3s;

						                    -webkit-transform: translateY(0); 
						                        -ms-transform: translateY(0); 
						                            transform: translateY(0); 
						                }

						                .hvr-bubble-top:hover:after  ,
						                .hvr-bubble-top:focus:after  ,
						                .hvr-bubble-top:active:after {
						                    -webkit-transform: translateY(-10px);
						                        -ms-transform: translateY(-10px);
						                            transform: translateY(-10px); 
						                    opacity: 1;
						                }`
					]
				} ,

				bubble_btm : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Bubble Bottom */
						            /* ---------------------------- */

						                .hvr-bubble-btm   {
						                    overflow: visible;

						                    border-color: #008080;
						                }

						                .hvr-bubble-btm:after   {
						                    content: '';
						                    position: absolute; z-index: -1;
						                    opacity: 0; pointer-events: none;

						                    border-style: solid;

						                    left: calc(50% - 10px); bottom: 0;
						                    border-top-width: 10px; border-top-color: inherit;
						                    border-right:   10px solid transparent;
						                    border-bottom:  0    solid transparent;
						                    border-left:    10px solid transparent;

						                    -webkit-transition: transform 0.3s, opacity 0.3s;
						                       -moz-transition: transform 0.3s, opacity 0.3s;
						                         -o-transition: transform 0.3s, opacity 0.3s;
						                            transition: transform 0.3s, opacity 0.3s;

						                    -webkit-transform: translateY(0); 
						                        -ms-transform: translateY(0); 
						                            transform: translateY(0); 
						                }

						                .hvr-bubble-btm:hover:after  ,
						                .hvr-bubble-btm:focus:after  ,
						                .hvr-bubble-btm:active:after {
						                    -webkit-transform: translateY(10px);
						                        -ms-transform: translateY(10px);
						                            transform: translateY(10px);  
						                    opacity: 1;
						                }`
					]
				} ,

				bubble_push_left : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Bubble Push Left */
						            /* ---------------------------- */

						                .hvr-bubble-push-left {
						                    overflow: visible;
						                    -webkit-transition: transform 0.3s;  
						                       -moz-transition: transform 0.3s;  
						                         -o-transition: transform 0.3s;  
						                            transition: transform 0.3s;

						                    border-color: #008080;
						                }

						                .hvr-bubble-push-left:hover  ,
						                .hvr-bubble-push-left:focus  ,
						                .hvr-bubble-push-left:active {
						                    -webkit-transform: translateX(10px);
						                        -ms-transform: translateX(10px);
						                            transform: translateX(10px);  
						                }

						                .hvr-bubble-push-left:after {
						                    content: '';
						                    position: absolute; z-index: -1;

						                    border-style: solid;

						                    top: calc(50% - 10px);  left: 0;
						                    border-top:     10px solid transparent;
						                    border-right-width: 10px; border-right-color: inherit;
						                    border-bottom:  10px solid transparent;
						                    border-left:    0    solid transparent;

						                    -webkit-transition: transform 0.3s;  
						                       -moz-transition: transform 0.3s;  
						                         -o-transition: transform 0.3s;  
						                            transition: transform 0.3s;
						                }

						                .hvr-bubble-push-left:hover:after  , 
						                .hvr-bubble-push-left:focus:after  , 
						                .hvr-bubble-push-left:active:after {
						                    -webkit-transform: translateX(-10px);
						                        -ms-transform: translateX(-10px);
						                            transform: translateX(-10px); 
						                }`
					]
				} ,

				bubble_push_right : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Bubble Push Right */
						            /* ---------------------------- */
						   
						                .hvr-bubble-push-right {
						                    overflow: visible;
						                    -webkit-transition: transform 0.3s;  
						                       -moz-transition: transform 0.3s;  
						                         -o-transition: transform 0.3s;  
						                            transition: transform 0.3s;

						                    border-color: #008080;
						                }

						                .hvr-bubble-push-right:hover  , 
						                .hvr-bubble-push-right:focus  , 
						                .hvr-bubble-push-right:active {
						                    -webkit-transform: translateX(-10px);
						                        -ms-transform: translateX(-10px);
						                            transform: translateX(-10px); 
						                }

						                .hvr-bubble-push-right:after {
						                    content: '';
						                    position: absolute; z-index: -1;

						                    border-style: solid;

						                    top: calc(50% - 10px);  right: 0;
						                    border-top:    10px solid transparent;
						                    border-right:  0 solid transparent;
						                    border-bottom: 10px solid transparent;
						                    border-left-width: 10px; border-left-color: inherit;

						                    -webkit-transition: transform 0.3s;  
						                       -moz-transition: transform 0.3s;  
						                         -o-transition: transform 0.3s;  
						                            transition: transform 0.3s;
						                }

						                .hvr-bubble-push-right:hover:after  ,
						                .hvr-bubble-push-right:focus:after  ,
						                .hvr-bubble-push-right:active:after {
						                    -webkit-transform: translateX(10px);
						                        -ms-transform: translateX(10px);
						                            transform: translateX(10px);  
						                }`
					]
				} ,

				bubble_push_top : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Bubble Push Top */
						            /* ---------------------------- */

						                .hvr-bubble-push-top {
						                    overflow: visible;
						                    -webkit-transition: transform 0.3s;  
						                       -moz-transition: transform 0.3s;  
						                         -o-transition: transform 0.3s;  
						                            transition: transform 0.3s;

						                    border-color: #008080;
						                }

						                .hvr-bubble-push-top:hover  ,
						                .hvr-bubble-push-top:focus  ,
						                .hvr-bubble-push-top:active {
						                    -webkit-transform: translateY(10px);
						                        -ms-transform: translateY(10px);
						                            transform: translateY(10px);  
						                }

						                .hvr-bubble-push-top:after {
						                    content: '';
						                    position: absolute; z-index: -1;

						                    border-style: solid;

						                    left: calc(50% - 10px); top: 0;
						                    border-top:     0    solid transparent;
						                    border-right:   10px solid transparent;
						                    border-bottom-width: 10px; border-bottom-color: inherit;
						                    border-left:    10px solid transparent;

						                    -webkit-transition: transform 0.3s;  
						                       -moz-transition: transform 0.3s;  
						                         -o-transition: transform 0.3s;  
						                            transition: transform 0.3s;
						                }

						                .hvr-bubble-push-top:hover:after  ,
						                .hvr-bubble-push-top:focus:after  ,
						                .hvr-bubble-push-top:active:after {
						                    -webkit-transform: translateY(-10px);
						                        -ms-transform: translateY(-10px);
						                            transform: translateY(-10px);
						                }`
					]
				} ,

				bubble_push_btm : {
					willGenerate_static     : false ,
					willGenerate_responsive : false ,
					target_valuesArrayName  : null  ,

					staticClassStrings : [
						`            /* Hover - Bubble Push Bottom */
						            /* ---------------------------- */
						   
						                .hvr-bubble-push-btm {
						                    overflow: visible;
						                    -webkit-transition: transform 0.3s;  
						                       -moz-transition: transform 0.3s;  
						                         -o-transition: transform 0.3s;  
						                            transition: transform 0.3s;

						                    border-color: #008080;
						                }

						                .hvr-bubble-push-btm:hover  , 
						                .hvr-bubble-push-btm:focus  , 
						                .hvr-bubble-push-btm:active {
						                    -webkit-transform: translateY(-10px);
						                        -ms-transform: translateY(-10px);
						                            transform: translateY(-10px);
						                }

						                .hvr-bubble-push-btm:after {
						                    content: '';
						                    position: absolute; z-index: -1;

						                    border-style: solid;

						                    left: calc(50% - 10px); bottom: 0;
						                    border-top-width: 10px; border-top-color: inherit;
						                    border-right:   10px solid transparent;
						                    border-bottom:  0    solid transparent;
						                    border-left:    10px solid transparent;

						                    -webkit-transition: transform 0.3s;  
						                       -moz-transition: transform 0.3s;  
						                         -o-transition: transform 0.3s;  
						                            transition: transform 0.3s;
						                }

						                .hvr-bubble-push-btm:hover:after  ,
						                .hvr-bubble-push-btm:focus:after  ,
						                .hvr-bubble-push-btm:active:after {
						                    -webkit-transform: translateY(10px);
						                        -ms-transform: translateY(10px);
						                            transform: translateY(10px);  
						                }`
					]
				} ,
			} 
		};

	function resetValues( mainObject ) {
		for (var group in mainObject.groups) {
			if (mainObject.groups.hasOwnProperty(group)) {
				mainObject.groups[group].willGenerate_static     = false ;
				mainObject.groups[group].willGenerate_responsive = false ;
				mainObject.groups[group].target_valuesArrayName  = null  ;
			}
		}
	};

	var listOfFilesToInclude = [];

	// Generates the array of class strings - without responsive utilities

		function generateClasses_baseline( classes__array , values__obj ) {

			var resultArray = [];

			classes__array.map(function(class__obj) {
				values__obj.map(function(value__obj) {

					var propertiesString = '';
					class__obj.appliedProp.map(function(prop){ propertiesString += prop + value__obj.appliedValue + '; ' });

					resultArray.push('.' + class__obj.classStart + value__obj.prefix + ' {' + propertiesString + '} ')
				})
			});

			return resultArray
		};

	// Generates the 'responsive-utilities' concatanated string of classes/css rules

		function generateClasses_responsive ( classStrings_array ) {

			var resultString = '';

			viewportPrefixes.map(function(mediaScenario) {

				var viewport_resultingString = ''; 		// the final string, which will be returned
				var prefix = mediaScenario.prefix; 		// set the current prefix ('' , 'xs-' , 'xs-o-', etc)

				classStrings_array.map(function(classString) { 	// apply the prefix to each className
					if (classString[0] === '.') { classString = classString.substring(1) };
					viewport_resultingString += '.' + prefix + classString + '\n';
				});

				resultString += '\n' + mediaScenario.before + '\n' + viewport_resultingString + mediaScenario.after + '\n'; // apply '@media' wrapper
			});

			return resultString
		};

	// Verify checkboxes and define what code to include

		function setParameters__whatCodeToInclude() {

			listOfFilesToInclude = [];

			Array.from(document.getElementsByClassName('buildTool--checkbox')).map(function(checkbox){

				if (!hasClass(checkbox, 'buildTool--checkbox--generateDirectlyFromFile')) {

					var mainObj = window[checkbox.getAttribute('data-main')];
					var groupObj = mainObj.groups[checkbox.getAttribute('data-group')];

					if (!groupObj) { console.log(checkbox.getAttribute('data-group'))}

					if (checkbox.checked) { 

						var current_configObj = JSON.parse(checkbox.getAttribute('data-ifChecked').replace(/'/g, '"'));
						groupObj.willGenerate_static     = current_configObj.willGenerate_static     ;
						groupObj.willGenerate_responsive = current_configObj.willGenerate_responsive ;
						groupObj.target_valuesArrayName  = current_configObj.target_valuesArrayName  ;

					} else if (checkbox.type == "checkbox") { 
						
						var current_configObj = JSON.parse(checkbox.getAttribute('data-ifUnchecked').replace(/'/g, '"'));
						groupObj.willGenerate_static     = current_configObj.willGenerate_static     ;
						groupObj.willGenerate_responsive = current_configObj.willGenerate_responsive ;
						groupObj.target_valuesArrayName  = current_configObj.target_valuesArrayName  ;

					}

				} else {

					if (checkbox.checked) { 

						listOfFilesToInclude.push(checkbox.getAttribute('data-targetFile'))

					}

				};

				// checkboxes will be cheked-orNot - must aplpy something for each checkbox
				// radios will have only one selected in a group - must apply something only for the radio which is checked

			})

			//console.log(utility__gridSystem , utility__spacing)

		};
		//setParameters__whatCodeToInclude();

	// generate Actual Code

		function generateMahCode(mainObj) {

			var resultString = '';

			for (var item in mainObj.groups) {
				if (mainObj.groups.hasOwnProperty(item)) {

					var group = mainObj.groups[item];

					if (group.willGenerate_static) {

						var staticClassStrings__array = group.staticClassStrings || generateClasses_baseline(group.classes , mainObj[group.target_valuesArrayName]);

						var currentString = '';

						if (group.willGenerate_responsive) {
							currentString = generateClasses_responsive( staticClassStrings__array )
						} else {
							staticClassStrings__array.map(x => currentString += x.replace(/\t/g, '') + ' ')
							
						}

						if (group.staticCode) {
							currentString = group.staticCode.replace(/\t/g, '') + currentString
						}

						resultString += currentString
					}
				}
			};

			return  minify_css(resultString) // resultString 
		};

	// intermediary functions

		function minify_css(codeString) {

			// remove comments
			codeString = codeString.replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g, '');

			// remove line-breask | tab-spaces | make multiple spaces to single space
			codeString = codeString.replace(/\n/g, '').replace(/\t/g, '').replace(/ +/g, ' ');

			codeString = codeString.replace(/\{ /g, '{');
			codeString = codeString.replace(/ \{/g, '{');

			codeString = codeString.replace(/\} /g, '}');
			codeString = codeString.replace(/ \}/g, '}');

			codeString = codeString.replace(/\; /g, ';');
			codeString = codeString.replace(/ \;/g, ';');

			codeString = codeString.replace(/\: /g, ':');
			codeString = codeString.replace(/ \:/g, ':');

			codeString = codeString.replace(/ \,/g, ',');
			codeString = codeString.replace(/\, /g, ',');

			codeString = codeString.replace(/ \!important/g, '\!important');

			return codeString;
		};

		async function getCodeFromFiles(fileUrl) {

			if (window.location.protocol === 'file:') { fileUrl = asterisk.route.info.url_rootHost + fileUrl };

			await fetch(fileUrl)

				.then(function(response) {
					if (!response.ok) { throw Error(response.statusText) };
					return response.text() 
				})

				.then(function(text) {
					resultString = minify_css(text);
				});

			return resultString
		};

		function createFile(data) {

			var a = document.createElement("a");
			var file = new Blob([data], {type: "application/octet-stream"});

			if (window.navigator.msSaveOrOpenBlob) { 

				window.navigator.msSaveOrOpenBlob(file, 'asterisk-build-min.css') // IE10+

			} else { 

				var url = URL.createObjectURL(file);
				a.href = url;
				a.download = 'asterisk-build-min.css';
				document.body.appendChild(a);
				a.click();

				setTimeout(function() {
					document.body.removeChild(a);
					window.URL.revokeObjectURL(url);  
				}, 0); 

			};
		}

	function xxx_run() {

		var resultingCodeString = '';

		setParameters__whatCodeToInclude();

		listOfFilesToInclude.map(fileUrl => resultingCodeString += getCodeFromFiles(fileUrl));
		
		resultingCodeString += generateMahCode(baseline_normalize);
		resultingCodeString += generateMahCode(baseline_normalize_extra);

		resultingCodeString += generateMahCode(utility__gridSystem);
		resultingCodeString += generateMahCode(utility__spacing);
		resultingCodeString += generateMahCode(utility__visibility);
		resultingCodeString += generateMahCode(utility__visibility__extra);
		resultingCodeString += generateMahCode(utility__float);
		resultingCodeString += generateMahCode(utility__position);

		resultingCodeString += generateMahCode(effects__imgHover);
		resultingCodeString += generateMahCode(effects__filter);
		resultingCodeString += generateMahCode(effects__hover);

		createFile(resultingCodeString)
	}

	// function generateClasses_baseline( groups__obj ) { // asterisk__utility__spacing_x.groups.margin

		// 	for (var groupName in groups__obj) {
		// 		if (groups__obj.hasOwnProperty(groupName)) {

		// 			var group = groups__obj[groupName];
		// 			var toGenerate = groups__obj[groupName].generate;

		// 			if (toGenerate) {
		// 				if (toGenerate === 'baseline') {

		// 				} else if (toGenerate === 'responsive') {

		// 				}
		// 			}

		// 		}
		// 	}

		// };

	// Expected Outcome : 

		// col = [
		// 	'col-1 { width: 8.333333%;} '  ,
		// 	'col-2 { width: 16.666666%;} ' ,
		// 	'col-3 { width: 25%;} '        ,
		// 	'col-4 { width: 33.333333%;} ' ,
		// 	'col-5 { width: 41.666666%;} ' ,
		// 	'col-6 { width: 50%;} '        ,
		// 	'col-7 { width: 58.333333%;} ' ,
		// 	'col-8 { width: 66.666666%;} ' ,
		// 	'col-9 { width: 75%;} '        ,
		// 	'col-10 { width: 83.333333%;} ',
		// 	'col-11 { width: 91.666666%;} ',
		// 	'col-12 { width: 100%;} '      ,
		// 	'col-auto { width: auto;} '
		// ] ;





	//generateClasses_responsive(col);

	// Expected Outcome : 

		// .col-1 { width: 8.333333%;} 
		// .col-2 { width: 16.666666%;} 
		// .col-3 { width: 25%;} 
		// .col-4 { width: 33.333333%;} 
		// .col-5 { width: 41.666666%;} 
		// .col-6 { width: 50%;} 
		// .col-7 { width: 58.333333%;} 
		// .col-8 { width: 66.666666%;} 
		// .col-9 { width: 75%;} 
		// .col-10 { width: 83.333333%;} 
		// .col-11 { width: 91.666666%;} 
		// .col-12 { width: 100%;} 
		// .col-auto { width: auto;} 


		//  @media (max-width: 575.98px) { 
		// .xs-o-col-1 { width: 8.333333%;} 
		// .xs-o-col-2 { width: 16.666666%;} 
		// .xs-o-col-3 { width: 25%;} 
		// .xs-o-col-4 { width: 33.333333%;} 
		// .xs-o-col-5 { width: 41.666666%;} 
		// .xs-o-col-6 { width: 50%;} 
		// .xs-o-col-7 { width: 58.333333%;} 
		// .xs-o-col-8 { width: 66.666666%;} 
		// .xs-o-col-9 { width: 75%;} 
		// .xs-o-col-10 { width: 83.333333%;} 
		// .xs-o-col-11 { width: 91.666666%;} 
		// .xs-o-col-12 { width: 100%;} 
		// .xs-o-col-auto { width: auto;} 
		//  } 

		//  @media (min-width: 575.98px) { 
		// .sm-col-1 { width: 8.333333%;} 
		// .sm-col-2 { width: 16.666666%;} 
		// .sm-col-3 { width: 25%;} 
		// .sm-col-4 { width: 33.333333%;} 
		// .sm-col-5 { width: 41.666666%;} 
		// .sm-col-6 { width: 50%;} 
		// .sm-col-7 { width: 58.333333%;} 
		// .sm-col-8 { width: 66.666666%;} 
		// .sm-col-9 { width: 75%;} 
		// .sm-col-10 { width: 83.333333%;} 
		// .sm-col-11 { width: 91.666666%;} 
		// .sm-col-12 { width: 100%;} 
		// .sm-col-auto { width: auto;} 
		//  } 

		//  @media (min-width: 575.98px) and (max-width: 767.98px) { 
		// .sm-o-col-1 { width: 8.333333%;} 
		// .sm-o-col-2 { width: 16.666666%;} 
		// .sm-o-col-3 { width: 25%;} 
		// .sm-o-col-4 { width: 33.333333%;} 
		// .sm-o-col-5 { width: 41.666666%;} 
		// .sm-o-col-6 { width: 50%;} 
		// .sm-o-col-7 { width: 58.333333%;} 
		// .sm-o-col-8 { width: 66.666666%;} 
		// .sm-o-col-9 { width: 75%;} 
		// .sm-o-col-10 { width: 83.333333%;} 
		// .sm-o-col-11 { width: 91.666666%;} 
		// .sm-o-col-12 { width: 100%;} 
		// .sm-o-col-auto { width: auto;} 
		//  } 

		//  @media (min-width: 767.98px) { 
		// .md-col-1 { width: 8.333333%;} 
		// .md-col-2 { width: 16.666666%;} 
		// .md-col-3 { width: 25%;} 
		// .md-col-4 { width: 33.333333%;} 
		// .md-col-5 { width: 41.666666%;} 
		// .md-col-6 { width: 50%;} 
		// .md-col-7 { width: 58.333333%;} 
		// .md-col-8 { width: 66.666666%;} 
		// .md-col-9 { width: 75%;} 
		// .md-col-10 { width: 83.333333%;} 
		// .md-col-11 { width: 91.666666%;} 
		// .md-col-12 { width: 100%;} 
		// .md-col-auto { width: auto;} 
		//  } 

		//  @media (min-width: 767.98px) and (max-width: 991.98px) { 
		// .md-o-col-1 { width: 8.333333%;} 
		// .md-o-col-2 { width: 16.666666%;} 
		// .md-o-col-3 { width: 25%;} 
		// .md-o-col-4 { width: 33.333333%;} 
		// .md-o-col-5 { width: 41.666666%;} 
		// .md-o-col-6 { width: 50%;} 
		// .md-o-col-7 { width: 58.333333%;} 
		// .md-o-col-8 { width: 66.666666%;} 
		// .md-o-col-9 { width: 75%;} 
		// .md-o-col-10 { width: 83.333333%;} 
		// .md-o-col-11 { width: 91.666666%;} 
		// .md-o-col-12 { width: 100%;} 
		// .md-o-col-auto { width: auto;} 
		//  } 

		//  @media (min-width: 991.98px) { 
		// .lg-col-1 { width: 8.333333%;} 
		// .lg-col-2 { width: 16.666666%;} 
		// .lg-col-3 { width: 25%;} 
		// .lg-col-4 { width: 33.333333%;} 
		// .lg-col-5 { width: 41.666666%;} 
		// .lg-col-6 { width: 50%;} 
		// .lg-col-7 { width: 58.333333%;} 
		// .lg-col-8 { width: 66.666666%;} 
		// .lg-col-9 { width: 75%;} 
		// .lg-col-10 { width: 83.333333%;} 
		// .lg-col-11 { width: 91.666666%;} 
		// .lg-col-12 { width: 100%;} 
		// .lg-col-auto { width: auto;} 
		//  } 

		//  @media (min-width: 991.98px) and (max-width: 1199.98px) { 
		// .lg-o-col-1 { width: 8.333333%;} 
		// .lg-o-col-2 { width: 16.666666%;} 
		// .lg-o-col-3 { width: 25%;} 
		// .lg-o-col-4 { width: 33.333333%;} 
		// .lg-o-col-5 { width: 41.666666%;} 
		// .lg-o-col-6 { width: 50%;} 
		// .lg-o-col-7 { width: 58.333333%;} 
		// .lg-o-col-8 { width: 66.666666%;} 
		// .lg-o-col-9 { width: 75%;} 
		// .lg-o-col-10 { width: 83.333333%;} 
		// .lg-o-col-11 { width: 91.666666%;} 
		// .lg-o-col-12 { width: 100%;} 
		// .lg-o-col-auto { width: auto;} 
		//  } 

		//  @media (min-width: 1199.98px) { 
		// .xl-col-1 { width: 8.333333%;} 
		// .xl-col-2 { width: 16.666666%;} 
		// .xl-col-3 { width: 25%;} 
		// .xl-col-4 { width: 33.333333%;} 
		// .xl-col-5 { width: 41.666666%;} 
		// .xl-col-6 { width: 50%;} 
		// .xl-col-7 { width: 58.333333%;} 
		// .xl-col-8 { width: 66.666666%;} 
		// .xl-col-9 { width: 75%;} 
		// .xl-col-10 { width: 83.333333%;} 
		// .xl-col-11 { width: 91.666666%;} 
		// .xl-col-12 { width: 100%;} 
		// .xl-col-auto { width: auto;} 
		//  } 	

	// asterisk__utility__gridSystem_x.classNames.map(function(classNameObj){

		// 	// create category
		// 	asterisk__utility__gridSystem_x.generated[classNameObj.categoryName] = [];
		// 	var currCategory = asterisk__utility__gridSystem_x.generated[classNameObj.categoryName];

		// 	asterisk__utility__gridSystem_x.values.map(function(valueObj) {

		// 		var propertiesString = '';
		// 		classNameObj.appliedProp.map(function(prop){
		// 			propertiesString += prop + valueObj.appliedValue + '; '
		// 		})

		// 		var newString = classNameObj.classStart + valueObj.prefix + ' { ' + propertiesString + '} '; 
		// 		currCategory.push(newString)

		// 	})
		// });

	// asterisk__utility__gridSystem_x.classNames.map(function(classNameObj){

		// 	// create category
		// 	asterisk__utility__gridSystem_x.generated[classNameObj.categoryName] = [];
		// 	var currCategory = asterisk__utility__gridSystem_x.generated[classNameObj.categoryName];

		// 	asterisk__utility__gridSystem_x.values.map(function(valueObj) {

		// 		var newString = classNameObj.classStart + valueObj.prefix + ' { ' + classNameObj.appliedProp + valueObj.appliedValue + ';} '; 
		// 		currCategory.push(newString)

		// 	})
		// });

		// console.log(asterisk__utility__gridSystem_x);




	// var gridSystem__string = '';
	// viewportPrefixes.map(function(prefixScenario){

	// 	var prefix = prefixScenario.prefix;
	// 	var classString = '';
	// 	asterisk__utility__gridSystem_x.generated.col.map(item => classString += '.' + prefix + item + '\n');

	// 	gridSystem__string += '\n' + prefixScenario.before + '\n' + classString + prefixScenario.after + '\n';
	// });

	// console.log(gridSystem__string);

	// var qweqwe = '';
	// for (var item in asterisk__utility__gridSystem.items) {
	// 	if (asterisk__utility__gridSystem.items.hasOwnProperty(item)) {

	// 		viewportPrefixes.map(function(prefix){
	// 			asterisk__utility__gridSystem.values.map(function(valueObj){

	// 			})
	// 		})

	// 		asterisk__utility__gridSystem.items[item];

	// 	}
	// }

	// var asterisk__utility__spacing = {

	// }


		


/*
	var effects__imgHover = {

		groups : {

			flash : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [ 
					('.imgHvr-flash { '				+
						'padding: 0 !important; '	+
						'overflow: hidden; '		+
					'} '							+
					'.imgHvr-flash img { '			+
						'width: 100%; '				+
					'} '							+
					'.imgHvr-flash:hover img { '					+
						'opacity: 1; '								+
						'-webkit-animation: imgHvr-flash 1.5s; '	+
						        'animation: imgHvr-flash 1.5s; '	+
					'} '											+
					'@-webkit-keyframes imgHvr-flash { 0% { opacity: .4;} 100% { opacity: 1;} } '	+
						  '@keyframes imgHvr-flash { 0% { opacity: .4;} 100% { opacity: 1;} } ')
				]
			} ,

			shine : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [ 
					('.imgHvr-shine { '				+
		                'position: relative; '		+
		                'padding: 0 !important; '	+
		                'overflow: hidden; '		+
		            '} '							+
		            '.imgHvr-flash img { '			+
						'width: 100%; '				+
					'} '							+
		            '.imgHvr-shine::before { '				+
						'content: ""; '						+
						'position: absolute; z-index: 2; '	+
						'top: 0; left: -75%; '				+
						'width: 50%; height: 100%; '		+
		                
		                'background: -webkit-linear-gradient(    left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%); '	+
		                'background:         linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%); '	+

		                '-webkit-transform: skewX(-25deg); '	+
		                    '-ms-transform: skewX(-25deg); '	+
		                        'transform: skewX(-25deg); '	+
		            '} '										+
		            '.imgHvr-shine:hover::before { '			+
		                '-webkit-animation: imgHvr-shine .75s; '+
		                        'animation: imgHvr-shine .75s; '+
		            '} '														+
		            '@-webkit-keyframes imgHvr-shine  { 100% { left: 125%; } } '+
		                    '@keyframes imgHvr-shine  { 100% { left: 125%; } } ')
				]
			} ,

			zoomIn : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [ 
					('.imgHvr-zoomIn { '			+
		                'padding: 0 !important; '	+
		                'overflow: hidden; '		+
		            '} '							+
		            '.imgHvr-zoomIn img { '						+
		                '-webkit-transform: scale(1); '			+
		                    '-ms-transform: scale(1); '			+
		                        'transform: scale(1); '			+
		                '-webkit-transition: transform .5s; '	+
		                   '-moz-transition: transform .5s; '	+
		                     '-o-transition: transform .5s; '	+
		                        'transition: transform .5s; '	+
		                'width: 100%; '							+
		            '} '										+
		            '.imgHvr-zoomIn:hover img { '			+
		                '-webkit-transform: scale(1.1); '	+
		                    '-ms-transform: scale(1.1); '	+
		                        'transform: scale(1.1); '	+
		            '} ')
				]
			} ,

			zoomOut : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [ 
					('.imgHvr-zoomOut { '			+
		                'padding: 0 !important; '	+
		                'overflow: hidden; '		+
		            '} '							+
		            '.imgHvr-zoomOut img { '					+
		                '-webkit-transform: scale(1.1); '		+
		                    '-ms-transform: scale(1.1); '		+
		                        'transform: scale(1.1); '		+
		                '-webkit-transition: transform .5s; '	+
		                   '-moz-transition: transform .5s; '	+
		                     '-o-transition: transform .5s; '	+
		                        'transition: transform .5s; '	+
		                'width: 100%; '							+
		            '} '										+
		            '.imgHvr-zoomOut:hover img { '		+
		                '-webkit-transform: scale(1); '	+
		                    '-ms-transform: scale(1); '	+
		                        'transform: scale(1); '	+
		            '} ')
				]
			} ,

			zoomIn_rotateLeft : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [ 
					('.imgHvr-zoomIn-rotateLeft { '	+
		                'padding: 0 !important; '	+
		                'overflow: hidden; '		+
		            '} '							+
		            '.imgHvr-zoomIn-rotateLeft img { '					+
		                '-webkit-transform: scale(1) rotate(0deg); '	+
		                    '-ms-transform: scale(1) rotate(0deg); '	+
		                        'transform: scale(1) rotate(0deg); '	+
		                '-webkit-transition: transform .5s; '			+
		                   '-moz-transition: transform .5s; '			+
		                     '-o-transition: transform .5s; '			+
		                        'transition: transform .5s; '			+
		                'width: 100%; '									+
		            '} '												+
		            '.imgHvr-zoomIn-rotateLeft:hover img { '				+
		                '-webkit-transform: scale(1.1) rotate(-2.5deg); '	+
		                    '-ms-transform: scale(1.1) rotate(-2.5deg); '	+
		                        'transform: scale(1.1) rotate(-2.5deg); '	+
		            '} ')
				]
			} ,

			zoomIn_rotateRight : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [ 
					('.imgHvr-zoomIn-rotateRight { '+
		                'padding: 0 !important; '	+
		                'overflow: hidden; '		+
		            '} '							+
		            '.imgHvr-zoomIn-rotateRight img { '					+
		                '-webkit-transform: scale(1) rotate(0deg); '	+
		                    '-ms-transform: scale(1) rotate(0deg); '	+
		                        'transform: scale(1) rotate(0deg); '	+
		                '-webkit-transition: transform .5s; '			+
		                   '-moz-transition: transform .5s; '			+
		                     '-o-transition: transform .5s; '			+
		                        'transition: transform .5s; '			+
		                'width: 100%; '									+
		            '} '												+
		            '.imgHvr-zoomIn-rotateRight:hover img { '				+
		                '-webkit-transform: scale(1.1) rotate(2.5deg); '	+
		                    '-ms-transform: scale(1.1) rotate(2.5deg); '	+
		                        'transform: scale(1.1) rotate(2.5deg); '	+
		            '} ')
				]
			} ,

			zoomOut_rotateLeft : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [ 
					('.imgHvr-zoomOut-rotateLeft { '+
		                'padding: 0 !important; '	+
		                'overflow: hidden; '		+
		            '} '							+
		            '.imgHvr-zoomOut-rotateLeft img { '					+
		                '-webkit-transform: scale(1.2) rotate(0deg); '	+
		                    '-ms-transform: scale(1.2) rotate(0deg); '	+
		                        'transform: scale(1.2) rotate(0deg); '	+
		                '-webkit-transition: transform .5s; '			+
		                   '-moz-transition: transform .5s; '			+
		                     '-o-transition: transform .5s; '			+
		                        'transition: transform .5s; '			+
		                'width: 100%; '									+
		            '} '												+
		            '.imgHvr-zoomOut-rotateLeft:hover img { '				+
		                '-webkit-transform: scale(1.1) rotate(-2.5deg); '	+
		                    '-ms-transform: scale(1.1) rotate(-2.5deg); '	+
		                        'transform: scale(1.1) rotate(-2.5deg); '	+
		            '} ')
				]
			} ,

			zoomOut_rotateRight : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [ 
					('.imgHvr-zoomOut-rotateRight { '	+
		                'padding: 0 !important; '		+
		                'overflow: hidden; '			+
		            '} '								+
		            '.imgHvr-zoomOut-rotateRight img { '				+
		                '-webkit-transform: scale(1.2) rotate(0deg); '	+
		                    '-ms-transform: scale(1.2) rotate(0deg); '	+
		                        'transform: scale(1.2) rotate(0deg); '	+
		                '-webkit-transition: transform .5s; '			+
		                   '-moz-transition: transform .5s; '			+
		                     '-o-transition: transform .5s; '			+
		                        'transition: transform .5s; '			+
		                'width: 100%; '									+
		            '} '												+
		            '.imgHvr-zoomOut-rotateRight:hover img { '				+
		                '-webkit-transform: scale(1.1) rotate(2.5deg); '	+
		                    '-ms-transform: scale(1.1) rotate(2.5deg); '	+
		                        'transform: scale(1.1) rotate(2.5deg); '	+
		            '} ')
				]
			} 
		} 
	};

	var effects__filter = {

		groups : {

			hasFilter_1977 : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-1977 , '				+
		            '.hasFilter-hvr-1977:hover { '		+
		                '-webkit-filter: sepia(.5) hue-rotate(-30deg) saturate(1.4); '	+
		                        'filter: sepia(.5) hue-rotate(-30deg) saturate(1.4); '	+
		                '-webkit-transition: filter  0.4s  ease-out; '	+
		                   '-moz-transition: filter  0.4s  ease-out; '	+
		                     '-o-transition: filter  0.4s  ease-out; '	+
		                        'transition: filter  0.4s  ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_aden : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-aden , '			+
		            '.hasFilter-hvr-aden:hover { '	+
		                '-webkit-filter: sepia(.2) brightness(1.15) saturate(1.4); '	+
		                        'filter: sepia(.2) brightness(1.15) saturate(1.4); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '										+
		            '.hasFilter-aden::before , '				+
		            '.hasFilter-hvr-aden:hover::before { '		+
		                'content: ""; '							+
		                'position: absolute; z-index: 2; '		+
		                'top: 0; left: 0; right: 0; bottom: 0; '+
		                'background: rgba(125, 105, 24, .1); '	+
		                'mix-blend-mode: multiply; '			+
		            '} '
				]
			} ,

			hasFilter_amaro : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-amaro , '			+
		            '.hasFilter-hvr-amaro:hover { '	+
		                '-webkit-filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3); '	+
		                        'filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '										+
		            '.hasFilter-amaro::before , '				+
		            '.hasFilter-hvr-amaro:hover::before { '		+
		                'content: ""; '							+
		                'position: absolute;  z-index: 2; '		+
		                'top: 0; left: 0; right: 0; bottom: 0; '+
		                'background: rgba(125, 105, 24, .2); '	+
		                'mix-blend-mode: overlay; '				+
		            '} '
				]
			} ,

			hasFilter_ashby : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-ashby , '			+
		            '.hasFilter-hvr-ashby:hover { '	+
		                '-webkit-filter: sepia(.5) contrast(1.2) saturate(1.8); '	+
		                        'filter: sepia(.5) contrast(1.2) saturate(1.8); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '										+
		            '.hasFilter-ashby::before , '				+
		            '.hasFilter-hvr-ashby:hover::before { '		+
		                'content: ""; '							+
		                'position: absolute; z-index: 2; '		+
		                'top: 0; left: 0; right: 0; bottom: 0; '+
		                'background: rgba(125, 105, 24, .35); '	+
		                'mix-blend-mode: lighten; '				+
		            '} '
				]
			} ,

			hasFilter_brannan : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-brannan , '				+
		            '.hasFilter-hvr-brannan:hover { '	+
		                '-webkit-filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg); '	+
		                        'filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_brooklyn : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-brooklyn , '			+
		            '.hasFilter-hvr-brooklyn:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg); '	+
		                        'filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-brooklyn::before , '				+
		            '.hasFilter-hvr-brooklyn:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute;  z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(127, 187, 227, .2); '		+
		                'mix-blend-mode: overlay; '					+
		            '} '
				]
			} ,

			hasFilter_charmes : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-charmes , '				+
		            '.hasFilter-hvr-charmes:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg); '	+
		                        'filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-charmes::before , '					+
		            '.hasFilter-hvr-charmes:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute;  z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(125, 105, 24, .25); '		+
		                'mix-blend-mode: darken; '					+
		            '} '
				]
			} ,

			hasFilter_clarendon : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-clarendon , '			+
		            '.hasFilter-hvr-clarendon:hover { '	+
		                '-webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg); '	+
		                        'filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-clarendon::before , '				+
		            '.hasFilter-hvr-clarendon:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute;  z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(127, 187, 227, .4); '		+
		                'mix-blend-mode: overlay; '					+
		            '} '
				]
			} ,

			hasFilter_crema : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-crema , '			+
		            '.hasFilter-hvr-crema:hover { '	+
		                '-webkit-filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg); '	+
		                        'filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg); '	+
		                '-webkit-transition: filter  0.4s  ease-out; '	+
		                   '-moz-transition: filter  0.4s  ease-out; '	+
		                     '-o-transition: filter  0.4s  ease-out; '	+
		                        'transition: filter  0.4s  ease-out; '	+
		            '} '												+
		            '.hasFilter-crema::before , '						+
		            '.hasFilter-hvr-crema:hover::before { '				+
		                'content: ""; '									+
		                'position: absolute; z-index: 2; '				+
		                'top: 0; left: 0; right: 0; bottom: 0; '		+
		                'background: rgba(125, 105, 24, .2); '			+
		                'mix-blend-mode: multiply; '					+
		            '} '
				]
			} ,

			hasFilter_dogpatch : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-dogpatch , '			+
		            '.hasFilter-hvr-dogpatch:hover { '	+
		                '-webkit-filter: sepia(.35) saturate(1.1) contrast(1.5); '	+
		                        'filter: sepia(.35) saturate(1.1) contrast(1.5); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_earlybird : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-earlybird , '			+
		            '.hasFilter-hvr-earlybird:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg); '	+
		                        'filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '												+
		            '.hasFilter-earlybird::before , '					+
		            '.hasFilter-hvr-earlybird:hover::before { '			+
		                'content: ""; '									+
		                'position: absolute;  z-index: 2; '				+
		                'top: 0; left: 0; right: 0; bottom: 0; '		+
		                'background: radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%); '	+
		                'mix-blend-mode: multiply; '					+
		            '} '
				]
			} ,

			hasFilter_gingham : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-gingham , '				+
		            '.hasFilter-hvr-gingham:hover { '	+
		                '-webkit-filter: contrast(1.1) brightness(1.1); '	+
		                        'filter: contrast(1.1) brightness(1.1); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-gingham::before , '					+
		            '.hasFilter-hvr-gingham:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: #e6e6e6; '						+
		                'mix-blend-mode: soft-light; '				+
		            '} '
				]
			} ,

			hasFilter_ginza : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-ginza , '			+
		            '.hasFilter-hvr-ginza:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg); '	+
		                        'filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-ginza::before , '					+
		            '.hasFilter-hvr-ginza:hover::before { '			+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(125, 105, 24, .15); '		+
		                'mix-blend-mode: darken; '					+
		            '} '
				]
			} ,

			hasFilter_hefe : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-hefe , '			+
		            '.hasFilter-hvr-hefe:hover { '	+
		                '-webkit-filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg); '	+
		                        'filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '										+
		            '.hasFilter-hefe::before , '				+
		            '.hasFilter-hvr-hefe:hover::before { '		+
		                'content: ""; '							+
		                'position: absolute; z-index: 2; '		+
		                'top: 0; left: 0; right: 0; bottom: 0; '+
		                'background: radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%); '	+
		                'mix-blend-mode: multiply; '			+
		            '} '
				]
			} ,

			hasFilter_helena : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-helena , '				+
		            '.hasFilter-hvr-helena:hover { '	+
		                '-webkit-filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35); '	+
		                        'filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-helena::before , '					+
		            '.hasFilter-hvr-helena:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(158, 175, 30, .25); '		+
		                'mix-blend-mode: overlay; '					+
		            '} '
				]
			} ,

			hasFilter_hudson : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-hudson , '				+
		            '.hasFilter-hvr-hudson:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg); '	+
		                        'filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-hudson::before , '					+
		            '.hasFilter-hvr-hudson:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute;  z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%); '	+
		                'mix-blend-mode: multiply; '				+
		            '} '
				]
			} ,

			hasFilter_inkwell : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-inkwell , '				+
		            '.hasFilter-hvr-inkwell:hover { '	+
		                '-webkit-filter: brightness(1.25) contrast(.85) grayscale(1); '	+
		                        'filter: brightness(1.25) contrast(.85) grayscale(1); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_juno : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-juno , '			+
		            '.hasFilter-hvr-juno:hover { '	+
		                '-webkit-filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8); '	+
		                        'filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-juno::before , '					+
		            '.hasFilter-hvr-juno:hover::before { '			+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(127, 187, 227, .2); '		+
		                'mix-blend-mode: overlay; '					+
		            '} '
				]
			} ,

			hasFilter_kelvin : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-kelvin , '				+
		            '.hasFilter-hvr-kelvin:hover { '	+
		                '-webkit-filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg); '	+
		                        'filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '										+
		            '.hasFilter-kelvin::before , '				+
		            '.hasFilter-hvr-kelvin:hover::before { '	+
		                'content: ""; '							+
		                'position: absolute;  z-index: 2; '		+
		                'top: 0; left: 0; right: 0; bottom: 0; '+
		                'background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%); '	+
		                'mix-blend-mode: overlay; '				+
		            '} '
				]
			} ,

			hasFilter_lark : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-lark , '			+
		            '.hasFilter-hvr-lark:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25); '	+
		                        'filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_lofi : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-lofi , '			+
		            '.hasFilter-hvr-lofi:hover { '	+
		                '-webkit-filter: saturate(1.1) contrast(1.5); '	+
		                        'filter: saturate(1.1) contrast(1.5); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_ludwig : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-ludwig , '				+
		            '.hasFilter-hvr-ludwig:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2); '	+
		                        'filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-ludwig::before , '					+
		            '.hasFilter-hvr-ludwig:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(125, 105, 24, .1); '		+
		                'mix-blend-mode: overlay; '					+
		            '} '
				]
			} ,

			hasFilter_maven : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-maven , '			+
		            '.hasFilter-hvr-maven:hover { '	+
		                '-webkit-filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75); '	+
		                        'filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-maven::before , '					+
		            '.hasFilter-hvr-maven:hover::before { '			+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(158, 175, 30, .25); '		+
		                'mix-blend-mode: darken; '					+
		            '} '
				]
			} ,

			hasFilter_mayfair : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-mayfair , '				+
		            '.hasFilter-hvr-mayfair:hover { '	+
		                '-webkit-filter: contrast(1.1) brightness(1.15) saturate(1.1); '	+
		                        'filter: contrast(1.1) brightness(1.15) saturate(1.1); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-mayfair::before , '					+
		            '.hasFilter-hvr-mayfair:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%); '	+
		                'mix-blend-mode: multiply; '				+
		            '} '
				]
			} ,

			hasFilter_moon : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-moon , '			+
		            '.hasFilter-hvr-moon:hover { '	+
		                '-webkit-filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35); '	+
		                        'filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_nashville : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-nashville , '			+
		            '.hasFilter-hvr-nashville:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg); '	+
		                        'filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-nashville::before , '				+
		            '.hasFilter-hvr-nashville:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%); '	+
		                'mix-blend-mode: screen; '					+
		            '} '
				]
			} ,

			hasFilter_perpetua : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-perpetua , '			+
		            '.hasFilter-hvr-perpetua:hover { '	+
		                '-webkit-filter: contrast(1.1) brightness(1.25) saturate(1.1); '	+
		                        'filter: contrast(1.1) brightness(1.25) saturate(1.1); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '										+
		            '.hasFilter-perpetua::before , '			+
		            '.hasFilter-hvr-perpetua:hover::before { '	+
		                'content: ""; '							+
		                'position: absolute; z-index: 2; '		+
		                'top: 0; left: 0; right: 0; bottom: 0; '+
		                'background: linear-gradient(to bottom, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25)); '	+
		                'mix-blend-mode: multiply; '			+
		            '} '
				]
			} ,

			hasFilter_poprocket : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-poprocket , '			+
		            '.hasFilter-hvr-poprocket:hover { '	+
		                '-webkit-filter: sepia(.15) brightness(1.2); '	+
		                        'filter: sepia(.15) brightness(1.2); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-poprocket::before , '				+
		            '.hasFilter-hvr-poprocket:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%); '	+
		                'mix-blend-mode: screen; '					+
		            '} '
				]
			} ,

			hasFilter_reyes : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-reyes , '			+
		            '.hasFilter-hvr-reyes:hover { '	+
		                '-webkit-filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4); '	+
		                        'filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_rise : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-rise , '			+
		            '.hasFilter-hvr-rise:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9); '	+
		                        'filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '										+
		            '.hasFilter-rise::before , '				+
		            '.hasFilter-hvr-rise:hover::before { '		+
		                'content: ""; '							+
		                'position: absolute; z-index: 2; '		+
		                'top: 0; left: 0; right: 0; bottom: 0; '+
		                'background: radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%); '	+
		                'mix-blend-mode: lighten; '				+
		            '} '
				]
			} ,

			hasFilter_sierra : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-sierra , '				+
		            '.hasFilter-hvr-sierra:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg); '	+
		                        'filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '										+
		            '.hasFilter-sierra::before , '				+
		            '.hasFilter-hvr-sierra:hover::before { '	+
		                'content: ""; '							+
		                'position: absolute; z-index: 2; '		+
		                'top: 0; left: 0; right: 0; bottom: 0; '+
		                'background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%); '	+
		                'mix-blend-mode: screen; '				+
		            '} '
				]
			} ,

			hasFilter_skyline : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-skyline , '				+
		            '.hasFilter-hvr-skyline:hover { '	+
		                '-webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2); '	+
		                        'filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_skyline : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-skyline , '				+
		            '.hasFilter-hvr-skyline:hover { '	+
		                '-webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2); '	+
		                        'filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_slumber : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-slumber , '				+
		            '.hasFilter-hvr-slumber:hover { '	+
		                '-webkit-filter: sepia(.35) contrast(1.25) saturate(1.25); '	+
		                        'filter: sepia(.35) contrast(1.25) saturate(1.25); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-slumber::before , '					+
		            '.hasFilter-hvr-slumber:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute;  z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(125, 105, 24, .2); '		+
		                'mix-blend-mode: darken; '					+
		            '} '
				]
			} ,

			hasFilter_stinson : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-stinson , '				+
		            '.hasFilter-hvr-stinson:hover { '	+
		                '-webkit-filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25); '	+
		                        'filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-stinson::before , '					+
		            '.hasFilter-hvr-stinson:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute;  z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(125, 105, 24, .45); '		+
		                'mix-blend-mode: lighten; '					+
		           '} '
				]
			} ,

			hasFilter_sutro : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-sutro , '			+
		            '.hasFilter-hvr-sutro:hover { '	+
		                '-webkit-filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg); '	+
		                        'filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-sutro::before , '					+
		            '.hasFilter-hvr-sutro:hover::before { '			+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%); '	+
		                'mix-blend-mode: darken; '					+
		            '} '
				]
			} ,

			hasFilter_toaster : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-toaster , '				+
		            '.hasFilter-hvr-toaster:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg); '	+
		                        'filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '										+
		            '.hasFilter-toaster::before , '				+
		            '.hasFilter-hvr-toaster:hover::before { '	+
		                'content: ""; '							+
		                'position: absolute; z-index: 2; '		+
		                'top: 0; left: 0; right: 0; bottom: 0; '+
		                'background: radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25)); '	+
		                'mix-blend-mode: screen; '				+
		            '} '
				]
			} ,

			hasFilter_valencia : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-valencia , '			+
		            '.hasFilter-hvr-valencia:hover { '	+
		                '-webkit-filter: sepia(.25) contrast(1.1) brightness(1.1); '	+
		                        'filter: sepia(.25) contrast(1.1) brightness(1.1); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-valencia::before , '				+
		            '.hasFilter-hvr-valencia:hover::before  { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(230, 193, 61, .1); '		+
		                'mix-blend-mode: lighten; '					+
		            '} '
				]
			} ,

			hasFilter_vesper : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-vesper , '				+
		            '.hasFilter-hvr-vesper:hover { '	+
		                '-webkit-filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3); '	+
		                        'filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-vesper::before , '					+
		            '.hasFilter-hvr-vesper:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(125, 105, 24, .25); '		+
		                'mix-blend-mode: overlay; '					+
		            '} '
				]
			} ,

			hasFilter_walden : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-walden , '				+
		            '.hasFilter-hvr-walden:hover { '	+
		                '-webkit-filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4); '	+
		                        'filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-walden::before , '					+
		            '.hasFilter-hvr-walden:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: rgba(229, 240, 128, .5); '		+
		                'mix-blend-mode: darken; '					+
		            '} '
				]
			} ,

			hasFilter_willow : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-willow , '				+
		            '.hasFilter-hvr-willow:hover { '	+
		                '-webkit-filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2); '	+
		                        'filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '
				]
			} ,

			hasFilter_xpro_ii : {
				willGenerate_static     : false ,
				willGenerate_responsive : false ,
				target_valuesArrayName  : null  ,

				staticClassStrings : [
					'.hasFilter-xpro-ii , '				+
		            '.hasFilter-hvr-xpro-ii:hover { '	+
		                '-webkit-filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg); '	+
		                        'filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg); '	+
		                '-webkit-transition: filter 0.4s ease-out; '	+
		                   '-moz-transition: filter 0.4s ease-out; '	+
		                     '-o-transition: filter 0.4s ease-out; '	+
		                        'transition: filter 0.4s ease-out; '	+
		            '} '											+
		            '.hasFilter-xpro-ii::before , '					+
		            '.hasFilter-hvr-xpro-ii:hover::before { '		+
		                'content: ""; '								+
		                'position: absolute; z-index: 2; '			+
		                'top: 0; left: 0; right: 0; bottom: 0; '	+
		                'background: radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%); '	+
		                'mix-blend-mode: multiply; '				+
		            '} '
				]
			} 
		} 
	};
*/