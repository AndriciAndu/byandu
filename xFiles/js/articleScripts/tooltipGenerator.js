
	(function(){

		var asdf = {};

		asdf.baseline = 
			`
			`;

		var x = 
			`
			.myTooltip {
				position: relative;
			}

			.myTooltip::before {
				content: attr(data-tooltipText);
				position: absolute;		z-index: 2;
				pointer-events: none;	opacity: 0;

				padding: .5em 1em;  line-height: 1.43;
				text-align: center;	font-weight: bold;	
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

			.tooltip-left.tooltip-before:before, 
			.tooltip-left.tooltip-after:after {
				left: -1em; 	top: 50%; 
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


			`;

	})();