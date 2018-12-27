
	(function(){

		var demoItemsArray = [
			'imgHvr-flash'				, 	'imgHvr-shine'				,
			'imgHvr-zoomIn'				, 	'imgHvr-zoomOut'			,
			'imgHvr-zoomIn-rotateLeft'	, 	'imgHvr-zoomIn-rotateRight'	, 
			'imgHvr-zoomOut-rotateLeft'	, 	'imgHvr-zoomOut-rotateRight'
		];

		// Generate demos
		// --------------------------------

			var generateDemos_container = document.getElementById('__route__mainView__generateDemos');

			demoItemsArray.map(function(effect) {
				var newElem = document.createElement('div');
				newElem.classList = 'col-12 sm-col-6 md-col-3 p-sm';
				newElem.innerHTML = 
				'<div class="demoItem-container demoItem-container-'+effect+'" data-finalCodeId="'+effect+'" data-hvr-hideText="'+effect+'"> '	+
					'<div class="demoItem '+effect+'"> <img src="../../images/imgHvr-testImg-1.jpg"/> <div>' 									+
				'</div> '																														;
				generateDemos_container.appendChild(newElem);
			});

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// General Init
					{
					name : null ,
					code : 	
					`    /* Image Hover Effects */
				    /* --------------------------------------- */

					`
					},

				// imgHvr-flash
					{
					name : 'imgHvr-flash' ,
					code : 
					`        /* Flash */
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
				                    @keyframes imgHvr-flash { 0%   { opacity: .4 ;} 100% { opacity:  1 ;} }
					`
					},

				// imgHvr-shine
					{
					name : 'imgHvr-shine' ,
					code : 	
					`        /* Shine */
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
				                    @keyframes imgHvr-shine  { 100% { left: 125%; } } 
				    `
					},

				// imgHvr-zoomIn
					{
					name : 'imgHvr-zoomIn' ,
					code : 	
					`        /* Zoom-in */
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
				            }
					`
					},

				// imgHvr-zoomOut
					{
					name : 'imgHvr-zoomOut' ,
					code : 	
					`        /* Zoom-out */
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
				            }
					`
					},

				// imgHvr-zoomIn-rotateLeft
					{
					name : 'imgHvr-zoomIn-rotateLeft' ,
					code : 	
					`        /* ZoomIn - rotate Left */
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
				            }
					`
					},

				// imgHvr-zoomIn-rotateRight
					{
					name : 'imgHvr-zoomIn-rotateRight' ,
					code : 	
					`        /* ZoomIn - rotate Right */
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
				            }
					`
					},

				// imgHvr-zoomOut-rotateLeft
					{
					name : 'imgHvr-zoomOut-rotateLeft' ,
					code : 	
					`        /* ZoomOut - rotate Left */
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
				            }
					`
					},

				// imgHvr-zoomOut-rotateRight
					{
					name : 'imgHvr-zoomOut-rotateRight' ,
					code : 	
					`        /* ZoomOut - rotate Right */
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
				            }
					`
					},

				// imgHvr-blur
					{
					name : 'imgHvr-blur' ,
					code : 	
					`        /* Blur */
				        /* --------------------------------------- */

				            .imgHvr-blur {
				                padding: 0 !important;
				                overflow: hidden;
				            }

				            .imgHvr-blur          img {
				                -webkit-transition: filter .5s; 
				                   -moz-transition: filter .5s; 
				                     -o-transition: filter .5s; 
				                        transition: filter .5s; 
				                width: 100%;  
				                -webkit-filter: blur(0);
				                        filter: blur(0);
				            }
				            .imgHvr-blur:hover    img { 
				                -webkit-filter: blur(3px);   
				                        filter: blur(3px);
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
					css          : demoItemsArray 
				} ,

				codeBlocks : {
					css          : codeBlocks_css 
				} ,

				removeString       : 'hasFilter-' ,
				demoItems_codeLink : codeBlocks_css
			};

			byAndu.pageConfigObj_setupObj(paramObj);
			byAndu.pageConfigObj_runConfig();

		// Generate codeBlocks innerHTML - HTML
		// --------------------------------

			var htmlCodeContainer = document.getElementById('codeSection-html');

			demoItemsArray.map(function(effect){

				var newElem = document.createElement('PRE');

				newElem.classList = 'finalCode-block hidden';
				newElem.classList.add('finalCode-block-'+effect);
				newElem.setAttribute('data-finalCodeId', effect);

				newElem.innerHTML = '    &lt;div class="'+effect+'"> &lt;img src="insertImgSrc"/> &lt;/div> '

				htmlCodeContainer.appendChild(newElem);
			});

			htmlCodeContainer.getElementsByClassName('finalCode-block')[0].classList.remove('hidden');


	})();
