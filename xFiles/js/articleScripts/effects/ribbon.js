
	(function(){

		// Functionality
		// --------------------------------

			// Usability 
			// --------------------------------

				var currentPage_eventHandlers = asterisk.route.currentPage.eventHandlers;
				var currentPage_addEvent      = asterisk.route.currentPage.addEvent;

			// Single Curl
			// --------------------------------

				// Usage
				// --------------------------------

					currentPage_eventHandlers.byAndu_ribbon__singleCurl__markupDemo = function(e) {
						document.getElementById('ribbon-singleCurl--target').classList = e.target.value
					};

					Array.from(document.getElementsByClassName('ribbon-singleCurl--radio')).map(function(item){
						currentPage_addEvent(item , 'change' , currentPage_eventHandlers.byAndu_ribbon__singleCurl__markupDemo)
					});

				// Follow the Document Flow
				// --------------------------------

					// Position - Checkbox
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__useCase1__position__onInputChange = function(e) {
							var codeSpan = document.getElementById('byAndu-ribbon-useCase1-position');
							var target = document.getElementById('byAndu-ribbon-useCase1--target');
							if (e.target.checked) {
								codeSpan.innerHTML    = 'relative';
								target.style.position = 'relative';
							} else {
								codeSpan.innerHTML    = 'absolute';
								target.style.position = 'absolute';
							}
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-useCase1-position--input') , 
							'change' , 
							currentPage_eventHandlers.byAndu_ribbon__useCase1__position__onInputChange
						);

					// Top - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__useCase1__top__onRangeInput = function(e) {
							var value = e.target.value + 'px';
							document.getElementById('byAndu-ribbon-useCase1-top').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase1-top--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase1--target').style.top = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-useCase1-top--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__useCase1__top__onRangeInput
						);

					// Left - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__useCase1__left__onRangeInput = function(e) {
							var value = e.target.value + 'px';
							document.getElementById('byAndu-ribbon-useCase1-left').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase1-left--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase1--target').style.left = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-useCase1-left--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__useCase1__left__onRangeInput
						);

				// Size
				// --------------------------------

					// Width - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__useCase2__width__onRangeInput = function(e) {
							var value = e.target.value + '%';
							document.getElementById('byAndu-ribbon-useCase2-width--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase2-width--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase2--target-1').style.width = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-useCase2-width--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__useCase2__width__onRangeInput
						);

					// Height - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__useCase2__height__onRangeInput = function(e) {
							var value = e.target.value + '%';
							document.getElementById('byAndu-ribbon-useCase2-height--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase2-height--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase2--target-2').style.height = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-useCase2-height--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__useCase2__height__onRangeInput
						);

				// Offset
				// --------------------------------

					// Top - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__useCase3__top__onRangeInput = function(e) {
							var value = e.target.value + 'px';
							document.getElementById('byAndu-ribbon-useCase3-top--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase3-top--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase3--target-1').style.top = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-useCase3-top--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__useCase3__top__onRangeInput
						);

					// Left - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__useCase3__left__onRangeInput = function(e) {
							var value = e.target.value + 'px';
							document.getElementById('byAndu-ribbon-useCase3-left--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase3-left--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-useCase3--target-2').style.left = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-useCase3-left--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__useCase3__left__onRangeInput
						);

				// Curl Size
				// --------------------------------

					currentPage_eventHandlers.byAndu_ribbon__useCase4__font__onRangeInput = function(e) {
						var value = e.target.value;
						document.getElementById('byAndu-ribbon-useCase4-fontSize--input--value').innerHTML = value + 'px';
						document.getElementById('byAndu-ribbon-useCase4-fontSize-code').innerHTML = value + 'px';
						document.getElementById('byAndu-ribbon-useCase4--target').classList = 'ribbon--left--btm fontSize-'+value;
					};

					currentPage_addEvent(
						document.getElementById('byAndu-ribbon-useCase4-fontSize--input') , 
						'input' , 
						currentPage_eventHandlers.byAndu_ribbon__useCase4__font__onRangeInput
					);

			// Multi Curl
			// --------------------------------

				// Usage
				// --------------------------------

					currentPage_eventHandlers.byAndu_ribbon__multiCurl__markupDemo__hor = function(e) {
						var value = e.target.value;
						var target = document.getElementById('ribbon-multiCurl--target-horizontal').getElementsByClassName(value)[0];

						if (e.target.checked) { target.classList.remove('hidden') }
						else                  { target.classList.add   ('hidden') }
					};

					Array.from(document.getElementsByClassName('ribbon-multiCurl-hor--checkbox')).map(function(item){
						currentPage_addEvent(item , 'change' , currentPage_eventHandlers.byAndu_ribbon__multiCurl__markupDemo__hor)
					});

					currentPage_eventHandlers.byAndu_ribbon__multiCurl__markupDemo__ver = function(e) {
						var value = e.target.value;
						var target = document.getElementById('ribbon-multiCurl--target-vertical').getElementsByClassName(value)[0];

						if (e.target.checked) { target.classList.remove('hidden') }
						else                  { target.classList.add   ('hidden') }
					};

					Array.from(document.getElementsByClassName('ribbon-multiCurl-ver--checkbox')).map(function(item){
						currentPage_addEvent(item , 'change' , currentPage_eventHandlers.byAndu_ribbon__multiCurl__markupDemo__ver)
					});

				// Follow the Document Flow
				// --------------------------------

					// Position - Checkbox
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase1__position__onInputChange = function(e) {
							var codeSpan = document.getElementById('byAndu-ribbon-multiCurl-useCase1-position');
							var target = document.getElementById('byAndu-ribbon-multiCurl-useCase1--target');
							if (this.checked) {
								codeSpan.innerHTML    = 'relative';
								target.style.position = 'relative';
							} else {
								codeSpan.innerHTML    = 'absolute';
								target.style.position = 'absolute';
							}
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-position--input') , 
							'change' , 
							currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase1__position__onInputChange
						);

					// Top - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase1__top__onRangeInput = function(e) {
							var value = e.target.value + 'px';
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-top').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-top--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase1--target').style.top = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-top--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase1__top__onRangeInput
						);

					// Left - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase1__left__onRangeInput = function(e) {
							var value = e.target.value + 'px';
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-left').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-left--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase1--target').style.left = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-left--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase1__left__onRangeInput
						);

					// Width - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase1__width__onRangeInput = function(e) {
							var value = e.target.value + 'px';
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-width').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-width--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase1--target').style.width = 'calc(100% + '+value+')';
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-multiCurl-useCase1-width--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase1__width__onRangeInput
						);

				// Offset
				// --------------------------------

					// Width - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase3__top__onRangeInput = function(e) {
							var value = e.target.value + 'px';
							document.getElementById('byAndu-ribbon-multiCurl-useCase3-top--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase3-top--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase3--target-1').style.top = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-multiCurl-useCase3-top--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase3__top__onRangeInput
						);

					// Left - Range
					// --------------------------------

						currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase3__left__onRangeInput = function(e) {
							var value = e.target.value + 'px';
							document.getElementById('byAndu-ribbon-multiCurl-useCase3-left--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase3-left--input--value').innerHTML = value;
							document.getElementById('byAndu-ribbon-multiCurl-useCase3--target-2').style.left = value;
						};

						currentPage_addEvent(
							document.getElementById('byAndu-ribbon-multiCurl-useCase3-left--input') , 
							'input' , 
							currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase3__left__onRangeInput
						);

				// Curl Size
				// --------------------------------

					currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase4__fontSize__onRangeInput = function(e) {
						var value = e.target.value;
						document.getElementById('byAndu-ribbon-multiCurl-useCase4-fontSize--input--value').innerHTML = value + 'px';
						document.getElementById('byAndu-ribbon-multiCurl-useCase4-fontSize-code').innerHTML = value + 'px';
						document.getElementById('byAndu-ribbon-multiCurl-useCase4--target-1').classList = 'ribbon__curl ribbon__curl--top--left fontSize-'+value;
						document.getElementById('byAndu-ribbon-multiCurl-useCase4--target-2').classList = 'ribbon__curl ribbon__curl--btm--right fontSize-'+value;
					};

					currentPage_addEvent(
						document.getElementById('byAndu-ribbon-multiCurl-useCase4-fontSize--input') , 
						'input' , 
						currentPage_eventHandlers.byAndu_ribbon__multiCurl__useCase4__fontSize__onRangeInput
					);

			// Corner
			// --------------------------------

				currentPage_eventHandlers.byAndu_ribbon__corner__markupDemo = function(e) {
					document.getElementById('ribbon-corner--target').classList = e.target.value
				};

				Array.from(document.getElementsByClassName('ribbon-corner--radio')).map(function(item){
					currentPage_addEvent(item , 'change' , currentPage_eventHandlers.byAndu_ribbon__corner__markupDemo)
				});

				currentPage_eventHandlers.byAndu_ribbon__corner__markupDemo__width__onRangeInput = function(e) {
					var value = e.target.value + '%';
					document.getElementById('byAndu-ribbon-corner-width--input--value').innerHTML = value;
					document.getElementById('ribbon-corner--target').style.width = value;
				};

				currentPage_addEvent(
					document.getElementById('byAndu-ribbon-corner-width--input') , 
					'input' , 
					currentPage_eventHandlers.byAndu_ribbon__corner__markupDemo__width__onRangeInput
				);

			// Memory Management
			// --------------------------------

				currentPage_eventHandlers = null;
				currentPage_addEvent = null;


		// Code Blocks
		// --------------------------------

			var checkbox__css = [ 'single-curl' , 'multi-curl' , 'corner' ];

			var codeBlocks_css = [

				// Shared
					{
					name : null ,
					code :
					`    /* Component -- Ribbon */
					    /* -------------------------------------------- */
					`
					},

				// single-curl
					{
					name : 'single-curl' ,
					code : 	
					`        /* Ribbon -- singleCurl */
				        /* -------------------------------------------- */

				            .ribbon--left--btm  ,
				            .ribbon--left--top  ,
				            .ribbon--right--btm ,
				            .ribbon--right--top ,
				            .ribbon--top--right ,
				            .ribbon--top--left  ,
				            .ribbon--btm--right ,
				            .ribbon--btm--left  {
				                display: inline-block;
				                position: absolute;
				                padding: 10px 15px;

				                background-color: #354758; 
				                color: white;
				                box-shadow: -1px 2px 3px rgba(0,0,0,.5);
				            }

				            .ribbon--top--right ,
				            .ribbon--top--left  ,
				            .ribbon--btm--right ,
				            .ribbon--btm--left  {
				                left: 15px; height: 90%;
				            }

				            .ribbon--left--btm ,
				            .ribbon--left--top ,
				            .ribbon--right--btm ,
				            .ribbon--right--top {
				                top: 15px; width: 90%;
				            }

				            .ribbon--left--btm ,
				            .ribbon--left--top {
				                left: 0;   border-radius: 0 3px 3px 0;
				            }
				            .ribbon--right--btm ,
				            .ribbon--right--top {
				                right: 0;  border-radius: 3px 0 0 3px;
				            }
				            .ribbon--top--right ,
				            .ribbon--top--left  {
				                top: 0;    border-radius: 0 0 3px 3px;
				            }
				            .ribbon--btm--right ,
				            .ribbon--btm--left  {
				                bottom: 0; border-radius: 3px 3px 0 0;
				            }

				            .ribbon--left--btm::before  , .ribbon--left--btm::after  ,
				            .ribbon--left--top::before  , .ribbon--left--top::after  ,
				            .ribbon--right--btm::before , .ribbon--right--btm::after ,
				            .ribbon--right--top::before , .ribbon--right--top::after ,
				            .ribbon--top--right::before , .ribbon--top--right:after  ,
				            .ribbon--top--left::before  , .ribbon--top--left:after   ,
				            .ribbon--btm--right::before , .ribbon--btm--right:after  ,
				            .ribbon--btm--left::before  , .ribbon--btm--left:after   {
				                content: '';
				                position: absolute;
				                display: block;

				                font-size: 3px;
				            }
				            .ribbon--left--btm::before  , .ribbon--left--btm::after  ,
				            .ribbon--left--top::before  , .ribbon--left--top::after  {
				                border-radius: 2em 0 0 2em;
				            }
				            .ribbon--right--btm::before , .ribbon--right--btm::after ,
				            .ribbon--right--top::before , .ribbon--right--top::after {
				                border-radius: 0 2em 2em 0;
				            }
				            .ribbon--top--right::before , .ribbon--top--right:after  ,
				            .ribbon--top--left::before  , .ribbon--top--left:after   {
				                border-radius: 2em 2em 0 0;
				            }
				            .ribbon--btm--right::before , .ribbon--btm--right:after  ,
				            .ribbon--btm--left::before  , .ribbon--btm--left:after   {
				                border-radius: 0 0 2em 2em;
				            }

				            .ribbon--left--btm::before ,
				            .ribbon--left--top::before ,
				            .ribbon--right--btm::before ,
				            .ribbon--right--top::before {
				                width: 3em; 
				                height: calc(100% + 3em);
				                background-color: inherit;
				            }
				            .ribbon--top--right::before ,
				            .ribbon--top--left::before  ,
				            .ribbon--btm--right::before ,
				            .ribbon--btm--left::before  {
				                width: calc(100% + 3em); 
				                height: 3em;
				                background-color: inherit;
				            }
				            .ribbon--left--btm::before  { top:    0; right: 100%; }
				            .ribbon--left--top::before  { bottom: 0; right: 100%; }
				            .ribbon--right--btm::before { top:    0; left:  100%; }
				            .ribbon--right--top::before { bottom: 0; left:  100%; }
				            .ribbon--top--right::before { bottom: 100%; left:  0; }
				            .ribbon--top--left::before  { bottom: 100%; right: 0; }
				            .ribbon--btm--right::before { top:    100%; left:  0; }
				            .ribbon--btm--left::before  { top:    100%; right: 0; }

				            .ribbon--left--btm::after  ,
				            .ribbon--left--top::after  ,
				            .ribbon--right--btm::after ,
				            .ribbon--right--top::after ,
				            .ribbon--top--right::after ,
				            .ribbon--top--left::after  ,
				            .ribbon--btm--right::after ,
				            .ribbon--btm--left::after  {
				                width: 2em; height: 2em;
				                background-color: rgba(0,0,0,.5);
				            }
				            .ribbon--left--btm::after  { right: 100%; top:    100%; }
				            .ribbon--left--top::after  { right: 100%; bottom: 100%; }
				            .ribbon--right--btm::after { left:  100%; top:    100%; }
				            .ribbon--right--top::after { left:  100%; bottom: 100%; }
				            .ribbon--top--right::after { left:  100%; bottom: 100%; }
				            .ribbon--top--left::after  { right: 100%; bottom: 100%; }
				            .ribbon--btm--right::after { left:  100%; top:    100%; }
				            .ribbon--btm--left::after  { right: 100%; top:    100%; }
					`
					},

				// multi-curl
					{
					name : 'multi-curl' ,
					code :
					`        /* Ribbon -- multiCurl */
				        /* -------------------------------------------- */

				            .ribbon--horizontal ,
				            .ribbon--vertical ,
				            .ribbon__curl::before {
				                background-color: #354758; 
				                color: white;
				            }

				            .ribbon--horizontal ,
				            .ribbon--vertical   {
				                display: inline-block;
				                position: absolute;
				                padding: 10px 15px;

				                box-shadow: -1px 2px 3px rgba(0,0,0,.5);
				            }
				            .ribbon--horizontal { left:    0; top: 15px; width:  100%; }
				            .ribbon--vertical   { left: 15px; top:    0; height: 100%; }

				            .ribbon__curl {
				                position: absolute;
				                display: inline-block;
				                font-size: 3px;
				            }
				            .ribbon__curl--left--btm  ,
				            .ribbon__curl--left--top  ,
				            .ribbon__curl--right--btm ,
				            .ribbon__curl--right--top {
				                width: 3em; height: 100%; top: 0;
				            }
				            .ribbon__curl--left--btm  { right: 100%; }
				            .ribbon__curl--left--top  { right: 100%; }
				            .ribbon__curl--right--btm { left:  100%; }
				            .ribbon__curl--right--top { left:  100%; }

				            .ribbon__curl--top--left  ,
				            .ribbon__curl--top--right ,
				            .ribbon__curl--btm--left  ,
				            .ribbon__curl--btm--right {
				                height: 3em; width: 100%; left: 0;
				            }
				            .ribbon__curl--top--left  { bottom: 100%; }
				            .ribbon__curl--top--right { bottom: 100%; }
				            .ribbon__curl--btm--left  { top: 100%;    }
				            .ribbon__curl--btm--right { top: 100%;    }

				            .ribbon__curl::before  , .ribbon__curl::after {
				                content: '';
				                display: block;
				                position: absolute;
				            }
				            .ribbon__curl--left--btm::before , .ribbon__curl--left--btm::after ,
				            .ribbon__curl--left--top::before , .ribbon__curl--left--top::after {
				                border-radius: 2em 0 0 2em;
				            }
				            .ribbon__curl--right--btm::before , .ribbon__curl--right--btm::after ,
				            .ribbon__curl--right--top::before , .ribbon__curl--right--top::after {
				                border-radius: 0 2em 2em 0;
				            }
				            .ribbon__curl--top--right::before , .ribbon__curl--top--right:after  ,
				            .ribbon__curl--top--left::before  , .ribbon__curl--top--left:after   {
				                border-radius: 2em 2em 0 0;
				            }
				            .ribbon__curl--btm--right::before , .ribbon__curl--btm--right:after  ,
				            .ribbon__curl--btm--left::before  , .ribbon__curl--btm--left:after   {
				                border-radius: 0 0 2em 2em;
				            }

				            .ribbon__curl--left--btm::before  ,
				            .ribbon__curl--left--top::before  ,
				            .ribbon__curl--right--btm::before ,
				            .ribbon__curl--right--top::before {
				                width: 100%; height: calc(100% + 3em);
				            }
				            .ribbon__curl--left--btm::before  { top:    0; right: 0; }
				            .ribbon__curl--left--top::before  { bottom: 0; right: 0; }
				            .ribbon__curl--right--btm::before { top:    0; left:  0; }
				            .ribbon__curl--right--top::before { bottom: 0; left:  0; }

				            .ribbon__curl--top--left::before  ,
				            .ribbon__curl--top--right::before ,
				            .ribbon__curl--btm--left::before  ,
				            .ribbon__curl--btm--right::before {
				                width: calc(100% + 3em); height: 3em; 
				            }
				            .ribbon__curl--top--right::before { left:  0; bottom: 0; }
				            .ribbon__curl--top--left::before  { right: 0; bottom: 0; }
				            .ribbon__curl--btm--right::before { left:  0; top:    0; }
				            .ribbon__curl--btm--left::before  { right: 0; top:    0; }

				            .ribbon__curl::after {
				                width: 2em; height: 2em;
				                background-color: rgba(0,0,0,0.35);
				            }
				            .ribbon__curl--left--btm::after  { top:    100%; right: 0; }
				            .ribbon__curl--left--top::after  { bottom: 100%; right: 0; }
				            .ribbon__curl--right--btm::after { top:    100%; left:  0; }
				            .ribbon__curl--right--top::after { bottom: 100%; left:  0; }

				            .ribbon__curl--top--left::after  { bottom: 0; right: 100%; }
				            .ribbon__curl--top--right::after { bottom: 0; left:  100%; }
				            .ribbon__curl--btm--left::after  { top:    0; right: 100%; }
				            .ribbon__curl--btm--right::after { top:    0; left:  100%; }

				            .ribbon--singleSide--left {
				                left: 0;   right: auto;
				                width: 90%;
				                border-radius: 0 3px 3px 0;
				            }
				            .ribbon--singleSide--right {
				                right: 0;  left: auto;
				                width: 90%;
				                border-radius: 3px 0 0 3px;
				            }
				            .ribbon--singleSide--top  {
				                top: 0;    bottom: auto;
				                height: 90%;
				                border-radius: 0 0 3px 3px;
				            }
				            .ribbon--singleSide--btm  {
				                bottom: 0; top: auto;
				                height: 90%;
				                border-radius: 3px 3px 0 0;
				            }
					`
					},

				// corner
					{
					name : 'corner' ,
					code :
					`        /* Ribbon -- corner */
				        /* -------------------------------------------- */

				            .ribbon--corner--topLeft  ,
				            .ribbon--corner--topRight ,
				            .ribbon--corner--btmLeft  ,
				            .ribbon--corner--btmRight {
				                position: absolute;
				                width: 50%;
				                overflow: hidden;
				            }
				            .ribbon--corner--topLeft  { top:    -10px; left:  -10px; }
				            .ribbon--corner--topRight { top:    -10px; right: -10px; }
				            .ribbon--corner--btmLeft  { bottom: -10px; left:  -10px; }
				            .ribbon--corner--btmRight { bottom: -10px; right: -10px; }

				            .ribbon--corner--topLeft::before  ,
				            .ribbon--corner--topRight::before ,
				            .ribbon--corner--btmLeft::before  ,
				            .ribbon--corner--btmRight::before {
				                content: '';
				                display: block;
				                width: 100%;
				                padding-top: 100%;
				            } 

				            .ribbon--corner--topLeft  .ribbon__text ,
				            .ribbon--corner--topRight .ribbon__text ,
				            .ribbon--corner--btmLeft  .ribbon__text ,
				            .ribbon--corner--btmRight .ribbon__text {
				                position: absolute;
				                top: 50%; left: 50%;

				                width: 140%; /* the ~diagonal size of a 100% x 100% square triangle - 141.42 causes some corners to not connect */
				                padding: 10px 20%; 

				                text-align: center;

				                -webkit-transform-origin: 0 0;
				                    -ms-transform-origin: 0 0;
				                        transform-origin: 0 0;

				                background-color: #354758;
				                color: #FFFFFF;
				            }
				            .ribbon--corner--topLeft .ribbon__text {
				                -webkit-transform: rotateZ(-45deg) translate(-50% , -100%);
				                    -ms-transform: rotateZ(-45deg) translate(-50% , -100%);
				                        transform: rotateZ(-45deg) translate(-50% , -100%);
				            }
				            .ribbon--corner--topRight .ribbon__text {
				                -webkit-transform: rotateZ(45deg)  translate(-50% , -100%);
				                    -ms-transform: rotateZ(45deg)  translate(-50% , -100%);
				                        transform: rotateZ(45deg)  translate(-50% , -100%);
				            }
				            .ribbon--corner--btmLeft .ribbon__text {
				                -webkit-transform: rotateZ(45deg)  translate(-50% , 0%);
				                    -ms-transform: rotateZ(45deg)  translate(-50% , 0%);
				                        transform: rotateZ(45deg)  translate(-50% , 0%);
				            }
				            .ribbon--corner--btmRight .ribbon__text {
				                -webkit-transform: rotateZ(-45deg) translate(-50% , 0%);
				                    -ms-transform: rotateZ(-45deg) translate(-50% , 0%);
				                        transform: rotateZ(-45deg) translate(-50% , 0%);
				            }
				            /*.ribbon--corner--btmLeft .ribbon__text {
				                -webkit-transform: rotateZ(-135deg) translate(-50% , -100%);
				                    -ms-transform: rotateZ(-135deg) translate(-50% , -100%);
				                        transform: rotateZ(-135deg) translate(-50% , -100%);
				            }*/
				            /*.ribbon--corner--btmRight .ribbon__text {
				                -webkit-transform: rotateZ(135deg)  translate(-50% , -100%);
				                    -ms-transform: rotateZ(135deg)  translate(-50% , -100%);
				                        transform: rotateZ(135deg)  translate(-50% , -100%);
				            }*/

				            .ribbon--corner--topLeft  .ribbon__text::before , .ribbon--corner--topLeft  .ribbon__text::after ,
				            .ribbon--corner--topRight .ribbon__text::before , .ribbon--corner--topRight .ribbon__text::after ,
				            .ribbon--corner--btmLeft  .ribbon__text::before , .ribbon--corner--btmLeft  .ribbon__text::after ,
				            .ribbon--corner--btmRight .ribbon__text::before , .ribbon--corner--btmRight .ribbon__text::after {
				                content: '';
				                position: absolute;
				                
				                height: 10px;
				                width: 10px;
				                
				                background-color: inherit;
				                border: 5px solid rgba(0,0,0,0);

				                -webkit-transform-origin: 0 0;
				                    -ms-transform-origin: 0 0;
				                        transform-origin: 0 0;
				            }
				            .ribbon--corner--topLeft  .ribbon__text::before , .ribbon--corner--topLeft  .ribbon__text::after ,
				            .ribbon--corner--topRight .ribbon__text::before , .ribbon--corner--topRight .ribbon__text::after {
				                top: 100%;
				            }
				            .ribbon--corner--btmLeft  .ribbon__text::before , .ribbon--corner--btmLeft  .ribbon__text::after ,
				            .ribbon--corner--btmRight .ribbon__text::before , .ribbon--corner--btmRight .ribbon__text::after {
				                top: 0; 
				            }

				            .ribbon--corner--topLeft  .ribbon__text::before ,
				            .ribbon--corner--topRight .ribbon__text::before ,
				            .ribbon--corner--btmLeft  .ribbon__text::before ,
				            .ribbon--corner--btmRight .ribbon__text::before {
				                left: 0; 
				                -webkit-transform: rotateZ(-45deg);
				                    -ms-transform: rotateZ(-45deg);
				                        transform: rotateZ(-45deg);
				            }
				            .ribbon--corner--topLeft  .ribbon__text::after ,
				            .ribbon--corner--topRight .ribbon__text::after ,
				            .ribbon--corner--btmLeft  .ribbon__text::after ,
				            .ribbon--corner--btmRight .ribbon__text::after {
				                left: 100%;
				                -webkit-transform: rotateZ(135deg);
				                    -ms-transform: rotateZ(135deg);
				                        transform: rotateZ(135deg);
				            }
				            .ribbon--corner--topLeft  .ribbon__text::before ,
				            .ribbon--corner--topRight .ribbon__text::before ,
				            .ribbon--corner--btmLeft  .ribbon__text::after  ,
				            .ribbon--corner--btmRight .ribbon__text::after  {
				                border-left-color:   rgba(0,0,0,.35);
				                border-bottom-color: rgba(0,0,0,.35);
				            }
				            .ribbon--corner--topLeft  .ribbon__text::after  ,
				            .ribbon--corner--topRight .ribbon__text::after  ,
				            .ribbon--corner--btmLeft  .ribbon__text::before ,
				            .ribbon--corner--btmRight .ribbon__text::before {
				                border-top-color:    rgba(0,0,0,.35);
				                border-right-color:  rgba(0,0,0,.35);
				            }
					`
					}
			];

			// var codeBlocks_css_singular = [

			// 	// hasFilter-1977
			// 		{
			// 		name : 'hasFilter-1977' ,
			// 		code : 	
			// 		`        /* Filter - 1977 */
			// 	        /* ------------------------------- */

			// 	            .hasFilter-1977            , 
			// 	            .hasFilter-hvr-1977:hover  {
			// 	                -webkit-filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);
			// 	                        filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);

			// 	                -webkit-transition: filter 0.4s ease-out;
			// 	                   -moz-transition: filter 0.4s ease-out;
			// 	                     -o-transition: filter 0.4s ease-out;
			// 	                        transition: filter 0.4s ease-out; 
			// 	            }
			// 		`
			// 		}
			// ];

			codeBlocks_css          = byAndu_codeBlock_formatCodeString(codeBlocks_css);
			// codeBlocks_css_singular = byAndu_codeBlock_formatCodeString(codeBlocks_css_singular);
			
		// Param Obj
		// --------------------------------

			var paramObj = {
				checkBoxes : {
					css          : checkbox__css //,
					//css_singular : demoItemsArray 
				} ,

				codeBlocks : {
					css          : codeBlocks_css //,
					//css_singular : codeBlocks_css_singular
				} //,

				//removeString       : 'hasFilter-' ,
				//demoItems_codeLink : codeBlocks_css_singular
			};

			byAndu.pageConfigObj_setupObj(paramObj);
			byAndu.pageConfigObj_runConfig();

	})();