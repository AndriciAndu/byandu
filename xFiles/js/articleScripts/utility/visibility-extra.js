
	(function(){

		var demoItemsArray = [ 'before-hidden' , 'after-hidden' , 'visibility-hidden' , 'opacity-0' , 'pointerEvents-none' , 'userSelect-none' ];

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// before-hidden
					{
					name : 'before-hidden' ,
					code : 	
					`    /* elem-before-hidden */
					    /* -------------------------------------------- */

					        .before-hidden::before { display: none !important; }

					        @media (max-width: 575.98px)                            { .xs-before-hidden::before { display: none !important; } }
					        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-before-hidden::before { display: none !important; } }
					        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-before-hidden::before { display: none !important; } }
					        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-before-hidden::before { display: none !important; } }
					        @media (min-width: 1199.98px)                           { .xl-before-hidden::before { display: none !important; } }

						`
					},

				// after-hidden
						{
						name : 'after-hidden' ,
						code :    
						`    /* elem-after-hidden */
					    /* -------------------------------------------- */

					        .after-hidden::after { display: none !important; }

					        @media (max-width: 575.98px)                            { .xs-after-hidden::after { display: none !important; } }
					        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-after-hidden::after { display: none !important; } }
					        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-after-hidden::after { display: none !important; } }
					        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-after-hidden::after { display: none !important; } }
					        @media (min-width: 1199.98px)                           { .xl-after-hidden::after { display: none !important; } }

						`
						},

				// visibility-hidden
					{
					name : 'visibility-hidden' ,
					code : 	
					`    /* visibility-hidden */
					    /* -------------------------------------------- */

						        .visibility-hidden { visibility: hidden !important; }

						        @media (max-width: 575.98px)                            { .xs-visibility-hidden { visibility: hidden !important; } }
						        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-visibility-hidden { visibility: hidden !important; } }
						        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-visibility-hidden { visibility: hidden !important; } }
						        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-visibility-hidden { visibility: hidden !important; } }
						        @media (min-width: 1199.98px)                           { .xl-visibility-hidden { visibility: hidden !important; } }
						`
					},

				// opacity-0
					{
					name : 'opacity-0' ,
					code : 	
					`    /* opacity-0 */
					    /* -------------------------------------------- */

						        .opacity-0 { opacity: 0 !important; pointer-events: none !important; }

						        @media (max-width: 575.98px)                            { .xs-opacity-0 { opacity: 0 !important; pointer-events: none !important; } }
						        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-opacity-0 { opacity: 0 !important; pointer-events: none !important; } }
						        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-opacity-0 { opacity: 0 !important; pointer-events: none !important; } }
						        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-opacity-0 { opacity: 0 !important; pointer-events: none !important; } }
						        @media (min-width: 1199.98px)                           { .xl-opacity-0 { opacity: 0 !important; pointer-events: none !important; } }
						`
					},

				// pointerEvents-none
						{
						name : 'pointerEvents-none' ,
						code :    
						`    /* pointerEvents-none */
					    /* -------------------------------------------- */

						        .pointerEvents-none, .pointer-none { pointer-events: none !important; }

						        @media (max-width: 575.98px)                            { .xs-pointerEvents-none, .xs-pointer-none { pointer-events: none !important; } }
						        @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-pointerEvents-none, .sm-pointer-none { pointer-events: none !important; } }
						        @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-pointerEvents-none, .md-pointer-none { pointer-events: none !important; } }
						        @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-pointerEvents-none, .lg-pointer-none { pointer-events: none !important; } }
						        @media (min-width: 1199.98px)                           { .xl-pointerEvents-none, .xl-pointer-none { pointer-events: none !important; } }
						`
						},

				// userSelect-none
					{
					name : 'userSelect-none' ,
					code : 	
					`    /* userSelect-none */
					    /* -------------------------------------------- */

					        .userSelect-none {
					            -webkit-user-select: none !important;
					               -moz-user-select: none !important;
					                -ms-user-select: none !important;
					                    user-select: none !important;
					        }

					        @media (max-width: 575.98px) {
					            .xs-userSelect-none {
					                -webkit-user-select: none !important;
					                   -moz-user-select: none !important;
					                    -ms-user-select: none !important;
					                        user-select: none !important;
					            }
					        }

					        @media (min-width: 575.98px) and (max-width: 767.98px) {
					            .sm-userSelect-none {
					                -webkit-user-select: none !important;
					                   -moz-user-select: none !important;
					                    -ms-user-select: none !important;
					                        user-select: none !important;
					            }
					        }

					        @media (min-width: 767.98px) and (max-width: 991.98px) {
					            .md-userSelect-none {
					                -webkit-user-select: none !important;
					                   -moz-user-select: none !important;
					                    -ms-user-select: none !important;
					                        user-select: none !important;
					            }
					        }

					        @media (min-width: 991.98px) and (max-width: 1199.98px) {
					            .lg-userSelect-none {
					                -webkit-user-select: none !important;
					                   -moz-user-select: none !important;
					                    -ms-user-select: none !important;
					                        user-select: none !important;
					            }
					        }

					        @media (min-width: 1199.98px) {
					            .xl-userSelect-none {
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

			byAndu.pageConfigObj_setupObj(obj_deepClone(paramObj)); paramObj = undefined;
			byAndu.pageConfigObj_runConfig();

	})();

