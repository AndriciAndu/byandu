
	(function(){

		var demoItemsArray = [ 'float' , 'float-resp' , 'clearfix' ];

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// float
					{
					name : 'float' ,
					code : 	
					`    /* Utility - Float */ 
				    /* -------------------------------------------- */

				        /* All viewports */
				            .float-right        { float: right  !important; }
				            .float-left         { float: left   !important; }
				            .float-none         { float: none   !important; }

				            .clear-left         { clear: left   !important; }
				            .clear-right        { clear: right  !important; }
				            .clear-both         ,
				            .float-clear        { clear: both   !important; }
				    `
					},

				// float-resp
				    {
				    name : 'float-resp' ,
				    code :    
				    `        /* xs-only */
				        @media (max-width: 575.98px) {
				            .xs-o-float-right   { float: right  !important; }
				            .xs-o-float-left    { float: left   !important; }
				            .xs-o-float-none    { float: none   !important; }

				            .xs-o-clear-left    { clear: left   !important; }
				            .xs-o-clear-right   { clear: right  !important; }
				            .xs-o-clear-both    ,
				            .xs-o-float-clear   { clear: both   !important; }
				        }

				        /* sm */
				        @media (min-width: 575.98px) {
				            .sm-float-right     { float: right  !important; }
				            .sm-float-left      { float: left   !important; }
				            .sm-float-none      { float: none   !important; }

				            .sm-clear-left      { clear: left   !important; }
				            .sm-clear-right     { clear: right  !important; }
				            .sm-clear-both      ,   
				            .sm-float-clear     { clear: both   !important; }
				        }

				        /* sm-only */
				        @media (min-width: 575.98px) and (max-width: 767.98px) {
				            .sm-o-float-right   { float: right  !important; }
				            .sm-o-float-left    { float: left   !important; }
				            .sm-o-float-none    { float: none   !important; }

				            .sm-o-clear-left    { clear: left   !important; }
				            .sm-o-clear-right   { clear: right  !important; }
				            .sm-o-clear-both    ,
				            .sm-o-float-clear   { clear: both   !important; }
				        }

				        /* md */
				        @media (min-width: 767.98px) {
				            .md-float-right     { float: right  !important; }
				            .md-float-left      { float: left   !important; }
				            .md-float-none      { float: none   !important; }

				            .md-clear-left      { clear: left   !important; }
				            .md-clear-right     { clear: right  !important; }
				            .md-clear-both      ,
				            .md-float-clear     { clear: both   !important; }
				        }

				        /* md-only */
				        @media (min-width: 767.98px) and (max-width: 991.98px) {
				            .md-o-float-right   { float: right  !important; }
				            .md-o-float-left    { float: left   !important; }
				            .md-o-float-none    { float: none   !important; }

				            .md-o-clear-left    { clear: left   !important; }
				            .md-o-clear-right   { clear: right  !important; }
				            .md-o-clear-both    ,
				            .md-o-float-clear   { clear: both   !important; }
				        }

				        /* lg */
				        @media (min-width: 991.98px) {
				            .lg-float-right     { float: right  !important; }
				            .lg-float-left      { float: left   !important; }
				            .lg-float-none      { float: none   !important; }

				            .lg-clear-left      { clear: left   !important; }
				            .lg-clear-right     { clear: right  !important; }
				            .lg-clear-both      ,
				            .lg-float-clear     { clear: both   !important; }
				        }

				        /* lg-only */
				        @media (min-width: 991.98px) and (max-width: 1199.98px) {
				            .lg-o-float-right   { float: right  !important; }
				            .lg-o-float-left    { float: left   !important; }
				            .lg-o-float-none    { float: none   !important; }

				            .lg-o-clear-left    { clear: left   !important; }
				            .lg-o-clear-right   { clear: right  !important; }
				            .lg-o-clear-both    ,
				            .lg-o-float-clear   { clear: both   !important; }
				        }

				        /* xl | xl-only */
				        @media (min-width: 1199.98px) {
				            .xl-float-right     { float: right  !important; }
				            .xl-float-left      { float: left   !important; }
				            .xl-float-none      { float: none   !important; }

				            .xl-clear-left      { clear: left   !important; }
				            .xl-clear-right     { clear: right  !important; }
				            .xl-clear-both      ,
				            .xl-float-clear     { clear: both   !important; }
				        }
				    `
				    },

				    {
				    name : 'clearfix' ,
				    code : 
				    `    /* Clearfix */
				    /* -------------------------------------------- */

				        .clearfix:after {
				            content: '';
				            display: table;
				            clear: both;
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

			byAndu.pageConfigObj_setupObj(obj_deepClone(paramObj)); paramObj = null;
			byAndu.pageConfigObj_runConfig();

	})();

