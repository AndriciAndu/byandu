
	// Generate Demos
	// --------------------------------

		(function(){

			var demoItemsArray = [
				'loader-bars'				,
				'loader-spinners-sync'		,
				'loader-spinners-async'		,
				'loader-circular-double'	,
				'loader-circular-simple'	,
				'loader-flipSquare'			,
				'loader-pulse'				,
				'loader-bubbles'			,
				'loader-bubbles-pop'		,
				'loader-cubes'				,
				'loader-yinyang'
			];

			// Generate demos
			// --------------------------------

				var generateDemos_container = document.getElementsByClassName('_route_mainView-generateDemos')[0];

				demoItemsArray.map(function(effect) {
					var newElem = document.createElement('div');
					newElem.classList = 'col-6 md-col-4 p-sm';
					newElem.innerHTML = 
						'<div class="demoItem-container demoItem-container-'+effect+'" data-finalCodeId='+effect+' data-hvr-showText="'+effect+'"> '	+
							'<div class="demoItem '+effect+'"> '																						+
								'<div class="websiteLoader_container"> '																				+
									'<div class="loader_element loader_element1"> </div> '																+
									'<div class="loader_element loader_element2"> </div> '																+
									'<div class="loader_element loader_element3"> </div> '																+
									'<div class="loader_element loader_element4"> </div> '																+
								'</div> '																												+
							'</div> '																													+
						'</div> '																														;
					generateDemos_container.appendChild(newElem);
				});

            // Generate HTML for Code-Tab(3)
            // --------------------------------

                byAndu_generateHTML_forCodeTab();
                byAndu_finalCode_generateRadioSelects('html', demoItemsArray, 'loader-');
                byAndu_finalCode_generateCheckboxes('css', demoItemsArray, 'loader-');
                byAndu_finalCode_generateRadioSelects('css-singular', demoItemsArray, 'loader-');
                byAndu_finalCode_initCheckboxes();

            // Generate codeBlocks innerHTML - HTML
            // --------------------------------

                var htmlCodeContainer = document.getElementsByClassName('finalCode-blockContainer-html')[0];

                demoItemsArray.map(function(effect){

                    var newElem = document.createElement('PRE');

                    newElem.classList = 'finalCode-block hidden';
                    newElem.classList.add('finalCode-block-'+effect);
                    newElem.setAttribute('data-finalCodeId', effect);

                    newElem.innerHTML = 
                        '    &lt;div class="websiteLoader '+effect+'"> '                            + "\n" +
                        '        &lt;div class="websiteLoader_container"> '                         + "\n" +
                        '            &lt;div class="loader_element loader_element1"> &lt;/div> '    + "\n" +
                        '            &lt;div class="loader_element loader_element2"> &lt;/div> '    + "\n" +
                        '            &lt;div class="loader_element loader_element3"> &lt;/div> '    + "\n" +
                        '            &lt;div class="loader_element loader_element4"> &lt;/div> '    + "\n" +
                        '        &lt;/div> '                                                        + "\n" +
                        '    &lt;/div> '                                                            ;

                    htmlCodeContainer.appendChild(newElem);
                });

                htmlCodeContainer.getElementsByClassName('finalCode-block')[0].classList.remove('hidden');

		})();


