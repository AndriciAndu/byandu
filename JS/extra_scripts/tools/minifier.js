
	(function(){

		document.getElementById('minifyBtn-css').addEventListener('click', function(){

			animateBtnIcon(this);

			var codeInput  = document.getElementById('minifier-code-input');
			var codeOutput = document.getElementById('minifier-code-output');

			codeOutput.parentElement.classList.add('faSpinner' , 'faSpinner-fast');

			codeOutput.value = minify_css(codeInput.value);

			setTimeout(function(){
				codeOutput.parentElement.classList.remove('faSpinner' , 'faSpinner-fast');
			}, 0);
		});

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

		document.getElementById('finalCode-css-copyBtn').addEventListener('click', function(){

			if (!hasClass(this, 'active')) {
				animateBtnIcon(this);
				var outputTextarea = document.getElementById('minifier-code-output');
				
				outputTextarea.select();
				document.execCommand("copy");

				deselectAll();
			}
		});

		document.getElementById('finalCode-css-selectBtn').addEventListener('click', function(){

			if (!hasClass(this, 'active')) {
				animateBtnIcon(this);
				var outputTextarea = document.getElementById('minifier-code-output');
				
				outputTextarea.select();
			}
		});

		function animateBtnIcon(targetBtn) {
			targetBtn.classList.add('active');

			setTimeout(function(){
				targetBtn.classList.remove('active')
			}, 1000)
		};

		function deselectAll() {
			var element = document.activeElement;
			
			if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
				if ('selectionStart' in element) {
					element.selectionEnd = element.selectionStart;
				}
				element.blur();
			}

			if (window.getSelection) { // All browsers, except IE <=8
				window.getSelection().removeAllRanges();
			} else if (document.selection) { // IE <=8
				document.selection.empty();
			}
		}

	})();