

	(function(){

		var demoItemsArray = [
			'hasFilter-1977'		,	'hasFilter-aden'		,	'hasFilter-amaro'		,	'hasFilter-ashby'		,
			'hasFilter-brannan'		,	'hasFilter-brooklyn'	,	'hasFilter-charmes'		,	'hasFilter-clarendon'	,
			'hasFilter-crema'		,	'hasFilter-dogpatch'	,	'hasFilter-earlybird'	,	'hasFilter-gingham'		,
			'hasFilter-ginza'		,	'hasFilter-hefe'		,	'hasFilter-helena'		,	'hasFilter-hudson'		,
			'hasFilter-inkwell'		,	'hasFilter-juno'		,	'hasFilter-kelvin'		,	'hasFilter-lark'		,
			'hasFilter-lofi'		,	'hasFilter-ludwig'		,	'hasFilter-maven'		,	'hasFilter-mayfair'		,
			'hasFilter-moon'		,	'hasFilter-nashville'	,	'hasFilter-perpetua'	,	'hasFilter-poprocket'	,
			'hasFilter-reyes'		,	'hasFilter-rise'		,	'hasFilter-sierra'		,	'hasFilter-skyline'		,
			'hasFilter-slumber'		,	'hasFilter-stinson'		,	'hasFilter-sutro'		,	'hasFilter-toaster'		,
			'hasFilter-valencia'	,	'hasFilter-vesper'		,	'hasFilter-walden'		,	'hasFilter-willow'		,
			'hasFilter-xpro-ii'	
		];

		// Generate demos
		// --------------------------------

			var generateDemos_container = document.getElementById('__route__mainView__generateDemos');

			demoItemsArray.map(function(effect) {
				var newDemo = document.createElement('div');
				newDemo.classList = 'col-12 sm-col-6 md-col-4 p-sm';
				newDemo.innerHTML = 
					'<div class="demoItem-container demoItem-container-'+effect+'" data-finalCodeId="'+effect+'" data-hvr-showText="'+effect+'"> '	+
						'<div class="demoItem p-0"> '																								+
							'<img class="'+effect+' " src="../xFiles/images/imgHvr-testImg-2.jpg"/> '													+
						'<div> ' 																													+
					'</div> '																														;
				generateDemos_container.appendChild(newDemo);
			});

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// Shared
					{
					name : null ,
					code : 	
					`    /* Image Hover Effects - Instagram */
				    /* ------------------------------- */
				    /* https://picturepan2.github.io/instagram.css/ */

				        /* Shared */
				        /* ------------------------------- */

				            [class^="hasFilter-"]::before , [class*=" hasFilter-"]::before {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				            }

				            [class^="hasFilter-hvr-"] , [class*=" hasFilter-hvr-"] {
				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out;
				            }

				            .hasFilter-hvr-remove:hover {
				                -webkit-filter: none !important;
				                        filter: none !important;
				            }

				            .hasFilter-hvr-remove:hover::before {
				                visibility: hidden !important;
				            }
					`
					},

				// hasFilter-1977
					{
					name : 'hasFilter-1977' ,
					code : 	
					`        /* Filter - 1977 */
				        /* ------------------------------- */

				            .hasFilter-1977            , 
				            .hasFilter-hvr-1977:hover  {
				                -webkit-filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);
				                        filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);
				            }
					`
					},

				// hasFilter-aden
					{
					name : 'hasFilter-aden' ,
					code : 	
					`        /* Filter - aden */
				        /* ------------------------------- */

				            .hasFilter-aden            , 
				            .hasFilter-hvr-aden:hover  {
				                -webkit-filter: sepia(.2) brightness(1.15) saturate(1.4);
				                        filter: sepia(.2) brightness(1.15) saturate(1.4);
				            }

				            .hasFilter-aden::before            , 
				            .hasFilter-hvr-aden:hover::before  {
				                background: rgba(125, 105, 24, .1);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-amaro
					{
					name : 'hasFilter-amaro' ,
					code : 	
					`        /* Filter - amaro */
				        /* ------------------------------- */

				            .hasFilter-amaro            , 
				            .hasFilter-hvr-amaro:hover  {
				                -webkit-filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);
				                        filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);
				            }

				            .hasFilter-amaro::before            , 
				            .hasFilter-hvr-amaro:hover::before  {
				                background: rgba(125, 105, 24, .2);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-ashby
					{
					name : 'hasFilter-ashby' ,
					code : 	
					`        /* Filter - ashby */
				        /* ------------------------------- */

				            .hasFilter-ashby            , 
				            .hasFilter-hvr-ashby:hover  {
				                -webkit-filter: sepia(.5) contrast(1.2) saturate(1.8);
				                        filter: sepia(.5) contrast(1.2) saturate(1.8);
				            }

				            .hasFilter-ashby::before            , 
				            .hasFilter-hvr-ashby:hover::before  {
				                background: rgba(125, 105, 24, .35);
				                mix-blend-mode: lighten;
				            }
					`
					},

				// hasFilter-brannan
					{
					name : 'hasFilter-brannan' ,
					code : 	
					`        /* Filter - brannan */
				        /* ------------------------------- */

				            .hasFilter-brannan            , 
				            .hasFilter-hvr-brannan:hover  {
				                -webkit-filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);
				                        filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);
				            }
					`
					},

				// hasFilter-brooklyn
					{
					name : 'hasFilter-brooklyn' ,
					code : 	
					`        /* Filter - brooklyn */
				        /* ------------------------------- */

				            .hasFilter-brooklyn            , 
				            .hasFilter-hvr-brooklyn:hover  {
				                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);
				                        filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);
				            }

				            .hasFilter-brooklyn::before            , 
				            .hasFilter-hvr-brooklyn:hover::before  {
				                background: rgba(127, 187, 227, .2);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-charmes
					{
					name : 'hasFilter-charmes' ,
					code : 	
					`        /* Filter - charmes */
				        /* ------------------------------- */

				            .hasFilter-charmes            , 
				            .hasFilter-hvr-charmes:hover  {
				                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);
				                        filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);
				            }

				            .hasFilter-charmes::before            , 
				            .hasFilter-hvr-charmes:hover::before  {
				                background: rgba(125, 105, 24, .25);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-clarendon
					{
					name : 'hasFilter-clarendon' ,
					code : 	
					`        /* Filter - clarendon */
				        /* ------------------------------- */

				            .hasFilter-clarendon            , 
				            .hasFilter-hvr-clarendon:hover  {
				                -webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);
				                        filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);
				            }

				            .hasFilter-clarendon::before            , 
				            .hasFilter-hvr-clarendon:hover::before  {
				                background: rgba(127, 187, 227, .4);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-crema
					{
					name : 'hasFilter-crema' ,
					code : 	
					`        /* Filter - crema */
				        /* ------------------------------- */

				            .hasFilter-crema            , 
				            .hasFilter-hvr-crema:hover  {
				                -webkit-filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);
				                        filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);
				            }

				            .hasFilter-crema::before            , 
				            .hasFilter-hvr-crema:hover::before  {
				                background: rgba(125, 105, 24, .2);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-dogpatch
					{
					name : 'hasFilter-dogpatch' ,
					code : 	
					`        /* Filter - dogpatch */
				        /* ------------------------------- */

				            .hasFilter-dogpatch            , 
				            .hasFilter-hvr-dogpatch:hover  {
				                -webkit-filter: sepia(.35) saturate(1.1) contrast(1.5);
				                        filter: sepia(.35) saturate(1.1) contrast(1.5);
				            }
					`
					},

				// hasFilter-earlybird
					{
					name : 'hasFilter-earlybird' ,
					code : 	
					`        /* Filter - earlybird */
				        /* ------------------------------- */

				            .hasFilter-earlybird            , 
				            .hasFilter-hvr-earlybird:hover  {
				                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
				                        filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
				            }

				            .hasFilter-earlybird::before            , 
				            .hasFilter-hvr-earlybird:hover::before  {
				                background: radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-gingham
					{
					name : 'hasFilter-gingham' ,
					code : 	
					`        /* Filter - gingham */
				        /* ------------------------------- */

				            .hasFilter-gingham            , 
				            .hasFilter-hvr-gingham:hover  {
				                -webkit-filter: contrast(1.1) brightness(1.1);
				                        filter: contrast(1.1) brightness(1.1);
				            }

				            .hasFilter-gingham::before            , 
				            .hasFilter-hvr-gingham:hover::before  {
				                background: #e6e6e6;
				                mix-blend-mode: soft-light;
				            }
					`
					},

				// hasFilter-ginza
					{
					name : 'hasFilter-ginza' ,
					code : 	
					`        /* Filter - ginza */
				        /* ------------------------------- */

				            .hasFilter-ginza            , 
				            .hasFilter-hvr-ginza:hover  {
				                -webkit-filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);
				                        filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);
				            }

				            .hasFilter-ginza::before            , 
				            .hasFilter-hvr-ginza:hover::before  {
				                background: rgba(125, 105, 24, .15);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-hefe
					{
					name : 'hasFilter-hefe' ,
					code : 	
					`        /* Filter - hefe */
				        /* ------------------------------- */

				            .hasFilter-hefe            , 
				            .hasFilter-hvr-hefe:hover  {
				                -webkit-filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);
				                        filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);
				            }

				            .hasFilter-hefe::before            , 
				            .hasFilter-hvr-hefe:hover::before  {
				                background: radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-helena
					{
					name : 'hasFilter-helena' ,
					code : 	
					`        /* Filter - helena */
				        /* ------------------------------- */

				            .hasFilter-helena            , 
				            .hasFilter-hvr-helena:hover  {
				                -webkit-filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);
				                        filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);
				            }

				            .hasFilter-helena::before            , 
				            .hasFilter-hvr-helena:hover::before  {
				                background: rgba(158, 175, 30, .25);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-hudson
					{
					name : 'hasFilter-hudson' ,
					code : 	
					`        /* Filter - hudson */
				        /* ------------------------------- */

				            .hasFilter-hudson            , 
				            .hasFilter-hvr-hudson:hover  {
				                -webkit-filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);
				                        filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);
				            }

				            .hasFilter-hudson::before            , 
				            .hasFilter-hvr-hudson:hover::before  {
				                background: radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-inkwell
					{
					name : 'hasFilter-inkwell' ,
					code : 	
					`        /* Filter - inkwell */
				        /* ------------------------------- */

				            .hasFilter-inkwell            , 
				            .hasFilter-hvr-inkwell:hover  {
				                -webkit-filter: brightness(1.25) contrast(.85) grayscale(1);
				                        filter: brightness(1.25) contrast(.85) grayscale(1);
				            }
					`
					},

				// hasFilter-juno
					{
					name : 'hasFilter-juno' ,
					code : 	
					`        /* Filter - juno */
				        /* ------------------------------- */

				            .hasFilter-juno            , 
				            .hasFilter-hvr-juno:hover  {
				                -webkit-filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);
				                        filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);
				            }

				            .hasFilter-juno::before            , 
				            .hasFilter-hvr-juno:hover::before  {
				                background: rgba(127, 187, 227, .2);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-kelvin
					{
					name : 'hasFilter-kelvin' ,
					code : 	
					`        /* Filter - kelvin */
				        /* ------------------------------- */

				            .hasFilter-kelvin            , 
				            .hasFilter-hvr-kelvin:hover  {
				                -webkit-filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);
				                        filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);
				            }

				            .hasFilter-kelvin::before            , 
				            .hasFilter-hvr-kelvin:hover::before  {
				                background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-lark
					{
					name : 'hasFilter-lark' ,
					code : 	
					`        /* Filter - lark */
				        /* ------------------------------- */

				            .hasFilter-lark            , 
				            .hasFilter-hvr-lark:hover  {
				                -webkit-filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);
				                        filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);
				            }
					`
					},

				// hasFilter-lofi
					{
					name : 'hasFilter-lofi' ,
					code : 	
					`        /* Filter - lofi */
				        /* ------------------------------- */

				            .hasFilter-lofi            , 
				            .hasFilter-hvr-lofi:hover  {
				                -webkit-filter: saturate(1.1) contrast(1.5);
				                        filter: saturate(1.1) contrast(1.5);
				            }
					`
					},

				// hasFilter-ludwig
					{
					name : 'hasFilter-ludwig' ,
					code : 	
					`        /* Filter - ludwig */
				        /* ------------------------------- */

				            .hasFilter-ludwig            , 
				            .hasFilter-hvr-ludwig:hover  {
				                -webkit-filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);
				                        filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);
				            }

				            .hasFilter-ludwig::before            , 
				            .hasFilter-hvr-ludwig:hover::before  {
				                background: rgba(125, 105, 24, .1);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-maven
					{
					name : 'hasFilter-maven' ,
					code : 	
					`        /* Filter - maven */
				        /* ------------------------------- */

				            .hasFilter-maven            , 
				            .hasFilter-hvr-maven:hover  {
				                -webkit-filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);
				                        filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);
				            }

				            .hasFilter-maven::before            , 
				            .hasFilter-hvr-maven:hover::before  {
				                background: rgba(158, 175, 30, .25);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-mayfair
					{
					name : 'hasFilter-mayfair' ,
					code : 	
					`        /* Filter - mayfair */
				        /* ------------------------------- */

				            .hasFilter-mayfair            , 
				            .hasFilter-hvr-mayfair:hover  {
				                -webkit-filter: contrast(1.1) brightness(1.15) saturate(1.1);
				                        filter: contrast(1.1) brightness(1.15) saturate(1.1);
				            }

				            .hasFilter-mayfair::before            , 
				            .hasFilter-hvr-mayfair:hover::before  {
				                background: radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-moon
					{
					name : 'hasFilter-moon' ,
					code : 	
					`        /* Filter - moon */
				        /* ------------------------------- */

				            .hasFilter-moon            , 
				            .hasFilter-hvr-moon:hover  {
				                -webkit-filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);
				                        filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);
				            }
					`
					},

				// hasFilter-nashville
					{
					name : 'hasFilter-nashville' ,
					code : 	
					`        /* Filter - nashville */
				        /* ------------------------------- */

				            .hasFilter-nashville            , 
				            .hasFilter-hvr-nashville:hover  {
				                -webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
				                        filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
				            }

				            .hasFilter-nashville::before            , 
				            .hasFilter-hvr-nashville:hover::before  {
				                background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%);
				                mix-blend-mode: screen;
				            }
					`
					},

				// hasFilter-perpetua
					{
					name : 'hasFilter-perpetua' ,
					code : 	
					`        /* Filter - perpetua */
				        /* ------------------------------- */

				            .hasFilter-perpetua            , 
				            .hasFilter-hvr-perpetua:hover  {
				                -webkit-filter: contrast(1.1) brightness(1.25) saturate(1.1);
				                        filter: contrast(1.1) brightness(1.25) saturate(1.1);
				            }

				            .hasFilter-perpetua::before            , 
				            .hasFilter-hvr-perpetua:hover::before  {
				                background: linear-gradient(to bottom, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25));
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-poprocket
					{
					name : 'hasFilter-poprocket' ,
					code : 	
					`        /* Filter - poprocket */
				        /* ------------------------------- */

				            .hasFilter-poprocket            , 
				            .hasFilter-hvr-poprocket:hover  {
				                -webkit-filter: sepia(.15) brightness(1.2);
				                        filter: sepia(.15) brightness(1.2);
				            }

				            .hasFilter-poprocket::before            , 
				            .hasFilter-hvr-poprocket:hover::before  {
				                background: radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%);
				                mix-blend-mode: screen;
				            }
					`
					},

				// hasFilter-reyes
					{
					name : 'hasFilter-reyes' ,
					code : 	
					`        /* Filter - reyes */
				        /* ------------------------------- */

				            .hasFilter-reyes            , 
				            .hasFilter-hvr-reyes:hover  {
				                -webkit-filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);
				                        filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);
				            }
					`
					},

				// hasFilter-rise
					{
					name : 'hasFilter-rise' ,
					code : 	
					`        /* Filter - rise */
				        /* ------------------------------- */

				            .hasFilter-rise            , 
				            .hasFilter-hvr-rise:hover  {
				                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);
				                        filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);
				            }

				            .hasFilter-rise::before            , 
				            .hasFilter-hvr-rise:hover::before  {
				                background: radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%);
				                mix-blend-mode: lighten;
				            }
					`
					},

				// hasFilter-sierra
					{
					name : 'hasFilter-sierra' ,
					code : 	
					`        /* Filter - sierra */
				        /* ------------------------------- */

				            .hasFilter-sierra            , 
				            .hasFilter-hvr-sierra:hover  {
				                -webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
				                        filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
				            }

				            .hasFilter-sierra::before            , 
				            .hasFilter-hvr-sierra:hover::before  {
				                background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%);
				                mix-blend-mode: screen;
				            }
					`
					},

				// hasFilter-skyline
					{
					name : 'hasFilter-skyline' ,
					code : 	
					`        /* Filter - skyline */
				        /* ------------------------------- */

				            .hasFilter-skyline            , 
				            .hasFilter-hvr-skyline:hover  {
				                -webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);
				                        filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);
				            }
					`
					},

				// hasFilter-slumber
					{
					name : 'hasFilter-slumber' ,
					code : 	
					`        /* Filter - slumber */
				        /* ------------------------------- */

				            .hasFilter-slumber            , 
				            .hasFilter-hvr-slumber:hover  {
				                -webkit-filter: sepia(.35) contrast(1.25) saturate(1.25);
				                        filter: sepia(.35) contrast(1.25) saturate(1.25);
				            }

				            .hasFilter-slumber::before            , 
				            .hasFilter-hvr-slumber:hover::before  {
				                background: rgba(125, 105, 24, .2);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-stinson
					{
					name : 'hasFilter-stinson' ,
					code : 	
					`        /* Filter - stinson */
				        /* ------------------------------- */

				            .hasFilter-stinson            , 
				            .hasFilter-hvr-stinson:hover  {
				                -webkit-filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);
				                        filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);
				            }

				            .hasFilter-stinson::before            , 
				            .hasFilter-hvr-stinson:hover::before  {
				                background: rgba(125, 105, 24, .45);
				                mix-blend-mode: lighten;
				            }
					`
					},

				// hasFilter-sutro
					{
					name : 'hasFilter-sutro' ,
					code : 	
					`        /* Filter - sutro */
				        /* ------------------------------- */

				            .hasFilter-sutro            , 
				            .hasFilter-hvr-sutro:hover  {
				                -webkit-filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);
				                        filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);
				            }

				            .hasFilter-sutro::before            , 
				            .hasFilter-hvr-sutro:hover::before  {
				                background: radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-toaster
					{
					name : 'hasFilter-toaster' ,
					code : 	
					`        /* Filter - toaster */
				        /* ------------------------------- */

				            .hasFilter-toaster            , 
				            .hasFilter-hvr-toaster:hover  {
				                -webkit-filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);
				                        filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);
				            }

				            .hasFilter-toaster::before            , 
				            .hasFilter-hvr-toaster:hover::before  {
				                background: radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25));
				                mix-blend-mode: screen;
				            }
					`
					},

				// hasFilter-valencia
					{
					name : 'hasFilter-valencia' ,
					code : 	
					`        /* Filter - valencia */
				        /* ------------------------------- */

				            .hasFilter-valencia            , 
				            .hasFilter-hvr-valencia:hover  {
				                -webkit-filter: sepia(.25) contrast(1.1) brightness(1.1);
				                        filter: sepia(.25) contrast(1.1) brightness(1.1);
				            }

				            .hasFilter-valencia::before            , 
				            .hasFilter-hvr-valencia:hover::before  {
				                background: rgba(230, 193, 61, .1);
				                mix-blend-mode: lighten;
				            }
					`
					},

				// hasFilter-vesper
					{
					name : 'hasFilter-vesper' ,
					code : 	
					`        /* Filter - vesper */
				        /* ------------------------------- */

				            .hasFilter-vesper            , 
				            .hasFilter-hvr-vesper:hover  {
				                -webkit-filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);
				                        filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);
				            }

				            .hasFilter-vesper::before            , 
				            .hasFilter-hvr-vesper:hover::before  {
				                background: rgba(125, 105, 24, .25);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-walden
					{
					name : 'hasFilter-walden' ,
					code : 	
					`        /* Filter - walden */
				        /* ------------------------------- */

				            .hasFilter-walden            , 
				            .hasFilter-hvr-walden:hover  {
				                -webkit-filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);
				                        filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);
				            }

				            .hasFilter-walden::before            , 
				            .hasFilter-hvr-walden:hover::before  {
				                background: rgba(229, 240, 128, .5);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-willow
					{
					name : 'hasFilter-willow' ,
					code : 	
					`        /* Filter - willow */
				        /* ------------------------------- */

				            .hasFilter-willow            , 
				            .hasFilter-hvr-willow:hover  {
				                -webkit-filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);
				                        filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);
				            }
					`
					},

				// hasFilter-xpro-ii
					{
					name : 'hasFilter-xpro-ii' ,
					code : 	
					`        /* Filter - xpro-ii */
				        /* ------------------------------- */

				            .hasFilter-xpro-ii            , 
				            .hasFilter-hvr-xpro-ii:hover  {
				                -webkit-filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);
				                        filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);
				            }

				            .hasFilter-xpro-ii::before            , 
				            .hasFilter-hvr-xpro-ii:hover::before  {
				                background: radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					}
			];

			var codeBlocks_css_singular = [

				// hasFilter-1977
					{
					name : 'hasFilter-1977' ,
					code : 	
					`        /* Filter - 1977 */
				        /* ------------------------------- */

				            .hasFilter-1977            , 
				            .hasFilter-hvr-1977:hover  {
				                -webkit-filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);
				                        filter: sepia(.5) hue-rotate(-30deg) saturate(1.4);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-aden
					{
					name : 'hasFilter-aden' ,
					code : 	
					`        /* Filter - aden */
				        /* ------------------------------- */

				            .hasFilter-aden            , 
				            .hasFilter-hvr-aden:hover  {
				                -webkit-filter: sepia(.2) brightness(1.15) saturate(1.4);
				                        filter: sepia(.2) brightness(1.15) saturate(1.4);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-aden::before            , 
				            .hasFilter-hvr-aden:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;

				                background: rgba(125, 105, 24, .1);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-amaro
					{
					name : 'hasFilter-amaro' ,
					code : 	
					`        /* Filter - amaro */
				        /* ------------------------------- */

				            .hasFilter-amaro            , 
				            .hasFilter-hvr-amaro:hover  {
				                -webkit-filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);
				                        filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-amaro::before            , 
				            .hasFilter-hvr-amaro:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(125, 105, 24, .2);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-ashby
					{
					name : 'hasFilter-ashby' ,
					code : 	
					`        /* Filter - ashby */
				        /* ------------------------------- */

				            .hasFilter-ashby            , 
				            .hasFilter-hvr-ashby:hover  {
				                -webkit-filter: sepia(.5) contrast(1.2) saturate(1.8);
				                        filter: sepia(.5) contrast(1.2) saturate(1.8);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-ashby::before            , 
				            .hasFilter-hvr-ashby:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(125, 105, 24, .35);
				                mix-blend-mode: lighten;
				            }
					`
					},

				// hasFilter-brannan
					{
					name : 'hasFilter-brannan' ,
					code : 	
					`        /* Filter - brannan */
				        /* ------------------------------- */

				            .hasFilter-brannan            , 
				            .hasFilter-hvr-brannan:hover  {
				                -webkit-filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);
				                        filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-brooklyn
					{
					name : 'hasFilter-brooklyn' ,
					code : 	
					`        /* Filter - brooklyn */
				        /* ------------------------------- */

				            .hasFilter-brooklyn            , 
				            .hasFilter-hvr-brooklyn:hover  {
				                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);
				                        filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-brooklyn::before            , 
				            .hasFilter-hvr-brooklyn:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(127, 187, 227, .2);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-charmes
					{
					name : 'hasFilter-charmes' ,
					code : 	
					`        /* Filter - charmes */
				        /* ------------------------------- */

				            .hasFilter-charmes            , 
				            .hasFilter-hvr-charmes:hover  {
				                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);
				                        filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-charmes::before            , 
				            .hasFilter-hvr-charmes:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(125, 105, 24, .25);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-clarendon
					{
					name : 'hasFilter-clarendon' ,
					code : 	
					`        /* Filter - clarendon */
				        /* ------------------------------- */

				            .hasFilter-clarendon            , 
				            .hasFilter-hvr-clarendon:hover  {
				                -webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);
				                        filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-clarendon::before            , 
				            .hasFilter-hvr-clarendon:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(127, 187, 227, .4);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-crema
					{
					name : 'hasFilter-crema' ,
					code : 	
					`        /* Filter - crema */
				        /* ------------------------------- */

				            .hasFilter-crema            , 
				            .hasFilter-hvr-crema:hover  {
				                -webkit-filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);
				                        filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-crema::before            , 
				            .hasFilter-hvr-crema:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(125, 105, 24, .2);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-dogpatch
					{
					name : 'hasFilter-dogpatch' ,
					code : 	
					`        /* Filter - dogpatch */
				        /* ------------------------------- */

				            .hasFilter-dogpatch            , 
				            .hasFilter-hvr-dogpatch:hover  {
				                -webkit-filter: sepia(.35) saturate(1.1) contrast(1.5);
				                        filter: sepia(.35) saturate(1.1) contrast(1.5);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-earlybird
					{
					name : 'hasFilter-earlybird' ,
					code : 	
					`        /* Filter - earlybird */
				        /* ------------------------------- */

				            .hasFilter-earlybird            , 
				            .hasFilter-hvr-earlybird:hover  {
				                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);
				                        filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-earlybird::before            , 
				            .hasFilter-hvr-earlybird:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-gingham
					{
					name : 'hasFilter-gingham' ,
					code : 	
					`        /* Filter - gingham */
				        /* ------------------------------- */

				            .hasFilter-gingham            , 
				            .hasFilter-hvr-gingham:hover  {
				                -webkit-filter: contrast(1.1) brightness(1.1);
				                        filter: contrast(1.1) brightness(1.1);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-gingham::before            , 
				            .hasFilter-hvr-gingham:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: #e6e6e6;
				                mix-blend-mode: soft-light;
				            }
					`
					},

				// hasFilter-ginza
					{
					name : 'hasFilter-ginza' ,
					code : 	
					`        /* Filter - ginza */
				        /* ------------------------------- */

				            .hasFilter-ginza            , 
				            .hasFilter-hvr-ginza:hover  {
				                -webkit-filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);
				                        filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-ginza::before            , 
				            .hasFilter-hvr-ginza:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(125, 105, 24, .15);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-hefe
					{
					name : 'hasFilter-hefe' ,
					code : 	
					`        /* Filter - hefe */
				        /* ------------------------------- */

				            .hasFilter-hefe            , 
				            .hasFilter-hvr-hefe:hover  {
				                -webkit-filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);
				                        filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-hefe::before            , 
				            .hasFilter-hvr-hefe:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-helena
					{
					name : 'hasFilter-helena' ,
					code : 	
					`        /* Filter - helena */
				        /* ------------------------------- */

				            .hasFilter-helena            , 
				            .hasFilter-hvr-helena:hover  {
				                -webkit-filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);
				                        filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-helena::before            , 
				            .hasFilter-hvr-helena:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(158, 175, 30, .25);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-hudson
					{
					name : 'hasFilter-hudson' ,
					code : 	
					`        /* Filter - hudson */
				        /* ------------------------------- */

				            .hasFilter-hudson            , 
				            .hasFilter-hvr-hudson:hover  {
				                -webkit-filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);
				                        filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-hudson::before            , 
				            .hasFilter-hvr-hudson:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-inkwell
					{
					name : 'hasFilter-inkwell' ,
					code : 	
					`        /* Filter - inkwell */
				        /* ------------------------------- */

				            .hasFilter-inkwell            , 
				            .hasFilter-hvr-inkwell:hover  {
				                -webkit-filter: brightness(1.25) contrast(.85) grayscale(1);
				                        filter: brightness(1.25) contrast(.85) grayscale(1);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-juno
					{
					name : 'hasFilter-juno' ,
					code : 	
					`        /* Filter - juno */
				        /* ------------------------------- */

				            .hasFilter-juno            , 
				            .hasFilter-hvr-juno:hover  {
				                -webkit-filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);
				                        filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-juno::before            , 
				            .hasFilter-hvr-juno:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(127, 187, 227, .2);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-kelvin
					{
					name : 'hasFilter-kelvin' ,
					code : 	
					`        /* Filter - kelvin */
				        /* ------------------------------- */

				            .hasFilter-kelvin            , 
				            .hasFilter-hvr-kelvin:hover  {
				                -webkit-filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);
				                        filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-kelvin::before            , 
				            .hasFilter-hvr-kelvin:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-lark
					{
					name : 'hasFilter-lark' ,
					code : 	
					`        /* Filter - lark */
				        /* ------------------------------- */

				            .hasFilter-lark            , 
				            .hasFilter-hvr-lark:hover  {
				                -webkit-filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);
				                        filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-lofi
					{
					name : 'hasFilter-lofi' ,
					code : 	
					`        /* Filter - lofi */
				        /* ------------------------------- */

				            .hasFilter-lofi            , 
				            .hasFilter-hvr-lofi:hover  {
				                -webkit-filter: saturate(1.1) contrast(1.5);
				                        filter: saturate(1.1) contrast(1.5);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-ludwig
					{
					name : 'hasFilter-ludwig' ,
					code : 	
					`        /* Filter - ludwig */
				        /* ------------------------------- */

				            .hasFilter-ludwig            , 
				            .hasFilter-hvr-ludwig:hover  {
				                -webkit-filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);
				                        filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-ludwig::before            , 
				            .hasFilter-hvr-ludwig:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(125, 105, 24, .1);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-maven
					{
					name : 'hasFilter-maven' ,
					code : 	
					`        /* Filter - maven */
				        /* ------------------------------- */

				            .hasFilter-maven            , 
				            .hasFilter-hvr-maven:hover  {
				                -webkit-filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);
				                        filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-maven::before            , 
				            .hasFilter-hvr-maven:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(158, 175, 30, .25);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-mayfair
					{
					name : 'hasFilter-mayfair' ,
					code : 	
					`        /* Filter - mayfair */
				        /* ------------------------------- */

				            .hasFilter-mayfair            , 
				            .hasFilter-hvr-mayfair:hover  {
				                -webkit-filter: contrast(1.1) brightness(1.15) saturate(1.1);
				                        filter: contrast(1.1) brightness(1.15) saturate(1.1);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-mayfair::before            , 
				            .hasFilter-hvr-mayfair:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-moon
					{
					name : 'hasFilter-moon' ,
					code : 	
					`        /* Filter - moon */
				        /* ------------------------------- */

				            .hasFilter-moon            , 
				            .hasFilter-hvr-moon:hover  {
				                -webkit-filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);
				                        filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-nashville
					{
					name : 'hasFilter-nashville' ,
					code : 	
					`        /* Filter - nashville */
				        /* ------------------------------- */

				            .hasFilter-nashville            , 
				            .hasFilter-hvr-nashville:hover  {
				                -webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
				                        filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-nashville::before            , 
				            .hasFilter-hvr-nashville:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%);
				                mix-blend-mode: screen;
				            }
					`
					},

				// hasFilter-perpetua
					{
					name : 'hasFilter-perpetua' ,
					code : 	
					`        /* Filter - perpetua */
				        /* ------------------------------- */

				            .hasFilter-perpetua            , 
				            .hasFilter-hvr-perpetua:hover  {
				                -webkit-filter: contrast(1.1) brightness(1.25) saturate(1.1);
				                        filter: contrast(1.1) brightness(1.25) saturate(1.1);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-perpetua::before            , 
				            .hasFilter-hvr-perpetua:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: linear-gradient(to bottom, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25));
				                mix-blend-mode: multiply;
				            }
					`
					},

				// hasFilter-poprocket
					{
					name : 'hasFilter-poprocket' ,
					code : 	
					`        /* Filter - poprocket */
				        /* ------------------------------- */

				            .hasFilter-poprocket            , 
				            .hasFilter-hvr-poprocket:hover  {
				                -webkit-filter: sepia(.15) brightness(1.2);
				                        filter: sepia(.15) brightness(1.2);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-poprocket::before            , 
				            .hasFilter-hvr-poprocket:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%);
				                mix-blend-mode: screen;
				            }
					`
					},

				// hasFilter-reyes
					{
					name : 'hasFilter-reyes' ,
					code : 	
					`        /* Filter - reyes */
				        /* ------------------------------- */

				            .hasFilter-reyes            , 
				            .hasFilter-hvr-reyes:hover  {
				                -webkit-filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);
				                        filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-rise
					{
					name : 'hasFilter-rise' ,
					code : 	
					`        /* Filter - rise */
				        /* ------------------------------- */

				            .hasFilter-rise            , 
				            .hasFilter-hvr-rise:hover  {
				                -webkit-filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);
				                        filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-rise::before            , 
				            .hasFilter-hvr-rise:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%);
				                mix-blend-mode: lighten;
				            }
					`
					},

				// hasFilter-sierra
					{
					name : 'hasFilter-sierra' ,
					code : 	
					`        /* Filter - sierra */
				        /* ------------------------------- */

				            .hasFilter-sierra            , 
				            .hasFilter-hvr-sierra:hover  {
				                -webkit-filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);
				                        filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-sierra::before            , 
				            .hasFilter-hvr-sierra:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%);
				                mix-blend-mode: screen;
				            }
					`
					},

				// hasFilter-skyline
					{
					name : 'hasFilter-skyline' ,
					code : 	
					`        /* Filter - skyline */
				        /* ------------------------------- */

				            .hasFilter-skyline            , 
				            .hasFilter-hvr-skyline:hover  {
				                -webkit-filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);
				                        filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-slumber
					{
					name : 'hasFilter-slumber' ,
					code : 	
					`        /* Filter - slumber */
				        /* ------------------------------- */

				            .hasFilter-slumber            , 
				            .hasFilter-hvr-slumber:hover  {
				                -webkit-filter: sepia(.35) contrast(1.25) saturate(1.25);
				                        filter: sepia(.35) contrast(1.25) saturate(1.25);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-slumber::before            , 
				            .hasFilter-hvr-slumber:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(125, 105, 24, .2);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-stinson
					{
					name : 'hasFilter-stinson' ,
					code : 	
					`        /* Filter - stinson */
				        /* ------------------------------- */

				            .hasFilter-stinson            , 
				            .hasFilter-hvr-stinson:hover  {
				                -webkit-filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);
				                        filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-stinson::before            , 
				            .hasFilter-hvr-stinson:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(125, 105, 24, .45);
				                mix-blend-mode: lighten;
				            }
					`
					},

				// hasFilter-sutro
					{
					name : 'hasFilter-sutro' ,
					code : 	
					`        /* Filter - sutro */
				        /* ------------------------------- */

				            .hasFilter-sutro            , 
				            .hasFilter-hvr-sutro:hover  {
				                -webkit-filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);
				                        filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-sutro::before            , 
				            .hasFilter-hvr-sutro:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-toaster
					{
					name : 'hasFilter-toaster' ,
					code : 	
					`        /* Filter - toaster */
				        /* ------------------------------- */

				            .hasFilter-toaster            , 
				            .hasFilter-hvr-toaster:hover  {
				                -webkit-filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);
				                        filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-toaster::before            , 
				            .hasFilter-hvr-toaster:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25));
				                mix-blend-mode: screen;
				            }
					`
					},

				// hasFilter-valencia
					{
					name : 'hasFilter-valencia' ,
					code : 	
					`        /* Filter - valencia */
				        /* ------------------------------- */

				            .hasFilter-valencia            , 
				            .hasFilter-hvr-valencia:hover  {
				                -webkit-filter: sepia(.25) contrast(1.1) brightness(1.1);
				                        filter: sepia(.25) contrast(1.1) brightness(1.1);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-valencia::before            , 
				            .hasFilter-hvr-valencia:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(230, 193, 61, .1);
				                mix-blend-mode: lighten;
				            }
					`
					},

				// hasFilter-vesper
					{
					name : 'hasFilter-vesper' ,
					code : 	
					`        /* Filter - vesper */
				        /* ------------------------------- */

				            .hasFilter-vesper            , 
				            .hasFilter-hvr-vesper:hover  {
				                -webkit-filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);
				                        filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-vesper::before            , 
				            .hasFilter-hvr-vesper:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(125, 105, 24, .25);
				                mix-blend-mode: overlay;
				            }
					`
					},

				// hasFilter-walden
					{
					name : 'hasFilter-walden' ,
					code : 	
					`        /* Filter - walden */
				        /* ------------------------------- */

				            .hasFilter-walden            , 
				            .hasFilter-hvr-walden:hover  {
				                -webkit-filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);
				                        filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-walden::before            , 
				            .hasFilter-hvr-walden:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: rgba(229, 240, 128, .5);
				                mix-blend-mode: darken;
				            }
					`
					},

				// hasFilter-willow
					{
					name : 'hasFilter-willow' ,
					code : 	
					`        /* Filter - willow */
				        /* ------------------------------- */

				            .hasFilter-willow            , 
				            .hasFilter-hvr-willow:hover  {
				                -webkit-filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);
				                        filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }
					`
					},

				// hasFilter-xpro-ii
					{
					name : 'hasFilter-xpro-ii' ,
					code : 	
					`        /* Filter - xpro-ii */
				        /* ------------------------------- */

				            .hasFilter-xpro-ii            , 
				            .hasFilter-hvr-xpro-ii:hover  {
				                -webkit-filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);
				                        filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg);

				                -webkit-transition: filter 0.4s ease-out;
				                   -moz-transition: filter 0.4s ease-out;
				                     -o-transition: filter 0.4s ease-out;
				                        transition: filter 0.4s ease-out; 
				            }

				            .hasFilter-xpro-ii::before            , 
				            .hasFilter-hvr-xpro-ii:hover::before  {
				                content: '';
				                position: absolute; z-index: 2;
				                top: 0; left: 0; right: 0; bottom: 0;
				                
				                background: radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%);
				                mix-blend-mode: multiply;
				            }
					`
					}
			];

			codeBlocks_css          = byAndu_codeBlock_formatCodeString(codeBlocks_css);
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

				//removeString       : 'hasFilter-' ,
				demoItems_codeLink : codeBlocks_css_singular
			};

			byAndu.pageConfigObj_setupObj(paramObj);
			byAndu.pageConfigObj_runConfig();

        // Generate codeBlocks - HTML
        // --------------------------------

            var htmlCodeContainer = document.getElementById('codeSection-html');

            demoItemsArray.map(function(effect){

                var newElem = document.createElement('PRE');

                newElem.classList = 'finalCode-block hidden';
                newElem.classList.add('finalCode-block-'+effect);
                newElem.setAttribute('data-finalCodeId', effect);

                newElem.innerHTML = '    &lt;img class="'+effect+'" src="insertImgSrc"/> ';

                htmlCodeContainer.appendChild(newElem);
            });

            htmlCodeContainer.getElementsByClassName('finalCode-block')[0].classList.remove('hidden');

	})();
