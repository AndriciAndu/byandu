
	(function(){

		var demoItemsArray = [ 'visibility' ];

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// visibility
					{
					name : 'visibility' ,
					code : 	
					`    /* Visibility */
				    /* -------------------------------------------- */

				        .hidden { 
				            display: none !important; 
				        }

				        @media (max-width: 575.98px) {
				            .xs-hidden,
				            .sm-visible:not(.xs-visible), 
				            .md-visible:not(.xs-visible), 
				            .lg-visible:not(.xs-visible), 
				            .xl-visible:not(.xs-visible) {
				                display: none !important;
				            }
				        }

				        @media (min-width: 575.98px) and (max-width: 767.98px) {
				            .xs-visible:not(.sm-visible), 
				            .sm-hidden,
				            .md-visible:not(.sm-visible), 
				            .lg-visible:not(.sm-visible), 
				            .xl-visible:not(.sm-visible) {
				                display: none !important;
				            }
				        }

				        @media (min-width: 767.98px) and (max-width: 991.98px) {
				            .xs-visible:not(.md-visible), 
				            .sm-visible:not(.md-visible),
				            .md-hidden, 
				            .lg-visible:not(.md-visible), 
				            .xl-visible:not(.md-visible) {
				                display: none !important;
				            }
				        }

				        @media (min-width: 991.98px) and (max-width: 1199.98px) {
				            .xs-visible:not(.lg-visible), 
				            .sm-visible:not(.lg-visible), 
				            .md-visible:not(.lg-visible),
				            .lg-hidden, 
				            .xl-visible:not(.lg-visible) {
				                display: none !important;
				            }
				        }

				        @media (min-width: 1199.98px) {
				            .xs-visible:not(.xl-visible), 
				            .sm-visible:not(.xl-visible), 
				            .md-visible:not(.xl-visible), 
				            .lg-visible:not(.xl-visible),
				            .xl-hidden  { 
				                display: none !important; 
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

