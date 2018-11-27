
	(function(){

		var demoItemsArray = [ 'row' , 'row-equal' ];

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// row
					{
					name : 'row' ,
					code : 	
					`    /* Grid System - Row */
				    /* -------------------------------------------- */

				        /* Shared */
				        /* -------------------------------------------- */

				            .row-1  > * , .sm-row-1  > * , .md-row-1  > * , .lg-row-1  > * , .xl-row-1  > * , 
				            .row-2  > * , .sm-row-2  > * , .md-row-2  > * , .lg-row-2  > * , .xl-row-2  > * ,  
				            .row-3  > * , .sm-row-3  > * , .md-row-3  > * , .lg-row-3  > * , .xl-row-3  > * ,  
				            .row-4  > * , .sm-row-4  > * , .md-row-4  > * , .lg-row-4  > * , .xl-row-4  > * ,  
				            .row-5  > * , .sm-row-5  > * , .md-row-5  > * , .lg-row-5  > * , .xl-row-5  > * ,  
				            .row-6  > * , .sm-row-6  > * , .md-row-6  > * , .lg-row-6  > * , .xl-row-6  > * ,  
				            .row-7  > * , .sm-row-7  > * , .md-row-7  > * , .lg-row-7  > * , .xl-row-7  > * ,  
				            .row-8  > * , .sm-row-8  > * , .md-row-8  > * , .lg-row-8  > * , .xl-row-8  > * ,  
				            .row-9  > * , .sm-row-9  > * , .md-row-9  > * , .lg-row-9  > * , .xl-row-9  > * ,  
				            .row-10 > * , .sm-row-10 > * , .md-row-10 > * , .lg-row-10 > * , .xl-row-10 > * ,  
				            .row-11 > * , .sm-row-11 > * , .md-row-11 > * , .lg-row-11 > * , .xl-row-11 > * ,  
				            .row-12 > * , .sm-row-12 > * , .md-row-12 > * , .lg-row-12 > * , .xl-row-12 > * ,  

				            .xs-o-row-1  > * , .sm-o-row-1  > * , .md-o-row-1  > * , .lg-o-row-1  > * ,
				            .xs-o-row-2  > * , .sm-o-row-2  > * , .md-o-row-2  > * , .lg-o-row-2  > * ,
				            .xs-o-row-3  > * , .sm-o-row-3  > * , .md-o-row-3  > * , .lg-o-row-3  > * ,
				            .xs-o-row-4  > * , .sm-o-row-4  > * , .md-o-row-4  > * , .lg-o-row-4  > * ,
				            .xs-o-row-5  > * , .sm-o-row-5  > * , .md-o-row-5  > * , .lg-o-row-5  > * ,
				            .xs-o-row-6  > * , .sm-o-row-6  > * , .md-o-row-6  > * , .lg-o-row-6  > * ,
				            .xs-o-row-7  > * , .sm-o-row-7  > * , .md-o-row-7  > * , .lg-o-row-7  > * ,
				            .xs-o-row-8  > * , .sm-o-row-8  > * , .md-o-row-8  > * , .lg-o-row-8  > * ,
				            .xs-o-row-9  > * , .sm-o-row-9  > * , .md-o-row-9  > * , .lg-o-row-9  > * ,
				            .xs-o-row-10 > * , .sm-o-row-10 > * , .md-o-row-10 > * , .lg-o-row-10 > * ,
				            .xs-o-row-11 > * , .sm-o-row-11 > * , .md-o-row-11 > * , .lg-o-row-11 > * ,
				            .xs-o-row-12 > * , .sm-o-row-12 > * , .md-o-row-12 > * , .lg-o-row-12 > * {

				                position: relative;     float: left;
				                display: inline-block;  min-height: 1px;
				                padding-right: 15px;    padding-left: 15px;

				            }

				        /* All viewports */
				        /* -------------------------------------------- */

				                .row-1  > *      { width: 100%       }
				                .row-2  > *      { width:  50%;      } 
				                .row-3  > *      { width:  33.3333%; } 
				                .row-4  > *      { width:  25%;      } 
				                .row-5  > *      { width:  20%;      } 
				                .row-6  > *      { width:  16.6666%; } 
				                .row-7  > *      { width:  14.2857%; } 
				                .row-8  > *      { width:  12.5%;    } 
				                .row-9  > *      { width:  11.1111%; } 
				                .row-10 > *      { width:  10%;      } 
				                .row-11 > *      { width:   9.0909%; } 
				                .row-12 > *      { width:   8.3333%; } 

				        /* xs-only */
				        /* -------------------------------------------- */

				            @media (max-width: 575.98px) {
				                .xs-o-row-1  > * { width: 100%       }
				                .xs-o-row-2  > * { width:  50%;      } 
				                .xs-o-row-3  > * { width:  33.3333%; } 
				                .xs-o-row-4  > * { width:  25%;      } 
				                .xs-o-row-5  > * { width:  20%;      } 
				                .xs-o-row-6  > * { width:  16.6666%; } 
				                .xs-o-row-7  > * { width:  14.2857%; } 
				                .xs-o-row-8  > * { width:  12.5%;    } 
				                .xs-o-row-9  > * { width:  11.1111%; } 
				                .xs-o-row-10 > * { width:  10%;      } 
				                .xs-o-row-11 > * { width:   9.0909%; } 
				                .xs-o-row-12 > * { width:   8.3333%; } 
				            }

				        /* sm */
				        /* -------------------------------------------- */

				            @media (min-width: 575.98px) {
				                .sm-row-1  > *   { width: 100%       }
				                .sm-row-2  > *   { width:  50%;      } 
				                .sm-row-3  > *   { width:  33.3333%; } 
				                .sm-row-4  > *   { width:  25%;      } 
				                .sm-row-5  > *   { width:  20%;      } 
				                .sm-row-6  > *   { width:  16.6666%; } 
				                .sm-row-7  > *   { width:  14.2857%; } 
				                .sm-row-8  > *   { width:  12.5%;    } 
				                .sm-row-9  > *   { width:  11.1111%; } 
				                .sm-row-10 > *   { width:  10%;      } 
				                .sm-row-11 > *   { width:   9.0909%; } 
				                .sm-row-12 > *   { width:   8.3333%; } 
				            }

				        /* sm-only */
				        /* -------------------------------------------- */

				            @media (min-width: 575.98px) and (max-width: 767.98px) {
				                .sm-o-row-1  > * { width: 100%       }
				                .sm-o-row-2  > * { width:  50%;      } 
				                .sm-o-row-3  > * { width:  33.3333%; } 
				                .sm-o-row-4  > * { width:  25%;      } 
				                .sm-o-row-5  > * { width:  20%;      } 
				                .sm-o-row-6  > * { width:  16.6666%; } 
				                .sm-o-row-7  > * { width:  14.2857%; } 
				                .sm-o-row-8  > * { width:  12.5%;    } 
				                .sm-o-row-9  > * { width:  11.1111%; } 
				                .sm-o-row-10 > * { width:  10%;      } 
				                .sm-o-row-11 > * { width:   9.0909%; } 
				                .sm-o-row-12 > * { width:   8.3333%; } 
				            }

				        /* md */
				        /* -------------------------------------------- */

				            @media (min-width: 767.98px) {
				                .md-row-1  > *   { width: 100%       }
				                .md-row-2  > *   { width:  50%;      } 
				                .md-row-3  > *   { width:  33.3333%; } 
				                .md-row-4  > *   { width:  25%;      } 
				                .md-row-5  > *   { width:  20%;      } 
				                .md-row-6  > *   { width:  16.6666%; } 
				                .md-row-7  > *   { width:  14.2857%; } 
				                .md-row-8  > *   { width:  12.5%;    } 
				                .md-row-9  > *   { width:  11.1111%; } 
				                .md-row-10 > *   { width:  10%;      } 
				                .md-row-11 > *   { width:   9.0909%; } 
				                .md-row-12 > *   { width:   8.3333%; } 
				            }

				        /* md-only */
				        /* -------------------------------------------- */

				            @media (min-width: 767.98px) and (max-width: 991.98px) {
				                .md-o-row-1  > * { width: 100%       }
				                .md-o-row-2  > * { width:  50%;      } 
				                .md-o-row-3  > * { width:  33.3333%; } 
				                .md-o-row-4  > * { width:  25%;      } 
				                .md-o-row-5  > * { width:  20%;      } 
				                .md-o-row-6  > * { width:  16.6666%; } 
				                .md-o-row-7  > * { width:  14.2857%; } 
				                .md-o-row-8  > * { width:  12.5%;    } 
				                .md-o-row-9  > * { width:  11.1111%; } 
				                .md-o-row-10 > * { width:  10%;      } 
				                .md-o-row-11 > * { width:   9.0909%; } 
				                .md-o-row-12 > * { width:   8.3333%; } 
				            }

				        /* lg */
				        /* -------------------------------------------- */

				            @media (min-width: 991.98px) {
				                .lg-row-1  > *   { width: 100%       }
				                .lg-row-2  > *   { width:  50%;      } 
				                .lg-row-3  > *   { width:  33.3333%; } 
				                .lg-row-4  > *   { width:  25%;      } 
				                .lg-row-5  > *   { width:  20%;      } 
				                .lg-row-6  > *   { width:  16.6666%; } 
				                .lg-row-7  > *   { width:  14.2857%; } 
				                .lg-row-8  > *   { width:  12.5%;    } 
				                .lg-row-9  > *   { width:  11.1111%; } 
				                .lg-row-10 > *   { width:  10%;      } 
				                .lg-row-11 > *   { width:   9.0909%; } 
				                .lg-row-12 > *   { width:   8.3333%; } 
				            }

				        /* lg-only */
				        /* -------------------------------------------- */

				            @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                .lg-o-row-1  > * { width: 100%       }
				                .lg-o-row-2  > * { width:  50%;      } 
				                .lg-o-row-3  > * { width:  33.3333%; } 
				                .lg-o-row-4  > * { width:  25%;      } 
				                .lg-o-row-5  > * { width:  20%;      } 
				                .lg-o-row-6  > * { width:  16.6666%; } 
				                .lg-o-row-7  > * { width:  14.2857%; } 
				                .lg-o-row-8  > * { width:  12.5%;    } 
				                .lg-o-row-9  > * { width:  11.1111%; } 
				                .lg-o-row-10 > * { width:  10%;      } 
				                .lg-o-row-11 > * { width:   9.0909%; } 
				                .lg-o-row-12 > * { width:   8.3333%; } 
				            }

				        /* xl  */
				        /* -------------------------------------------- */

				            @media (min-width: 1199.98px) {
				                .xl-row-1  > *   { width: 100%       }
				                .xl-row-2  > *   { width:  50%;      } 
				                .xl-row-3  > *   { width:  33.3333%; } 
				                .xl-row-4  > *   { width:  25%;      } 
				                .xl-row-5  > *   { width:  20%;      } 
				                .xl-row-6  > *   { width:  16.6666%; } 
				                .xl-row-7  > *   { width:  14.2857%; } 
				                .xl-row-8  > *   { width:  12.5%;    } 
				                .xl-row-9  > *   { width:  11.1111%; } 
				                .xl-row-10 > *   { width:  10%;      } 
				                .xl-row-11 > *   { width:   9.0909%; } 
				                .xl-row-12 > *   { width:   8.3333%; } 
				            }

					`
					},

				// row-equal
					{
					name : 'row-equal' ,
					code : 	
					`    /* Grid System - Row-equal */
				    /* -------------------------------------------- */

				        /* Shared */
				        /* -------------------------------------------- */

				            .row-equal      > * ,
				            .sm-row-equal   > * ,
				            .md-row-equal   > * ,
				            .lg-row-equal   > * ,
				            .xl-row-equal   > * ,
				            .xs-o-row-equal > * ,
				            .sm-o-row-equal > * ,
				            .md-o-row-equal > * ,
				            .lg-o-row-equal > * { 

				                position: relative;     float: left;
				                display: inline-block;  min-height: 1px;
				                padding-right: 15px;    padding-left: 15px;

				            }

				        /* All viewports */
				        /* -------------------------------------------- */

				                .row-equal > *:only-child { width: 100%; } 

				                .row-equal > *:first-child:nth-last-child(2),
				                .row-equal > *:first-child:nth-last-child(2)  ~ * { width: 50%;      } 

				                .row-equal > *:first-child:nth-last-child(3),
				                .row-equal > *:first-child:nth-last-child(3)  ~ * { width: 33.3333%; } 

				                .row-equal > *:first-child:nth-last-child(4),
				                .row-equal > *:first-child:nth-last-child(4)  ~ * { width: 25%;      } 

				                .row-equal > *:first-child:nth-last-child(5),
				                .row-equal > *:first-child:nth-last-child(5)  ~ * { width: 20%;      } 

				                .row-equal > *:first-child:nth-last-child(6),
				                .row-equal > *:first-child:nth-last-child(6)  ~ * { width: 16.6666%; } 

				                .row-equal > *:first-child:nth-last-child(7),
				                .row-equal > *:first-child:nth-last-child(7)  ~ * { width: 14.2857%; } 

				                .row-equal > *:first-child:nth-last-child(8),
				                .row-equal > *:first-child:nth-last-child(8)  ~ * { width: 12.5%;    } 

				                .row-equal > *:first-child:nth-last-child(9),
				                .row-equal > *:first-child:nth-last-child(9)  ~ * { width: 11.1111%; } 

				                .row-equal > *:first-child:nth-last-child(10),
				                .row-equal > *:first-child:nth-last-child(10) ~ * { width: 10%;      } 

				                .row-equal > *:first-child:nth-last-child(11),
				                .row-equal > *:first-child:nth-last-child(11) ~ * { width:  9.0909%; } 

				                .row-equal > *:first-child:nth-last-child(12),
				                .row-equal > *:first-child:nth-last-child(12) ~ * { width:  8.3333%; } 

				        /* xs-only */
				        /* -------------------------------------------- */

				            @media (max-width: 575.98px) {

				                .xs-o-row-equal > *:only-child { width: 100%; } 

				                .xs-o-row-equal > *:first-child:nth-last-child(2),
				                .xs-o-row-equal > *:first-child:nth-last-child(2)  ~ * { width: 50%;      } 

				                .xs-o-row-equal > *:first-child:nth-last-child(3),
				                .xs-o-row-equal > *:first-child:nth-last-child(3)  ~ * { width: 33.3333%; } 

				                .xs-o-row-equal > *:first-child:nth-last-child(4),
				                .xs-o-row-equal > *:first-child:nth-last-child(4)  ~ * { width: 25%;      } 

				                .xs-o-row-equal > *:first-child:nth-last-child(5),
				                .xs-o-row-equal > *:first-child:nth-last-child(5)  ~ * { width: 20%;      } 

				                .xs-o-row-equal > *:first-child:nth-last-child(6),
				                .xs-o-row-equal > *:first-child:nth-last-child(6)  ~ * { width: 16.6666%; } 

				                .xs-o-row-equal > *:first-child:nth-last-child(7),
				                .xs-o-row-equal > *:first-child:nth-last-child(7)  ~ * { width: 14.2857%; } 

				                .xs-o-row-equal > *:first-child:nth-last-child(8),
				                .xs-o-row-equal > *:first-child:nth-last-child(8)  ~ * { width: 12.5%;    } 

				                .xs-o-row-equal > *:first-child:nth-last-child(9),
				                .xs-o-row-equal > *:first-child:nth-last-child(9)  ~ * { width: 11.1111%; } 

				                .xs-o-row-equal > *:first-child:nth-last-child(10),
				                .xs-o-row-equal > *:first-child:nth-last-child(10) ~ * { width: 10%;      } 

				                .xs-o-row-equal > *:first-child:nth-last-child(11),
				                .xs-o-row-equal > *:first-child:nth-last-child(11) ~ * { width:  9.0909%; } 

				                .xs-o-row-equal > *:first-child:nth-last-child(12),
				                .xs-o-row-equal > *:first-child:nth-last-child(12) ~ * { width:  8.3333%; } 
				            }

				        /* sm */
				        /* -------------------------------------------- */

				            @media (min-width: 575.98px) {

				                .sm-row-equal > *:only-child { width: 100%; } 

				                .sm-row-equal > *:first-child:nth-last-child(2),
				                .sm-row-equal > *:first-child:nth-last-child(2)  ~ * { width: 50%;      } 

				                .sm-row-equal > *:first-child:nth-last-child(3),
				                .sm-row-equal > *:first-child:nth-last-child(3)  ~ * { width: 33.3333%; } 

				                .sm-row-equal > *:first-child:nth-last-child(4),
				                .sm-row-equal > *:first-child:nth-last-child(4)  ~ * { width: 25%;      } 

				                .sm-row-equal > *:first-child:nth-last-child(5),
				                .sm-row-equal > *:first-child:nth-last-child(5)  ~ * { width: 20%;      } 

				                .sm-row-equal > *:first-child:nth-last-child(6),
				                .sm-row-equal > *:first-child:nth-last-child(6)  ~ * { width: 16.6666%; } 

				                .sm-row-equal > *:first-child:nth-last-child(7),
				                .sm-row-equal > *:first-child:nth-last-child(7)  ~ * { width: 14.2857%; } 

				                .sm-row-equal > *:first-child:nth-last-child(8),
				                .sm-row-equal > *:first-child:nth-last-child(8)  ~ * { width: 12.5%;    } 

				                .sm-row-equal > *:first-child:nth-last-child(9),
				                .sm-row-equal > *:first-child:nth-last-child(9)  ~ * { width: 11.1111%; } 

				                .sm-row-equal > *:first-child:nth-last-child(10),
				                .sm-row-equal > *:first-child:nth-last-child(10) ~ * { width: 10%;      } 

				                .sm-row-equal > *:first-child:nth-last-child(11),
				                .sm-row-equal > *:first-child:nth-last-child(11) ~ * { width:  9.0909%; } 

				                .sm-row-equal > *:first-child:nth-last-child(12),
				                .sm-row-equal > *:first-child:nth-last-child(12) ~ * { width:  8.3333%; } 
				            }

				        /* sm-only */
				        /* -------------------------------------------- */

				            @media (min-width: 575.98px) and (max-width: 767.98px) {

				                .sm-o-row-equal > *:only-child { width: 100%; } 

				                .sm-o-row-equal > *:first-child:nth-last-child(2),
				                .sm-o-row-equal > *:first-child:nth-last-child(2)  ~ * { width: 50%;      } 

				                .sm-o-row-equal > *:first-child:nth-last-child(3),
				                .sm-o-row-equal > *:first-child:nth-last-child(3)  ~ * { width: 33.3333%; } 

				                .sm-o-row-equal > *:first-child:nth-last-child(4),
				                .sm-o-row-equal > *:first-child:nth-last-child(4)  ~ * { width: 25%;      } 

				                .sm-o-row-equal > *:first-child:nth-last-child(5),
				                .sm-o-row-equal > *:first-child:nth-last-child(5)  ~ * { width: 20%;      } 

				                .sm-o-row-equal > *:first-child:nth-last-child(6),
				                .sm-o-row-equal > *:first-child:nth-last-child(6)  ~ * { width: 16.6666%; } 

				                .sm-o-row-equal > *:first-child:nth-last-child(7),
				                .sm-o-row-equal > *:first-child:nth-last-child(7)  ~ * { width: 14.2857%; } 

				                .sm-o-row-equal > *:first-child:nth-last-child(8),
				                .sm-o-row-equal > *:first-child:nth-last-child(8)  ~ * { width: 12.5%;    } 

				                .sm-o-row-equal > *:first-child:nth-last-child(9),
				                .sm-o-row-equal > *:first-child:nth-last-child(9)  ~ * { width: 11.1111%; } 

				                .sm-o-row-equal > *:first-child:nth-last-child(10),
				                .sm-o-row-equal > *:first-child:nth-last-child(10) ~ * { width: 10%;      } 

				                .sm-o-row-equal > *:first-child:nth-last-child(11),
				                .sm-o-row-equal > *:first-child:nth-last-child(11) ~ * { width:  9.0909%; } 

				                .sm-o-row-equal > *:first-child:nth-last-child(12),
				                .sm-o-row-equal > *:first-child:nth-last-child(12) ~ * { width:  8.3333%; } 
				            }

				        /* md */
				        /* -------------------------------------------- */

				            @media (min-width: 767.98px) {

				                .md-row-equal > *:only-child { width: 100%; } 

				                .md-row-equal > *:first-child:nth-last-child(2),
				                .md-row-equal > *:first-child:nth-last-child(2)  ~ * { width: 50%;      } 

				                .md-row-equal > *:first-child:nth-last-child(3),
				                .md-row-equal > *:first-child:nth-last-child(3)  ~ * { width: 33.3333%; } 

				                .md-row-equal > *:first-child:nth-last-child(4),
				                .md-row-equal > *:first-child:nth-last-child(4)  ~ * { width: 25%;      } 

				                .md-row-equal > *:first-child:nth-last-child(5),
				                .md-row-equal > *:first-child:nth-last-child(5)  ~ * { width: 20%;      } 

				                .md-row-equal > *:first-child:nth-last-child(6),
				                .md-row-equal > *:first-child:nth-last-child(6)  ~ * { width: 16.6666%; } 

				                .md-row-equal > *:first-child:nth-last-child(7),
				                .md-row-equal > *:first-child:nth-last-child(7)  ~ * { width: 14.2857%; } 

				                .md-row-equal > *:first-child:nth-last-child(8),
				                .md-row-equal > *:first-child:nth-last-child(8)  ~ * { width: 12.5%;    } 

				                .md-row-equal > *:first-child:nth-last-child(9),
				                .md-row-equal > *:first-child:nth-last-child(9)  ~ * { width: 11.1111%; } 

				                .md-row-equal > *:first-child:nth-last-child(10),
				                .md-row-equal > *:first-child:nth-last-child(10) ~ * { width: 10%;      } 

				                .md-row-equal > *:first-child:nth-last-child(11),
				                .md-row-equal > *:first-child:nth-last-child(11) ~ * { width:  9.0909%; } 

				                .md-row-equal > *:first-child:nth-last-child(12),
				                .md-row-equal > *:first-child:nth-last-child(12) ~ * { width:  8.3333%; } 
				            }

				        /* md-only */
				        /* -------------------------------------------- */

				            @media (min-width: 767.98px) and (max-width: 991.98px) {

				                .md-o-row-equal > *:only-child { width: 100%; } 

				                .md-o-row-equal > *:first-child:nth-last-child(2),
				                .md-o-row-equal > *:first-child:nth-last-child(2)  ~ * { width: 50%;      } 

				                .md-o-row-equal > *:first-child:nth-last-child(3),
				                .md-o-row-equal > *:first-child:nth-last-child(3)  ~ * { width: 33.3333%; } 

				                .md-o-row-equal > *:first-child:nth-last-child(4),
				                .md-o-row-equal > *:first-child:nth-last-child(4)  ~ * { width: 25%;      } 

				                .md-o-row-equal > *:first-child:nth-last-child(5),
				                .md-o-row-equal > *:first-child:nth-last-child(5)  ~ * { width: 20%;      } 

				                .md-o-row-equal > *:first-child:nth-last-child(6),
				                .md-o-row-equal > *:first-child:nth-last-child(6)  ~ * { width: 16.6666%; } 

				                .md-o-row-equal > *:first-child:nth-last-child(7),
				                .md-o-row-equal > *:first-child:nth-last-child(7)  ~ * { width: 14.2857%; } 

				                .md-o-row-equal > *:first-child:nth-last-child(8),
				                .md-o-row-equal > *:first-child:nth-last-child(8)  ~ * { width: 12.5%;    } 

				                .md-o-row-equal > *:first-child:nth-last-child(9),
				                .md-o-row-equal > *:first-child:nth-last-child(9)  ~ * { width: 11.1111%; } 

				                .md-o-row-equal > *:first-child:nth-last-child(10),
				                .md-o-row-equal > *:first-child:nth-last-child(10) ~ * { width: 10%;      } 

				                .md-o-row-equal > *:first-child:nth-last-child(11),
				                .md-o-row-equal > *:first-child:nth-last-child(11) ~ * { width:  9.0909%; } 

				                .md-o-row-equal > *:first-child:nth-last-child(12),
				                .md-o-row-equal > *:first-child:nth-last-child(12) ~ * { width:  8.3333%; } 
				            }

				        /* lg */
				        /* -------------------------------------------- */

				            @media (min-width: 991.98px) {

				                .lg-row-equal > *:only-child { width: 100%; } 

				                .lg-row-equal > *:first-child:nth-last-child(2),
				                .lg-row-equal > *:first-child:nth-last-child(2)  ~ * { width: 50%;      } 

				                .lg-row-equal > *:first-child:nth-last-child(3),
				                .lg-row-equal > *:first-child:nth-last-child(3)  ~ * { width: 33.3333%; } 

				                .lg-row-equal > *:first-child:nth-last-child(4),
				                .lg-row-equal > *:first-child:nth-last-child(4)  ~ * { width: 25%;      } 

				                .lg-row-equal > *:first-child:nth-last-child(5),
				                .lg-row-equal > *:first-child:nth-last-child(5)  ~ * { width: 20%;      } 

				                .lg-row-equal > *:first-child:nth-last-child(6),
				                .lg-row-equal > *:first-child:nth-last-child(6)  ~ * { width: 16.6666%; } 

				                .lg-row-equal > *:first-child:nth-last-child(7),
				                .lg-row-equal > *:first-child:nth-last-child(7)  ~ * { width: 14.2857%; } 

				                .lg-row-equal > *:first-child:nth-last-child(8),
				                .lg-row-equal > *:first-child:nth-last-child(8)  ~ * { width: 12.5%;    } 

				                .lg-row-equal > *:first-child:nth-last-child(9),
				                .lg-row-equal > *:first-child:nth-last-child(9)  ~ * { width: 11.1111%; } 

				                .lg-row-equal > *:first-child:nth-last-child(10),
				                .lg-row-equal > *:first-child:nth-last-child(10) ~ * { width: 10%;      } 

				                .lg-row-equal > *:first-child:nth-last-child(11),
				                .lg-row-equal > *:first-child:nth-last-child(11) ~ * { width:  9.0909%; } 

				                .lg-row-equal > *:first-child:nth-last-child(12),
				                .lg-row-equal > *:first-child:nth-last-child(12) ~ * { width:  8.3333%; } 
				            }

				        /* lg-only */
				        /* -------------------------------------------- */

				            @media (min-width: 991.98px) and (max-width: 1199.98px) {

				                .lg-o-row-equal > *:only-child { width: 100%; } 

				                .lg-o-row-equal > *:first-child:nth-last-child(2),
				                .lg-o-row-equal > *:first-child:nth-last-child(2)  ~ * { width: 50%;      } 

				                .lg-o-row-equal > *:first-child:nth-last-child(3),
				                .lg-o-row-equal > *:first-child:nth-last-child(3)  ~ * { width: 33.3333%; } 

				                .lg-o-row-equal > *:first-child:nth-last-child(4),
				                .lg-o-row-equal > *:first-child:nth-last-child(4)  ~ * { width: 25%;      } 

				                .lg-o-row-equal > *:first-child:nth-last-child(5),
				                .lg-o-row-equal > *:first-child:nth-last-child(5)  ~ * { width: 20%;      } 

				                .lg-o-row-equal > *:first-child:nth-last-child(6),
				                .lg-o-row-equal > *:first-child:nth-last-child(6)  ~ * { width: 16.6666%; } 

				                .lg-o-row-equal > *:first-child:nth-last-child(7),
				                .lg-o-row-equal > *:first-child:nth-last-child(7)  ~ * { width: 14.2857%; } 

				                .lg-o-row-equal > *:first-child:nth-last-child(8),
				                .lg-o-row-equal > *:first-child:nth-last-child(8)  ~ * { width: 12.5%;    } 

				                .lg-o-row-equal > *:first-child:nth-last-child(9),
				                .lg-o-row-equal > *:first-child:nth-last-child(9)  ~ * { width: 11.1111%; } 

				                .lg-o-row-equal > *:first-child:nth-last-child(10),
				                .lg-o-row-equal > *:first-child:nth-last-child(10) ~ * { width: 10%;      } 

				                .lg-o-row-equal > *:first-child:nth-last-child(11),
				                .lg-o-row-equal > *:first-child:nth-last-child(11) ~ * { width:  9.0909%; } 

				                .lg-o-row-equal > *:first-child:nth-last-child(12),
				                .lg-o-row-equal > *:first-child:nth-last-child(12) ~ * { width:  8.3333%; } 
				            }

				        /* xl  */
				        /* -------------------------------------------- */

				            @media (min-width: 1199.98px) {

				                .xl-row-equal > *:only-child { width: 100%; } 

				                .xl-row-equal > *:first-child:nth-last-child(2),
				                .xl-row-equal > *:first-child:nth-last-child(2)  ~ * { width: 50%;      } 

				                .xl-row-equal > *:first-child:nth-last-child(3),
				                .xl-row-equal > *:first-child:nth-last-child(3)  ~ * { width: 33.3333%; } 

				                .xl-row-equal > *:first-child:nth-last-child(4),
				                .xl-row-equal > *:first-child:nth-last-child(4)  ~ * { width: 25%;      } 

				                .xl-row-equal > *:first-child:nth-last-child(5),
				                .xl-row-equal > *:first-child:nth-last-child(5)  ~ * { width: 20%;      } 

				                .xl-row-equal > *:first-child:nth-last-child(6),
				                .xl-row-equal > *:first-child:nth-last-child(6)  ~ * { width: 16.6666%; } 

				                .xl-row-equal > *:first-child:nth-last-child(7),
				                .xl-row-equal > *:first-child:nth-last-child(7)  ~ * { width: 14.2857%; } 

				                .xl-row-equal > *:first-child:nth-last-child(8),
				                .xl-row-equal > *:first-child:nth-last-child(8)  ~ * { width: 12.5%;    } 

				                .xl-row-equal > *:first-child:nth-last-child(9),
				                .xl-row-equal > *:first-child:nth-last-child(9)  ~ * { width: 11.1111%; } 

				                .xl-row-equal > *:first-child:nth-last-child(10),
				                .xl-row-equal > *:first-child:nth-last-child(10) ~ * { width: 10%;      } 

				                .xl-row-equal > *:first-child:nth-last-child(11),
				                .xl-row-equal > *:first-child:nth-last-child(11) ~ * { width:  9.0909%; } 

				                .xl-row-equal > *:first-child:nth-last-child(12),
				                .xl-row-equal > *:first-child:nth-last-child(12) ~ * { width:  8.3333%; } 
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

		// demo1
		// --------------------------------

			function grid_demo1_update(current_case){

				var a = document.getElementsByClassName('grid-row-test1-lineContainer')[0];
				var b = document.getElementsByClassName('grid-row-test1-itemContainer')[0];

				var indexContainer = document.getElementsByClassName('grid-row-index')[0];
				var current_index = parseInt(indexContainer.getAttribute('data-index'));

				if (current_case == 'add') {

					var newElem = document.createElement('p');
					newElem.innerHTML = '&lt;div> &lt;/div>';
					a.appendChild(newElem);

					var newElem_2 = document.createElement('DIV');
					newElem_2.classList = 'grid-row-test1-item';
					b.appendChild(newElem_2);

					indexContainer.setAttribute('data-index', current_index + 1);

				} else if (current_case == 'remove') {

					var current_target = a.getElementsByTagName('p')[0];
					if (current_target) { current_target.parentElement.removeChild(current_target) };

					var current_target_2 = b.getElementsByClassName('grid-row-test1-item')[0];
					if (current_target_2) { current_target_2.parentElement.removeChild(current_target_2) };

					if (current_index > 0) { indexContainer.setAttribute('data-index', current_index - 1) };

				}
			};

			document.getElementsByClassName('grid-row-add')   [0].addEventListener('click', function(){ grid_demo1_update('add')    });
			document.getElementsByClassName('grid-row-remove')[0].addEventListener('click', function(){ grid_demo1_update('remove') });

			document.getElementsByClassName('grid-row-select')[0].addEventListener('change', function(){

				var current_value = this.value;
				document.getElementsByClassName('grid-row-test1-lineContainer')[0].previousElementSibling.innerHTML = '&lt;div class="<b-r>'+current_value+'</b-r>"';
				document.getElementsByClassName('grid-row-test1-itemContainer')[0].classList = 'col-12 grid-row-test1-itemContainer' + ' ' + current_value;

			});

	})();