// Generate codeBlocks innerHTML - CSS
// --------------------------------

	(function(){

		var finalCode_codeBlocks_css = [

			// General
				{
				name : null ,
				code : 	
				`    /* General */
			    /* ----------------------------------------*/

			        .websiteLoader {
			            background-color: black;

			            display: -webkit-box;    display: -ms-flexbox;  
			            display: -webkit-flex;   display: flex;
			            justify-content: center; align-items: center;

			            --spinner-root-size:    100px;
			            --spinner-root-color:   #FFFFFF;
			            --spinner-root-borderWidth: 5px;
			        }

			        .websiteLoader.fixed-and-fullSize { 
			            position: fixed; 
			            left: 0; top: 0;
			            width: 100vw;    height: 100vh;

			            z-index: 9999;
			        }
			        .websiteLoader.loader-disabled { display: none !important; }

			        .websiteLoader_container {
			            position: relative;
			            width:  100px;  width:  var(--spinner-root-size, 100px); 
			            height: 100px;  height: var(--spinner-root-size, 100px);
			        }

			    /* Animations */
			    /* ----------------------------------------*/
				`
				},

			// loader-bars
				{
				name : 'loader-bars' ,
				code : 
				`        /* loader-bars */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/

			                .loader-bars {
			                    --element-width: 25%; /* don't go over 33% */
			                }

			                .loader-bars .websiteLoader_container {
			                    display: -webkit-box;   display: -ms-flexbox;   
			                    display: -webkit-flex;  display: flex;
			                    align-items: center;    justify-content: space-between;
			                }

			                .loader-bars .loader_element {
			                    display: inline-block; 
			                    height: 100%;

			                    width: 25%; 
			                    width: var(--element-width);

			                    background-color: #FFFFFF;
			                    background-color: var(--spinner-root-color);

			                    -webkit-animation: loader-bars infinite linear;
			                            animation: loader-bars infinite linear;
			                }

			                .loader-bars .loader_element4 { display: none !important; }

			            /* Animation */
			            /* ----------------------------------------*/

			                @-webkit-keyframes loader-bars {
			                    0%      {  height: 50%;  }
			                    40%     {  height: 100%; }
			                    80%     {  height: 50%;  }
			                    100%    {  height: 50%;  }
			                }
			                        @keyframes loader-bars {
			                    0%      {  height: 50%;  }
			                    40%     {  height: 100%; }
			                    80%     {  height: 50%;  }
			                    100%    {  height: 50%;  }
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-bars.loader-speed-fast  {   --spinner-root-animation-speed:  750;   --spinner-root-animation-delay:  75; }
			                .loader-bars                    {   --spinner-root-animation-speed: 1000;   --spinner-root-animation-delay: 100; }
			                .loader-bars.loader-speed-slow  {   --spinner-root-animation-speed: 1500;   --spinner-root-animation-delay: 150; }

			                .loader-bars .loader_element  { 
			                    -webkit-animation-duration: 1000ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 1000ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }
			                .loader-bars .loader_element2 { 
			                    -webkit-animation-delay: 100ms;         -webkit-animation-delay:    calc(var(--spinner-root-animation-delay) * 1ms);
			                            animation-delay: 100ms;                 animation-delay:    calc(var(--spinner-root-animation-delay) * 1ms);
			                }
			                .loader-bars .loader_element3 { 
			                    -webkit-animation-delay: 200ms;         -webkit-animation-delay:    calc(var(--spinner-root-animation-delay) * 2ms);
			                            animation-delay: 200ms;                 animation-delay:    calc(var(--spinner-root-animation-delay) * 2ms);
			                }
				`
				},

			// loader-spinners-sync
				{
				name : 'loader-spinners-sync' ,
				code : 
				`        /* loader-spinners-sync */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/

			                .loader-spinners-sync .loader_element {
			                    position: absolute;
			                    width: 100%; height: 100%;
			                    border-radius: 50%;

			                    border-left: 5px solid white;
			                    border-left: var(--spinner-root-borderWidth) solid var(--spinner-root-color);
			                }

			                .loader-spinners-sync .loader_element1 {  -webkit-animation: loader-spinner-sync-1st  infinite linear;  animation: loader-spinner-sync-1st  infinite linear;}
			                .loader-spinners-sync .loader_element2 {  -webkit-animation: loader-spinner-sync-2nd  infinite linear;  animation: loader-spinner-sync-2nd  infinite linear;}
			                .loader-spinners-sync .loader_element3 {  -webkit-animation: loader-spinner-sync-3rd  infinite linear;  animation: loader-spinner-sync-3rd  infinite linear;}
			                .loader-spinners-sync .loader_element4 {  display: none !important;}

			            /* Animation */
			            /* ----------------------------------------*/

			                @-webkit-keyframes loader-spinner-sync-1st {
			                    0%      {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)     ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg)   ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg) ;}}
			                @-webkit-keyframes loader-spinner-sync-2nd {
			                    0%      {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)      ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg)    ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;}}
			                @-webkit-keyframes loader-spinner-sync-3rd {
			                    0%      {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)      ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg)    ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;}}

			                @keyframes loader-spinner-sync-1st {
			                    0%      {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)     ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg)   ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg) ;}}
			                @keyframes loader-spinner-sync-2nd {
			                    0%      {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)      ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg)    ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;}}
			                @keyframes loader-spinner-sync-3rd {
			                    0%      {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)      ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg)    ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;}}

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-spinners-sync.loader-speed-fast     {   --spinner-root-animation-speed:  750; }
			                .loader-spinners-sync                       {   --spinner-root-animation-speed: 1500; }
			                .loader-spinners-sync.loader-speed-slow     {   --spinner-root-animation-speed: 3000; }

			                .loader-spinners-sync .loader_element  { 
			                    -webkit-animation-duration: 1500ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 1500ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }
				`
				},

			// loader-spinners-async
				{
				name : 'loader-spinners-async' ,
				code : 
				`        /* loader-spinners-async */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/
			            
			                .loader-spinners-async .loader_element {
			                    position: absolute;
			                    width: 100%; height: 100%;
			                    border-radius: 50%;
			                }

			                .loader-spinners-async .loader_element1 { border-left:  5px solid white;  border-left:  var(--spinner-root-borderWidth) solid var(--spinner-root-color); }
			                .loader-spinners-async .loader_element2 { border-right: 5px solid white;  border-right: var(--spinner-root-borderWidth) solid var(--spinner-root-color); }
			                .loader-spinners-async .loader_element3 { border-top:   5px solid white;  border-top:   var(--spinner-root-borderWidth) solid var(--spinner-root-color); }

			                .loader-spinners-async .loader_element1 { -webkit-animation: loader-spinner-async-1st infinite linear;   animation: loader-spinner-async-1st infinite linear; }
			                .loader-spinners-async .loader_element2 { -webkit-animation: loader-spinner-async-2nd infinite linear;   animation: loader-spinner-async-2nd infinite linear; }
			                .loader-spinners-async .loader_element3 { -webkit-animation: loader-spinner-async-3rd infinite linear;   animation: loader-spinner-async-3rd infinite linear; }
			                .loader-spinners-async .loader_element4 { display: none !important; }

			            /* Animation */
			            /* ----------------------------------------*/

			                @-webkit-keyframes loader-spinner-async-1st {
			                    0%      {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;}
			                    100%    {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);}}
			                @-webkit-keyframes loader-spinner-async-2nd {
			                    0%      {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;}}
			                @-webkit-keyframes loader-spinner-async-3rd {
			                    0%      {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;}}

			                @keyframes loader-spinner-async-1st {
			                    0%      {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;}
			                    100%    {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);}}
			                @keyframes loader-spinner-async-2nd {
			                    0%      {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;}}
			                @keyframes loader-spinner-async-3rd {
			                    0%      {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;}
			                    100%    {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;}}

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-spinners-async.loader-speed-fast    {   --spinner-root-animation-speed:  750;   --spinner-root-animation-delay:  75; }
			                .loader-spinners-async                      {   --spinner-root-animation-speed: 1500;   --spinner-root-animation-delay: 100; }
			                .loader-spinners-async.loader-speed-slow    {   --spinner-root-animation-speed: 3000;   --spinner-root-animation-delay: 150; }

			                .loader-spinners-async .loader_element  { 
			                    -webkit-animation-duration: 1500ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 1500ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }
				`
				},

			// loader-circular-double
				{
				name : 'loader-circular-double' ,
				code :
				`        /* loader-circular-double */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/

			                .loader-circular-double .loader_element1, 
			                .loader-circular-double .loader_element2 {
			                    position: absolute;
			                    left: 50%; top: 50%;
			                    -webkit-transform: translateY(-50%) translateX(-50%);   
			                        -ms-transform: translateY(-50%) translateX(-50%);   
			                            transform: translateY(-50%) translateX(-50%);

			                    border-left:    5px solid white;        border-left:   var(--spinner-root-borderWidth) solid var(--spinner-root-color);
			                    border-right:   5px solid white;        border-right:  var(--spinner-root-borderWidth) solid var(--spinner-root-color);
			                    border-top:     5px solid transparent;  border-top:    var(--spinner-root-borderWidth) solid transparent;
			                    border-bottom:  5px solid transparent;  border-bottom: var(--spinner-root-borderWidth) solid transparent;

			                    border-radius:  50%;
			                }

			                .loader-circular-double .loader_element1 {
			                    width: 100%; height: 100%; 
			                    -webkit-animation: loader-circular-double-1st infinite linear;      
			                            animation: loader-circular-double-1st infinite linear;
			                }

			                .loader-circular-double .loader_element2 {
			                    width: 50%;  height: 50%; 
			                    -webkit-animation: loader-circular-double-2nd infinite linear;
			                            animation: loader-circular-double-2nd infinite linear;
			                }

			                .loader-circular-double .loader_element3, 
			                .loader-circular-double .loader_element4 {
			                    display: none !important;
			                }

			            /* Animation */
			            /* ----------------------------------------*/

			                @-webkit-keyframes loader-circular-double-1st {
			                    0%      { -webkit-transform: translateY(-50%) translateX(-50%) rotate(0)     ;  -ms-transform: translateY(-50%) translateX(-50%) rotate(0)      ;   transform: translateY(-50%) translateX(-50%) rotate(0)      ;}
			                    100%    { -webkit-transform: translateY(-50%) translateX(-50%) rotate(359deg);  -ms-transform: translateY(-50%) translateX(-50%) rotate(359deg) ;   transform: translateY(-50%) translateX(-50%) rotate(359deg) ;}}
			                @-webkit-keyframes loader-circular-double-2nd {
			                    0%      { -webkit-transform: translateY(-50%) translateX(-50%) rotate(0)      ; -ms-transform: translateY(-50%) translateX(-50%) rotate(0)      ;   transform: translateY(-50%) translateX(-50%) rotate(0)      ;}
			                    100%    { -webkit-transform: translateY(-50%) translateX(-50%) rotate(-359deg); -ms-transform: translateY(-50%) translateX(-50%) rotate(-359deg);   transform: translateY(-50%) translateX(-50%) rotate(-359deg);}}

			                        @keyframes loader-circular-double-1st {
			                    0%      { -webkit-transform: translateY(-50%) translateX(-50%) rotate(0)     ;  -ms-transform: translateY(-50%) translateX(-50%) rotate(0)      ;   transform: translateY(-50%) translateX(-50%) rotate(0)      ;}
			                    100%    { -webkit-transform: translateY(-50%) translateX(-50%) rotate(359deg);  -ms-transform: translateY(-50%) translateX(-50%) rotate(359deg) ;   transform: translateY(-50%) translateX(-50%) rotate(359deg) ;}}
			                        @keyframes loader-circular-double-2nd {
			                    0%      { -webkit-transform: translateY(-50%) translateX(-50%) rotate(0)      ; -ms-transform: translateY(-50%) translateX(-50%) rotate(0)      ;   transform: translateY(-50%) translateX(-50%) rotate(0)      ;}
			                    100%    { -webkit-transform: translateY(-50%) translateX(-50%) rotate(-359deg); -ms-transform: translateY(-50%) translateX(-50%) rotate(-359deg);   transform: translateY(-50%) translateX(-50%) rotate(-359deg);}}

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-circular-double.loader-speed-fast   {   --spinner-root-animation-speed:  750; }
			                .loader-circular-double                     {   --spinner-root-animation-speed: 1500; }
			                .loader-circular-double.loader-speed-slow   {   --spinner-root-animation-speed: 3000; }

			                .loader-circular-double .loader_element  { 
			                    -webkit-animation-duration: 1500ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 1500ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }
				`
				},

			// loader-circular-simple
				{
				name : 'loader-circular-simple' ,
				code : 
				`        /* loader-circular-simple */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/

			                .loader-circular-simple {
			                    --spinner-root-borderWidth: 15px;
			                    --spinner-root-color-trail: rgba(255,255,255,0.03);
			                }

			                .loader-circular-simple .websiteLoader_container {
			                    display: -webkit-box;   display: -ms-flexbox;   
			                    display: -webkit-flex;  display: flex;
			                    align-items: center;    justify-content: center;
			                }

			                .loader-circular-simple .loader_element1 {
			                    width: 100%;    height: 100%;
			                    border-radius: 50%;

			                    border-left:    1.5vw solid white;                  border-left:    var(--spinner-root-borderWidth) solid var(--spinner-root-color);                    
			                    border-top:     1.5vw solid rgba(255,255,255,0.03); border-top:     var(--spinner-root-borderWidth) solid var(--spinner-root-color-trail);
			                    border-bottom:  1.5vw solid rgba(255,255,255,0.03); border-bottom:  var(--spinner-root-borderWidth) solid var(--spinner-root-color-trail);
			                    border-right:   1.5vw solid rgba(255,255,255,0.03); border-right:   var(--spinner-root-borderWidth) solid var(--spinner-root-color-trail);

			                    -webkit-animation: loader-circular-simple infinite linear;
			                            animation: loader-circular-simple infinite linear;
			                }

			            /* Animation */
			            /* ----------------------------------------*/

			                @-webkit-keyframes loader-circular-simple {
			                    0%   {  -webkit-transform: rotate(0deg)     ;   -ms-transform: rotate(0deg)     ;   transform: rotate(0deg)     ;}
			                    100% {  -webkit-transform: rotate(359deg)   ;   -ms-transform: rotate(359deg)   ;   transform: rotate(359deg)   ;}
			                }
			                        @keyframes loader-circular-simple {
			                    0%   {  -webkit-transform: rotate(0deg)     ;   -ms-transform: rotate(0deg)     ;   transform: rotate(0deg)     ;}
			                    100% {  -webkit-transform: rotate(359deg)   ;   -ms-transform: rotate(359deg)   ;   transform: rotate(359deg)   ;}
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-circular-simple.loader-speed-fast   {   --spinner-root-animation-speed:  750; }
			                .loader-circular-simple                     {   --spinner-root-animation-speed: 1000; }
			                .loader-circular-simple.loader-speed-slow   {   --spinner-root-animation-speed: 1500; }

			                .loader-circular-simple .loader_element  { 
			                    -webkit-animation-duration: 1000ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 1000ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }
				`
				},

			// loader-flipsquare
				{
				name : 'loader-flipsquare' ,
				code : 
				`        /* loader-flipSquare */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/

			                .loader-flipSquare .loader_element1 {
			                    width: 100%;    height: 100%;

			                    background-color: #FFFFFF;
			                    background-color: var(--spinner-root-color);

			                    -webkit-animation: loader-flipSquare infinite ease-in-out;
			                            animation: loader-flipSquare infinite ease-in-out;
			                }

			                .loader-flipSquare .loader_element2 , 
			                .loader-flipSquare .loader_element3 , 
			                .loader-flipSquare .loader_element4 {
			                    display: none !important;
			                }

			            /* Animation */
			            /* ----------------------------------------*/

			                @-webkit-keyframes loader-flipSquare {
			                    0%   { -webkit-transform: perspective(1000px)                                   ;   -ms-transform: perspective(1000px)                                  ;  transform: perspective(1000px)                                   ;}
			                    25%  { -webkit-transform: perspective(1000px)  rotateY(180deg)                  ;   -ms-transform: perspective(1000px)  rotateY(180deg)                 ;  transform: perspective(1000px)  rotateY(180deg)                  ;}
			                    50%  { -webkit-transform: perspective(1000px)  rotateY(180deg) rotateX(180deg)  ;   -ms-transform: perspective(1000px)  rotateY(180deg) rotateX(180deg) ;  transform: perspective(1000px)  rotateY(180deg) rotateX(180deg)  ;}
			                    75%  { -webkit-transform: perspective(1000px)  rotateY(360deg) rotateX(180deg)  ;   -ms-transform: perspective(1000px)  rotateY(360deg) rotateX(180deg) ;  transform: perspective(1000px)  rotateY(360deg) rotateX(180deg)  ;}
			                    100% { -webkit-transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)    ;   -ms-transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)   ;  transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)    ;}}

			                        @keyframes loader-flipSquare {
			                    0%   { -webkit-transform: perspective(1000px)                                   ;   -ms-transform: perspective(1000px)                                  ;  transform: perspective(1000px)                                   ;}
			                    25%  { -webkit-transform: perspective(1000px)  rotateY(180deg)                  ;   -ms-transform: perspective(1000px)  rotateY(180deg)                 ;  transform: perspective(1000px)  rotateY(180deg)                  ;}
			                    50%  { -webkit-transform: perspective(1000px)  rotateY(180deg) rotateX(180deg)  ;   -ms-transform: perspective(1000px)  rotateY(180deg) rotateX(180deg) ;  transform: perspective(1000px)  rotateY(180deg) rotateX(180deg)  ;}
			                    75%  { -webkit-transform: perspective(1000px)  rotateY(360deg) rotateX(180deg)  ;   -ms-transform: perspective(1000px)  rotateY(360deg) rotateX(180deg) ;  transform: perspective(1000px)  rotateY(360deg) rotateX(180deg)  ;}
			                    100% { -webkit-transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)    ;   -ms-transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)   ;  transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)    ;}}

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-flipSquare.loader-speed-fast    {   --spinner-root-animation-speed: 1500; }
			                .loader-flipSquare                      {   --spinner-root-animation-speed: 2250; }
			                .loader-flipSquare.loader-speed-slow    {   --spinner-root-animation-speed: 3500; }

			                .loader-flipSquare .loader_element  { 
			                    -webkit-animation-duration: 1000ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 1000ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }
				`
				},

			// loader-pulse
				{
				name : 'loader-pulse' ,
				code : 
				`        /* loader-pulse */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/

			                .loader-pulse {
			                    --spinner-root-color: rgba(255,255,255,0.6);
			                }

			                .loader-pulse .loader_element1, 
			                .loader-pulse .loader_element2 {
			                    position: absolute;
			                    left: 50%; top: 50%;
			                    width: 100%; height: 100%;

			                    background-color: rgba(255,255,255,0.6);
			                    background-color: var(--spinner-root-color);

			                    border-radius: 50%;
			                    -webkit-animation: loader-pulse infinite ease-in-out;
			                            animation: loader-pulse infinite ease-in-out;
			                }

			                .loader-pulse .loader_element3, 
			                .loader-pulse .loader_element4 {
			                    display: none !important;
			                }

			            /* Animation */
			            /* ----------------------------------------*/

			                @-webkit-keyframes loader-pulse {
			                    0%, 100%    { -webkit-transform: translateX(-50%) translateY(-50%) scale(0.0);  -ms-transform: translateX(-50%) translateY(-50%) scale(0.0);        transform: translateX(-50%) translateY(-50%) scale(0.0); }
			                    50%         { -webkit-transform: translateX(-50%) translateY(-50%) scale(1.0);  -ms-transform: translateX(-50%) translateY(-50%) scale(1.0);        transform: translateX(-50%) translateY(-50%) scale(1.0); }}

			                @keyframes loader-pulse {
			                    0%, 100%    { -webkit-transform: translateX(-50%) translateY(-50%) scale(0.0);  -ms-transform: translateX(-50%) translateY(-50%) scale(0.0);        transform: translateX(-50%) translateY(-50%) scale(0.0); }
			                    50%         { -webkit-transform: translateX(-50%) translateY(-50%) scale(1.0);  -ms-transform: translateX(-50%) translateY(-50%) scale(1.0);        transform: translateX(-50%) translateY(-50%) scale(1.0); }}

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-pulse.loader-speed-fast     {   --spinner-root-animation-speed: 1000;   --spinner-root-animation-delay:  -500; }
			                .loader-pulse                       {   --spinner-root-animation-speed: 1500;   --spinner-root-animation-delay:  -750; }
			                .loader-pulse.loader-speed-slow     {   --spinner-root-animation-speed: 2500;   --spinner-root-animation-delay: -1250; }

			                .loader-pulse .loader_element  { 
			                    -webkit-animation-duration: 1500ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 1500ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }
			                .loader-pulse .loader_element1 { 
			                    -webkit-animation-delay: -750ms;        -webkit-animation-delay:    calc(var(--spinner-root-animation-delay) * 1ms);
			                            animation-delay: -750ms;                animation-delay:    calc(var(--spinner-root-animation-delay) * 1ms);
			                }
				`
				},

			// loader-bubbles
				{
				name : 'loader-bubbles' ,
				code : 
				`        /* loader-bubbles & loader-bubbles-pop */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/

			                .loader-bubbles     .loader_element,
			                .loader-bubbles-pop .loader_element {
			                    position: absolute; 
			                    left: 50%;  top: 50%;
			                    width: 20%; height: 100%;
			                }

			                .loader-bubbles     .loader_element1, 
			                .loader-bubbles-pop .loader_element1 { -webkit-transform: translateX(-50%) translateY(-50%)                 ;   -ms-transform: translateX(-50%) translateY(-50%)                ;   transform: translateX(-50%) translateY(-50%)                ;}
			                .loader-bubbles     .loader_element2, 
			                .loader-bubbles-pop .loader_element2 { -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg)   ;   -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg)  ;   transform: translateX(-50%) translateY(-50%) rotate(45deg)  ;}
			                .loader-bubbles     .loader_element3, 
			                .loader-bubbles-pop .loader_element3 { -webkit-transform: translateX(-50%) translateY(-50%) rotate(90deg)   ;   -ms-transform: translateX(-50%) translateY(-50%) rotate(90deg)  ;   transform: translateX(-50%) translateY(-50%) rotate(90deg)  ;}
			                .loader-bubbles     .loader_element4, 
			                .loader-bubbles-pop .loader_element4 { -webkit-transform: translateX(-50%) translateY(-50%) rotate(135deg)  ;   -ms-transform: translateX(-50%) translateY(-50%) rotate(135deg) ;   transform: translateX(-50%) translateY(-50%) rotate(135deg) ;}

			                .loader-bubbles     .loader_element:before,
			                .loader-bubbles-pop .loader_element:before {
			                    content: '';
			                    position: absolute;
			                    width:  100%; height: 20%;

			                    -webkit-transform: translateX(0) translateY(0);
			                        -ms-transform: translateX(0) translateY(0);
			                            transform: translateX(0) translateY(0);
			                    border-radius: 50%;

			                    background-color: white;
			                    background-color: var(--spinner-root-color);
			                }

			            /* Animation */
			            /* ----------------------------------------*/

			                .loader-bubbles .loader_element:before { 
			                    -webkit-animation: loader-bubbles infinite linear;   
			                            animation: loader-bubbles infinite linear; 
			                }
			                @-webkit-keyframes loader-bubbles {
			                    0%   { transform: translateY(0)     scale(1)    ;}
			                    25%  { transform: translateY(200%)  scale(0.5)  ;}
			                    50%  { transform: translateY(400%)  scale(1)    ;}
			                    75%  { transform: translateY(200%)  scale(0.5)  ;}
			                    100% { transform: translateY(0)     scale(1)    ;}
			                }
			                @keyframes loader-bubbles {
			                    0%   { transform: translateY(0)     scale(1)    ;}
			                    25%  { transform: translateY(200%)  scale(0.5)  ;}
			                    50%  { transform: translateY(400%)  scale(1)    ;}
			                    75%  { transform: translateY(200%)  scale(0.5)  ;}
			                    100% { transform: translateY(0)     scale(1)    ;}
			                }

			                .loader-bubbles-pop .loader_element:before { 
			                    -webkit-animation: loader-bubbles-pop infinite linear;      
			                            animation: loader-bubbles-pop infinite linear;  
			                }

			                @-webkit-keyframes loader-bubbles-pop {
			                    0%          { transform: translateY(0)      scale(1.1)  ; opacity: 1;}
			                    2%          { transform: translateY(0)      scale(1.1)  ; opacity: 0;}
			                    23%         { transform: translateY(200%)   scale(.5)   ; opacity: 0;}
			                    25%         { transform: translateY(200%)   scale(.5)   ; opacity: 1;}
			                    50%         { transform: translateY(400%)   scale(1.1)  ; opacity: 1;}
			                    52%         { transform: translateY(400%)   scale(1.1)  ; opacity: 0;}
			                    73%         { transform: translateY(200%)   scale(.5)   ; opacity: 0;}
			                    75%         { transform: translateY(200%)   scale(.5)   ; opacity: 1;}
			                    100%        { transform: translateY(0)      scale(1.1)  ; opacity: 1;}
			                }
			                @keyframes loader-bubbles-pop {
			                    0%          { transform: translateY(0)      scale(1.1)  ; opacity: 1;}
			                    2.5%        { transform: translateY(0)      scale(1.1)  ; opacity: 0;}
			                    22.5%       { transform: translateY(200%)   scale(.5)   ; opacity: 0;}
			                    25%         { transform: translateY(200%)   scale(.5)   ; opacity: 1;}
			                    50%         { transform: translateY(400%)   scale(1.1)  ; opacity: 1;}
			                    52.5%       { transform: translateY(400%)   scale(1.1)  ; opacity: 0;}
			                    72.5%       { transform: translateY(200%)   scale(.5)   ; opacity: 0;}
			                    75%         { transform: translateY(200%)   scale(.5)   ; opacity: 1;}
			                    100%        { transform: translateY(0)      scale(1.1)  ; opacity: 1;}
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-bubbles.loader-speed-fast,  .loader-bubbles-pop.loader-speed-fast   {   --spinner-root-animation-speed: 2000;   --spinner-root-animation-delay: -250; }
			                .loader-bubbles,                    .loader-bubbles-pop                     {   --spinner-root-animation-speed: 3000;   --spinner-root-animation-delay: -375; }
			                .loader-bubbles.loader-speed-slow,  .loader-bubbles-pop.loader-speed-slow   {   --spinner-root-animation-speed: 4000;   --spinner-root-animation-delay: -500; }

			                .loader-bubbles     .loader_element:before,  
			                .loader-bubbles-pop .loader_element:before  { 
			                    -webkit-animation-duration: 3000ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 3000ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }

			                .loader-bubbles     .loader_element2:before, 
			                .loader-bubbles-pop .loader_element2:before {
			                    -webkit-animation-delay: -375ms;        -webkit-animation-delay:    calc(var(--spinner-root-animation-delay) * 1ms);
			                            animation-delay: -375ms;                animation-delay:    calc(var(--spinner-root-animation-delay) * 1ms);
			                }
			                .loader-bubbles     .loader_element3:before, 
			                .loader-bubbles-pop .loader_element3:before {
			                    -webkit-animation-delay: -750ms;        -webkit-animation-delay:    calc(var(--spinner-root-animation-delay) * 2ms);
			                            animation-delay: -750ms;                animation-delay:    calc(var(--spinner-root-animation-delay) * 2ms);
			                }
			                .loader-bubbles     .loader_element4:before, 
			                .loader-bubbles-pop .loader_element4:before {
			                    -webkit-animation-delay: -1125ms;       -webkit-animation-delay:    calc(var(--spinner-root-animation-delay) * 3ms);
			                            animation-delay: -1125ms;               animation-delay:    calc(var(--spinner-root-animation-delay) * 3ms);
			                }
				`
				},

			// loader-cubes
				{
				name : 'loader-cubes' ,
				code : 
				`        /* loader-cubes */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/

			                .loader-cubes .loader_element1,
			                .loader-cubes .loader_element2 {
			                    position: absolute;
			                    top: 0; left: 0;
			                    width: 20%; height: 20%;

			                    background-color: white;
			                    background-color: var(--spinner-root-color);

			                    -webkit-animation: loader-cubes infinite ease-in-out;
			                            animation: loader-cubes infinite ease-in-out;
			                }

			                .loader-cubes .loader_element3,
			                .loader-cubes .loader_element4 {
			                    display: none !important;
			                }

			            /* Animation */
			            /* ----------------------------------------*/

			                @-webkit-keyframes loader-cubes {
			                  25%   {   -webkit-transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;
			                                -ms-transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;
			                                    transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;} 
			                  50%   {   -webkit-transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;
			                                -ms-transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;
			                                    transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;} 
			                  50.1% {   -webkit-transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;
			                                -ms-transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;
			                                    transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;} 
			                  75%   {   -webkit-transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;
			                                -ms-transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;
			                                    transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;} 
			                  100%  {   -webkit-transform:                                          rotate(-360deg)                 ;
			                                -ms-transform:                                          rotate(-360deg)                 ;
			                                    transform:                                          rotate(-360deg)                 ;}
			                }
			                        @keyframes loader-cubes {
			                  25%   {   -webkit-transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;
			                                -ms-transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;
			                                    transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;} 
			                  50%   {   -webkit-transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;
			                                -ms-transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;
			                                    transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;} 
			                  50.1% {   -webkit-transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;
			                                -ms-transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;
			                                    transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;} 
			                  75%   {   -webkit-transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;
			                                -ms-transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;
			                                    transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;} 
			                  100%  {   -webkit-transform:                                          rotate(-360deg)                 ;
			                                -ms-transform:                                          rotate(-360deg)                 ;
			                                    transform:                                          rotate(-360deg)                 ;}
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-cubes.loader-speed-fast     {   --spinner-root-animation-speed: 1500;   --spinner-root-animation-delay:  -750; }
			                .loader-cubes                       {   --spinner-root-animation-speed: 2500;   --spinner-root-animation-delay: -1250; }
			                .loader-cubes.loader-speed-slow     {   --spinner-root-animation-speed: 3500;   --spinner-root-animation-delay: -1750; }

			                .loader-cubes .loader_element  { 
			                    -webkit-animation-duration: 2500ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 2500ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }
			                .loader-cubes .loader_element2 { 
			                    -webkit-animation-delay: -1250ms;       -webkit-animation-delay:    calc(var(--spinner-root-animation-delay) * 1ms);
			                            animation-delay: -1250ms;               animation-delay:    calc(var(--spinner-root-animation-delay) * 1ms);
			                }
				`
				},

			// loader-yinyang
				{
				name : 'loader-yinyang' ,
				code :
				`        /* loader-yinyang */
			        /* ----------------------------------------*/

			            /* Style */
			            /* ----------------------------------------*/

			                .loader-yinyang {
			                    --spinner-root-color-1: #FFFFFF;
			                    --spinner-root-color-2: #000000;
			                }

			                .loader-yinyang .loader_element1,
			                .loader-yinyang .loader_element3,
			                .loader-yinyang .loader_element4:before { 
			                    background-color: #000000;
			                    background-color: var(--spinner-root-elemColor-2);
			                }
			                .loader-yinyang .loader_element2,
			                .loader-yinyang .loader_element4,
			                .loader-yinyang .loader_element3:before  { 
			                    background-color: #FFFFFF;
			                    background-color: var(--spinner-root-elemColor-1);
			                }

			                .loader-yinyang .websiteLoader_container {
			                    border-radius: 50%;
			                    overflow: hidden;
			                    animation: loader-yinyang linear infinite;
			                }

			                /* Large Circles */
			                .loader-yinyang .loader_element1,
			                .loader-yinyang .loader_element2 { 
			                    position: absolute;
			                    width: 50%; height: 100%;
			                    top: 0;
			                }
			                .loader-yinyang .loader_element1 { left:  0; }
			                .loader-yinyang .loader_element2 { right: 0; }

			                /* Circle Overlays */
			                .loader-yinyang .loader_element3,
			                .loader-yinyang .loader_element4 {
			                    position: absolute;
			                    width: 50%;  height: 50%;
			                    border-radius: 50%;
			                    left: 25%;
			                }
			                .loader-yinyang .loader_element3 { top:    0; }
			                .loader-yinyang .loader_element4 { bottom: 0; }

			                /* Small circles */
			                .loader-yinyang .loader_element3:before,
			                .loader-yinyang .loader_element4:before {
			                    content:'';
			                    position: absolute;
			                    top:   30%; left:   30%;
			                    width: 40%; height: 40%;
			                    border-radius: 50%;
			                }

			            /* Animation */
			            /* ----------------------------------------*/

			                @-webkit-keyframes loader-yinyang {
			                    0%   { -webkit-transform: rotate(0)     ;  -ms-transform: rotate(0)     ;  transform: rotate(0)     ; }
			                    100% { -webkit-transform: rotate(359deg);  -ms-transform: rotate(359deg);  transform: rotate(359deg); }}

			                @keyframes loader-yinyang {
			                    0%   { -webkit-transform: rotate(0)     ;  -ms-transform: rotate(0)     ;  transform: rotate(0)     ; }
			                    100% { -webkit-transform: rotate(359deg);  -ms-transform: rotate(359deg);  transform: rotate(359deg); }}

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-yinyang.loader-speed-fast   {   --spinner-root-animation-speed: 1000; }
			                .loader-yinyang                     {   --spinner-root-animation-speed: 1500; }
			                .loader-yinyang.loader-speed-slow   {   --spinner-root-animation-speed: 2000; }

			                .loader-yinyang .websiteLoader_container { 
			                    -webkit-animation-duration: 1500ms;     -webkit-animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                            animation-duration: 1500ms;             animation-duration: calc(var(--spinner-root-animation-speed) * 1ms);
			                }
				`
				}
		];

		finalCode_codeBlocks_css = byAndu_codeBlock_formatCodeString(finalCode_codeBlocks_css);
		byAndu_codeBlock_generateInnerHTML(finalCode_codeBlocks_css , 'css');

	})();

