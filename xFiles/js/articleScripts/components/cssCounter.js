
	(function(){

		function generateCode() {

			var codeGenerator = document.getElementById('cssCounter-codeGenerator');

			var countTo = document.getElementById('cssCounter-codeGenerator-counterCountTo__input').value;

			var radios = Array.from(codeGenerator.getElementsByClassName('cssCounter-codeGenerator-counterType__radio'));
			var type = radios.find(x => x.checked).getAttribute('data-value');

			console.log(countTo , type);

			var codeContainer_html = document.getElementById('cssCounter-generatedCode-html');
			var codeContainer_css  = document.getElementById('cssCounter-generatedCode-css');

			var itemString = '            &lt;div class="cssCounter-item">&lt;/div>' + '\n';
			var itemsHTMLString = '';
			for (var i=0; i<countTo; i++) { itemsHTMLString += itemString };

			codeContainer_html.innerHTML =
				'    &lt;div class="cssCounter cssCounter-'+type+'-'+countTo+'"> ' 	+ '\n' +
				'        &lt;div class="cssCounter-container"> ' 					+ '\n' +
						itemsHTMLString 											+
				'        &lt;/div> ' 												+ '\n' +
				'    &lt;/div> ' 													+ '\n' ;

			var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (6 || -1) + '})?');
			var translateValue = 100 - (100 / countTo).toString().match(re)[0];
			console.log(translateValue);

			var cssString;
			if (type === 'slide') {
				cssString =     
					'    .cssCounter-run.cssCounter-slide-'+countTo+' .cssCounter-container { '											+ '\n' +
					'        -webkit-animation: cssCounter-slide-'+countTo+' 2s forwards; '												+ '\n' +
					'                animation: cssCounter-slide-'+countTo+' 2s forwards; '												+ '\n' +
					'    } '																											+ '\n' +
					'    @-webkit-keyframes cssCounter-slide-'+countTo+' { 100% { transform: translateY(-'+translateValue+'%); } } '	+ '\n' +
					'            @keyframes cssCounter-slide-'+countTo+' { 100% { transform: translateY(-'+translateValue+'%); } } '	+ '\n' ;
			} else if (type === 'steps') {
				cssString =  
					'    .cssCounter-run.cssCounter-steps-'+countTo+' .cssCounter-container { '											+ '\n' +
					'        -webkit-animation: cssCounter-steps-'+countTo+' steps('+(countTo-1)+') 2s forwards; '						+ '\n' +
					'                animation: cssCounter-steps-'+countTo+' steps('+(countTo-1)+') 2s forwards; '						+ '\n' +
					'    } '																											+ '\n' +
					'    @-webkit-keyframes cssCounter-steps-'+countTo+' { 100% { transform: translateY(-'+translateValue+'%); } } '	+ '\n' +
					'            @keyframes cssCounter-steps-'+countTo+' { 100% { transform: translateY(-'+translateValue+'%); } } '	+ '\n' ;
			};

			codeContainer_css.innerHTML = cssString;
		};

		document.getElementById('cssCounter-codeGenerator-generateCode__btn').addEventListener('click', generateCode)

	})();