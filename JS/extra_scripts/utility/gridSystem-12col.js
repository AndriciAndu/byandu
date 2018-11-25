
	(function(){

		// Checkboxes
		// --------------------------------

			var checkboxes_css = [ 'col-size' , 'col-pull' , 'col-push' , 'col-offset' ];

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// general
				    {
				    name : null ,
				    code :    
				    `    /* Utility - Grid System - 12 Column */
				    /* -------------------------------------------- */
				    `
				    },

				// col-size
					{
					name : 'col-size' ,
					code : 	
					`        /* Width */
				        /* -------------------------------------------- */

				            /* Shared */
				            /* -------------------------------------------- */

				                .col-1    ,  .sm-col-1    ,  .md-col-1    ,  .lg-col-1    ,  .xl-col-1    , 
				                .col-2    ,  .sm-col-2    ,  .md-col-2    ,  .lg-col-2    ,  .xl-col-2    , 
				                .col-3    ,  .sm-col-3    ,  .md-col-3    ,  .lg-col-3    ,  .xl-col-3    , 
				                .col-4    ,  .sm-col-4    ,  .md-col-4    ,  .lg-col-4    ,  .xl-col-4    , 
				                .col-5    ,  .sm-col-5    ,  .md-col-5    ,  .lg-col-5    ,  .xl-col-5    , 
				                .col-6    ,  .sm-col-6    ,  .md-col-6    ,  .lg-col-6    ,  .xl-col-6    , 
				                .col-7    ,  .sm-col-7    ,  .md-col-7    ,  .lg-col-7    ,  .xl-col-7    , 
				                .col-8    ,  .sm-col-8    ,  .md-col-8    ,  .lg-col-8    ,  .xl-col-8    , 
				                .col-9    ,  .sm-col-9    ,  .md-col-9    ,  .lg-col-9    ,  .xl-col-9    , 
				                .col-10   ,  .sm-col-10   ,  .md-col-10   ,  .lg-col-10   ,  .xl-col-10   , 
				                .col-11   ,  .sm-col-11   ,  .md-col-11   ,  .lg-col-11   ,  .xl-col-11   , 
				                .col-12   ,  .sm-col-12   ,  .md-col-12   ,  .lg-col-12   ,  .xl-col-12   , 
				                .col-auto ,  .sm-col-auto ,  .md-col-auto ,  .lg-col-auto ,  .xl-col-auto , 

				                .xs-o-col-1    ,  .sm-o-col-1    ,  .md-o-col-1    ,  .lg-o-col-1    ,  .xl-o-col-1    , 
				                .xs-o-col-2    ,  .sm-o-col-2    ,  .md-o-col-2    ,  .lg-o-col-2    ,  .xl-o-col-2    , 
				                .xs-o-col-3    ,  .sm-o-col-3    ,  .md-o-col-3    ,  .lg-o-col-3    ,  .xl-o-col-3    , 
				                .xs-o-col-4    ,  .sm-o-col-4    ,  .md-o-col-4    ,  .lg-o-col-4    ,  .xl-o-col-4    , 
				                .xs-o-col-5    ,  .sm-o-col-5    ,  .md-o-col-5    ,  .lg-o-col-5    ,  .xl-o-col-5    , 
				                .xs-o-col-6    ,  .sm-o-col-6    ,  .md-o-col-6    ,  .lg-o-col-6    ,  .xl-o-col-6    , 
				                .xs-o-col-7    ,  .sm-o-col-7    ,  .md-o-col-7    ,  .lg-o-col-7    ,  .xl-o-col-7    , 
				                .xs-o-col-8    ,  .sm-o-col-8    ,  .md-o-col-8    ,  .lg-o-col-8    ,  .xl-o-col-8    , 
				                .xs-o-col-9    ,  .sm-o-col-9    ,  .md-o-col-9    ,  .lg-o-col-9    ,  .xl-o-col-9    , 
				                .xs-o-col-10   ,  .sm-o-col-10   ,  .md-o-col-10   ,  .lg-o-col-10   ,  .xl-o-col-10   , 
				                .xs-o-col-11   ,  .sm-o-col-11   ,  .md-o-col-11   ,  .lg-o-col-11   ,  .xl-o-col-11   , 
				                .xs-o-col-12   ,  .sm-o-col-12   ,  .md-o-col-12   ,  .lg-o-col-12   ,  .xl-o-col-12   , 
				                .xs-o-col-auto ,  .sm-o-col-auto ,  .md-o-col-auto ,  .lg-o-col-auto ,  .xl-o-col-auto {

				                    float: left;
				                    position: relative;     min-height: 1px;
				                    padding-right: 15px;    padding-left: 15px;
				                    
				                }

				            /* All viewports */
				            /* -------------------------------------------- */

				                    .col-1              { width: 8.33333333%    ;}
				                    .col-2              { width: 16.66666667%   ;}
				                    .col-3              { width: 25%            ;}
				                    .col-4              { width: 33.33333333%   ;}
				                    .col-5              { width: 41.66666667%   ;}
				                    .col-6              { width: 50%            ;}
				                    .col-7              { width: 58.33333333%   ;}
				                    .col-8              { width: 66.66666667%   ;}
				                    .col-9              { width: 75%            ;}
				                    .col-10             { width: 83.33333333%   ;}
				                    .col-11             { width: 91.66666667%   ;}
				                    .col-12             { width: 100%           ;}
				                    .col-auto           { width: auto           ;}

				            /* xs-only */
				            /* -------------------------------------------- */

				                @media (max-width: 575.98px) {
				                    .xs-o-col-1         { width: 8.33333333%    ;}
				                    .xs-o-col-2         { width: 16.66666667%   ;}
				                    .xs-o-col-3         { width: 25%            ;}
				                    .xs-o-col-4         { width: 33.33333333%   ;}
				                    .xs-o-col-5         { width: 41.66666667%   ;}
				                    .xs-o-col-6         { width: 50%            ;}
				                    .xs-o-col-7         { width: 58.33333333%   ;}
				                    .xs-o-col-8         { width: 66.66666667%   ;}
				                    .xs-o-col-9         { width: 75%            ;}
				                    .xs-o-col-10        { width: 83.33333333%   ;}
				                    .xs-o-col-11        { width: 91.66666667%   ;}
				                    .xs-o-col-12        { width: 100%           ;}
				                    .xs-o-col-auto      { width: auto           ;}
				                }

				            /* sm */
				            /* -------------------------------------------- */

				                @media (min-width: 575.98px) {
				                    .sm-col-1           { width: 8.33333333%    ;}
				                    .sm-col-2           { width: 16.66666667%   ;}
				                    .sm-col-3           { width: 25%            ;}
				                    .sm-col-4           { width: 33.33333333%   ;}
				                    .sm-col-5           { width: 41.66666667%   ;}
				                    .sm-col-6           { width: 50%            ;}
				                    .sm-col-7           { width: 58.33333333%   ;}
				                    .sm-col-8           { width: 66.66666667%   ;}
				                    .sm-col-9           { width: 75%            ;}
				                    .sm-col-10          { width: 83.33333333%   ;}
				                    .sm-col-11          { width: 91.66666667%   ;}
				                    .sm-col-12          { width: 100%           ;}
				                    .sm-col-auto        { width: auto           ;}
				                }

				            /* sm-only */
				            /* -------------------------------------------- */

				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-col-1         { width: 8.33333333%    ;}
				                    .sm-o-col-2         { width: 16.66666667%   ;}
				                    .sm-o-col-3         { width: 25%            ;}
				                    .sm-o-col-4         { width: 33.33333333%   ;}
				                    .sm-o-col-5         { width: 41.66666667%   ;}
				                    .sm-o-col-6         { width: 50%            ;}
				                    .sm-o-col-7         { width: 58.33333333%   ;}
				                    .sm-o-col-8         { width: 66.66666667%   ;}
				                    .sm-o-col-9         { width: 75%            ;}
				                    .sm-o-col-10        { width: 83.33333333%   ;}
				                    .sm-o-col-11        { width: 91.66666667%   ;}
				                    .sm-o-col-12        { width: 100%           ;}
				                    .sm-o-col-auto      { width: auto           ;}
				                }

				            /* md */ 
				            /* -------------------------------------------- */

				                @media (min-width: 767.98px) {
				                    .md-col-1           { width: 8.33333333%    ;}
				                    .md-col-2           { width: 16.66666667%   ;}
				                    .md-col-3           { width: 25%            ;}
				                    .md-col-4           { width: 33.33333333%   ;}
				                    .md-col-5           { width: 41.66666667%   ;}
				                    .md-col-6           { width: 50%            ;}
				                    .md-col-7           { width: 58.33333333%   ;}
				                    .md-col-8           { width: 66.66666667%   ;}
				                    .md-col-9           { width: 75%            ;}
				                    .md-col-10          { width: 83.33333333%   ;}
				                    .md-col-11          { width: 91.66666667%   ;}
				                    .md-col-12          { width: 100%           ;}
				                    .md-col-auto        { width: auto           ;}
				                }

				            /* md-only */
				            /* -------------------------------------------- */

				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-col-1         { width: 8.33333333%    ;}
				                    .md-o-col-2         { width: 16.66666667%   ;}
				                    .md-o-col-3         { width: 25%            ;}
				                    .md-o-col-4         { width: 33.33333333%   ;}
				                    .md-o-col-5         { width: 41.66666667%   ;}
				                    .md-o-col-6         { width: 50%            ;}
				                    .md-o-col-7         { width: 58.33333333%   ;}
				                    .md-o-col-8         { width: 66.66666667%   ;}
				                    .md-o-col-9         { width: 75%            ;}
				                    .md-o-col-10        { width: 83.33333333%   ;}
				                    .md-o-col-11        { width: 91.66666667%   ;}
				                    .md-o-col-12        { width: 100%           ;}
				                    .md-o-col-auto      { width: auto           ;}
				                }

				            /* lg */
				            /* -------------------------------------------- */

				                @media (min-width: 991.98px) {
				                    .lg-col-1           { width: 8.33333333%    ;}
				                    .lg-col-2           { width: 16.66666667%   ;}
				                    .lg-col-3           { width: 25%            ;}
				                    .lg-col-4           { width: 33.33333333%   ;}
				                    .lg-col-5           { width: 41.66666667%   ;}
				                    .lg-col-6           { width: 50%            ;}
				                    .lg-col-7           { width: 58.33333333%   ;}
				                    .lg-col-8           { width: 66.66666667%   ;}
				                    .lg-col-9           { width: 75%            ;}
				                    .lg-col-10          { width: 83.33333333%   ;}
				                    .lg-col-11          { width: 91.66666667%   ;}
				                    .lg-col-12          { width: 100%           ;}
				                    .lg-col-auto        { width: auto           ;}
				                }

				            /* lg-only */
				            /* -------------------------------------------- */

				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-col-1         { width: 8.33333333%    ;}
				                    .lg-o-col-2         { width: 16.66666667%   ;}
				                    .lg-o-col-3         { width: 25%            ;}
				                    .lg-o-col-4         { width: 33.33333333%   ;}
				                    .lg-o-col-5         { width: 41.66666667%   ;}
				                    .lg-o-col-6         { width: 50%            ;}
				                    .lg-o-col-7         { width: 58.33333333%   ;}
				                    .lg-o-col-8         { width: 66.66666667%   ;}
				                    .lg-o-col-9         { width: 75%            ;}
				                    .lg-o-col-10        { width: 83.33333333%   ;}
				                    .lg-o-col-11        { width: 91.66666667%   ;}
				                    .lg-o-col-12        { width: 100%           ;}
				                    .lg-o-col-auto      { width: auto           ;}
				                }
				                  
				            /* xl */
				            /* -------------------------------------------- */
				            
				                @media (min-width: 1199.98px) {
				                    .xl-col-1           { width: 8.33333333%    ;}
				                    .xl-col-2           { width: 16.66666667%   ;}
				                    .xl-col-3           { width: 25%            ;}
				                    .xl-col-4           { width: 33.33333333%   ;}
				                    .xl-col-5           { width: 41.66666667%   ;}
				                    .xl-col-6           { width: 50%            ;}
				                    .xl-col-7           { width: 58.33333333%   ;}
				                    .xl-col-8           { width: 66.66666667%   ;}
				                    .xl-col-9           { width: 75%            ;}
				                    .xl-col-10          { width: 83.33333333%   ;}
				                    .xl-col-11          { width: 91.66666667%   ;}
				                    .xl-col-12          { width: 100%           ;}
				                    .xl-col-auto        { width: auto           ;}
				                }
					`
					},

				// col-pull
					{
					name : 'col-pull' ,
					code : 	
					`        /* Pull */
				        /* -------------------------------------------- */

				            /* All viewports */
				            /* -------------------------------------------- */

				                    .col-pull-1         { right: 8.33333333%    ;}
				                    .col-pull-2         { right: 16.66666667%   ;}
				                    .col-pull-3         { right: 25%            ;}
				                    .col-pull-4         { right: 33.33333333%   ;}
				                    .col-pull-5         { right: 41.66666667%   ;}
				                    .col-pull-6         { right: 50%            ;}
				                    .col-pull-7         { right: 58.33333333%   ;}
				                    .col-pull-8         { right: 66.66666667%   ;}
				                    .col-pull-9         { right: 75%            ;}
				                    .col-pull-10        { right: 83.33333333%   ;}
				                    .col-pull-11        { right: 91.66666667%   ;}
				                    .col-pull-12        { right: 100%           ;}
				                    .col-pull-auto      { right: auto           ;}

				            /* xs-only */
				            /* -------------------------------------------- */

				                @media (max-width: 575.98px) {
				                    .xs-o-col-pull-1    { right: 8.33333333%    ;}
				                    .xs-o-col-pull-2    { right: 16.66666667%   ;}
				                    .xs-o-col-pull-3    { right: 25%            ;}
				                    .xs-o-col-pull-4    { right: 33.33333333%   ;}
				                    .xs-o-col-pull-5    { right: 41.66666667%   ;}
				                    .xs-o-col-pull-6    { right: 50%            ;}
				                    .xs-o-col-pull-7    { right: 58.33333333%   ;}
				                    .xs-o-col-pull-8    { right: 66.66666667%   ;}
				                    .xs-o-col-pull-9    { right: 75%            ;}
				                    .xs-o-col-pull-10   { right: 83.33333333%   ;}
				                    .xs-o-col-pull-11   { right: 91.66666667%   ;}
				                    .xs-o-col-pull-12   { right: 100%           ;}
				                    .xs-o-col-pull-auto { right: auto           ;}
				                }

				            /* sm */
				            /* -------------------------------------------- */

				                @media (min-width: 575.98px) {
				                    .sm-col-pull-1      { right: 8.33333333%    ;}
				                    .sm-col-pull-2      { right: 16.66666667%   ;}
				                    .sm-col-pull-3      { right: 25%            ;}
				                    .sm-col-pull-4      { right: 33.33333333%   ;}
				                    .sm-col-pull-5      { right: 41.66666667%   ;}
				                    .sm-col-pull-6      { right: 50%            ;}
				                    .sm-col-pull-7      { right: 58.33333333%   ;}
				                    .sm-col-pull-8      { right: 66.66666667%   ;}
				                    .sm-col-pull-9      { right: 75%            ;}
				                    .sm-col-pull-10     { right: 83.33333333%   ;}
				                    .sm-col-pull-11     { right: 91.66666667%   ;}
				                    .sm-col-pull-12     { right: 100%           ;}
				                    .sm-col-pull-auto   { right: auto           ;}
				                }

				            /* sm-only */
				            /* -------------------------------------------- */

				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-col-pull-1    { right: 8.33333333%    ;}
				                    .sm-o-col-pull-2    { right: 16.66666667%   ;}
				                    .sm-o-col-pull-3    { right: 25%            ;}
				                    .sm-o-col-pull-4    { right: 33.33333333%   ;}
				                    .sm-o-col-pull-5    { right: 41.66666667%   ;}
				                    .sm-o-col-pull-6    { right: 50%            ;}
				                    .sm-o-col-pull-7    { right: 58.33333333%   ;}
				                    .sm-o-col-pull-8    { right: 66.66666667%   ;}
				                    .sm-o-col-pull-9    { right: 75%            ;}
				                    .sm-o-col-pull-10   { right: 83.33333333%   ;}
				                    .sm-o-col-pull-11   { right: 91.66666667%   ;}
				                    .sm-o-col-pull-12   { right: 100%           ;}
				                    .sm-o-col-pull-auto { right: auto           ;}
				                }

				            /* md */ 
				            /* -------------------------------------------- */

				                @media (min-width: 767.98px) {
				                    .md-col-pull-1      { right: 8.33333333%    ;}
				                    .md-col-pull-2      { right: 16.66666667%   ;}
				                    .md-col-pull-3      { right: 25%            ;}
				                    .md-col-pull-4      { right: 33.33333333%   ;}
				                    .md-col-pull-5      { right: 41.66666667%   ;}
				                    .md-col-pull-6      { right: 50%            ;}
				                    .md-col-pull-7      { right: 58.33333333%   ;}
				                    .md-col-pull-8      { right: 66.66666667%   ;}
				                    .md-col-pull-9      { right: 75%            ;}
				                    .md-col-pull-10     { right: 83.33333333%   ;}
				                    .md-col-pull-11     { right: 91.66666667%   ;}
				                    .md-col-pull-12     { right: 100%           ;}
				                    .md-col-pull-auto   { right: auto           ;}
				                }

				            /* md-only */
				            /* -------------------------------------------- */

				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-col-pull-1    { right: 8.33333333%    ;}
				                    .md-o-col-pull-2    { right: 16.66666667%   ;}
				                    .md-o-col-pull-3    { right: 25%            ;}
				                    .md-o-col-pull-4    { right: 33.33333333%   ;}
				                    .md-o-col-pull-5    { right: 41.66666667%   ;}
				                    .md-o-col-pull-6    { right: 50%            ;}
				                    .md-o-col-pull-7    { right: 58.33333333%   ;}
				                    .md-o-col-pull-8    { right: 66.66666667%   ;}
				                    .md-o-col-pull-9    { right: 75%            ;}
				                    .md-o-col-pull-10   { right: 83.33333333%   ;}
				                    .md-o-col-pull-11   { right: 91.66666667%   ;}
				                    .md-o-col-pull-12   { right: 100%           ;}
				                    .md-o-col-pull-auto { right: auto           ;}
				                }

				            /* lg */
				            /* -------------------------------------------- */

				                @media (min-width: 991.98px) {
				                    .lg-col-pull-1      { right: 8.33333333%    ;}
				                    .lg-col-pull-2      { right: 16.66666667%   ;}
				                    .lg-col-pull-3      { right: 25%            ;}
				                    .lg-col-pull-4      { right: 33.33333333%   ;}
				                    .lg-col-pull-5      { right: 41.66666667%   ;}
				                    .lg-col-pull-6      { right: 50%            ;}
				                    .lg-col-pull-7      { right: 58.33333333%   ;}
				                    .lg-col-pull-8      { right: 66.66666667%   ;}
				                    .lg-col-pull-9      { right: 75%            ;}
				                    .lg-col-pull-10     { right: 83.33333333%   ;}
				                    .lg-col-pull-11     { right: 91.66666667%   ;}
				                    .lg-col-pull-12     { right: 100%           ;}
				                    .lg-col-pull-auto   { right: auto           ;}
				                }

				            /* lg-only */
				            /* -------------------------------------------- */

				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-col-pull-1    { right: 8.33333333%    ;}
				                    .lg-o-col-pull-2    { right: 16.66666667%   ;}
				                    .lg-o-col-pull-3    { right: 25%            ;}
				                    .lg-o-col-pull-4    { right: 33.33333333%   ;}
				                    .lg-o-col-pull-5    { right: 41.66666667%   ;}
				                    .lg-o-col-pull-6    { right: 50%            ;}
				                    .lg-o-col-pull-7    { right: 58.33333333%   ;}
				                    .lg-o-col-pull-8    { right: 66.66666667%   ;}
				                    .lg-o-col-pull-9    { right: 75%            ;}
				                    .lg-o-col-pull-10   { right: 83.33333333%   ;}
				                    .lg-o-col-pull-11   { right: 91.66666667%   ;}
				                    .lg-o-col-pull-12   { right: 100%           ;}
				                    .lg-o-col-pull-auto { right: auto           ;}
				                }
				                  
				            /* xl */
				            /* -------------------------------------------- */
				            
				                @media (min-width: 1199.98px) {
				                    .xl-col-pull-1      { right: 8.33333333%    ;}
				                    .xl-col-pull-2      { right: 16.66666667%   ;}
				                    .xl-col-pull-3      { right: 25%            ;}
				                    .xl-col-pull-4      { right: 33.33333333%   ;}
				                    .xl-col-pull-5      { right: 41.66666667%   ;}
				                    .xl-col-pull-6      { right: 50%            ;}
				                    .xl-col-pull-7      { right: 58.33333333%   ;}
				                    .xl-col-pull-8      { right: 66.66666667%   ;}
				                    .xl-col-pull-9      { right: 75%            ;}
				                    .xl-col-pull-10     { right: 83.33333333%   ;}
				                    .xl-col-pull-11     { right: 91.66666667%   ;}
				                    .xl-col-pull-12     { right: 100%           ;}
				                    .xl-col-pull-auto   { right: auto           ;}
				                }
					`
					},

				// col-push
					{
					name : 'col-push' ,
					code : 	
					`        /* Push */
				        /* -------------------------------------------- */

				            /* All viewports */
				            /* -------------------------------------------- */

				                    .col-push-1         { left: 8.33333333%     ;}
				                    .col-push-2         { left: 16.66666667%    ;}
				                    .col-push-3         { left: 25%             ;}
				                    .col-push-4         { left: 33.33333333%    ;}
				                    .col-push-5         { left: 41.66666667%    ;}
				                    .col-push-6         { left: 50%             ;}
				                    .col-push-7         { left: 58.33333333%    ;}
				                    .col-push-8         { left: 66.66666667%    ;}
				                    .col-push-9         { left: 75%             ;}
				                    .col-push-10        { left: 83.33333333%    ;}
				                    .col-push-11        { left: 91.66666667%    ;}
				                    .col-push-12        { left: 100%            ;}
				                    .col-push-auto      { left: auto            ;}

				            /* xs-only */
				            /* -------------------------------------------- */

				                @media (max-width: 575.98px) {
				                    .xs-o-col-push-1    { left: 8.33333333%     ;}
				                    .xs-o-col-push-2    { left: 16.66666667%    ;}
				                    .xs-o-col-push-3    { left: 25%             ;}
				                    .xs-o-col-push-4    { left: 33.33333333%    ;}
				                    .xs-o-col-push-5    { left: 41.66666667%    ;}
				                    .xs-o-col-push-6    { left: 50%             ;}
				                    .xs-o-col-push-7    { left: 58.33333333%    ;}
				                    .xs-o-col-push-8    { left: 66.66666667%    ;}
				                    .xs-o-col-push-9    { left: 75%             ;}
				                    .xs-o-col-push-10   { left: 83.33333333%    ;}
				                    .xs-o-col-push-11   { left: 91.66666667%    ;}
				                    .xs-o-col-push-12   { left: 100%            ;}
				                    .xs-o-col-push-auto { left: auto            ;}
				                }

				            /* sm */
				            /* -------------------------------------------- */

				                @media (min-width: 575.98px) {
				                    .sm-col-push-1      { left: 8.33333333%     ;}
				                    .sm-col-push-2      { left: 16.66666667%    ;}
				                    .sm-col-push-3      { left: 25%             ;}
				                    .sm-col-push-4      { left: 33.33333333%    ;}
				                    .sm-col-push-5      { left: 41.66666667%    ;}
				                    .sm-col-push-6      { left: 50%             ;}
				                    .sm-col-push-7      { left: 58.33333333%    ;}
				                    .sm-col-push-8      { left: 66.66666667%    ;}
				                    .sm-col-push-9      { left: 75%             ;}
				                    .sm-col-push-10     { left: 83.33333333%    ;}
				                    .sm-col-push-11     { left: 91.66666667%    ;}
				                    .sm-col-push-12     { left: 100%            ;}
				                    .sm-col-push-auto   { left: auto            ;}
				                }

				            /* sm-only */
				            /* -------------------------------------------- */

				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-col-push-1    { left: 8.33333333%     ;}
				                    .sm-o-col-push-2    { left: 16.66666667%    ;}
				                    .sm-o-col-push-3    { left: 25%             ;}
				                    .sm-o-col-push-4    { left: 33.33333333%    ;}
				                    .sm-o-col-push-5    { left: 41.66666667%    ;}
				                    .sm-o-col-push-6    { left: 50%             ;}
				                    .sm-o-col-push-7    { left: 58.33333333%    ;}
				                    .sm-o-col-push-8    { left: 66.66666667%    ;}
				                    .sm-o-col-push-9    { left: 75%             ;}
				                    .sm-o-col-push-10   { left: 83.33333333%    ;}
				                    .sm-o-col-push-11   { left: 91.66666667%    ;}
				                    .sm-o-col-push-12   { left: 100%            ;}
				                    .sm-o-col-push-auto { left: auto            ;}
				                }

				            /* md */ 
				            /* -------------------------------------------- */

				                @media (min-width: 767.98px) {
				                    .md-col-push-1      { left: 8.33333333%     ;}
				                    .md-col-push-2      { left: 16.66666667%    ;}
				                    .md-col-push-3      { left: 25%             ;}
				                    .md-col-push-4      { left: 33.33333333%    ;}
				                    .md-col-push-5      { left: 41.66666667%    ;}
				                    .md-col-push-6      { left: 50%             ;}
				                    .md-col-push-7      { left: 58.33333333%    ;}
				                    .md-col-push-8      { left: 66.66666667%    ;}
				                    .md-col-push-9      { left: 75%             ;}
				                    .md-col-push-10     { left: 83.33333333%    ;}
				                    .md-col-push-11     { left: 91.66666667%    ;}
				                    .md-col-push-12     { left: 100%            ;}
				                    .md-col-push-auto   { left: auto            ;}
				                }

				            /* md-only */
				            /* -------------------------------------------- */

				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-col-push-1    { left: 8.33333333%     ;}
				                    .md-o-col-push-2    { left: 16.66666667%    ;}
				                    .md-o-col-push-3    { left: 25%             ;}
				                    .md-o-col-push-4    { left: 33.33333333%    ;}
				                    .md-o-col-push-5    { left: 41.66666667%    ;}
				                    .md-o-col-push-6    { left: 50%             ;}
				                    .md-o-col-push-7    { left: 58.33333333%    ;}
				                    .md-o-col-push-8    { left: 66.66666667%    ;}
				                    .md-o-col-push-9    { left: 75%             ;}
				                    .md-o-col-push-10   { left: 83.33333333%    ;}
				                    .md-o-col-push-11   { left: 91.66666667%    ;}
				                    .md-o-col-push-12   { left: 100%            ;}
				                    .md-o-col-push-auto { left: auto            ;}
				                }

				            /* lg */
				            /* -------------------------------------------- */

				                @media (min-width: 991.98px) {
				                    .lg-col-push-1      { left: 8.33333333%     ;}
				                    .lg-col-push-2      { left: 16.66666667%    ;}
				                    .lg-col-push-3      { left: 25%             ;}
				                    .lg-col-push-4      { left: 33.33333333%    ;}
				                    .lg-col-push-5      { left: 41.66666667%    ;}
				                    .lg-col-push-6      { left: 50%             ;}
				                    .lg-col-push-7      { left: 58.33333333%    ;}
				                    .lg-col-push-8      { left: 66.66666667%    ;}
				                    .lg-col-push-9      { left: 75%             ;}
				                    .lg-col-push-10     { left: 83.33333333%    ;}
				                    .lg-col-push-11     { left: 91.66666667%    ;}
				                    .lg-col-push-12     { left: 100%            ;}
				                    .lg-col-push-auto   { left: auto            ;}
				                }

				            /* lg-only */
				            /* -------------------------------------------- */

				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-col-push-1    { left: 8.33333333%     ;}
				                    .lg-o-col-push-2    { left: 16.66666667%    ;}
				                    .lg-o-col-push-3    { left: 25%             ;}
				                    .lg-o-col-push-4    { left: 33.33333333%    ;}
				                    .lg-o-col-push-5    { left: 41.66666667%    ;}
				                    .lg-o-col-push-6    { left: 50%             ;}
				                    .lg-o-col-push-7    { left: 58.33333333%    ;}
				                    .lg-o-col-push-8    { left: 66.66666667%    ;}
				                    .lg-o-col-push-9    { left: 75%             ;}
				                    .lg-o-col-push-10   { left: 83.33333333%    ;}
				                    .lg-o-col-push-11   { left: 91.66666667%    ;}
				                    .lg-o-col-push-12   { left: 100%            ;}
				                    .lg-o-col-push-auto { left: auto            ;}
				                }
				                  
				            /* xl */
				            /* -------------------------------------------- */
				            
				                @media (min-width: 1199.98px) {
				                    .xl-col-push-1      { left: 8.33333333%     ;}
				                    .xl-col-push-2      { left: 16.66666667%    ;}
				                    .xl-col-push-3      { left: 25%             ;}
				                    .xl-col-push-4      { left: 33.33333333%    ;}
				                    .xl-col-push-5      { left: 41.66666667%    ;}
				                    .xl-col-push-6      { left: 50%             ;}
				                    .xl-col-push-7      { left: 58.33333333%    ;}
				                    .xl-col-push-8      { left: 66.66666667%    ;}
				                    .xl-col-push-9      { left: 75%             ;}
				                    .xl-col-push-10     { left: 83.33333333%    ;}
				                    .xl-col-push-11     { left: 91.66666667%    ;}
				                    .xl-col-push-12     { left: 100%            ;}
				                    .xl-col-push-auto   { left: auto            ;}
				                }
					`
					},

				// col-offset
					{
					name : 'col-offset' ,
					code : 	
					`        /* Offset */
				        /* -------------------------------------------- */

				            /* All viewports */
				            /* -------------------------------------------- */

				                    .col-offset-1       { margin-left: 8.33333333%  ;}
				                    .col-offset-2       { margin-left: 16.66666667% ;}
				                    .col-offset-3       { margin-left: 25%          ;}
				                    .col-offset-4       { margin-left: 33.33333333% ;}
				                    .col-offset-5       { margin-left: 41.66666667% ;}
				                    .col-offset-6       { margin-left: 50%          ;}
				                    .col-offset-7       { margin-left: 58.33333333% ;}
				                    .col-offset-8       { margin-left: 66.66666667% ;}
				                    .col-offset-9       { margin-left: 75%          ;}
				                    .col-offset-10      { margin-left: 83.33333333% ;}
				                    .col-offset-11      { margin-left: 91.66666667% ;}
				                    .col-offset-12      { margin-left: 100%         ;}
				                    .col-offset-0       { margin-left: 0            ;}

				            /* xs-only */
				            /* -------------------------------------------- */

				                @media (max-width: 575.98px) {
				                    .xs-o-col-offset-1  { margin-left: 8.33333333%  ;}
				                    .xs-o-col-offset-2  { margin-left: 16.66666667% ;}
				                    .xs-o-col-offset-3  { margin-left: 25%          ;}
				                    .xs-o-col-offset-4  { margin-left: 33.33333333% ;}
				                    .xs-o-col-offset-5  { margin-left: 41.66666667% ;}
				                    .xs-o-col-offset-6  { margin-left: 50%          ;}
				                    .xs-o-col-offset-7  { margin-left: 58.33333333% ;}
				                    .xs-o-col-offset-8  { margin-left: 66.66666667% ;}
				                    .xs-o-col-offset-9  { margin-left: 75%          ;}
				                    .xs-o-col-offset-10 { margin-left: 83.33333333% ;}
				                    .xs-o-col-offset-11 { margin-left: 91.66666667% ;}
				                    .xs-o-col-offset-12 { margin-left: 100%         ;}
				                    .xs-o-col-offset-0  { margin-left: 0            ;}
				                }

				            /* sm */
				            /* -------------------------------------------- */

				                @media (min-width: 575.98px) {
				                    .sm-col-offset-1    { margin-left: 8.33333333%  ;}
				                    .sm-col-offset-2    { margin-left: 16.66666667% ;}
				                    .sm-col-offset-3    { margin-left: 25%          ;}
				                    .sm-col-offset-4    { margin-left: 33.33333333% ;}
				                    .sm-col-offset-5    { margin-left: 41.66666667% ;}
				                    .sm-col-offset-6    { margin-left: 50%          ;}
				                    .sm-col-offset-7    { margin-left: 58.33333333% ;}
				                    .sm-col-offset-8    { margin-left: 66.66666667% ;}
				                    .sm-col-offset-9    { margin-left: 75%          ;}
				                    .sm-col-offset-10   { margin-left: 83.33333333% ;}
				                    .sm-col-offset-11   { margin-left: 91.66666667% ;}
				                    .sm-col-offset-12   { margin-left: 100%         ;}
				                    .sm-col-offset-0    { margin-left: 0            ;}
				                }

				            /* sm-only */
				            /* -------------------------------------------- */

				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-col-offset-1  { margin-left: 8.33333333%  ;}
				                    .sm-o-col-offset-2  { margin-left: 16.66666667% ;}
				                    .sm-o-col-offset-3  { margin-left: 25%          ;}
				                    .sm-o-col-offset-4  { margin-left: 33.33333333% ;}
				                    .sm-o-col-offset-5  { margin-left: 41.66666667% ;}
				                    .sm-o-col-offset-6  { margin-left: 50%          ;}
				                    .sm-o-col-offset-7  { margin-left: 58.33333333% ;}
				                    .sm-o-col-offset-8  { margin-left: 66.66666667% ;}
				                    .sm-o-col-offset-9  { margin-left: 75%          ;}
				                    .sm-o-col-offset-10 { margin-left: 83.33333333% ;}
				                    .sm-o-col-offset-11 { margin-left: 91.66666667% ;}
				                    .sm-o-col-offset-12 { margin-left: 100%         ;}
				                    .sm-o-col-offset-0  { margin-left: 0            ;}
				                }

				            /* md */ 
				            /* -------------------------------------------- */

				                @media (min-width: 767.98px) {
				                    .md-col-offset-1    { margin-left: 8.33333333%  ;}
				                    .md-col-offset-2    { margin-left: 16.66666667% ;}
				                    .md-col-offset-3    { margin-left: 25%          ;}
				                    .md-col-offset-4    { margin-left: 33.33333333% ;}
				                    .md-col-offset-5    { margin-left: 41.66666667% ;}
				                    .md-col-offset-6    { margin-left: 50%          ;}
				                    .md-col-offset-7    { margin-left: 58.33333333% ;}
				                    .md-col-offset-8    { margin-left: 66.66666667% ;}
				                    .md-col-offset-9    { margin-left: 75%          ;}
				                    .md-col-offset-10   { margin-left: 83.33333333% ;}
				                    .md-col-offset-11   { margin-left: 91.66666667% ;}
				                    .md-col-offset-12   { margin-left: 100%         ;}
				                    .md-col-offset-0    { margin-left: 0            ;}
				                }

				            /* md-only */
				            /* -------------------------------------------- */

				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-col-offset-1  { margin-left: 8.33333333%  ;}
				                    .md-o-col-offset-2  { margin-left: 16.66666667% ;}
				                    .md-o-col-offset-3  { margin-left: 25%          ;}
				                    .md-o-col-offset-4  { margin-left: 33.33333333% ;}
				                    .md-o-col-offset-5  { margin-left: 41.66666667% ;}
				                    .md-o-col-offset-6  { margin-left: 50%          ;}
				                    .md-o-col-offset-7  { margin-left: 58.33333333% ;}
				                    .md-o-col-offset-8  { margin-left: 66.66666667% ;}
				                    .md-o-col-offset-9  { margin-left: 75%          ;}
				                    .md-o-col-offset-10 { margin-left: 83.33333333% ;}
				                    .md-o-col-offset-11 { margin-left: 91.66666667% ;}
				                    .md-o-col-offset-12 { margin-left: 100%         ;}
				                    .md-o-col-offset-0  { margin-left: 0            ;}
				                }

				            /* lg */
				            /* -------------------------------------------- */

				                @media (min-width: 991.98px) {
				                    .lg-col-offset-1    { margin-left: 8.33333333%  ;}
				                    .lg-col-offset-2    { margin-left: 16.66666667% ;}
				                    .lg-col-offset-3    { margin-left: 25%          ;}
				                    .lg-col-offset-4    { margin-left: 33.33333333% ;}
				                    .lg-col-offset-5    { margin-left: 41.66666667% ;}
				                    .lg-col-offset-6    { margin-left: 50%          ;}
				                    .lg-col-offset-7    { margin-left: 58.33333333% ;}
				                    .lg-col-offset-8    { margin-left: 66.66666667% ;}
				                    .lg-col-offset-9    { margin-left: 75%          ;}
				                    .lg-col-offset-10   { margin-left: 83.33333333% ;}
				                    .lg-col-offset-11   { margin-left: 91.66666667% ;}
				                    .lg-col-offset-12   { margin-left: 100%         ;}
				                    .lg-col-offset-0    { margin-left: 0            ;}
				                }

				            /* lg-only */
				            /* -------------------------------------------- */

				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-col-offset-1  { margin-left: 8.33333333%  ;}
				                    .lg-o-col-offset-2  { margin-left: 16.66666667% ;}
				                    .lg-o-col-offset-3  { margin-left: 25%          ;}
				                    .lg-o-col-offset-4  { margin-left: 33.33333333% ;}
				                    .lg-o-col-offset-5  { margin-left: 41.66666667% ;}
				                    .lg-o-col-offset-6  { margin-left: 50%          ;}
				                    .lg-o-col-offset-7  { margin-left: 58.33333333% ;}
				                    .lg-o-col-offset-8  { margin-left: 66.66666667% ;}
				                    .lg-o-col-offset-9  { margin-left: 75%          ;}
				                    .lg-o-col-offset-10 { margin-left: 83.33333333% ;}
				                    .lg-o-col-offset-11 { margin-left: 91.66666667% ;}
				                    .lg-o-col-offset-12 { margin-left: 100%         ;}
				                    .lg-o-col-offset-0  { margin-left: 0            ;}
				                }
				                
				            /* xl */
				            /* -------------------------------------------- */
				            
				                @media (min-width: 1199.98px) {
				                    .xl-col-offset-1    { margin-left: 8.33333333%  ;}
				                    .xl-col-offset-2    { margin-left: 16.66666667% ;}
				                    .xl-col-offset-3    { margin-left: 25%          ;}
				                    .xl-col-offset-4    { margin-left: 33.33333333% ;}
				                    .xl-col-offset-5    { margin-left: 41.66666667% ;}
				                    .xl-col-offset-6    { margin-left: 50%          ;}
				                    .xl-col-offset-7    { margin-left: 58.33333333% ;}
				                    .xl-col-offset-8    { margin-left: 66.66666667% ;}
				                    .xl-col-offset-9    { margin-left: 75%          ;}
				                    .xl-col-offset-10   { margin-left: 83.33333333% ;}
				                    .xl-col-offset-11   { margin-left: 91.66666667% ;}
				                    .xl-col-offset-12   { margin-left: 100%         ;}
				                    .xl-col-offset-0    { margin-left: 0            ;}
				                }
					`
					}
			];

			finalCode_codeBlocks_css = byAndu_codeBlock_formatCodeString(codeBlocks_css);

		// Param Obj
		// --------------------------------

			var paramObj = {
				checkBoxes : {
					css : checkboxes_css
				} ,

				codeBlocks : {
					css : codeBlocks_css
				}
			};

			byAndu.pageConfigObj_setupObj(paramObj);
			byAndu.pageConfigObj_runConfig();

	})();

