
	(function(){

		var article_workArea = document.getElementsByTagName('ARTICLE')[0];

		article_workArea.addEventListener('change', function(e){

			var target = e.target;

			if (hasClass(target , 'codeGenerator-type__radio')) {

				var examples_1 = Array.from(document.getElementsByClassName('codeGenerator-type__example-1'));
				examples_1.map(item => item.classList.remove('disabled'));

				var examples_2 = Array.from(document.getElementsByClassName('codeGenerator-type__example-2'));
				examples_2.map(item => item.classList.add('hidden'));

				var curr_value = target.value;

				switch(curr_value) {
					case 'static' :
						document.getElementById('codeGenerator-type__example-2-static').classList.remove('hidden');
						document.getElementById('codeGenerator-type__example-1-resp')    .classList.add('disabled');
						document.getElementById('codeGenerator-type__example-1-resp-ext').classList.add('disabled');
						break;

					case 'resp' : 
						document.getElementById('codeGenerator-type__example-2-resp').classList.remove('hidden');
						document.getElementById('codeGenerator-type__example-1-resp-ext').classList.add('disabled');
						break;

					case 'resp-ext' : 
						document.getElementById('codeGenerator-type__example-2-resp-ext').classList.remove('hidden');
						break;
				}

			} else if (hasClass(target , 'spacing-generateMarkup-checkbox')) {

				if (target.checked) {
					target.parentElement.getElementsByClassName('spacing-generateMarkup-nameInput') [0].disabled = false;
					target.parentElement.getElementsByClassName('spacing-generateMarkup-valueInput')[0].disabled = false;
				} else {
					target.parentElement.getElementsByClassName('spacing-generateMarkup-nameInput') [0].disabled = true;
					target.parentElement.getElementsByClassName('spacing-generateMarkup-valueInput')[0].disabled = true;
				};

				generate_sampleCode();
			}
		});

		article_workArea.addEventListener('input', function(e){

			var target = e.target;

			if (hasClass(target , 'spacing-generateMarkup-nameInput') || hasClass(target , 'spacing-generateMarkup-valueInput')) {

				generate_sampleCode()

			}

		});

		article_workArea.addEventListener('click', function(e){

			var target = e.target;

			if (hasClass(target , 'generateCode-btn')) {

				generateCode()

			}

		});

		function generate_sampleCode() {

			var items = Array.from(document.getElementsByClassName('spacing-generateMarkup-item'));
			items = items.filter(item => item.getElementsByClassName('spacing-generateMarkup-checkbox')[0].checked );
			var target = document.getElementById('sampleCode');

			target.innerHTML = '';

			items.map(function(item){

				var prefix = item.getElementsByClassName('spacing-generateMarkup-nameInput')[0].value;
				var value = item.getElementsByClassName('spacing-generateMarkup-valueInput')[0].value;

				var newElem = document.createElement('div');
				newElem.classList = 'spacing-generateMarkup-demoCode-line';
				newElem.innerHTML = '<b>m-' + prefix + '</b> { margin: '+value+' }'

				target.appendChild(newElem)

			})

		};

		generate_sampleCode();

		function generateCode() {

			var items = Array.from(document.getElementsByClassName('codeGenerator-type__radio'));
			var prefix_scenario = items.filter(item => item.checked)[0].value;

			var viewport_prefixes;
			switch (prefix_scenario) {
				case 'static'   : viewport_prefixes = [ '' ];																	break;
				case 'resp'     : viewport_prefixes = [ '' , 'sm-', 'md-', 'lg-', 'xl-' ]; 										break;
				case 'resp-ext' : viewport_prefixes = [ '' , 'xs-o-', 'sm-', 'sm-o-', 'md-', 'md-o-', 'lg-', 'lg-o-', 'xl-' ]; 	break;
			};

			var values = [];
			var valueContainers = Array.from(document.getElementsByClassName('spacing-generateMarkup-item'));
			valueContainers = valueContainers.filter(item => item.getElementsByClassName('spacing-generateMarkup-checkbox')[0].checked );

			valueContainers.map(function(item){
				var prefix = item.getElementsByClassName('spacing-generateMarkup-nameInput')[0].value;
				var value = item.getElementsByClassName('spacing-generateMarkup-valueInput')[0].value;

				values.push( { prefix , value } );
			});
			//console.log(values);

			var mar = true;
			var pad = true;
			var bor = true;

			var marObjArray = [ 
				{ prefix : 'm-'  , attr : 'margin'        } ,
				{ prefix : 'mr-' , attr : 'margin-right'  } ,
				{ prefix : 'ml-' , attr : 'margin-left'   } ,
				{ prefix : 'mt-' , attr : 'margin-top'    } ,
				{ prefix : 'mb-' , attr : 'margin-bottom' } ,
				{ prefix : 'mx-' } ,
				{ prefix : 'my-' } 
			];
			var padObjArray = [ 
				{ prefix : 'p-'  , attr : 'padding'        } ,
				{ prefix : 'pr-' , attr : 'padding-right'  } ,
				{ prefix : 'pl-' , attr : 'padding-left'   } ,
				{ prefix : 'pt-' , attr : 'padding-top'    } ,
				{ prefix : 'pb-' , attr : 'padding-bottom' } ,
				{ prefix : 'px-' } ,
				{ prefix : 'py-' } 
			];
			var pad_strings = [ 'm-', 'ml-', 'mr-', 'mt-', 'mb-', 'my-', 'mx-' ];
			var bor_strings = [ 'b-', 'bl-', 'br-', 'bt-', 'bb-', 'by-', 'bx-' ];

			var finalCodeStrings = [];

			if (mar) {
				viewport_prefixes.map(function(viewPort_prefix) { 
					values.map(function(valObj){
						marObjArray.map(function(marObj) {

							var prop = '';
							if (marObj.prefix == 'mx-') {
								prop = ' { margin-left: '+valObj.value+ '; margin-right: ' +valObj.value+'; }'
							} else if (marObj.prefix == 'my-') {
								prop = ' { margin-top: ' +valObj.value+ '; margin-bottom: '+valObj.value+'; }'
							} else {
								prop = ' { '+marObj.attr+': ' +valObj.value+ '; }'
							};

							var newString = '.'+viewPort_prefix+marObj.prefix+valObj.prefix+ prop;
							finalCodeStrings.push(newString)
						})
					})
				})
			};

			if (pad) {
				viewport_prefixes.map(function(viewPort_prefix) { 
					values.map(function(valObj){
						padObjArray.map(function(padObj) {
							
							var prop = '';
							if (padObj.prefix == 'px-') {
								prop = ' { padding-left: '+valObj.value+ '; padding-right: ' +valObj.value+'; }'
							} else if (padObj.prefix == 'py-') {
								prop = ' { padding-top: ' +valObj.value+ '; padding-bottom: '+valObj.value+'; }'
							} else {
								prop = ' { '+padObj.attr+': ' +valObj.value+ '; }'
							};

							var newString = '.'+viewPort_prefix+padObj.prefix+valObj.prefix+ prop;
							finalCodeStrings.push(newString)
						})
					})
				})
			};

			/*if (bor) {
				viewport_prefixes.map(function(viewPort_prefix) { 
					pad_strings.map(function(pad_string) {
						var newString = '.' + viewPort_prefix + pad_string + valObj.prefix + ' { padding: 0; }';
						finalCodeStrings.push(newString)
					})
				})
			};*/

			console.log(finalCodeStrings)

		};

		function testqqq() {
			console.log(document.activeElement);
			setTimeout(testqqq, 1000)
		};

		//testqqq();

	})();

		// var viewports 			= [ 'sm' , 'md' , 'lg' , 'xl' ];
		// var viewports_extended 	= [ 'xs-o' , 'sm' , 'sm-o' , 'md' , 'md-o' , 'lg' , 'lg-o' , 'xl' ];

		// var options = [
		// 	{ name : 'xs-o' , type : 'ext'  } ,
		// 	{ name : 'sm'   , type : 'base' } ,
		// 	{ name : 'sm-o' , type : 'ext'  } ,
		// 	{ name : 'md'   , type : 'base' } ,
		// 	{ name : 'md-o' , type : 'ext'  } ,
		// 	{ name : 'lg'   , type : 'base' } ,
		// 	{ name : 'lg-o' , type : 'ext'  } ,
		// 	{ name : 'xl'   , type : 'base' }
		// ];



		// var values = [
		// 	{ name : '0'  , val :   '0'   } ,
		// 	{ name : 'xs' , val : '7.5px' } ,
		// 	{ name : 'sm' , val :  '10px' } ,
		// 	{ name : 'md' , val :  '15px' } ,
		// 	{ name : 'lg' , val :  '30px' } ,
		// 	{ name : 'xl' , val :  '60px' }
		// ];

		//var targetElem = document.getElementById('spacing-generateMarkup-container');

		// values.map(function(item){
		// 	var newElem = document.createElement('div');
		// 	newElem.classList = 'spacing-generateMarkup-item';
		// 	newElem.innerHTML = 
		// 		'<input class="spacing-generateMarkup-checkbox"   type="checkbox" checked="checked" /> ' +
		// 		'<input class="spacing-generateMarkup-nameInput"  type="text" value="'+item.name+ '"> '  +
		// 		'<input class="spacing-generateMarkup-valueInput" type="text" value="'+item.val+  '"> '  ;
		// 	targetElem.appendChild(newElem);
		// });