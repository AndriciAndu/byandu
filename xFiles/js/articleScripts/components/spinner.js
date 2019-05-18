
	(function(){

		var demoItemsArray = [
			'spinner--circular-double'	,
			'spinner--circular-simple'	,
			'spinner--flipSquare'		,
			'spinner--pulse'			,
			'spinner--cubes'			,
			'spinner--bars'				,
			'spinner--arcs-sync'	,
			'spinner--arcs-async'	,
			'spinner--bubbles'			,
			'spinner--bubbles-pop'		,
			'spinner--yinyang'
		];

		// Generate demos
		// --------------------------------

			var generateDemos_container = document.getElementById('__route__mainView__generateDemos');

			demoItemsArray.map(function(spinnerClass) {
				var newElem = document.createElement('div');
				newElem.classList = 'col-6 md-col-4 p-sm';

				var innerHTMLString = '';

				switch (spinnerClass) {
					case 'spinner--bars' :
					case 'spinner--arcs-sync' :
					case 'spinner--arcs-async' :
						innerHTMLString =
							'<div class="spinner__element spinner__element--1"> </div> '+
							'<div class="spinner__element spinner__element--2"> </div> '+
							'<div class="spinner__element spinner__element--3"> </div> ';
						break;

					case 'spinner--bubbles' :
					case 'spinner--bubbles-pop' :
					case 'spinner--yinyang' :
						innerHTMLString =
							'<div class="spinner__element spinner__element--1"> </div> '+
							'<div class="spinner__element spinner__element--2"> </div> '+
							'<div class="spinner__element spinner__element--3"> </div> '+
							'<div class="spinner__element spinner__element--4"> </div> ';
						break;

					default: 
						break;
				};

				newElem.innerHTML = 
					'<div class="demoItem-container demoItem-container-'+spinnerClass+'" ' 		+
						'data-finalCodeId="'+spinnerClass+'" data-hvr-showText="'+spinnerClass+'"> '	+
						'<div class="demoItem"> '											+
							'<div class="'+spinnerClass+'"> '+innerHTMLString+' </div> '			+
						'</div> '															+
					'</div> '																;
				generateDemos_container.appendChild(newElem);
			});

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// spinner--circular-double
					{
					name : 'spinner--circular-double' ,
					code : 
					`    /* spinner--circular-double */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--circular-double {
					                    width:  100px; 
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Weight && color */ 
					            /* ----------------------------------------*/
					                .spinner--circular-double::before, 
					                .spinner--circular-double::after {
					                    border: 5px solid currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/
					                .spinner--circular-double::before, 
					                .spinner--circular-double::after  { 
					                    -webkit-animation-duration: 1500ms; 
					                            animation-duration: 1500ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/

					            .spinner--circular-double {
					                position: relative;
					            }

					            .spinner--circular-double::before , 
					            .spinner--circular-double::after {
					                content: '';
					                position: absolute;
					                left: 50%; top: 50%;

					                border-radius: 50%;
					                border-top-color:    transparent !important;
					                border-bottom-color: transparent !important;
					                background-color: transparent !important;
					                
					                -webkit-transform: translate3d(-50%, -50%, 0);  
					                    -ms-transform: translate3d(-50%, -50%, 0);  
					                        transform: translate3d(-50%, -50%, 0);

					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: linear;
					                        animation-timing-function: linear;
					            }

					            .spinner--circular-double::before {
					                width: 100%; height: 100%; 
					                -webkit-animation-name: spinner--circular-double-1st;
					                        animation-name: spinner--circular-double-1st;
					            }

					            .spinner--circular-double::after {
					                width: 50%;  height: 50%; 
					                -webkit-animation-name: spinner--circular-double-2nd;
					                        animation-name: spinner--circular-double-2nd;
					            }

					        /* Animation */
					        /* ----------------------------------------*/

					            @-webkit-keyframes spinner--circular-double-1st {
					                to { 
					                    -webkit-transform: translate3d(-50%, -50%, 0) rotate(359deg);
					                        -ms-transform: translate3d(-50%, -50%, 0) rotate(359deg);
					                            transform: translate3d(-50%, -50%, 0) rotate(359deg);
					                }
					            }
					                    @keyframes spinner--circular-double-1st {
					                to { 
					                    -webkit-transform: translate3d(-50%, -50%, 0) rotate(359deg);
					                        -ms-transform: translate3d(-50%, -50%, 0) rotate(359deg);
					                            transform: translate3d(-50%, -50%, 0) rotate(359deg);
					                }
					            }

					            @-webkit-keyframes spinner--circular-double-2nd {
					                to { 
					                    -webkit-transform: translate3d(-50%, -50%, 0) rotate(-359deg);
					                        -ms-transform: translate3d(-50%, -50%, 0) rotate(-359deg);
					                            transform: translate3d(-50%, -50%, 0) rotate(-359deg);
					                }
					            }
					                    @keyframes spinner--circular-double-2nd {
					                to { 
					                    -webkit-transform: translate3d(-50%, -50%, 0) rotate(-359deg);
					                        -ms-transform: translate3d(-50%, -50%, 0) rotate(-359deg);
					                            transform: translate3d(-50%, -50%, 0) rotate(-359deg);
					                }
					            }
					`
					} ,

				// spinner--circular-simple
					{
					name : 'spinner--circular-simple' ,
					code : 
					`    /* spinner--circular-simple */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--circular-simple {
					                    width:  100px;
					                    height: 100px;
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--circular-simple::before,
					                .spinner--circular-simple::after {
					                    border: 15px solid currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/
					                .spinner--circular-simple::after { 
					                    -webkit-animation-duration: 1000ms; 
					                            animation-duration: 1000ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/

					            .spinner--circular-simple {
					                position: relative;
					            }

					            .spinner--circular-simple::before,
					            .spinner--circular-simple::after {
					                content: '';
					                position: absolute; 
					                top: 0; left: 0;
					                width: 100%; height: 100%;
					                border-radius: 50%;
					            }

					            .spinner--circular-simple::before {
					                opacity: 0.1;
					            }

					            .spinner--circular-simple::after {
					                border-top-color:   transparent;
					                border-right-color: transparent;
					                border-left-color:  transparent;

					                -webkit-transform: translateZ(0) rotate(0deg);
					                    -ms-transform: translateZ(0) rotate(0deg);
					                        transform: translateZ(0) rotate(0deg);

					                -webkit-animation-name: spinner--circular-simple;
					                        animation-name: spinner--circular-simple;
					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: linear;
					                        animation-timing-function: linear;
					            }

					        /* Animation */
					        /* ----------------------------------------*/

					            @-webkit-keyframes spinner--circular-simple {
					                to {
					                    -webkit-transform: translateZ(0) rotate(359deg);
					                        -ms-transform: translateZ(0) rotate(359deg);
					                            transform: translateZ(0) rotate(359deg);
					                }
					            }
					                    @keyframes spinner--circular-simple {
					                to {
					                    -webkit-transform: translateZ(0) rotate(359deg);
					                        -ms-transform: translateZ(0) rotate(359deg);
					                            transform: translateZ(0) rotate(359deg);
					                }
					            }
					`
					} ,

				// spinner--flipSquare
					{
					name : 'spinner--flipSquare' ,
					code : 
					`    /* spinner--flipSquare */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--flipSquare {
					                    width:  100px;  
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--flipSquare {
					                    background-color: currentColor;
					                }
					                .spinner--flipSquare::after { /* backside */
					                    background-color: currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/
					                .spinner--flipSquare { 
					                    -webkit-animation-duration: 2250ms; 
					                            animation-duration: 2250ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/

					            .spinner--flipSquare {
					                position: relative;

					                -webkit-transform-style: preserve-3d;
					                -webkit-backface-visibility: hidden;

					                -webkit-animation-name: spinner--flipSquare;
					                        animation-name: spinner--flipSquare;
					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: ease-in-out;
					                        animation-timing-function: ease-in-out;
					            }

					            .spinner--flipSquare:after {
					                content: '';
					                position: absolute;
					                top: 0; left: 0; right: 0; bottom: 0;
					                        
					                -webkit-transform-style: preserve-3d;
					                -webkit-backface-visibility: hidden;

					                -webkit-transform: translateZ(0) rotateY(180deg);
					                    -ms-transform: translateZ(0) rotateY(180deg);
					                        transform: translateZ(0) rotateY(180deg);
					            }
					        /* Animation */
					        /* ----------------------------------------*/

					            @-webkit-keyframes spinner--flipSquare {
					                0%   { 
					                    -webkit-transform: perspective(1000px)  rotateX(0deg)   rotateY(0deg)   translateZ(0);  
					                        -ms-transform: perspective(1000px)  rotateX(0deg)   rotateY(0deg)   translateZ(0);  
					                            transform: perspective(1000px)  rotateX(0deg)   rotateY(0deg)   translateZ(0);
					                }
					                25%  { 
					                    -webkit-transform: perspective(1000px)  rotateX(0deg)   rotateY(180deg) translateZ(0);
					                        -ms-transform: perspective(1000px)  rotateX(0deg)   rotateY(180deg) translateZ(0);
					                            transform: perspective(1000px)  rotateX(0deg)   rotateY(180deg) translateZ(0);
					                }
					                50%  { 
					                    -webkit-transform: perspective(1000px)  rotateX(180deg) rotateY(180deg) translateZ(0);
					                        -ms-transform: perspective(1000px)  rotateX(180deg) rotateY(180deg) translateZ(0);
					                            transform: perspective(1000px)  rotateX(180deg) rotateY(180deg) translateZ(0);
					                }
					                75%  { 
					                    -webkit-transform: perspective(1000px)  rotateX(180deg) rotateY(360deg) translateZ(0);
					                        -ms-transform: perspective(1000px)  rotateX(180deg) rotateY(360deg) translateZ(0);
					                            transform: perspective(1000px)  rotateX(180deg) rotateY(360deg) translateZ(0);
					                }
					                100% { 
					                    -webkit-transform: perspective(1000px)  rotateX(0deg)   rotateY(360deg) translateZ(0);
					                        -ms-transform: perspective(1000px)  rotateX(0deg)   rotateY(360deg) translateZ(0);
					                            transform: perspective(1000px)  rotateX(0deg)   rotateY(360deg) translateZ(0);
					                }
					            }

					                    @keyframes spinner--flipSquare {
					                0%   { 
					                    -webkit-transform: perspective(1000px)  rotateX(0deg)   rotateY(0deg)   translateZ(0);  
					                        -ms-transform: perspective(1000px)  rotateX(0deg)   rotateY(0deg)   translateZ(0);  
					                            transform: perspective(1000px)  rotateX(0deg)   rotateY(0deg)   translateZ(0);
					                }
					                25%  { 
					                    -webkit-transform: perspective(1000px)  rotateX(0deg)   rotateY(180deg) translateZ(0);
					                        -ms-transform: perspective(1000px)  rotateX(0deg)   rotateY(180deg) translateZ(0);
					                            transform: perspective(1000px)  rotateX(0deg)   rotateY(180deg) translateZ(0);
					                }
					                50%  { 
					                    -webkit-transform: perspective(1000px)  rotateX(180deg) rotateY(180deg) translateZ(0);
					                        -ms-transform: perspective(1000px)  rotateX(180deg) rotateY(180deg) translateZ(0);
					                            transform: perspective(1000px)  rotateX(180deg) rotateY(180deg) translateZ(0);
					                }
					                75%  { 
					                    -webkit-transform: perspective(1000px)  rotateX(180deg) rotateY(360deg) translateZ(0);
					                        -ms-transform: perspective(1000px)  rotateX(180deg) rotateY(360deg) translateZ(0);
					                            transform: perspective(1000px)  rotateX(180deg) rotateY(360deg) translateZ(0);
					                }
					                100% { 
					                    -webkit-transform: perspective(1000px)  rotateX(0deg)   rotateY(360deg) translateZ(0);
					                        -ms-transform: perspective(1000px)  rotateX(0deg)   rotateY(360deg) translateZ(0);
					                            transform: perspective(1000px)  rotateX(0deg)   rotateY(360deg) translateZ(0);
					                }
					            }
					`
					} ,

				// spinner--pulse
					{
					name : 'spinner--pulse' ,
					code : 
					`    /* spinner--pulse */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--pulse {
					                    width:  100px;
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--pulse::before,
					                .spinner--pulse::after {
					                    background-color: currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/
					                .spinner--pulse::before,
					                .spinner--pulse::after { 
					                    -webkit-animation-duration: 1500ms; 
					                            animation-duration: 1500ms; 
					                }
					                .spinner--pulse::after { 
					                    -webkit-animation-delay:    -750ms; 
					                            animation-delay:    -750ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/
					            .spinner--pulse {
					                position: relative;
					            }

					            .spinner--pulse::before, 
					            .spinner--pulse::after {
					                content: '';
					                position: absolute;
					                left: 50%; top: 50%;
					                width: 100%; height: 100%;

					                opacity: 0.6;
					                border-radius: 50%;

					                -webkit-transform: translate3d(-50%, -50%, 0) scale(0);
					                    -ms-transform: translate3d(-50%, -50%, 0) scale(0);
					                        transform: translate3d(-50%, -50%, 0) scale(0); 

					                -webkit-animation-name: spinner--pulse;
					                        animation-name: spinner--pulse;
					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: ease-in-out;
					                        animation-timing-function: ease-in-out;
					            }

					        /* Animation */
					        /* ----------------------------------------*/

					            @-webkit-keyframes spinner--pulse {
					                0%, 100%    { 
					                    -webkit-transform: translate3d(-50%, -50%, 0) scale(0);
					                        -ms-transform: translate3d(-50%, -50%, 0) scale(0);
					                            transform: translate3d(-50%, -50%, 0) scale(0); 
					                }
					                50%         { 
					                    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
					                        -ms-transform: translate3d(-50%, -50%, 0) scale(1);
					                            transform: translate3d(-50%, -50%, 0) scale(1); 
					                }
					            }

					            @keyframes spinner--pulse {
					                0%, 100%    { 
					                    -webkit-transform: translate3d(-50%, -50%, 0) scale(0);
					                        -ms-transform: translate3d(-50%, -50%, 0) scale(0);
					                            transform: translate3d(-50%, -50%, 0) scale(0); 
					                }
					                50%         { 
					                    -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
					                        -ms-transform: translate3d(-50%, -50%, 0) scale(1);
					                            transform: translate3d(-50%, -50%, 0) scale(1); 
					                }
					            }
					`
					} ,

				// spinner--cubes
					{
					name : 'spinner--cubes' ,
					code : 
					`    /* spinner--cubes */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--cubes {
					                    width:  100px;
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--cubes::before,
					                .spinner--cubes::after {
					                    background-color: currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/

					                .spinner--cubes::before,
					                .spinner--cubes::after { 
					                    -webkit-animation-duration: 2500ms; 
					                            animation-duration: 2500ms; 
					                }
					                .spinner--cubes::after { 
					                    -webkit-animation-delay: -1250ms; 
					                            animation-delay: -1250ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/

					            .spinner--cubes {
					                position: relative;
					            }

					            .spinner--cubes::before,
					            .spinner--cubes::after {
					                content: '';
					                position: absolute;
					                top: 0; left: 0;
					                width: 20%; height: 20%;

					                -webkit-transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
					                    -ms-transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
					                        transform: translate3d(0, 0, 0) rotate(0deg) scale(1);

					                -webkit-animation-name: spinner--cubes;
					                        animation-name: spinner--cubes;
					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: ease-in-out;
					                        animation-timing-function: ease-in-out;
					            }

					        /* Animation */
					        /* ----------------------------------------*/

					            @-webkit-keyframes spinner--cubes {
					                25% {   
					                    -webkit-transform:  translate3d(400%, 0, 0)     rotate(-90deg)   scale(0.5);
					                        -ms-transform:  translate3d(400%, 0, 0)     rotate(-90deg)   scale(0.5);
					                            transform:  translate3d(400%, 0, 0)     rotate(-90deg)   scale(0.5);
					                }
					                50% {   
					                    -webkit-transform:  translate3d(400%, 400%, 0)  rotate(-179deg)  scale(1);
					                        -ms-transform:  translate3d(400%, 400%, 0)  rotate(-179deg)  scale(1);
					                            transform:  translate3d(400%, 400%, 0)  rotate(-179deg)  scale(1);
					                }
					                75%   {
					                    -webkit-transform:  translate3d(0, 400%, 0)     rotate(-270deg)  scale(0.5);
					                        -ms-transform:  translate3d(0, 400%, 0)     rotate(-270deg)  scale(0.5);
					                            transform:  translate3d(0, 400%, 0)     rotate(-270deg)  scale(0.5);
					                }
					                100%  {
					                    -webkit-transform:  translate3d(0, 0, 0)        rotate(-360deg)  scale(1);
					                        -ms-transform:  translate3d(0, 0, 0)        rotate(-360deg)  scale(1);
					                            transform:  translate3d(0, 0, 0)        rotate(-360deg)  scale(1);
					                }
					            }
					                    @keyframes spinner--cubes {
					                25% {   
					                    -webkit-transform:  translate3d(400%, 0, 0)     rotate(-90deg)   scale(0.5);
					                        -ms-transform:  translate3d(400%, 0, 0)     rotate(-90deg)   scale(0.5);
					                            transform:  translate3d(400%, 0, 0)     rotate(-90deg)   scale(0.5);
					                }
					                50% {   
					                    -webkit-transform:  translate3d(400%, 400%, 0)  rotate(-179deg)  scale(1);
					                        -ms-transform:  translate3d(400%, 400%, 0)  rotate(-179deg)  scale(1);
					                            transform:  translate3d(400%, 400%, 0)  rotate(-179deg)  scale(1);
					                }
					                75%   {
					                    -webkit-transform:  translate3d(0, 400%, 0)     rotate(-270deg)  scale(0.5);
					                        -ms-transform:  translate3d(0, 400%, 0)     rotate(-270deg)  scale(0.5);
					                            transform:  translate3d(0, 400%, 0)     rotate(-270deg)  scale(0.5);
					                }
					                100%  {
					                    -webkit-transform:  translate3d(0, 0, 0)        rotate(-360deg)  scale(1);
					                        -ms-transform:  translate3d(0, 0, 0)        rotate(-360deg)  scale(1);
					                            transform:  translate3d(0, 0, 0)        rotate(-360deg)  scale(1);
					                }
					            }
					`
					} ,

				// spinner--bars
					{
					name : 'spinner--bars' ,
					code : 
					`    /* spinner--bars */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--bars {
					                    width:  100px;
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--bars .spinner__element {
					                    width: 25%; /* width - don't go over 33% */
					                    background-color: currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/
					                .spinner--bars .spinner__element { 
					                    -webkit-animation-duration: 1000ms; 
					                            animation-duration: 1000ms; 
					                }
					                .spinner--bars .spinner__element--2 { 
					                    -webkit-animation-delay: 100ms; 
					                            animation-delay: 100ms; 
					                }
					                .spinner--bars .spinner__element--3 { 
					                    -webkit-animation-delay: 200ms; 
					                            animation-delay: 200ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/

					            .spinner--bars {
					                position: relative;

					                display: -webkit-box;   display: -ms-flexbox;   
					                display: -webkit-flex;  display: flex;
					                align-items: center;    justify-content: space-between;
					            }

					            .spinner--bars .spinner__element {
					                position: relative; 
					                height: 100%;

					                -webkit-transform: translateZ(0) scaleY(.5);
					                    -ms-transform: translateZ(0) scaleY(.5); 
					                        transform: translateZ(0) scaleY(.5);

					                -webkit-animation-name: spinner--bars;
					                        animation-name: spinner--bars;
					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: linear;
					                        animation-timing-function: linear;
					            }

					        /* Animation */
					        /* ----------------------------------------*/

					            @-webkit-keyframes spinner--bars {
					                0% , 80% , 100% { 
					                    -webkit-transform: translateZ(0) scaleY(.5);
					                        -ms-transform: translateZ(0) scaleY(.5); 
					                            transform: translateZ(0) scaleY(.5); 
					                }
					                40% { 
					                    -webkit-transform: translateZ(0) scaleY(1);
					                        -ms-transform: translateZ(0) scaleY(1);
					                            transform: translateZ(0) scaleY(1);  
					                }
					            }
					                    @keyframes spinner--bars {
					                0% , 80% , 100% { 
					                    -webkit-transform: translateZ(0) scaleY(.5);
					                        -ms-transform: translateZ(0) scaleY(.5); 
					                            transform: translateZ(0) scaleY(.5); 
					                }
					                40% { 
					                    -webkit-transform: translateZ(0) scaleY(1);
					                        -ms-transform: translateZ(0) scaleY(1);
					                            transform: translateZ(0) scaleY(1);  
					                }
					            }
					`
					} ,

				// spinner--arcs-sync
					{
					name : 'spinner--arcs-sync' ,
					code : 
					`    /* spinner--arcs-sync */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--arcs-sync {
					                    width:  100px;
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--arcs-sync .spinner__element {
					                    border-left: 5px solid currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/
					                .spinner--arcs-sync .spinner__element  { 
					                    -webkit-animation-duration: 1500ms; 
					                            animation-duration: 1500ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/

					            .spinner--arcs-sync {
					                position: relative;
					            }

					            .spinner--arcs-sync .spinner__element {
					                position: absolute;
					                width: 100%; height: 100%;
					                border-radius: 50%;

					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: linear;
					                        animation-timing-function: linear;
					            }

					            .spinner--arcs-sync .spinner__element--1 {
					                -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);    
					                    -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);  
					                        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);

					                -webkit-animation-name: spinner--arcs-sync-1st;
					                        animation-name: spinner--arcs-sync-1st;
					            }
					            .spinner--arcs-sync .spinner__element--2 {
					                -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
					                    -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
					                        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);

					                -webkit-animation-name: spinner--arcs-sync-2nd;
					                        animation-name: spinner--arcs-sync-2nd;
					            }
					            .spinner--arcs-sync .spinner__element--3 {
					                -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
					                    -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
					                        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);

					                -webkit-animation-name: spinner--arcs-sync-3rd;
					                        animation-name: spinner--arcs-sync-3rd;
					            }

					        /* Animation */
					        /* ----------------------------------------*/

					            @-webkit-keyframes spinner--arcs-sync-1st {
					                to {
					                    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                        -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                }
					            }

					            @-webkit-keyframes spinner--arcs-sync-2nd {
					                to {
					                    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                        -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                }
					            }

					            @-webkit-keyframes spinner--arcs-sync-3rd {
					                to {
					                    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                        -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                }
					            }

					            @keyframes spinner--arcs-sync-1st {
					                to {
					                    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                        -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                }
					            }

					            @keyframes spinner--arcs-sync-2nd {
					                to {
					                    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                        -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                }
					            }

					            @keyframes spinner--arcs-sync-3rd {
					                to {
					                    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                        -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                }
					            }
					`
					} ,

				// spinner--arcs-async
					{
					name : 'spinner--arcs-async' ,
					code : 
					`    /* spinner--arcs-async */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--arcs-async {
					                    width:  100px;
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--arcs-async .spinner__element--1 { border-left:  5px solid currentColor; }
					                .spinner--arcs-async .spinner__element--2 { border-right: 5px solid currentColor; }
					                .spinner--arcs-async .spinner__element--3 { border-top:   5px solid currentColor; }

					            /* Speed & Delay */
					            /* ----------------------------------------*/
					                .spinner--arcs-async .spinner__element { 
					                    -webkit-animation-duration: 1500ms; 
					                            animation-duration: 1500ms; 
					                }
					                .spinner--arcs-async .spinner__element--2 { 
					                    -webkit-animation-delay: 100ms; 
					                            animation-delay: 100ms;
					                }
					                .spinner--arcs-async .spinner__element--3 { 
					                    -webkit-animation-delay: 200ms; 
					                            animation-delay: 200ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/
					        
					            .spinner--arcs-async {
					                position: relative;
					            }

					            .spinner--arcs-async .spinner__element {
					                position: absolute;
					                width: 100%; height: 100%;
					                border-radius: 50%;

					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: linear;
					                        animation-timing-function: linear;
					            }

					            .spinner--arcs-async .spinner__element--1 {
					                -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
					                    -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
					                        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);

					                -webkit-animation-name: spinner--arcs-async-1st;   
					                        animation-name: spinner--arcs-async-1st; 
					            }
					            .spinner--arcs-async .spinner__element--2 { 
					                -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
					                    -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
					                        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);

					                -webkit-animation-name: spinner--arcs-async-2nd;   
					                        animation-name: spinner--arcs-async-2nd; 
					            }
					            .spinner--arcs-async .spinner__element--3 { 
					                -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
					                    -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
					                        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);

					                -webkit-animation-name: spinner--arcs-async-3rd;   
					                        animation-name: spinner--arcs-async-3rd; 
					            }

					        /* Animation */
					        /* ----------------------------------------*/

					                @-webkit-keyframes spinner--arcs-async-1st {
					                    to {
					                        -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                            -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                                transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                    }
					                }

					                @-webkit-keyframes spinner--arcs-async-2nd {
					                    to {
					                        -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                            -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                                transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                    }
					                }

					                @-webkit-keyframes spinner--arcs-async-3rd {
					                    to {
					                        -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                            -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                                transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                    }
					                }

					                @keyframes spinner--arcs-async-1st {
					                    to {
					                        -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                            -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                                transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
					                    }
					                }

					                @keyframes spinner--arcs-async-2nd {
					                    to {
					                        -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                            -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                                transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
					                    }
					                }

					                @keyframes spinner--arcs-async-3rd {
					                    to {
					                        -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                            -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                                transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
					                    }
					                }
					`
					} ,

				// spinner--bubbles
					{
					name : 'spinner--bubbles' ,
					code : 
					`    /* spinner--bubbles */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--bubbles {
					                    width:  100px;
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--bubbles .spinner__element::before {
					                    background-color: currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/

					                .spinner--bubbles .spinner__element::before { 
					                    -webkit-animation-duration: 3000ms; 
					                            animation-duration: 3000ms; 
					                }

					                .spinner--bubbles .spinner__element--2::before { 
					                    -webkit-animation-delay:  -375ms; 
					                            animation-delay:  -375ms; 
					                }
					                .spinner--bubbles .spinner__element--3::before { 
					                    -webkit-animation-delay:  -750ms; 
					                            animation-delay:  -750ms; 
					                }
					                .spinner--bubbles .spinner__element--4::before { 
					                    -webkit-animation-delay: -1125ms; 
					                            animation-delay: -1125ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/

					            .spinner--bubbles {
					                position: relative;
					            }

					            .spinner--bubbles .spinner__element {
					                position: absolute;
					                left: 50%;  top: 50%;
					                width: 20%; height: 100%;
					            }

					            .spinner--bubbles   .spinner__element--1 { 
					                -webkit-transform: translate(-50%, -50%);
					                    -ms-transform: translate(-50%, -50%);
					                        transform: translate(-50%, -50%);
					            }
					            .spinner--bubbles   .spinner__element--2 { 
					                -webkit-transform: translate(-50%, -50%) rotate(45deg);
					                    -ms-transform: translate(-50%, -50%) rotate(45deg);
					                        transform: translate(-50%, -50%) rotate(45deg);
					            }
					            .spinner--bubbles   .spinner__element--3 { 
					                -webkit-transform: translate(-50%, -50%) rotate(90deg);
					                    -ms-transform: translate(-50%, -50%) rotate(90deg);
					                        transform: translate(-50%, -50%) rotate(90deg);
					            }
					            .spinner--bubbles   .spinner__element--4 { 
					                -webkit-transform: translate(-50%, -50%) rotate(135deg);
					                    -ms-transform: translate(-50%, -50%) rotate(135deg);
					                        transform: translate(-50%, -50%) rotate(135deg);
					            }

					            .spinner--bubbles .spinner__element:before {
					                content: '';
					                position: absolute;
					                width:  100%; height: 20%;
					                border-radius: 50%;

					                -webkit-transform: translate3d(0, 0, 0);
					                    -ms-transform: translate3d(0, 0, 0);
					                        transform: translate3d(0, 0, 0);

					                -webkit-animation-name: spinner--bubbles;
					                        animation-name: spinner--bubbles;
					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: linear;
					                        animation-timing-function: linear;
					            }

					        /* Animation */
					        /* ----------------------------------------*/

					            @-webkit-keyframes spinner--bubbles {
					                0% , 100%  { 
					                    -webkit-transform: translate3d(0,   0 , 0) scale(1) ;
					                        -ms-transform: translate3d(0,   0 , 0) scale(1) ;
					                            transform: translate3d(0,   0 , 0) scale(1) ;
					                }
					                25% , 75% { 
					                    -webkit-transform: translate3d(0, 200%, 0) scale(.5);
					                        -ms-transform: translate3d(0, 200%, 0) scale(.5);
					                            transform: translate3d(0, 200%, 0) scale(.5);
					                }
					                50%  { 
					                    -webkit-transform: translate3d(0, 400%, 0) scale(1) ;
					                        -ms-transform: translate3d(0, 400%, 0) scale(1) ;
					                            transform: translate3d(0, 400%, 0) scale(1) ;
					                }
					            }
					            @keyframes spinner--bubbles {
					                0% , 100%  { 
					                    -webkit-transform: translate3d(0,   0 , 0) scale(1) ;
					                        -ms-transform: translate3d(0,   0 , 0) scale(1) ;
					                            transform: translate3d(0,   0 , 0) scale(1) ;
					                }
					                25% , 75% { 
					                    -webkit-transform: translate3d(0, 200%, 0) scale(.5);
					                        -ms-transform: translate3d(0, 200%, 0) scale(.5);
					                            transform: translate3d(0, 200%, 0) scale(.5);
					                }
					                50%  { 
					                    -webkit-transform: translate3d(0, 400%, 0) scale(1) ;
					                        -ms-transform: translate3d(0, 400%, 0) scale(1) ;
					                            transform: translate3d(0, 400%, 0) scale(1) ;
					                }
					            }
					`
					} ,

				// spinner--bubbles-pop
					{
					name : 'spinner--bubbles-pop' ,
					code : 
					`    /* spinner--bubbles-pop */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--bubbles-pop {
					                    width:  100px;
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--bubbles-pop .spinner__element::before {
					                    background-color: currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/

					                .spinner--bubbles-pop .spinner__element::before { 
					                    -webkit-animation-duration: 3000ms; 
					                            animation-duration: 3000ms; 
					                }

					                .spinner--bubbles-pop .spinner__element--2::before { 
					                    -webkit-animation-delay:  -375ms; 
					                            animation-delay:  -375ms; 
					                }
					                .spinner--bubbles-pop .spinner__element--3::before { 
					                    -webkit-animation-delay:  -750ms; 
					                            animation-delay:  -750ms; 
					                }
					                .spinner--bubbles-pop .spinner__element--4::before { 
					                    -webkit-animation-delay: -1125ms; 
					                            animation-delay: -1125ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/

					            .spinner--bubbles-pop {
					                position: relative;
					            }

					            .spinner--bubbles-pop .spinner__element {
					                position: absolute;
					                left: 50%;  top: 50%;
					                width: 20%; height: 100%;
					            }

					            .spinner--bubbles-pop   .spinner__element--1 { 
					                -webkit-transform: translate(-50%, -50%);
					                    -ms-transform: translate(-50%, -50%);
					                        transform: translate(-50%, -50%);
					            }
					            .spinner--bubbles-pop   .spinner__element--2 { 
					                -webkit-transform: translate(-50%, -50%) rotate(45deg);
					                    -ms-transform: translate(-50%, -50%) rotate(45deg);
					                        transform: translate(-50%, -50%) rotate(45deg);
					            }
					            .spinner--bubbles-pop   .spinner__element--3 { 
					                -webkit-transform: translate(-50%, -50%) rotate(90deg);
					                    -ms-transform: translate(-50%, -50%) rotate(90deg);
					                        transform: translate(-50%, -50%) rotate(90deg);
					            }
					            .spinner--bubbles-pop   .spinner__element--4 { 
					                -webkit-transform: translate(-50%, -50%) rotate(135deg);
					                    -ms-transform: translate(-50%, -50%) rotate(135deg);
					                        transform: translate(-50%, -50%) rotate(135deg);
					            }

					            .spinner--bubbles-pop .spinner__element:before {
					                content: '';
					                position: absolute;
					                width:  100%; height: 20%;
					                border-radius: 50%;

					                -webkit-transform: translate3d(0, 0, 0);
					                    -ms-transform: translate3d(0, 0, 0);
					                        transform: translate3d(0, 0, 0);

					                -webkit-animation-name: spinner--bubbles-pop;
					                        animation-name: spinner--bubbles-pop;
					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: linear;
					                        animation-timing-function: linear;
					            }

					        /* Animation */
					        /* ----------------------------------------*/



					            @-webkit-keyframes spinner--bubbles-pop {
					                0% , 100%  { 
					                    opacity: 1;
					                    -webkit-transform: translate3d(0,   0 , 0) scale(1.1) ;
					                        -ms-transform: translate3d(0,   0 , 0) scale(1.1) ;
					                            transform: translate3d(0,   0 , 0) scale(1.1) ;
					                }
					                2.5% { 
					                    opacity: 0;
					                    -webkit-transform: translate3d(0,   0 , 0) scale(1.5) ;
					                        -ms-transform: translate3d(0,   0 , 0) scale(1.5) ;
					                            transform: translate3d(0,   0 , 0) scale(1.5) ;
					                }
					                22.5% , 72.5% { 
					                    opacity: 0;
					                    -webkit-transform: translate3d(0, 200%, 0) scale(.5);
					                        -ms-transform: translate3d(0, 200%, 0) scale(.5);
					                            transform: translate3d(0, 200%, 0) scale(.5);
					                }
					                25% , 75% { 
					                    opacity: 1;
					                    -webkit-transform: translate3d(0, 200%, 0) scale(.5);
					                        -ms-transform: translate3d(0, 200%, 0) scale(.5);
					                            transform: translate3d(0, 200%, 0) scale(.5);
					                }
					                50%  { 
					                    opacity: 1;
					                    -webkit-transform: translate3d(0, 400%, 0) scale(1.1) ;
					                        -ms-transform: translate3d(0, 400%, 0) scale(1.1) ;
					                            transform: translate3d(0, 400%, 0) scale(1.1) ;
					                }
					                52.5% { 
					                    opacity: 0;
					                    -webkit-transform: translate3d(0, 400%, 0) scale(1.5) ;
					                        -ms-transform: translate3d(0, 400%, 0) scale(1.5) ;
					                            transform: translate3d(0, 400%, 0) scale(1.5) ;
					                }
					            }
					            }
					            @keyframes spinner--bubbles-pop {
					                0% , 100%  { 
					                    opacity: 1;
					                    -webkit-transform: translate3d(0,   0 , 0) scale(1.1) ;
					                        -ms-transform: translate3d(0,   0 , 0) scale(1.1) ;
					                            transform: translate3d(0,   0 , 0) scale(1.1) ;
					                }
					                2.5% { 
					                    opacity: 0;
					                    -webkit-transform: translate3d(0,   0 , 0) scale(1.5) ;
					                        -ms-transform: translate3d(0,   0 , 0) scale(1.5) ;
					                            transform: translate3d(0,   0 , 0) scale(1.5) ;
					                }
					                22.5% , 72.5% { 
					                    opacity: 0;
					                    -webkit-transform: translate3d(0, 200%, 0) scale(.5);
					                        -ms-transform: translate3d(0, 200%, 0) scale(.5);
					                            transform: translate3d(0, 200%, 0) scale(.5);
					                }
					                25% , 75% { 
					                    opacity: 1;
					                    -webkit-transform: translate3d(0, 200%, 0) scale(.5);
					                        -ms-transform: translate3d(0, 200%, 0) scale(.5);
					                            transform: translate3d(0, 200%, 0) scale(.5);
					                }
					                50%  { 
					                    opacity: 1;
					                    -webkit-transform: translate3d(0, 400%, 0) scale(1.1) ;
					                        -ms-transform: translate3d(0, 400%, 0) scale(1.1) ;
					                            transform: translate3d(0, 400%, 0) scale(1.1) ;
					                }
					                52.5% { 
					                    opacity: 0;
					                    -webkit-transform: translate3d(0, 400%, 0) scale(1.5) ;
					                        -ms-transform: translate3d(0, 400%, 0) scale(1.5) ;
					                            transform: translate3d(0, 400%, 0) scale(1.5) ;
					                }
					            }
					`
					} ,

				// spinner--yinyang
					{
					name : 'spinner--yinyang' ,
					code : 
					`    /* spinner--yinyang */
					    /* ----------------------------------------*/

					        /* Commonly modified properties */
					        /* ----------------------------------------*/

					            /* Container Background Color */
					            /* ----------------------------------------*/
					                .spinnerContainer { 
					                    background-color: black; 
					                }

					            /* Spinner Size - keep width and height equal */
					            /* ----------------------------------------*/
					                .spinner--yinyang {
					                    width:  100px;  
					                    height: 100px; 
					                    color: #FFFFFF;
					                }

					            /* Spinner Elements */ 
					            /* ----------------------------------------*/
					                .spinner--yinyang .spinner__element--1,
					                .spinner--yinyang .spinner__element--3,
					                .spinner--yinyang .spinner__element--4:before { 
					                    background-color: #000000;
					                }
					                .spinner--yinyang .spinner__element--2,
					                .spinner--yinyang .spinner__element--4,
					                .spinner--yinyang .spinner__element--3:before  { 
					                    background-color: currentColor;
					                }

					            /* Speed & Delay */
					            /* ----------------------------------------*/

					                .spinner--yinyang { 
					                    -webkit-animation-duration: 1500ms; 
					                            animation-duration: 1500ms; 
					                }

					        /* Container */
					        /* ----------------------------------------*/

					            .spinnerContainer {
					                position: relative;

					                display: -webkit-box;    display: -ms-flexbox;  
					                display: -webkit-flex;   display: flex;
					                justify-content: center; align-items: center;
					            }

					            /* Full Size | Disabled */
					            /* ----------------------------------------*/

					                .spinnerContainer.fixed-and-fullSize { 
					                    position: fixed; z-index: 9999;
					                    width: 100vw; height: 100vh;
					                    left: 0; top: 0;
					                }

					                .spinnerContainer.loader-disabled { 
					                    display: none !important; 
					                }

					        /* Style */
					        /* ----------------------------------------*/

					            .spinner--yinyang {
					                border-radius: 50%;
					                overflow: hidden;

					                -webkit-transform: translateZ(0) rotate(0deg);
					                    -ms-transform: translateZ(0) rotate(0deg);
					                        transform: translateZ(0) rotate(0deg); 

					                -webkit-animation-name: spinner--yinyang;
					                        animation-name: spinner--yinyang;
					                -webkit-animation-iteration-count: infinite;
					                        animation-iteration-count: infinite;
					                -webkit-animation-timing-function: linear;
					                        animation-timing-function: linear;
					            }

					            /* Large Circles */
					            .spinner--yinyang .spinner__element--1,
					            .spinner--yinyang .spinner__element--2 { 
					                position: absolute;
					                width: 50%; height: 100%;
					                top: 0;
					            }
					            .spinner--yinyang .spinner__element--1 { left:  0; }
					            .spinner--yinyang .spinner__element--2 { right: 0; }

					            /* Circle Overlays */
					            .spinner--yinyang .spinner__element--3,
					            .spinner--yinyang .spinner__element--4 {
					                position: absolute;
					                width: 50%;  height: 50%;
					                border-radius: 50%;
					                left: 25%;
					            }
					            .spinner--yinyang .spinner__element--3 { top:    0; }
					            .spinner--yinyang .spinner__element--4 { bottom: 0; }

					            /* Small circles */
					            .spinner--yinyang .spinner__element--3:before,
					            .spinner--yinyang .spinner__element--4:before {
					                content:'';
					                position: absolute;
					                top:   30%; left:   30%;
					                width: 40%; height: 40%;
					                border-radius: 50%;
					            }

					        /* Animation */
					        /* ----------------------------------------*/

					            @-webkit-keyframes spinner--yinyang {
					                to { 
					                    -webkit-transform: translateZ(0) rotate(359deg);
					                        -ms-transform: translateZ(0) rotate(359deg);
					                            transform: translateZ(0) rotate(359deg); 
					                }
					            }

					            @keyframes spinner--yinyang {
					                to { 
					                    -webkit-transform: translateZ(0) rotate(359deg);
					                        -ms-transform: translateZ(0) rotate(359deg);
					                            transform: translateZ(0) rotate(359deg); 
					                }
					            }
					`
					}
			];

			codeBlocks_css = byAndu_codeBlock_formatCodeString(codeBlocks_css);

		// Param Obj
		// --------------------------------

			var paramObj = {
				checkBoxes : {
					html         : demoItemsArray ,
					css          : demoItemsArray ,
					css_singular : demoItemsArray
				} ,

				codeBlocks : {
					css          : codeBlocks_css ,
					css_singular : codeBlocks_css
				} ,

				removeString : '' ,
				demoItems_codeLink : codeBlocks_css
			};

			byAndu.pageConfigObj_setupObj(paramObj);
			byAndu.pageConfigObj_runConfig();

        // Generate codeBlocks - HTML
        // --------------------------------

            var htmlCodeContainer = document.getElementById('codeSection-html');

            demoItemsArray.map(function(spinnerClass){

                var newElem = document.createElement('PRE');

                newElem.classList = 'finalCode-block hidden';
                newElem.classList.add('finalCode-block-'+spinnerClass);
                newElem.setAttribute('data-finalCodeId', spinnerClass);

                var innerHTMLString = '';

				switch (spinnerClass) {
					case 'spinner--bars' :
					case 'spinner--arcs-sync' :
					case 'spinner--arcs-async' :
						innerHTMLString =
							"\n" +
							'            &lt;div class="spinner__element spinner__element--1"> &lt;/div> '+ "\n" +
							'            &lt;div class="spinner__element spinner__element--2"> &lt;/div> '+ "\n" +
							'            &lt;div class="spinner__element spinner__element--3"> &lt;/div> '+ "\n" + '        ';
						break;

					case 'spinner--bubbles' :
					case 'spinner--bubbles-pop' :
					case 'spinner--yinyang' :
						innerHTMLString =
							"\n" +
							'            &lt;div class="spinner__element spinner__element--1"> &lt;/div> '+ "\n" +
							'            &lt;div class="spinner__element spinner__element--2"> &lt;/div> '+ "\n" +
							'            &lt;div class="spinner__element spinner__element--3"> &lt;/div> '+ "\n" +
							'            &lt;div class="spinner__element spinner__element--4"> &lt;/div> '+ "\n" + '        ';
						break;

					default: 
						break;
				};

                newElem.innerHTML = 
                    '    &lt;div class="spinnerContainer"> '									+ "\n" +
                    '        &lt;div class="'+spinnerClass+'">'+innerHTMLString+'&lt;/div> '	+ "\n" +
                    '    &lt;/div> '                          									;

                htmlCodeContainer.appendChild(newElem);
            });

            htmlCodeContainer.getElementsByClassName('finalCode-block')[0].classList.remove('hidden');


        // Generate radios - III usage - generateHTML Markup
        // --------------------------------

        	var radioBtns_HTMLString  = '';
			var codeOutput_HTMLString = '';
			var spinner_HTMLString    = '';

			var spinnerInnerHTMLString = '';

        	demoItemsArray.map(function(item){

				switch (item) {
					case 'spinner--bars' :
					case 'spinner--arcs-sync' :
					case 'spinner--arcs-async' :
						spinnerInnerHTMLString =
							' \n    <div class="spinner__element spinner__element--1"> </div> \n'+
							'    <div class="spinner__element spinner__element--2"> </div> \n'+
							'    <div class="spinner__element spinner__element--3"> </div> \n';
						break;

					case 'spinner--bubbles' :
					case 'spinner--bubbles-pop' :
					case 'spinner--yinyang' :
						spinnerInnerHTMLString =
							' \n    <div class="spinner__element spinner__element--1"> </div> \n'+
							'    <div class="spinner__element spinner__element--2"> </div> \n'+
							'    <div class="spinner__element spinner__element--3"> </div> \n'+
							'    <div class="spinner__element spinner__element--4"> </div> \n';
						break;

					default: 
						break;
				};

				spinner_HTMLString   += '<div class="'+item+' spinner-example hidden">'+spinnerInnerHTMLString+' </div> ';

				codeOutput_HTMLString += 
					'<div class="pre__item pre__item--'+item+' hidden"> ' +
						'&lt;div class="'+item+'">'+spinnerInnerHTMLString.replace(/\</g, "&lt;")+' &lt;/div> ' +
					'</div> ';

        		radioBtns_HTMLString += 
        			'<label class="col-6 sm-col-12 lg-col-6 mt-xs"> ' +
        				'<input type="radio" class="spinner--usage-htmlMarkup--radio" name="spinner--usage-htmlMarkup--radio" data-value="'+item+'"/> ' +
        				item.replace('spinner--', '') +
        			'</label>';
        	});

			document.getElementById('spinner--usage-htmlMarkup--example').innerHTML = spinner_HTMLString;
        	document.getElementById('spinner--usage-htmlMarkup--example').getElementsByClassName('hidden')[0].classList.remove('hidden');
        	document.getElementById('spinner--usage-htmlMarkup--radioContainer').innerHTML = radioBtns_HTMLString;
        	document.getElementById('spinner--usage-htmlMarkup--radioContainer').getElementsByClassName('spinner--usage-htmlMarkup--radio')[0].checked = 'checked';
        	document.getElementById('spinner--usage-htmlMarkup--output').innerHTML = codeOutput_HTMLString;
        	document.getElementById('spinner--usage-htmlMarkup--output').getElementsByClassName('hidden')[0].classList.remove('hidden');


        	asterisk.route.currentPage.eventHandlers.generateHTMLMarkupAndShowExample = function(e) {

        		var currentClass = e.target.getAttribute('data-value');
        		var outputClass = 'pre__item--'+currentClass;

        		Array.from(document.getElementById('spinner--usage-htmlMarkup--output').getElementsByClassName('pre__item')).map(function(x){
        			if (hasClass(x , outputClass)) 	{ x.classList.remove('hidden') }
        			else 							{ x.classList.add   ('hidden') }
        		});
        		Array.from(document.getElementById('spinner--usage-htmlMarkup--example').getElementsByClassName('spinner-example')).map(function(x){
        			if (hasClass(x , currentClass)) { x.classList.remove('hidden') }
        			else 							{ x.classList.add   ('hidden') }
        		});

        	};

        	Array.from(document.getElementById('spinner--usage-htmlMarkup--radioContainer').getElementsByClassName('spinner--usage-htmlMarkup--radio')).map(function(x){
        		asterisk.route.currentPage.addEvent(
					x , 
					'change' , 
					asterisk.route.currentPage.eventHandlers.generateHTMLMarkupAndShowExample
				);
        	});

	})();
