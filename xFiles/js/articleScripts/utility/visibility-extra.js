
	(function(){

		var demoItemsArray = [ 'before-none' , 'after-none' , 'invisible' , 'transparent' , 'unclickable' , 'unselectable' ];

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// before-none
					{
					name : 'before-none' ,
					code : 	
					`    /* elem-before-none */
					    /* -------------------------------------------- */

					        .before-none:before { display: none !important; }

					        @media (max-width: 575.98px)                            { .xs-before-none:before { display: none !important; } }
					        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-before-none:before { display: none !important; } }
					        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-before-none:before { display: none !important; } }
					        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-before-none:before { display: none !important; } }
					        @media (min-width: 1199.98px)                           { .xl-before-none:before { display: none !important; } }

						`
					},

				// after-none
						{
						name : 'after-none' ,
						code :    
						`    /* elem-after-none */
					    /* -------------------------------------------- */

					        .after-none:after { display: none !important; }

					        @media (max-width: 575.98px)                            { .xs-after-none:after { display: none !important; } }
					        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-after-none:after { display: none !important; } }
					        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-after-none:after { display: none !important; } }
					        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-after-none:after { display: none !important; } }
					        @media (min-width: 1199.98px)                           { .xl-after-none:after { display: none !important; } }

						`
						},

				// invisible
					{
					name : 'invisible' ,
					code : 	
					`    /* Invisible */
					    /* -------------------------------------------- */

						        .invisible { visibility: hidden !important; }

						        @media (max-width: 575.98px)                            { .xs-invisible { visibility: hidden !important; } }
						        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-invisible { visibility: hidden !important; } }
						        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-invisible { visibility: hidden !important; } }
						        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-invisible { visibility: hidden !important; } }
						        @media (min-width: 1199.98px)                           { .xl-invisible { visibility: hidden !important; } }
						`
					},

				// transparent
					{
					name : 'transparent' ,
					code : 	
					`    /* Transparent */
					    /* -------------------------------------------- */

						        .transparent { opacity: 0 !important; pointer-events: none !important; }

						        @media (max-width: 575.98px)                            { .xs-transparent { opacity: 0 !important; pointer-events: none !important; } }
						        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-transparent { opacity: 0 !important; pointer-events: none !important; } }
						        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-transparent { opacity: 0 !important; pointer-events: none !important; } }
						        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-transparent { opacity: 0 !important; pointer-events: none !important; } }
						        @media (min-width: 1199.98px)                           { .xl-transparent { opacity: 0 !important; pointer-events: none !important; } }
						`
					},

				// unclickable
						{
						name : 'unclickable' ,
						code :    
						`    /* Unclickable */
					    /* -------------------------------------------- */

						        .unclickable, .pointer-none { pointer-events: none !important; }

						        @media (max-width: 575.98px)                            { .xs-unclickable, .xs-pointer-none { pointer-events: none !important; } }
						        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-unclickable, .sm-pointer-none { pointer-events: none !important; } }
						        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-unclickable, .md-pointer-none { pointer-events: none !important; } }
						        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-unclickable, .lg-pointer-none { pointer-events: none !important; } }
						        @media (min-width: 1199.98px)                           { .xl-unclickable, .xl-pointer-none { pointer-events: none !important; } }
						`
						},

				// unselectable
					{
					name : 'unselectable' ,
					code : 	
					`    /* Unselectable */
					    /* -------------------------------------------- */

					        .unselectable {
					            -webkit-user-select: none !important;
					               -moz-user-select: none !important;
					                -ms-user-select: none !important;
					                    user-select: none !important;
					        }

					        @media (max-width: 575.98px) {
					            .xs-unselectable {
					                -webkit-user-select: none !important;
					                   -moz-user-select: none !important;
					                    -ms-user-select: none !important;
					                        user-select: none !important;
					            }
					        }

					        @media (min-width: 575.98px) and (max-width: 767.98px) {
					            .sm-unselectable {
					                -webkit-user-select: none !important;
					                   -moz-user-select: none !important;
					                    -ms-user-select: none !important;
					                        user-select: none !important;
					            }
					        }

					        @media (min-width: 767.98px) and (max-width: 991.98px) {
					            .md-unselectable {
					                -webkit-user-select: none !important;
					                   -moz-user-select: none !important;
					                    -ms-user-select: none !important;
					                        user-select: none !important;
					            }
					        }

					        @media (min-width: 991.98px) and (max-width: 1199.98px) {
					            .lg-unselectable {
					                -webkit-user-select: none !important;
					                   -moz-user-select: none !important;
					                    -ms-user-select: none !important;
					                        user-select: none !important;
					            }
					        }

					        @media (min-width: 1199.98px) {
					            .xl-unselectable {
					                -webkit-user-select: none !important;
					                   -moz-user-select: none !important;
					                    -ms-user-select: none !important;
					                        user-select: none !important;
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
					css : demoItemsArray 
				} ,

				codeBlocks : {
					css : codeBlocks_css ,
				}
			};

			byAndu.pageConfigObj_setupObj(paramObj);
			byAndu.pageConfigObj_runConfig();

	})();
