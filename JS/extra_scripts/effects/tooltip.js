
	(function(){

		var demoItemsArray = [
			'tooltip-right' , 'tooltip-top' , 'tooltip-btm' , 'tooltip-left' 
		];

		// Generate demos
		// --------------------------------

			var generateDemos_container = document.getElementsByClassName('_route_mainView-generateDemos')[0];

			demoItemsArray.map(function(effect) {
				var newDemo = document.createElement('div');
				newDemo.classList = 'col-3 p-sm';
				newDemo.innerHTML = 
					'<div class="demoItem-container demoItem-container-'+effect+'" data-finalCodeId='+effect+'> '	+
						'<div class="xs-col-12 demoItem tooltip-before '+effect+'" data-tooltipText="'+effect+'"> '+effect+' </div> '	+
					'</div> ' 																						;
				generateDemos_container.appendChild(newDemo);
			});

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// General
					{
					name : null ,
					code : 	
					`    /*  Component - Tooltip - 
				    /* --------------------------------------- */
				    /* used with [data-tooltipText] attribute set on element */

				        /* Variables */
				        /* --------------------------------------- */

				            :root {
				                --asterisk-tooltip-distance: -1em;
				            }

				        /* Colors */
				        /* --------------------------------------- */

				            .tooltip-before:before , 
				            .tooltip-after:after   {
				                color: #FFFFFF;     
				                background-color: #00aced;
				            }

				        /* Element */
				        /* --------------------------------------- */

				            .tooltip-before , 
				            .tooltip-after  {
				                position: relative;
				            }

				        /* Shared */
				        /* --------------------------------------- */

				            .tooltip-before:before , 
				            .tooltip-after:after   {

				                content: attr(data-tooltipText);
				                position: absolute;     z-index: 999;
				                pointer-events: none;   opacity: 0;

				                padding: .5em 1em;  line-height: 1.43;
				                text-align: center; font-weight: bold;  
				                border-radius: 3px;

				                white-space: nowrap;
				                overflow: hidden;
				                
				                -webkit-transition: transform .2s, opacity .2s; 
				                   -moz-transition: transform .2s, opacity .2s; 
				                     -o-transition: transform .2s, opacity .2s;   
				                        transition: transform .2s, opacity .2s; 
				            }

				            .tooltip-before:hover:before , 
				            .tooltip-after:hover:after   {
				                opacity: 1;
				            }

				        /* Direction */
				        /* --------------------------------------- */

				            /* All viewports */

				                /* Left */
				                /* --------------------------------------- */

				                    .tooltip-left.tooltip-before:before, 
				                    .tooltip-left.tooltip-after:after {
				                        left: -1em;     top: 50%; 
				                        left: var(--asterisk-tooltip-distance);
				                        
				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .tooltip-left.tooltip-before:hover:before, 
				                    .tooltip-left.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-100%, -50%, 0);
				                            -ms-transform: translate3d(-100%, -50%, 0);
				                                transform: translate3d(-100%, -50%, 0);
				                    }

				                /* Right */
				                /* --------------------------------------- */
				                
				                    .tooltip-right.tooltip-before:before, 
				                    .tooltip-right.tooltip-after:after {
				                        right: -1em;    top: 50%; 
				                        right: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .tooltip-right.tooltip-before:hover:before, 
				                    .tooltip-right.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(100%, -50%, 0);
				                            -ms-transform: translate3d(100%, -50%, 0);
				                                transform: translate3d(100%, -50%, 0);
				                    }

				                /* Top */
				                /* --------------------------------------- */
				                
				                    .tooltip-top.tooltip-before:before, 
				                    .tooltip-top.tooltip-after:after {
				                        left: 50%;      top: -1em;
				                        top: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .tooltip-top.tooltip-before:hover:before, 
				                    .tooltip-top.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, -100%, 0);
				                            -ms-transform: translate3d(-50%, -100%, 0);
				                                transform: translate3d(-50%, -100%, 0);
				                    }

				                /* Bottom */
				                /* --------------------------------------- */
				                
				                    .tooltip-btm.tooltip-before:before, 
				                    .tooltip-btm.tooltip-after:after {
				                        left: 50%;      bottom: -1em; 
				                        bottom: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .tooltip-btm.tooltip-before:hover:before, 
				                    .tooltip-btm.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, 100%, 0);
				                            -ms-transform: translate3d(-50%, 100%, 0);
				                                transform: translate3d(-50%, 100%, 0);
				                    }
					`
					},

				// Responsive-Utilities
					{
					name : 'Responsive-Utilities' ,
					code : 	
					`        /* xs-only */
				            @media (max-width: 575.98px) {

				                /* Left */
				                /* --------------------------------------- */

				                    .xs-o-tooltip-left.tooltip-before:before, 
				                    .xs-o-tooltip-left.tooltip-after:after {
				                        left: -1em;     top: 50%; 
				                        left: var(--asterisk-tooltip-distance);
				                        
				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .xs-o-tooltip-left.tooltip-before:hover:before, 
				                    .xs-o-tooltip-left.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-100%, -50%, 0);
				                            -ms-transform: translate3d(-100%, -50%, 0);
				                                transform: translate3d(-100%, -50%, 0);
				                    }

				                /* Right */
				                /* --------------------------------------- */
				                
				                    .xs-o-tooltip-right.tooltip-before:before, 
				                    .xs-o-tooltip-right.tooltip-after:after {
				                        right: -1em;    top: 50%; 
				                        right: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .xs-o-tooltip-right.tooltip-before:hover:before, 
				                    .xs-o-tooltip-right.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(100%, -50%, 0);
				                            -ms-transform: translate3d(100%, -50%, 0);
				                                transform: translate3d(100%, -50%, 0);
				                    }

				                /* Top */
				                /* --------------------------------------- */
				                
				                    .xs-o-tooltip-top.tooltip-before:before, 
				                    .xs-o-tooltip-top.tooltip-after:after {
				                        left: 50%;      top: -1em;
				                        top: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .xs-o-tooltip-top.tooltip-before:hover:before, 
				                    .xs-o-tooltip-top.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, -100%, 0);
				                            -ms-transform: translate3d(-50%, -100%, 0);
				                                transform: translate3d(-50%, -100%, 0);
				                    }

				                /* Bottom */
				                /* --------------------------------------- */
				                
				                    .xs-o-tooltip-btm.tooltip-before:before, 
				                    .xs-o-tooltip-btm.tooltip-after:after {
				                        left: 50%;      bottom: -1em; 
				                        bottom: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .xs-o-tooltip-btm.tooltip-before:hover:before, 
				                    .xs-o-tooltip-btm.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, 100%, 0);
				                            -ms-transform: translate3d(-50%, 100%, 0);
				                                transform: translate3d(-50%, 100%, 0);
				                    }

				                /* None (Hide for this viewport) */
				                /* --------------------------------------- */

				                    .xs-o-tooltip-none.tooltip-before:before ,
				                    .xs-o-tooltip-none.tooltip-after:after   {
				                        display: none;
				                    }               
				            }

				            /* sm */
				            @media (min-width: 575.98px) {
				                
				                /* Left */
				                /* --------------------------------------- */

				                    .sm-tooltip-left.tooltip-before:before, 
				                    .sm-tooltip-left.tooltip-after:after {
				                        left: -1em;     top: 50%; 
				                        left: var(--asterisk-tooltip-distance);
				                        
				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .sm-tooltip-left.tooltip-before:hover:before, 
				                    .sm-tooltip-left.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-100%, -50%, 0);
				                            -ms-transform: translate3d(-100%, -50%, 0);
				                                transform: translate3d(-100%, -50%, 0);
				                    }

				                /* Right */
				                /* --------------------------------------- */
				                
				                    .sm-tooltip-right.tooltip-before:before, 
				                    .sm-tooltip-right.tooltip-after:after {
				                        right: -1em;    top: 50%; 
				                        right: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .sm-tooltip-right.tooltip-before:hover:before, 
				                    .sm-tooltip-right.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(100%, -50%, 0);
				                            -ms-transform: translate3d(100%, -50%, 0);
				                                transform: translate3d(100%, -50%, 0);
				                    }

				                /* Top */
				                /* --------------------------------------- */
				                
				                    .sm-tooltip-top.tooltip-before:before, 
				                    .sm-tooltip-top.tooltip-after:after {
				                        left: 50%;      top: -1em;
				                        top: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .sm-tooltip-top.tooltip-before:hover:before, 
				                    .sm-tooltip-top.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, -100%, 0);
				                            -ms-transform: translate3d(-50%, -100%, 0);
				                                transform: translate3d(-50%, -100%, 0);
				                    }

				                /* Bottom */
				                /* --------------------------------------- */
				                
				                    .sm-tooltip-btm.tooltip-before:before, 
				                    .sm-tooltip-btm.tooltip-after:after {
				                        left: 50%;      bottom: -1em; 
				                        bottom: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .sm-tooltip-btm.tooltip-before:hover:before, 
				                    .sm-tooltip-btm.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, 100%, 0);
				                            -ms-transform: translate3d(-50%, 100%, 0);
				                                transform: translate3d(-50%, 100%, 0);
				                    }

				                /* None (Hide for this viewport) */
				                /* --------------------------------------- */

				                    .sm-tooltip-none.tooltip-before:before ,
				                    .sm-tooltip-none.tooltip-after:after   {
				                        display: none;
				                    }
				            }

				            /* sm-only */
				            @media (min-width: 575.98px) and (max-width: 767.98px) {
				                
				                /* Left */
				                /* --------------------------------------- */

				                    .sm-o-tooltip-left.tooltip-before:before, 
				                    .sm-o-tooltip-left.tooltip-after:after {
				                        left: -1em;     top: 50%; 
				                        left: var(--asterisk-tooltip-distance);
				                        
				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .sm-o-tooltip-left.tooltip-before:hover:before, 
				                    .sm-o-tooltip-left.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-100%, -50%, 0);
				                            -ms-transform: translate3d(-100%, -50%, 0);
				                                transform: translate3d(-100%, -50%, 0);
				                    }

				                /* Right */
				                /* --------------------------------------- */
				                
				                    .sm-o-tooltip-right.tooltip-before:before, 
				                    .sm-o-tooltip-right.tooltip-after:after {
				                        right: -1em;    top: 50%; 
				                        right: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .sm-o-tooltip-right.tooltip-before:hover:before, 
				                    .sm-o-tooltip-right.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(100%, -50%, 0);
				                            -ms-transform: translate3d(100%, -50%, 0);
				                                transform: translate3d(100%, -50%, 0);
				                    }

				                /* Top */
				                /* --------------------------------------- */
				                
				                    .sm-o-tooltip-top.tooltip-before:before, 
				                    .sm-o-tooltip-top.tooltip-after:after {
				                        left: 50%;      top: -1em;
				                        top: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .sm-o-tooltip-top.tooltip-before:hover:before, 
				                    .sm-o-tooltip-top.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, -100%, 0);
				                            -ms-transform: translate3d(-50%, -100%, 0);
				                                transform: translate3d(-50%, -100%, 0);
				                    }

				                /* Bottom */
				                /* --------------------------------------- */
				                
				                    .sm-o-tooltip-btm.tooltip-before:before, 
				                    .sm-o-tooltip-btm.tooltip-after:after {
				                        left: 50%;      bottom: -1em; 
				                        bottom: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .sm-o-tooltip-btm.tooltip-before:hover:before, 
				                    .sm-o-tooltip-btm.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, 100%, 0);
				                            -ms-transform: translate3d(-50%, 100%, 0);
				                                transform: translate3d(-50%, 100%, 0);
				                    }

				                /* None (Hide for this viewport) */
				                /* --------------------------------------- */

				                    .sm-o-tooltip-none.tooltip-before:before ,
				                    .sm-o-tooltip-none.tooltip-after:after   {
				                        display: none;
				                    }
				            }

				            /* md */
				            @media (min-width: 767.98px) {
				                
				                /* Left */
				                /* --------------------------------------- */

				                    .md-tooltip-left.tooltip-before:before, 
				                    .md-tooltip-left.tooltip-after:after {
				                        left: -1em;     top: 50%; 
				                        left: var(--asterisk-tooltip-distance);
				                        
				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .md-tooltip-left.tooltip-before:hover:before, 
				                    .md-tooltip-left.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-100%, -50%, 0);
				                            -ms-transform: translate3d(-100%, -50%, 0);
				                                transform: translate3d(-100%, -50%, 0);
				                    }

				                /* Right */
				                /* --------------------------------------- */
				                
				                    .md-tooltip-right.tooltip-before:before, 
				                    .md-tooltip-right.tooltip-after:after {
				                        right: -1em;    top: 50%; 
				                        right: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .md-tooltip-right.tooltip-before:hover:before, 
				                    .md-tooltip-right.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(100%, -50%, 0);
				                            -ms-transform: translate3d(100%, -50%, 0);
				                                transform: translate3d(100%, -50%, 0);
				                    }

				                /* Top */
				                /* --------------------------------------- */
				                
				                    .md-tooltip-top.tooltip-before:before, 
				                    .md-tooltip-top.tooltip-after:after {
				                        left: 50%;      top: -1em;
				                        top: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .md-tooltip-top.tooltip-before:hover:before, 
				                    .md-tooltip-top.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, -100%, 0);
				                            -ms-transform: translate3d(-50%, -100%, 0);
				                                transform: translate3d(-50%, -100%, 0);
				                    }

				                /* Bottom */
				                /* --------------------------------------- */
				                
				                    .md-tooltip-btm.tooltip-before:before, 
				                    .md-tooltip-btm.tooltip-after:after {
				                        left: 50%;      bottom: -1em; 
				                        bottom: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .md-tooltip-btm.tooltip-before:hover:before, 
				                    .md-tooltip-btm.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, 100%, 0);
				                            -ms-transform: translate3d(-50%, 100%, 0);
				                                transform: translate3d(-50%, 100%, 0);
				                    }

				                /* None (Hide for this viewport) */
				                /* --------------------------------------- */

				                    .md-tooltip-none.tooltip-before:before ,
				                    .md-tooltip-none.tooltip-after:after   {
				                        display: none;
				                    }
				            }

				            /* md-only */
				            @media (min-width: 767.98px) and (max-width: 991.98px) {
				                
				                /* Left */
				                /* --------------------------------------- */

				                    .md-o-tooltip-left.tooltip-before:before, 
				                    .md-o-tooltip-left.tooltip-after:after {
				                        left: -1em;     top: 50%; 
				                        left: var(--asterisk-tooltip-distance);
				                        
				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .md-o-tooltip-left.tooltip-before:hover:before, 
				                    .md-o-tooltip-left.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-100%, -50%, 0);
				                            -ms-transform: translate3d(-100%, -50%, 0);
				                                transform: translate3d(-100%, -50%, 0);
				                    }

				                /* Right */
				                /* --------------------------------------- */
				                
				                    .md-o-tooltip-right.tooltip-before:before, 
				                    .md-o-tooltip-right.tooltip-after:after {
				                        right: -1em;    top: 50%; 
				                        right: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .md-o-tooltip-right.tooltip-before:hover:before, 
				                    .md-o-tooltip-right.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(100%, -50%, 0);
				                            -ms-transform: translate3d(100%, -50%, 0);
				                                transform: translate3d(100%, -50%, 0);
				                    }

				                /* Top */
				                /* --------------------------------------- */
				                
				                    .md-o-tooltip-top.tooltip-before:before, 
				                    .md-o-tooltip-top.tooltip-after:after {
				                        left: 50%;      top: -1em;
				                        top: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .md-o-tooltip-top.tooltip-before:hover:before, 
				                    .md-o-tooltip-top.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, -100%, 0);
				                            -ms-transform: translate3d(-50%, -100%, 0);
				                                transform: translate3d(-50%, -100%, 0);
				                    }

				                /* Bottom */
				                /* --------------------------------------- */
				                
				                    .md-o-tooltip-btm.tooltip-before:before, 
				                    .md-o-tooltip-btm.tooltip-after:after {
				                        left: 50%;      bottom: -1em; 
				                        bottom: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .md-o-tooltip-btm.tooltip-before:hover:before, 
				                    .md-o-tooltip-btm.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, 100%, 0);
				                            -ms-transform: translate3d(-50%, 100%, 0);
				                                transform: translate3d(-50%, 100%, 0);
				                    }

				                /* None (Hide for this viewport) */
				                /* --------------------------------------- */

				                    .md-o-tooltip-none.tooltip-before:before ,
				                    .md-o-tooltip-none.tooltip-after:after   {
				                        display: none;
				                    }
				            }

				            /* lg */
				            @media (min-width: 991.98px) {
				                
				                /* Left */
				                /* --------------------------------------- */

				                    .lg-tooltip-left.tooltip-before:before, 
				                    .lg-tooltip-left.tooltip-after:after {
				                        left: -1em;     top: 50%; 
				                        left: var(--asterisk-tooltip-distance);
				                        
				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .lg-tooltip-left.tooltip-before:hover:before, 
				                    .lg-tooltip-left.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-100%, -50%, 0);
				                            -ms-transform: translate3d(-100%, -50%, 0);
				                                transform: translate3d(-100%, -50%, 0);
				                    }

				                /* Right */
				                /* --------------------------------------- */
				                
				                    .lg-tooltip-right.tooltip-before:before, 
				                    .lg-tooltip-right.tooltip-after:after {
				                        right: -1em;    top: 50%; 
				                        right: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .lg-tooltip-right.tooltip-before:hover:before, 
				                    .lg-tooltip-right.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(100%, -50%, 0);
				                            -ms-transform: translate3d(100%, -50%, 0);
				                                transform: translate3d(100%, -50%, 0);
				                    }

				                /* Top */
				                /* --------------------------------------- */
				                
				                    .lg-tooltip-top.tooltip-before:before, 
				                    .lg-tooltip-top.tooltip-after:after {
				                        left: 50%;      top: -1em;
				                        top: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .lg-tooltip-top.tooltip-before:hover:before, 
				                    .lg-tooltip-top.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, -100%, 0);
				                            -ms-transform: translate3d(-50%, -100%, 0);
				                                transform: translate3d(-50%, -100%, 0);
				                    }

				                /* Bottom */
				                /* --------------------------------------- */
				                
				                    .lg-tooltip-btm.tooltip-before:before, 
				                    .lg-tooltip-btm.tooltip-after:after {
				                        left: 50%;      bottom: -1em; 
				                        bottom: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .lg-tooltip-btm.tooltip-before:hover:before, 
				                    .lg-tooltip-btm.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, 100%, 0);
				                            -ms-transform: translate3d(-50%, 100%, 0);
				                                transform: translate3d(-50%, 100%, 0);
				                    }

				                /* None (Hide for this viewport) */
				                /* --------------------------------------- */

				                    .lg-tooltip-none.tooltip-before:before ,
				                    .lg-tooltip-none.tooltip-after:after   {
				                        display: none;
				                    }
				            }

				            /* lg-only */
				            @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                
				                /* Left */
				                /* --------------------------------------- */

				                    .lg-o-tooltip-left.tooltip-before:before, 
				                    .lg-o-tooltip-left.tooltip-after:after {
				                        left: -1em;     top: 50%; 
				                        left: var(--asterisk-tooltip-distance);
				                        
				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .lg-o-tooltip-left.tooltip-before:hover:before, 
				                    .lg-o-tooltip-left.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-100%, -50%, 0);
				                            -ms-transform: translate3d(-100%, -50%, 0);
				                                transform: translate3d(-100%, -50%, 0);
				                    }

				                /* Right */
				                /* --------------------------------------- */
				                
				                    .lg-o-tooltip-right.tooltip-before:before, 
				                    .lg-o-tooltip-right.tooltip-after:after {
				                        right: -1em;    top: 50%; 
				                        right: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .lg-o-tooltip-right.tooltip-before:hover:before, 
				                    .lg-o-tooltip-right.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(100%, -50%, 0);
				                            -ms-transform: translate3d(100%, -50%, 0);
				                                transform: translate3d(100%, -50%, 0);
				                    }

				                /* Top */
				                /* --------------------------------------- */
				                
				                    .lg-o-tooltip-top.tooltip-before:before, 
				                    .lg-o-tooltip-top.tooltip-after:after {
				                        left: 50%;      top: -1em;
				                        top: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .lg-o-tooltip-top.tooltip-before:hover:before, 
				                    .lg-o-tooltip-top.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, -100%, 0);
				                            -ms-transform: translate3d(-50%, -100%, 0);
				                                transform: translate3d(-50%, -100%, 0);
				                    }

				                /* Bottom */
				                /* --------------------------------------- */
				                
				                    .lg-o-tooltip-btm.tooltip-before:before, 
				                    .lg-o-tooltip-btm.tooltip-after:after {
				                        left: 50%;      bottom: -1em; 
				                        bottom: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .lg-o-tooltip-btm.tooltip-before:hover:before, 
				                    .lg-o-tooltip-btm.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, 100%, 0);
				                            -ms-transform: translate3d(-50%, 100%, 0);
				                                transform: translate3d(-50%, 100%, 0);
				                    }

				                /* None (Hide for this viewport) */
				                /* --------------------------------------- */

				                    .lg-o-tooltip-none.tooltip-before:before ,
				                    .lg-o-tooltip-none.tooltip-after:after   {
				                        display: none;
				                    }
				            }

				            /* xl  */
				            @media (min-width: 1199.98px) {
				                
				                /* Left */
				                /* --------------------------------------- */

				                    .xl-tooltip-left.tooltip-before:before, 
				                    .xl-tooltip-left.tooltip-after:after {
				                        left: -1em;     top: 50%; 
				                        left: var(--asterisk-tooltip-distance);
				                        
				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .xl-tooltip-left.tooltip-before:hover:before, 
				                    .xl-tooltip-left.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-100%, -50%, 0);
				                            -ms-transform: translate3d(-100%, -50%, 0);
				                                transform: translate3d(-100%, -50%, 0);
				                    }

				                /* Right */
				                /* --------------------------------------- */
				                
				                    .xl-tooltip-right.tooltip-before:before, 
				                    .xl-tooltip-right.tooltip-after:after {
				                        right: -1em;    top: 50%; 
				                        right: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(0, -50%, 0);
				                            -ms-transform: translate3d(0, -50%, 0);
				                                transform: translate3d(0, -50%, 0);
				                    }
				                    .xl-tooltip-right.tooltip-before:hover:before, 
				                    .xl-tooltip-right.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(100%, -50%, 0);
				                            -ms-transform: translate3d(100%, -50%, 0);
				                                transform: translate3d(100%, -50%, 0);
				                    }

				                /* Top */
				                /* --------------------------------------- */
				                
				                    .xl-tooltip-top.tooltip-before:before, 
				                    .xl-tooltip-top.tooltip-after:after {
				                        left: 50%;      top: -1em;
				                        top: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .xl-tooltip-top.tooltip-before:hover:before, 
				                    .xl-tooltip-top.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, -100%, 0);
				                            -ms-transform: translate3d(-50%, -100%, 0);
				                                transform: translate3d(-50%, -100%, 0);
				                    }

				                /* Bottom */
				                /* --------------------------------------- */
				                
				                    .xl-tooltip-btm.tooltip-before:before, 
				                    .xl-tooltip-btm.tooltip-after:after {
				                        left: 50%;      bottom: -1em; 
				                        bottom: var(--asterisk-tooltip-distance);

				                        -webkit-transform: translate3d(-50%, 0, 0);
				                            -ms-transform: translate3d(-50%, 0, 0);
				                                transform: translate3d(-50%, 0, 0);
				                    }
				                    .xl-tooltip-btm.tooltip-before:hover:before, 
				                    .xl-tooltip-btm.tooltip-after:hover:after { 
				                        -webkit-transform: translate3d(-50%, 100%, 0);
				                            -ms-transform: translate3d(-50%, 100%, 0);
				                                transform: translate3d(-50%, 100%, 0);
				                    }

				                /* None (Hide for this viewport) */
				                /* --------------------------------------- */

				                    .xl-tooltip-none.tooltip-before:before ,
				                    .xl-tooltip-none.tooltip-after:after   {
				                        display: none;
				                    }
				            }
					`
					},

				// word-wrap
				    {
				    name : 'word-wrap' ,
				    code : 
				    `        /* Word wrap */
				        /* --------------------------------------- */

				            /* All viewports */

				                .tooltip-wrap.tooltip-before:before , 
				                .tooltip-wrap.tooltip-after:after   {
				                    white-space: normal;
				                }

				                .tooltip-wrap-hyphen.tooltip-before:before , 
				                .tooltip-wrap-hyphen.tooltip-after:after   {
				                    white-space: normal;
				                    -webkit-hyphens: auto;
				                       -moz-hyphens: auto;
				                        -ms-hyphens: auto;
				                            hyphens: auto;
				                }

				                .tooltip-wrap-each.tooltip-before:before , 
				                .tooltip-wrap-each.tooltip-after:after   {
				                    white-space: normal;
				                    word-spacing: 10000px;
				                }

				                .tooltip-nowrap.tooltip-before:before , 
				                .tooltip-nowrap.tooltip-after:after   {
				                    white-space: nowrap;
				                    -webkit-hyphens: none;
				                       -moz-hyphens: none;
				                        -ms-hyphens: none;
				                            hyphens: none;
				                }
				    `
				    },

				// word-wrap-responsive
				    {
				    name : 'word-wrap-responsive' ,
				    code : 
				    `            /* xs-only */
				            @media (max-width: 575.98px) {

				                .xs-o-tooltip-wrap.tooltip-before:before , 
				                .xs-o-tooltip-wrap.tooltip-after:after   {
				                    white-space: normal;
				                }

				                .xs-o-tooltip-wrap-hyphen.tooltip-before:before , 
				                .xs-o-tooltip-wrap-hyphen.tooltip-after:after   {
				                    white-space: normal;
				                    -webkit-hyphens: auto;
				                       -moz-hyphens: auto;
				                        -ms-hyphens: auto;
				                            hyphens: auto;
				                }

				                .xs-o-tooltip-nowrap.tooltip-before:before , 
				                .xs-o-tooltip-nowrap.tooltip-after:after   {
				                    white-space: nowrap;
				                    -webkit-hyphens: none;
				                       -moz-hyphens: none;
				                        -ms-hyphens: none;
				                            hyphens: none;
				                }
				            }

				            /* sm */
				            @media (min-width: 575.98px) {

				                .sm-tooltip-wrap.tooltip-before:before , 
				                .sm-tooltip-wrap.tooltip-after:after   {
				                    white-space: normal;
				                }

				                .sm-tooltip-wrap-hyphen.tooltip-before:before , 
				                .sm-tooltip-wrap-hyphen.tooltip-after:after   {
				                    white-space: normal;
				                    -webkit-hyphens: auto;
				                       -moz-hyphens: auto;
				                        -ms-hyphens: auto;
				                            hyphens: auto;
				                }

				                .sm-tooltip-nowrap.tooltip-before:before , 
				                .sm-tooltip-nowrap.tooltip-after:after   {
				                    white-space: nowrap;
				                    -webkit-hyphens: none;
				                       -moz-hyphens: none;
				                        -ms-hyphens: none;
				                            hyphens: none;
				                }
				            }

				            /* sm-only */
				            @media (min-width: 575.98px) and (max-width: 767.98px) {

				                .sm-o-tooltip-wrap.tooltip-before:before , 
				                .sm-o-tooltip-wrap.tooltip-after:after   {
				                    white-space: normal;
				                }

				                .sm-o-tooltip-wrap-hyphen.tooltip-before:before , 
				                .sm-o-tooltip-wrap-hyphen.tooltip-after:after   {
				                    white-space: normal;
				                    -webkit-hyphens: auto;
				                       -moz-hyphens: auto;
				                        -ms-hyphens: auto;
				                            hyphens: auto;
				                }

				                .sm-o-tooltip-nowrap.tooltip-before:before , 
				                .sm-o-tooltip-nowrap.tooltip-after:after   {
				                    white-space: nowrap;
				                    -webkit-hyphens: none;
				                       -moz-hyphens: none;
				                        -ms-hyphens: none;
				                            hyphens: none;
				                }
				            }

				            /* md */
				            @media (min-width: 767.98px) {

				                .md-tooltip-wrap.tooltip-before:before , 
				                .md-tooltip-wrap.tooltip-after:after   {
				                    white-space: normal;
				                }

				                .md-tooltip-wrap-hyphen.tooltip-before:before , 
				                .md-tooltip-wrap-hyphen.tooltip-after:after   {
				                    white-space: normal;
				                    -webkit-hyphens: auto;
				                       -moz-hyphens: auto;
				                        -ms-hyphens: auto;
				                            hyphens: auto;
				                }

				                .md-tooltip-nowrap.tooltip-before:before , 
				                .md-tooltip-nowrap.tooltip-after:after   {
				                    white-space: nowrap;
				                    -webkit-hyphens: none;
				                       -moz-hyphens: none;
				                        -ms-hyphens: none;
				                            hyphens: none;
				                }
				            }

				            /* md-only */
				            @media (min-width: 767.98px) and (max-width: 991.98px) {

				                .md-o-tooltip-wrap.tooltip-before:before , 
				                .md-o-tooltip-wrap.tooltip-after:after   {
				                    white-space: normal;
				                }

				                .md-o-tooltip-wrap-hyphen.tooltip-before:before , 
				                .md-o-tooltip-wrap-hyphen.tooltip-after:after   {
				                    white-space: normal;
				                    -webkit-hyphens: auto;
				                       -moz-hyphens: auto;
				                        -ms-hyphens: auto;
				                            hyphens: auto;
				                }

				                .md-o-tooltip-nowrap.tooltip-before:before , 
				                .md-o-tooltip-nowrap.tooltip-after:after   {
				                    white-space: nowrap;
				                    -webkit-hyphens: none;
				                       -moz-hyphens: none;
				                        -ms-hyphens: none;
				                            hyphens: none;
				                }
				            }

				            /* lg */
				            @media (min-width: 991.98px) {

				                .lg-tooltip-wrap.tooltip-before:before , 
				                .lg-tooltip-wrap.tooltip-after:after   {
				                    white-space: normal;
				                }

				                .lg-tooltip-wrap-hyphen.tooltip-before:before , 
				                .lg-tooltip-wrap-hyphen.tooltip-after:after   {
				                    white-space: normal;
				                    -webkit-hyphens: auto;
				                       -moz-hyphens: auto;
				                        -ms-hyphens: auto;
				                            hyphens: auto;
				                }

				                .lg-tooltip-nowrap.tooltip-before:before , 
				                .lg-tooltip-nowrap.tooltip-after:after   {
				                    white-space: nowrap;
				                    -webkit-hyphens: none;
				                       -moz-hyphens: none;
				                        -ms-hyphens: none;
				                            hyphens: none;
				                }
				            }

				            /* lg-only */
				            @media (min-width: 991.98px) and (max-width: 1199.98px) {

				                .lg-o-tooltip-wrap.tooltip-before:before , 
				                .lg-o-tooltip-wrap.tooltip-after:after   {
				                    white-space: normal;
				                }

				                .lg-o-tooltip-wrap-hyphen.tooltip-before:before , 
				                .lg-o-tooltip-wrap-hyphen.tooltip-after:after   {
				                    white-space: normal;
				                    -webkit-hyphens: auto;
				                       -moz-hyphens: auto;
				                        -ms-hyphens: auto;
				                            hyphens: auto;
				                }

				                .lg-o-tooltip-nowrap.tooltip-before:before , 
				                .lg-o-tooltip-nowrap.tooltip-after:after   {
				                    white-space: nowrap;
				                    -webkit-hyphens: none;
				                       -moz-hyphens: none;
				                        -ms-hyphens: none;
				                            hyphens: none;
				                }
				            }

				            /* xl  */
				            @media (min-width: 1199.98px) {

				                .xl-tooltip-wrap.tooltip-before:before , 
				                .xl-tooltip-wrap.tooltip-after:after   {
				                    white-space: normal;
				                }

				                .xl-tooltip-wrap-hyphen.tooltip-before:before , 
				                .xl-tooltip-wrap-hyphen.tooltip-after:after   {
				                    white-space: normal;
				                    -webkit-hyphens: auto;
				                       -moz-hyphens: auto;
				                        -ms-hyphens: auto;
				                            hyphens: auto;
				                }

				                .xl-tooltip-nowrap.tooltip-before:before , 
				                .xl-tooltip-nowrap.tooltip-after:after   {
				                    white-space: nowrap;
				                    -webkit-hyphens: none;
				                       -moz-hyphens: none;
				                        -ms-hyphens: none;
				                            hyphens: none;
				                }
				            }
				    `
				}
			];

			codeBlocks_css = byAndu_codeBlock_formatCodeString(codeBlocks_css);

            var checkboxArray_css = [ 'Responsive-Utilities' , 'word-wrap' , 'word-wrap-responsive' ];

		// Param Obj
		// --------------------------------

			var paramObj = {
				checkBoxes : {
					css          : checkboxArray_css ,
				} ,

				codeBlocks : {
					css          : codeBlocks_css 
				} 
			};

			byAndu.pageConfigObj_setupObj(paramObj);
			byAndu.pageConfigObj_runConfig();

	})();
