	
	// Generate Demos
	// --------------------------------

		(function(){

			var demoItemsArray = [ 
                'clears'            , 'clears-resp'             , 
                'margin-offsets'    , 'margin-offsets-resp'     , 
                'padding-offsets'   , 'padding-offsets-resp'    
            ];

			// Generate HTML for Code-Tab(3)
			// --------------------------------

				byAndu_generateHTML_forCodeTab();
				byAndu_finalCode_generateCheckboxes('css', demoItemsArray);
				byAndu_finalCode_initCheckboxes();

		})();

// Generate codeBlocks innerHTML - CSS
// --------------------------------

	(function(){

		var finalCode_codeBlocks_css = [

			// 
			    {
			    name : null ,
			    code :    
			    `    /* Utility - Spacing - Row */
			    /* -------------------------------------------- */
			    `
			    },

			// clears
				{
				name : 'clears' ,
				code : 	
				`        /* Clears - Margin | Padding | Border */
			        /* -------------------------------------------- */

			            /* All viewports */
			                .row-m-0       > * { margin:            0; }
			                .row-mt-0      > * { margin-top:        0; }
			                .row-ml-0      > * { margin-left:       0; }
			                .row-mr-0      > * { margin-right:      0; }
			                .row-mb-0      > * { margin-bottom:     0; }
			                .row-mv-0      > * { margin-top:        0;  margin-bottom:  0; }
			                .row-mh-0      > * { margin-left:       0;  margin-right:   0; }

			                .row-p-0       > * { padding:           0; }
			                .row-pt-0      > * { padding-top:       0; }
			                .row-pl-0      > * { padding-left:      0; }
			                .row-pr-0      > * { padding-right:     0; }
			                .row-pb-0      > * { padding-bottom:    0; }
			                .row-pv-0      > * { padding-top:       0;  padding-bottom: 0; }
			                .row-ph-0      > * { padding-left:      0;  padding-right:  0; }

			                .row-b-0       > * { border:            0; }
			                .row-bt-0      > * { border-top:        0; }
			                .row-bl-0      > * { border-left:       0; }
			                .row-br-0      > * { border-right:      0; }
			                .row-bb-0      > * { border-bottom:     0; }
			                .row-bv-0      > * { border-top:        0;  border-bottom:  0; }
			                .row-bh-0      > * { border-left:       0;  border-right:   0; }
			    `
				},

			// clears-resp
			    {
			    name : 'clears-resp' ,
			    code :    
			    `            /* xs-only */
			            @media (max-width: 575.98px) {
			                .xs-o-row-m-0  > * { margin:        0; }
			                .xs-o-row-mt-0 > * { margin-top:    0; }
			                .xs-o-row-ml-0 > * { margin-left:   0; }
			                .xs-o-row-mr-0 > * { margin-right:  0; }
			                .xs-o-row-mb-0 > * { margin-bottom: 0; }
			                .xs-o-row-mv-0 > * { margin-top:    0;  margin-bottom:  0; }
			                .xs-o-row-mh-0 > * { margin-left:   0;  margin-right:   0; }

			                .xs-o-row-p-0  > * { padding:       0; }
			                .xs-o-row-pt-0 > * { padding-top:   0; }
			                .xs-o-row-pl-0 > * { padding-left:  0; }
			                .xs-o-row-pr-0 > * { padding-right: 0; }
			                .xs-o-row-pb-0 > * { padding-bottom:0; }
			                .xs-o-row-pv-0 > * { padding-top:   0;  padding-bottom: 0; }
			                .xs-o-row-ph-0 > * { padding-left:  0;  padding-right:  0; }

			                .xs-o-row-b-0  > * { border:        0; }    
			                .xs-o-row-bt-0 > * { border-top:    0; }
			                .xs-o-row-bl-0 > * { border-left:   0; }
			                .xs-o-row-br-0 > * { border-right:  0; }
			                .xs-o-row-bb-0 > * { border-bottom: 0; }
			                .xs-o-row-bv-0 > * { border-top:    0;  border-bottom:  0; }
			                .xs-o-row-bh-0 > * { border-left:   0;  border-right:   0; }
			            }

			            /* sm */
			            @media (min-width: 575.98px) {  
			                .sm-row-m-0  > * { margin:          0; }
			                .sm-row-mt-0 > * { margin-top:      0; }
			                .sm-row-ml-0 > * { margin-left:     0; }
			                .sm-row-mr-0 > * { margin-right:    0; }
			                .sm-row-mb-0 > * { margin-bottom:   0; }
			                .sm-row-mv-0 > * { margin-top:      0;  margin-bottom:  0; }
			                .sm-row-mh-0 > * { margin-left:     0;  margin-right:   0; }

			                .sm-row-p-0  > * { padding:         0; }
			                .sm-row-pt-0 > * { padding-top:     0; }
			                .sm-row-pl-0 > * { padding-left:    0; }
			                .sm-row-pr-0 > * { padding-right:   0; }
			                .sm-row-pb-0 > * { padding-bottom:  0; }
			                .sm-row-pv-0 > * { padding-top:     0;  padding-bottom: 0; }
			                .sm-row-ph-0 > * { padding-left:    0;  padding-right:  0; }

			                .sm-row-b-0  > * { border:          0; }    
			                .sm-row-bt-0 > * { border-top:      0; }
			                .sm-row-bl-0 > * { border-left:     0; }
			                .sm-row-br-0 > * { border-right:    0; }
			                .sm-row-bb-0 > * { border-bottom:   0; }
			                .sm-row-bv-0 > * { border-top:      0;  border-bottom:  0; }
			                .sm-row-bh-0 > * { border-left:     0;  border-right:   0; }
			            }

			            /* sm-only */
			            @media (min-width: 575.98px) and (max-width: 767.98px) {
			                .sm-o-row-m-0  > * { margin:        0; }
			                .sm-o-row-mt-0 > * { margin-top:    0; }
			                .sm-o-row-ml-0 > * { margin-left:   0; }
			                .sm-o-row-mr-0 > * { margin-right:  0; }
			                .sm-o-row-mb-0 > * { margin-bottom: 0; }
			                .sm-o-row-mv-0 > * { margin-top:    0;  margin-bottom:  0; }
			                .sm-o-row-mh-0 > * { margin-left:   0;  margin-right:   0; }

			                .sm-o-row-p-0  > * { padding:       0; }
			                .sm-o-row-pt-0 > * { padding-top:   0; }
			                .sm-o-row-pl-0 > * { padding-left:  0; }
			                .sm-o-row-pr-0 > * { padding-right: 0; }
			                .sm-o-row-pb-0 > * { padding-bottom:0; }
			                .sm-o-row-pv-0 > * { padding-top:   0;  padding-bottom: 0; }
			                .sm-o-row-ph-0 > * { padding-left:  0;  padding-right:  0; }

			                .sm-o-row-b-0  > * { border:        0; }    
			                .sm-o-row-bt-0 > * { border-top:    0; }
			                .sm-o-row-bl-0 > * { border-left:   0; }
			                .sm-o-row-br-0 > * { border-right:  0; }
			                .sm-o-row-bb-0 > * { border-bottom: 0; }
			                .sm-o-row-bv-0 > * { border-top:    0;  border-bottom:  0; }
			                .sm-o-row-bh-0 > * { border-left:   0;  border-right:   0; }
			            }

			            /* md */
			            @media (min-width: 767.98px) {
			                .md-row-m-0  > * { margin:          0; }
			                .md-row-mt-0 > * { margin-top:      0; }
			                .md-row-ml-0 > * { margin-left:     0; }
			                .md-row-mr-0 > * { margin-right:    0; }
			                .md-row-mb-0 > * { margin-bottom:   0; }
			                .md-row-mv-0 > * { margin-top:      0;  margin-bottom:  0; }
			                .md-row-mh-0 > * { margin-left:     0;  margin-right:   0; }

			                .md-row-p-0  > * { padding:         0; }
			                .md-row-pt-0 > * { padding-top:     0; }
			                .md-row-pl-0 > * { padding-left:    0; }
			                .md-row-pr-0 > * { padding-right:   0; }
			                .md-row-pb-0 > * { padding-bottom:  0; }
			                .md-row-pv-0 > * { padding-top:     0;  padding-bottom: 0; }
			                .md-row-ph-0 > * { padding-left:    0;  padding-right:  0; }

			                .md-row-b-0  > * { border:          0; }
			                .md-row-bt-0 > * { border-top:      0; }
			                .md-row-bl-0 > * { border-left:     0; }
			                .md-row-br-0 > * { border-right:    0; }
			                .md-row-bb-0 > * { border-bottom:   0; }
			                .md-row-bv-0 > * { border-top:      0;  border-bottom:  0; }
			                .md-row-bh-0 > * { border-left:     0;  border-right:   0; }
			            }

			            /* md-only */
			            @media (min-width: 767.98px) and (max-width: 991.98px) {
			                .md-o-row-m-0  > * { margin:        0; }
			                .md-o-row-mt-0 > * { margin-top:    0; }
			                .md-o-row-ml-0 > * { margin-left:   0; }
			                .md-o-row-mr-0 > * { margin-right:  0; }
			                .md-o-row-mb-0 > * { margin-bottom: 0; }
			                .md-o-row-mv-0 > * { margin-top:    0;  margin-bottom:  0; }
			                .md-o-row-mh-0 > * { margin-left:   0;  margin-right:   0; }

			                .md-o-row-p-0  > * { padding:       0; }
			                .md-o-row-pt-0 > * { padding-top:   0; }
			                .md-o-row-pl-0 > * { padding-left:  0; }
			                .md-o-row-pr-0 > * { padding-right: 0; }
			                .md-o-row-pb-0 > * { padding-bottom:0; }
			                .md-o-row-pv-0 > * { padding-top:   0;  padding-bottom: 0; }
			                .md-o-row-ph-0 > * { padding-left:  0;  padding-right:  0; }

			                .md-o-row-b-0  > * { border:        0; }    
			                .md-o-row-bt-0 > * { border-top:    0; }
			                .md-o-row-bl-0 > * { border-left:   0; }
			                .md-o-row-br-0 > * { border-right:  0; }
			                .md-o-row-bb-0 > * { border-bottom: 0; }
			                .md-o-row-bv-0 > * { border-top:    0;  border-bottom:  0; }
			                .md-o-row-bh-0 > * { border-left:   0;  border-right:   0; }
			            }

			            /* lg */
			            @media (min-width: 991.98px) {
			                .lg-row-m-0  > * { margin:          0; }
			                .lg-row-mt-0 > * { margin-top:      0; }
			                .lg-row-ml-0 > * { margin-left:     0; }
			                .lg-row-mr-0 > * { margin-right:    0; }
			                .lg-row-mb-0 > * { margin-bottom:   0; }
			                .lg-row-mv-0 > * { margin-top:      0;  margin-bottom:  0; }
			                .lg-row-mh-0 > * { margin-left:     0;  margin-right:   0; }

			                .lg-row-p-0  > * { padding:         0; }
			                .lg-row-pt-0 > * { padding-top:     0; }
			                .lg-row-pl-0 > * { padding-left:    0; }
			                .lg-row-pr-0 > * { padding-right:   0; }
			                .lg-row-pb-0 > * { padding-bottom:  0; }
			                .lg-row-pv-0 > * { padding-top:     0;  padding-bottom: 0; }
			                .lg-row-ph-0 > * { padding-left:    0;  padding-right:  0; }

			                .lg-row-b-0  > * { border:          0; }
			                .lg-row-bt-0 > * { border-top:      0; }
			                .lg-row-bl-0 > * { border-left:     0; }
			                .lg-row-br-0 > * { border-right:    0; }
			                .lg-row-bb-0 > * { border-bottom:   0; }
			                .lg-row-bv-0 > * { border-top:      0;  border-bottom:  0; }
			                .lg-row-bh-0 > * { border-left:     0;  border-right:   0; }
			            }

			            /* lg-only */
			            @media (min-width: 991.98px) and (max-width: 1199.98px) {
			                .lg-o-row-m-0  > * { margin:        0; }
			                .lg-o-row-mt-0 > * { margin-top:    0; }
			                .lg-o-row-ml-0 > * { margin-left:   0; }
			                .lg-o-row-mr-0 > * { margin-right:  0; }
			                .lg-o-row-mb-0 > * { margin-bottom: 0; }
			                .lg-o-row-mv-0 > * { margin-top:    0;  margin-bottom:  0; }
			                .lg-o-row-mh-0 > * { margin-left:   0;  margin-right:   0; }

			                .lg-o-row-p-0  > * { padding:       0; }
			                .lg-o-row-pt-0 > * { padding-top:   0; }
			                .lg-o-row-pl-0 > * { padding-left:  0; }
			                .lg-o-row-pr-0 > * { padding-right: 0; }
			                .lg-o-row-pb-0 > * { padding-bottom:0; }
			                .lg-o-row-pv-0 > * { padding-top:   0;  padding-bottom: 0; }
			                .lg-o-row-ph-0 > * { padding-left:  0;  padding-right:  0; }

			                .lg-o-row-b-0  > * { border:        0; }    
			                .lg-o-row-bt-0 > * { border-top:    0; }
			                .lg-o-row-bl-0 > * { border-left:   0; }
			                .lg-o-row-br-0 > * { border-right:  0; }
			                .lg-o-row-bb-0 > * { border-bottom: 0; }
			                .lg-o-row-bv-0 > * { border-top:    0;  border-bottom:  0; }
			                .lg-o-row-bh-0 > * { border-left:   0;  border-right:   0; }
			            }

			            /* xl | xl-only */
			            @media (min-width: 1199.98px) {
			                .xl-row-m-0    > * { margin:        0; }
			                .xl-row-mt-0   > * { margin-top:    0; }
			                .xl-row-ml-0   > * { margin-left:   0; }
			                .xl-row-mr-0   > * { margin-right:  0; }
			                .xl-row-mb-0   > * { margin-bottom: 0; }
			                .xl-row-mv-0   > * { margin-top:    0;  margin-bottom:  0; }
			                .xl-row-mh-0   > * { margin-left:   0;  margin-right:   0; }

			                .xl-row-p-0    > * { padding:       0; }
			                .xl-row-pt-0   > * { padding-top:   0; }
			                .xl-row-pl-0   > * { padding-left:  0; }
			                .xl-row-pr-0   > * { padding-right: 0; }
			                .xl-row-pb-0   > * { padding-bottom:0; }
			                .xl-row-pv-0   > * { padding-top:   0;  padding-bottom: 0; }
			                .xl-row-ph-0   > * { padding-left:  0;  padding-right:  0; }

			                .xl-row-b-0    > * { border:        0; }    
			                .xl-row-bt-0   > * { border-top:    0; }
			                .xl-row-bl-0   > * { border-left:   0; }
			                .xl-row-br-0   > * { border-right:  0; }
			                .xl-row-bb-0   > * { border-bottom: 0; }
			                .xl-row-bv-0   > * { border-top:    0;  border-bottom:  0; }
			                .xl-row-bh-0   > * { border-left:   0;  border-right:   0; }
			            }
			    `
			    },

			// margin-offsets
			    {
			    name : 'margin-offsets' ,
			    code :    
			    `        /* Override Margins */
			        /* -------------------------------------------- */

			            /* All viewports */

			                /* All */
			                    .row-m-xs        > * { margin:        10px; }
			                    .row-m-sm        > * { margin:        15px; }
			                    .row-m-md        > * { margin:        20px; }
			                    .row-m-lg        > * { margin:        30px; }
			                    .row-m-xl        > * { margin:        50px; }
			                /* Margin-bottom */
			                    .row-mb-xs       > * { margin-bottom: 10px; }
			                    .row-mb-sm       > * { margin-bottom: 15px; }
			                    .row-mb-md       > * { margin-bottom: 20px; }
			                    .row-mb-lg       > * { margin-bottom: 30px; }
			                    .row-mb-xl       > * { margin-bottom: 50px; }
			                /* Margin-top */
			                    .row-mt-xs       > * { margin-top:    10px; }
			                    .row-mt-sm       > * { margin-top:    15px; }
			                    .row-mt-md       > * { margin-top:    20px; }
			                    .row-mt-lg       > * { margin-top:    30px; }
			                    .row-mt-xl       > * { margin-top:    50px; }
			                /* Margin-left */
			                    .row-ml-xs       > * { margin-left:   10px; }
			                    .row-ml-sm       > * { margin-left:   15px; }
			                    .row-ml-md       > * { margin-left:   20px; }
			                    .row-ml-lg       > * { margin-left:   30px; }
			                    .row-ml-xl       > * { margin-left:   50px; }
			                /* Margin-right */
			                    .row-mr-xs       > * { margin-right:  10px; }
			                    .row-mr-sm       > * { margin-right:  15px; }
			                    .row-mr-md       > * { margin-right:  20px; }
			                    .row-mr-lg       > * { margin-right:  30px; }
			                    .row-mr-xl       > * { margin-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .row-mv-xs       > * { margin-top:    10px; margin-bottom:  10px; }
			                    .row-mv-sm       > * { margin-top:    15px; margin-bottom:  15px; }
			                    .row-mv-md       > * { margin-top:    20px; margin-bottom:  20px; }
			                    .row-mv-lg       > * { margin-top:    30px; margin-bottom:  30px; }
			                    .row-mv-xl       > * { margin-top:    50px; margin-bottom:  50px; }

			                /* Horizontal - Left & Right */
			                    .row-mh-xs       > * { margin-left:   10px; margin-right:   10px; }
			                    .row-mh-sm       > * { margin-left:   15px; margin-right:   15px; }
			                    .row-mh-md       > * { margin-left:   20px; margin-right:   20px; }
			                    .row-mh-lg       > * { margin-left:   30px; margin-right:   30px; }
			                    .row-mh-xl       > * { margin-left:   50px; margin-right:   50px; }
			    `
			    },

			// margin-offsets-resp
			    {
			    name : 'margin-offsets-resp' ,
			    code :    
			    `            /* xs-only */
			            @media (max-width: 575.98px) > * {

			                /* All */
			                    .xs-o-row-m-xs   > * { margin:        10px; }
			                    .xs-o-row-m-sm   > * { margin:        15px; }
			                    .xs-o-row-m-md   > * { margin:        20px; }
			                    .xs-o-row-m-lg   > * { margin:        30px; }
			                    .xs-o-row-m-xl   > * { margin:        50px; }
			                /* Margin-bottom */
			                    .xs-o-row-mb-xs  > * { margin-bottom: 10px; }
			                    .xs-o-row-mb-sm  > * { margin-bottom: 15px; }
			                    .xs-o-row-mb-md  > * { margin-bottom: 20px; }
			                    .xs-o-row-mb-lg  > * { margin-bottom: 30px; }
			                    .xs-o-row-mb-xl  > * { margin-bottom: 50px; }
			                /* Margin-top */
			                    .xs-o-row-mt-xs  > * { margin-top:    10px; }
			                    .xs-o-row-mt-sm  > * { margin-top:    15px; }
			                    .xs-o-row-mt-md  > * { margin-top:    20px; }
			                    .xs-o-row-mt-lg  > * { margin-top:    30px; }
			                    .xs-o-row-mt-xl  > * { margin-top:    50px; }
			                /* Margin-left */
			                    .xs-o-row-ml-xs  > * { margin-left:   10px; }
			                    .xs-o-row-ml-sm  > * { margin-left:   15px; }
			                    .xs-o-row-ml-md  > * { margin-left:   20px; }
			                    .xs-o-row-ml-lg  > * { margin-left:   30px; }
			                    .xs-o-row-ml-xl  > * { margin-left:   50px; }
			                /* Margin-right */
			                    .xs-o-row-mr-xs  > * { margin-right:  10px; }
			                    .xs-o-row-mr-sm  > * { margin-right:  15px; }
			                    .xs-o-row-mr-md  > * { margin-right:  20px; }
			                    .xs-o-row-mr-lg  > * { margin-right:  30px; }
			                    .xs-o-row-mr-xl  > * { margin-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .xs-o-row-mv-xs  > * { margin-top:    10px;  margin-bottom:  10px; }
			                    .xs-o-row-mv-sm  > * { margin-top:    15px;  margin-bottom:  15px; }
			                    .xs-o-row-mv-md  > * { margin-top:    20px;  margin-bottom:  20px; }
			                    .xs-o-row-mv-lg  > * { margin-top:    30px;  margin-bottom:  30px; }
			                    .xs-o-row-mv-xl  > * { margin-top:    50px;  margin-bottom:  50px; }

			                /* Horizontal - Left & Right */
			                    .xs-o-row-mh-xs  > * { margin-left:   10px;  margin-right:   10px; }
			                    .xs-o-row-mh-sm  > * { margin-left:   15px;  margin-right:   15px; }
			                    .xs-o-row-mh-md  > * { margin-left:   20px;  margin-right:   20px; }
			                    .xs-o-row-mh-lg  > * { margin-left:   30px;  margin-right:   30px; }
			                    .xs-o-row-mh-xl  > * { margin-left:   50px;  margin-right:   50px; }
			            }

			            /* sm */
			            @media (min-width: 575.98px) {
			                /* All */
			                    .sm-row-m-xs     > * { margin:        10px; }
			                    .sm-row-m-sm     > * { margin:        15px; }
			                    .sm-row-m-md     > * { margin:        20px; }
			                    .sm-row-m-lg     > * { margin:        30px; }
			                    .sm-row-m-xl     > * { margin:        50px; }
			                /* Margin-bottom */
			                    .sm-row-mb-xs    > * { margin-bottom: 10px; }
			                    .sm-row-mb-sm    > * { margin-bottom: 15px; }
			                    .sm-row-mb-md    > * { margin-bottom: 20px; }
			                    .sm-row-mb-lg    > * { margin-bottom: 30px; }
			                    .sm-row-mb-xl    > * { margin-bottom: 50px; }
			                /* Margin-top */
			                    .sm-row-mt-xs    > * { margin-top:    10px; }
			                    .sm-row-mt-sm    > * { margin-top:    15px; }
			                    .sm-row-mt-md    > * { margin-top:    20px; }
			                    .sm-row-mt-lg    > * { margin-top:    30px; }
			                    .sm-row-mt-xl    > * { margin-top:    50px; }
			                /* Margin-left */
			                    .sm-row-ml-xs    > * { margin-left:   10px; }
			                    .sm-row-ml-sm    > * { margin-left:   15px; }
			                    .sm-row-ml-md    > * { margin-left:   20px; }
			                    .sm-row-ml-lg    > * { margin-left:   30px; }
			                    .sm-row-ml-xl    > * { margin-left:   50px; }
			                /* Margin-right */
			                    .sm-row-mr-xs    > * { margin-right:  10px; }
			                    .sm-row-mr-sm    > * { margin-right:  15px; }
			                    .sm-row-mr-md    > * { margin-right:  20px; }
			                    .sm-row-mr-lg    > * { margin-right:  30px; }
			                    .sm-row-mr-xl    > * { margin-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .sm-row-mv-xs    > * { margin-top:    10px;  margin-bottom:  10px; }
			                    .sm-row-mv-sm    > * { margin-top:    15px;  margin-bottom:  15px; }
			                    .sm-row-mv-md    > * { margin-top:    20px;  margin-bottom:  20px; }
			                    .sm-row-mv-lg    > * { margin-top:    30px;  margin-bottom:  30px; }
			                    .sm-row-mv-xl    > * { margin-top:    50px;  margin-bottom:  50px; }

			                /* Horizontal - Left & Right */
			                    .sm-row-mh-xs    > * { margin-left:   10px;  margin-right:   10px; }
			                    .sm-row-mh-sm    > * { margin-left:   15px;  margin-right:   15px; }
			                    .sm-row-mh-md    > * { margin-left:   20px;  margin-right:   20px; }
			                    .sm-row-mh-lg    > * { margin-left:   30px;  margin-right:   30px; }
			                    .sm-row-mh-xl    > * { margin-left:   50px;  margin-right:   50px; }
			            }

			            /* sm-only */
			            @media (min-width: 575.98px) and (max-width: 767.98px) {

			                /* All */
			                    .sm-o-row-m-xs  > * { margin:        10px; }
			                    .sm-o-row-m-sm  > * { margin:        15px; }
			                    .sm-o-row-m-md  > * { margin:        20px; }
			                    .sm-o-row-m-lg  > * { margin:        30px; }
			                    .sm-o-row-m-xl  > * { margin:        50px; }
			                /* Margin-bottom */
			                    .sm-o-row-mb-xs > * { margin-bottom: 10px; }
			                    .sm-o-row-mb-sm > * { margin-bottom: 15px; }
			                    .sm-o-row-mb-md > * { margin-bottom: 20px; }
			                    .sm-o-row-mb-lg > * { margin-bottom: 30px; }
			                    .sm-o-row-mb-xl > * { margin-bottom: 50px; }
			                /* Margin-top */
			                    .sm-o-row-mt-xs > * { margin-top:    10px; }
			                    .sm-o-row-mt-sm > * { margin-top:    15px; }
			                    .sm-o-row-mt-md > * { margin-top:    20px; }
			                    .sm-o-row-mt-lg > * { margin-top:    30px; }
			                    .sm-o-row-mt-xl > * { margin-top:    50px; }
			                /* Margin-left */
			                    .sm-o-row-ml-xs > * { margin-left:   10px; }
			                    .sm-o-row-ml-sm > * { margin-left:   15px; }
			                    .sm-o-row-ml-md > * { margin-left:   20px; }
			                    .sm-o-row-ml-lg > * { margin-left:   30px; }
			                    .sm-o-row-ml-xl > * { margin-left:   50px; }
			                /* Margin-right */
			                    .sm-o-row-mr-xs > * { margin-right:  10px; }
			                    .sm-o-row-mr-sm > * { margin-right:  15px; }
			                    .sm-o-row-mr-md > * { margin-right:  20px; }
			                    .sm-o-row-mr-lg > * { margin-right:  30px; }
			                    .sm-o-row-mr-xl > * { margin-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .sm-o-row-mv-xs > * { margin-top:    10px;  margin-bottom:  10px; }
			                    .sm-o-row-mv-sm > * { margin-top:    15px;  margin-bottom:  15px; }
			                    .sm-o-row-mv-md > * { margin-top:    20px;  margin-bottom:  20px; }
			                    .sm-o-row-mv-lg > * { margin-top:    30px;  margin-bottom:  30px; }
			                    .sm-o-row-mv-xl > * { margin-top:    50px;  margin-bottom:  50px; }

			                /* Horizontal - Left & Right */
			                    .sm-o-row-mh-xs > * { margin-left:   10px;  margin-right:   10px; }
			                    .sm-o-row-mh-sm > * { margin-left:   15px;  margin-right:   15px; }
			                    .sm-o-row-mh-md > * { margin-left:   20px;  margin-right:   20px; }
			                    .sm-o-row-mh-lg > * { margin-left:   30px;  margin-right:   30px; }
			                    .sm-o-row-mh-xl > * { margin-left:   50px;  margin-right:   50px; }
			            }

			            /* md */
			            @media (min-width: 767.98px) {
			                /* All */
			                    .md-row-m-xs    > * { margin:        10px; }
			                    .md-row-m-sm    > * { margin:        15px; }
			                    .md-row-m-md    > * { margin:        20px; }
			                    .md-row-m-lg    > * { margin:        30px; }
			                    .md-row-m-xl    > * { margin:        50px; }
			                /* Margin-bottom */
			                    .md-row-mb-xs   > * { margin-bottom: 10px; }
			                    .md-row-mb-sm   > * { margin-bottom: 15px; }
			                    .md-row-mb-md   > * { margin-bottom: 20px; }
			                    .md-row-mb-lg   > * { margin-bottom: 30px; }
			                    .md-row-mb-xl   > * { margin-bottom: 50px; }
			                /* Margin-top */
			                    .md-row-mt-xs   > * { margin-top:    10px; }
			                    .md-row-mt-sm   > * { margin-top:    15px; }
			                    .md-row-mt-md   > * { margin-top:    20px; }
			                    .md-row-mt-lg   > * { margin-top:    30px; }
			                    .md-row-mt-xl   > * { margin-top:    50px; }
			                /* Margin-left */
			                    .md-row-ml-xs   > * { margin-left:   10px; }
			                    .md-row-ml-sm   > * { margin-left:   15px; }
			                    .md-row-ml-md   > * { margin-left:   20px; }
			                    .md-row-ml-lg   > * { margin-left:   30px; }
			                    .md-row-ml-xl   > * { margin-left:   50px; }
			                /* Margin-right */
			                    .md-row-mr-xs   > * { margin-right:  10px; }
			                    .md-row-mr-sm   > * { margin-right:  15px; }
			                    .md-row-mr-md   > * { margin-right:  20px; }
			                    .md-row-mr-lg   > * { margin-right:  30px; }
			                    .md-row-mr-xl   > * { margin-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .md-row-mv-xs   > * { margin-top:    10px;  margin-bottom:  10px; }
			                    .md-row-mv-sm   > * { margin-top:    15px;  margin-bottom:  15px; }
			                    .md-row-mv-md   > * { margin-top:    20px;  margin-bottom:  20px; }
			                    .md-row-mv-lg   > * { margin-top:    30px;  margin-bottom:  30px; }
			                    .md-row-mv-xl   > * { margin-top:    50px;  margin-bottom:  50px; }

			                /* Horizontal - Left & Right */
			                    .md-row-mh-xs   > * { margin-left:   10px;  margin-right:   10px; }
			                    .md-row-mh-sm   > * { margin-left:   15px;  margin-right:   15px; }
			                    .md-row-mh-md   > * { margin-left:   20px;  margin-right:   20px; }
			                    .md-row-mh-lg   > * { margin-left:   30px;  margin-right:   30px; }
			                    .md-row-mh-xl   > * { margin-left:   50px;  margin-right:   50px; }
			            }

			            /* md-only */
			            @media (min-width: 767.98px) and (max-width: 991.98px) {

			                /* All */
			                    .md-o-row-m-xs  > * { margin:        10px; }
			                    .md-o-row-m-sm  > * { margin:        15px; }
			                    .md-o-row-m-md  > * { margin:        20px; }
			                    .md-o-row-m-lg  > * { margin:        30px; }
			                    .md-o-row-m-xl  > * { margin:        50px; }
			                /* Margin-bottom */
			                    .md-o-row-mb-xs > * { margin-bottom: 10px; }
			                    .md-o-row-mb-sm > * { margin-bottom: 15px; }
			                    .md-o-row-mb-md > * { margin-bottom: 20px; }
			                    .md-o-row-mb-lg > * { margin-bottom: 30px; }
			                    .md-o-row-mb-xl > * { margin-bottom: 50px; }
			                /* Margin-top */
			                    .md-o-row-mt-xs > * { margin-top:    10px; }
			                    .md-o-row-mt-sm > * { margin-top:    15px; }
			                    .md-o-row-mt-md > * { margin-top:    20px; }
			                    .md-o-row-mt-lg > * { margin-top:    30px; }
			                    .md-o-row-mt-xl > * { margin-top:    50px; }
			                /* Margin-left */
			                    .md-o-row-ml-xs > * { margin-left:   10px; }
			                    .md-o-row-ml-sm > * { margin-left:   15px; }
			                    .md-o-row-ml-md > * { margin-left:   20px; }
			                    .md-o-row-ml-lg > * { margin-left:   30px; }
			                    .md-o-row-ml-xl > * { margin-left:   50px; }
			                /* Margin-right */
			                    .md-o-row-mr-xs > * { margin-right:  10px; }
			                    .md-o-row-mr-sm > * { margin-right:  15px; }
			                    .md-o-row-mr-md > * { margin-right:  20px; }
			                    .md-o-row-mr-lg > * { margin-right:  30px; }
			                    .md-o-row-mr-xl > * { margin-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .md-o-row-mv-xs > * { margin-top:    10px;  margin-bottom:  10px; }
			                    .md-o-row-mv-sm > * { margin-top:    15px;  margin-bottom:  15px; }
			                    .md-o-row-mv-md > * { margin-top:    20px;  margin-bottom:  20px; }
			                    .md-o-row-mv-lg > * { margin-top:    30px;  margin-bottom:  30px; }
			                    .md-o-row-mv-xl > * { margin-top:    50px;  margin-bottom:  50px; }

			                /* Horizontal - Left & Right */
			                    .md-o-row-mh-xs > * { margin-left:   10px;  margin-right:   10px; }
			                    .md-o-row-mh-sm > * { margin-left:   15px;  margin-right:   15px; }
			                    .md-o-row-mh-md > * { margin-left:   20px;  margin-right:   20px; }
			                    .md-o-row-mh-lg > * { margin-left:   30px;  margin-right:   30px; }
			                    .md-o-row-mh-xl > * { margin-left:   50px;  margin-right:   50px; }
			            }

			            /* lg */
			            @media (min-width: 991.98px) {

			                /* All */
			                    .lg-row-m-xs    > * { margin:        10px; }
			                    .lg-row-m-sm    > * { margin:        15px; }
			                    .lg-row-m-md    > * { margin:        20px; }
			                    .lg-row-m-lg    > * { margin:        30px; }
			                    .lg-row-m-xl    > * { margin:        50px; }
			                /* Margin-bottom */
			                    .lg-row-mb-xs   > * { margin-bottom: 10px; }
			                    .lg-row-mb-sm   > * { margin-bottom: 15px; }
			                    .lg-row-mb-md   > * { margin-bottom: 20px; }
			                    .lg-row-mb-lg   > * { margin-bottom: 30px; }
			                    .lg-row-mb-xl   > * { margin-bottom: 50px; }
			                /* Margin-top */
			                    .lg-row-mt-xs   > * { margin-top:    10px; }
			                    .lg-row-mt-sm   > * { margin-top:    15px; }
			                    .lg-row-mt-md   > * { margin-top:    20px; }
			                    .lg-row-mt-lg   > * { margin-top:    30px; }
			                    .lg-row-mt-xl   > * { margin-top:    50px; }
			                /* Margin-left */
			                    .lg-row-ml-xs   > * { margin-left:   10px; }
			                    .lg-row-ml-sm   > * { margin-left:   15px; }
			                    .lg-row-ml-md   > * { margin-left:   20px; }
			                    .lg-row-ml-lg   > * { margin-left:   30px; }
			                    .lg-row-ml-xl   > * { margin-left:   50px; }
			                /* Margin-right */
			                    .lg-row-mr-xs   > * { margin-right:  10px; }
			                    .lg-row-mr-sm   > * { margin-right:  15px; }
			                    .lg-row-mr-md   > * { margin-right:  20px; }
			                    .lg-row-mr-lg   > * { margin-right:  30px; }
			                    .lg-row-mr-xl   > * { margin-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .lg-row-mv-xs   > * { margin-top:    10px;  margin-bottom:   10px; }
			                    .lg-row-mv-sm   > * { margin-top:    15px;  margin-bottom:   15px; }
			                    .lg-row-mv-md   > * { margin-top:    20px;  margin-bottom:   20px; }
			                    .lg-row-mv-lg   > * { margin-top:    30px;  margin-bottom:   30px; }
			                    .lg-row-mv-xl   > * { margin-top:    50px;  margin-bottom:   50px; }

			                /* Horizontal - Left & Right */
			                    .lg-row-mh-xs   > * { margin-left:   10px;  margin-right:    10px; }
			                    .lg-row-mh-sm   > * { margin-left:   15px;  margin-right:    15px; }
			                    .lg-row-mh-md   > * { margin-left:   20px;  margin-right:    20px; }
			                    .lg-row-mh-lg   > * { margin-left:   30px;  margin-right:    30px; }
			                    .lg-row-mh-xl   > * { margin-left:   50px;  margin-right:    50px; }
			            }

			            /* lg-only */
			            @media (min-width: 991.98px) and (max-width: 1199.98px) {

			                /* All */
			                    .lg-o-row-m-xs  > * { margin:        10px; }
			                    .lg-o-row-m-sm  > * { margin:        15px; }
			                    .lg-o-row-m-md  > * { margin:        20px; }
			                    .lg-o-row-m-lg  > * { margin:        30px; }
			                    .lg-o-row-m-xl  > * { margin:        50px; }
			                /* Margin-bottom */
			                    .lg-o-row-mb-xs > * { margin-bottom: 10px; }
			                    .lg-o-row-mb-sm > * { margin-bottom: 15px; }
			                    .lg-o-row-mb-md > * { margin-bottom: 20px; }
			                    .lg-o-row-mb-lg > * { margin-bottom: 30px; }
			                    .lg-o-row-mb-xl > * { margin-bottom: 50px; }
			                /* Margin-top */
			                    .lg-o-row-mt-xs > * { margin-top:    10px; }
			                    .lg-o-row-mt-sm > * { margin-top:    15px; }
			                    .lg-o-row-mt-md > * { margin-top:    20px; }
			                    .lg-o-row-mt-lg > * { margin-top:    30px; }
			                    .lg-o-row-mt-xl > * { margin-top:    50px; }
			                /* Margin-left */
			                    .lg-o-row-ml-xs > * { margin-left:   10px; }
			                    .lg-o-row-ml-sm > * { margin-left:   15px; }
			                    .lg-o-row-ml-md > * { margin-left:   20px; }
			                    .lg-o-row-ml-lg > * { margin-left:   30px; }
			                    .lg-o-row-ml-xl > * { margin-left:   50px; }
			                /* Margin-right */
			                    .lg-o-row-mr-xs > * { margin-right:  10px; }
			                    .lg-o-row-mr-sm > * { margin-right:  15px; }
			                    .lg-o-row-mr-md > * { margin-right:  20px; }
			                    .lg-o-row-mr-lg > * { margin-right:  30px; }
			                    .lg-o-row-mr-xl > * { margin-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .lg-o-row-mv-xs > * { margin-top:    10px;  margin-bottom:   10px; }
			                    .lg-o-row-mv-sm > * { margin-top:    15px;  margin-bottom:   15px; }
			                    .lg-o-row-mv-md > * { margin-top:    20px;  margin-bottom:   20px; }
			                    .lg-o-row-mv-lg > * { margin-top:    30px;  margin-bottom:   30px; }
			                    .lg-o-row-mv-xl > * { margin-top:    50px;  margin-bottom:   50px; }

			                /* Horizontal - Left & Right */
			                    .lg-o-row-mh-xs > * { margin-left:   10px;  margin-right:    10px; }
			                    .lg-o-row-mh-sm > * { margin-left:   15px;  margin-right:    15px; }
			                    .lg-o-row-mh-md > * { margin-left:   20px;  margin-right:    20px; }
			                    .lg-o-row-mh-lg > * { margin-left:   30px;  margin-right:    30px; }
			                    .lg-o-row-mh-xl > * { margin-left:   50px;  margin-right:    50px; }
			            }

			            /* xl */
			            @media (min-width: 1199.98px) {

			                /* All */
			                    .xl-row-m-xs    > * { margin:        10px; }
			                    .xl-row-m-sm    > * { margin:        15px; }
			                    .xl-row-m-md    > * { margin:        20px; }
			                    .xl-row-m-lg    > * { margin:        30px; }
			                    .xl-row-m-xl    > * { margin:        50px; }
			                /* Margin-bottom */
			                    .xl-row-mb-xs   > * { margin-bottom: 10px; }
			                    .xl-row-mb-sm   > * { margin-bottom: 15px; }
			                    .xl-row-mb-md   > * { margin-bottom: 20px; }
			                    .xl-row-mb-lg   > * { margin-bottom: 30px; }
			                    .xl-row-mb-xl   > * { margin-bottom: 50px; }
			                /* Margin-top */
			                    .xl-row-mt-xs   > * { margin-top:    10px; }
			                    .xl-row-mt-sm   > * { margin-top:    15px; }
			                    .xl-row-mt-md   > * { margin-top:    20px; }
			                    .xl-row-mt-lg   > * { margin-top:    30px; }
			                    .xl-row-mt-xl   > * { margin-top:    50px; }
			                /* Margin-left */
			                    .xl-row-ml-xs   > * { margin-left:   10px; }
			                    .xl-row-ml-sm   > * { margin-left:   15px; }
			                    .xl-row-ml-md   > * { margin-left:   20px; }
			                    .xl-row-ml-lg   > * { margin-left:   30px; }
			                    .xl-row-ml-xl   > * { margin-left:   50px; }
			                /* Margin-right */
			                    .xl-row-mr-xs   > * { margin-right:  10px; }
			                    .xl-row-mr-sm   > * { margin-right:  15px; }
			                    .xl-row-mr-md   > * { margin-right:  20px; }
			                    .xl-row-mr-lg   > * { margin-right:  30px; }
			                    .xl-row-mr-xl   > * { margin-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .xl-row-mv-xs   > * { margin-top:    10px;  margin-bottom:   10px; }
			                    .xl-row-mv-sm   > * { margin-top:    15px;  margin-bottom:   15px; }
			                    .xl-row-mv-md   > * { margin-top:    20px;  margin-bottom:   20px; }
			                    .xl-row-mv-lg   > * { margin-top:    30px;  margin-bottom:   30px; }
			                    .xl-row-mv-xl   > * { margin-top:    50px;  margin-bottom:   50px; }

			                /* Horizontal - Left & Right */
			                    .xl-row-mh-xs   > * { margin-left:   10px;  margin-right:    10px; }
			                    .xl-row-mh-sm   > * { margin-left:   15px;  margin-right:    15px; }
			                    .xl-row-mh-md   > * { margin-left:   20px;  margin-right:    20px; }
			                    .xl-row-mh-lg   > * { margin-left:   30px;  margin-right:    30px; }
			                    .xl-row-mh-xl   > * { margin-left:   50px;  margin-right:    50px; }
			            }
			    `
			    },

			// padding-offsets
			    {
			    name : 'padding-offsets' ,
			    code :    
			    `        /* Override Paddings */
			        /* -------------------------------------------- */

			            /* All viewports */

			                /* All */
			                    .row-p-xs       > * { padding:        10px; }
			                    .row-p-sm       > * { padding:        15px; }
			                    .row-p-md       > * { padding:        20px; }
			                    .row-p-lg       > * { padding:        30px; }
			                    .row-p-xl       > * { padding:        50px; }
			                /* padding-bottom */
			                    .row-pb-xs      > * { padding-bottom: 10px; }
			                    .row-pb-sm      > * { padding-bottom: 15px; }
			                    .row-pb-md      > * { padding-bottom: 20px; }
			                    .row-pb-lg      > * { padding-bottom: 30px; }
			                    .row-pb-xl      > * { padding-bottom: 50px; }
			                /* padding-top */
			                    .row-pt-xs      > * { padding-top:    10px; }
			                    .row-pt-sm      > * { padding-top:    15px; }
			                    .row-pt-md      > * { padding-top:    20px; }
			                    .row-pt-lg      > * { padding-top:    30px; }
			                    .row-pt-xl      > * { padding-top:    50px; }
			                /* padding-left */
			                    .row-pl-xs      > * { padding-left:   10px; }
			                    .row-pl-sm      > * { padding-left:   15px; }
			                    .row-pl-md      > * { padding-left:   20px; }
			                    .row-pl-lg      > * { padding-left:   30px; }
			                    .row-pl-xl      > * { padding-left:   50px; }
			                /* padding-right */
			                    .row-pr-xs      > * { padding-right:  10px; }
			                    .row-pr-sm      > * { padding-right:  15px; }
			                    .row-pr-md      > * { padding-right:  20px; }
			                    .row-pr-lg      > * { padding-right:  30px; }
			                    .row-pr-xl      > * { padding-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .row-pv-xs      > * { padding-top:    10px;  padding-bottom: 10px; }
			                    .row-pv-sm      > * { padding-top:    15px;  padding-bottom: 15px; }
			                    .row-pv-md      > * { padding-top:    20px;  padding-bottom: 20px; }
			                    .row-pv-lg      > * { padding-top:    30px;  padding-bottom: 30px; }
			                    .row-pv-xl      > * { padding-top:    50px;  padding-bottom: 50px; }

			                /* Horizontal - Left & Right */
			                    .row-ph-xs      > * { padding-left:   10px;  padding-right:  10px; }
			                    .row-ph-sm      > * { padding-left:   15px;  padding-right:  15px; }
			                    .row-ph-md      > * { padding-left:   20px;  padding-right:  20px; }
			                    .row-ph-lg      > * { padding-left:   30px;  padding-right:  30px; }
			                    .row-ph-xl      > * { padding-left:   50px;  padding-right:  50px; }
			    `
			    },

			// padding-offsets-resp
			    {
			    name : 'padding-offsets-resp' ,
			    code :    
			    `            /* xs-only */
			            @media (max-width: 575.98px) {

			                /* All */
			                    .xs-o-row-p-xs  > * { padding:        10px; }
			                    .xs-o-row-p-sm  > * { padding:        15px; }
			                    .xs-o-row-p-md  > * { padding:        20px; }
			                    .xs-o-row-p-lg  > * { padding:        30px; }
			                    .xs-o-row-p-xl  > * { padding:        50px; }
			                /* padding-bottom */
			                    .xs-o-row-pb-xs > * { padding-bottom: 10px; }
			                    .xs-o-row-pb-sm > * { padding-bottom: 15px; }
			                    .xs-o-row-pb-md > * { padding-bottom: 20px; }
			                    .xs-o-row-pb-lg > * { padding-bottom: 30px; }
			                    .xs-o-row-pb-xl > * { padding-bottom: 50px; }
			                /* padding-top */
			                    .xs-o-row-pt-xs > * { padding-top:    10px; }
			                    .xs-o-row-pt-sm > * { padding-top:    15px; }
			                    .xs-o-row-pt-md > * { padding-top:    20px; }
			                    .xs-o-row-pt-lg > * { padding-top:    30px; }
			                    .xs-o-row-pt-xl > * { padding-top:    50px; }
			                /* padding-left */
			                    .xs-o-row-pl-xs > * { padding-left:   10px; }
			                    .xs-o-row-pl-sm > * { padding-left:   15px; }
			                    .xs-o-row-pl-md > * { padding-left:   20px; }
			                    .xs-o-row-pl-lg > * { padding-left:   30px; }
			                    .xs-o-row-pl-xl > * { padding-left:   50px; }
			                /* padding-right */
			                    .xs-o-row-pr-xs > * { padding-right:  10px; }
			                    .xs-o-row-pr-sm > * { padding-right:  15px; }
			                    .xs-o-row-pr-md > * { padding-right:  20px; }
			                    .xs-o-row-pr-lg > * { padding-right:  30px; }
			                    .xs-o-row-pr-xl > * { padding-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .xs-o-row-pv-xs > * { padding-top:    10px;  padding-bottom: 10px; }
			                    .xs-o-row-pv-sm > * { padding-top:    15px;  padding-bottom: 15px; }
			                    .xs-o-row-pv-md > * { padding-top:    20px;  padding-bottom: 20px; }
			                    .xs-o-row-pv-lg > * { padding-top:    30px;  padding-bottom: 30px; }
			                    .xs-o-row-pv-xl > * { padding-top:    50px;  padding-bottom: 50px; }

			                /* Horizontal - Left & Right */
			                    .xs-o-row-ph-xs > * { padding-left:   10px;  padding-right:  10px; }
			                    .xs-o-row-ph-sm > * { padding-left:   15px;  padding-right:  15px; }
			                    .xs-o-row-ph-md > * { padding-left:   20px;  padding-right:  20px; }
			                    .xs-o-row-ph-lg > * { padding-left:   30px;  padding-right:  30px; }
			                    .xs-o-row-ph-xl > * { padding-left:   50px;  padding-right:  50px; }
			            }

			            /* sm */
			            @media (min-width: 575.98px) {
			                /* All */
			                    .sm-row-p-xs    > * { padding:        10px; }
			                    .sm-row-p-sm    > * { padding:        15px; }
			                    .sm-row-p-md    > * { padding:        20px; }
			                    .sm-row-p-lg    > * { padding:        30px; }
			                    .sm-row-p-xl    > * { padding:        50px; }
			                /* padding-bottom */
			                    .sm-row-pb-xs   > * { padding-bottom: 10px; }
			                    .sm-row-pb-sm   > * { padding-bottom: 15px; }
			                    .sm-row-pb-md   > * { padding-bottom: 20px; }
			                    .sm-row-pb-lg   > * { padding-bottom: 30px; }
			                    .sm-row-pb-xl   > * { padding-bottom: 50px; }
			                /* padding-top */
			                    .sm-row-pt-xs   > * { padding-top:    10px; }
			                    .sm-row-pt-sm   > * { padding-top:    15px; }
			                    .sm-row-pt-md   > * { padding-top:    20px; }
			                    .sm-row-pt-lg   > * { padding-top:    30px; }
			                    .sm-row-pt-xl   > * { padding-top:    50px; }
			                /* padding-left */
			                    .sm-row-pl-xs   > * { padding-left:   10px; }
			                    .sm-row-pl-sm   > * { padding-left:   15px; }
			                    .sm-row-pl-md   > * { padding-left:   20px; }
			                    .sm-row-pl-lg   > * { padding-left:   30px; }
			                    .sm-row-pl-xl   > * { padding-left:   50px; }
			                /* padding-right */
			                    .sm-row-pr-xs   > * { padding-right:  10px; }
			                    .sm-row-pr-sm   > * { padding-right:  15px; }
			                    .sm-row-pr-md   > * { padding-right:  20px; }
			                    .sm-row-pr-lg   > * { padding-right:  30px; }
			                    .sm-row-pr-xl   > * { padding-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .sm-row-pv-xs   > * { padding-top:    10px;  padding-bottom: 10px; }
			                    .sm-row-pv-sm   > * { padding-top:    15px;  padding-bottom: 15px; }
			                    .sm-row-pv-md   > * { padding-top:    20px;  padding-bottom: 20px; }
			                    .sm-row-pv-lg   > * { padding-top:    30px;  padding-bottom: 30px; }
			                    .sm-row-pv-xl   > * { padding-top:    50px;  padding-bottom: 50px; }

			                /* Horizontal - Left & Right */
			                    .sm-row-ph-xs   > * { padding-left:   10px;  padding-right:  10px; }
			                    .sm-row-ph-sm   > * { padding-left:   15px;  padding-right:  15px; }
			                    .sm-row-ph-md   > * { padding-left:   20px;  padding-right:  20px; }
			                    .sm-row-ph-lg   > * { padding-left:   30px;  padding-right:  30px; }
			                    .sm-row-ph-xl   > * { padding-left:   50px;  padding-right:  50px; }
			            }

			            /* sm-only */
			            @media (min-width: 575.98px) and (max-width: 767.98px) {

			                /* All */
			                    .sm-o-row-p-xs  > * { padding:        10px; }
			                    .sm-o-row-p-sm  > * { padding:        15px; }
			                    .sm-o-row-p-md  > * { padding:        20px; }
			                    .sm-o-row-p-lg  > * { padding:        30px; }
			                    .sm-o-row-p-xl  > * { padding:        50px; }
			                /* padding-bottom */
			                    .sm-o-row-pb-xs > * { padding-bottom: 10px; }
			                    .sm-o-row-pb-sm > * { padding-bottom: 15px; }
			                    .sm-o-row-pb-md > * { padding-bottom: 20px; }
			                    .sm-o-row-pb-lg > * { padding-bottom: 30px; }
			                    .sm-o-row-pb-xl > * { padding-bottom: 50px; }
			                /* padding-top */
			                    .sm-o-row-pt-xs > * { padding-top:    10px; }
			                    .sm-o-row-pt-sm > * { padding-top:    15px; }
			                    .sm-o-row-pt-md > * { padding-top:    20px; }
			                    .sm-o-row-pt-lg > * { padding-top:    30px; }
			                    .sm-o-row-pt-xl > * { padding-top:    50px; }
			                /* padding-left */
			                    .sm-o-row-pl-xs > * { padding-left:   10px; }
			                    .sm-o-row-pl-sm > * { padding-left:   15px; }
			                    .sm-o-row-pl-md > * { padding-left:   20px; }
			                    .sm-o-row-pl-lg > * { padding-left:   30px; }
			                    .sm-o-row-pl-xl > * { padding-left:   50px; }
			                /* padding-right */
			                    .sm-o-row-pr-xs > * { padding-right:  10px; }
			                    .sm-o-row-pr-sm > * { padding-right:  15px; }
			                    .sm-o-row-pr-md > * { padding-right:  20px; }
			                    .sm-o-row-pr-lg > * { padding-right:  30px; }
			                    .sm-o-row-pr-xl > * { padding-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .sm-o-row-pv-xs > * { padding-top:    10px;  padding-bottom: 10px; }
			                    .sm-o-row-pv-sm > * { padding-top:    15px;  padding-bottom: 15px; }
			                    .sm-o-row-pv-md > * { padding-top:    20px;  padding-bottom: 20px; }
			                    .sm-o-row-pv-lg > * { padding-top:    30px;  padding-bottom: 30px; }
			                    .sm-o-row-pv-xl > * { padding-top:    50px;  padding-bottom: 50px; }

			                /* Horizontal - Left & Right */
			                    .sm-o-row-ph-xs > * { padding-left:   10px;  padding-right:  10px; }
			                    .sm-o-row-ph-sm > * { padding-left:   15px;  padding-right:  15px; }
			                    .sm-o-row-ph-md > * { padding-left:   20px;  padding-right:  20px; }
			                    .sm-o-row-ph-lg > * { padding-left:   30px;  padding-right:  30px; }
			                    .sm-o-row-ph-xl > * { padding-left:   50px;  padding-right:  50px; }
			            }

			            /* md */
			            @media (min-width: 767.98px) {
			                /* All */
			                    .md-row-p-xs    > * { padding:        10px; }
			                    .md-row-p-sm    > * { padding:        15px; }
			                    .md-row-p-md    > * { padding:        20px; }
			                    .md-row-p-lg    > * { padding:        30px; }
			                    .md-row-p-xl    > * { padding:        50px; }
			                /* padding-bottom */
			                    .md-row-pb-xs   > * { padding-bottom: 10px; }
			                    .md-row-pb-sm   > * { padding-bottom: 15px; }
			                    .md-row-pb-md   > * { padding-bottom: 20px; }
			                    .md-row-pb-lg   > * { padding-bottom: 30px; }
			                    .md-row-pb-xl   > * { padding-bottom: 50px; }
			                /* padding-top */
			                    .md-row-pt-xs   > * { padding-top:    10px; }
			                    .md-row-pt-sm   > * { padding-top:    15px; }
			                    .md-row-pt-md   > * { padding-top:    20px; }
			                    .md-row-pt-lg   > * { padding-top:    30px; }
			                    .md-row-pt-xl   > * { padding-top:    50px; }
			                /* padding-left */
			                    .md-row-pl-xs   > * { padding-left:   10px; }
			                    .md-row-pl-sm   > * { padding-left:   15px; }
			                    .md-row-pl-md   > * { padding-left:   20px; }
			                    .md-row-pl-lg   > * { padding-left:   30px; }
			                    .md-row-pl-xl   > * { padding-left:   50px; }
			                /* padding-right */
			                    .md-row-pr-xs   > * { padding-right:  10px; }
			                    .md-row-pr-sm   > * { padding-right:  15px; }
			                    .md-row-pr-md   > * { padding-right:  20px; }
			                    .md-row-pr-lg   > * { padding-right:  30px; }
			                    .md-row-pr-xl   > * { padding-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .md-row-pv-xs   > * { padding-top:    10px;  padding-bottom: 10px; }
			                    .md-row-pv-sm   > * { padding-top:    15px;  padding-bottom: 15px; }
			                    .md-row-pv-md   > * { padding-top:    20px;  padding-bottom: 20px; }
			                    .md-row-pv-lg   > * { padding-top:    30px;  padding-bottom: 30px; }
			                    .md-row-pv-xl   > * { padding-top:    50px;  padding-bottom: 50px; }

			                /* Horizontal - Left & Right */
			                    .md-row-ph-xs   > * { padding-left:   10px;  padding-right:  10px; }
			                    .md-row-ph-sm   > * { padding-left:   15px;  padding-right:  15px; }
			                    .md-row-ph-md   > * { padding-left:   20px;  padding-right:  20px; }
			                    .md-row-ph-lg   > * { padding-left:   30px;  padding-right:  30px; }
			                    .md-row-ph-xl   > * { padding-left:   50px;  padding-right:  50px; }
			            }

			            /* md-only */
			            @media (min-width: 767.98px) and (max-width: 991.98px) {

			                /* All */
			                    .md-o-row-p-xs  > * { padding:        10px; }
			                    .md-o-row-p-sm  > * { padding:        15px; }
			                    .md-o-row-p-md  > * { padding:        20px; }
			                    .md-o-row-p-lg  > * { padding:        30px; }
			                    .md-o-row-p-xl  > * { padding:        50px; }
			                /* padding-bottom */
			                    .md-o-row-pb-xs > * { padding-bottom: 10px; }
			                    .md-o-row-pb-sm > * { padding-bottom: 15px; }
			                    .md-o-row-pb-md > * { padding-bottom: 20px; }
			                    .md-o-row-pb-lg > * { padding-bottom: 30px; }
			                    .md-o-row-pb-xl > * { padding-bottom: 50px; }
			                /* padding-top */
			                    .md-o-row-pt-xs > * { padding-top:    10px; }
			                    .md-o-row-pt-sm > * { padding-top:    15px; }
			                    .md-o-row-pt-md > * { padding-top:    20px; }
			                    .md-o-row-pt-lg > * { padding-top:    30px; }
			                    .md-o-row-pt-xl > * { padding-top:    50px; }
			                /* padding-left */
			                    .md-o-row-pl-xs > * { padding-left:   10px; }
			                    .md-o-row-pl-sm > * { padding-left:   15px; }
			                    .md-o-row-pl-md > * { padding-left:   20px; }
			                    .md-o-row-pl-lg > * { padding-left:   30px; }
			                    .md-o-row-pl-xl > * { padding-left:   50px; }
			                /* padding-right */
			                    .md-o-row-pr-xs > * { padding-right:  10px; }
			                    .md-o-row-pr-sm > * { padding-right:  15px; }
			                    .md-o-row-pr-md > * { padding-right:  20px; }
			                    .md-o-row-pr-lg > * { padding-right:  30px; }
			                    .md-o-row-pr-xl > * { padding-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .md-o-row-pv-xs > * { padding-top:    10px;  padding-bottom: 10px; }
			                    .md-o-row-pv-sm > * { padding-top:    15px;  padding-bottom: 15px; }
			                    .md-o-row-pv-md > * { padding-top:    20px;  padding-bottom: 20px; }
			                    .md-o-row-pv-lg > * { padding-top:    30px;  padding-bottom: 30px; }
			                    .md-o-row-pv-xl > * { padding-top:    50px;  padding-bottom: 50px; }

			                /* Horizontal - Left & Right */
			                    .md-o-row-ph-xs > * { padding-left:   10px;  padding-right:  10px; }
			                    .md-o-row-ph-sm > * { padding-left:   15px;  padding-right:  15px; }
			                    .md-o-row-ph-md > * { padding-left:   20px;  padding-right:  20px; }
			                    .md-o-row-ph-lg > * { padding-left:   30px;  padding-right:  30px; }
			                    .md-o-row-ph-xl > * { padding-left:   50px;  padding-right:  50px; }
			            }

			            /* lg */
			            @media (min-width: 991.98px) {

			                /* All */
			                    .lg-row-p-xs    > * { padding:        10px; }
			                    .lg-row-p-sm    > * { padding:        15px; }
			                    .lg-row-p-md    > * { padding:        20px; }
			                    .lg-row-p-lg    > * { padding:        30px; }
			                    .lg-row-p-xl    > * { padding:        50px; }
			                /* padding-bottom */
			                    .lg-row-pb-xs   > * { padding-bottom: 10px; }
			                    .lg-row-pb-sm   > * { padding-bottom: 15px; }
			                    .lg-row-pb-md   > * { padding-bottom: 20px; }
			                    .lg-row-pb-lg   > * { padding-bottom: 30px; }
			                    .lg-row-pb-xl   > * { padding-bottom: 50px; }
			                /* padding-top */
			                    .lg-row-pt-xs   > * { padding-top:    10px; }
			                    .lg-row-pt-sm   > * { padding-top:    15px; }
			                    .lg-row-pt-md   > * { padding-top:    20px; }
			                    .lg-row-pt-lg   > * { padding-top:    30px; }
			                    .lg-row-pt-xl   > * { padding-top:    50px; }
			                /* padding-left */
			                    .lg-row-pl-xs   > * { padding-left:   10px; }
			                    .lg-row-pl-sm   > * { padding-left:   15px; }
			                    .lg-row-pl-md   > * { padding-left:   20px; }
			                    .lg-row-pl-lg   > * { padding-left:   30px; }
			                    .lg-row-pl-xl   > * { padding-left:   50px; }
			                /* padding-right */
			                    .lg-row-pr-xs   > * { padding-right:  10px; }
			                    .lg-row-pr-sm   > * { padding-right:  15px; }
			                    .lg-row-pr-md   > * { padding-right:  20px; }
			                    .lg-row-pr-lg   > * { padding-right:  30px; }
			                    .lg-row-pr-xl   > * { padding-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .lg-row-pv-xs   > * { padding-top:    10px;  padding-bottom: 10px; }
			                    .lg-row-pv-sm   > * { padding-top:    15px;  padding-bottom: 15px; }
			                    .lg-row-pv-md   > * { padding-top:    20px;  padding-bottom: 20px; }
			                    .lg-row-pv-lg   > * { padding-top:    30px;  padding-bottom: 30px; }
			                    .lg-row-pv-xl   > * { padding-top:    50px;  padding-bottom: 50px; }

			                /* Horizontal - Left & Right */
			                    .lg-row-ph-xs   > * { padding-left:   10px;  padding-right:  10px; }
			                    .lg-row-ph-sm   > * { padding-left:   15px;  padding-right:  15px; }
			                    .lg-row-ph-md   > * { padding-left:   20px;  padding-right:  20px; }
			                    .lg-row-ph-lg   > * { padding-left:   30px;  padding-right:  30px; }
			                    .lg-row-ph-xl   > * { padding-left:   50px;  padding-right:  50px; }
			            }

			            /* lg-only */
			            @media (min-width: 991.98px) and (max-width: 1199.98px) {

			                /* All */
			                    .lg-o-row-p-xs  > * { padding:        10px; }
			                    .lg-o-row-p-sm  > * { padding:        15px; }
			                    .lg-o-row-p-md  > * { padding:        20px; }
			                    .lg-o-row-p-lg  > * { padding:        30px; }
			                    .lg-o-row-p-xl  > * { padding:        50px; }
			                /* Margin-bottom */
			                    .lg-o-row-pb-xs > * { padding-bottom: 10px; }
			                    .lg-o-row-pb-sm > * { padding-bottom: 15px; }
			                    .lg-o-row-pb-md > * { padding-bottom: 20px; }
			                    .lg-o-row-pb-lg > * { padding-bottom: 30px; }
			                    .lg-o-row-pb-xl > * { padding-bottom: 50px; }
			                /* padding-top */
			                    .lg-o-row-pt-xs > * { padding-top:    10px; }
			                    .lg-o-row-pt-sm > * { padding-top:    15px; }
			                    .lg-o-row-pt-md > * { padding-top:    20px; }
			                    .lg-o-row-pt-lg > * { padding-top:    30px; }
			                    .lg-o-row-pt-xl > * { padding-top:    50px; }
			                /* padding-left */
			                    .lg-o-row-pl-xs > * { padding-left:   10px; }
			                    .lg-o-row-pl-sm > * { padding-left:   15px; }
			                    .lg-o-row-pl-md > * { padding-left:   20px; }
			                    .lg-o-row-pl-lg > * { padding-left:   30px; }
			                    .lg-o-row-pl-xl > * { padding-left:   50px; }
			                /* padding-right */
			                    .lg-o-row-pr-xs > * { padding-right:  10px; }
			                    .lg-o-row-pr-sm > * { padding-right:  15px; }
			                    .lg-o-row-pr-md > * { padding-right:  20px; }
			                    .lg-o-row-pr-lg > * { padding-right:  30px; }
			                    .lg-o-row-pr-xl > * { padding-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .lg-o-row-pv-xs > * { padding-top:    10px;  padding-bottom: 10px; }
			                    .lg-o-row-pv-sm > * { padding-top:    15px;  padding-bottom: 15px; }
			                    .lg-o-row-pv-md > * { padding-top:    20px;  padding-bottom: 20px; }
			                    .lg-o-row-pv-lg > * { padding-top:    30px;  padding-bottom: 30px; }
			                    .lg-o-row-pv-xl > * { padding-top:    50px;  padding-bottom: 50px; }

			                /* Horizontal - Left & Right */
			                    .lg-o-row-ph-xs > * { padding-left:   10px;  padding-right:  10px; }
			                    .lg-o-row-ph-sm > * { padding-left:   15px;  padding-right:  15px; }
			                    .lg-o-row-ph-md > * { padding-left:   20px;  padding-right:  20px; }
			                    .lg-o-row-ph-lg > * { padding-left:   30px;  padding-right:  30px; }
			                    .lg-o-row-ph-xl > * { padding-left:   50px;  padding-right:  50px; }
			            }

			            /* xl */
			            @media (min-width: 1199.98px) {

			                /* All */
			                    .xl-row-p-xs    > * { padding:        10px; }
			                    .xl-row-p-sm    > * { padding:        15px; }
			                    .xl-row-p-md    > * { padding:        20px; }
			                    .xl-row-p-lg    > * { padding:        30px; }
			                    .xl-row-p-xl    > * { padding:        50px; }
			                /* padding-bottom */
			                    .xl-row-pb-xs   > * { padding-bottom: 10px; }
			                    .xl-row-pb-sm   > * { padding-bottom: 15px; }
			                    .xl-row-pb-md   > * { padding-bottom: 20px; }
			                    .xl-row-pb-lg   > * { padding-bottom: 30px; }
			                    .xl-row-pb-xl   > * { padding-bottom: 50px; }
			                /* padding-top */
			                    .xl-row-pt-xs   > * { padding-top:    10px; }
			                    .xl-row-pt-sm   > * { padding-top:    15px; }
			                    .xl-row-pt-md   > * { padding-top:    20px; }
			                    .xl-row-pt-lg   > * { padding-top:    30px; }
			                    .xl-row-pt-xl   > * { padding-top:    50px; }
			                /* padding-left */
			                    .xl-row-pl-xs   > * { padding-left:   10px; }
			                    .xl-row-pl-sm   > * { padding-left:   15px; }
			                    .xl-row-pl-md   > * { padding-left:   20px; }
			                    .xl-row-pl-lg   > * { padding-left:   30px; }
			                    .xl-row-pl-xl   > * { padding-left:   50px; }
			                /* padding-right */
			                    .xl-row-pr-xs   > * { padding-right:  10px; }
			                    .xl-row-pr-sm   > * { padding-right:  15px; }
			                    .xl-row-pr-md   > * { padding-right:  20px; }
			                    .xl-row-pr-lg   > * { padding-right:  30px; }
			                    .xl-row-pr-xl   > * { padding-right:  50px; }

			                /* Vertical - Top & Bottom */
			                    .xl-row-pv-xs   > * { padding-top:    10px;  padding-bottom: 10px; }
			                    .xl-row-pv-sm   > * { padding-top:    15px;  padding-bottom: 15px; }
			                    .xl-row-pv-md   > * { padding-top:    20px;  padding-bottom: 20px; }
			                    .xl-row-pv-lg   > * { padding-top:    30px;  padding-bottom: 30px; }
			                    .xl-row-pv-xl   > * { padding-top:    50px;  padding-bottom: 50px; }

			                /* Horizontal - Left & Right */
			                    .xl-row-ph-xs   > * { padding-left:   10px;  padding-right:  10px; }
			                    .xl-row-ph-sm   > * { padding-left:   15px;  padding-right:  15px; }
			                    .xl-row-ph-md   > * { padding-left:   20px;  padding-right:  20px; }
			                    .xl-row-ph-lg   > * { padding-left:   30px;  padding-right:  30px; }
			                    .xl-row-ph-xl   > * { padding-left:   50px;  padding-right:  50px; }
			            }
			    `
			    }
		];

		finalCode_codeBlocks_css = byAndu_codeBlock_formatCodeString(finalCode_codeBlocks_css);
		byAndu_codeBlock_generateInnerHTML(finalCode_codeBlocks_css , 'css');

	})();

