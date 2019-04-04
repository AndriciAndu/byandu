

	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.functionality = asterisk.functionality || {} ;

	// Asterisk Effects - [EnterExit]
	// -----------------------------------------------------

		(function(){

			// Effects.Object Setup 
			// -----------------------------------------------------

				asterisk.functionality.skeletonOverlay = {};

			// Functionality
			// -----------------------------------------------------

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

					asterisk.functionality.skeletonOverlay.bgImg_setup = function( elem , imgSrc__string ) {

						elem.classList.add('skeletonOverlay');

						var img = new Image();
						img.skeletonOverlay_bgImage_targetElem = elem;

						img.addEventListener('load', evtListener__skeletonOverlay_bgImage_onLoad);
						img.src = imgSrc__string || img__elem.getAttribute('data-bgImg-src');

					};

					asterisk.functionality.skeletonOverlay.img_setup = function ( img__elem , wrapper__elem ) {

						var target = wrapper__elem || img__elem.parentElement;
						target.classList.add('skeletonOverlay');

						var img = new Image();
						img.skeletonOverlay_image_imageElem = img__elem;
						img.skeletonOverlay_image_wrapperElem = target;

						img.addEventListener('load', evtListener__skeletonOverlay_image_onLoad);
						img.src = img__elem.getAttribute('data-img-src');
						//img.src = (img__elem.src && img__elem.src != '') ? img__elem.src : img__elem.getAttribute('data-img-src');
					};

					function evtListener__skeletonOverlay_bgImage_onLoad(e) {

						var img = e.target;
						img.skeletonOverlay_bgImage_targetElem.style.backgroundImage = 'url('+img.src+')';
						img.removeEventListener('load', evtListener__skeletonOverlay_bgImage_onLoad);

						setTimeout(function(){ 
							requestAnimationFrame(function(){ 
								img.skeletonOverlay_bgImage_targetElem.classList.add('skeletonOverlay__exitTransition') 
							}) 
						} , 16);

						setTimeout(function(){ 
							img.skeletonOverlay_bgImage_targetElem.classList.remove('skeletonOverlay' , 'skeletonOverlay__exitTransition'); 
							img.skeletonOverlay_bgImage_targetElem = undefined;
						}, 1000);
					};

					function evtListener__skeletonOverlay_image_onLoad(e) {

						var img = e.target;
						img.removeEventListener('load', evtListener__skeletonOverlay_image_onLoad);

						setTimeout(function(){ 
							requestAnimationFrame(function(){ 
								img.skeletonOverlay_image_wrapperElem.classList.add('skeletonOverlay__exitTransition') 
							}) 
						} , 16);

						setTimeout(function(){ 
							img.skeletonOverlay_image_wrapperElem.classList.remove('skeletonOverlay' , 'skeletonOverlay__exitTransition');
							img.skeletonOverlay_image_wrapperElem = undefined;
							img.skeletonOverlay_image_imageElem = undefined;
						}, 1000);
					};

					function addWrapper( classList__string ) {
						// `element` is the element you want to wrap
						var parent = element.parentNode;
						var wrapper = document.createElement('div');

						if (classList__string && classList__string != 0) {
							wrapper.classList = classList__string
						};

						// set the wrapper as child (instead of the element)
						parent.replaceChild(wrapper, element);
						// set element as child of wrapper
						wrapper.appendChild(element);
					};

					function removeWrapper() {
						// `element` is the element you wrapped
						var parent = element.parentNode.parentNode;

						// set the wrapper as child (instead of the element)
						parent.replaceChild(element , wrapper);
						// set element as child of wrapper
						console.log(wrapper); 
					};

				// init
				// -----------------------------------------------------

					lazyLoadObj.init = function() { 
					};

					//asterisk.functionality.lazyLoad.init();
		})();

		//class = 'skeletonOverlay'
		//data-skeleton-imgSrc = 'imgSrc'

		function evtListener__skeletonOverlay_bgImage_setup ( elem , imgSrc__string ) {

			elem.classList.add('skeletonOverlay');

			var img = new Image();
			img.skeletonOverlay_bgImage_targetElem = elem;

			img.addEventListener('load', evtListener__skeletonOverlay_bgImage_onLoad);
			img.src = imgSrc__string || img__elem.getAttribute('data-bgImg-src');
		};

		function evtListener__skeletonOverlay_bgImage_onLoad(e) {

			var img = e.target;
			img.skeletonOverlay_bgImage_targetElem.style.backgroundImage = 'url('+img.src+')';
			img.removeEventListener('load', evtListener__skeletonOverlay_bgImage_onLoad);

			setTimeout(function(){ 
				requestAnimationFrame(function(){ 
					img.skeletonOverlay_bgImage_targetElem.classList.add('skeletonOverlay__exitTransition') 
				}) 
			} , 16);

			setTimeout(function(){ 
				img.skeletonOverlay_bgImage_targetElem.classList.remove('skeletonOverlay' , 'skeletonOverlay__exitTransition'); 
				img.skeletonOverlay_bgImage_targetElem = null 
			}, 1000);
		};

		function evtListener__skeletonOverlay_image_setup ( img__elem , wrapper__elem ) {

			var target = wrapper__elem || img__elem.parentElement;
			target.classList.add('skeletonOverlay');

			var img = new Image();
			img.skeletonOverlay_image_imageElem = img__elem;
			img.skeletonOverlay_image_wrapperElem = target;

			img.addEventListener('load', evtListener__skeletonOverlay_image_onLoad);
			img.src = (img__elem.src && img__elem.src != '') ? img__elem.src : img__elem.getAttribute('data-img-src');
		};

		function evtListener__skeletonOverlay_image_onLoad(e) {

			var img = e.target;
			img.removeEventListener('load', evtListener__skeletonOverlay_image_onLoad);

			setTimeout(function(){ 
				requestAnimationFrame(function(){ 
					img.skeletonOverlay_image_wrapperElem.classList.add('skeletonOverlay__exitTransition') 
				}) 
			} , 16);

			setTimeout(function(){ 
				img.skeletonOverlay_image_wrapperElem.classList.remove('skeletonOverlay' , 'skeletonOverlay__exitTransition');
				img.skeletonOverlay_image_wrapperElem = null;
				img.skeletonOverlay_image_imageElem = null;
			}, 1000);
		};