
	(function(){

		// intermediary functions
		// --------------------------------

			asterisk.route.currentPage.functions.animateBtnIcon = function(targetBtn) {
				targetBtn.classList.add('active');
				setTimeout(function(){ targetBtn.classList.remove('active') }, 1000)
			};

			asterisk.route.currentPage.functions.minify_css = function(codeString) {
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

			asterisk.route.currentPage.functions.deselectAll = function() {
				var elem = document.activeElement;
				
				if (elem && /INPUT|TEXTAREA/i.test(elem.tagName)) {
					if ('selectionStart' in elem) { elem.selectionEnd = elem.selectionStart };
					elem.blur();
				};

				if      (window.getSelection) { window.getSelection().removeAllRanges() } 
				else if (document.selection)  { document.selection.empty() }; // IE <=8
			};

		// events
		// --------------------------------

			// minify
			// --------------------------------

				asterisk.route.currentPage.eventHandlers.byAndu_minifier__minifyBtn_functionality = function(e) {

					var target = e.target;

					asterisk.route.currentPage.functions.animateBtnIcon(target);

					var codeInput  = document.getElementById('minifier-code-input');
					var codeOutput = document.getElementById('minifier-code-output');

					codeOutput.parentElement.classList.add('faSpinner' , 'faSpinner-fast');

					codeOutput.value = asterisk.route.currentPage.functions.minify_css(codeInput.value);

					setTimeout(function(){
						codeOutput.parentElement.classList.remove('faSpinner' , 'faSpinner-fast');
					}, 33);
				};

				asterisk.route.currentPage.addEvent(
					document.getElementById('minifyBtn-css') , 
					'click' , 
					asterisk.route.currentPage.eventHandlers.byAndu_minifier__minifyBtn_functionality
				);

			// copy
			// --------------------------------

				asterisk.route.currentPage.eventHandlers.byAndu_minifier__copyBtn_functionality = function(e) {

					var target = e.target;

					if (!hasClass(target, 'active')) {
						asterisk.route.currentPage.functions.animateBtnIcon(target);
						document.getElementById('minifier-code-output').select();
						document.execCommand("copy");
						asterisk.route.currentPage.functions.deselectAll();
					}
				};

				asterisk.route.currentPage.addEvent(
					document.getElementById('finalCode-css-copyBtn') , 
					'click' , 
					asterisk.route.currentPage.eventHandlers.byAndu_minifier__copyBtn_functionality
				);

			// save
			// --------------------------------

				asterisk.route.currentPage.eventHandlers.byAndu_minifier__saveFileBtn_functionality = function() {

					var data = document.getElementById('minifier-code-output').value;

					var a = document.createElement("a");
					var file = new Blob([data], {type: "application/octet-stream"});

					if (window.navigator.msSaveOrOpenBlob) { 

						window.navigator.msSaveOrOpenBlob(file, 'minified.css') // IE10+

					} else { 

						var url = URL.createObjectURL(file);
						a.href = url;
						a.download = 'minified.css';
						document.body.appendChild(a);
						a.click();

						setTimeout(function() {
							document.body.removeChild(a);
							window.URL.revokeObjectURL(url);  
						}, 0); 

					}
				};

				asterisk.route.currentPage.addEvent(
					document.getElementById('finalCode-css-saveBtn') , 
					'click' , 
					asterisk.route.currentPage.eventHandlers.byAndu_minifier__saveFileBtn_functionality
				);

	})();