// Generate codeBlocks innerHTML - CSS Singular
// --------------------------------

	(function(){

		var finalCode_codeBlocks_css_singular = [

			// loader-bars
			    {
			    name : 'loader-bars' ,
			    code : 
			    `    /* loader-bars */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-bars { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-bars .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-bars .loader_element {
			                    width: 25%; /* width - don't go over 33% */
			                    background-color: #FFFFFF;
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/
			                .loader-bars .loader_element  { -webkit-animation-duration: 1000ms; animation-duration: 1000ms; }
			                .loader-bars .loader_element2 { -webkit-animation-delay:     100ms; animation-delay:     100ms; }
			                .loader-bars .loader_element3 { -webkit-animation-delay:     200ms; animation-delay:     200ms; }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/

			            .loader-bars .websiteLoader_container {
			                position: relative;

			                display: -webkit-box;   display: -ms-flexbox;   
			                display: -webkit-flex;  display: flex;
			                align-items: center;    justify-content: space-between;
			            }

			            .loader-bars .loader_element {
			                position: relative; 
			                display: inline-block; 
			                height: 100%;

			                -webkit-animation: loader-bars infinite linear;
			                        animation: loader-bars infinite linear;
			            }
			            .loader-bars .loader_element4 { display: none !important; }

			        /* Animation */
			        /* ----------------------------------------*/

			            @-webkit-keyframes loader-bars {
			                0% , 80% , 100% { -webkit-transform: scaleY(.5);  -ms-transform: scaleY(.5); transform: scaleY(.5); }
			                40%             { -webkit-transform: scaleY(1);   -ms-transform: scaleY(1);  transform: scaleY(1);  }
			            }
			                    @keyframes loader-bars {
			                0% , 80% , 100% { -webkit-transform: scaleY(.5);  -ms-transform: scaleY(.5); transform: scaleY(.5); }
			                40%             { -webkit-transform: scaleY(1);   -ms-transform: scaleY(1);  transform: scaleY(1);  }
			            }
			    `
			    },

			// loader-spinners-sync
			    {
			    name : 'loader-spinners-sync' ,
			    code : 
			    `    /* loader-spinners-sync */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-spinners-sync { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-spinners-sync .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-spinners-sync .loader_element {
			                    border-left: 5px solid #FFFFFF;
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/
			                .loader-spinners-sync .loader_element  { 
			                    -webkit-animation-duration: 1500ms; 
			                            animation-duration: 1500ms; 
			                }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/

			            .loader-spinners-sync .loader_element {
			                position: absolute;
			                width: 100%; height: 100%;
			                border-radius: 50%;

			                background-color: transparent !important;
			            }

			            .loader-spinners-sync .loader_element1 {  -webkit-animation: loader-spinner-sync-1st  infinite linear;  animation: loader-spinner-sync-1st  infinite linear;}
			            .loader-spinners-sync .loader_element2 {  -webkit-animation: loader-spinner-sync-2nd  infinite linear;  animation: loader-spinner-sync-2nd  infinite linear;}
			            .loader-spinners-sync .loader_element3 {  -webkit-animation: loader-spinner-sync-3rd  infinite linear;  animation: loader-spinner-sync-3rd  infinite linear;}
			            .loader-spinners-sync .loader_element4 {  display: none !important; }

			        /* Animation */
			        /* ----------------------------------------*/

			            @-webkit-keyframes loader-spinner-sync-1st {
			                0%      {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)     ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg)   ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg) ;}}
			            @-webkit-keyframes loader-spinner-sync-2nd {
			                0%      {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)      ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg)    ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;}}
			            @-webkit-keyframes loader-spinner-sync-3rd {
			                0%      {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)      ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg)    ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;}}

			            @keyframes loader-spinner-sync-1st {
			                0%      {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)     ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg)   ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg) ;}}
			            @keyframes loader-spinner-sync-2nd {
			                0%      {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)      ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg)    ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;}}
			            @keyframes loader-spinner-sync-3rd {
			                0%      {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)      ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg)    ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;}}
			    `
			    },

			// loader-spinners-async
			    {
			    name : 'loader-spinners-async' ,
			    code : 
			    `    /* loader-spinners-async */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-spinners-async { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-spinners-async .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-spinners-async .loader_element1 { border-left:  5px solid #FFFFFF; }
			                .loader-spinners-async .loader_element2 { border-right: 5px solid #FFFFFF; }
			                .loader-spinners-async .loader_element3 { border-top:   5px solid #FFFFFF; }

			            /* Speed & Delay */
			            /* ----------------------------------------*/
			                .loader-spinners-async .loader_element  { -webkit-animation-duration: 1500ms; animation-duration: 1500ms; }
			                .loader-spinners-async .loader_element2 { -webkit-animation-delay:     100ms; animation-delay:     100ms; }
			                .loader-spinners-async .loader_element3 { -webkit-animation-delay:     200ms; animation-delay:     200ms; }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/
			        
			            .loader-spinners-async .loader_element {
			                position: absolute;
			                width: 100%; height: 100%;
			                border-radius: 50%;

			                background-color: transparent !important;
			            }

			            .loader-spinners-async .loader_element1 { -webkit-animation: loader-spinner-async-1st infinite linear;   animation: loader-spinner-async-1st infinite linear; }
			            .loader-spinners-async .loader_element2 { -webkit-animation: loader-spinner-async-2nd infinite linear;   animation: loader-spinner-async-2nd infinite linear; }
			            .loader-spinners-async .loader_element3 { -webkit-animation: loader-spinner-async-3rd infinite linear;   animation: loader-spinner-async-3rd infinite linear; }
			            .loader-spinners-async .loader_element4 { display: none !important; }

			        /* Animation */
			        /* ----------------------------------------*/

			            @-webkit-keyframes loader-spinner-async-1st {
			                0%      {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;}
			                100%    {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);}}
			            @-webkit-keyframes loader-spinner-async-2nd {
			                0%      {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;}}
			            @-webkit-keyframes loader-spinner-async-3rd {
			                0%      {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;}}

			            @keyframes loader-spinner-async-1st {
			                0%      {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg)  ;}
			                100%    {   -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);  transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);}}
			            @keyframes loader-spinner-async-2nd {
			                0%      {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;  transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg) ;}}
			            @keyframes loader-spinner-async-3rd {
			                0%      {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg)   ;}
			                100%    {   -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;  transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg) ;}}
			    `
			    },

			// loader-circular-double
			    {
			    name : 'loader-circular-double' ,
			    code :
			    `    /* loader-circular-double */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-circular-double { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-circular-double .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-circular-double .loader_element1, 
			                .loader-circular-double .loader_element2 {
			                    border: 5px solid #FFFFFF;
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/
			                .loader-circular-double .loader_element  { 
			                    -webkit-animation-duration: 1500ms; 
			                            animation-duration: 1500ms; 
			                }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/

			            .loader-circular-double .loader_element1, 
			            .loader-circular-double .loader_element2 {
			                position: absolute;
			                left: 50%; top: 50%;
			                -webkit-transform: translateY(-50%) translateX(-50%);   
			                    -ms-transform: translateY(-50%) translateX(-50%);   
			                        transform: translateY(-50%) translateX(-50%);

			                border-top-color:    transparent !important;
			                border-bottom-color: transparent !important;

			                border-radius:  50%;
			                background-color: transparent !important;
			            }

			            .loader-circular-double .loader_element1 {
			                width: 100%; height: 100%; 
			                -webkit-animation: loader-circular-double-1st infinite linear;      
			                        animation: loader-circular-double-1st infinite linear;
			            }

			            .loader-circular-double .loader_element2 {
			                width: 50%;  height: 50%; 
			                -webkit-animation: loader-circular-double-2nd infinite linear;
			                        animation: loader-circular-double-2nd infinite linear;
			            }

			            .loader-circular-double .loader_element3, 
			            .loader-circular-double .loader_element4 {
			                display: none !important;
			            }

			        /* Animation */
			        /* ----------------------------------------*/

			            @-webkit-keyframes loader-circular-double-1st {
			                0%      { -webkit-transform: translateY(-50%) translateX(-50%) rotate(0)     ;  -ms-transform: translateY(-50%) translateX(-50%) rotate(0)      ;   transform: translateY(-50%) translateX(-50%) rotate(0)      ;}
			                100%    { -webkit-transform: translateY(-50%) translateX(-50%) rotate(359deg);  -ms-transform: translateY(-50%) translateX(-50%) rotate(359deg) ;   transform: translateY(-50%) translateX(-50%) rotate(359deg) ;}}
			            @-webkit-keyframes loader-circular-double-2nd {
			                0%      { -webkit-transform: translateY(-50%) translateX(-50%) rotate(0)      ; -ms-transform: translateY(-50%) translateX(-50%) rotate(0)      ;   transform: translateY(-50%) translateX(-50%) rotate(0)      ;}
			                100%    { -webkit-transform: translateY(-50%) translateX(-50%) rotate(-359deg); -ms-transform: translateY(-50%) translateX(-50%) rotate(-359deg);   transform: translateY(-50%) translateX(-50%) rotate(-359deg);}}

			                    @keyframes loader-circular-double-1st {
			                0%      { -webkit-transform: translateY(-50%) translateX(-50%) rotate(0)     ;  -ms-transform: translateY(-50%) translateX(-50%) rotate(0)      ;   transform: translateY(-50%) translateX(-50%) rotate(0)      ;}
			                100%    { -webkit-transform: translateY(-50%) translateX(-50%) rotate(359deg);  -ms-transform: translateY(-50%) translateX(-50%) rotate(359deg) ;   transform: translateY(-50%) translateX(-50%) rotate(359deg) ;}}
			                    @keyframes loader-circular-double-2nd {
			                0%      { -webkit-transform: translateY(-50%) translateX(-50%) rotate(0)      ; -ms-transform: translateY(-50%) translateX(-50%) rotate(0)      ;   transform: translateY(-50%) translateX(-50%) rotate(0)      ;}
			                100%    { -webkit-transform: translateY(-50%) translateX(-50%) rotate(-359deg); -ms-transform: translateY(-50%) translateX(-50%) rotate(-359deg);   transform: translateY(-50%) translateX(-50%) rotate(-359deg);}}
			    `
			    },

			// loader-circular-simple
			    {
			    name : 'loader-circular-simple' ,
			    code : 
			    `    /* loader-circular-simple */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-circular-simple { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-circular-simple .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-circular-simple .loader_element1,
			                .loader-circular-simple .websiteLoader_container:before {
			                    border: 15px solid #FFFFFF;
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/
			                .loader-circular-simple .loader_element  { 
			                    -webkit-animation-duration: 1000ms; 
			                            animation-duration: 1000ms; 
			                }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/

			            .loader-circular-simple .websiteLoader_container {
			                display: -webkit-box;   display: -ms-flexbox;   
			                display: -webkit-flex;  display: flex;
			                align-items: center;    justify-content: center;
			            }

			            .loader-circular-simple .loader_element {
			                background-color: transparent !important;
			            }

			            .loader-circular-simple .loader_element1,
			            .loader-circular-simple .websiteLoader_container:before {
			                width: 100%; height: 100%;
			                border-radius: 50%;
			            }

			            .loader-circular-simple .websiteLoader_container:before {
			                content: '';
			                position: absolute; 
			                width: 100%; height: 100%;
			                top: 0; left: 0;

			                opacity: 0.1;
			                background-color: transparent !important;
			            }

			            .loader-circular-simple .loader_element1 {
			                border-top-color:   transparent;
			                border-right-color: transparent;
			                border-left-color:  transparent;
			            }

			            .loader-circular-simple .loader_element1 {
			                -webkit-animation: loader-circular-simple infinite linear;
			                        animation: loader-circular-simple infinite linear;
			            }

			        /* Animation */
			        /* ----------------------------------------*/

			            @-webkit-keyframes loader-circular-simple {
			                0%   {  -webkit-transform: rotate(0deg)     ;   -ms-transform: rotate(0deg)     ;   transform: rotate(0deg)     ;}
			                100% {  -webkit-transform: rotate(359deg)   ;   -ms-transform: rotate(359deg)   ;   transform: rotate(359deg)   ;}
			            }
			                    @keyframes loader-circular-simple {
			                0%   {  -webkit-transform: rotate(0deg)     ;   -ms-transform: rotate(0deg)     ;   transform: rotate(0deg)     ;}
			                100% {  -webkit-transform: rotate(359deg)   ;   -ms-transform: rotate(359deg)   ;   transform: rotate(359deg)   ;}
			            }
			    `
			    },

			// loader-flipsquare
			    {
			    name : 'loader-flipsquare' ,
			    code : 
			    `    /* loader-flipSquare */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-flipSquare { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-flipSquare .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-flipSquare .loader_element1 {
			                    background-color: #FFFFFF;
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/
			                .loader-flipSquare .loader_element  { 
			                    -webkit-animation-duration: 2250ms; 
			                            animation-duration: 2250ms; 
			                }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/

			            .loader-flipSquare .loader_element1 {
			                width: 100%;    height: 100%;

			                -webkit-animation: loader-flipSquare infinite ease-in-out;
			                        animation: loader-flipSquare infinite ease-in-out;
			            }

			            .loader-flipSquare .loader_element2 , 
			            .loader-flipSquare .loader_element3 , 
			            .loader-flipSquare .loader_element4 {
			                display: none !important;
			            }

			        /* Animation */
			        /* ----------------------------------------*/

			            @-webkit-keyframes loader-flipSquare {
			                0%   { -webkit-transform: perspective(1000px)                                   ;   -ms-transform: perspective(1000px)                                  ;  transform: perspective(1000px)                                   ;}
			                25%  { -webkit-transform: perspective(1000px)  rotateY(180deg)                  ;   -ms-transform: perspective(1000px)  rotateY(180deg)                 ;  transform: perspective(1000px)  rotateY(180deg)                  ;}
			                50%  { -webkit-transform: perspective(1000px)  rotateY(180deg) rotateX(180deg)  ;   -ms-transform: perspective(1000px)  rotateY(180deg) rotateX(180deg) ;  transform: perspective(1000px)  rotateY(180deg) rotateX(180deg)  ;}
			                75%  { -webkit-transform: perspective(1000px)  rotateY(360deg) rotateX(180deg)  ;   -ms-transform: perspective(1000px)  rotateY(360deg) rotateX(180deg) ;  transform: perspective(1000px)  rotateY(360deg) rotateX(180deg)  ;}
			                100% { -webkit-transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)    ;   -ms-transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)   ;  transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)    ;}}

			                    @keyframes loader-flipSquare {
			                0%   { -webkit-transform: perspective(1000px)                                   ;   -ms-transform: perspective(1000px)                                  ;  transform: perspective(1000px)                                   ;}
			                25%  { -webkit-transform: perspective(1000px)  rotateY(180deg)                  ;   -ms-transform: perspective(1000px)  rotateY(180deg)                 ;  transform: perspective(1000px)  rotateY(180deg)                  ;}
			                50%  { -webkit-transform: perspective(1000px)  rotateY(180deg) rotateX(180deg)  ;   -ms-transform: perspective(1000px)  rotateY(180deg) rotateX(180deg) ;  transform: perspective(1000px)  rotateY(180deg) rotateX(180deg)  ;}
			                75%  { -webkit-transform: perspective(1000px)  rotateY(360deg) rotateX(180deg)  ;   -ms-transform: perspective(1000px)  rotateY(360deg) rotateX(180deg) ;  transform: perspective(1000px)  rotateY(360deg) rotateX(180deg)  ;}
			                100% { -webkit-transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)    ;   -ms-transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)   ;  transform: perspective(1000px)  rotateY(360deg) rotateX(0deg)    ;}}
			    `
			    },

			// loader-pulse
			    {
			    name : 'loader-pulse' ,
			    code : 
			    `    /* loader-pulse */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-pulse { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-pulse .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-pulse .loader_element {
			                    background-color: #FFFFFF;
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/
			                .loader-pulse .loader_element  { -webkit-animation-duration: 1500ms; animation-duration: 1500ms; }
			                .loader-pulse .loader_element1 { -webkit-animation-delay:    -750ms; animation-delay:    -750ms; }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/

			            .loader-pulse .loader_element1, 
			            .loader-pulse .loader_element2 {
			                position: absolute;
			                left: 50%; top: 50%;
			                width: 100%; height: 100%;

			                opacity: 0.6;

			                border-radius: 50%;
			                -webkit-animation: loader-pulse infinite ease-in-out;
			                        animation: loader-pulse infinite ease-in-out;
			            }

			            .loader-pulse .loader_element3, 
			            .loader-pulse .loader_element4 {
			                display: none !important;
			            }

			        /* Animation */
			        /* ----------------------------------------*/

			            @-webkit-keyframes loader-pulse {
			                0%, 100%    { -webkit-transform: translateX(-50%) translateY(-50%) scale(0.0);  -ms-transform: translateX(-50%) translateY(-50%) scale(0.0);        transform: translateX(-50%) translateY(-50%) scale(0.0); }
			                50%         { -webkit-transform: translateX(-50%) translateY(-50%) scale(1.0);  -ms-transform: translateX(-50%) translateY(-50%) scale(1.0);        transform: translateX(-50%) translateY(-50%) scale(1.0); }}

			            @keyframes loader-pulse {
			                0%, 100%    { -webkit-transform: translateX(-50%) translateY(-50%) scale(0.0);  -ms-transform: translateX(-50%) translateY(-50%) scale(0.0);        transform: translateX(-50%) translateY(-50%) scale(0.0); }
			                50%         { -webkit-transform: translateX(-50%) translateY(-50%) scale(1.0);  -ms-transform: translateX(-50%) translateY(-50%) scale(1.0);        transform: translateX(-50%) translateY(-50%) scale(1.0); }}
			    `
			    },

			// loader-bubbles
			    {
			    name : 'loader-bubbles' ,
			    code : 
			    `    /* loader-bubbles & loader-bubbles-pop */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-bubbles,
			                .websiteLoader.loader-bubbles-pop { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-bubbles     .websiteLoader_container,
			                .loader-bubbles-pop .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-bubbles     .loader_element,
			                .loader-bubbles-pop .loader_element {
			                    background-color: #FFFFFF;
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-bubbles     .loader_element:before,  
			                .loader-bubbles-pop .loader_element:before  { -webkit-animation-duration: 3000ms; animation-duration: 3000ms; }

			                .loader-bubbles     .loader_element2:before, 
			                .loader-bubbles-pop .loader_element2:before { -webkit-animation-delay:    -375ms; animation-delay:    -375ms; }

			                .loader-bubbles     .loader_element3:before, 
			                .loader-bubbles-pop .loader_element3:before { -webkit-animation-delay:    -750ms; animation-delay:    -750ms; }

			                .loader-bubbles     .loader_element4:before, 
			                .loader-bubbles-pop .loader_element4:before { -webkit-animation-delay:   -1125ms; animation-delay:   -1125ms; }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/

			            .loader-bubbles     .loader_element,
			            .loader-bubbles-pop .loader_element {
			                position: absolute; 
			                left: 50%;  top: 50%;
			                width: 20%; height: 100%;

			                background-color: transparent !important;
			            }

			            .loader-bubbles     .loader_element1, 
			            .loader-bubbles-pop .loader_element1 { -webkit-transform: translateX(-50%) translateY(-50%)                 ;   -ms-transform: translateX(-50%) translateY(-50%)                ;   transform: translateX(-50%) translateY(-50%)                ;}
			            .loader-bubbles     .loader_element2, 
			            .loader-bubbles-pop .loader_element2 { -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg)   ;   -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg)  ;   transform: translateX(-50%) translateY(-50%) rotate(45deg)  ;}
			            .loader-bubbles     .loader_element3, 
			            .loader-bubbles-pop .loader_element3 { -webkit-transform: translateX(-50%) translateY(-50%) rotate(90deg)   ;   -ms-transform: translateX(-50%) translateY(-50%) rotate(90deg)  ;   transform: translateX(-50%) translateY(-50%) rotate(90deg)  ;}
			            .loader-bubbles     .loader_element4, 
			            .loader-bubbles-pop .loader_element4 { -webkit-transform: translateX(-50%) translateY(-50%) rotate(135deg)  ;   -ms-transform: translateX(-50%) translateY(-50%) rotate(135deg) ;   transform: translateX(-50%) translateY(-50%) rotate(135deg) ;}

			            .loader-bubbles     .loader_element:before,
			            .loader-bubbles-pop .loader_element:before {
			                content: '';
			                position: absolute;
			                width:  100%; height: 20%;

			                -webkit-transform: translateX(0) translateY(0);
			                    -ms-transform: translateX(0) translateY(0);
			                        transform: translateX(0) translateY(0);
			                border-radius: 50%;
			            }

			        /* Animation */
			        /* ----------------------------------------*/

			            .loader-bubbles .loader_element:before { 
			                -webkit-animation: loader-bubbles infinite linear;   
			                        animation: loader-bubbles infinite linear; 
			            }
			            @-webkit-keyframes loader-bubbles {
			                0%   { transform: translateY(0)     scale(1)    ;}
			                25%  { transform: translateY(200%)  scale(0.5)  ;}
			                50%  { transform: translateY(400%)  scale(1)    ;}
			                75%  { transform: translateY(200%)  scale(0.5)  ;}
			                100% { transform: translateY(0)     scale(1)    ;}
			            }
			            @keyframes loader-bubbles {
			                0%   { transform: translateY(0)     scale(1)    ;}
			                25%  { transform: translateY(200%)  scale(0.5)  ;}
			                50%  { transform: translateY(400%)  scale(1)    ;}
			                75%  { transform: translateY(200%)  scale(0.5)  ;}
			                100% { transform: translateY(0)     scale(1)    ;}
			            }

			            .loader-bubbles-pop .loader_element:before { 
			                -webkit-animation: loader-bubbles-pop infinite linear;      
			                        animation: loader-bubbles-pop infinite linear;  
			            }

			            @-webkit-keyframes loader-bubbles-pop {
			                0%          { transform: translateY(0)      scale(1.1)  ; opacity: 1;}
			                2%          { transform: translateY(0)      scale(1.1)  ; opacity: 0;}
			                23%         { transform: translateY(200%)   scale(.5)   ; opacity: 0;}
			                25%         { transform: translateY(200%)   scale(.5)   ; opacity: 1;}
			                50%         { transform: translateY(400%)   scale(1.1)  ; opacity: 1;}
			                52%         { transform: translateY(400%)   scale(1.1)  ; opacity: 0;}
			                73%         { transform: translateY(200%)   scale(.5)   ; opacity: 0;}
			                75%         { transform: translateY(200%)   scale(.5)   ; opacity: 1;}
			                100%        { transform: translateY(0)      scale(1.1)  ; opacity: 1;}
			            }
			            @keyframes loader-bubbles-pop {
			                0%          { transform: translateY(0)      scale(1.1)  ; opacity: 1;}
			                2.5%        { transform: translateY(0)      scale(1.1)  ; opacity: 0;}
			                22.5%       { transform: translateY(200%)   scale(.5)   ; opacity: 0;}
			                25%         { transform: translateY(200%)   scale(.5)   ; opacity: 1;}
			                50%         { transform: translateY(400%)   scale(1.1)  ; opacity: 1;}
			                52.5%       { transform: translateY(400%)   scale(1.1)  ; opacity: 0;}
			                72.5%       { transform: translateY(200%)   scale(.5)   ; opacity: 0;}
			                75%         { transform: translateY(200%)   scale(.5)   ; opacity: 1;}
			                100%        { transform: translateY(0)      scale(1.1)  ; opacity: 1;}
			            }
			    `
			    },

			// loader-cubes
			    {
			    name : 'loader-cubes' ,
			    code : 
			    `    /* loader-cubes */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-cubes { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-cubes .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-cubes .loader_element {
			                    background-color: #FFFFFF;
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-cubes .loader_element  { -webkit-animation-duration: 2500ms; animation-duration: 2500ms; }
			                .loader-cubes .loader_element2 { -webkit-animation-delay:   -1250ms; animation-delay:   -1250ms; }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/

			            .loader-cubes .loader_element1,
			            .loader-cubes .loader_element2 {
			                position: absolute;
			                top: 0; left: 0;
			                width: 20%; height: 20%;

			                -webkit-animation: loader-cubes infinite ease-in-out;
			                        animation: loader-cubes infinite ease-in-out;
			            }

			            .loader-cubes .loader_element3,
			            .loader-cubes .loader_element4 {
			                display: none !important;
			            }

			        /* Animation */
			        /* ----------------------------------------*/

			            @-webkit-keyframes loader-cubes {
			              25%   {   -webkit-transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;
			                            -ms-transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;
			                                transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;} 
			              50%   {   -webkit-transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;
			                            -ms-transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;
			                                transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;} 
			              50.1% {   -webkit-transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;
			                            -ms-transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;
			                                transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;} 
			              75%   {   -webkit-transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;
			                            -ms-transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;
			                                transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;} 
			              100%  {   -webkit-transform:                                          rotate(-360deg)                 ;
			                            -ms-transform:                                          rotate(-360deg)                 ;
			                                transform:                                          rotate(-360deg)                 ;}
			            }
			                    @keyframes loader-cubes {
			              25%   {   -webkit-transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;
			                            -ms-transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;
			                                transform:  translateX(400%)                        rotate(-90deg)      scale(0.5)  ;} 
			              50%   {   -webkit-transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;
			                            -ms-transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;
			                                transform:  translateX(400%)    translateY(400%)    rotate(-179deg)                 ;} 
			              50.1% {   -webkit-transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;
			                            -ms-transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;
			                                transform:  translateX(400%)    translateY(400%)    rotate(-180deg)                 ;} 
			              75%   {   -webkit-transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;
			                            -ms-transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;
			                                transform:  translateX(0)       translateY(400%)    rotate(-270deg)     scale(0.5)  ;} 
			              100%  {   -webkit-transform:                                          rotate(-360deg)                 ;
			                            -ms-transform:                                          rotate(-360deg)                 ;
			                                transform:                                          rotate(-360deg)                 ;}
			            }

			    `
			    },

			// loader-yinyang
			    {
			    name : 'loader-yinyang' ,
			    code :
			    `    /* loader-yinyang */
			    /* ----------------------------------------*/

			        /* Commonly modified properties */
			        /* ----------------------------------------*/

			            /* Container Background Color */
			            /* ----------------------------------------*/
			                .websiteLoader.loader-yinyang { 
			                    background-color: black; 
			                }

			            /* Spinner Size - keep width and height equal */
			            /* ----------------------------------------*/
			                .loader-yinyang .websiteLoader_container {
			                    width:  100px;  height: 100px; 
			                }

			            /* Spinner Elements */ 
			            /* ----------------------------------------*/
			                .loader-yinyang .loader_element1,
			                .loader-yinyang .loader_element3,
			                .loader-yinyang .loader_element4:before { 
			                    background-color: #000000;
			                }
			                .loader-yinyang .loader_element2,
			                .loader-yinyang .loader_element4,
			                .loader-yinyang .loader_element3:before  { 
			                    background-color: #FFFFFF;
			                }

			            /* Speed & Delay */
			            /* ----------------------------------------*/

			                .loader-yinyang .websiteLoader_container { -webkit-animation-duration: 1500ms; animation-duration: 1500ms; }

			        /* Container */
			        /* ----------------------------------------*/

			            .websiteLoader {
			                position: relative;

			                display: -webkit-box;    display: -ms-flexbox;  
			                display: -webkit-flex;   display: flex;
			                justify-content: center; align-items: center;
			            }

			            /* Full Size | Disabled */
			            /* ----------------------------------------*/

			                .websiteLoader.fixed-and-fullSize { 
			                    position: fixed; z-index: 9999;
			                    width: 100vw; height: 100vh;
			                    left: 0; top: 0;
			                }

			                .websiteLoader.loader-disabled { 
			                    display: none !important; 
			                }

			        /* Style */
			        /* ----------------------------------------*/

			            .loader-yinyang .websiteLoader_container {
			                border-radius: 50%;
			                overflow: hidden;
			                animation: loader-yinyang linear infinite;
			            }

			            /* Large Circles */
			            .loader-yinyang .loader_element1,
			            .loader-yinyang .loader_element2 { 
			                position: absolute;
			                width: 50%; height: 100%;
			                top: 0;
			            }
			            .loader-yinyang .loader_element1 { left:  0; }
			            .loader-yinyang .loader_element2 { right: 0; }

			            /* Circle Overlays */
			            .loader-yinyang .loader_element3,
			            .loader-yinyang .loader_element4 {
			                position: absolute;
			                width: 50%;  height: 50%;
			                border-radius: 50%;
			                left: 25%;
			            }
			            .loader-yinyang .loader_element3 { top:    0; }
			            .loader-yinyang .loader_element4 { bottom: 0; }

			            /* Small circles */
			            .loader-yinyang .loader_element3:before,
			            .loader-yinyang .loader_element4:before {
			                content:'';
			                position: absolute;
			                top:   30%; left:   30%;
			                width: 40%; height: 40%;
			                border-radius: 50%;
			            }

			        /* Animation */
			        /* ----------------------------------------*/

			            @-webkit-keyframes loader-yinyang {
			                0%   { -webkit-transform: rotate(0)     ;  -ms-transform: rotate(0)     ;  transform: rotate(0)     ; }
			                100% { -webkit-transform: rotate(359deg);  -ms-transform: rotate(359deg);  transform: rotate(359deg); }}

			            @keyframes loader-yinyang {
			                0%   { -webkit-transform: rotate(0)     ;  -ms-transform: rotate(0)     ;  transform: rotate(0)     ; }
			                100% { -webkit-transform: rotate(359deg);  -ms-transform: rotate(359deg);  transform: rotate(359deg); }}
			    `
			    }
		];

		finalCode_codeBlocks_css_singular = byAndu_codeBlock_formatCodeString(finalCode_codeBlocks_css_singular);
		byAndu_codeBlock_generateInnerHTML(finalCode_codeBlocks_css_singular , 'css-singular');

		byAndu_current_codeSnippets = finalCode_codeBlocks_css_singular;

	})();
