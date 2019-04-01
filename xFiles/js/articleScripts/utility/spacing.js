
	(function(){

		var demoItemsArray = [ 
            'padding-offsets' , 'padding-offsets-resp' ,
            'margin-offsets'  , 'margin-offsets-resp'  
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

				// padding-offsets
				    {
				    name : 'padding-offsets' ,
				    code :    
				    `        /* Override Paddings */
				        /* -------------------------------------------- */

				            /* All viewports */

				                /* All */
				                    .p-0        { padding:          0   !important; }
				                    .p-xs       { padding:        7.5px !important; }
				                    .p-sm       { padding:         10px !important; }
				                    .p-md       { padding:         15px !important; }
				                    .p-lg       { padding:         30px !important; }
				                    .p-xl       { padding:         60px !important; }
				                /* padding-bottom */
				                    .pb-0       { padding-bottom:   0   !important; }
				                    .pb-xs      { padding-bottom: 7.5px !important; }
				                    .pb-sm      { padding-bottom:  10px !important; }
				                    .pb-md      { padding-bottom:  15px !important; }
				                    .pb-lg      { padding-bottom:  30px !important; }
				                    .pb-xl      { padding-bottom:  60px !important; }
				                /* padding-top */
				                    .pt-0       { padding-top:      0   !important; }
				                    .pt-xs      { padding-top:    7.5px !important; }
				                    .pt-sm      { padding-top:     10px !important; }
				                    .pt-md      { padding-top:     15px !important; }
				                    .pt-lg      { padding-top:     30px !important; }
				                    .pt-xl      { padding-top:     60px !important; }
				                /* padding-left */
				                    .pl-0       { padding-left:     0   !important; }
				                    .pl-xs      { padding-left:   7.5px !important; }
				                    .pl-sm      { padding-left:    10px !important; }
				                    .pl-md      { padding-left:    15px !important; }
				                    .pl-lg      { padding-left:    30px !important; }
				                    .pl-xl      { padding-left:    60px !important; }
				                /* padding-right */
				                    .pr-0       { padding-right:    0   !important; }
				                    .pr-xs      { padding-right:  7.5px !important; }
				                    .pr-sm      { padding-right:   10px !important; }
				                    .pr-md      { padding-right:   15px !important; }
				                    .pr-lg      { padding-right:   30px !important; }
				                    .pr-xl      { padding-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .py-0       { padding-top:      0   !important;  padding-bottom:   0   !important; }
				                    .py-xs      { padding-top:    7.5px !important;  padding-bottom: 7.5px !important; }
				                    .py-sm      { padding-top:     10px !important;  padding-bottom:  10px !important; }
				                    .py-md      { padding-top:     15px !important;  padding-bottom:  15px !important; }
				                    .py-lg      { padding-top:     30px !important;  padding-bottom:  30px !important; }
				                    .py-xl      { padding-top:     60px !important;  padding-bottom:  60px !important; }

				                /* Horizontal - Left & Right */
			                    .px-0       { padding-left:     0   !important;  padding-right:    0   !important; }
			                    .px-xs      { padding-left:   7.5px !important;  padding-right:  7.5px !important; }
			                    .px-sm      { padding-left:    10px !important;  padding-right:   10px !important; }
			                    .px-md      { padding-left:    15px !important;  padding-right:   15px !important; }
			                    .px-lg      { padding-left:    30px !important;  padding-right:   30px !important; }
			                    .px-xl      { padding-left:    60px !important;  padding-right:   60px !important; }
							    `
							    },

				// padding-offsets-resp
				    {
				    name : 'padding-offsets-resp' ,
				    code :    
				    `            /* xs-only */
				            @media (max-width: 575.98px) {

				                /* All */
				                    .xs-o-p-0   { padding:          0   !important; }
				                    .xs-o-p-xs  { padding:        7.5px !important; }
				                    .xs-o-p-sm  { padding:         10px !important; }
				                    .xs-o-p-md  { padding:         15px !important; }
				                    .xs-o-p-lg  { padding:         30px !important; }
				                    .xs-o-p-xl  { padding:         60px !important; }
				                /* padding-bottom */
				                    .xs-o-pb-0  { padding-bottom:   0   !important; }
				                    .xs-o-pb-xs { padding-bottom: 7.5px !important; }
				                    .xs-o-pb-sm { padding-bottom:  10px !important; }
				                    .xs-o-pb-md { padding-bottom:  15px !important; }
				                    .xs-o-pb-lg { padding-bottom:  30px !important; }
				                    .xs-o-pb-xl { padding-bottom:  60px !important; }
				                /* padding-top */
				                    .xs-o-pt-0  { padding-top:      0   !important; }
				                    .xs-o-pt-xs { padding-top:    7.5px !important; }
				                    .xs-o-pt-sm { padding-top:     10px !important; }
				                    .xs-o-pt-md { padding-top:     15px !important; }
				                    .xs-o-pt-lg { padding-top:     30px !important; }
				                    .xs-o-pt-xl { padding-top:     60px !important; }
				                /* padding-left */
				                    .xs-o-pl-0  { padding-left:     0   !important; }
				                    .xs-o-pl-xs { padding-left:   7.5px !important; }
				                    .xs-o-pl-sm { padding-left:    10px !important; }
				                    .xs-o-pl-md { padding-left:    15px !important; }
				                    .xs-o-pl-lg { padding-left:    30px !important; }
				                    .xs-o-pl-xl { padding-left:    60px !important; }
				                /* padding-right */
				                    .xs-o-pr-0  { padding-right:    0   !important; }
				                    .xs-o-pr-xs { padding-right:  7.5px !important; }
				                    .xs-o-pr-sm { padding-right:   10px !important; }
				                    .xs-o-pr-md { padding-right:   15px !important; }
				                    .xs-o-pr-lg { padding-right:   30px !important; }
				                    .xs-o-pr-xl { padding-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .xs-o-py-0  { padding-top:      0   !important;  padding-bottom:   0   !important; }
				                    .xs-o-py-xs { padding-top:    7.5px !important;  padding-bottom: 7.5px !important; }
				                    .xs-o-py-sm { padding-top:     10px !important;  padding-bottom:  10px !important; }
				                    .xs-o-py-md { padding-top:     15px !important;  padding-bottom:  15px !important; }
				                    .xs-o-py-lg { padding-top:     30px !important;  padding-bottom:  30px !important; }
				                    .xs-o-py-xl { padding-top:     60px !important;  padding-bottom:  60px !important; }

				                /* Horizontal - Left & Right */
				                    .xs-o-px-0  { padding-left:     0   !important;  padding-right:    0   !important; }
				                    .xs-o-px-xs { padding-left:   7.5px !important;  padding-right:  7.5px !important; }
				                    .xs-o-px-sm { padding-left:    10px !important;  padding-right:   10px !important; }
				                    .xs-o-px-md { padding-left:    15px !important;  padding-right:   15px !important; }
				                    .xs-o-px-lg { padding-left:    30px !important;  padding-right:   30px !important; }
				                    .xs-o-px-xl { padding-left:    60px !important;  padding-right:   60px !important; }
				            }

				            /* sm */
				            @media (min-width: 575.98px) {
				                /* All */
				                    .sm-p-0     { padding:          0   !important; }
				                    .sm-p-xs    { padding:        7.5px !important; }
				                    .sm-p-sm    { padding:         10px !important; }
				                    .sm-p-md    { padding:         15px !important; }
				                    .sm-p-lg    { padding:         30px !important; }
				                    .sm-p-xl    { padding:         60px !important; }
				                /* padding-bottom */
				                    .sm-pb-0    { padding-bottom:   0   !important; }
				                    .sm-pb-xs   { padding-bottom: 7.5px !important; }
				                    .sm-pb-sm   { padding-bottom:  10px !important; }
				                    .sm-pb-md   { padding-bottom:  15px !important; }
				                    .sm-pb-lg   { padding-bottom:  30px !important; }
				                    .sm-pb-xl   { padding-bottom:  60px !important; }
				                /* padding-top */
				                    .sm-pt-0    { padding-top:      0   !important; }
				                    .sm-pt-xs   { padding-top:    7.5px !important; }
				                    .sm-pt-sm   { padding-top:     10px !important; }
				                    .sm-pt-md   { padding-top:     15px !important; }
				                    .sm-pt-lg   { padding-top:     30px !important; }
				                    .sm-pt-xl   { padding-top:     60px !important; }
				                /* padding-left */
				                    .sm-pl-0    { padding-left:     0   !important; }
				                    .sm-pl-xs   { padding-left:   7.5px !important; }
				                    .sm-pl-sm   { padding-left:    10px !important; }
				                    .sm-pl-md   { padding-left:    15px !important; }
				                    .sm-pl-lg   { padding-left:    30px !important; }
				                    .sm-pl-xl   { padding-left:    60px !important; }
				                /* padding-right */
				                    .sm-pr-0    { padding-right:    0   !important; }
				                    .sm-pr-xs   { padding-right:  7.5px !important; }
				                    .sm-pr-sm   { padding-right:   10px !important; }
				                    .sm-pr-md   { padding-right:   15px !important; }
				                    .sm-pr-lg   { padding-right:   30px !important; }
				                    .sm-pr-xl   { padding-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .sm-py-0    { padding-top:      0   !important;  padding-bottom:   0   !important; }
				                    .sm-py-xs   { padding-top:    7.5px !important;  padding-bottom: 7.5px !important; }
				                    .sm-py-sm   { padding-top:     10px !important;  padding-bottom:  10px !important; }
				                    .sm-py-md   { padding-top:     15px !important;  padding-bottom:  15px !important; }
				                    .sm-py-lg   { padding-top:     30px !important;  padding-bottom:  30px !important; }
				                    .sm-py-xl   { padding-top:     60px !important;  padding-bottom:  60px !important; }

				                /* Horizontal - Left & Right */
				                    .sm-px-0    { padding-left:     0   !important;  padding-right:    0   !important; }
				                    .sm-px-xs   { padding-left:   7.5px !important;  padding-right:  7.5px !important; }
				                    .sm-px-sm   { padding-left:    10px !important;  padding-right:   10px !important; }
				                    .sm-px-md   { padding-left:    15px !important;  padding-right:   15px !important; }
				                    .sm-px-lg   { padding-left:    30px !important;  padding-right:   30px !important; }
				                    .sm-px-xl   { padding-left:    60px !important;  padding-right:   60px !important; }
				            }

				            /* sm-only */
				            @media (min-width: 575.98px) and (max-width: 767.98px) {

				                /* All */
				                    .sm-o-p-0   { padding:          0   !important; }
				                    .sm-o-p-xs  { padding:        7.5px !important; }
				                    .sm-o-p-sm  { padding:         10px !important; }
				                    .sm-o-p-md  { padding:         15px !important; }
				                    .sm-o-p-lg  { padding:         30px !important; }
				                    .sm-o-p-xl  { padding:         60px !important; }
				                /* padding-bottom */
				                    .sm-o-pb-0  { padding-bottom:   0   !important; }
				                    .sm-o-pb-xs { padding-bottom: 7.5px !important; }
				                    .sm-o-pb-sm { padding-bottom:  10px !important; }
				                    .sm-o-pb-md { padding-bottom:  15px !important; }
				                    .sm-o-pb-lg { padding-bottom:  30px !important; }
				                    .sm-o-pb-xl { padding-bottom:  60px !important; }
				                /* padding-top */
				                    .sm-o-pt-0  { padding-top:      0   !important; }
				                    .sm-o-pt-xs { padding-top:    7.5px !important; }
				                    .sm-o-pt-sm { padding-top:     10px !important; }
				                    .sm-o-pt-md { padding-top:     15px !important; }
				                    .sm-o-pt-lg { padding-top:     30px !important; }
				                    .sm-o-pt-xl { padding-top:     60px !important; }
				                /* padding-left */
				                    .sm-o-pl-0  { padding-left:     0   !important; }
				                    .sm-o-pl-xs { padding-left:   7.5px !important; }
				                    .sm-o-pl-sm { padding-left:    10px !important; }
				                    .sm-o-pl-md { padding-left:    15px !important; }
				                    .sm-o-pl-lg { padding-left:    30px !important; }
				                    .sm-o-pl-xl { padding-left:    60px !important; }
				                /* padding-right */
				                    .sm-o-pr-0  { padding-right:    0   !important; }
				                    .sm-o-pr-xs { padding-right:  7.5px !important; }
				                    .sm-o-pr-sm { padding-right:   10px !important; }
				                    .sm-o-pr-md { padding-right:   15px !important; }
				                    .sm-o-pr-lg { padding-right:   30px !important; }
				                    .sm-o-pr-xl { padding-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .sm-o-py-0  { padding-top:      0   !important;  padding-bottom:   0   !important; }
				                    .sm-o-py-xs { padding-top:    7.5px !important;  padding-bottom: 7.5px !important; }
				                    .sm-o-py-sm { padding-top:     10px !important;  padding-bottom:  10px !important; }
				                    .sm-o-py-md { padding-top:     15px !important;  padding-bottom:  15px !important; }
				                    .sm-o-py-lg { padding-top:     30px !important;  padding-bottom:  30px !important; }
				                    .sm-o-py-xl { padding-top:     60px !important;  padding-bottom:  60px !important; }

				                /* Horizontal - Left & Right */
				                    .sm-o-px-0  { padding-left:     0   !important;  padding-right:    0   !important; }
				                    .sm-o-px-xs { padding-left:   7.5px !important;  padding-right:  7.5px !important; }
				                    .sm-o-px-sm { padding-left:    10px !important;  padding-right:   10px !important; }
				                    .sm-o-px-md { padding-left:    15px !important;  padding-right:   15px !important; }
				                    .sm-o-px-lg { padding-left:    30px !important;  padding-right:   30px !important; }
				                    .sm-o-px-xl { padding-left:    60px !important;  padding-right:   60px !important; }
				            }

				            /* md */
				            @media (min-width: 767.98px) {
				                /* All */
				                    .md-p-0     { padding:          0   !important; }
				                    .md-p-xs    { padding:        7.5px !important; }
				                    .md-p-sm    { padding:         10px !important; }
				                    .md-p-md    { padding:         15px !important; }
				                    .md-p-lg    { padding:         30px !important; }
				                    .md-p-xl    { padding:         60px !important; }
				                /* padding-bottom */
				                    .md-pb-0    { padding-bottom:   0   !important; }
				                    .md-pb-xs   { padding-bottom: 7.5px !important; }
				                    .md-pb-sm   { padding-bottom:  10px !important; }
				                    .md-pb-md   { padding-bottom:  15px !important; }
				                    .md-pb-lg   { padding-bottom:  30px !important; }
				                    .md-pb-xl   { padding-bottom:  60px !important; }
				                /* padding-top */
				                    .md-pt-0    { padding-top:      0   !important; }
				                    .md-pt-xs   { padding-top:    7.5px !important; }
				                    .md-pt-sm   { padding-top:     10px !important; }
				                    .md-pt-md   { padding-top:     15px !important; }
				                    .md-pt-lg   { padding-top:     30px !important; }
				                    .md-pt-xl   { padding-top:     60px !important; }
				                /* padding-left */
				                    .md-pl-0    { padding-left:     0   !important; }
				                    .md-pl-xs   { padding-left:   7.5px !important; }
				                    .md-pl-sm   { padding-left:    10px !important; }
				                    .md-pl-md   { padding-left:    15px !important; }
				                    .md-pl-lg   { padding-left:    30px !important; }
				                    .md-pl-xl   { padding-left:    60px !important; }
				                /* padding-right */
				                    .md-pr-0    { padding-right:    0   !important; }
				                    .md-pr-xs   { padding-right:  7.5px !important; }
				                    .md-pr-sm   { padding-right:   10px !important; }
				                    .md-pr-md   { padding-right:   15px !important; }
				                    .md-pr-lg   { padding-right:   30px !important; }
				                    .md-pr-xl   { padding-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .md-py-0    { padding-top:      0   !important;  padding-bottom:   0   !important; }
				                    .md-py-xs   { padding-top:    7.5px !important;  padding-bottom: 7.5px !important; }
				                    .md-py-sm   { padding-top:     10px !important;  padding-bottom:  10px !important; }
				                    .md-py-md   { padding-top:     15px !important;  padding-bottom:  15px !important; }
				                    .md-py-lg   { padding-top:     30px !important;  padding-bottom:  30px !important; }
				                    .md-py-xl   { padding-top:     60px !important;  padding-bottom:  60px !important; }

				                /* Horizontal - Left & Right */
				                    .md-px-0    { padding-left:     0   !important;  padding-right:    0   !important; }
				                    .md-px-xs   { padding-left:   7.5px !important;  padding-right:  7.5px !important; }
				                    .md-px-sm   { padding-left:    10px !important;  padding-right:   10px !important; }
				                    .md-px-md   { padding-left:    15px !important;  padding-right:   15px !important; }
				                    .md-px-lg   { padding-left:    30px !important;  padding-right:   30px !important; }
				                    .md-px-xl   { padding-left:    60px !important;  padding-right:   60px !important; }
				            }

				            /* md-only */
				            @media (min-width: 767.98px) and (max-width: 991.98px) {

				                /* All */
				                    .md-o-p-0   { padding:          0   !important; }
				                    .md-o-p-xs  { padding:        7.5px !important; }
				                    .md-o-p-sm  { padding:         10px !important; }
				                    .md-o-p-md  { padding:         15px !important; }
				                    .md-o-p-lg  { padding:         30px !important; }
				                    .md-o-p-xl  { padding:         60px !important; }
				                /* padding-bottom */
				                    .md-o-pb-0  { padding-bottom:   0   !important; }
				                    .md-o-pb-xs { padding-bottom: 7.5px !important; }
				                    .md-o-pb-sm { padding-bottom:  10px !important; }
				                    .md-o-pb-md { padding-bottom:  15px !important; }
				                    .md-o-pb-lg { padding-bottom:  30px !important; }
				                    .md-o-pb-xl { padding-bottom:  60px !important; }
				                /* padding-top */
				                    .md-o-pt-0  { padding-top:      0   !important; }
				                    .md-o-pt-xs { padding-top:    7.5px !important; }
				                    .md-o-pt-sm { padding-top:     10px !important; }
				                    .md-o-pt-md { padding-top:     15px !important; }
				                    .md-o-pt-lg { padding-top:     30px !important; }
				                    .md-o-pt-xl { padding-top:     60px !important; }
				                /* padding-left */
				                    .md-o-pl-0  { padding-left:     0   !important; }
				                    .md-o-pl-xs { padding-left:   7.5px !important; }
				                    .md-o-pl-sm { padding-left:    10px !important; }
				                    .md-o-pl-md { padding-left:    15px !important; }
				                    .md-o-pl-lg { padding-left:    30px !important; }
				                    .md-o-pl-xl { padding-left:    60px !important; }
				                /* padding-right */
				                    .md-o-pr-0  { padding-right:    0   !important; }
				                    .md-o-pr-xs { padding-right:  7.5px !important; }
				                    .md-o-pr-sm { padding-right:   10px !important; }
				                    .md-o-pr-md { padding-right:   15px !important; }
				                    .md-o-pr-lg { padding-right:   30px !important; }
				                    .md-o-pr-xl { padding-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .md-o-py-0  { padding-top:      0   !important;  padding-bottom:   0   !important; }
				                    .md-o-py-xs { padding-top:    7.5px !important;  padding-bottom: 7.5px !important; }
				                    .md-o-py-sm { padding-top:     10px !important;  padding-bottom:  10px !important; }
				                    .md-o-py-md { padding-top:     15px !important;  padding-bottom:  15px !important; }
				                    .md-o-py-lg { padding-top:     30px !important;  padding-bottom:  30px !important; }
				                    .md-o-py-xl { padding-top:     60px !important;  padding-bottom:  60px !important; }

				                /* Horizontal - Left & Right */
				                    .md-o-px-0  { padding-left:     0   !important;  padding-right:    0   !important; }
				                    .md-o-px-xs { padding-left:   7.5px !important;  padding-right:  7.5px !important; }
				                    .md-o-px-sm { padding-left:    10px !important;  padding-right:   10px !important; }
				                    .md-o-px-md { padding-left:    15px !important;  padding-right:   15px !important; }
				                    .md-o-px-lg { padding-left:    30px !important;  padding-right:   30px !important; }
				                    .md-o-px-xl { padding-left:    60px !important;  padding-right:   60px !important; }
				            }

				            /* lg */
				            @media (min-width: 991.98px) {

				                /* All */
				                    .lg-p-0     { padding:          0   !important; }
				                    .lg-p-xs    { padding:        7.5px !important; }
				                    .lg-p-sm    { padding:         10px !important; }
				                    .lg-p-md    { padding:         15px !important; }
				                    .lg-p-lg    { padding:         30px !important; }
				                    .lg-p-xl    { padding:         60px !important; }
				                /* padding-bottom */
				                    .lg-pb-0    { padding-bottom:   0   !important; }
				                    .lg-pb-xs   { padding-bottom: 7.5px !important; }
				                    .lg-pb-sm   { padding-bottom:  10px !important; }
				                    .lg-pb-md   { padding-bottom:  15px !important; }
				                    .lg-pb-lg   { padding-bottom:  30px !important; }
				                    .lg-pb-xl   { padding-bottom:  60px !important; }
				                /* padding-top */
				                    .lg-pt-0    { padding-top:      0   !important; }
				                    .lg-pt-xs   { padding-top:    7.5px !important; }
				                    .lg-pt-sm   { padding-top:     10px !important; }
				                    .lg-pt-md   { padding-top:     15px !important; }
				                    .lg-pt-lg   { padding-top:     30px !important; }
				                    .lg-pt-xl   { padding-top:     60px !important; }
				                /* padding-left */
				                    .lg-pl-0    { padding-left:     0   !important; }
				                    .lg-pl-xs   { padding-left:   7.5px !important; }
				                    .lg-pl-sm   { padding-left:    10px !important; }
				                    .lg-pl-md   { padding-left:    15px !important; }
				                    .lg-pl-lg   { padding-left:    30px !important; }
				                    .lg-pl-xl   { padding-left:    60px !important; }
				                /* padding-right */
				                    .lg-pr-0    { padding-right:    0   !important; }
				                    .lg-pr-xs   { padding-right:  7.5px !important; }
				                    .lg-pr-sm   { padding-right:   10px !important; }
				                    .lg-pr-md   { padding-right:   15px !important; }
				                    .lg-pr-lg   { padding-right:   30px !important; }
				                    .lg-pr-xl   { padding-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .lg-py-0    { padding-top:      0   !important;  padding-bottom:   0   !important; }
				                    .lg-py-xs   { padding-top:    7.5px !important;  padding-bottom: 7.5px !important; }
				                    .lg-py-sm   { padding-top:     10px !important;  padding-bottom:  10px !important; }
				                    .lg-py-md   { padding-top:     15px !important;  padding-bottom:  15px !important; }
				                    .lg-py-lg   { padding-top:     30px !important;  padding-bottom:  30px !important; }
				                    .lg-py-xl   { padding-top:     60px !important;  padding-bottom:  60px !important; }

				                /* Horizontal - Left & Right */
				                    .lg-px-0    { padding-left:     0   !important;  padding-right:    0   !important; }
				                    .lg-px-xs   { padding-left:   7.5px !important;  padding-right:  7.5px !important; }
				                    .lg-px-sm   { padding-left:    10px !important;  padding-right:   10px !important; }
				                    .lg-px-md   { padding-left:    15px !important;  padding-right:   15px !important; }
				                    .lg-px-lg   { padding-left:    30px !important;  padding-right:   30px !important; }
				                    .lg-px-xl   { padding-left:    60px !important;  padding-right:   60px !important; }
				            }

				            /* lg-only */
				            @media (min-width: 991.98px) and (max-width: 1199.98px) {

				                /* All */
				                    .lg-o-p-0   { padding:          0   !important; }
				                    .lg-o-p-xs  { padding:        7.5px !important; }
				                    .lg-o-p-sm  { padding:         10px !important; }
				                    .lg-o-p-md  { padding:         15px !important; }
				                    .lg-o-p-lg  { padding:         30px !important; }
				                    .lg-o-p-xl  { padding:         60px !important; }
				                /* Margin-bottom */
				                    .lg-o-pb-0  { padding-bottom:   0   !important; }
				                    .lg-o-pb-xs { padding-bottom: 7.5px !important; }
				                    .lg-o-pb-sm { padding-bottom:  10px !important; }
				                    .lg-o-pb-md { padding-bottom:  15px !important; }
				                    .lg-o-pb-lg { padding-bottom:  30px !important; }
				                    .lg-o-pb-xl { padding-bottom:  60px !important; }
				                /* padding-top */
				                    .lg-o-pt-0  { padding-top:      0   !important; }
				                    .lg-o-pt-xs { padding-top:    7.5px !important; }
				                    .lg-o-pt-sm { padding-top:     10px !important; }
				                    .lg-o-pt-md { padding-top:     15px !important; }
				                    .lg-o-pt-lg { padding-top:     30px !important; }
				                    .lg-o-pt-xl { padding-top:     60px !important; }
				                /* padding-left */
				                    .lg-o-pl-0  { padding-left:     0   !important; }
				                    .lg-o-pl-xs { padding-left:   7.5px !important; }
				                    .lg-o-pl-sm { padding-left:    10px !important; }
				                    .lg-o-pl-md { padding-left:    15px !important; }
				                    .lg-o-pl-lg { padding-left:    30px !important; }
				                    .lg-o-pl-xl { padding-left:    60px !important; }
				                /* padding-right */
				                    .lg-o-pr-0  { padding-right:    0   !important; }
				                    .lg-o-pr-xs { padding-right:  7.5px !important; }
				                    .lg-o-pr-sm { padding-right:   10px !important; }
				                    .lg-o-pr-md { padding-right:   15px !important; }
				                    .lg-o-pr-lg { padding-right:   30px !important; }
				                    .lg-o-pr-xl { padding-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .lg-o-py-0  { padding-top:      0   !important;  padding-bottom:   0   !important; }
				                    .lg-o-py-xs { padding-top:    7.5px !important;  padding-bottom: 7.5px !important; }
				                    .lg-o-py-sm { padding-top:     10px !important;  padding-bottom:  10px !important; }
				                    .lg-o-py-md { padding-top:     15px !important;  padding-bottom:  15px !important; }
				                    .lg-o-py-lg { padding-top:     30px !important;  padding-bottom:  30px !important; }
				                    .lg-o-py-xl { padding-top:     60px !important;  padding-bottom:  60px !important; }

				                /* Horizontal - Left & Right */
				                    .lg-o-px-0  { padding-left:     0   !important;  padding-right:    0   !important; }
				                    .lg-o-px-xs { padding-left:   7.5px !important;  padding-right:  7.5px !important; }
				                    .lg-o-px-sm { padding-left:    10px !important;  padding-right:   10px !important; }
				                    .lg-o-px-md { padding-left:    15px !important;  padding-right:   15px !important; }
				                    .lg-o-px-lg { padding-left:    30px !important;  padding-right:   30px !important; }
				                    .lg-o-px-xl { padding-left:    60px !important;  padding-right:   60px !important; }
				            }

				            /* xl */
				            @media (min-width: 1199.98px) {

				                /* All */
				                    .xl-p-0     { padding:          0   !important; }
				                    .xl-p-xs    { padding:        7.5px !important; }
				                    .xl-p-sm    { padding:         10px !important; }
				                    .xl-p-md    { padding:         15px !important; }
				                    .xl-p-lg    { padding:         30px !important; }
				                    .xl-p-xl    { padding:         60px !important; }
				                /* padding-bottom */
				                    .xl-pb-0    { padding-bottom:   0   !important; }
				                    .xl-pb-xs   { padding-bottom: 7.5px !important; }
				                    .xl-pb-sm   { padding-bottom:  10px !important; }
				                    .xl-pb-md   { padding-bottom:  15px !important; }
				                    .xl-pb-lg   { padding-bottom:  30px !important; }
				                    .xl-pb-xl   { padding-bottom:  60px !important; }
				                /* padding-top */
				                    .xl-pt-0    { padding-top:      0   !important; }
				                    .xl-pt-xs   { padding-top:    7.5px !important; }
				                    .xl-pt-sm   { padding-top:     10px !important; }
				                    .xl-pt-md   { padding-top:     15px !important; }
				                    .xl-pt-lg   { padding-top:     30px !important; }
				                    .xl-pt-xl   { padding-top:     60px !important; }
				                /* padding-left */
				                    .xl-pl-0    { padding-left:     0   !important; }
				                    .xl-pl-xs   { padding-left:   7.5px !important; }
				                    .xl-pl-sm   { padding-left:    10px !important; }
				                    .xl-pl-md   { padding-left:    15px !important; }
				                    .xl-pl-lg   { padding-left:    30px !important; }
				                    .xl-pl-xl   { padding-left:    60px !important; }
				                /* padding-right */
				                    .xl-pr-0    { padding-right:    0   !important; }
				                    .xl-pr-xs   { padding-right:  7.5px !important; }
				                    .xl-pr-sm   { padding-right:   10px !important; }
				                    .xl-pr-md   { padding-right:   15px !important; }
				                    .xl-pr-lg   { padding-right:   30px !important; }
				                    .xl-pr-xl   { padding-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .xl-py-0    { padding-top:      0   !important;  padding-bottom:   0   !important; }
				                    .xl-py-xs   { padding-top:    7.5px !important;  padding-bottom: 7.5px !important; }
				                    .xl-py-sm   { padding-top:     10px !important;  padding-bottom:  10px !important; }
				                    .xl-py-md   { padding-top:     15px !important;  padding-bottom:  15px !important; }
				                    .xl-py-lg   { padding-top:     30px !important;  padding-bottom:  30px !important; }
				                    .xl-py-xl   { padding-top:     60px !important;  padding-bottom:  60px !important; }

				                /* Horizontal - Left & Right */
				                    .xl-px-0    { padding-left:     0   !important;  padding-right:    0   !important; }
				                    .xl-px-xs   { padding-left:   7.5px !important;  padding-right:  7.5px !important; }
				                    .xl-px-sm   { padding-left:    10px !important;  padding-right:   10px !important; }
				                    .xl-px-md   { padding-left:    15px !important;  padding-right:   15px !important; }
				                    .xl-px-lg   { padding-left:    30px !important;  padding-right:   30px !important; }
				                    .xl-px-xl   { padding-left:    60px !important;  padding-right:   60px !important; }
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
				                    .m-0         { margin:          0   !important; }
				                    .m-xs        { margin:        7.5px !important; }
				                    .m-sm        { margin:         10px !important; }
				                    .m-md        { margin:         15px !important; }
				                    .m-lg        { margin:         30px !important; }
				                    .m-xl        { margin:         60px !important; }
				                /* Margin-bottom */
				                    .mb-0        { margin-bottom:   0   !important; }
				                    .mb-xs       { margin-bottom: 7.5px !important; }
				                    .mb-sm       { margin-bottom:  10px !important; }
				                    .mb-md       { margin-bottom:  15px !important; }
				                    .mb-lg       { margin-bottom:  30px !important; }
				                    .mb-xl       { margin-bottom:  60px !important; }
				                /* Margin-top */
				                    .mt-0        { margin-top:      0   !important; }
				                    .mt-xs       { margin-top:    7.5px !important; }
				                    .mt-sm       { margin-top:     10px !important; }
				                    .mt-md       { margin-top:     15px !important; }
				                    .mt-lg       { margin-top:     30px !important; }
				                    .mt-xl       { margin-top:     60px !important; }
				                /* Margin-left */
				                    .ml-0        { margin-left:     0   !important; }
				                    .ml-xs       { margin-left:   7.5px !important; }
				                    .ml-sm       { margin-left:    10px !important; }
				                    .ml-md       { margin-left:    15px !important; }
				                    .ml-lg       { margin-left:    30px !important; }
				                    .ml-xl       { margin-left:    60px !important; }
				                /* Margin-right */
				                    .mr-0        { margin-right:    0   !important; }
				                    .mr-xs       { margin-right:  7.5px !important; }
				                    .mr-sm       { margin-right:   10px !important; }
				                    .mr-md       { margin-right:   15px !important; }
				                    .mr-lg       { margin-right:   30px !important; }
				                    .mr-xl       { margin-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .my-0        { margin-top:      0   !important; margin-bottom:    0   !important; }
				                    .my-xs       { margin-top:    7.5px !important; margin-bottom:  7.5px !important; }
				                    .my-sm       { margin-top:     10px !important; margin-bottom:   10px !important; }
				                    .my-md       { margin-top:     15px !important; margin-bottom:   15px !important; }
				                    .my-lg       { margin-top:     30px !important; margin-bottom:   30px !important; }
				                    .my-xl       { margin-top:     60px !important; margin-bottom:   60px !important; }

				                /* Horizontal - Left & Right */
				                    .mx-0        { margin-left:     0   !important; margin-right:     0   !important; }
				                    .mx-xs       { margin-left:   7.5px !important; margin-right:   7.5px !important; }
				                    .mx-sm       { margin-left:    10px !important; margin-right:    10px !important; }
				                    .mx-md       { margin-left:    15px !important; margin-right:    15px !important; }
				                    .mx-lg       { margin-left:    30px !important; margin-right:    30px !important; }
				                    .mx-xl       { margin-left:    60px !important; margin-right:    60px !important; }

				                    .mx-auto {
				                        display: block !important; margin-left:  auto !important; 
				                        float:   none  !important; margin-right: auto !important; 
				                    }
				    `
				    },

				// margin-offsets-resp
				    {
				    name : 'margin-offsets-resp' ,
				    code :    
				    `            /* xs-only */
				            @media (max-width: 575.98px) {

				                /* All */
				                    .xs-o-m-0    { margin:          0   !important; }
				                    .xs-o-m-xs   { margin:        7.5px !important; }
				                    .xs-o-m-sm   { margin:         10px !important; }
				                    .xs-o-m-md   { margin:         15px !important; }
				                    .xs-o-m-lg   { margin:         30px !important; }
				                    .xs-o-m-xl   { margin:         60px !important; }
				                /* Margin-bottom */
				                    .xs-o-mb-0   { margin-bottom:   0   !important; }
				                    .xs-o-mb-xs  { margin-bottom: 7.5px !important; }
				                    .xs-o-mb-sm  { margin-bottom:  10px !important; }
				                    .xs-o-mb-md  { margin-bottom:  15px !important; }
				                    .xs-o-mb-lg  { margin-bottom:  30px !important; }
				                    .xs-o-mb-xl  { margin-bottom:  60px !important; }
				                /* Margin-top */
				                    .xs-o-mt-0   { margin-top:      0   !important; }
				                    .xs-o-mt-xs  { margin-top:    7.5px !important; }
				                    .xs-o-mt-sm  { margin-top:     10px !important; }
				                    .xs-o-mt-md  { margin-top:     15px !important; }
				                    .xs-o-mt-lg  { margin-top:     30px !important; }
				                    .xs-o-mt-xl  { margin-top:     60px !important; }
				                /* Margin-left */
				                    .xs-o-ml-0   { margin-left:     0   !important; }
				                    .xs-o-ml-xs  { margin-left:   7.5px !important; }
				                    .xs-o-ml-sm  { margin-left:    10px !important; }
				                    .xs-o-ml-md  { margin-left:    15px !important; }
				                    .xs-o-ml-lg  { margin-left:    30px !important; }
				                    .xs-o-ml-xl  { margin-left:    60px !important; }
				                /* Margin-right */
				                    .xs-o-mr-0   { margin-right:    0   !important; }
				                    .xs-o-mr-xs  { margin-right:  7.5px !important; }
				                    .xs-o-mr-sm  { margin-right:   10px !important; }
				                    .xs-o-mr-md  { margin-right:   15px !important; }
				                    .xs-o-mr-lg  { margin-right:   30px !important; }
				                    .xs-o-mr-xl  { margin-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .xs-o-my-0   { margin-top:      0   !important;  margin-bottom:    0   !important; }
				                    .xs-o-my-xs  { margin-top:    7.5px !important;  margin-bottom:  7.5px !important; }
				                    .xs-o-my-sm  { margin-top:     10px !important;  margin-bottom:   10px !important; }
				                    .xs-o-my-md  { margin-top:     15px !important;  margin-bottom:   15px !important; }
				                    .xs-o-my-lg  { margin-top:     30px !important;  margin-bottom:   30px !important; }
				                    .xs-o-my-xl  { margin-top:     60px !important;  margin-bottom:   60px !important; }

				                /* Horizontal - Left & Right */
				                    .xs-o-mx-0   { margin-left:     0   !important;  margin-right:     0   !important; }
				                    .xs-o-mx-xs  { margin-left:   7.5px !important;  margin-right:   7.5px !important; }
				                    .xs-o-mx-sm  { margin-left:    10px !important;  margin-right:    10px !important; }
				                    .xs-o-mx-md  { margin-left:    15px !important;  margin-right:    15px !important; }
				                    .xs-o-mx-lg  { margin-left:    30px !important;  margin-right:    30px !important; }
				                    .xs-o-mx-xl  { margin-left:    60px !important;  margin-right:    60px !important; }

				                    .xs-o-mx-auto {
				                        display: block !important; margin-left:  auto !important; 
				                        float:   none  !important; margin-right: auto !important; 
				                    }
				            }

				            /* sm */
				            @media (min-width: 575.98px) {
				                /* All */
				                    .sm-m-0      { margin:          0   !important; }
				                    .sm-m-xs     { margin:        7.5px !important; }
				                    .sm-m-sm     { margin:         10px !important; }
				                    .sm-m-md     { margin:         15px !important; }
				                    .sm-m-lg     { margin:         30px !important; }
				                    .sm-m-xl     { margin:         60px !important; }
				                /* Margin-bottom */
				                    .sm-mb-0     { margin-bottom:   0   !important; }
				                    .sm-mb-xs    { margin-bottom: 7.5px !important; }
				                    .sm-mb-sm    { margin-bottom:  10px !important; }
				                    .sm-mb-md    { margin-bottom:  15px !important; }
				                    .sm-mb-lg    { margin-bottom:  30px !important; }
				                    .sm-mb-xl    { margin-bottom:  60px !important; }
				                /* Margin-top */
				                    .sm-mt-0     { margin-top:      0   !important; }
				                    .sm-mt-xs    { margin-top:    7.5px !important; }
				                    .sm-mt-sm    { margin-top:     10px !important; }
				                    .sm-mt-md    { margin-top:     15px !important; }
				                    .sm-mt-lg    { margin-top:     30px !important; }
				                    .sm-mt-xl    { margin-top:     60px !important; }
				                /* Margin-left */
				                    .sm-ml-0     { margin-left:     0   !important; }
				                    .sm-ml-xs    { margin-left:   7.5px !important; }
				                    .sm-ml-sm    { margin-left:    10px !important; }
				                    .sm-ml-md    { margin-left:    15px !important; }
				                    .sm-ml-lg    { margin-left:    30px !important; }
				                    .sm-ml-xl    { margin-left:    60px !important; }
				                /* Margin-right */
				                    .sm-mr-0     { margin-right:    0   !important; }
				                    .sm-mr-xs    { margin-right:  7.5px !important; }
				                    .sm-mr-sm    { margin-right:   10px !important; }
				                    .sm-mr-md    { margin-right:   15px !important; }
				                    .sm-mr-lg    { margin-right:   30px !important; }
				                    .sm-mr-xl    { margin-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .sm-my-0     { margin-top:      0   !important;  margin-bottom:    0   !important; }
				                    .sm-my-xs    { margin-top:    7.5px !important;  margin-bottom:  7.5px !important; }
				                    .sm-my-sm    { margin-top:     10px !important;  margin-bottom:   10px !important; }
				                    .sm-my-md    { margin-top:     15px !important;  margin-bottom:   15px !important; }
				                    .sm-my-lg    { margin-top:     30px !important;  margin-bottom:   30px !important; }
				                    .sm-my-xl    { margin-top:     60px !important;  margin-bottom:   60px !important; }

				                /* Horizontal - Left & Right */
				                    .sm-mx-0     { margin-left:     0   !important;  margin-right:     0   !important; }
				                    .sm-mx-xs    { margin-left:   7.5px !important;  margin-right:   7.5px !important; }
				                    .sm-mx-sm    { margin-left:    10px !important;  margin-right:    10px !important; }
				                    .sm-mx-md    { margin-left:    15px !important;  margin-right:    15px !important; }
				                    .sm-mx-lg    { margin-left:    30px !important;  margin-right:    30px !important; }
				                    .sm-mx-xl    { margin-left:    60px !important;  margin-right:    60px !important; }

				                    .sm-mx-auto {
				                        display: block !important; margin-left:  auto !important; 
				                        float:   none  !important; margin-right: auto !important; 
				                    }
				            }

				            /* sm-only */
				            @media (min-width: 575.98px) and (max-width: 767.98px) {

				                /* All */
				                    .sm-o-m-0   { margin:          0   !important; }
				                    .sm-o-m-xs  { margin:        7.5px !important; }
				                    .sm-o-m-sm  { margin:         10px !important; }
				                    .sm-o-m-md  { margin:         15px !important; }
				                    .sm-o-m-lg  { margin:         30px !important; }
				                    .sm-o-m-xl  { margin:         60px !important; }
				                /* Margin-bottom */
				                    .sm-o-mb-0  { margin-bottom:   0   !important; }
				                    .sm-o-mb-xs { margin-bottom: 7.5px !important; }
				                    .sm-o-mb-sm { margin-bottom:  10px !important; }
				                    .sm-o-mb-md { margin-bottom:  15px !important; }
				                    .sm-o-mb-lg { margin-bottom:  30px !important; }
				                    .sm-o-mb-xl { margin-bottom:  60px !important; }
				                /* Margin-top */
				                    .sm-o-mt-0  { margin-top:      0   !important; }
				                    .sm-o-mt-xs { margin-top:    7.5px !important; }
				                    .sm-o-mt-sm { margin-top:     10px !important; }
				                    .sm-o-mt-md { margin-top:     15px !important; }
				                    .sm-o-mt-lg { margin-top:     30px !important; }
				                    .sm-o-mt-xl { margin-top:     60px !important; }
				                /* Margin-left */
				                    .sm-o-ml-0  { margin-left:     0   !important; }
				                    .sm-o-ml-xs { margin-left:   7.5px !important; }
				                    .sm-o-ml-sm { margin-left:    10px !important; }
				                    .sm-o-ml-md { margin-left:    15px !important; }
				                    .sm-o-ml-lg { margin-left:    30px !important; }
				                    .sm-o-ml-xl { margin-left:    60px !important; }
				                /* Margin-right */
				                    .sm-o-mr-0  { margin-right:    0   !important; }
				                    .sm-o-mr-xs { margin-right:  7.5px !important; }
				                    .sm-o-mr-sm { margin-right:   10px !important; }
				                    .sm-o-mr-md { margin-right:   15px !important; }
				                    .sm-o-mr-lg { margin-right:   30px !important; }
				                    .sm-o-mr-xl { margin-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .sm-o-my-0  { margin-top:      0   !important;  margin-bottom:    0   !important; }
				                    .sm-o-my-xs { margin-top:    7.5px !important;  margin-bottom:  7.5px !important; }
				                    .sm-o-my-sm { margin-top:     10px !important;  margin-bottom:   10px !important; }
				                    .sm-o-my-md { margin-top:     15px !important;  margin-bottom:   15px !important; }
				                    .sm-o-my-lg { margin-top:     30px !important;  margin-bottom:   30px !important; }
				                    .sm-o-my-xl { margin-top:     60px !important;  margin-bottom:   60px !important; }

				                /* Horizontal - Left & Right */
				                    .sm-o-mx-0  { margin-left:     0   !important;  margin-right:     0   !important; }
				                    .sm-o-mx-xs { margin-left:   7.5px !important;  margin-right:   7.5px !important; }
				                    .sm-o-mx-sm { margin-left:    10px !important;  margin-right:    10px !important; }
				                    .sm-o-mx-md { margin-left:    15px !important;  margin-right:    15px !important; }
				                    .sm-o-mx-lg { margin-left:    30px !important;  margin-right:    30px !important; }
				                    .sm-o-mx-xl { margin-left:    60px !important;  margin-right:    60px !important; }

				                    .sm-o-mx-auto {
				                        display: block !important; margin-left:  auto !important; 
				                        float:   none  !important; margin-right: auto !important; 
				                    }
				            }

				            /* md */
				            @media (min-width: 767.98px) {
				                /* All */
				                    .md-m-0     { margin:          0   !important; }
				                    .md-m-xs    { margin:        7.5px !important; }
				                    .md-m-sm    { margin:         10px !important; }
				                    .md-m-md    { margin:         15px !important; }
				                    .md-m-lg    { margin:         30px !important; }
				                    .md-m-xl    { margin:         60px !important; }
				                /* Margin-bottom */
				                    .md-mb-0    { margin-bottom:   0   !important; }
				                    .md-mb-xs   { margin-bottom: 7.5px !important; }
				                    .md-mb-sm   { margin-bottom:  10px !important; }
				                    .md-mb-md   { margin-bottom:  15px !important; }
				                    .md-mb-lg   { margin-bottom:  30px !important; }
				                    .md-mb-xl   { margin-bottom:  60px !important; }
				                /* Margin-top */
				                    .md-mt-0    { margin-top:      0   !important; }
				                    .md-mt-xs   { margin-top:    7.5px !important; }
				                    .md-mt-sm   { margin-top:     10px !important; }
				                    .md-mt-md   { margin-top:     15px !important; }
				                    .md-mt-lg   { margin-top:     30px !important; }
				                    .md-mt-xl   { margin-top:     60px !important; }
				                /* Margin-left */
				                    .md-ml-0    { margin-left:     0   !important; }
				                    .md-ml-xs   { margin-left:   7.5px !important; }
				                    .md-ml-sm   { margin-left:    10px !important; }
				                    .md-ml-md   { margin-left:    15px !important; }
				                    .md-ml-lg   { margin-left:    30px !important; }
				                    .md-ml-xl   { margin-left:    60px !important; }
				                /* Margin-right */
				                    .md-mr-0    { margin-right:    0   !important; }
				                    .md-mr-xs   { margin-right:  7.5px !important; }
				                    .md-mr-sm   { margin-right:   10px !important; }
				                    .md-mr-md   { margin-right:   15px !important; }
				                    .md-mr-lg   { margin-right:   30px !important; }
				                    .md-mr-xl   { margin-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .md-my-0    { margin-top:      0   !important;  margin-bottom:    0   !important; }
				                    .md-my-xs   { margin-top:    7.5px !important;  margin-bottom:  7.5px !important; }
				                    .md-my-sm   { margin-top:     10px !important;  margin-bottom:   10px !important; }
				                    .md-my-md   { margin-top:     15px !important;  margin-bottom:   15px !important; }
				                    .md-my-lg   { margin-top:     30px !important;  margin-bottom:   30px !important; }
				                    .md-my-xl   { margin-top:     60px !important;  margin-bottom:   60px !important; }

				                /* Horizontal - Left & Right */
				                    .md-mx-0    { margin-left:     0   !important;  margin-right:     0   !important; }
				                    .md-mx-xs   { margin-left:   7.5px !important;  margin-right:   7.5px !important; }
				                    .md-mx-sm   { margin-left:    10px !important;  margin-right:    10px !important; }
				                    .md-mx-md   { margin-left:    15px !important;  margin-right:    15px !important; }
				                    .md-mx-lg   { margin-left:    30px !important;  margin-right:    30px !important; }
				                    .md-mx-xl   { margin-left:    60px !important;  margin-right:    60px !important; }

				                    .md-mx-auto {
				                        display: block !important; margin-left:  auto !important; 
				                        float:   none  !important; margin-right: auto !important; 
				                    }
				            }

				            /* md-only */
				            @media (min-width: 767.98px) and (max-width: 991.98px) {

				                /* All */
				                    .md-o-m-0   { margin:          0   !important; }
				                    .md-o-m-xs  { margin:        7.5px !important; }
				                    .md-o-m-sm  { margin:         10px !important; }
				                    .md-o-m-md  { margin:         15px !important; }
				                    .md-o-m-lg  { margin:         30px !important; }
				                    .md-o-m-xl  { margin:         60px !important; }
				                /* Margin-bottom */
				                    .md-o-mb-0  { margin-bottom:   0   !important; }
				                    .md-o-mb-xs { margin-bottom: 7.5px !important; }
				                    .md-o-mb-sm { margin-bottom:  10px !important; }
				                    .md-o-mb-md { margin-bottom:  15px !important; }
				                    .md-o-mb-lg { margin-bottom:  30px !important; }
				                    .md-o-mb-xl { margin-bottom:  60px !important; }
				                /* Margin-top */
				                    .md-o-mt-0  { margin-top:      0   !important; }
				                    .md-o-mt-xs { margin-top:    7.5px !important; }
				                    .md-o-mt-sm { margin-top:     10px !important; }
				                    .md-o-mt-md { margin-top:     15px !important; }
				                    .md-o-mt-lg { margin-top:     30px !important; }
				                    .md-o-mt-xl { margin-top:     60px !important; }
				                /* Margin-left */
				                    .md-o-ml-0  { margin-left:     0   !important; }
				                    .md-o-ml-xs { margin-left:   7.5px !important; }
				                    .md-o-ml-sm { margin-left:    10px !important; }
				                    .md-o-ml-md { margin-left:    15px !important; }
				                    .md-o-ml-lg { margin-left:    30px !important; }
				                    .md-o-ml-xl { margin-left:    60px !important; }
				                /* Margin-right */
				                    .md-o-mr-0  { margin-right:    0   !important; }
				                    .md-o-mr-xs { margin-right:  7.5px !important; }
				                    .md-o-mr-sm { margin-right:   10px !important; }
				                    .md-o-mr-md { margin-right:   15px !important; }
				                    .md-o-mr-lg { margin-right:   30px !important; }
				                    .md-o-mr-xl { margin-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .md-o-my-0  { margin-top:      0   !important;  margin-bottom:    0   !important; }
				                    .md-o-my-xs { margin-top:    7.5px !important;  margin-bottom:  7.5px !important; }
				                    .md-o-my-sm { margin-top:     10px !important;  margin-bottom:   10px !important; }
				                    .md-o-my-md { margin-top:     15px !important;  margin-bottom:   15px !important; }
				                    .md-o-my-lg { margin-top:     30px !important;  margin-bottom:   30px !important; }
				                    .md-o-my-xl { margin-top:     60px !important;  margin-bottom:   60px !important; }

				                /* Horizontal - Left & Right */
				                    .md-o-mx-0  { margin-left:     0   !important;  margin-right:     0   !important; }
				                    .md-o-mx-xs { margin-left:   7.5px !important;  margin-right:   7.5px !important; }
				                    .md-o-mx-sm { margin-left:    10px !important;  margin-right:    10px !important; }
				                    .md-o-mx-md { margin-left:    15px !important;  margin-right:    15px !important; }
				                    .md-o-mx-lg { margin-left:    30px !important;  margin-right:    30px !important; }
				                    .md-o-mx-xl { margin-left:    60px !important;  margin-right:    60px !important; }

				                    .md-o-mx-auto {
				                        display: block !important; margin-left:  auto !important; 
				                        float:   none  !important; margin-right: auto !important; 
				                    }
				            }

				            /* lg */
				            @media (min-width: 991.98px) {

				                /* All */
				                    .lg-m-0     { margin:          0   !important; }
				                    .lg-m-xs    { margin:        7.5px !important; }
				                    .lg-m-sm    { margin:         10px !important; }
				                    .lg-m-md    { margin:         15px !important; }
				                    .lg-m-lg    { margin:         30px !important; }
				                    .lg-m-xl    { margin:         60px !important; }
				                /* Margin-bottom */
				                    .lg-mb-0    { margin-bottom:   0   !important; }
				                    .lg-mb-xs   { margin-bottom: 7.5px !important; }
				                    .lg-mb-sm   { margin-bottom:  10px !important; }
				                    .lg-mb-md   { margin-bottom:  15px !important; }
				                    .lg-mb-lg   { margin-bottom:  30px !important; }
				                    .lg-mb-xl   { margin-bottom:  60px !important; }
				                /* Margin-top */
				                    .lg-mt-0    { margin-top:      0   !important; }
				                    .lg-mt-xs   { margin-top:    7.5px !important; }
				                    .lg-mt-sm   { margin-top:     10px !important; }
				                    .lg-mt-md   { margin-top:     15px !important; }
				                    .lg-mt-lg   { margin-top:     30px !important; }
				                    .lg-mt-xl   { margin-top:     60px !important; }
				                /* Margin-left */
				                    .lg-ml-0    { margin-left:     0   !important; }
				                    .lg-ml-xs   { margin-left:   7.5px !important; }
				                    .lg-ml-sm   { margin-left:    10px !important; }
				                    .lg-ml-md   { margin-left:    15px !important; }
				                    .lg-ml-lg   { margin-left:    30px !important; }
				                    .lg-ml-xl   { margin-left:    60px !important; }
				                /* Margin-right */
				                    .lg-mr-0    { margin-right:    0   !important; }
				                    .lg-mr-xs   { margin-right:  7.5px !important; }
				                    .lg-mr-sm   { margin-right:   10px !important; }
				                    .lg-mr-md   { margin-right:   15px !important; }
				                    .lg-mr-lg   { margin-right:   30px !important; }
				                    .lg-mr-xl   { margin-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .lg-my-0    { margin-top:      0   !important;  margin-bottom:     0   !important; }
				                    .lg-my-xs   { margin-top:    7.5px !important;  margin-bottom:   7.5px !important; }
				                    .lg-my-sm   { margin-top:     10px !important;  margin-bottom:    10px !important; }
				                    .lg-my-md   { margin-top:     15px !important;  margin-bottom:    15px !important; }
				                    .lg-my-lg   { margin-top:     30px !important;  margin-bottom:    30px !important; }
				                    .lg-my-xl   { margin-top:     60px !important;  margin-bottom:    60px !important; }

				                /* Horizontal - Left & Right */
				                    .lg-mx-0    { margin-left:     0   !important;  margin-right:      0   !important; }
				                    .lg-mx-xs   { margin-left:   7.5px !important;  margin-right:    7.5px !important; }
				                    .lg-mx-sm   { margin-left:    10px !important;  margin-right:     10px !important; }
				                    .lg-mx-md   { margin-left:    15px !important;  margin-right:     15px !important; }
				                    .lg-mx-lg   { margin-left:    30px !important;  margin-right:     30px !important; }
				                    .lg-mx-xl   { margin-left:    60px !important;  margin-right:     60px !important; }

				                    .lg-mx-auto {
				                        display: block !important; margin-left:  auto !important; 
				                        float:   none  !important; margin-right: auto !important; 
				                    }
				            }

				            /* lg-only */
				            @media (min-width: 991.98px) and (max-width: 1199.98px) {

				                /* All */
				                    .lg-o-m-0   { margin:          0   !important; }
				                    .lg-o-m-xs  { margin:        7.5px !important; }
				                    .lg-o-m-sm  { margin:         10px !important; }
				                    .lg-o-m-md  { margin:         15px !important; }
				                    .lg-o-m-lg  { margin:         30px !important; }
				                    .lg-o-m-xl  { margin:         60px !important; }
				                /* Margin-bottom */
				                    .lg-o-mb-0  { margin-bottom:   0   !important; }
				                    .lg-o-mb-xs { margin-bottom: 7.5px !important; }
				                    .lg-o-mb-sm { margin-bottom:  10px !important; }
				                    .lg-o-mb-md { margin-bottom:  15px !important; }
				                    .lg-o-mb-lg { margin-bottom:  30px !important; }
				                    .lg-o-mb-xl { margin-bottom:  60px !important; }
				                /* Margin-top */
				                    .lg-o-mt-0  { margin-top:      0   !important; }
				                    .lg-o-mt-xs { margin-top:    7.5px !important; }
				                    .lg-o-mt-sm { margin-top:     10px !important; }
				                    .lg-o-mt-md { margin-top:     15px !important; }
				                    .lg-o-mt-lg { margin-top:     30px !important; }
				                    .lg-o-mt-xl { margin-top:     60px !important; }
				                /* Margin-left */
				                    .lg-o-ml-0  { margin-left:     0   !important; }
				                    .lg-o-ml-xs { margin-left:   7.5px !important; }
				                    .lg-o-ml-sm { margin-left:    10px !important; }
				                    .lg-o-ml-md { margin-left:    15px !important; }
				                    .lg-o-ml-lg { margin-left:    30px !important; }
				                    .lg-o-ml-xl { margin-left:    60px !important; }
				                /* Margin-right */
				                    .lg-o-mr-0  { margin-right:    0   !important; }
				                    .lg-o-mr-xs { margin-right:  7.5px !important; }
				                    .lg-o-mr-sm { margin-right:   10px !important; }
				                    .lg-o-mr-md { margin-right:   15px !important; }
				                    .lg-o-mr-lg { margin-right:   30px !important; }
				                    .lg-o-mr-xl { margin-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .lg-o-my-0  { margin-top:      0   !important;  margin-bottom:     0   !important; }
				                    .lg-o-my-xs { margin-top:    7.5px !important;  margin-bottom:   7.5px !important; }
				                    .lg-o-my-sm { margin-top:     10px !important;  margin-bottom:    10px !important; }
				                    .lg-o-my-md { margin-top:     15px !important;  margin-bottom:    15px !important; }
				                    .lg-o-my-lg { margin-top:     30px !important;  margin-bottom:    30px !important; }
				                    .lg-o-my-xl { margin-top:     60px !important;  margin-bottom:    60px !important; }

				                /* Horizontal - Left & Right */
				                    .lg-o-mx-0  { margin-left:     0   !important;  margin-right:      0   !important; }
				                    .lg-o-mx-xs { margin-left:   7.5px !important;  margin-right:    7.5px !important; }
				                    .lg-o-mx-sm { margin-left:    10px !important;  margin-right:     10px !important; }
				                    .lg-o-mx-md { margin-left:    15px !important;  margin-right:     15px !important; }
				                    .lg-o-mx-lg { margin-left:    30px !important;  margin-right:     30px !important; }
				                    .lg-o-mx-xl { margin-left:    60px !important;  margin-right:     60px !important; }

				                    .lg-o-mx-auto {
				                        display: block !important; margin-left:  auto !important; 
				                        float:   none  !important; margin-right: auto !important; 
				                    }
				            }

				            /* xl */
				            @media (min-width: 1199.98px) {

				                /* All */
				                    .xl-m-0     { margin:          0   !important; }
				                    .xl-m-xs    { margin:        7.5px !important; }
				                    .xl-m-sm    { margin:         10px !important; }
				                    .xl-m-md    { margin:         15px !important; }
				                    .xl-m-lg    { margin:         30px !important; }
				                    .xl-m-xl    { margin:         60px !important; }
				                /* Margin-bottom */
				                    .xl-mb-0    { margin-bottom:   0   !important; }
				                    .xl-mb-xs   { margin-bottom: 7.5px !important; }
				                    .xl-mb-sm   { margin-bottom:  10px !important; }
				                    .xl-mb-md   { margin-bottom:  15px !important; }
				                    .xl-mb-lg   { margin-bottom:  30px !important; }
				                    .xl-mb-xl   { margin-bottom:  60px !important; }
				                /* Margin-top */
				                    .xl-mt-0    { margin-top:      0   !important; }
				                    .xl-mt-xs   { margin-top:    7.5px !important; }
				                    .xl-mt-sm   { margin-top:     10px !important; }
				                    .xl-mt-md   { margin-top:     15px !important; }
				                    .xl-mt-lg   { margin-top:     30px !important; }
				                    .xl-mt-xl   { margin-top:     60px !important; }
				                /* Margin-left */
				                    .xl-ml-0    { margin-left:     0   !important; }
				                    .xl-ml-xs   { margin-left:   7.5px !important; }
				                    .xl-ml-sm   { margin-left:    10px !important; }
				                    .xl-ml-md   { margin-left:    15px !important; }
				                    .xl-ml-lg   { margin-left:    30px !important; }
				                    .xl-ml-xl   { margin-left:    60px !important; }
				                /* Margin-right */
				                    .xl-mr-0    { margin-right:    0   !important; }
				                    .xl-mr-xs   { margin-right:  7.5px !important; }
				                    .xl-mr-sm   { margin-right:   10px !important; }
				                    .xl-mr-md   { margin-right:   15px !important; }
				                    .xl-mr-lg   { margin-right:   30px !important; }
				                    .xl-mr-xl   { margin-right:   60px !important; }

				                /* Vertical - Top & Bottom */
				                    .xl-my-0    { margin-top:      0   !important;  margin-bottom:     0   !important; }
				                    .xl-my-xs   { margin-top:    7.5px !important;  margin-bottom:   7.5px !important; }
				                    .xl-my-sm   { margin-top:     10px !important;  margin-bottom:    10px !important; }
				                    .xl-my-md   { margin-top:     15px !important;  margin-bottom:    15px !important; }
				                    .xl-my-lg   { margin-top:     30px !important;  margin-bottom:    30px !important; }
				                    .xl-my-xl   { margin-top:     60px !important;  margin-bottom:    60px !important; }

				                /* Horizontal - Left & Right */
				                    .xl-mx-0    { margin-left:     0   !important;  margin-right:      0   !important; }
				                    .xl-mx-xs   { margin-left:   7.5px !important;  margin-right:    7.5px !important; }
				                    .xl-mx-sm   { margin-left:    10px !important;  margin-right:     10px !important; }
				                    .xl-mx-md   { margin-left:    15px !important;  margin-right:     15px !important; }
				                    .xl-mx-lg   { margin-left:    30px !important;  margin-right:     30px !important; }
				                    .xl-mx-xl   { margin-left:    60px !important;  margin-right:     60px !important; }

				                    .xl-mx-auto {
				                        display: block !important; margin-left:  auto !important; 
				                        float:   none  !important; margin-right: auto !important; 
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
