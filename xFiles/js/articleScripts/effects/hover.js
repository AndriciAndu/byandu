
	(function(){

		var demoItemsArray = [

			/* 2D Transitions */	
				'~~title: 2D Transitions',

				'hvr-push-up-alt'		,	'hvr-push-down-alt'	,
				'hvr-buzz'				,	'hvr-buzz-out'		,

			/* Background */
				'~~title: Background',
																									'~~line-break',
				'hvr-bg-sweep-left'			,	'hvr-bg-sweep-right'	,	'hvr-bg-sweep-top'	,	'hvr-bg-sweep-btm'	,	
				'hvr-bg-bounce-left'		,	'hvr-bg-bounce-right'	,	'hvr-bg-bounce-top'	,	'hvr-bg-bounce-btm'	,	
				'hvr-bg-radial-out'			,	'hvr-bg-radial-in'		,
				'hvr-bg-rectangle-out'		,	'hvr-bg-rectangle-in'	,
				'hvr-bg-shutter-out-hor'	,	'hvr-bg-shutter-in-hor'	,
				'hvr-bg-shutter-out-ver'	,	'hvr-bg-shutter-in-ver'	,

			/* Borders */
				'~~title: Borders',

				'hvr-border-fade'			,	'hvr-border-reveal'			    ,									                                 '~~line-break'	,
				'hvr-border-reveal-left'	,	'hvr-border-reveal-right'		,	'hvr-border-reveal-top'		,	'hvr-border-reveal-btm'							,	
				'hvr-border-outline-out'	,	'hvr-border-outline-in'			,																	'~~line-break'	,
				'hvr-border-underline-left'	,	'hvr-border-underline-center'	,	'hvr-border-underline-right',									'~~line-break'	,
				'hvr-border-overline-left'	,	'hvr-border-overline-center'	,	'hvr-border-overline-right'	,									'~~line-break'	,

			/* Shadow */
				'~~title: Shadow',

				'hvr-shadow-glow'			,																										'~~line-break'	,
				'hvr-shadow-push-left'		,	'hvr-shadow-push-right'			,	'hvr-shadow-push-top'		,	'hvr-shadow-push-btm'		,

			/* Bubble */
				'~~title: Bubble',

				'hvr-bubble-left'		,	'hvr-bubble-right'		,	'hvr-bubble-top'		,	'hvr-bubble-btm'		,	
				'hvr-bubble-push-left'	,	'hvr-bubble-push-right'	,	'hvr-bubble-push-top'	,	'hvr-bubble-push-btm'		
		];

		// Generate demos
		// --------------------------------

			var generateDemos_container = document.getElementById('__route__mainView__generateDemos');

			demoItemsArray.map(function(effect) {

				var newElem = document.createElement('div');

				if (effect.indexOf('~~') == -1) {

					newElem.classList = 'col-6 sm-col-4 md-col-3 p-xs';
					newElem.innerHTML = 
						'<div class="demoItem-container demoItem-container-'+effect+'" data-finalCodeId='+effect+'> '	+
							'<div class="col-12 demoItem '+effect+'"> '+effect+' </div> ' 								+
						'</div> '																						;
				
				} else if (effect == '~~line-break') {

					newElem.classList = 'col-12';

				} else {

					newElem.classList = 'col-12 demo-category-title';
					newElem.innerHTML = effect.replace('~~title: ', '');

				};

				generateDemos_container.appendChild(newElem)
			});

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// General Init
					{
					name : null ,
					code : 	
					`    /* Shared */
				    /* ---------------------------- */

				        [class^='hvr-'], [class*=' hvr-'] { 
				            position: relative;
				            display: inline-block;
				            overflow: hidden;

				            box-shadow: 0 0 1px transparent;
				            -webkit-transform: perspective(1px);
				                -ms-transform: perspective(1px);
				                    transform: perspective(1px);

				            --hvr-bgColor:      #2098D1;  /* colors for [background] effects  */
				            --hvr-borderColor:  #008080;  /* colors for [border] effects      */
				            --hvr-shadowColor:  #2098D1;  /* colors for [shadow] effects      */
				            --hvr-bubbleColor:  #008080;  /* colors for [bubble] effects      */

				            color: #FFFFFF; 
				            color: var(--btn-color, #FFFFFF);

				            background-color: #008080;
				            background-color: var(--btn-bgColor, #008080);
				        }

				    /* Button Hover Effects  */
				    /* ---------------------------- */
					`
					},

				// 2D Transitions
					{
					name : null ,
					code : 	
					`        /* 2D Transitions */
				        /* ---------------------------- */
				    `
					},

				// hvr-push-up-alt
					{
					name : 'hvr-push-up-alt' ,
					code : 	
					`            /* Hover - push-up-alt */
				            /* ---------------------------- */

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
				                }
					`
					},

				// hvr-push-down-alt
					{
					name : 'hvr-push-down-alt' ,
					code : 	
					`            /* Hover - push-down-alt */
				            /* ---------------------------- */

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
				                }
					`
					},

				// hvr-buzz
					{
					name : 'hvr-buzz' ,
					code : 	
					`            /* Hover - Buzz */
				            /* ---------------------------- */

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
				                }
					`
					},

				// hvr-buzz-out
					{
					name : 'hvr-buzz-out' ,
					code : 	
					`            /* Hover - Buzz Out */
				            /* ---------------------------- */

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
				                }
					`
					},

				// Background Transitions
					{
					name : null ,
					code : 	
					`        /* Background Transitions */
				        /* ---------------------------- */
					`
					},

				// hvr-bg-sweep-left
					{
					name : 'hvr-bg-sweep-left' ,
					code : 	
					`            /* Hover - bg-sweep-left */
				            /* ---------------------------- */

				                .hvr-bg-sweep-left::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin: 0 50%;
				                        -ms-transform-origin: 0 50%;
				                            transform-origin: 0 50%;

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-sweep-left:hover::after  , 
				                .hvr-bg-sweep-left:focus::after  , 
				                .hvr-bg-sweep-left:active::after {
				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
					`
					},

				// hvr-bg-sweep-right
					{
					name : 'hvr-bg-sweep-right' ,
					code : 	
					`            /* Hover - bg-sweep-right */
				            /* ---------------------------- */

				                .hvr-bg-sweep-right::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin: 100% 50%;
				                        -ms-transform-origin: 100% 50%;
				                            transform-origin: 100% 50%;

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-sweep-right:hover::after  , 
				                .hvr-bg-sweep-right:focus::after  , 
				                .hvr-bg-sweep-right:active::after {
				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
					`
					},

				// hvr-bg-sweep-top
					{
					name : 'hvr-bg-sweep-top' ,
					code : 	
					`            /* Hover - bg-sweep-top */
				            /* ---------------------------- */

				                .hvr-bg-sweep-top::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin: 50% 0%;
				                        -ms-transform-origin: 50% 0%;
				                            transform-origin: 50% 0%;

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-sweep-top:hover::after  , 
				                .hvr-bg-sweep-top:focus::after  , 
				                .hvr-bg-sweep-top:active::after {
				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
					`
					},

				// hvr-bg-sweep-btm
					{
					name : 'hvr-bg-sweep-btm' ,
					code : 	
					`            /* Hover - bg-sweep-btm */
				            /* ---------------------------- */

				                .hvr-bg-sweep-btm::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin: 50% 100%;
				                        -ms-transform-origin: 50% 100%;
				                            transform-origin: 50% 100%;

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-sweep-btm:hover::after  , 
				                .hvr-bg-sweep-btm:focus::after  , 
				                .hvr-bg-sweep-btm:active::after {
				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
					`
					},

				// hvr-bg-bounce-left
					{
					name : 'hvr-bg-bounce-left' ,
					code : 	
					`            /* Hover - bg-bounce-left */
				            /* ---------------------------- */

				                .hvr-bg-bounce-left::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;
				                    
				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin:  0%   50% ;
				                        -ms-transform-origin:  0%   50% ;
				                            transform-origin:  0%   50% ; 

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-bounce-left:hover::after  ,
				                .hvr-bg-bounce-left:focus::after  ,
				                .hvr-bg-bounce-left:active::after {
				                    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                       -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                         -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);

				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
					`
					},

				// hvr-bg-bounce-right
					{
					name : 'hvr-bg-bounce-right' ,
					code : 	
					`            /* Hover - bg-bounce-right */
				            /* ---------------------------- */

				                .hvr-bg-bounce-right::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;
				                    
				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin: 100%  50% ;
				                        -ms-transform-origin: 100%  50% ;
				                            transform-origin: 100%  50% ; 

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-bounce-right:hover::after  , 
				                .hvr-bg-bounce-right:focus::after  , 
				                .hvr-bg-bounce-right:active::after {
				                    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                       -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                         -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);

				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
					`
					},

				// hvr-bg-bounce-top
					{
					name : 'hvr-bg-bounce-top' ,
					code : 	
					`            /* Hover - bg-bounce-top */
				            /* ---------------------------- */

				                .hvr-bg-bounce-top::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;
				                    
				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin:  50%   0% ;
				                        -ms-transform-origin:  50%   0% ;
				                            transform-origin:  50%   0% ; 

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-bounce-top:hover::after  , 
				                .hvr-bg-bounce-top:focus::after  , 
				                .hvr-bg-bounce-top:active::after {
				                    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                       -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                         -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);

				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
					`
					},

				// hvr-bg-bounce-btm
					{
					name : 'hvr-bg-bounce-btm' ,
					code : 	
					`            /* Hover - bg-bounce-btm */
				            /* ---------------------------- */

				                .hvr-bg-bounce-btm::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;
				                    
				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin:  50% 100% ;
				                        -ms-transform-origin:  50% 100% ;
				                            transform-origin:  50% 100% ; 

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-bounce-btm:hover::after  , 
				                .hvr-bg-bounce-btm:focus::after  , 
				                .hvr-bg-bounce-btm:active::after {
				                    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                       -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                         -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);

				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
					`
					},

				// hvr-bg-radial-out
					{
					name : 'hvr-bg-radial-out' ,
					code : 	
					`            /* Hover - bg-radial-out */
				            /* ---------------------------- */

				                .hvr-bg-radial-out::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    left: 50%; top: 50%;
				                    width: 100%; padding-bottom: 100%;

				                    border-radius: 100%;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: translate(-50%, -50%) scale(0);
				                        -ms-transform: translate(-50%, -50%) scale(0);
				                            transform: translate(-50%, -50%) scale(0);
				                }

				                .hvr-bg-radial-out:hover::after  , 
				                .hvr-bg-radial-out:focus::after  , 
				                .hvr-bg-radial-out:active::after {
				                    -webkit-transform: translate(-50%, -50%) scale(1.2);
				                        -ms-transform: translate(-50%, -50%) scale(1.2);
				                            transform: translate(-50%, -50%) scale(1.2);
				                }
					`
					},

				// hvr-bg-radial-in
					{
					name : 'hvr-bg-radial-in' ,
					code : 	
					`            /* Hover - bg-radial-in */
				            /* ---------------------------- */

				                .hvr-bg-radial-in::after  {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    left: 50%; top: 50%;
				                    width: 100%; padding-bottom: 100%;

				                    border-radius: 100%;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: translate(-50%, -50%) scale(1.2);
				                        -ms-transform: translate(-50%, -50%) scale(1.2);
				                            transform: translate(-50%, -50%) scale(1.2);
				                }

				                .hvr-bg-radial-in:hover::after  , 
				                .hvr-bg-radial-in:focus::after  , 
				                .hvr-bg-radial-in:active::after {
				                    -webkit-transform: translate(-50%, -50%) scale(0);
				                        -ms-transform: translate(-50%, -50%) scale(0);
				                            transform: translate(-50%, -50%) scale(0);
				                }
					`
					},

				// hvr-bg-rectangle-out
					{
					name : 'hvr-bg-rectangle-out' ,
					code : 	
					`            /* Hover - bg-rectangle-out */
				            /* ---------------------------- */

				                .hvr-bg-rectangle-out::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scale(0);
				                        -ms-transform: scale(0);
				                            transform: scale(0);
				                }

				                .hvr-bg-rectangle-out:hover::after  , 
				                .hvr-bg-rectangle-out:focus::after  , 
				                .hvr-bg-rectangle-out:active::after {
				                    -webkit-transform: scale(1);
				                        -ms-transform: scale(1);
				                            transform: scale(1);
				                }
					`
					},

				// hvr-bg-rectangle-in
					{
					name : 'hvr-bg-rectangle-in' ,
					code : 	
					`            /* Hover - bg-rectangle-in */
				            /* ---------------------------- */

				                .hvr-bg-rectangle-in::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #008080;
				                    background-color: var(--btn-bgColor, #008080);

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scale(1);
				                        -ms-transform: scale(1);
				                            transform: scale(1);
				                }

				                .hvr-bg-rectangle-in:hover::after  , 
				                .hvr-bg-rectangle-in:focus::after  , 
				                .hvr-bg-rectangle-in:active::after {
				                    -webkit-transform: scale(0);
				                        -ms-transform: scale(0);
				                            transform: scale(0);
				                }
					`
					},

				// hvr-bg-shutter-out-hor
					{
					name : 'hvr-bg-shutter-out-hor' ,
					code : 	
					`            /* Hover - bg-shutter-out-hor */
				            /* ---------------------------- */

				                .hvr-bg-shutter-out-hor::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transform-origin: 50%;
				                        -ms-transform-origin: 50%;
				                            transform-origin: 50%;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-shutter-out-hor:hover::after  ,
				                .hvr-bg-shutter-out-hor:focus::after  ,
				                .hvr-bg-shutter-out-hor:active::after {
				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
					`
					},

				// hvr-bg-shutter-in-hor
					{
					name : 'hvr-bg-shutter-in-hor' ,
					code : 	
					`            /* Hover - bg-shutter-in-hor */
				            /* ---------------------------- */

				                .hvr-bg-shutter-in-hor::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #008080;
				                    background-color: var(--btn-bgColor, #008080);

				                    -webkit-transform-origin: 50%;
				                        -ms-transform-origin: 50%;
				                            transform-origin: 50%;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }

				                .hvr-bg-shutter-in-hor:hover::after  ,
				                .hvr-bg-shutter-in-hor:focus::after  , 
				                .hvr-bg-shutter-in-hor:active::after {
				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }
					`
					},

				// hvr-bg-shutter-out-ver
					{
					name : 'hvr-bg-shutter-out-ver' ,
					code : 	
					`            /* Hover - bg-shutter-out-ver */
				            /* ---------------------------- */

				                .hvr-bg-shutter-out-ver::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-bgColor, #2098D1);

				                    -webkit-transform-origin: 50%;
				                        -ms-transform-origin: 50%;
				                            transform-origin: 50%;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-shutter-out-ver:hover::after  ,
				                .hvr-bg-shutter-out-ver:focus::after  ,
				                .hvr-bg-shutter-out-ver:active::after {
				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
					`
					},

				// hvr-bg-shutter-in-ver
					{
					name : 'hvr-bg-shutter-in-ver' ,
					code : 	
					`            /* Hover - bg-shutter-in-ver */
				            /* ---------------------------- */

				                .hvr-bg-shutter-in-ver::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #008080;
				                    background-color: var(--btn-bgColor, #008080);

				                    -webkit-transform-origin: 50%;
				                        -ms-transform-origin: 50%;
				                            transform-origin: 50%;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }

				                .hvr-bg-shutter-in-ver:hover::after  ,
				                .hvr-bg-shutter-in-ver:focus::after  ,
				                .hvr-bg-shutter-in-ver:active::after {
				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }
					`
					},

				// Border Transitions
					{
					name : null ,
					code : 	
					`        /* Border Transitions */
				        /* ---------------------------- */
					`
					},

				// hvr-border-fade
					{
					name : 'hvr-border-fade' ,
					code : 	
					`            /* Hover - border-fade */
				            /* ---------------------------- */

				                .hvr-border-fade::after   {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;

				                    -webkit-transition: border-color  0.3s;
				                       -moz-transition: border-color  0.3s;
				                         -o-transition: border-color  0.3s;
				                            transition: border-color  0.3s;

				                    border: 4px solid transparent;  
				                }

				                .hvr-border-fade:hover::after  , 
				                .hvr-border-fade:focus::after  , 
				                .hvr-border-fade:active::after {
				                    border-color: #2098D1;
				                    border-color: var(--hvr-borderColor, #2098D1);
				                }
					`
					},

				// hvr-border-reveal
					{
					name : 'hvr-border-reveal' ,
					code : 	
					`            /* Hover - border-reveal */
				            /* ---------------------------- */

				                .hvr-border-reveal::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;

				                    border: 0 solid #2098D1;
				                    border: 0 solid var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: border-width 0.1s ease-out;
				                       -moz-transition: border-width 0.1s ease-out;
				                         -o-transition: border-width 0.1s ease-out;
				                            transition: border-width 0.1s ease-out;
				                }

				                .hvr-border-reveal:hover::after   , 
				                .hvr-border-reveal:focus::after  , 
				                .hvr-border-reveal:active::after { 
				                    border-width: 4px; 
				                }
					`
					},

				// hvr-border-reveal-left
					{
					name : 'hvr-border-reveal-left' ,
					code : 	
					`            /* Hover - border-reveal-left */
				            /* ---------------------------- */

				                .hvr-border-reveal-left::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;
				                    
				                    border: 0 solid #2098D1;
				                    border: 0 solid var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: border-width 0.1s ease-out;
				                       -moz-transition: border-width 0.1s ease-out;
				                         -o-transition: border-width 0.1s ease-out;
				                            transition: border-width 0.1s ease-out;
				                }

				                .hvr-border-reveal-left:hover::after  , 
				                .hvr-border-reveal-left:focus::after  , 
				                .hvr-border-reveal-left:active::after { 
				                    border-left-width: 4px; 
				                }
					`
					},

				// hvr-border-reveal-right
					{
					name : 'hvr-border-reveal-right' ,
					code : 	
					`            /* Hover - border-reveal-right */
				            /* ---------------------------- */

				                .hvr-border-reveal-right::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;
				                    
				                    border: 0 solid #2098D1;
				                    border: 0 solid var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: border-width 0.1s ease-out;
				                       -moz-transition: border-width 0.1s ease-out;
				                         -o-transition: border-width 0.1s ease-out;
				                            transition: border-width 0.1s ease-out;
				                }

				                .hvr-border-reveal-right:hover::after  , 
				                .hvr-border-reveal-right:focus::after  , 
				                .hvr-border-reveal-right:active::after { 
				                    border-right-width: 4px; 
				                }
					`
					},

				// hvr-border-reveal-top
					{
					name : 'hvr-border-reveal-top' ,
					code : 	
					`            /* Hover - border-reveal-top */
				            /* ---------------------------- */

				                .hvr-border-reveal-top::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;
				                    
				                    border: 0 solid #2098D1;
				                    border: 0 solid var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: border-width 0.1s ease-out;
				                       -moz-transition: border-width 0.1s ease-out;
				                         -o-transition: border-width 0.1s ease-out;
				                            transition: border-width 0.1s ease-out;
				                }

				                .hvr-border-reveal-top:hover::after  , 
				                .hvr-border-reveal-top:focus::after  , 
				                .hvr-border-reveal-top:active::after { 
				                    border-top-width: 4px; 
				                }
					`
					},

				// hvr-border-reveal-btm
					{
					name : 'hvr-border-reveal-btm' ,
					code : 	
					`            /* Hover - border-reveal-btm */
				            /* ---------------------------- */

				                .hvr-border-reveal-btm::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;
				                    
				                    border: 0 solid #2098D1;
				                    border: 0 solid var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: border-width 0.1s ease-out;
				                       -moz-transition: border-width 0.1s ease-out;
				                         -o-transition: border-width 0.1s ease-out;
				                            transition: border-width 0.1s ease-out;
				                }

				                .hvr-border-reveal-btm:hover::after  , 
				                .hvr-border-reveal-btm:focus::after  , 
				                .hvr-border-reveal-btm:active::after { 
				                    border-bottom-width: 4px; 
				                }
					`
					},

				// hvr-border-outline-out
					{
					name : 'hvr-border-outline-out' ,
					code : 	
					`            /* Hover - border-outline-out */
				            /* ---------------------------- */

				                .hvr-border-outline-out {
				                    overflow: visible;
				                }

				                .hvr-border-outline-out::after {
				                    content: '';
				                    position: absolute;

				                    top:       0;   
				                    right:     0;   
				                    bottom:    0;   
				                    left:      0;
				                    opacity:   0;

				                    border: 4px solid #2098D1;
				                    border: 4px solid var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                       -moz-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                         -o-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                            transition: top .3s, bottom .3s, left .3s, right .3s;
				                }

				                .hvr-border-outline-out:hover::after  , 
				                .hvr-border-outline-out:focus::after  , 
				                .hvr-border-outline-out:active::after {
				                    top:    -8px;
				                    right:  -8px;
				                    bottom: -8px;
				                    left:   -8px;
				                    opacity:   1;
				                }
					`
					},

				// hvr-border-outline-in
					{
					name : 'hvr-border-outline-in' ,
					code : 	
					`            /* Hover - border-outline-in */
				            /* ---------------------------- */

				                .hvr-border-outline-in {
				                    overflow: visible;
				                }

				                .hvr-border-outline-in::after    {
				                    content: '';
				                    position: absolute;

				                    top:    -16px;  
				                    right:  -16px;  
				                    bottom: -16px;  
				                    left:   -16px;
				                    opacity:    0;

				                    border: 4px solid #2098D1;
				                    border: 4px solid var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                       -moz-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                         -o-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                            transition: top .3s, bottom .3s, left .3s, right .3s;
				                }

				                .hvr-border-outline-in:hover::after   , 
				                .hvr-border-outline-in:focus::after   , 
				                .hvr-border-outline-in:active::after  {
				                    top:    -8px;
				                    right:  -8px;
				                    bottom: -8px;
				                    left:   -8px;
				                    opacity:   1;
				                }
					`
					},

				// hvr-border-underline-left
					{
					name : 'hvr-border-underline-left' ,
					code : 	
					`            /* Hover - border-underline-left */
				            /* ---------------------------- */

				                .hvr-border-underline-left::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-underline-left::after { left: 0; right: 100%; bottom: 0; }

				                .hvr-border-underline-left:hover::after  , 
				                .hvr-border-underline-left:focus::after  , 
				                .hvr-border-underline-left:active::after { 
				                    right: 0; 
				                }
					`
					},

				// hvr-border-underline-center
					{
					name : 'hvr-border-underline-center' ,
					code : 	
					`            /* Hover - border-underline-center */
				            /* ---------------------------- */

				                .hvr-border-underline-center::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-underline-center::after { left: 50%; right: 50%; bottom: 0; }

				                .hvr-border-underline-center:hover::after  , 
				                .hvr-border-underline-center:focus::after  , 
				                .hvr-border-underline-center:active::after { 
				                    right: 0; left: 0; 
				                }
					`
					},

				// hvr-border-underline-right
					{
					name : 'hvr-border-underline-right' ,
					code : 	
					`            /* Hover - border-underline-right */
				            /* ---------------------------- */

				                .hvr-border-underline-right::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-underline-right::after { left: 100%; right: 0; bottom: 0; }

				                .hvr-border-underline-right:hover::after  , 
				                .hvr-border-underline-right:focus::after  , 
				                .hvr-border-underline-right:active::after { 
				                    left: 0; 
				                }
					`
					},

				// hvr-border-overline-left
					{
					name : 'hvr-border-overline-left' ,
					code : 	
					`            /* Hover - border-overline-left */
				            /* ---------------------------- */

				                .hvr-border-overline-left::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-overline-left::after  { left: 0; right: 100%; top: 0; }

				                .hvr-border-overline-left:hover::after  , 
				                .hvr-border-overline-left:focus::after  , 
				                .hvr-border-overline-left:active::after { 
				                    right: 0; 
				                }
					`
					},

				// hvr-border-overline-center
					{
					name : 'hvr-border-overline-center' ,
					code : 	
					`            /* Hover - border-overline-center */
				            /* ---------------------------- */

				                .hvr-border-overline-center::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-overline-center::after  { left: 50%; right: 50%; top: 0; }

				                .hvr-border-overline-center:hover::after  , 
				                .hvr-border-overline-center:focus::after  , 
				                .hvr-border-overline-center:active::after { 
				                    right: 0; left: 0; 
				                }
					`
					},

				// hvr-border-overline-right
					{
					name : 'hvr-border-overline-right' ,
					code : 	
					`            /* Hover - border-overline-right */
				            /* ---------------------------- */

				                .hvr-border-overline-right::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;
				                    background-color: var(--hvr-borderColor, #2098D1);

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-overline-right::after  { left: 100%; right: 0; top: 0; }

				                .hvr-border-overline-right:hover::after  , 
				                .hvr-border-overline-right:focus::after  , 
				                .hvr-border-overline-right:active::after { 
				                    left: 0; 
				                }
					`
					},

				// Shadow and Glow Transitions
					{
					name : null ,
					code : 	
					`        /* Shadow and Glow Transitions */
				        /* ---------------------------- */
					`
					},

				// hvr-shadow-glow
					{
					name : 'hvr-shadow-glow' ,
					code : 	
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
				                    box-shadow: 0 0 8px var(--hvr-shadowColor, #2098D1);
				                }
					`
					},

				// hvr-shadow-push-left
					{
					name : 'hvr-shadow-push-left' ,
					code : 	
					`            /* Hover - shadow-push-left */
				            /* ---------------------------- */

				                .hvr-shadow-push-left {
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;
				                }

				                .hvr-shadow-push-left:hover  , 
				                .hvr-shadow-push-left:focus  , 
				                .hvr-shadow-push-left:active {
				                    -webkit-transform: translateX(-5px);
				                        -ms-transform: translateX(-5px);
				                            transform: translateX(-5px); 
				                }

				                .hvr-shadow-push-left::after {
				                    position: absolute; z-index: -1;
				                    content: ''; pointer-events: none;
				                    opacity: 0;

				                    background: -webkit-radial-gradient(center,  ellipse,  #2098D1                            0%, transparent 80%);
				                    background: -webkit-radial-gradient(center,  ellipse,  var(--hvr-shadowColor, #2098D1) 0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, #2098D1                            0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, var(--hvr-shadowColor, #2098D1) 0%, transparent 80%);

				                    top:      5%;  left:   100%;  
				                    height:  90%;  width:  10px;

				                    -webkit-transition: transform 0.3s, opacity 0.3s;
				                       -moz-transition: transform 0.3s, opacity 0.3s;
				                         -o-transition: transform 0.3s, opacity 0.3s;
				                            transition: transform 0.3s, opacity 0.3s;
				                }

				                .hvr-shadow-push-left:hover::after  , 
				                .hvr-shadow-push-left:focus::after  , 
				                .hvr-shadow-push-left:active::after {
				                    opacity: 1;
				                    -webkit-transform: translateX(5px);
				                        -ms-transform: translateX(5px);
				                            transform: translateX(5px);
				                }
					`
					},

				// hvr-shadow-push-right
					{
					name : 'hvr-shadow-push-right' ,
					code : 	
					`            /* Hover - shadow-push-right */
				            /* ---------------------------- */
				 
				                .hvr-shadow-push-right {
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;
				                }

				                .hvr-shadow-push-right:hover  , 
				                .hvr-shadow-push-right:focus  , 
				                .hvr-shadow-push-right:active {
				                    -webkit-transform: translateX(5px);
				                        -ms-transform: translateX(5px);
				                            transform: translateX(5px);  
				                }

				                .hvr-shadow-push-right::after {
				                    position: absolute; z-index: -1;
				                    content: ''; pointer-events: none;
				                    opacity: 0;

				                    background: -webkit-radial-gradient(center,  ellipse,  #2098D1                            0%, transparent 80%);
				                    background: -webkit-radial-gradient(center,  ellipse,  var(--hvr-shadowColor, #2098D1) 0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, #2098D1                            0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, var(--hvr-shadowColor, #2098D1) 0%, transparent 80%);

				                    top:      5%;  right:  100%;  
				                    height:  90%;  width:  10px;

				                    -webkit-transition: transform 0.3s, opacity 0.3s;
				                       -moz-transition: transform 0.3s, opacity 0.3s;
				                         -o-transition: transform 0.3s, opacity 0.3s;
				                            transition: transform 0.3s, opacity 0.3s;
				                }

				                .hvr-shadow-push-right:hover::after  , 
				                .hvr-shadow-push-right:focus::after  , 
				                .hvr-shadow-push-right:active::after {
				                    opacity: 1;
				                    -webkit-transform: translateX(-5px);
				                        -ms-transform: translateX(-5px);
				                            transform: translateX(-5px); 
				                }
					`
					},

				// hvr-shadow-push-top
					{
					name : 'hvr-shadow-push-top' ,
					code : 	
					`            /* Hover - shadow-push-top */
				            /* ---------------------------- */

				                .hvr-shadow-push-top {
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;
				                }

				                .hvr-shadow-push-top:hover  , 
				                .hvr-shadow-push-top:focus  , 
				                .hvr-shadow-push-top:active {
				                    -webkit-transform: translateY(5px);
				                        -ms-transform: translateY(5px); 
				                            transform: translateY(5px);  
				                }

				                .hvr-shadow-push-top::after {
				                    position: absolute; z-index: -1;
				                    content: ''; pointer-events: none;
				                    opacity: 0;

				                    background: -webkit-radial-gradient(center,  ellipse,  #2098D1                            0%, transparent 80%);
				                    background: -webkit-radial-gradient(center,  ellipse,  var(--hvr-shadowColor, #2098D1) 0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, #2098D1                            0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, var(--hvr-shadowColor, #2098D1) 0%, transparent 80%);

				                    bottom: 100%;  left:     5%;  
				                    height: 10px;  width:   90%;

				                    -webkit-transition: transform 0.3s, opacity 0.3s;
				                       -moz-transition: transform 0.3s, opacity 0.3s;
				                         -o-transition: transform 0.3s, opacity 0.3s;
				                            transition: transform 0.3s, opacity 0.3s;
				                }

				                .hvr-shadow-push-top:hover::after  , 
				                .hvr-shadow-push-top:focus::after  , 
				                .hvr-shadow-push-top:active::after {
				                    opacity: 1;
				                    -webkit-transform: translateY(-5px);
				                        -ms-transform: translateY(-5px);
				                            transform: translateY(-5px); 
				                }
					`
					},

				// hvr-shadow-push-btm
					{
					name : 'hvr-shadow-push-btm' ,
					code : 	
					`            /* Hover - shadow-push-btm */
				            /* ---------------------------- */

				                .hvr-shadow-push-btm   {
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;
				                }

				                .hvr-shadow-push-btm:hover  , 
				                .hvr-shadow-push-btm:focus  , 
				                .hvr-shadow-push-btm:active {
				                    -webkit-transform: translateY(-5px); 
				                        -ms-transform: translateY(-5px); 
				                            transform: translateY(-5px); 
				                }

				                .hvr-shadow-push-btm::after   {
				                    position: absolute; z-index: -1;
				                    content: ''; pointer-events: none;
				                    opacity: 0;

				                    background: -webkit-radial-gradient(center,  ellipse,  #2098D1                            0%, transparent 80%);
				                    background: -webkit-radial-gradient(center,  ellipse,  var(--hvr-shadowColor, #2098D1) 0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, #2098D1                            0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, var(--hvr-shadowColor, #2098D1) 0%, transparent 80%);

				                    top:    100%;  left:    5%;  
				                    height: 10px;  width:  90%;

				                    -webkit-transition: transform 0.3s, opacity 0.3s;
				                       -moz-transition: transform 0.3s, opacity 0.3s;
				                         -o-transition: transform 0.3s, opacity 0.3s;
				                            transition: transform 0.3s, opacity 0.3s;
				                }

				                .hvr-shadow-push-btm:hover::after  , 
				                .hvr-shadow-push-btm:focus::after  , 
				                .hvr-shadow-push-btm:active::after {
				                    opacity: 1;
				                    -webkit-transform: translateY(5px);
				                        -ms-transform: translateY(5px); 
				                            transform: translateY(5px); 
				                }
					`
					},

				// Speech bubbles
					{
					name : null ,
					code : 	
					`        /* Speech bubbles */
				        /* ---------------------------- */
					`
					},

				// hvr-bubble-left
					{
					name : 'hvr-bubble-left' ,
					code : 	
					`            /* Hover - bubble-left */
				            /* ---------------------------- */

				                .hvr-bubble-left {
				                	position: relative;
				                    overflow: visible;
				                    border-color: #008080;

				                    box-shadow:  2px  2px 2px #2098D1; 
				                    box-shadow:  2px  2px 2px var(--hvr-borderColor, #2098D1); 
				                }

				                .hvr-bubble-left::after {
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

				                .hvr-bubble-left:hover::after  ,
				                .hvr-bubble-left:focus::after  ,
				                .hvr-bubble-left:active::after {
				                    -webkit-transform: translateX(-10px);
				                        -ms-transform: translateX(-10px);
				                            transform: translateX(-10px);
				                    opacity: 1;
				                }
					`
					},

				// hvr-bubble-right
					{
					name : 'hvr-bubble-right' ,
					code : 	
					`            /* Hover - bubble-right */
				            /* ---------------------------- */

				                .hvr-bubble-right {
				                	position: relative;
				                    overflow: visible;
				                    border-color: #008080;
				                }

				                .hvr-bubble-right::after {
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

				                .hvr-bubble-right:hover::after  ,
				                .hvr-bubble-right:focus::after  ,
				                .hvr-bubble-right:active::after {
				                    -webkit-transform: translateX(10px);
				                        -ms-transform: translateX(10px);
				                            transform: translateX(10px);
				                    opacity: 1;
				                }
					`
					},

				// hvr-bubble-top
					{
					name : 'hvr-bubble-top' ,
					code : 	
					`            /* Hover - bubble-top */
				            /* ---------------------------- */

				                .hvr-bubble-top {
				                	position: relative;
				                    overflow: visible;
				                    border-color: #008080;
				                }

				                .hvr-bubble-top::after {
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

				                .hvr-bubble-top:hover::after  ,
				                .hvr-bubble-top:focus::after  ,
				                .hvr-bubble-top:active::after {
				                    -webkit-transform: translateY(-10px);
				                        -ms-transform: translateY(-10px);
				                            transform: translateY(-10px); 
				                    opacity: 1;
				                }   
					`
					},

				// hvr-bubble-btm
					{
					name : 'hvr-bubble-btm' ,
					code : 	
					`            /* Hover - bubble-btm */
				            /* ---------------------------- */

				                .hvr-bubble-btm   {
				                	position: relative;
				                    overflow: visible;
				                    border-color: #008080;
				                }

				                .hvr-bubble-btm::after   {
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

				                .hvr-bubble-btm:hover::after  ,
				                .hvr-bubble-btm:focus::after  ,
				                .hvr-bubble-btm:active::after {
				                    -webkit-transform: translateY(10px);
				                        -ms-transform: translateY(10px);
				                            transform: translateY(10px);  
				                    opacity: 1;
				                }
					`
					},

				// hvr-bubble-push-left
					{
					name : 'hvr-bubble-push-left' ,
					code : 	
					`            /* Hover - Bubble Push Left */
				            /* ---------------------------- */

				                .hvr-bubble-push-left {
				                	position: relative;
				                    overflow: visible;
				                    border-color: #008080;

				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;
				                }

				                .hvr-bubble-push-left:hover  ,
				                .hvr-bubble-push-left:focus  ,
				                .hvr-bubble-push-left:active {
				                    -webkit-transform: translateX(10px);
				                        -ms-transform: translateX(10px);
				                            transform: translateX(10px);  
				                }

				                .hvr-bubble-push-left::after {
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

				                .hvr-bubble-push-left:hover::after  , 
				                .hvr-bubble-push-left:focus::after  , 
				                .hvr-bubble-push-left:active::after {
				                    -webkit-transform: translateX(-10px);
				                        -ms-transform: translateX(-10px);
				                            transform: translateX(-10px); 
				                }
					`
					},

				// hvr-bubble-push-right
					{
					name : 'hvr-bubble-push-right' ,
					code : 	
					`            /* Hover - Bubble Push Right */
				            /* ---------------------------- */
				   
				                .hvr-bubble-push-right {
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;

				                    border-color: #008080;
				                    border-color: var(--btn-bgColor, #008080);
				                }

				                .hvr-bubble-push-right:hover  , 
				                .hvr-bubble-push-right:focus  , 
				                .hvr-bubble-push-right:active {
				                    -webkit-transform: translateX(-10px);
				                        -ms-transform: translateX(-10px);
				                            transform: translateX(-10px); 
				                }

				                .hvr-bubble-push-right::after {
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

				                .hvr-bubble-push-right:hover::after  ,
				                .hvr-bubble-push-right:focus::after  ,
				                .hvr-bubble-push-right:active::after {
				                    -webkit-transform: translateX(10px);
				                        -ms-transform: translateX(10px);
				                            transform: translateX(10px);  
				                }
					`
					},

				// hvr-bubble-push-top
					{
					name : 'hvr-bubble-push-top' ,
					code : 	
					`            /* Hover - Bubble Push Top */
				            /* ---------------------------- */

				                .hvr-bubble-push-top {
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;

				                    border-color: #008080;
				                    border-color: var(--btn-bgColor, #008080);
				                }

				                .hvr-bubble-push-top:hover  ,
				                .hvr-bubble-push-top:focus  ,
				                .hvr-bubble-push-top:active {
				                    -webkit-transform: translateY(10px);
				                        -ms-transform: translateY(10px);
				                            transform: translateY(10px);  
				                }

				                .hvr-bubble-push-top::after {
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

				                .hvr-bubble-push-top:hover::after  ,
				                .hvr-bubble-push-top:focus::after  ,
				                .hvr-bubble-push-top:active::after {
				                    -webkit-transform: translateY(-10px);
				                        -ms-transform: translateY(-10px);
				                            transform: translateY(-10px);
				                }
					`
					},

				// hvr-bubble-push-btm
					{
					name : 'hvr-bubble-push-btm' ,
					code : 	
					`            /* Hover - Bubble Push Bottom */
				            /* ---------------------------- */
				   
				                .hvr-bubble-push-btm {
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;

				                    border-color: #008080;
				                    border-color: var(--btn-bgColor, #008080);
				                }

				                .hvr-bubble-push-btm:hover  , 
				                .hvr-bubble-push-btm:focus  , 
				                .hvr-bubble-push-btm:active {
				                    -webkit-transform: translateY(-10px);
				                        -ms-transform: translateY(-10px);
				                            transform: translateY(-10px);
				                }

				                .hvr-bubble-push-btm::after {
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

				                .hvr-bubble-push-btm:hover::after  ,
				                .hvr-bubble-push-btm:focus::after  ,
				                .hvr-bubble-push-btm:active::after {
				                    -webkit-transform: translateY(10px);
				                        -ms-transform: translateY(10px);
				                            transform: translateY(10px);  
				                }
					`
					}
			];

			var codeBlocks_css_singular = [

				// hvr-push-up-alt
				    {
				    name : 'hvr-push-up-alt' ,
				    code :    
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
				                }
				    `
				    },

				// hvr-push-down-alt
				    {
				    name : 'hvr-push-down-alt' ,
				    code :    
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
				                }
				    `
				    },

				// hvr-buzz
				    {
				    name : 'hvr-buzz' ,
				    code :    
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
				                }
				    `
				    },

				// hvr-buzz-out
				    {
				    name : 'hvr-buzz-out' ,
				    code :    
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
				                }
				    `
				    },

				// hvr-bg-sweep-left
				    {
				    name : 'hvr-bg-sweep-left' ,
				    code :    
				    `            /* Hover - bg-sweep-left */
				            /* ---------------------------- */

				                .hvr-bg-sweep-left  {
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

				                    -webkit-transform-origin: 0 50%;
				                        -ms-transform-origin: 0 50%;
				                            transform-origin: 0 50%;

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-sweep-left:hover::after  , 
				                .hvr-bg-sweep-left:focus::after  , 
				                .hvr-bg-sweep-left:active::after {
				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
				    `
				    },

				// hvr-bg-sweep-right
				    {
				    name : 'hvr-bg-sweep-right' ,
				    code :    
				    `            /* Hover - bg-sweep-right */
				            /* ---------------------------- */

				                .hvr-bg-sweep-right {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-sweep-right::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin: 100% 50%;
				                        -ms-transform-origin: 100% 50%;
				                            transform-origin: 100% 50%;

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-sweep-right:hover::after  , 
				                .hvr-bg-sweep-right:focus::after  , 
				                .hvr-bg-sweep-right:active::after {
				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
				    `
				    },

				// hvr-bg-sweep-top
				    {
				    name : 'hvr-bg-sweep-top' ,
				    code :    
				    `            /* Hover - bg-sweep-top */
				            /* ---------------------------- */

				                .hvr-bg-sweep-top {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-sweep-top::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin: 50% 0%;
				                        -ms-transform-origin: 50% 0%;
				                            transform-origin: 50% 0%;

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-sweep-top:hover::after  , 
				                .hvr-bg-sweep-top:focus::after  , 
				                .hvr-bg-sweep-top:active::after {
				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
				    `
				    },

				// hvr-bg-sweep-btm
				    {
				    name : 'hvr-bg-sweep-btm' ,
				    code :    
				    `            /* Hover - bg-sweep-btm */
				            /* ---------------------------- */

				                .hvr-bg-sweep-btm   {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-sweep-btm::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin: 50% 100%;
				                        -ms-transform-origin: 50% 100%;
				                            transform-origin: 50% 100%;

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-sweep-btm:hover::after  , 
				                .hvr-bg-sweep-btm:focus::after  , 
				                .hvr-bg-sweep-btm:active::after {
				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
				    `
				    },

				// hvr-bg-bounce-left
				    {
				    name : 'hvr-bg-bounce-left' ,
				    code :    
				    `            /* Hover - bg-bounce-left */
				            /* ---------------------------- */

				                .hvr-bg-bounce-left  {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-bounce-left::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;
				                    
				                    background-color: #2098D1;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin:  0%   50% ;
				                        -ms-transform-origin:  0%   50% ;
				                            transform-origin:  0%   50% ; 

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-bounce-left:hover::after  ,
				                .hvr-bg-bounce-left:focus::after  ,
				                .hvr-bg-bounce-left:active::after {
				                    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                       -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                         -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);

				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
				    `
				    },

				// hvr-bg-bounce-right
				    {
				    name : 'hvr-bg-bounce-right' ,
				    code :    
				    `            /* Hover - bg-bounce-right */
				            /* ---------------------------- */

				                .hvr-bg-bounce-right {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-bounce-right::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;
				                    
				                    background-color: #2098D1;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin: 100%  50% ;
				                        -ms-transform-origin: 100%  50% ;
				                            transform-origin: 100%  50% ; 

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-bounce-right:hover::after  , 
				                .hvr-bg-bounce-right:focus::after  , 
				                .hvr-bg-bounce-right:active::after {
				                    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                       -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                         -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);

				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
				    `
				    },

				// hvr-bg-bounce-top
				    {
				    name : 'hvr-bg-bounce-top' ,
				    code :    
				    `            /* Hover - bg-bounce-top */
				            /* ---------------------------- */

				                .hvr-bg-bounce-top {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-bounce-top::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;
				                    
				                    background-color: #2098D1;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin:  50%   0% ;
				                        -ms-transform-origin:  50%   0% ;
				                            transform-origin:  50%   0% ; 

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-bounce-top:hover::after  , 
				                .hvr-bg-bounce-top:focus::after  , 
				                .hvr-bg-bounce-top:active::after {
				                    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                       -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                         -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);

				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
				    `
				    },

				// hvr-bg-bounce-btm
				    {
				    name : 'hvr-bg-bounce-btm' ,
				    code :    
				    `            /* Hover - bg-bounce-btm */
				            /* ---------------------------- */

				                .hvr-bg-bounce-btm   {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-bounce-btm::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;
				                    
				                    background-color: #2098D1;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform-origin:  50% 100% ;
				                        -ms-transform-origin:  50% 100% ;
				                            transform-origin:  50% 100% ; 

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-bounce-btm:hover::after  , 
				                .hvr-bg-bounce-btm:focus::after  , 
				                .hvr-bg-bounce-btm:active::after {
				                    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                       -moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                         -o-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
				                            transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);

				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
				    `
				    },

				// hvr-bg-radial-out
				    {
				    name : 'hvr-bg-radial-out' ,
				    code :    
				    `            /* Hover - bg-radial-out */
				            /* ---------------------------- */

				                .hvr-bg-radial-out {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-radial-out::after {
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

				                    -webkit-transform: translate(-50%, -50%) scale(0);
				                        -ms-transform: translate(-50%, -50%) scale(0);
				                            transform: translate(-50%, -50%) scale(0);
				                }

				                .hvr-bg-radial-out:hover::after  , 
				                .hvr-bg-radial-out:focus::after  , 
				                .hvr-bg-radial-out:active::after {
				                    -webkit-transform: translate(-50%, -50%) scale(1.2);
				                        -ms-transform: translate(-50%, -50%) scale(1.2);
				                            transform: translate(-50%, -50%) scale(1.2);
				                }
				    `
				    },

				// hvr-bg-radial-in
				    {
				    name : 'hvr-bg-radial-in' ,
				    code :    
				    `            /* Hover - bg-radial-in */
				            /* ---------------------------- */

				                .hvr-bg-radial-in {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-radial-in::after  {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    left: 50%; top: 50%;
				                    width: 100%; padding-bottom: 100%;

				                    border-radius: 100%;

				                    background-color: #008080;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: translate(-50%, -50%) scale(1.2);
				                        -ms-transform: translate(-50%, -50%) scale(1.2);
				                            transform: translate(-50%, -50%) scale(1.2);
				                }

				                .hvr-bg-radial-in:hover::after  , 
				                .hvr-bg-radial-in:focus::after  , 
				                .hvr-bg-radial-in:active::after {
				                    -webkit-transform: translate(-50%, -50%) scale(0);
				                        -ms-transform: translate(-50%, -50%) scale(0);
				                            transform: translate(-50%, -50%) scale(0);
				                }
				    `
				    },

				// hvr-bg-rectangle-out
				    {
				    name : 'hvr-bg-rectangle-out' ,
				    code :    
				    `            /* Hover - bg-rectangle-out */
				            /* ---------------------------- */

				                .hvr-bg-rectangle-out {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-rectangle-out::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #2098D1;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scale(0);
				                        -ms-transform: scale(0);
				                            transform: scale(0);
				                }

				                .hvr-bg-rectangle-out:hover::after  , 
				                .hvr-bg-rectangle-out:focus::after  , 
				                .hvr-bg-rectangle-out:active::after {
				                    -webkit-transform: scale(1);
				                        -ms-transform: scale(1);
				                            transform: scale(1);
				                }
				    `
				    },

				// hvr-bg-rectangle-in
				    {
				    name : 'hvr-bg-rectangle-in' ,
				    code :    
				    `            /* Hover - bg-rectangle-in */
				            /* ---------------------------- */

				                .hvr-bg-rectangle-in {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-rectangle-in::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #008080;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scale(1);
				                        -ms-transform: scale(1);
				                            transform: scale(1);
				                }

				                .hvr-bg-rectangle-in:hover::after  , 
				                .hvr-bg-rectangle-in:focus::after  , 
				                .hvr-bg-rectangle-in:active::after {
				                    -webkit-transform: scale(0);
				                        -ms-transform: scale(0);
				                            transform: scale(0);
				                }
				    `
				    },

				// hvr-bg-shutter-out-hor
				    {
				    name : 'hvr-bg-shutter-out-hor' ,
				    code :    
				    `            /* Hover - bg-shutter-out-hor */
				            /* ---------------------------- */

				                .hvr-bg-shutter-out-hor {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-shutter-out-hor::after {
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

				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }

				                .hvr-bg-shutter-out-hor:hover::after  ,
				                .hvr-bg-shutter-out-hor:focus::after  ,
				                .hvr-bg-shutter-out-hor:active::after {
				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }
				    `
				    },

				// hvr-bg-shutter-in-hor
				    {
				    name : 'hvr-bg-shutter-in-hor' ,
				    code :    
				    `            /* Hover - bg-shutter-in-hor */
				            /* ---------------------------- */

				                .hvr-bg-shutter-in-hor {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-shutter-in-hor::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #008080;

				                    -webkit-transform-origin: 50%;
				                        -ms-transform-origin: 50%;
				                            transform-origin: 50%;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scaleX(1);
				                        -ms-transform: scaleX(1);
				                            transform: scaleX(1);
				                }

				                .hvr-bg-shutter-in-hor:hover::after  ,
				                .hvr-bg-shutter-in-hor:focus::after  , 
				                .hvr-bg-shutter-in-hor:active::after {
				                    -webkit-transform: scaleX(0);
				                        -ms-transform: scaleX(0);
				                            transform: scaleX(0);
				                }
				    `
				    },

				// hvr-bg-shutter-out-ver
				    {
				    name : 'hvr-bg-shutter-out-ver' ,
				    code :    
				    `            /* Hover - bg-shutter-out-ver */
				            /* ---------------------------- */

				                .hvr-bg-shutter-out-ver {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-shutter-out-ver::after {
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

				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }

				                .hvr-bg-shutter-out-ver:hover::after  ,
				                .hvr-bg-shutter-out-ver:focus::after  ,
				                .hvr-bg-shutter-out-ver:active::after {
				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }
				    `
				    },

				// hvr-bg-shutter-in-ver
				    {
				    name : 'hvr-bg-shutter-in-ver' ,
				    code :    
				    `            /* Hover - bg-shutter-in-ver */
				            /* ---------------------------- */

				                .hvr-bg-shutter-in-ver {
				                    position: relative;

				                    -webkit-transform: perspective(1px);
				                        -ms-transform: perspective(1px);
				                            transform: perspective(1px);
				                }

				                .hvr-bg-shutter-in-ver::after {
				                    content: "";
				                    position: absolute; z-index: -1;
				                    top: 0; bottom: 0; left: 0; right: 0;

				                    background-color: #008080;

				                    -webkit-transform-origin: 50%;
				                        -ms-transform-origin: 50%;
				                            transform-origin: 50%;

				                    -webkit-transition: transform 0.3s ease-out;
				                       -moz-transition: transform 0.3s ease-out;
				                         -o-transition: transform 0.3s ease-out;
				                            transition: transform 0.3s ease-out;

				                    -webkit-transform: scaleY(1);
				                        -ms-transform: scaleY(1);
				                            transform: scaleY(1);
				                }

				                .hvr-bg-shutter-in-ver:hover::after  ,
				                .hvr-bg-shutter-in-ver:focus::after  ,
				                .hvr-bg-shutter-in-ver:active::after {
				                    -webkit-transform: scaleY(0);
				                        -ms-transform: scaleY(0);
				                            transform: scaleY(0);
				                }
				    `
				    },

				// hvr-border-fade
				    {
				    name : 'hvr-border-fade' ,
				    code :    
				    `            /* Hover - border-fade */
				            /* ---------------------------- */

				                .hvr-border-fade::after   {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;

				                    -webkit-transition: border-color  0.3s;
				                       -moz-transition: border-color  0.3s;
				                         -o-transition: border-color  0.3s;
				                            transition: border-color  0.3s;

				                    border: 4px solid transparent;  
				                }

				                .hvr-border-fade:hover::after  , 
				                .hvr-border-fade:focus::after  , 
				                .hvr-border-fade:active::after {
				                    border-color: #2098D1;
				                }
				    `
				    },

				// hvr-border-reveal
				    {
				    name : 'hvr-border-reveal' ,
				    code :    
				    `            /* Hover - border-reveal */
				            /* ---------------------------- */

				                .hvr-border-reveal {
				                    position: relative;
				                }

				                .hvr-border-reveal::after {
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
				                .hvr-border-reveal:focus::after  , 
				                .hvr-border-reveal:active::after { 
				                    border-width: 4px; 
				                }
				    `
				    },

				// hvr-border-reveal-left
				    {
				    name : 'hvr-border-reveal-left' ,
				    code :    
				    `            /* Hover - border-reveal-left */
				            /* ---------------------------- */

				                .hvr-border-reveal-left {
				                    position: relative;
				                }

				                .hvr-border-reveal-left::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;
				                    
				                    border: 0 solid #2098D1;

				                    -webkit-transition: border-width 0.1s ease-out;
				                       -moz-transition: border-width 0.1s ease-out;
				                         -o-transition: border-width 0.1s ease-out;
				                            transition: border-width 0.1s ease-out;
				                }

				                .hvr-border-reveal-left:hover::after  , 
				                .hvr-border-reveal-left:focus::after  , 
				                .hvr-border-reveal-left:active::after { 
				                    border-left-width: 4px; 
				                }
				    `
				    },

				// hvr-border-reveal-right
				    {
				    name : 'hvr-border-reveal-right' ,
				    code :    
				    `            /* Hover - border-reveal-right */
				            /* ---------------------------- */

				                .hvr-border-reveal-right {
				                    position: relative;
				                }

				                .hvr-border-reveal-right::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;
				                    
				                    border: 0 solid #2098D1;

				                    -webkit-transition: border-width 0.1s ease-out;
				                       -moz-transition: border-width 0.1s ease-out;
				                         -o-transition: border-width 0.1s ease-out;
				                            transition: border-width 0.1s ease-out;
				                }

				                .hvr-border-reveal-right:hover::after  , 
				                .hvr-border-reveal-right:focus::after  , 
				                .hvr-border-reveal-right:active::after { 
				                    border-right-width: 4px; 
				                }
				    `
				    },

				// hvr-border-reveal-top
				    {
				    name : 'hvr-border-reveal-top' ,
				    code :    
				    `            /* Hover - border-reveal-top */
				            /* ---------------------------- */

				                .hvr-border-reveal-top {
				                    position: relative;
				                }

				                .hvr-border-reveal-top::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;
				                    
				                    border: 0 solid #2098D1;

				                    -webkit-transition: border-width 0.1s ease-out;
				                       -moz-transition: border-width 0.1s ease-out;
				                         -o-transition: border-width 0.1s ease-out;
				                            transition: border-width 0.1s ease-out;
				                }

				                .hvr-border-reveal-top:hover::after  , 
				                .hvr-border-reveal-top:focus::after  , 
				                .hvr-border-reveal-top:active::after { 
				                    border-top-width: 4px; 
				                }
				    `
				    },

				// hvr-border-reveal-btm
				    {
				    name : 'hvr-border-reveal-btm' ,
				    code :    
				    `            /* Hover - border-reveal-btm */
				            /* ---------------------------- */

				                .hvr-border-reveal-btm {
				                    position: relative;
				                }

				                .hvr-border-reveal-btm::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    left: 0; right: 0; top: 0; bottom: 0;
				                    
				                    border: 0 solid #2098D1;

				                    -webkit-transition: border-width 0.1s ease-out;
				                       -moz-transition: border-width 0.1s ease-out;
				                         -o-transition: border-width 0.1s ease-out;
				                            transition: border-width 0.1s ease-out;
				                }

				                .hvr-border-reveal-btm:hover::after  , 
				                .hvr-border-reveal-btm:focus::after  , 
				                .hvr-border-reveal-btm:active::after { 
				                    border-bottom-width: 4px; 
				                }
				    `
				    },

				// hvr-border-outline-out
				    {
				    name : 'hvr-border-outline-out' ,
				    code :    
				    `            /* Hover - border-outline-out */
				            /* ---------------------------- */

				                .hvr-border-outline-out {
				                    position: relative;
				                    overflow: visible;
				                }

				                .hvr-border-outline-out::after {
				                    content: '';
				                    position: absolute;

				                    top:       0;   
				                    right:     0;   
				                    bottom:    0;   
				                    left:      0;
				                    opacity:   0;

				                    border: 4px solid #2098D1;

				                    -webkit-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                       -moz-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                         -o-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                            transition: top .3s, bottom .3s, left .3s, right .3s;
				                }

				                .hvr-border-outline-out:hover::after  , 
				                .hvr-border-outline-out:focus::after  , 
				                .hvr-border-outline-out:active::after {
				                    top:    -8px;
				                    right:  -8px;
				                    bottom: -8px;
				                    left:   -8px;
				                    opacity:   1;
				                }
				    `
				    },

				// hvr-border-outline-in
				    {
				    name : 'hvr-border-outline-in' ,
				    code :    
				    `            /* Hover - border-outline-in */
				            /* ---------------------------- */

				                .hvr-border-outline-in {
				                    position: relative;
				                    overflow: visible;
				                }

				                .hvr-border-outline-in::after    {
				                    content: '';
				                    position: absolute;

				                    top:    -16px;  
				                    right:  -16px;  
				                    bottom: -16px;  
				                    left:   -16px;
				                    opacity:    0;

				                    border: 4px solid #2098D1;

				                    -webkit-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                       -moz-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                         -o-transition: top .3s, bottom .3s, left .3s, right .3s;  
				                            transition: top .3s, bottom .3s, left .3s, right .3s;
				                }

				                .hvr-border-outline-in:hover::after   , 
				                .hvr-border-outline-in:focus::after   , 
				                .hvr-border-outline-in:active::after  {
				                    top:    -8px;
				                    right:  -8px;
				                    bottom: -8px;
				                    left:   -8px;
				                    opacity:   1;
				                }
				    `
				    },

				// hvr-border-underline-left
				    {
				    name : 'hvr-border-underline-left' ,
				    code :    
				    `            /* Hover - border-underline-left */
				            /* ---------------------------- */

				                .hvr-border-underline-left {
				                    position: relative;
				                }

				                .hvr-border-underline-left::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-underline-left::after { left: 0; right: 100%; bottom: 0; }

				                .hvr-border-underline-left:hover::after  , 
				                .hvr-border-underline-left:focus::after  , 
				                .hvr-border-underline-left:active::after { 
				                    right: 0; 
				                }
				    `
				    },

				// hvr-border-underline-center
				    {
				    name : 'hvr-border-underline-center' ,
				    code :    
				    `            /* Hover - border-underline-center */
				            /* ---------------------------- */

				                .hvr-border-underline-center {
				                    position: relative;
				                }

				                .hvr-border-underline-center::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-underline-center::after { left: 50%; right: 50%; bottom: 0; }

				                .hvr-border-underline-center:hover::after  , 
				                .hvr-border-underline-center:focus::after  , 
				                .hvr-border-underline-center:active::after { 
				                    right: 0; left: 0; 
				                }
				    `
				    },

				// hvr-border-underline-right
				    {
				    name : 'hvr-border-underline-right' ,
				    code :    
				    `            /* Hover - border-underline-right */
				            /* ---------------------------- */

				                .hvr-border-underline-right {
				                    position: relative;
				                }

				                .hvr-border-underline-right::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-underline-right::after { left: 100%; right: 0; bottom: 0; }

				                .hvr-border-underline-right:hover::after  , 
				                .hvr-border-underline-right:focus::after  , 
				                .hvr-border-underline-right:active::after { 
				                    left: 0; 
				                }
				    `
				    },

				// hvr-border-overline-left
				    {
				    name : 'hvr-border-overline-left' ,
				    code :    
				    `            /* Hover - hvr-border-overline-left */
				            /* ---------------------------- */

				                .hvr-border-overline-left {
				                    position: relative;
				                }

				                .hvr-border-overline-left::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-overline-left::after  { left: 0; right: 100%; top: 0; }

				                .hvr-border-overline-left:hover::after  , 
				                .hvr-border-overline-left:focus::after  , 
				                .hvr-border-overline-left:active::after { 
				                    right: 0; 
				                }
				    `
				    },

				// hvr-border-overline-center
				    {
				    name : 'hvr-border-overline-center' ,
				    code :    
				    `            /* Hover - border-overline-center */
				            /* ---------------------------- */

				                .hvr-border-overline-center {
				                    position: relative;
				                }

				                .hvr-border-overline-center::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-overline-center::after  { left: 50%; right: 50%; top: 0; }

				                .hvr-border-overline-center:hover::after  , 
				                .hvr-border-overline-center:focus::after  , 
				                .hvr-border-overline-center:active::after { 
				                    right: 0; left: 0; 
				                }
				    `
				    },

				// hvr-border-overline-right
				    {
				    name : 'hvr-border-overline-right' ,
				    code :    
				    `            /* Hover - border-overline-right */
				            /* ---------------------------- */

				                .hvr-border-overline-right {
				                    position: relative;
				                }

				                .hvr-border-overline-right::after {
				                    content: '';
				                    position: absolute; z-index: -1;
				                    height: 4px;

				                    background-color: #2098D1;

				                    -webkit-transition: right 0.3s ease-out, left 0.3s ease-out;
				                       -moz-transition: right 0.3s ease-out, left 0.3s ease-out;
				                         -o-transition: right 0.3s ease-out, left 0.3s ease-out;
				                            transition: right 0.3s ease-out, left 0.3s ease-out;
				                }

				                .hvr-border-overline-right::after  { left: 100%; right: 0; top: 0; }

				                .hvr-border-overline-right:hover::after  , 
				                .hvr-border-overline-right:focus::after  , 
				                .hvr-border-overline-right:active::after { 
				                    left: 0; 
				                }
				    `
				    },

				// hvr-shadow-glow
				    {
				    name : 'hvr-shadow-glow' ,
				    code :    
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
				                }
				    `
				    },

				// hvr-shadow-push-left
				    {
				    name : 'hvr-shadow-push-left' ,
				    code :    
				    `            /* Hover - shadow-push-left */
				            /* ---------------------------- */

				                .hvr-shadow-push-left {
				                	position: relative;
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;
				                }

				                .hvr-shadow-push-left:hover  , 
				                .hvr-shadow-push-left:focus  , 
				                .hvr-shadow-push-left:active {
				                    -webkit-transform: translateX(-5px);
				                        -ms-transform: translateX(-5px);
				                            transform: translateX(-5px); 
				                }

				                .hvr-shadow-push-left::after {
				                    position: absolute; z-index: -1;
				                    content: ''; pointer-events: none;
				                    opacity: 0;

				                    background: -webkit-radial-gradient(center,  ellipse,  #2098D1 0% , transparent 80%);
				                    background:         radial-gradient(ellipse at center, #2098D1 0% , transparent 80%);

				                    top:      5%;  left:   100%;  
				                    height:  90%;  width:  10px;

				                    -webkit-transition: transform 0.3s, opacity 0.3s;
				                       -moz-transition: transform 0.3s, opacity 0.3s;
				                         -o-transition: transform 0.3s, opacity 0.3s;
				                            transition: transform 0.3s, opacity 0.3s;
				                }

				                .hvr-shadow-push-left:hover::after  , 
				                .hvr-shadow-push-left:focus::after  , 
				                .hvr-shadow-push-left:active::after {
				                    opacity: 1;
				                    -webkit-transform: translateX(5px);
				                        -ms-transform: translateX(5px);
				                            transform: translateX(5px);
				                }
				    `
				    },

				// hvr-shadow-push-right
				    {
				    name : 'hvr-shadow-push-right' ,
				    code :    
				    `            /* Hover - shadow-push-right */
				            /* ---------------------------- */
				 
				                .hvr-shadow-push-right {
				                	position: relative;
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;
				                }

				                .hvr-shadow-push-right:hover  , 
				                .hvr-shadow-push-right:focus  , 
				                .hvr-shadow-push-right:active {
				                    -webkit-transform: translateX(5px);
				                        -ms-transform: translateX(5px);
				                            transform: translateX(5px);  
				                }

				                .hvr-shadow-push-right::after {
				                    position: absolute; z-index: -1;
				                    content: ''; pointer-events: none;
				                    opacity: 0;

				                    background: -webkit-radial-gradient(center,  ellipse,  #2098D1 0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, #2098D1 0%, transparent 80%);

				                    top:      5%;  right:  100%;  
				                    height:  90%;  width:  10px;

				                    -webkit-transition: transform 0.3s, opacity 0.3s;
				                       -moz-transition: transform 0.3s, opacity 0.3s;
				                         -o-transition: transform 0.3s, opacity 0.3s;
				                            transition: transform 0.3s, opacity 0.3s;
				                }

				                .hvr-shadow-push-right:hover::after  , 
				                .hvr-shadow-push-right:focus::after  , 
				                .hvr-shadow-push-right:active::after {
				                    opacity: 1;
				                    -webkit-transform: translateX(-5px);
				                        -ms-transform: translateX(-5px);
				                            transform: translateX(-5px); 
				                }
				    `
				    },

				// hvr-shadow-push-top
				    {
				    name : 'hvr-shadow-push-top' ,
				    code :    
				    `            /* Hover - shadow-push-top */
				            /* ---------------------------- */

				                .hvr-shadow-push-top {
				                	position: relative;
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;
				                }

				                .hvr-shadow-push-top:hover  , 
				                .hvr-shadow-push-top:focus  , 
				                .hvr-shadow-push-top:active {
				                    -webkit-transform: translateY(5px);
				                        -ms-transform: translateY(5px); 
				                            transform: translateY(5px);  
				                }

				                .hvr-shadow-push-top::after {
				                    position: absolute; z-index: -1;
				                    content: ''; pointer-events: none;
				                    opacity: 0;

				                    background: -webkit-radial-gradient(center,  ellipse,  #2098D1 0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, #2098D1 0%, transparent 80%);

				                    bottom: 100%;  left:     5%;  
				                    height: 10px;  width:   90%;

				                    -webkit-transition: transform 0.3s, opacity 0.3s;
				                       -moz-transition: transform 0.3s, opacity 0.3s;
				                         -o-transition: transform 0.3s, opacity 0.3s;
				                            transition: transform 0.3s, opacity 0.3s;
				                }

				                .hvr-shadow-push-top:hover::after  , 
				                .hvr-shadow-push-top:focus::after  , 
				                .hvr-shadow-push-top:active::after {
				                    opacity: 1;
				                    -webkit-transform: translateY(-5px);
				                        -ms-transform: translateY(-5px);
				                            transform: translateY(-5px); 
				                }
				    `
				    },

				// hvr-shadow-push-btm
				    {
				    name : 'hvr-shadow-push-btm' ,
				    code :    
				    `            /* Hover - Float Shadow Bottom */
				            /* ---------------------------- */

				                .hvr-shadow-push-btm   {
				                	position: relative;
				                    overflow: visible;
				                    -webkit-transition: transform 0.3s;  
				                       -moz-transition: transform 0.3s;  
				                         -o-transition: transform 0.3s;  
				                            transition: transform 0.3s;
				                }

				                .hvr-shadow-push-btm:hover  , 
				                .hvr-shadow-push-btm:focus  , 
				                .hvr-shadow-push-btm:active {
				                    -webkit-transform: translateY(-5px); 
				                        -ms-transform: translateY(-5px); 
				                            transform: translateY(-5px); 
				                }

				                .hvr-shadow-push-btm::after   {
				                    position: absolute; z-index: -1;
				                    content: ''; pointer-events: none;
				                    opacity: 0;

				                    background: -webkit-radial-gradient(center,  ellipse,  #2098D1 0%, transparent 80%);
				                    background:         radial-gradient(ellipse at center, #2098D1 0%, transparent 80%);

				                    top:    100%;  left:    5%;  
				                    height: 10px;  width:  90%;

				                    -webkit-transition: transform 0.3s, opacity 0.3s;
				                       -moz-transition: transform 0.3s, opacity 0.3s;
				                         -o-transition: transform 0.3s, opacity 0.3s;
				                            transition: transform 0.3s, opacity 0.3s;
				                }

				                .hvr-shadow-push-btm:hover::after  , 
				                .hvr-shadow-push-btm:focus::after  , 
				                .hvr-shadow-push-btm:active::after {
				                    opacity: 1;
				                    -webkit-transform: translateY(5px);
				                        -ms-transform: translateY(5px); 
				                            transform: translateY(5px); 
				                }
				    `
				    },

				// hvr-bubble-left
				    {
				    name : 'hvr-bubble-left' ,
				    code :    
				    `            /* Hover - Bubble Left */
				            /* ---------------------------- */

				                .hvr-bubble-left {
				                    overflow: visible;

				                    border-color: #008080;
				                }

				                .hvr-bubble-left::after {
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

				                .hvr-bubble-left:hover::after  ,
				                .hvr-bubble-left:focus::after  ,
				                .hvr-bubble-left:active::after {
				                    -webkit-transform: translateX(-10px);
				                        -ms-transform: translateX(-10px);
				                            transform: translateX(-10px);
				                    opacity: 1;
				                }
				    `
				    },

				// hvr-bubble-right
				    {
				    name : 'hvr-bubble-right' ,
				    code :    
				    `            /* Hover - Bubble Right */
				            /* ---------------------------- */

				                .hvr-bubble-right {
				                    overflow: visible;

				                    border-color: #008080;
				                }

				                .hvr-bubble-right::after {
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

				                .hvr-bubble-right:hover::after  ,
				                .hvr-bubble-right:focus::after  ,
				                .hvr-bubble-right:active::after {
				                    -webkit-transform: translateX(10px);
				                        -ms-transform: translateX(10px);
				                            transform: translateX(10px);
				                    opacity: 1;
				                }
				    `
				    },

				// hvr-bubble-top
				    {
				    name : 'hvr-bubble-top' ,
				    code :    
				    `            /* Hover - Bubble Top */
				            /* ---------------------------- */

				                .hvr-bubble-top {
				                    overflow: visible;

				                    border-color: #008080;
				                }

				                .hvr-bubble-top::after {
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

				                .hvr-bubble-top:hover::after  ,
				                .hvr-bubble-top:focus::after  ,
				                .hvr-bubble-top:active::after {
				                    -webkit-transform: translateY(-10px);
				                        -ms-transform: translateY(-10px);
				                            transform: translateY(-10px); 
				                    opacity: 1;
				                }   
				    `
				    },

				// hvr-bubble-btm
				    {
				    name : 'hvr-bubble-btm' ,
				    code :    
				    `            /* Hover - Bubble Bottom */
				            /* ---------------------------- */

				                .hvr-bubble-btm   {
				                    overflow: visible;

				                    border-color: #008080;
				                }

				                .hvr-bubble-btm::after   {
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

				                .hvr-bubble-btm:hover::after  ,
				                .hvr-bubble-btm:focus::after  ,
				                .hvr-bubble-btm:active::after {
				                    -webkit-transform: translateY(10px);
				                        -ms-transform: translateY(10px);
				                            transform: translateY(10px);  
				                    opacity: 1;
				                }
				    `
				    },

				// hvr-bubble-push-left
				    {
				    name : 'hvr-bubble-push-left' ,
				    code :    
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

				                .hvr-bubble-push-left::after {
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

				                .hvr-bubble-push-left:hover::after  , 
				                .hvr-bubble-push-left:focus::after  , 
				                .hvr-bubble-push-left:active::after {
				                    -webkit-transform: translateX(-10px);
				                        -ms-transform: translateX(-10px);
				                            transform: translateX(-10px); 
				                }
				    `
				    },

				// hvr-bubble-push-right
				    {
				    name : 'hvr-bubble-push-right' ,
				    code :    
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

				                .hvr-bubble-push-right::after {
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

				                .hvr-bubble-push-right:hover::after  ,
				                .hvr-bubble-push-right:focus::after  ,
				                .hvr-bubble-push-right:active::after {
				                    -webkit-transform: translateX(10px);
				                        -ms-transform: translateX(10px);
				                            transform: translateX(10px);  
				                }
				    `
				    },

				// hvr-bubble-push-top
				    {
				    name : 'hvr-bubble-push-top' ,
				    code :    
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

				                .hvr-bubble-push-top::after {
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

				                .hvr-bubble-push-top:hover::after  ,
				                .hvr-bubble-push-top:focus::after  ,
				                .hvr-bubble-push-top:active::after {
				                    -webkit-transform: translateY(-10px);
				                        -ms-transform: translateY(-10px);
				                            transform: translateY(-10px);
				                }
				    `
				    },

				// hvr-bubble-push-btm
				    {
				    name : 'hvr-bubble-push-btm' ,
				    code :    
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

				                .hvr-bubble-push-btm::after {
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

				                .hvr-bubble-push-btm:hover::after  ,
				                .hvr-bubble-push-btm:focus::after  ,
				                .hvr-bubble-push-btm:active::after {
				                    -webkit-transform: translateY(10px);
				                        -ms-transform: translateY(10px);
				                            transform: translateY(10px);  
				                }
				    `
				    }
			];

			codeBlocks_css = byAndu_codeBlock_formatCodeString(codeBlocks_css);
			codeBlocks_css_singular = byAndu_codeBlock_formatCodeString(codeBlocks_css_singular);

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
					css_singular : codeBlocks_css_singular
				} ,

				removeString       : 'hvr-' ,
				demoItems_codeLink : codeBlocks_css_singular
			};

			byAndu.pageConfigObj_setupObj(paramObj);
			byAndu.pageConfigObj_runConfig();

        // Generate codeBlocks - HTML
        // --------------------------------

            var htmlCodeContainer = document.getElementById('codeSection-html');

            demoItemsArray.map(function(effect){ 

                if (effect.indexOf('hvr-') > -1) { 

                    var newElem = document.createElement('PRE');

                    newElem.classList = 'finalCode-block hidden';
                    newElem.classList.add('finalCode-block-'+effect);
                    newElem.setAttribute('data-finalCodeId', effect);

                    newElem.innerHTML = '    &lt;div class="btn '+effect+'"> &lt;/div> ';

                    htmlCodeContainer.appendChild(newElem);
                }
            });

            htmlCodeContainer.getElementsByClassName('finalCode-block')[0].classList.remove('hidden');

	})();