	
	(function(){

		var demoItemsArray = [ 'position' , 'position-resp' ];

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// position
					{
					name : 'position' ,
					code : 	
					`    /* Utility - Position */ 
				    /* -------------------------------------------------------------------------------- */

				        /* All viewports */
				            .pos-static         ,  .position-static         { position: static    !important; }
				            .pos-relative       ,  .position-relative       { position: relative  !important; }
				            .pos-absolute       ,  .position-absolute       { position: absolute  !important; }
				            .pos-fixed          ,  .position-fixed          { position: fixed     !important; }
				            .pos-sticky         ,  .position-sticky         { position: sticky    !important; }
				    `
					},

				// position-resp
				    {
				    name : 'position-resp' ,
				    code :    
				    `        /* xs-only */
				        @media (max-width: 575.98px) {
				            .xs-o-pos-static    ,  .xs-o-position-static    { position: static    !important; }
				            .xs-o-pos-relative  ,  .xs-o-position-relative  { position: relative  !important; }
				            .xs-o-pos-absolute  ,  .xs-o-position-absolute  { position: absolute  !important; }
				            .xs-o-pos-fixed     ,  .xs-o-position-fixed     { position: fixed     !important; }
				            .xs-o-pos-sticky    ,  .xs-o-position-sticky    { position: sticky    !important; }
				        }

				        /* sm */
				        @media (min-width: 575.98px) {
				            .sm-pos-static      ,  .sm-position-static      { position: static    !important; }
				            .sm-pos-relative    ,  .sm-position-relative    { position: relative  !important; }
				            .sm-pos-absolute    ,  .sm-position-absolute    { position: absolute  !important; }
				            .sm-pos-fixed       ,  .sm-position-fixed       { position: fixed     !important; }
				            .sm-pos-sticky      ,  .sm-position-sticky      { position: sticky    !important; }
				        }

				        /* sm-only */
				        @media (min-width: 575.98px) and (max-width: 767.98px) {
				            .sm-o-pos-static    ,  .sm-o-position-static    { position: static    !important; }
				            .sm-o-pos-relative  ,  .sm-o-position-relative  { position: relative  !important; }
				            .sm-o-pos-absolute  ,  .sm-o-position-absolute  { position: absolute  !important; }
				            .sm-o-pos-fixed     ,  .sm-o-position-fixed     { position: fixed     !important; }
				            .sm-o-pos-sticky    ,  .sm-o-position-sticky    { position: sticky    !important; }
				        }

				        /* md */
				        @media (min-width: 767.98px) {
				            .md-pos-static      ,  .md-position-static      { position: static    !important; }
				            .md-pos-relative    ,  .md-position-relative    { position: relative  !important; }
				            .md-pos-absolute    ,  .md-position-absolute    { position: absolute  !important; }
				            .md-pos-fixed       ,  .md-position-fixed       { position: fixed     !important; }
				            .md-pos-sticky      ,  .md-position-sticky      { position: sticky    !important; }
				        }

				        /* md-only */
				        @media (min-width: 767.98px) and (max-width: 991.98px) {
				            .md-o-pos-static    ,  .md-o-position-static    { position: static    !important; }
				            .md-o-pos-relative  ,  .md-o-position-relative  { position: relative  !important; }
				            .md-o-pos-absolute  ,  .md-o-position-absolute  { position: absolute  !important; }
				            .md-o-pos-fixed     ,  .md-o-position-fixed     { position: fixed     !important; }
				            .md-o-pos-sticky    ,  .md-o-position-sticky    { position: sticky    !important; }
				        }

				        /* lg */
				        @media (min-width: 991.98px) {
				            .lg-pos-static      ,  .lg-position-static      { position: static    !important; }
				            .lg-pos-relative    ,  .lg-position-relative    { position: relative  !important; }
				            .lg-pos-absolute    ,  .lg-position-absolute    { position: absolute  !important; }
				            .lg-pos-fixed       ,  .lg-position-fixed       { position: fixed     !important; }
				            .lg-pos-sticky      ,  .lg-position-sticky      { position: sticky    !important; }
				        }

				        /* lg-only */
				        @media (min-width: 991.98px) and (max-width: 1199.98px) {
				            .lg-o-pos-static    ,  .lg-o-position-static    { position: static    !important; }
				            .lg-o-pos-relative  ,  .lg-o-position-relative  { position: relative  !important; }
				            .lg-o-pos-absolute  ,  .lg-o-position-absolute  { position: absolute  !important; }
				            .lg-o-pos-fixed     ,  .lg-o-position-fixed     { position: fixed     !important; }
				            .lg-o-pos-sticky    ,  .lg-o-position-sticky    { position: sticky    !important; }
				        }

				        /* xl | xl-only */
				        @media (min-width: 1199.98px) {
				            .xl-pos-static      ,  .xl-position-static      { position: static    !important; }
				            .xl-pos-relative    ,  .xl-position-relative    { position: relative  !important; }
				            .xl-pos-absolute    ,  .xl-position-absolute    { position: absolute  !important; }
				            .xl-pos-fixed       ,  .xl-position-fixed       { position: fixed     !important; }
				            .xl-pos-sticky      ,  .xl-position-sticky      { position: sticky    !important; }
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

