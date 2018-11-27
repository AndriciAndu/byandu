
	(function(){

		var demoItemsArray = [ 
            'clears'            , 'clears-resp'             , 
            'margin-offsets'    , 'margin-offsets-resp'     , 
            'padding-offsets'   , 'padding-offsets-resp'    ,
            'margin-auto' 
        ];

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// 
				    {
				    name : null ,
				    code :    
				    `    /* Utility - Spacing */
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
				                .m-0       { margin:        0 !important; }
				                .mt-0      { margin-top:    0 !important; }
				                .ml-0      { margin-left:   0 !important; }
				                .mr-0      { margin-right:  0 !important; }
				                .mb-0      { margin-bottom: 0 !important; }
				                .mv-0      { margin-top:    0 !important;   margin-bottom:  0 !important; }
				                .mh-0      { margin-left:   0 !important;   margin-right:   0 !important; }

				                .p-0       { padding:       0 !important; }
				                .pt-0      { padding-top:   0 !important; }
				                .pl-0      { padding-left:  0 !important; }
				                .pr-0      { padding-right: 0 !important; }
				                .pb-0      { padding-bottom:0 !important; }
				                .pv-0      { padding-top:   0 !important;   padding-bottom: 0 !important; }
				                .ph-0      { padding-left:  0 !important;   padding-right:  0 !important; }

				                .b-0       { border:        0 !important; }
				                .bt-0      { border-top:    0 !important; }
				                .bl-0      { border-left:   0 !important; }
				                .br-0      { border-right:  0 !important; }
				                .bb-0      { border-bottom: 0 !important; }
				                .bv-0      { border-top:    0 !important;   border-bottom:  0 !important; }
				                .bh-0      { border-left:   0 !important;   border-right:   0 !important; }
				    `
					},

				// clears-resp
				    {
				    name : 'clears-resp' ,
				    code :    
				    `            /* xs-only */
				            @media (max-width: 575.98px) {
				                .xs-o-m-0  { margin:        0 !important; }
				                .xs-o-mt-0 { margin-top:    0 !important; }
				                .xs-o-ml-0 { margin-left:   0 !important; }
				                .xs-o-mr-0 { margin-right:  0 !important; }
				                .xs-o-mb-0 { margin-bottom: 0 !important; }
				                .xs-o-mv-0 { margin-top:    0 !important;   margin-bottom:  0 !important; }
				                .xs-o-mh-0 { margin-left:   0 !important;   margin-right:   0 !important; }

				                .xs-o-p-0  { padding:       0 !important; }
				                .xs-o-pt-0 { padding-top:   0 !important; }
				                .xs-o-pl-0 { padding-left:  0 !important; }
				                .xs-o-pr-0 { padding-right: 0 !important; }
				                .xs-o-pb-0 { padding-bottom:0 !important; }
				                .xs-o-pv-0 { padding-top:   0 !important;   padding-bottom: 0 !important; }
				                .xs-o-ph-0 { padding-left:  0 !important;   padding-right:  0 !important; }

				                .xs-o-b-0  { border:        0 !important; } 
				                .xs-o-bt-0 { border-top:    0 !important; }
				                .xs-o-bl-0 { border-left:   0 !important; }
				                .xs-o-br-0 { border-right:  0 !important; }
				                .xs-o-bb-0 { border-bottom: 0 !important; }
				                .xs-o-bv-0 { border-top:    0 !important;   border-bottom:  0 !important; }
				                .xs-o-bh-0 { border-left:   0 !important;   border-right:   0 !important; }
				            }

				            /* sm */
				            @media (min-width: 575.98px) {  
				                .sm-m-0  { margin:          0 !important; }
				                .sm-mt-0 { margin-top:      0 !important; }
				                .sm-ml-0 { margin-left:     0 !important; }
				                .sm-mr-0 { margin-right:    0 !important; }
				                .sm-mb-0 { margin-bottom:   0 !important; }
				                .sm-mv-0 { margin-top:      0 !important;   margin-bottom:  0 !important; }
				                .sm-mh-0 { margin-left:     0 !important;   margin-right:   0 !important; }

				                .sm-p-0  { padding:         0 !important; }
				                .sm-pt-0 { padding-top:     0 !important; }
				                .sm-pl-0 { padding-left:    0 !important; }
				                .sm-pr-0 { padding-right:   0 !important; }
				                .sm-pb-0 { padding-bottom:  0 !important; }
				                .sm-pv-0 { padding-top:     0 !important;   padding-bottom: 0 !important; }
				                .sm-ph-0 { padding-left:    0 !important;   padding-right:  0 !important; }

				                .sm-b-0  { border:          0 !important; } 
				                .sm-bt-0 { border-top:      0 !important; }
				                .sm-bl-0 { border-left:     0 !important; }
				                .sm-br-0 { border-right:    0 !important; }
				                .sm-bb-0 { border-bottom:   0 !important; }
				                .sm-bv-0 { border-top:      0 !important;   border-bottom:  0 !important; }
				                .sm-bh-0 { border-left:     0 !important;   border-right:   0 !important; }
				            }

				            /* sm-only */
				            @media (min-width: 575.98px) and (max-width: 767.98px) {
				                .sm-o-m-0  { margin:        0 !important; }
				                .sm-o-mt-0 { margin-top:    0 !important; }
				                .sm-o-ml-0 { margin-left:   0 !important; }
				                .sm-o-mr-0 { margin-right:  0 !important; }
				                .sm-o-mb-0 { margin-bottom: 0 !important; }
				                .sm-o-mv-0 { margin-top:    0 !important;   margin-bottom:  0 !important; }
				                .sm-o-mh-0 { margin-left:   0 !important;   margin-right:   0 !important; }

				                .sm-o-p-0  { padding:       0 !important; }
				                .sm-o-pt-0 { padding-top:   0 !important; }
				                .sm-o-pl-0 { padding-left:  0 !important; }
				                .sm-o-pr-0 { padding-right: 0 !important; }
				                .sm-o-pb-0 { padding-bottom:0 !important; }
				                .sm-o-pv-0 { padding-top:   0 !important;   padding-bottom: 0 !important; }
				                .sm-o-ph-0 { padding-left:  0 !important;   padding-right:  0 !important; }

				                .sm-o-b-0  { border:        0 !important; } 
				                .sm-o-bt-0 { border-top:    0 !important; }
				                .sm-o-bl-0 { border-left:   0 !important; }
				                .sm-o-br-0 { border-right:  0 !important; }
				                .sm-o-bb-0 { border-bottom: 0 !important; }
				                .sm-o-bv-0 { border-top:    0 !important;   border-bottom:  0 !important; }
				                .sm-o-bh-0 { border-left:   0 !important;   border-right:   0 !important; }
				            }

				            /* md */
				            @media (min-width: 767.98px) {
				                .md-m-0  { margin:          0 !important; }
				                .md-mt-0 { margin-top:      0 !important; }
				                .md-ml-0 { margin-left:     0 !important; }
				                .md-mr-0 { margin-right:    0 !important; }
				                .md-mb-0 { margin-bottom:   0 !important; }
				                .md-mv-0 { margin-top:      0 !important;   margin-bottom:  0 !important; }
				                .md-mh-0 { margin-left:     0 !important;   margin-right:   0 !important; }

				                .md-p-0  { padding:         0 !important; }
				                .md-pt-0 { padding-top:     0 !important; }
				                .md-pl-0 { padding-left:    0 !important; }
				                .md-pr-0 { padding-right:   0 !important; }
				                .md-pb-0 { padding-bottom:  0 !important; }
				                .md-pv-0 { padding-top:     0 !important;   padding-bottom: 0 !important; }
				                .md-ph-0 { padding-left:    0 !important;   padding-right:  0 !important; }

				                .md-b-0  { border:          0 !important; }
				                .md-bt-0 { border-top:      0 !important; }
				                .md-bl-0 { border-left:     0 !important; }
				                .md-br-0 { border-right:    0 !important; }
				                .md-bb-0 { border-bottom:   0 !important; }
				                .md-bv-0 { border-top:      0 !important;   border-bottom:  0 !important; }
				                .md-bh-0 { border-left:     0 !important;   border-right:   0 !important; }
				            }

				            /* md-only */
				            @media (min-width: 767.98px) and (max-width: 991.98px) {
				                .md-o-m-0  { margin:        0 !important; }
				                .md-o-mt-0 { margin-top:    0 !important; }
				                .md-o-ml-0 { margin-left:   0 !important; }
				                .md-o-mr-0 { margin-right:  0 !important; }
				                .md-o-mb-0 { margin-bottom: 0 !important; }
				                .md-o-mv-0 { margin-top:    0 !important;   margin-bottom:  0 !important; }
				                .md-o-mh-0 { margin-left:   0 !important;   margin-right:   0 !important; }

				                .md-o-p-0  { padding:       0 !important; }
				                .md-o-pt-0 { padding-top:   0 !important; }
				                .md-o-pl-0 { padding-left:  0 !important; }
				                .md-o-pr-0 { padding-right: 0 !important; }
				                .md-o-pb-0 { padding-bottom:0 !important; }
				                .md-o-pv-0 { padding-top:   0 !important;   padding-bottom: 0 !important; }
				                .md-o-ph-0 { padding-left:  0 !important;   padding-right:  0 !important; }

				                .md-o-b-0  { border:        0 !important; } 
				                .md-o-bt-0 { border-top:    0 !important; }
				                .md-o-bl-0 { border-left:   0 !important; }
				                .md-o-br-0 { border-right:  0 !important; }
				                .md-o-bb-0 { border-bottom: 0 !important; }
				                .md-o-bv-0 { border-top:    0 !important;   border-bottom:  0 !important; }
				                .md-o-bh-0 { border-left:   0 !important;   border-right:   0 !important; }
				            }

				            /* lg */
				            @media (min-width: 991.98px) {
				                .lg-m-0  { margin:          0 !important; }
				                .lg-mt-0 { margin-top:      0 !important; }
				                .lg-ml-0 { margin-left:     0 !important; }
				                .lg-mr-0 { margin-right:    0 !important; }
				                .lg-mb-0 { margin-bottom:   0 !important; }
				                .lg-mv-0 { margin-top:      0 !important;   margin-bottom:  0 !important; }
				                .lg-mh-0 { margin-left:     0 !important;   margin-right:   0 !important; }

				                .lg-p-0  { padding:         0 !important; }
				                .lg-pt-0 { padding-top:     0 !important; }
				                .lg-pl-0 { padding-left:    0 !important; }
				                .lg-pr-0 { padding-right:   0 !important; }
				                .lg-pb-0 { padding-bottom:  0 !important; }
				                .lg-pv-0 { padding-top:     0 !important;   padding-bottom: 0 !important; }
				                .lg-ph-0 { padding-left:    0 !important;   padding-right:  0 !important; }

				                .lg-b-0  { border:          0 !important; }
				                .lg-bt-0 { border-top:      0 !important; }
				                .lg-bl-0 { border-left:     0 !important; }
				                .lg-br-0 { border-right:    0 !important; }
				                .lg-bb-0 { border-bottom:   0 !important; }
				                .lg-bv-0 { border-top:      0 !important;   border-bottom:  0 !important; }
				                .lg-bh-0 { border-left:     0 !important;   border-right:   0 !important; }
				            }

				            /* lg-only */
				            @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                .lg-o-m-0  { margin:        0 !important; }
				                .lg-o-mt-0 { margin-top:    0 !important; }
				                .lg-o-ml-0 { margin-left:   0 !important; }
				                .lg-o-mr-0 { margin-right:  0 !important; }
				                .lg-o-mb-0 { margin-bottom: 0 !important; }
				                .lg-o-mv-0 { margin-top:    0 !important;   margin-bottom:  0 !important; }
				                .lg-o-mh-0 { margin-left:   0 !important;   margin-right:   0 !important; }

				                .lg-o-p-0  { padding:       0 !important; }
				                .lg-o-pt-0 { padding-top:   0 !important; }
				                .lg-o-pl-0 { padding-left:  0 !important; }
				                .lg-o-pr-0 { padding-right: 0 !important; }
				                .lg-o-pb-0 { padding-bottom:0 !important; }
				                .lg-o-pv-0 { padding-top:   0 !important;   padding-bottom: 0 !important; }
				                .lg-o-ph-0 { padding-left:  0 !important;   padding-right:  0 !important; }

				                .lg-o-b-0  { border:        0 !important; } 
				                .lg-o-bt-0 { border-top:    0 !important; }
				                .lg-o-bl-0 { border-left:   0 !important; }
				                .lg-o-br-0 { border-right:  0 !important; }
				                .lg-o-bb-0 { border-bottom: 0 !important; }
				                .lg-o-bv-0 { border-top:    0 !important;   border-bottom:  0 !important; }
				                .lg-o-bh-0 { border-left:   0 !important;   border-right:   0 !important; }
				            }

				            /* xl | xl-only */
				            @media (min-width: 1199.98px) {
				                .xl-m-0    { margin:        0 !important; }
				                .xl-mt-0   { margin-top:    0 !important; }
				                .xl-ml-0   { margin-left:   0 !important; }
				                .xl-mr-0   { margin-right:  0 !important; }
				                .xl-mb-0   { margin-bottom: 0 !important; }
				                .xl-mv-0   { margin-top:    0 !important;   margin-bottom:  0 !important; }
				                .xl-mh-0   { margin-left:   0 !important;   margin-right:   0 !important; }

				                .xl-p-0    { padding:       0 !important; }
				                .xl-pt-0   { padding-top:   0 !important; }
				                .xl-pl-0   { padding-left:  0 !important; }
				                .xl-pr-0   { padding-right: 0 !important; }
				                .xl-pb-0   { padding-bottom:0 !important; }
				                .xl-pv-0   { padding-top:   0 !important;   padding-bottom: 0 !important; }
				                .xl-ph-0   { padding-left:  0 !important;   padding-right:  0 !important; }

				                .xl-b-0    { border:        0 !important; } 
				                .xl-bt-0   { border-top:    0 !important; }
				                .xl-bl-0   { border-left:   0 !important; }
				                .xl-br-0   { border-right:  0 !important; }
				                .xl-bb-0   { border-bottom: 0 !important; }
				                .xl-bv-0   { border-top:    0 !important;   border-bottom:  0 !important; }
				                .xl-bh-0   { border-left:   0 !important;   border-right:   0 !important; }
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
				                    .m-xs        { margin:        10px !important; }
				                    .m-sm        { margin:        15px !important; }
				                    .m-md        { margin:        20px !important; }
				                    .m-lg        { margin:        30px !important; }
				                    .m-xl        { margin:        50px !important; }
				                /* Margin-bottom */
				                    .mb-xs       { margin-bottom: 10px !important; }
				                    .mb-sm       { margin-bottom: 15px !important; }
				                    .mb-md       { margin-bottom: 20px !important; }
				                    .mb-lg       { margin-bottom: 30px !important; }
				                    .mb-xl       { margin-bottom: 50px !important; }
				                /* Margin-top */
				                    .mt-xs       { margin-top:    10px !important; }
				                    .mt-sm       { margin-top:    15px !important; }
				                    .mt-md       { margin-top:    20px !important; }
				                    .mt-lg       { margin-top:    30px !important; }
				                    .mt-xl       { margin-top:    50px !important; }
				                /* Margin-left */
				                    .ml-xs       { margin-left:   10px !important; }
				                    .ml-sm       { margin-left:   15px !important; }
				                    .ml-md       { margin-left:   20px !important; }
				                    .ml-lg       { margin-left:   30px !important; }
				                    .ml-xl       { margin-left:   50px !important; }
				                /* Margin-right */
				                    .mr-xs       { margin-right:  10px !important; }
				                    .mr-sm       { margin-right:  15px !important; }
				                    .mr-md       { margin-right:  20px !important; }
				                    .mr-lg       { margin-right:  30px !important; }
				                    .mr-xl       { margin-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .mv-xs       { margin-top:    10px !important; margin-bottom:  10px !important; }
				                    .mv-sm       { margin-top:    15px !important; margin-bottom:  15px !important; }
				                    .mv-md       { margin-top:    20px !important; margin-bottom:  20px !important; }
				                    .mv-lg       { margin-top:    30px !important; margin-bottom:  30px !important; }
				                    .mv-xl       { margin-top:    50px !important; margin-bottom:  50px !important; }

				                /* Horizontal - Left & Right */
				                    .mh-xs       { margin-left:   10px !important; margin-right:   10px !important; }
				                    .mh-sm       { margin-left:   15px !important; margin-right:   15px !important; }
				                    .mh-md       { margin-left:   20px !important; margin-right:   20px !important; }
				                    .mh-lg       { margin-left:   30px !important; margin-right:   30px !important; }
				                    .mh-xl       { margin-left:   50px !important; margin-right:   50px !important; }
				    `
				    },

				// margin-offsets-resp
				    {
				    name : 'margin-offsets-resp' ,
				    code :    
				    `            /* xs-only */
				            @media (max-width: 575.98px) {

				                /* All */
				                    .xs-o-m-xs   { margin:        10px !important; }
				                    .xs-o-m-sm   { margin:        15px !important; }
				                    .xs-o-m-md   { margin:        20px !important; }
				                    .xs-o-m-lg   { margin:        30px !important; }
				                    .xs-o-m-xl   { margin:        50px !important; }
				                /* Margin-bottom */
				                    .xs-o-mb-xs  { margin-bottom: 10px !important; }
				                    .xs-o-mb-sm  { margin-bottom: 15px !important; }
				                    .xs-o-mb-md  { margin-bottom: 20px !important; }
				                    .xs-o-mb-lg  { margin-bottom: 30px !important; }
				                    .xs-o-mb-xl  { margin-bottom: 50px !important; }
				                /* Margin-top */
				                    .xs-o-mt-xs  { margin-top:    10px !important; }
				                    .xs-o-mt-sm  { margin-top:    15px !important; }
				                    .xs-o-mt-md  { margin-top:    20px !important; }
				                    .xs-o-mt-lg  { margin-top:    30px !important; }
				                    .xs-o-mt-xl  { margin-top:    50px !important; }
				                /* Margin-left */
				                    .xs-o-ml-xs  { margin-left:   10px !important; }
				                    .xs-o-ml-sm  { margin-left:   15px !important; }
				                    .xs-o-ml-md  { margin-left:   20px !important; }
				                    .xs-o-ml-lg  { margin-left:   30px !important; }
				                    .xs-o-ml-xl  { margin-left:   50px !important; }
				                /* Margin-right */
				                    .xs-o-mr-xs  { margin-right:  10px !important; }
				                    .xs-o-mr-sm  { margin-right:  15px !important; }
				                    .xs-o-mr-md  { margin-right:  20px !important; }
				                    .xs-o-mr-lg  { margin-right:  30px !important; }
				                    .xs-o-mr-xl  { margin-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .xs-o-mv-xs  { margin-top:    10px !important;  margin-bottom:  10px !important; }
				                    .xs-o-mv-sm  { margin-top:    15px !important;  margin-bottom:  15px !important; }
				                    .xs-o-mv-md  { margin-top:    20px !important;  margin-bottom:  20px !important; }
				                    .xs-o-mv-lg  { margin-top:    30px !important;  margin-bottom:  30px !important; }
				                    .xs-o-mv-xl  { margin-top:    50px !important;  margin-bottom:  50px !important; }

				                /* Horizontal - Left & Right */
				                    .xs-o-mh-xs  { margin-left:   10px !important;  margin-right:   10px !important; }
				                    .xs-o-mh-sm  { margin-left:   15px !important;  margin-right:   15px !important; }
				                    .xs-o-mh-md  { margin-left:   20px !important;  margin-right:   20px !important; }
				                    .xs-o-mh-lg  { margin-left:   30px !important;  margin-right:   30px !important; }
				                    .xs-o-mh-xl  { margin-left:   50px !important;  margin-right:   50px !important; }
				            }

				            /* sm */
				            @media (min-width: 575.98px) {
				                /* All */
				                    .sm-m-xs     { margin:        10px !important; }
				                    .sm-m-sm     { margin:        15px !important; }
				                    .sm-m-md     { margin:        20px !important; }
				                    .sm-m-lg     { margin:        30px !important; }
				                    .sm-m-xl     { margin:        50px !important; }
				                /* Margin-bottom */
				                    .sm-mb-xs    { margin-bottom: 10px !important; }
				                    .sm-mb-sm    { margin-bottom: 15px !important; }
				                    .sm-mb-md    { margin-bottom: 20px !important; }
				                    .sm-mb-lg    { margin-bottom: 30px !important; }
				                    .sm-mb-xl    { margin-bottom: 50px !important; }
				                /* Margin-top */
				                    .sm-mt-xs    { margin-top:    10px !important; }
				                    .sm-mt-sm    { margin-top:    15px !important; }
				                    .sm-mt-md    { margin-top:    20px !important; }
				                    .sm-mt-lg    { margin-top:    30px !important; }
				                    .sm-mt-xl    { margin-top:    50px !important; }
				                /* Margin-left */
				                    .sm-ml-xs    { margin-left:   10px !important; }
				                    .sm-ml-sm    { margin-left:   15px !important; }
				                    .sm-ml-md    { margin-left:   20px !important; }
				                    .sm-ml-lg    { margin-left:   30px !important; }
				                    .sm-ml-xl    { margin-left:   50px !important; }
				                /* Margin-right */
				                    .sm-mr-xs    { margin-right:  10px !important; }
				                    .sm-mr-sm    { margin-right:  15px !important; }
				                    .sm-mr-md    { margin-right:  20px !important; }
				                    .sm-mr-lg    { margin-right:  30px !important; }
				                    .sm-mr-xl    { margin-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .sm-mv-xs    { margin-top:    10px !important;  margin-bottom:  10px !important; }
				                    .sm-mv-sm    { margin-top:    15px !important;  margin-bottom:  15px !important; }
				                    .sm-mv-md    { margin-top:    20px !important;  margin-bottom:  20px !important; }
				                    .sm-mv-lg    { margin-top:    30px !important;  margin-bottom:  30px !important; }
				                    .sm-mv-xl    { margin-top:    50px !important;  margin-bottom:  50px !important; }

				                /* Horizontal - Left & Right */
				                    .sm-mh-xs    { margin-left:   10px !important;  margin-right:   10px !important; }
				                    .sm-mh-sm    { margin-left:   15px !important;  margin-right:   15px !important; }
				                    .sm-mh-md    { margin-left:   20px !important;  margin-right:   20px !important; }
				                    .sm-mh-lg    { margin-left:   30px !important;  margin-right:   30px !important; }
				                    .sm-mh-xl    { margin-left:   50px !important;  margin-right:   50px !important; }
				            }

				            /* sm-only */
				            @media (min-width: 575.98px) and (max-width: 767.98px) {

				                /* All */
				                    .sm-o-m-xs  { margin:        10px !important; }
				                    .sm-o-m-sm  { margin:        15px !important; }
				                    .sm-o-m-md  { margin:        20px !important; }
				                    .sm-o-m-lg  { margin:        30px !important; }
				                    .sm-o-m-xl  { margin:        50px !important; }
				                /* Margin-bottom */
				                    .sm-o-mb-xs { margin-bottom: 10px !important; }
				                    .sm-o-mb-sm { margin-bottom: 15px !important; }
				                    .sm-o-mb-md { margin-bottom: 20px !important; }
				                    .sm-o-mb-lg { margin-bottom: 30px !important; }
				                    .sm-o-mb-xl { margin-bottom: 50px !important; }
				                /* Margin-top */
				                    .sm-o-mt-xs { margin-top:    10px !important; }
				                    .sm-o-mt-sm { margin-top:    15px !important; }
				                    .sm-o-mt-md { margin-top:    20px !important; }
				                    .sm-o-mt-lg { margin-top:    30px !important; }
				                    .sm-o-mt-xl { margin-top:    50px !important; }
				                /* Margin-left */
				                    .sm-o-ml-xs { margin-left:   10px !important; }
				                    .sm-o-ml-sm { margin-left:   15px !important; }
				                    .sm-o-ml-md { margin-left:   20px !important; }
				                    .sm-o-ml-lg { margin-left:   30px !important; }
				                    .sm-o-ml-xl { margin-left:   50px !important; }
				                /* Margin-right */
				                    .sm-o-mr-xs { margin-right:  10px !important; }
				                    .sm-o-mr-sm { margin-right:  15px !important; }
				                    .sm-o-mr-md { margin-right:  20px !important; }
				                    .sm-o-mr-lg { margin-right:  30px !important; }
				                    .sm-o-mr-xl { margin-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .sm-o-mv-xs { margin-top:    10px !important;  margin-bottom:  10px !important; }
				                    .sm-o-mv-sm { margin-top:    15px !important;  margin-bottom:  15px !important; }
				                    .sm-o-mv-md { margin-top:    20px !important;  margin-bottom:  20px !important; }
				                    .sm-o-mv-lg { margin-top:    30px !important;  margin-bottom:  30px !important; }
				                    .sm-o-mv-xl { margin-top:    50px !important;  margin-bottom:  50px !important; }

				                /* Horizontal - Left & Right */
				                    .sm-o-mh-xs { margin-left:   10px !important;  margin-right:   10px !important; }
				                    .sm-o-mh-sm { margin-left:   15px !important;  margin-right:   15px !important; }
				                    .sm-o-mh-md { margin-left:   20px !important;  margin-right:   20px !important; }
				                    .sm-o-mh-lg { margin-left:   30px !important;  margin-right:   30px !important; }
				                    .sm-o-mh-xl { margin-left:   50px !important;  margin-right:   50px !important; }
				            }

				            /* md */
				            @media (min-width: 767.98px) {
				                /* All */
				                    .md-m-xs    { margin:        10px !important; }
				                    .md-m-sm    { margin:        15px !important; }
				                    .md-m-md    { margin:        20px !important; }
				                    .md-m-lg    { margin:        30px !important; }
				                    .md-m-xl    { margin:        50px !important; }
				                /* Margin-bottom */
				                    .md-mb-xs   { margin-bottom: 10px !important; }
				                    .md-mb-sm   { margin-bottom: 15px !important; }
				                    .md-mb-md   { margin-bottom: 20px !important; }
				                    .md-mb-lg   { margin-bottom: 30px !important; }
				                    .md-mb-xl   { margin-bottom: 50px !important; }
				                /* Margin-top */
				                    .md-mt-xs   { margin-top:    10px !important; }
				                    .md-mt-sm   { margin-top:    15px !important; }
				                    .md-mt-md   { margin-top:    20px !important; }
				                    .md-mt-lg   { margin-top:    30px !important; }
				                    .md-mt-xl   { margin-top:    50px !important; }
				                /* Margin-left */
				                    .md-ml-xs   { margin-left:   10px !important; }
				                    .md-ml-sm   { margin-left:   15px !important; }
				                    .md-ml-md   { margin-left:   20px !important; }
				                    .md-ml-lg   { margin-left:   30px !important; }
				                    .md-ml-xl   { margin-left:   50px !important; }
				                /* Margin-right */
				                    .md-mr-xs   { margin-right:  10px !important; }
				                    .md-mr-sm   { margin-right:  15px !important; }
				                    .md-mr-md   { margin-right:  20px !important; }
				                    .md-mr-lg   { margin-right:  30px !important; }
				                    .md-mr-xl   { margin-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .md-mv-xs   { margin-top:    10px !important;  margin-bottom:  10px !important; }
				                    .md-mv-sm   { margin-top:    15px !important;  margin-bottom:  15px !important; }
				                    .md-mv-md   { margin-top:    20px !important;  margin-bottom:  20px !important; }
				                    .md-mv-lg   { margin-top:    30px !important;  margin-bottom:  30px !important; }
				                    .md-mv-xl   { margin-top:    50px !important;  margin-bottom:  50px !important; }

				                /* Horizontal - Left & Right */
				                    .md-mh-xs   { margin-left:   10px !important;  margin-right:   10px !important; }
				                    .md-mh-sm   { margin-left:   15px !important;  margin-right:   15px !important; }
				                    .md-mh-md   { margin-left:   20px !important;  margin-right:   20px !important; }
				                    .md-mh-lg   { margin-left:   30px !important;  margin-right:   30px !important; }
				                    .md-mh-xl   { margin-left:   50px !important;  margin-right:   50px !important; }
				            }

				            /* md-only */
				            @media (min-width: 767.98px) and (max-width: 991.98px) {

				                /* All */
				                    .md-o-m-xs  { margin:        10px !important; }
				                    .md-o-m-sm  { margin:        15px !important; }
				                    .md-o-m-md  { margin:        20px !important; }
				                    .md-o-m-lg  { margin:        30px !important; }
				                    .md-o-m-xl  { margin:        50px !important; }
				                /* Margin-bottom */
				                    .md-o-mb-xs { margin-bottom: 10px !important; }
				                    .md-o-mb-sm { margin-bottom: 15px !important; }
				                    .md-o-mb-md { margin-bottom: 20px !important; }
				                    .md-o-mb-lg { margin-bottom: 30px !important; }
				                    .md-o-mb-xl { margin-bottom: 50px !important; }
				                /* Margin-top */
				                    .md-o-mt-xs { margin-top:    10px !important; }
				                    .md-o-mt-sm { margin-top:    15px !important; }
				                    .md-o-mt-md { margin-top:    20px !important; }
				                    .md-o-mt-lg { margin-top:    30px !important; }
				                    .md-o-mt-xl { margin-top:    50px !important; }
				                /* Margin-left */
				                    .md-o-ml-xs { margin-left:   10px !important; }
				                    .md-o-ml-sm { margin-left:   15px !important; }
				                    .md-o-ml-md { margin-left:   20px !important; }
				                    .md-o-ml-lg { margin-left:   30px !important; }
				                    .md-o-ml-xl { margin-left:   50px !important; }
				                /* Margin-right */
				                    .md-o-mr-xs { margin-right:  10px !important; }
				                    .md-o-mr-sm { margin-right:  15px !important; }
				                    .md-o-mr-md { margin-right:  20px !important; }
				                    .md-o-mr-lg { margin-right:  30px !important; }
				                    .md-o-mr-xl { margin-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .md-o-mv-xs { margin-top:    10px !important;  margin-bottom:  10px !important; }
				                    .md-o-mv-sm { margin-top:    15px !important;  margin-bottom:  15px !important; }
				                    .md-o-mv-md { margin-top:    20px !important;  margin-bottom:  20px !important; }
				                    .md-o-mv-lg { margin-top:    30px !important;  margin-bottom:  30px !important; }
				                    .md-o-mv-xl { margin-top:    50px !important;  margin-bottom:  50px !important; }

				                /* Horizontal - Left & Right */
				                    .md-o-mh-xs { margin-left:   10px !important;  margin-right:   10px !important; }
				                    .md-o-mh-sm { margin-left:   15px !important;  margin-right:   15px !important; }
				                    .md-o-mh-md { margin-left:   20px !important;  margin-right:   20px !important; }
				                    .md-o-mh-lg { margin-left:   30px !important;  margin-right:   30px !important; }
				                    .md-o-mh-xl { margin-left:   50px !important;  margin-right:   50px !important; }
				            }

				            /* lg */
				            @media (min-width: 991.98px) {

				                /* All */
				                    .lg-m-xs    { margin:        10px !important; }
				                    .lg-m-sm    { margin:        15px !important; }
				                    .lg-m-md    { margin:        20px !important; }
				                    .lg-m-lg    { margin:        30px !important; }
				                    .lg-m-xl    { margin:        50px !important; }
				                /* Margin-bottom */
				                    .lg-mb-xs   { margin-bottom: 10px !important; }
				                    .lg-mb-sm   { margin-bottom: 15px !important; }
				                    .lg-mb-md   { margin-bottom: 20px !important; }
				                    .lg-mb-lg   { margin-bottom: 30px !important; }
				                    .lg-mb-xl   { margin-bottom: 50px !important; }
				                /* Margin-top */
				                    .lg-mt-xs   { margin-top:    10px !important; }
				                    .lg-mt-sm   { margin-top:    15px !important; }
				                    .lg-mt-md   { margin-top:    20px !important; }
				                    .lg-mt-lg   { margin-top:    30px !important; }
				                    .lg-mt-xl   { margin-top:    50px !important; }
				                /* Margin-left */
				                    .lg-ml-xs   { margin-left:   10px !important; }
				                    .lg-ml-sm   { margin-left:   15px !important; }
				                    .lg-ml-md   { margin-left:   20px !important; }
				                    .lg-ml-lg   { margin-left:   30px !important; }
				                    .lg-ml-xl   { margin-left:   50px !important; }
				                /* Margin-right */
				                    .lg-mr-xs   { margin-right:  10px !important; }
				                    .lg-mr-sm   { margin-right:  15px !important; }
				                    .lg-mr-md   { margin-right:  20px !important; }
				                    .lg-mr-lg   { margin-right:  30px !important; }
				                    .lg-mr-xl   { margin-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .lg-mv-xs   { margin-top:    10px !important;  margin-bottom:   10px !important; }
				                    .lg-mv-sm   { margin-top:    15px !important;  margin-bottom:   15px !important; }
				                    .lg-mv-md   { margin-top:    20px !important;  margin-bottom:   20px !important; }
				                    .lg-mv-lg   { margin-top:    30px !important;  margin-bottom:   30px !important; }
				                    .lg-mv-xl   { margin-top:    50px !important;  margin-bottom:   50px !important; }

				                /* Horizontal - Left & Right */
				                    .lg-mh-xs   { margin-left:   10px !important;  margin-right:    10px !important; }
				                    .lg-mh-sm   { margin-left:   15px !important;  margin-right:    15px !important; }
				                    .lg-mh-md   { margin-left:   20px !important;  margin-right:    20px !important; }
				                    .lg-mh-lg   { margin-left:   30px !important;  margin-right:    30px !important; }
				                    .lg-mh-xl   { margin-left:   50px !important;  margin-right:    50px !important; }
				            }

				            /* lg-only */
				            @media (min-width: 991.98px) and (max-width: 1199.98px) {

				                /* All */
				                    .lg-o-m-xs  { margin:        10px !important; }
				                    .lg-o-m-sm  { margin:        15px !important; }
				                    .lg-o-m-md  { margin:        20px !important; }
				                    .lg-o-m-lg  { margin:        30px !important; }
				                    .lg-o-m-xl  { margin:        50px !important; }
				                /* Margin-bottom */
				                    .lg-o-mb-xs { margin-bottom: 10px !important; }
				                    .lg-o-mb-sm { margin-bottom: 15px !important; }
				                    .lg-o-mb-md { margin-bottom: 20px !important; }
				                    .lg-o-mb-lg { margin-bottom: 30px !important; }
				                    .lg-o-mb-xl { margin-bottom: 50px !important; }
				                /* Margin-top */
				                    .lg-o-mt-xs { margin-top:    10px !important; }
				                    .lg-o-mt-sm { margin-top:    15px !important; }
				                    .lg-o-mt-md { margin-top:    20px !important; }
				                    .lg-o-mt-lg { margin-top:    30px !important; }
				                    .lg-o-mt-xl { margin-top:    50px !important; }
				                /* Margin-left */
				                    .lg-o-ml-xs { margin-left:   10px !important; }
				                    .lg-o-ml-sm { margin-left:   15px !important; }
				                    .lg-o-ml-md { margin-left:   20px !important; }
				                    .lg-o-ml-lg { margin-left:   30px !important; }
				                    .lg-o-ml-xl { margin-left:   50px !important; }
				                /* Margin-right */
				                    .lg-o-mr-xs { margin-right:  10px !important; }
				                    .lg-o-mr-sm { margin-right:  15px !important; }
				                    .lg-o-mr-md { margin-right:  20px !important; }
				                    .lg-o-mr-lg { margin-right:  30px !important; }
				                    .lg-o-mr-xl { margin-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .lg-o-mv-xs { margin-top:    10px !important;  margin-bottom:   10px !important; }
				                    .lg-o-mv-sm { margin-top:    15px !important;  margin-bottom:   15px !important; }
				                    .lg-o-mv-md { margin-top:    20px !important;  margin-bottom:   20px !important; }
				                    .lg-o-mv-lg { margin-top:    30px !important;  margin-bottom:   30px !important; }
				                    .lg-o-mv-xl { margin-top:    50px !important;  margin-bottom:   50px !important; }

				                /* Horizontal - Left & Right */
				                    .lg-o-mh-xs { margin-left:   10px !important;  margin-right:    10px !important; }
				                    .lg-o-mh-sm { margin-left:   15px !important;  margin-right:    15px !important; }
				                    .lg-o-mh-md { margin-left:   20px !important;  margin-right:    20px !important; }
				                    .lg-o-mh-lg { margin-left:   30px !important;  margin-right:    30px !important; }
				                    .lg-o-mh-xl { margin-left:   50px !important;  margin-right:    50px !important; }
				            }

				            /* xl */
				            @media (min-width: 1199.98px) {

				                /* All */
				                    .xl-m-xs    { margin:        10px !important; }
				                    .xl-m-sm    { margin:        15px !important; }
				                    .xl-m-md    { margin:        20px !important; }
				                    .xl-m-lg    { margin:        30px !important; }
				                    .xl-m-xl    { margin:        50px !important; }
				                /* Margin-bottom */
				                    .xl-mb-xs   { margin-bottom: 10px !important; }
				                    .xl-mb-sm   { margin-bottom: 15px !important; }
				                    .xl-mb-md   { margin-bottom: 20px !important; }
				                    .xl-mb-lg   { margin-bottom: 30px !important; }
				                    .xl-mb-xl   { margin-bottom: 50px !important; }
				                /* Margin-top */
				                    .xl-mt-xs   { margin-top:    10px !important; }
				                    .xl-mt-sm   { margin-top:    15px !important; }
				                    .xl-mt-md   { margin-top:    20px !important; }
				                    .xl-mt-lg   { margin-top:    30px !important; }
				                    .xl-mt-xl   { margin-top:    50px !important; }
				                /* Margin-left */
				                    .xl-ml-xs   { margin-left:   10px !important; }
				                    .xl-ml-sm   { margin-left:   15px !important; }
				                    .xl-ml-md   { margin-left:   20px !important; }
				                    .xl-ml-lg   { margin-left:   30px !important; }
				                    .xl-ml-xl   { margin-left:   50px !important; }
				                /* Margin-right */
				                    .xl-mr-xs   { margin-right:  10px !important; }
				                    .xl-mr-sm   { margin-right:  15px !important; }
				                    .xl-mr-md   { margin-right:  20px !important; }
				                    .xl-mr-lg   { margin-right:  30px !important; }
				                    .xl-mr-xl   { margin-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .xl-mv-xs   { margin-top:    10px !important;  margin-bottom:   10px !important; }
				                    .xl-mv-sm   { margin-top:    15px !important;  margin-bottom:   15px !important; }
				                    .xl-mv-md   { margin-top:    20px !important;  margin-bottom:   20px !important; }
				                    .xl-mv-lg   { margin-top:    30px !important;  margin-bottom:   30px !important; }
				                    .xl-mv-xl   { margin-top:    50px !important;  margin-bottom:   50px !important; }

				                /* Horizontal - Left & Right */
				                    .xl-mh-xs   { margin-left:   10px !important;  margin-right:    10px !important; }
				                    .xl-mh-sm   { margin-left:   15px !important;  margin-right:    15px !important; }
				                    .xl-mh-md   { margin-left:   20px !important;  margin-right:    20px !important; }
				                    .xl-mh-lg   { margin-left:   30px !important;  margin-right:    30px !important; }
				                    .xl-mh-xl   { margin-left:   50px !important;  margin-right:    50px !important; }
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
				                    .p-xs       { padding:        10px !important; }
				                    .p-sm       { padding:        15px !important; }
				                    .p-md       { padding:        20px !important; }
				                    .p-lg       { padding:        30px !important; }
				                    .p-xl       { padding:        50px !important; }
				                /* padding-bottom */
				                    .pb-xs      { padding-bottom: 10px !important; }
				                    .pb-sm      { padding-bottom: 15px !important; }
				                    .pb-md      { padding-bottom: 20px !important; }
				                    .pb-lg      { padding-bottom: 30px !important; }
				                    .pb-xl      { padding-bottom: 50px !important; }
				                /* padding-top */
				                    .pt-xs      { padding-top:    10px !important; }
				                    .pt-sm      { padding-top:    15px !important; }
				                    .pt-md      { padding-top:    20px !important; }
				                    .pt-lg      { padding-top:    30px !important; }
				                    .pt-xl      { padding-top:    50px !important; }
				                /* padding-left */
				                    .pl-xs      { padding-left:   10px !important; }
				                    .pl-sm      { padding-left:   15px !important; }
				                    .pl-md      { padding-left:   20px !important; }
				                    .pl-lg      { padding-left:   30px !important; }
				                    .pl-xl      { padding-left:   50px !important; }
				                /* padding-right */
				                    .pr-xs      { padding-right:  10px !important; }
				                    .pr-sm      { padding-right:  15px !important; }
				                    .pr-md      { padding-right:  20px !important; }
				                    .pr-lg      { padding-right:  30px !important; }
				                    .pr-xl      { padding-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .pv-xs      { padding-top:    10px !important;  padding-bottom: 10px !important; }
				                    .pv-sm      { padding-top:    15px !important;  padding-bottom: 15px !important; }
				                    .pv-md      { padding-top:    20px !important;  padding-bottom: 20px !important; }
				                    .pv-lg      { padding-top:    30px !important;  padding-bottom: 30px !important; }
				                    .pv-xl      { padding-top:    50px !important;  padding-bottom: 50px !important; }

				                /* Horizontal - Left & Right */
				                    .ph-xs      { padding-left:   10px !important;  padding-right:  10px !important; }
				                    .ph-sm      { padding-left:   15px !important;  padding-right:  15px !important; }
				                    .ph-md      { padding-left:   20px !important;  padding-right:  20px !important; }
				                    .ph-lg      { padding-left:   30px !important;  padding-right:  30px !important; }
				                    .ph-xl      { padding-left:   50px !important;  padding-right:  50px !important; }
				    `
				    },

				// padding-offsets-resp
				    {
				    name : 'padding-offsets-resp' ,
				    code :    
				    `            /* xs-only */
				            @media (max-width: 575.98px) {

				                /* All */
				                    .xs-o-p-xs  { padding:        10px !important; }
				                    .xs-o-p-sm  { padding:        15px !important; }
				                    .xs-o-p-md  { padding:        20px !important; }
				                    .xs-o-p-lg  { padding:        30px !important; }
				                    .xs-o-p-xl  { padding:        50px !important; }
				                /* padding-bottom */
				                    .xs-o-pb-xs { padding-bottom: 10px !important; }
				                    .xs-o-pb-sm { padding-bottom: 15px !important; }
				                    .xs-o-pb-md { padding-bottom: 20px !important; }
				                    .xs-o-pb-lg { padding-bottom: 30px !important; }
				                    .xs-o-pb-xl { padding-bottom: 50px !important; }
				                /* padding-top */
				                    .xs-o-pt-xs { padding-top:    10px !important; }
				                    .xs-o-pt-sm { padding-top:    15px !important; }
				                    .xs-o-pt-md { padding-top:    20px !important; }
				                    .xs-o-pt-lg { padding-top:    30px !important; }
				                    .xs-o-pt-xl { padding-top:    50px !important; }
				                /* padding-left */
				                    .xs-o-pl-xs { padding-left:   10px !important; }
				                    .xs-o-pl-sm { padding-left:   15px !important; }
				                    .xs-o-pl-md { padding-left:   20px !important; }
				                    .xs-o-pl-lg { padding-left:   30px !important; }
				                    .xs-o-pl-xl { padding-left:   50px !important; }
				                /* padding-right */
				                    .xs-o-pr-xs { padding-right:  10px !important; }
				                    .xs-o-pr-sm { padding-right:  15px !important; }
				                    .xs-o-pr-md { padding-right:  20px !important; }
				                    .xs-o-pr-lg { padding-right:  30px !important; }
				                    .xs-o-pr-xl { padding-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .xs-o-pv-xs { padding-top:    10px !important;  padding-bottom: 10px !important; }
				                    .xs-o-pv-sm { padding-top:    15px !important;  padding-bottom: 15px !important; }
				                    .xs-o-pv-md { padding-top:    20px !important;  padding-bottom: 20px !important; }
				                    .xs-o-pv-lg { padding-top:    30px !important;  padding-bottom: 30px !important; }
				                    .xs-o-pv-xl { padding-top:    50px !important;  padding-bottom: 50px !important; }

				                /* Horizontal - Left & Right */
				                    .xs-o-ph-xs { padding-left:   10px !important;  padding-right:  10px !important; }
				                    .xs-o-ph-sm { padding-left:   15px !important;  padding-right:  15px !important; }
				                    .xs-o-ph-md { padding-left:   20px !important;  padding-right:  20px !important; }
				                    .xs-o-ph-lg { padding-left:   30px !important;  padding-right:  30px !important; }
				                    .xs-o-ph-xl { padding-left:   50px !important;  padding-right:  50px !important; }
				            }

				            /* sm */
				            @media (min-width: 575.98px) {
				                /* All */
				                    .sm-p-xs    { padding:        10px !important; }
				                    .sm-p-sm    { padding:        15px !important; }
				                    .sm-p-md    { padding:        20px !important; }
				                    .sm-p-lg    { padding:        30px !important; }
				                    .sm-p-xl    { padding:        50px !important; }
				                /* padding-bottom */
				                    .sm-pb-xs   { padding-bottom: 10px !important; }
				                    .sm-pb-sm   { padding-bottom: 15px !important; }
				                    .sm-pb-md   { padding-bottom: 20px !important; }
				                    .sm-pb-lg   { padding-bottom: 30px !important; }
				                    .sm-pb-xl   { padding-bottom: 50px !important; }
				                /* padding-top */
				                    .sm-pt-xs   { padding-top:    10px !important; }
				                    .sm-pt-sm   { padding-top:    15px !important; }
				                    .sm-pt-md   { padding-top:    20px !important; }
				                    .sm-pt-lg   { padding-top:    30px !important; }
				                    .sm-pt-xl   { padding-top:    50px !important; }
				                /* padding-left */
				                    .sm-pl-xs   { padding-left:   10px !important; }
				                    .sm-pl-sm   { padding-left:   15px !important; }
				                    .sm-pl-md   { padding-left:   20px !important; }
				                    .sm-pl-lg   { padding-left:   30px !important; }
				                    .sm-pl-xl   { padding-left:   50px !important; }
				                /* padding-right */
				                    .sm-pr-xs   { padding-right:  10px !important; }
				                    .sm-pr-sm   { padding-right:  15px !important; }
				                    .sm-pr-md   { padding-right:  20px !important; }
				                    .sm-pr-lg   { padding-right:  30px !important; }
				                    .sm-pr-xl   { padding-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .sm-pv-xs   { padding-top:    10px !important;  padding-bottom: 10px !important; }
				                    .sm-pv-sm   { padding-top:    15px !important;  padding-bottom: 15px !important; }
				                    .sm-pv-md   { padding-top:    20px !important;  padding-bottom: 20px !important; }
				                    .sm-pv-lg   { padding-top:    30px !important;  padding-bottom: 30px !important; }
				                    .sm-pv-xl   { padding-top:    50px !important;  padding-bottom: 50px !important; }

				                /* Horizontal - Left & Right */
				                    .sm-ph-xs   { padding-left:   10px !important;  padding-right:  10px !important; }
				                    .sm-ph-sm   { padding-left:   15px !important;  padding-right:  15px !important; }
				                    .sm-ph-md   { padding-left:   20px !important;  padding-right:  20px !important; }
				                    .sm-ph-lg   { padding-left:   30px !important;  padding-right:  30px !important; }
				                    .sm-ph-xl   { padding-left:   50px !important;  padding-right:  50px !important; }
				            }

				            /* sm-only */
				            @media (min-width: 575.98px) and (max-width: 767.98px) {

				                /* All */
				                    .sm-o-p-xs  { padding:        10px !important; }
				                    .sm-o-p-sm  { padding:        15px !important; }
				                    .sm-o-p-md  { padding:        20px !important; }
				                    .sm-o-p-lg  { padding:        30px !important; }
				                    .sm-o-p-xl  { padding:        50px !important; }
				                /* padding-bottom */
				                    .sm-o-pb-xs { padding-bottom: 10px !important; }
				                    .sm-o-pb-sm { padding-bottom: 15px !important; }
				                    .sm-o-pb-md { padding-bottom: 20px !important; }
				                    .sm-o-pb-lg { padding-bottom: 30px !important; }
				                    .sm-o-pb-xl { padding-bottom: 50px !important; }
				                /* padding-top */
				                    .sm-o-pt-xs { padding-top:    10px !important; }
				                    .sm-o-pt-sm { padding-top:    15px !important; }
				                    .sm-o-pt-md { padding-top:    20px !important; }
				                    .sm-o-pt-lg { padding-top:    30px !important; }
				                    .sm-o-pt-xl { padding-top:    50px !important; }
				                /* padding-left */
				                    .sm-o-pl-xs { padding-left:   10px !important; }
				                    .sm-o-pl-sm { padding-left:   15px !important; }
				                    .sm-o-pl-md { padding-left:   20px !important; }
				                    .sm-o-pl-lg { padding-left:   30px !important; }
				                    .sm-o-pl-xl { padding-left:   50px !important; }
				                /* padding-right */
				                    .sm-o-pr-xs { padding-right:  10px !important; }
				                    .sm-o-pr-sm { padding-right:  15px !important; }
				                    .sm-o-pr-md { padding-right:  20px !important; }
				                    .sm-o-pr-lg { padding-right:  30px !important; }
				                    .sm-o-pr-xl { padding-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .sm-o-pv-xs { padding-top:    10px !important;  padding-bottom: 10px !important; }
				                    .sm-o-pv-sm { padding-top:    15px !important;  padding-bottom: 15px !important; }
				                    .sm-o-pv-md { padding-top:    20px !important;  padding-bottom: 20px !important; }
				                    .sm-o-pv-lg { padding-top:    30px !important;  padding-bottom: 30px !important; }
				                    .sm-o-pv-xl { padding-top:    50px !important;  padding-bottom: 50px !important; }

				                /* Horizontal - Left & Right */
				                    .sm-o-ph-xs { padding-left:   10px !important;  padding-right:  10px !important; }
				                    .sm-o-ph-sm { padding-left:   15px !important;  padding-right:  15px !important; }
				                    .sm-o-ph-md { padding-left:   20px !important;  padding-right:  20px !important; }
				                    .sm-o-ph-lg { padding-left:   30px !important;  padding-right:  30px !important; }
				                    .sm-o-ph-xl { padding-left:   50px !important;  padding-right:  50px !important; }
				            }

				            /* md */
				            @media (min-width: 767.98px) {
				                /* All */
				                    .md-p-xs    { padding:        10px !important; }
				                    .md-p-sm    { padding:        15px !important; }
				                    .md-p-md    { padding:        20px !important; }
				                    .md-p-lg    { padding:        30px !important; }
				                    .md-p-xl    { padding:        50px !important; }
				                /* padding-bottom */
				                    .md-pb-xs   { padding-bottom: 10px !important; }
				                    .md-pb-sm   { padding-bottom: 15px !important; }
				                    .md-pb-md   { padding-bottom: 20px !important; }
				                    .md-pb-lg   { padding-bottom: 30px !important; }
				                    .md-pb-xl   { padding-bottom: 50px !important; }
				                /* padding-top */
				                    .md-pt-xs   { padding-top:    10px !important; }
				                    .md-pt-sm   { padding-top:    15px !important; }
				                    .md-pt-md   { padding-top:    20px !important; }
				                    .md-pt-lg   { padding-top:    30px !important; }
				                    .md-pt-xl   { padding-top:    50px !important; }
				                /* padding-left */
				                    .md-pl-xs   { padding-left:   10px !important; }
				                    .md-pl-sm   { padding-left:   15px !important; }
				                    .md-pl-md   { padding-left:   20px !important; }
				                    .md-pl-lg   { padding-left:   30px !important; }
				                    .md-pl-xl   { padding-left:   50px !important; }
				                /* padding-right */
				                    .md-pr-xs   { padding-right:  10px !important; }
				                    .md-pr-sm   { padding-right:  15px !important; }
				                    .md-pr-md   { padding-right:  20px !important; }
				                    .md-pr-lg   { padding-right:  30px !important; }
				                    .md-pr-xl   { padding-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .md-pv-xs   { padding-top:    10px !important;  padding-bottom: 10px !important; }
				                    .md-pv-sm   { padding-top:    15px !important;  padding-bottom: 15px !important; }
				                    .md-pv-md   { padding-top:    20px !important;  padding-bottom: 20px !important; }
				                    .md-pv-lg   { padding-top:    30px !important;  padding-bottom: 30px !important; }
				                    .md-pv-xl   { padding-top:    50px !important;  padding-bottom: 50px !important; }

				                /* Horizontal - Left & Right */
				                    .md-ph-xs   { padding-left:   10px !important;  padding-right:  10px !important; }
				                    .md-ph-sm   { padding-left:   15px !important;  padding-right:  15px !important; }
				                    .md-ph-md   { padding-left:   20px !important;  padding-right:  20px !important; }
				                    .md-ph-lg   { padding-left:   30px !important;  padding-right:  30px !important; }
				                    .md-ph-xl   { padding-left:   50px !important;  padding-right:  50px !important; }
				            }

				            /* md-only */
				            @media (min-width: 767.98px) and (max-width: 991.98px) {

				                /* All */
				                    .md-o-p-xs  { padding:        10px !important; }
				                    .md-o-p-sm  { padding:        15px !important; }
				                    .md-o-p-md  { padding:        20px !important; }
				                    .md-o-p-lg  { padding:        30px !important; }
				                    .md-o-p-xl  { padding:        50px !important; }
				                /* padding-bottom */
				                    .md-o-pb-xs { padding-bottom: 10px !important; }
				                    .md-o-pb-sm { padding-bottom: 15px !important; }
				                    .md-o-pb-md { padding-bottom: 20px !important; }
				                    .md-o-pb-lg { padding-bottom: 30px !important; }
				                    .md-o-pb-xl { padding-bottom: 50px !important; }
				                /* padding-top */
				                    .md-o-pt-xs { padding-top:    10px !important; }
				                    .md-o-pt-sm { padding-top:    15px !important; }
				                    .md-o-pt-md { padding-top:    20px !important; }
				                    .md-o-pt-lg { padding-top:    30px !important; }
				                    .md-o-pt-xl { padding-top:    50px !important; }
				                /* padding-left */
				                    .md-o-pl-xs { padding-left:   10px !important; }
				                    .md-o-pl-sm { padding-left:   15px !important; }
				                    .md-o-pl-md { padding-left:   20px !important; }
				                    .md-o-pl-lg { padding-left:   30px !important; }
				                    .md-o-pl-xl { padding-left:   50px !important; }
				                /* padding-right */
				                    .md-o-pr-xs { padding-right:  10px !important; }
				                    .md-o-pr-sm { padding-right:  15px !important; }
				                    .md-o-pr-md { padding-right:  20px !important; }
				                    .md-o-pr-lg { padding-right:  30px !important; }
				                    .md-o-pr-xl { padding-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .md-o-pv-xs { padding-top:    10px !important;  padding-bottom: 10px !important; }
				                    .md-o-pv-sm { padding-top:    15px !important;  padding-bottom: 15px !important; }
				                    .md-o-pv-md { padding-top:    20px !important;  padding-bottom: 20px !important; }
				                    .md-o-pv-lg { padding-top:    30px !important;  padding-bottom: 30px !important; }
				                    .md-o-pv-xl { padding-top:    50px !important;  padding-bottom: 50px !important; }

				                /* Horizontal - Left & Right */
				                    .md-o-ph-xs { padding-left:   10px !important;  padding-right:  10px !important; }
				                    .md-o-ph-sm { padding-left:   15px !important;  padding-right:  15px !important; }
				                    .md-o-ph-md { padding-left:   20px !important;  padding-right:  20px !important; }
				                    .md-o-ph-lg { padding-left:   30px !important;  padding-right:  30px !important; }
				                    .md-o-ph-xl { padding-left:   50px !important;  padding-right:  50px !important; }
				            }

				            /* lg */
				            @media (min-width: 991.98px) {

				                /* All */
				                    .lg-p-xs    { padding:        10px !important; }
				                    .lg-p-sm    { padding:        15px !important; }
				                    .lg-p-md    { padding:        20px !important; }
				                    .lg-p-lg    { padding:        30px !important; }
				                    .lg-p-xl    { padding:        50px !important; }
				                /* padding-bottom */
				                    .lg-pb-xs   { padding-bottom: 10px !important; }
				                    .lg-pb-sm   { padding-bottom: 15px !important; }
				                    .lg-pb-md   { padding-bottom: 20px !important; }
				                    .lg-pb-lg   { padding-bottom: 30px !important; }
				                    .lg-pb-xl   { padding-bottom: 50px !important; }
				                /* padding-top */
				                    .lg-pt-xs   { padding-top:    10px !important; }
				                    .lg-pt-sm   { padding-top:    15px !important; }
				                    .lg-pt-md   { padding-top:    20px !important; }
				                    .lg-pt-lg   { padding-top:    30px !important; }
				                    .lg-pt-xl   { padding-top:    50px !important; }
				                /* padding-left */
				                    .lg-pl-xs   { padding-left:   10px !important; }
				                    .lg-pl-sm   { padding-left:   15px !important; }
				                    .lg-pl-md   { padding-left:   20px !important; }
				                    .lg-pl-lg   { padding-left:   30px !important; }
				                    .lg-pl-xl   { padding-left:   50px !important; }
				                /* padding-right */
				                    .lg-pr-xs   { padding-right:  10px !important; }
				                    .lg-pr-sm   { padding-right:  15px !important; }
				                    .lg-pr-md   { padding-right:  20px !important; }
				                    .lg-pr-lg   { padding-right:  30px !important; }
				                    .lg-pr-xl   { padding-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .lg-pv-xs   { padding-top:    10px !important;  padding-bottom: 10px !important; }
				                    .lg-pv-sm   { padding-top:    15px !important;  padding-bottom: 15px !important; }
				                    .lg-pv-md   { padding-top:    20px !important;  padding-bottom: 20px !important; }
				                    .lg-pv-lg   { padding-top:    30px !important;  padding-bottom: 30px !important; }
				                    .lg-pv-xl   { padding-top:    50px !important;  padding-bottom: 50px !important; }

				                /* Horizontal - Left & Right */
				                    .lg-ph-xs   { padding-left:   10px !important;  padding-right:  10px !important; }
				                    .lg-ph-sm   { padding-left:   15px !important;  padding-right:  15px !important; }
				                    .lg-ph-md   { padding-left:   20px !important;  padding-right:  20px !important; }
				                    .lg-ph-lg   { padding-left:   30px !important;  padding-right:  30px !important; }
				                    .lg-ph-xl   { padding-left:   50px !important;  padding-right:  50px !important; }
				            }

				            /* lg-only */
				            @media (min-width: 991.98px) and (max-width: 1199.98px) {

				                /* All */
				                    .lg-o-p-xs  { padding:        10px !important; }
				                    .lg-o-p-sm  { padding:        15px !important; }
				                    .lg-o-p-md  { padding:        20px !important; }
				                    .lg-o-p-lg  { padding:        30px !important; }
				                    .lg-o-p-xl  { padding:        50px !important; }
				                /* Margin-bottom */
				                    .lg-o-pb-xs { padding-bottom: 10px !important; }
				                    .lg-o-pb-sm { padding-bottom: 15px !important; }
				                    .lg-o-pb-md { padding-bottom: 20px !important; }
				                    .lg-o-pb-lg { padding-bottom: 30px !important; }
				                    .lg-o-pb-xl { padding-bottom: 50px !important; }
				                /* padding-top */
				                    .lg-o-pt-xs { padding-top:    10px !important; }
				                    .lg-o-pt-sm { padding-top:    15px !important; }
				                    .lg-o-pt-md { padding-top:    20px !important; }
				                    .lg-o-pt-lg { padding-top:    30px !important; }
				                    .lg-o-pt-xl { padding-top:    50px !important; }
				                /* padding-left */
				                    .lg-o-pl-xs { padding-left:   10px !important; }
				                    .lg-o-pl-sm { padding-left:   15px !important; }
				                    .lg-o-pl-md { padding-left:   20px !important; }
				                    .lg-o-pl-lg { padding-left:   30px !important; }
				                    .lg-o-pl-xl { padding-left:   50px !important; }
				                /* padding-right */
				                    .lg-o-pr-xs { padding-right:  10px !important; }
				                    .lg-o-pr-sm { padding-right:  15px !important; }
				                    .lg-o-pr-md { padding-right:  20px !important; }
				                    .lg-o-pr-lg { padding-right:  30px !important; }
				                    .lg-o-pr-xl { padding-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .lg-o-pv-xs { padding-top:    10px !important;  padding-bottom: 10px !important; }
				                    .lg-o-pv-sm { padding-top:    15px !important;  padding-bottom: 15px !important; }
				                    .lg-o-pv-md { padding-top:    20px !important;  padding-bottom: 20px !important; }
				                    .lg-o-pv-lg { padding-top:    30px !important;  padding-bottom: 30px !important; }
				                    .lg-o-pv-xl { padding-top:    50px !important;  padding-bottom: 50px !important; }

				                /* Horizontal - Left & Right */
				                    .lg-o-ph-xs { padding-left:   10px !important;  padding-right:  10px !important; }
				                    .lg-o-ph-sm { padding-left:   15px !important;  padding-right:  15px !important; }
				                    .lg-o-ph-md { padding-left:   20px !important;  padding-right:  20px !important; }
				                    .lg-o-ph-lg { padding-left:   30px !important;  padding-right:  30px !important; }
				                    .lg-o-ph-xl { padding-left:   50px !important;  padding-right:  50px !important; }
				            }

				            /* xl */
				            @media (min-width: 1199.98px) {

				                /* All */
				                    .xl-p-xs    { padding:        10px !important; }
				                    .xl-p-sm    { padding:        15px !important; }
				                    .xl-p-md    { padding:        20px !important; }
				                    .xl-p-lg    { padding:        30px !important; }
				                    .xl-p-xl    { padding:        50px !important; }
				                /* padding-bottom */
				                    .xl-pb-xs   { padding-bottom: 10px !important; }
				                    .xl-pb-sm   { padding-bottom: 15px !important; }
				                    .xl-pb-md   { padding-bottom: 20px !important; }
				                    .xl-pb-lg   { padding-bottom: 30px !important; }
				                    .xl-pb-xl   { padding-bottom: 50px !important; }
				                /* padding-top */
				                    .xl-pt-xs   { padding-top:    10px !important; }
				                    .xl-pt-sm   { padding-top:    15px !important; }
				                    .xl-pt-md   { padding-top:    20px !important; }
				                    .xl-pt-lg   { padding-top:    30px !important; }
				                    .xl-pt-xl   { padding-top:    50px !important; }
				                /* padding-left */
				                    .xl-pl-xs   { padding-left:   10px !important; }
				                    .xl-pl-sm   { padding-left:   15px !important; }
				                    .xl-pl-md   { padding-left:   20px !important; }
				                    .xl-pl-lg   { padding-left:   30px !important; }
				                    .xl-pl-xl   { padding-left:   50px !important; }
				                /* padding-right */
				                    .xl-pr-xs   { padding-right:  10px !important; }
				                    .xl-pr-sm   { padding-right:  15px !important; }
				                    .xl-pr-md   { padding-right:  20px !important; }
				                    .xl-pr-lg   { padding-right:  30px !important; }
				                    .xl-pr-xl   { padding-right:  50px !important; }

				                /* Vertical - Top & Bottom */
				                    .xl-pv-xs   { padding-top:    10px !important;  padding-bottom: 10px !important; }
				                    .xl-pv-sm   { padding-top:    15px !important;  padding-bottom: 15px !important; }
				                    .xl-pv-md   { padding-top:    20px !important;  padding-bottom: 20px !important; }
				                    .xl-pv-lg   { padding-top:    30px !important;  padding-bottom: 30px !important; }
				                    .xl-pv-xl   { padding-top:    50px !important;  padding-bottom: 50px !important; }

				                /* Horizontal - Left & Right */
				                    .xl-ph-xs   { padding-left:   10px !important;  padding-right:  10px !important; }
				                    .xl-ph-sm   { padding-left:   15px !important;  padding-right:  15px !important; }
				                    .xl-ph-md   { padding-left:   20px !important;  padding-right:  20px !important; }
				                    .xl-ph-lg   { padding-left:   30px !important;  padding-right:  30px !important; }
				                    .xl-ph-xl   { padding-left:   50px !important;  padding-right:  50px !important; }
				            }
				    `
				    },

				// margin-auto
				    {
				    name : 'margin-auto' ,
				    code :    
				    `        /* Margin-vertical-auto */
				        /* -------------------------------------------- */

				            /* All viewports */
				                    .mh-auto {
				                        display: block !important;      float: none;
				                        margin-left: auto !important;   margin-right: auto !important; 
				                    }

				            /* xs-only */
				                @media (max-width: 575.98px) {
				                    .xs-o-mh-auto  {    
				                        display: block !important;      float: none;
				                        margin-left: auto !important;   margin-right: auto !important; 
				                    }
				                }

				            /* sm */
				                @media (min-width: 575.98px) {
				                    .sm-mh-auto  {  
				                        display: block !important;      float: none;
				                        margin-left: auto !important;   margin-right: auto !important; 
				                    }
				                }

				            /* sm-only */
				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-mh-auto  {    
				                        display: block !important;      float: none;
				                        margin-left: auto !important;   margin-right: auto !important; 
				                    }
				                }

				            /* md */
				                @media (min-width: 767.98px) {
				                    .md-mh-auto  {  
				                        display: block !important;      float: none;
				                        margin-left: auto !important;   margin-right: auto !important; 
				                    }
				                }

				            /* md-only */
				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-mh-auto  {    
				                        display: block !important;      float: none;
				                        margin-left: auto !important;   margin-right: auto !important; 
				                    }
				                }

				            /* lg */
				                @media (min-width: 991.98px) {
				                    .lg-mh-auto  {  
				                        display: block !important;      float: none;
				                        margin-left: auto !important;   margin-right: auto !important; 
				                    }
				                }

				            /* lg-only */
				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-mh-auto  {    
				                        display: block !important;      float: none;
				                        margin-left: auto !important;   margin-right: auto !important; 
				                    }
				                }

				            /* xl | xl-only */
				                @media (min-width: 1199.98px) {
				                    .xl-mh-auto {
				                        display: block !important;      float: none;
				                        margin-left: auto !important;   margin-right: auto !important; 
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
