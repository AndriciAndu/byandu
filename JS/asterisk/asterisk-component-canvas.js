
	// [asterisk] init - if necessary
	// -----------------------------------------------------

		var asterisk = asterisk || {} ;
		asterisk.components = asterisk.components || {} ;

	// Asterisk Component - [Canvas]
	// -----------------------------------------------------

		(function(){

			// Component.Object Setup 
			// -----------------------------------------------------
			
				asterisk.components.canvas = {};
				var canvasObj = asterisk.components.canvas;

			// Dependencies
			// -----------------------------------------------------

				// [asterisk.utility] init 
				// -----------------------------------------------------

					asterisk.utility = asterisk.utility || {} ;

				// hasClass()
				// -----------------------------------------------------

					asterisk.utility.hasClass = asterisk.utility.hasClass || function ( elem , klass ) {
						return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
					};

					var hasClass = asterisk.utility.hasClass;

				// getFirstClass()
				// -----------------------------------------------------

					asterisk.utility.getFirstClass = asterisk.utility.getFirstClass || function( elem , ...classes ) {

						// to accept both scenarios: array-of-classes || multiple class strings
						if (Array.isArray(classes[0])) { classes = classes[0] };

						var result = classes.find( klass => (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1 );

						if (result != undefined) 	{ return result }
						else 						{ return false 	}
					};

					var getFirstClass = asterisk.utility.getFirstClass;

				// hex2rgb()
				// -----------------------------------------------------

					asterisk.utility.hex2rgb = asterisk.utility.hex2rgb || function( hex , alpha ) {

						var r = parseInt(hex.slice(1, 3), 16),
					        g = parseInt(hex.slice(3, 5), 16),
					        b = parseInt(hex.slice(5, 7), 16);

					    if (alpha) {
					        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
					    } else {
					        return "rgb(" + r + ", " + g + ", " + b + ")";
					    }
					};

					var hex2rgb = asterisk.utility.hex2rgb;

			// Canvas Object - host for settings and main functions
			// -----------------------------------------------------

				canvasObj.settings = {

					activeStyles : [] , // generates content when each canvasType is parsed, at the end of the file

					default	: {
						particleMaxRadius 	: 40,
						particleColors 		: [ '#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2980B9' ],
						particleLimit 		: 200
					},

					canvases_active : []
				};

			// Init
			// -----------------------------------------------------

				// canvasObj.disableUnavailableCanvases();
				canvasObj.init = function(targetElem) {

					if (targetElem && (targetElem instanceof HTMLElement)) {

						if (hasClass(targetElem, 'bgCanvas')) { // initialize given Canvas

							canvasObj.canvas_setParams(targetElem)

						} else {								// initialize Canvases within targetElem

							var canvases = Array.from(targetElem.getElementsByClassName('bgCanvas'));
							canvases.map(canvas => canvasObj.canvas_setParams(canvas));
						}

					} else {									// initialize all document's Canvases

						var allCanvases = Array.from(document.getElementsByClassName('bgCanvas'));
						allCanvases.map(canvas => canvasObj.canvas_setParams(canvas));

					}
				};

				canvasObj.canvas_setParams = function(targetCanvas) {

					if (!targetCanvas.getAttribute('data-canvas-isInitialized')) {

						// Set type of Canvas (animation style)
						var current_class = getFirstClass(targetCanvas, canvasObj.settings.activeStyles);
						var current_type  = current_class.replace('bgCanvas-', '');

						// Set width and height (as CSS does not work for this) - so the elements do not look distorted
						targetCanvas.setAttribute('width',  targetCanvas.parentElement.offsetWidth);
						targetCanvas.setAttribute('height', targetCanvas.parentElement.offsetHeight);

						// Set parameters
						var particleMaxRadius = targetCanvas.getAttribute('data-canvas-particleMaxRadius') || canvasObj[current_type].particleMaxRadius || canvasObj.settings.default.particleMaxRadius ;
						var particleColors    = targetCanvas.getAttribute('data-canvas-particleColors')    || canvasObj[current_type].particleColors    || canvasObj.settings.default.particleColors    ;	
						var particleLimit     = targetCanvas.getAttribute('data-canvas-particleLimit')     || canvasObj[current_type].particleLimit     || canvasObj.settings.default.particleLimit     ;

						// Create ParticlesArray 
						var particlesArray = canvasObj[current_type].particles_generateArray(targetCanvas , particleMaxRadius, particleColors , particleLimit);	

						var initializedCanvas = true;
						var activeCanvas      = true;
						var ccObj = { targetCanvas, current_type, particlesArray, particleMaxRadius, particleColors , particleLimit , initializedCanvas , activeCanvas };

						canvasObj.settings.canvases_active.push(ccObj);

						// Run Animation
						canvasObj.canvas_run(ccObj);
					}
				};

			// Run
			// -----------------------------------------------------

				canvasObj.canvas_run = function(ccObj) { // ccObj = canvas-configuration object

					var context = ccObj.targetCanvas.getContext('2d');
					context.clearRect(0, 0, innerWidth, innerHeight); 
					ccObj.particlesArray.map(item => canvasObj[ccObj.current_type].particle_update(ccObj.targetCanvas , item , ccObj.particlesArray));

					if (ccObj.activeCanvas) { 
						ccObj.reqAnimFrame = requestAnimationFrame(function(){ canvasObj.canvas_run(ccObj) });
					};
				};

				canvasObj.checkInput = function(canvasElem_or_ccObj) {
					if (ccObj instanceof HTMLElement) {
						ccObj = canvasObj.settings.canvases_active.filter(obj => obj.targetCanvas === ccObj)
					};

					return ccObj
				};

				// Function to pause
				canvasObj.canvas_pause = function(targetElem) {
					targetElem.activeCanvas = false; 
				};

				canvasObj.canvas_resume = function(targetElem) {
					targetElem.activeCanvas = true; 
					canvasObj.canvas_run(targetElem);
				};

				// Function to remove the animation
				canvasObj.canvas_disable = function(targetElem) {

					// clear what was already displayed on canves on previous frame
					var context = targetElem.getContext('2d');
					context.clearRect(0, 0, innerWidth, innerHeight);

					// cancel animation
					targetElem.activeCanvas = 'false'; 
					cancelAnimationFrame(targetElem.reqAnimFrame);

					// remove properties - prevent memory leaks 
					// -- as elements removed from the DOM are not eliminated from memory if refferences are still present
					for (var key in targetElem) { if (targetElem.hasOwnProperty(key)) { delete targetElem[key] } }
				};

				canvasObj.disableUnavailableCanvases = function() {

					var canvases_active = canvasObj.settings.canvases_active;
					canvases_active = canvases_active.filter( function(canvas) {
						if (!document.contains(canvas)) { 
							canvas.canvas_disable();
							return false 
						}
					})

				};

			// Bubbles
			// -----------------------------------------------------

				canvasObj.settings.activeStyles.push('bgCanvas-bubbles');

				canvasObj.bubbles = {};

				canvasObj.bubbles.particles_generateArray = function(targetCanvas , particleMaxRadius, particleColors , particleLimit) {

					var particlesArray = [];

					var nrOfColors = particleColors.length;
					var cvs_width  = targetCanvas.width;
					var cvs_height = targetCanvas.height;

					for (var i=0; i<particleLimit; i++) {
						var r  =  Math.random() * 3 + 1;
						var x  =  Math.random() * (cvs_width  - r * 2) + r;	
						var y  =  Math.random() * (cvs_height - r * 2) + r;
						var dx = (Math.random() - 0.5) * 2;	
						var dy = (Math.random() - 0.5) * 2;

						particlesArray.push(canvasObj.bubbles.particle_generate(particleColors, nrOfColors, r, x, y, dx, dy)); 
					};

					return particlesArray
				};

				canvasObj.bubbles.particle_generate = function(particleColors, nrOfColors, r, x, y, dx, dy) {

					var p = {}; 
					p.r = r ;
					p.x = x ;
					p.y = y ;
					p.dx = dx ;
					p.dy = dy ;
					p.color = particleColors[Math.floor(Math.random() * nrOfColors)];

					return p
				};

				canvasObj.bubbles.particle_draw = function(targetCanvas , p) {
					var context = targetCanvas.getContext('2d');
					context.beginPath();
					context.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
					context.fillStyle = p.color;
					context.fill();
				};

				canvasObj.bubbles.particle_update = function(targetCanvas , p) {

					var cvs_width  = targetCanvas.width;
					var cvs_height = targetCanvas.height;

					if (p.x + p.r > cvs_width  || p.x - p.r < 0) { p.dx = -p.dx };
					if (p.y + p.r > cvs_height || p.y - p.r < 0) { p.dy = -p.dy };

					p.x += p.dx;
					p.y += p.dy;

					canvasObj.bubbles.particle_draw(targetCanvas , p);
				};

			// Confetti
			// -----------------------------------------------------

				canvasObj.settings.activeStyles.push('bgCanvas-confetti');

				canvasObj.confetti = {};

				canvasObj.confetti.particles_generateArray = function(targetCanvas , particleMaxRadius, particleColors , particleLimit) {

					var particlesArray = [];

					var nrOfColors = particleColors.length;
					var cvs_width  = targetCanvas.width;
					var cvs_height = targetCanvas.height;

					for (var i=0; i<particleLimit; i++) {
						var r  =  Math.random()  * 3 + 1;
						var x  =  Math.random()  * (cvs_width  - r * 2) + r;	
						var y  =  Math.random()  * (cvs_height - r * 2) + r;
						var dx = (Math.random()) * 3;	
						var dy = (Math.random()) * 3 + 2;

						particlesArray.push(canvasObj.confetti.particle_generate(particleColors, nrOfColors, r, x, y, dx, dy));
					};

					return particlesArray
				};

				canvasObj.confetti.particle_generate = function(particleColors, nrOfColors, r, x, y, dx, dy) {

					var p = {}; 
					p.r = r ;
					p.x = x ;
					p.y = y ;
					p.dx = dx ;
					p.dy = dy ;

					if (Math.random() < 0.5) { p.dx = -p.dx };

					p.steps = 0;
					p.maxSteps = (Math.random()) * 100 + 30;
					p.opacity  = 0.5;
					p.HEXcolor = particleColors[Math.floor(Math.random() * nrOfColors)];
					p.color    = hex2rgb(p.HEXcolor, p.opacity);

					return p
				};

				canvasObj.confetti.particle_draw = function(targetCanvas , p) {
					var context = targetCanvas.getContext('2d');
					context.beginPath();
					context.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
					context.fillStyle = p.color;
					context.fill(); 
				};

				canvasObj.confetti.particle_update = function(targetCanvas , p) {

					var cvs_width  = targetCanvas.width;
					var cvs_height = targetCanvas.height;

					p.x += p.dx;
					p.y += p.dy;

					p.steps += 1;

					if (p.steps < 5)               { p.opacity += 0.1; p.color = hex2rgb(p.HEXcolor, p.opacity) }
					if (p.steps > p.maxSteps - 10) { p.opacity -= 0.1; p.color = hex2rgb(p.HEXcolor, p.opacity) };

					if (p.steps > p.maxSteps) { 
						p.x  = Math.random() * cvs_width;
						p.y  = Math.random() * cvs_height - 100 ;
						p.dx = Math.random() * 3;	if (Math.random() < 0.5) { p.dx = -p.dx };	
						p.dy = Math.random() * 3 + 2;
						p.steps   = 0;
						p.opacity = 0.5;
						p.color   = hex2rgb(p.HEXcolor, p.opacity)
					};

					canvasObj.confetti.particle_draw(targetCanvas , p);
				};

			// Web
			// -----------------------------------------------------

				canvasObj.settings.activeStyles.push('bgCanvas-web');

				canvasObj.web = {};

				canvasObj.web.particles_generateArray = function(targetCanvas , particleMaxRadius, particleColors , particleLimit) {

					var particlesArray = [];

					var nrOfColors = particleColors.length;
					var cvs_width  = targetCanvas.width;
					var cvs_height = targetCanvas.height;

					for (var i=0; i<particleLimit; i++) {
						var r  =  Math.random() * 2 + 1;
						var x  =  Math.random() * (cvs_width  - r * 2) + r;	
						var y  =  Math.random() * (cvs_height - r * 2) + r;
						var dx = (Math.random() - 0.5);	
						var dy = (Math.random() - 0.5);

						particlesArray.push(canvasObj.web.particle_generate(particleColors, nrOfColors, r, x, y, dx, dy));
					};

					return particlesArray
				};

				canvasObj.web.particle_generate = function(particleColors, nrOfColors, r, x, y, dx, dy) {

					var p = {}; 
					p.r  = r;
					p.x  = x;	
					p.y  = y;
					p.dx = dx;	
					p.dy = dy;

					p.opacityVal  = Math.round( Math.random() * 10 ) / 10;
					p.HEXcolor = particleColors[Math.floor(Math.random() * nrOfColors)];
					p.color    = hex2rgb(p.HEXcolor, p.opacityVal) ;

					return p
				};

				canvasObj.web.particle_draw = function(targetCanvas , p) {
					var context = targetCanvas.getContext('2d');
					context.beginPath();
					context.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
					context.fillStyle = p.color;
					context.fill();
				};

				canvasObj.web.particle_update = function(targetCanvas , p , particlesArray) { 
					if (p.x + p.r > targetCanvas.width  || p.x - p.r < 0) { p.dx = -p.dx };
					if (p.y + p.r > targetCanvas.height || p.y - p.r < 0) { p.dy = -p.dy };

					var context = targetCanvas.getContext('2d');
					var limit = particlesArray.length;

					for (var i=0; i<limit; i++) {

						var alt_p = particlesArray[i];

						if (p != alt_p) { 
							if (Math.sqrt(Math.pow((alt_p.x-p.x), 2) + Math.pow((alt_p.y-p.y), 2)) < 40 ) {
								context.beginPath();
								context.moveTo(p.x, p.y)
								context.lineTo(alt_p.x, alt_p.y);
								context.closePath();
								context.lineWidth = 1;
								var opacity = Math.round( (p.opacity + alt_p.opacity) * 5) / 10;
								if (opacity > 0.5) { opacity -= 0.5 }; 
								context.strokeStyle = hex2rgb(p.HEXcolor, opacity) ;
								context.stroke();
							}
						}
					};

					p.x += p.dx;
					p.y += p.dy;

					canvasObj.web.particle_draw(targetCanvas , p);
				};

		})();