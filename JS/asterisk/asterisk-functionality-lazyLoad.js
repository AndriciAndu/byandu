
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;
		asteriskObj.functionality = asteriskObj.functionality || {} ;

	// Asterisk Effects - [EnterExit]
	// -----------------------------------------------------

		(function(){

			// Effects.Object Setup 
			// -----------------------------------------------------

				asteriskObj.functionality.lazyLoad = {};
				var lazyLoadObj = asteriskObj.functionality.lazyLoad;

				// store parameteres for each media-type
				lazyLoadObj.mediaItems = [ 
					{ mediaType : 'xs' , index : 0 , bp_start :    0, bp_end :   576 } ,
					{ mediaType : 'sm' , index : 1 , bp_start :  576, bp_end :   768 } ,
					{ mediaType : 'md' , index : 2 , bp_start :  768, bp_end :   992 } ,
					{ mediaType : 'lg' , index : 3 , bp_start :  992, bp_end :  1200 } ,
					{ mediaType : 'xl' , index : 4 , bp_start : 1200, bp_end : 99999 }
				];

				// store which media-types will be checked further
				// first-available : either incremental [larger-than-current] or decremental [largest-first-available]
				lazyLoadObj.mediaItems_toCheck = [];

			// Functionality
			// -----------------------------------------------------

				// get initial viewport-breakpoint and store parameters
				// -----------------------------------------------------

					lazyLoadObj.setBreakpoint = function() {

						var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
						lazyLoadObj.curr_mediaType = lazyLoadObj.mediaItems.find(item => item.bp_start < windowWidth && windowWidth < item.bp_end);
						lazyLoadObj.mediaItems_toCheck = ['xs' , 'sm' , 'md' , 'lg' , 'xl' , 'lg' , 'md' , 'sm' , 'xs'].slice(lazyLoadObj.curr_mediaType['index']);
					};

				// run
				// -----------------------------------------------------

					lazyLoadObj.run = function(targetElem) {

						if (targetElem) {

							lazyLoadObj.updateImage(img)

						} else {

							var targets = Array.from(document.getElementsByClassName('lazyLoad'));
							targets.map(img => lazyLoadObj.updateImage(img))

						}

					};

				// update individual image
				// -----------------------------------------------------

					lazyLoadObj.updateImage = function(elem) {

						var elem_srcset = elem.getAttribute('data-lazy-srcset') || null ;

						if (elem_srcset) {

							elem.srcset = elem_srcset.replace(/\t/g, '').replace(/\n/g, '').replace(/  /g, '').replace(/\"/g,'\''); 	// remove tab-spaces & line-breaks & extra spaces + swap single-quotes with double-quotes 
							elem_srcset = JSON.parse(elem.srcset);
							var size = lazyLoadObj.mediaItems_toCheck.find(size => elem_srcset[size]);						// get first available [mediaType] - closest larger || keep same

							if (size) { 

								var curr_src = elem_srcset[size];

								var newImg = document.createElement('IMG');
								newImg.classList = 'lazyLoad-dummyImg';
								newImg.src = curr_src;
								document.body.appendChild(newImg);

								elem.classList.remove('lazyLoad-loaded');

								newImg.addEventListener('load', function(){
									lazyLoadObj.updateImgSrc(elem , curr_src);
									newImg.parentElement.removeChild(newImg);
								})
							}
						}
					};

					// make fork for img.src or elem.background-image

					lazyLoadObj.updateImgSrc = function(elem , curr_src) {
						elem.src = curr_src;
						elem.classList.add('lazyLoad-loaded');
					};

				// init
				// -----------------------------------------------------

					lazyLoadObj.onWindowResize = function() {

						var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
						var lazyLoadObj = asteriskObj.functionality.lazyLoad;

						if (lazyLoadObj.curr_mediaType['bp_end'] < windowWidth) {
							lazyLoadObj.setBreakpoint();
							lazyLoadObj.run();
						};

						if (lazyLoadObj.curr_mediaType['mediaType'] == 'xl') {
							window.removeEventListener('resize', lazyLoadObj.onWindowResize)
						};
					};

				// init
				// -----------------------------------------------------

					lazyLoadObj.init = function() { // add parameter (like 'all') - if present run(); else just the other 2
						lazyLoadObj.setBreakpoint();
						lazyLoadObj.run();

						window.addEventListener('resize', lazyLoadObj.onWindowResize)
					};

					//asteriskObj.functionality.lazyLoad.init();
		})();