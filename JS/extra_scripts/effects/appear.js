

	// Generate Demos
	// --------------------------------

		(function(){

			var demoItemsArray = [
				'appear-slideIn-left'		, 'appear-slideIn-right'	, 'appear-slideIn-top'			, 'appear-slideIn-btm'		,
				'appear-spinIn-left'		, 'appear-spinIn-right'		, 'appear-spinIn-top'			, 'appear-spinIn-btm'		, 
				'appear-flyIn-left'			, 'appear-flyIn-right'		, 'appear-flyIn-top'			, 'appear-flyIn-btm'		,
				'appear-landIn-left'		, 'appear-landIn-right'		, 'appear-landIn-top'			, 'appear-landIn-btm'		, 
				'appear-fallIn-bwd-left'	, 'appear-fallIn-bwd-right'	, 'appear-fallIn-bwd-top'		, 'appear-fallIn-bwd-btm'	,
				'appear-fallIn-fwd-left'	, 'appear-fallIn-fwd-right'	, 'appear-fallIn-fwd-top'		, 'appear-fallIn-fwd-btm'	,
				'appear-fadeIn'				, 'appear-scaleIn'			, 'appear-popIn'
			];

			var cssOptionsArray = [
				'slideIn' , 'spinIn' , 'flyIn' , 'landIn' , 'fallIn-bwd' , 'fallIn-fwd' , 'fadeIn' , 'scaleIn' , 'popIn' , 'delays'
			]

			// Generate demos
			// --------------------------------

				var generateDemos_container = document.getElementsByClassName('_route_mainView-generateDemos')[0];

				demoItemsArray.map(function(effect) {
					var newDemo = document.createElement('div');
					newDemo.classList = 'col-6 sm-col-3 p-sm';
					newDemo.innerHTML = 
						'<div class="demoItem-container demoItem-container-'+effect+' effectsContainer-perspective" data-finalCodeId="'+effect+'"> '	+
							'<div class="col-12 demoItem appearEffects-apply hasAppearEffect '+effect+'"> ' + 
								' <b> <span class="xs-visible">'+effect.replace('appear-','')+' </span> <span class="xs-hidden">'+effect+' </b> ' + 
							' </div> ' 	+
						'</div> '																													;
					generateDemos_container.appendChild(newDemo);
				});

			// Code Blocks
			// --------------------------------

				var codeBlocks_css = [

					// shared
						{
						name : null ,
						code : 	
						`    /* Enter-Exit Effects */
					    /* ------------------------------------------------- */

					        /* Shared Styling */
					        /* ------------------------------------------------- */

					            .hasAppearEffect { 
					                opacity: 0; 
					                -webkit-transition: transform .5s, opacity .5s;
					                   -moz-transition: transform .5s, opacity .5s;
					                     -o-transition: transform .5s, opacity .5s;  
					                        transition: transform .5s, opacity .5s; 
					                -webkit-transform-style: preserve-3d;
					                    -ms-transform-style: preserve-3d;
					                        transform-style: preserve-3d;
					                pointer-events: none;
					            }

					        /* Extra Parent-class - perspective required for riseIn-* | landIn-* | fallIn-* */
					        /* ------------------------------------------------- */

					            .effectsContainer-perspective { 
					                -webkit-perspective: 1300px;
					                        perspective: 1300px; 
					            }
						`
						},

					// slideIn
						{
						name : 'slideIn' ,
						code : 	
						`        /* Slide */
					        /* ------------------------------------------------- */

					            .slideIn-left   { -webkit-transform: translateX(-25%); -ms-transform: translateX(-25%); transform: translateX(-25%);}
					            .slideIn-right  { -webkit-transform: translateX( 25%); -ms-transform: translateX( 25%); transform: translateX( 25%);}
					            .slideIn-top    { -webkit-transform: translateY(-25%); -ms-transform: translateY(-25%); transform: translateY(-25%);}
					            .slideIn-btm    { -webkit-transform: translateY( 25%); -ms-transform: translateY( 25%); transform: translateY( 25%);}
						`
						},

					// spinIn
						{
						name : 'spinIn' ,
						code : 	
						`        /* Spin */
					        /* ------------------------------------------------- */

					            .spinIn-left {
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(180.5deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(180.5deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(180.5deg) scale(1);
					            }

					            .spinIn-right {
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(-180deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(-180deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(-180deg) scale(1);
					            }

					            .spinIn-top {
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(-180deg) rotateY(0deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(-180deg) rotateY(0deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(-180deg) rotateY(0deg) scale(1);
					            }

					            .spinIn-btm {
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(180.5deg) rotateY(0deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(180.5deg) rotateY(0deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(180.5deg) rotateY(0deg) scale(1);
					            }
						`
						},

					// flyIn
						{
						name : 'flyIn' ,
						code : 	
						`        /* Fly */
					        /* ------------------------------------------------- */

					            .flyIn-left {
					                -webkit-transform-origin: 50% 50% -300px;
					                    -ms-transform-origin: 50% 50% -300px;
					                        transform-origin: 50% 50% -300px;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateY(180.5deg) scale(.5);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateY(180.5deg) scale(.5);
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateY(180.5deg) scale(.5);
					            }

					            .flyIn-right {
					                -webkit-transform-origin: 50% 50% -300px;
					                    -ms-transform-origin: 50% 50% -300px;
					                        transform-origin: 50% 50% -300px;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateY(-180deg) scale(.5);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateY(-180deg) scale(.5);
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateY(-180deg) scale(.5);
					            }

					            .flyIn-top {
					                -webkit-transform-origin: 50% 50% -300px;
					                    -ms-transform-origin: 50% 50% -300px;
					                        transform-origin: 50% 50% -300px;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(180deg) scale(.5);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(180deg) scale(.5);
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(180deg) scale(.5);
					            }

					            .flyIn-btm {
					                -webkit-transform-origin: 50% 50% -300px;
					                    -ms-transform-origin: 50% 50% -300px;
					                        transform-origin: 50% 50% -300px;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(-180deg) scale(.5);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(-180deg) scale(.5);
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(-180deg) scale(.5);
					            }
						`
						},

					// landIn
						{
						name : 'landIn' ,
						code : 	
						`        /* Land */
					        /* ------------------------------------------------- */

					            .landIn-left {
					                -webkit-transform: translateZ(400px) translateX(-300px) rotateY(-90deg);
					                    -ms-transform: translateZ(400px) translateX(-300px) rotateY(-90deg);
					                        transform: translateZ(400px) translateX(-300px) rotateY(-90deg);
					            }

					            .landIn-right {
					                -webkit-transform: translateZ(400px) translateX(300px) rotateY(90deg);
					                    -ms-transform: translateZ(400px) translateX(300px) rotateY(90deg);
					                        transform: translateZ(400px) translateX(300px) rotateY(90deg);
					            }

					            .landIn-top {
					                -webkit-transform: translateZ(400px) translateY(-300px) rotateX(90deg);
					                    -ms-transform: translateZ(400px) translateY(-300px) rotateX(90deg);
					                        transform: translateZ(400px) translateY(-300px) rotateX(90deg);
					            }

					            .landIn-btm {
					                -webkit-transform: translateZ(400px) translateY(300px) rotateX(-90deg);
					                    -ms-transform: translateZ(400px) translateY(300px) rotateX(-90deg);
					                        transform: translateZ(400px) translateY(300px) rotateX(-90deg);
					            }
						`
						},

					// fallIn-bwd
						{
						name : 'fallIn-bwd' ,
						code : 	
						`        /* Fall Backwards */
					        /* ------------------------------------------------- */

					            .fallIn-bwd-left {
					                -webkit-transform-origin: 0% 0%;
					                    -ms-transform-origin: 0% 0%;
					                        transform-origin: 0% 0%;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(-80deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(-80deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(-80deg) scale(1);
					            }

					            .fallIn-bwd-right {
					                -webkit-transform-origin: 100% 100%;
					                    -ms-transform-origin: 100% 100%;
					                        transform-origin: 100% 100%;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(80deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(80deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(80deg) scale(1);
					            }

					            .fallIn-bwd-top {
					                -webkit-transform-origin: 0% 0%;
					                    -ms-transform-origin: 0% 0%;
					                        transform-origin: 0% 0%;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(80deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(80deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(80deg) scale(1);
					            }

					            .fallIn-bwd-btm {
					                -webkit-transform-origin: 100% 100%;
					                    -ms-transform-origin: 100% 100%;
					                        transform-origin: 100% 100%;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(-80deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(-80deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(-80deg) scale(1);
					            }
						`
						},

					// fallIn-fwd
						{
						name : 'fallIn-fwd' ,
						code : 	
						`        /* Fall Forwards */
					        /* ------------------------------------------------- */

					            .fallIn-fwd-left {
					                -webkit-transform-origin: 0% 0%;
					                    -ms-transform-origin: 0% 0%;
					                        transform-origin: 0% 0%;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(80deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(80deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(80deg) scale(1);
					            }

					            .fallIn-fwd-right {
					                -webkit-transform-origin: 100% 100%;
					                    -ms-transform-origin: 100% 100%;
					                        transform-origin: 100% 100%;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(-80deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(-80deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px)  rotateY(-80deg) scale(1);
					            }

					            .fallIn-fwd-top {
					                -webkit-transform-origin: 0% 0%;
					                    -ms-transform-origin: 0% 0%;
					                        transform-origin: 0% 0%;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(-80deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(-80deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(-80deg) scale(1);
					            }

					            .fallIn-fwd-btm {
					                -webkit-transform-origin: 100% 100%;
					                    -ms-transform-origin: 100% 100%;
					                        transform-origin: 100% 100%;
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(80deg) scale(1);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(80deg) scale(1);
					                        transform: translateZ(0px) translateX(0px) translateY(0px)  rotateX(80deg) scale(1);
					            }
						`
						},

					// fadeIn
						{
						name : 'fadeIn' ,
						code : 	
						`        /* FadeIn */
					        /* ------------------------------------------------- */

					            .fadeIn     {
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(1);  
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(1);  
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(1); 
					            } 
						`
						},

					// scaleIn
						{
						name : 'scaleIn' ,
						code : 	
						`        /*  ScaleIn */
					        /* ------------------------------------------------- */

					            .scaleIn        { 
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(0);  
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(0);  
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(0); 
					            } 
						`
						},

					// popIn
						{
						name : 'popIn' ,
						code : 	
						`       /* PopIn */
					        /* ------------------------------------------------- */

					            .popIn { 
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(0.8);
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(0.8);
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(0.8);
					            }
						`
						},

					// apply effect
						{
						name : null ,
						code : 	
						`        /* [Apply-Effect] Class  */
					        /* ------------------------------------------------- */

					            .appearEffects-apply {
					                -webkit-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(1);  
					                    -ms-transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(1);  
					                        transform: translateZ(0px) translateX(0px) translateY(0px) rotateX(0deg) scale(1); 
					                opacity: 1;
					                pointer-events: auto;
					            }
						`
						},

					// delay classes
						{
						name : 'delays' ,
						code : 	
						`        /* Delay */
					        /* ------------------------------------------------- */

					            .enter-delay-100  { -webkit-transition-delay: 0.1s;   -moz-transition-delay: 0.1s;   -o-transition-delay: 0.1s;   transition-delay: 0.1s; }
					            .enter-delay-200  { -webkit-transition-delay: 0.2s;   -moz-transition-delay: 0.2s;   -o-transition-delay: 0.2s;   transition-delay: 0.2s; }
					            .enter-delay-300  { -webkit-transition-delay: 0.3s;   -moz-transition-delay: 0.3s;   -o-transition-delay: 0.3s;   transition-delay: 0.3s; }
					            .enter-delay-400  { -webkit-transition-delay: 0.4s;   -moz-transition-delay: 0.4s;   -o-transition-delay: 0.4s;   transition-delay: 0.4s; }
					            .enter-delay-500  { -webkit-transition-delay: 0.5s;   -moz-transition-delay: 0.5s;   -o-transition-delay: 0.5s;   transition-delay: 0.5s; }
					            .enter-delay-600  { -webkit-transition-delay: 0.6s;   -moz-transition-delay: 0.6s;   -o-transition-delay: 0.6s;   transition-delay: 0.6s; }
					            .enter-delay-700  { -webkit-transition-delay: 0.7s;   -moz-transition-delay: 0.7s;   -o-transition-delay: 0.7s;   transition-delay: 0.7s; }
					            .enter-delay-800  { -webkit-transition-delay: 0.8s;   -moz-transition-delay: 0.8s;   -o-transition-delay: 0.8s;   transition-delay: 0.8s; }
					            .enter-delay-900  { -webkit-transition-delay: 0.9s;   -moz-transition-delay: 0.9s;   -o-transition-delay: 0.9s;   transition-delay: 0.9s; }
					            .enter-delay-1000 { -webkit-transition-delay: 1s;     -moz-transition-delay: 1s;     -o-transition-delay: 1s;     transition-delay: 1s;   }
					            .enter-delay-1100 { -webkit-transition-delay: 1.1s;   -moz-transition-delay: 1.1s;   -o-transition-delay: 1.1s;   transition-delay: 1.1s; }
					            .enter-delay-1200 { -webkit-transition-delay: 1.2s;   -moz-transition-delay: 1.2s;   -o-transition-delay: 1.2s;   transition-delay: 1.2s; }
					            .enter-delay-1300 { -webkit-transition-delay: 1.3s;   -moz-transition-delay: 1.3s;   -o-transition-delay: 1.3s;   transition-delay: 1.3s; }
					            .enter-delay-1400 { -webkit-transition-delay: 1.4s;   -moz-transition-delay: 1.4s;   -o-transition-delay: 1.4s;   transition-delay: 1.4s; }
					            .enter-delay-1500 { -webkit-transition-delay: 1.5s;   -moz-transition-delay: 1.5s;   -o-transition-delay: 1.5s;   transition-delay: 1.5s; }
					            .enter-delay-1600 { -webkit-transition-delay: 1.6s;   -moz-transition-delay: 1.6s;   -o-transition-delay: 1.6s;   transition-delay: 1.6s; }
					            .enter-delay-1700 { -webkit-transition-delay: 1.7s;   -moz-transition-delay: 1.7s;   -o-transition-delay: 1.7s;   transition-delay: 1.7s; }
					            .enter-delay-1800 { -webkit-transition-delay: 1.8s;   -moz-transition-delay: 1.8s;   -o-transition-delay: 1.8s;   transition-delay: 1.8s; }
					            .enter-delay-1900 { -webkit-transition-delay: 1.9s;   -moz-transition-delay: 1.9s;   -o-transition-delay: 1.9s;   transition-delay: 1.9s; }
					            .enter-delay-2000 { -webkit-transition-delay: 2s;     -moz-transition-delay: 2s;     -o-transition-delay: 2s;     transition-delay: 2s;   }
					            .enter-delay-2100 { -webkit-transition-delay: 2.1s;   -moz-transition-delay: 2.1s;   -o-transition-delay: 2.1s;   transition-delay: 2.1s; }
					            .enter-delay-2200 { -webkit-transition-delay: 2.2s;   -moz-transition-delay: 2.2s;   -o-transition-delay: 2.2s;   transition-delay: 2.2s; }
					            .enter-delay-2300 { -webkit-transition-delay: 2.3s;   -moz-transition-delay: 2.3s;   -o-transition-delay: 2.3s;   transition-delay: 2.3s; }
					            .enter-delay-2400 { -webkit-transition-delay: 2.4s;   -moz-transition-delay: 2.4s;   -o-transition-delay: 2.4s;   transition-delay: 2.4s; }
					            .enter-delay-2500 { -webkit-transition-delay: 2.5s;   -moz-transition-delay: 2.5s;   -o-transition-delay: 2.5s;   transition-delay: 2.5s; }
					            .enter-delay-2600 { -webkit-transition-delay: 2.6s;   -moz-transition-delay: 2.6s;   -o-transition-delay: 2.6s;   transition-delay: 2.6s; }
					            .enter-delay-2700 { -webkit-transition-delay: 2.7s;   -moz-transition-delay: 2.7s;   -o-transition-delay: 2.7s;   transition-delay: 2.7s; }
					            .enter-delay-2800 { -webkit-transition-delay: 2.8s;   -moz-transition-delay: 2.8s;   -o-transition-delay: 2.8s;   transition-delay: 2.8s; }
					            .enter-delay-2900 { -webkit-transition-delay: 2.9s;   -moz-transition-delay: 2.9s;   -o-transition-delay: 2.9s;   transition-delay: 2.9s; }
					            .enter-delay-3000 { -webkit-transition-delay: 3s;     -moz-transition-delay: 3s;     -o-transition-delay: 3s;     transition-delay: 3s;   }
					            .enter-delay-3100 { -webkit-transition-delay: 3.1s;   -moz-transition-delay: 3.1s;   -o-transition-delay: 3.1s;   transition-delay: 3.1s; }
					            .enter-delay-3200 { -webkit-transition-delay: 3.2s;   -moz-transition-delay: 3.2s;   -o-transition-delay: 3.2s;   transition-delay: 3.2s; }
					            .enter-delay-3300 { -webkit-transition-delay: 3.3s;   -moz-transition-delay: 3.3s;   -o-transition-delay: 3.3s;   transition-delay: 3.3s; }
					            .enter-delay-3400 { -webkit-transition-delay: 3.4s;   -moz-transition-delay: 3.4s;   -o-transition-delay: 3.4s;   transition-delay: 3.4s; }
					            .enter-delay-3500 { -webkit-transition-delay: 3.5s;   -moz-transition-delay: 3.5s;   -o-transition-delay: 3.5s;   transition-delay: 3.5s; }
					            .enter-delay-3600 { -webkit-transition-delay: 3.6s;   -moz-transition-delay: 3.6s;   -o-transition-delay: 3.6s;   transition-delay: 3.6s; }
					            .enter-delay-3700 { -webkit-transition-delay: 3.7s;   -moz-transition-delay: 3.7s;   -o-transition-delay: 3.7s;   transition-delay: 3.7s; }
					            .enter-delay-3800 { -webkit-transition-delay: 3.8s;   -moz-transition-delay: 3.8s;   -o-transition-delay: 3.8s;   transition-delay: 3.8s; }
					            .enter-delay-3900 { -webkit-transition-delay: 3.9s;   -moz-transition-delay: 3.9s;   -o-transition-delay: 3.9s;   transition-delay: 3.9s; }
					            .enter-delay-4000 { -webkit-transition-delay: 4s;     -moz-transition-delay: 4s;     -o-transition-delay: 4s;     transition-delay: 4s;   }
					            .enter-delay-4100 { -webkit-transition-delay: 4.1s;   -moz-transition-delay: 4.1s;   -o-transition-delay: 4.1s;   transition-delay: 4.1s; }
					            .enter-delay-4200 { -webkit-transition-delay: 4.2s;   -moz-transition-delay: 4.2s;   -o-transition-delay: 4.2s;   transition-delay: 4.2s; }
					            .enter-delay-4300 { -webkit-transition-delay: 4.3s;   -moz-transition-delay: 4.3s;   -o-transition-delay: 4.3s;   transition-delay: 4.3s; }
					            .enter-delay-4400 { -webkit-transition-delay: 4.4s;   -moz-transition-delay: 4.4s;   -o-transition-delay: 4.4s;   transition-delay: 4.4s; }
					            .enter-delay-4500 { -webkit-transition-delay: 4.5s;   -moz-transition-delay: 4.5s;   -o-transition-delay: 4.5s;   transition-delay: 4.5s; }
					            .enter-delay-4600 { -webkit-transition-delay: 4.6s;   -moz-transition-delay: 4.6s;   -o-transition-delay: 4.6s;   transition-delay: 4.6s; }
					            .enter-delay-4700 { -webkit-transition-delay: 4.7s;   -moz-transition-delay: 4.7s;   -o-transition-delay: 4.7s;   transition-delay: 4.7s; }
					            .enter-delay-4800 { -webkit-transition-delay: 4.8s;   -moz-transition-delay: 4.8s;   -o-transition-delay: 4.8s;   transition-delay: 4.8s; }
					            .enter-delay-4900 { -webkit-transition-delay: 4.9s;   -moz-transition-delay: 4.9s;   -o-transition-delay: 4.9s;   transition-delay: 4.9s; }
					            .enter-delay-5000 { -webkit-transition-delay: 5s;     -moz-transition-delay: 5s;     -o-transition-delay: 5s;     transition-delay: 5s;   }
						`
						}
				];

				var codeBlocks_js = [

					// General Init
						{
						name : null ,
						code : 	
						`    // [asteriskObj] init - if necessary
					    // -----------------------------------------------------

					        var asteriskObj = asteriskObj || {} ;
					        asteriskObj.effects = asteriskObj.effects || {} ;

					    // Asterisk Effects - [EnterExit]
					    // -----------------------------------------------------

					        (function(){

					            // Effects.Object Setup 
					            // -----------------------------------------------------

					                asteriskObj.effects.enterExit = {};
					                var enterExitObj = asteriskObj.effects.enterExit;

					                enterExitObj.targetsRange = [];
						`
						},

					// Dependencies
						{
						name : 'dependencies' ,
						code :
						`            // Dependencies (not required if using [asterisk-utility.js])
					            // -----------------------------------------------------

					                // hasClass()
					                // -----------------------------------------------------

					                    if (hasClass === undefined) {

					                        function hasClass ( elem , klass ) {
					                            return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					                        }
					                    };
						`
						},

					// Main Code
						{
						name : null ,
						code :
						`            // Intermediary
					            // -----------------------------------------------------

					                // Generate Parameters for each Element/Container
					                // -----------------------------------------------------

					                    enterExitObj.target_generateParams = function(targetElement) {
					                        var rekt = targetElement.getBoundingClientRect();
					                        targetElement.yPosition_top     = rekt.top    ;
					                        targetElement.yPosition_bottom  = rekt.bottom ;
					                    };

					                // Apply the actual effect on an Element (will apply on call)
					                // -----------------------------------------------------

					                    enterExitObj.target_applyEffect = function(targetElement) {
					                        targetElement.classList.add('appearEffects-apply')
					                    };

					                // Check Range - Actual Function that checks and updates Effects on Elements
					                // -----------------------------------------------------

					                    enterExitObj.checkRange = function() {

					                        var current_Ytop = window.innerHeight * 0.9 + window.pageYOffset;
					                        var targetsRange = enterExitObj.targetsRange;

					                        targetsRange.map(function(scenario){

					                            if (scenario.triggerPoint < current_Ytop) {

					                                var targets = scenario.targets;

					                                if (scenario.setDelay != null) {

					                                    var delay = scenario.setDelay;
					                                    var index = 0;

					                                    targets.map(function(target) { applyEffect_timeout(target, delay * index) ; index++ });

					                                } else {

					                                    targets.map(target => enterExitObj.target_applyEffect(target) );

					                                };
					                                
					                                scenario.removeFromRange = true;

					                                // function for applying the effect through setTimeout - if container has set attribute of [data-setDelay]
					                                function applyEffect_timeout(current_target, current_delay) {
					                                    setTimeout( function(){ 
					                                        enterExitObj.target_applyEffect(current_target) 
					                                    }, current_delay)
					                                }
					                            }
					                        });

					                        enterExitObj.targetsRange = targetsRange.filter(function(item){ return item.removeFromRange !== true })
					                    };

					            // Functionality
					            // -----------------------------------------------------

					                // Generate Range - Initialization of all required parameters
					                // -----------------------------------------------------
					                
					                    enterExitObj.generateRange = function() {

					                        // Generate 'Containers' Objects
					                        // -----------------------------------------------------

					                            var effectSequence_containers = Array.from(document.getElementsByClassName('effectSequence-container'));

					                            effectSequence_containers.map(function(container){

					                                var targetElements = Array.from(container.getElementsByClassName('hasAppearEffect'));

					                                if (targetElements.length > 0) {

					                                    var newSequence = {};
					                                    newSequence.removeFromRange = false;

					                                    // set delay through JS
					                                    if (container.getAttribute('data-appearEffects-delay')) { newSequence.setDelay = container.getAttribute('data-appearEffects-delay') }
					                                    else                                            { newSequence.setDelay = null                                       };

					                                    enterExitObj.target_generateParams(container);
					                                    newSequence.triggerPoint = container.yPosition_top;

					                                    newSequence.targets = [];
					                                    targetElements.map(function(elem) { 
					                                        elem.classList.add('enterEffects-sequenced'); 
					                                        newSequence.targets.push(elem) 
					                                    });

					                                    // random order in which items will appear
					                                    if (container.getAttribute('data-randomOrderItems') === 'true') {
					                                        newSequence.targets = newSequence.targets.sort(function() { return 0.5 - Math.random() })
					                                    };

					                                    enterExitObj.targetsRange.push(newSequence);
					                                }
					                            });

					                        // Generate 'Individual' Objects
					                        // -----------------------------------------------------

					                            var selfTriggered_items = Array.from(document.getElementsByClassName('hasAppearEffect'));
					                            selfTriggered_items = selfTriggered_items.filter(function(item){ return !hasClass(item, 'enterEffects-sequenced') })

					                            selfTriggered_items.map(function(item){

					                                var newSequence = {};
					                                newSequence.removeFromRange = false;

					                                enterExitObj.target_generateParams(item);
					                                newSequence.triggerPoint = item.yPosition_top;

					                                newSequence.targets = [];
					                                newSequence.targets.push(item);

					                                enterExitObj.targetsRange.push(newSequence);

					                            });

					                        // Sort the enterExitObj.targetsRange array, ascending
					                        // -----------------------------------------------------

					                            array_sort_byValue(enterExitObj.targetsRange);
					                    };

					                // Check Scroll - checks every xxx miliseconds if update is necesary - stops when all elements have been updated
					                // -----------------------------------------------------
					            
					                    enterExitObj.checkScroll = function(){ 
					                        setTimeout(function(){
					                            enterExitObj.checkRange();
					                            if (enterExitObj.targetsRange.length > 0) { enterExitObj.checkScroll() }
					                        }, 300);
					                    };

					            // Init
					            // -----------------------------------------------------
					            
					                enterExitObj.init = function() {
					                    enterExitObj.generateRange();
					                    enterExitObj.checkScroll();
					                };

					        })();
						`
						}
				];

				codeBlocks_css = byAndu_codeBlock_formatCodeString(codeBlocks_css);
				codeBlocks_js  = byAndu_codeBlock_formatCodeString(codeBlocks_js);

			// Param Obj
			// --------------------------------

				var paramObj = {
					checkBoxes : {
						html : demoItemsArray ,
						css  : cssOptionsArray ,
					} ,

					codeBlocks : {
						css          : codeBlocks_css 
					} ,

					removeString : 'appear-' 
				};

				byAndu.pageConfigObj_setupObj(paramObj);
				byAndu.pageConfigObj_runConfig();

			// Generate options - myTest sequence
			// --------------------------------

				demoItemsArray.map(function(effect){
					var newOption = document.createElement('OPTION');
					newOption.value = effect;
					newOption.innerHTML = effect;
					document.getElementsByClassName('myTest-select-effect')[0].appendChild(newOption)
				});

			// Generate codeBlocks innerHTML - HTML
			// --------------------------------

                var htmlCodeContainer = document.getElementById('codeSection-html');

                demoItemsArray.map(function(effect){ 

                    var newElem = document.createElement('PRE');

                    newElem.classList = 'finalCode-block hidden';
                    newElem.classList.add('finalCode-block-'+effect);
                    newElem.setAttribute('data-finalCodeId', effect);

                    if (effect.indexOf('appear-flyIn-')  > -1 
                    ||  effect.indexOf('appear-landIn-') > -1 
                    ||  effect.indexOf('appear-fallIn-') > -1 ) { 
                        newElem.innerHTML = 
						'    &lt;div class="effectsContainer-perspective"> '				+ '\n' +
						'        &lt;div class="hasAppearEffect '+effect+'"> &lt;/div> '	+ '\n' +
						'    &lt;/div> '													;
                    } else {
                    	newElem.innerHTML = '    &lt;div class="hasAppearEffect '+effect+'"> &lt;/div> '
                    };
                       
                    htmlCodeContainer.appendChild(newElem);

                });

                htmlCodeContainer.getElementsByClassName('finalCode-block')[0].classList.remove('hidden');

			// Demo 'build-in' sequence effect
			// --------------------------------

				var current_testIteration = 0;

				document.getElementsByClassName('myTest-triggerBtn')[0].addEventListener('click', function(){

					current_testIteration++;

					var current_delay = document.getElementsByClassName('myTestContainer')[0].getAttribute('data-appearEffects-delay');

					var effectsContainer = document.getElementsByClassName('myTestContainer')[0];
					var items = Array.from(effectsContainer.getElementsByClassName('myTestItem'));
					array_shuffle(items); 

					if (!hasClass(this, 'active')) {

						for (var i=0; i<items.length; i++) { applyTimeoutEffect(items[i], i, current_testIteration) };

						this.classList.add('active');
					
					} else {

						for (var i=0; i<items.length; i++) { items[i].classList.remove('appearEffects-apply') };

						this.classList.remove('active');

					};

					function applyTimeoutEffect(targetItem, delayMultiplier, testIteration) {
						setTimeout(function(){ 
							if (testIteration == current_testIteration) { targetItem.classList.add('appearEffects-apply') }
						}, delayMultiplier * current_delay)
					}
				});


				document.getElementsByClassName('myTest-input-delay')[0].addEventListener('input', function(){
					document.getElementsByClassName('myTestContainer')[0].setAttribute('data-appearEffects-delay', this.value);
					document.getElementsByClassName('myTestSpan-delay')[0].innerHTML = this.value;
				});

				document.getElementsByClassName('myTest-select-effect')[0].addEventListener('change', function(){

					var current_value = this.value;

					if (this.value.indexOf('spinIn-') > -1
		            ||  this.value.indexOf('flyIn-')  > -1
					||	this.value.indexOf('landIn-') > -1
					||	this.value.indexOf('fallIn-') > -1) {

						var createString_1 = '';

						for (var i=0; i<9; i++) { 
							createString_1 = 
							createString_1 															+ 
							'<div class="effectsContainer-perspective"> ' 							+ 
								'<div class="myTestItem hasAppearEffect '+current_value+'"></div>' 	+ 
							'</div> '																;
						};
						
						document.getElementsByClassName('myTestContainer')[0].innerHTML = createString_1;

						var createString_2 = '';

						for (var i=0; i<9; i++) { 
							createString_2 = createString_2 + 
							'<span class="wrapper">'																								+
								'<line> &lt;div class="<b>effectsContainer-perspective</b>"> </line> ' 												+
									'<line class="pl-lg"> &lt;div class="<b>hasAppearEffect</b> <b-p>'+current_value+'</b-p>">&lt;/div> </line> '	+
								'<line> &lt;/div> </line> '																							+
							'</span>'																												;
						};

						document.getElementsByClassName('myTestContainer-innerHTML')[0].innerHTML = createString_2;

					} else {

						var createString_1 = '';

						for (var i=0; i<9; i++) { 
							createString_1 = createString_1 + '<div class="myTestItem hasAppearEffect '+current_value+'"></div> '
						};

						document.getElementsByClassName('myTestContainer')[0].innerHTML = createString_1;

						var createString_2 = '';

						for (var i=0; i<9; i++) { 
							createString_2 = 
							createString_2 + 
							'<span class="wrapper">'																			+
								'<line> &lt;div class="<b>hasAppearEffect</b> <b-p>'+current_value+'</b-p>">&lt;/div> </line> '	+
							'</span>'																							;
						};

						document.getElementsByClassName('myTestContainer-innerHTML')[0].innerHTML = createString_2;
					};

					document.getElementsByClassName('myTest-triggerBtn')[0].classList.remove('active');
				});

			//

				var demoItems = Array.from(document.getElementsByClassName('demoItem-container'));

				demoItems.map(function(item){
					item.addEventListener('mouseenter', function(){
						this.getElementsByClassName('demoItem')[0].classList.remove('appearEffects-apply')
					});
					item.addEventListener('mouseleave', function(){
						this.getElementsByClassName('demoItem')[0].classList.add('appearEffects-apply')
					});
				});

				var xxx = Array.from(document.getElementsByClassName('xxx'));

				xxx.map(function(item) { 
					item.addEventListener('mouseenter', function(){
						var targets = Array.from(this.getElementsByClassName('hasAppearEffect'));
						targets.map( plm => plm.classList.remove('appearEffects-apply') )
					})
				});

				xxx.map(function(item) { 
					item.addEventListener('mouseleave', function(){
						var targets = Array.from(this.getElementsByClassName('hasAppearEffect'));
						targets.map( plm => plm.classList.add('appearEffects-apply'))
					})
				});

		})();


