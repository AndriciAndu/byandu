
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

					asterisk.utility.getFirstClass = asterisk.utility.getFirstClass || function ( elem , ...classes ) {

						// to accept both scenarios: array-of-classes || multiple class strings
						if (Array.isArray(classes[0])) { classes = classes[0] };

						var result = classes.find( klass => (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1 );

						if (result != undefined) 	{ return result }
						else 						{ return false 	}
					};

					var getFirstClass = asterisk.utility.getFirstClass;

				// isJSON()
				// -----------------------------------------------------

					asterisk.utility.isJSON = asterisk.utility.isJSON || function ( data__string ) {

						if (typeof data__string === 'string' || data__string instanceof String) {

							try 		{ JSON.parse(data__string)  } 
							catch (e) 	{ return false 				};

							return true
							
						} else {

							console.log('Invalid input for', isJSON, ' : The argument [data__string] must be a [String]');
							console.log('Provided [data__string] value is : ', data__string)
							console.trace();
							console.log('----------------------');

							return false

						}
					};

					var isJSON = asterisk.utility.isJSON;

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

				asterisk.components.canvas.settings = {

					defaultSettings	: { // if no 
						particleMaxRadius 	: 40  ,
						particleLimit 		: 200 ,
						particleColors 		: [ '#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2980B9' ]
					},

					viewportSpec_defaultSettings : {
						xs : {
							particleMaxRadius 	: 30,
							particleLimit 		: 100
						} , 

						xl : {
							particleLimit 		: 300
						}
					},

					activeStyles    : [] , // generates content when each canvasType is parsed, at the end of the file
					canvases_active : []
				};

			// Initialize
			// -----------------------------------------------------

				asterisk.components.canvas.initialize = function(targetElem) {

					if (targetElem && (targetElem instanceof HTMLElement)) {

						if (hasClass(targetElem, 'bgCanvas')) { // initialize given Canvas

							asterisk.components.canvas.canvas_setParams(targetElem)

						} else {								// initialize Canvases within targetElem

							var canvases = Array.from(targetElem.getElementsByClassName('bgCanvas'));
							canvases.map(canvas => asterisk.components.canvas.canvas_setParams(canvas));
						}

					} else {									// initialize all document's Canvases

						var allCanvases = Array.from(document.getElementsByClassName('bgCanvas'));
						allCanvases.map(canvas => asterisk.components.canvas.canvas_setParams(canvas));

					}
				};

				asterisk.components.canvas.canvas_setParams = function(targetCanvas) {

					if (!targetCanvas.getAttribute('data-canvas-isInitialized')) {

						// Set type of Canvas (animation style)
						var current_class = getFirstClass(targetCanvas, asterisk.components.canvas.settings.activeStyles);
						var current_type  = current_class.replace('bgCanvas-', '');

						// Set width and height (as CSS does not work for this) - so the elements do not look distorted
						targetCanvas.setAttribute('width',  targetCanvas.parentElement.offsetWidth);
						targetCanvas.setAttribute('height', targetCanvas.parentElement.offsetHeight);

						// Set parameters
						var getParams = asterisk.components.canvas.intermediary.getParams;
						var particleMaxRadius = getParams(targetCanvas , current_type , 'particleMaxRadius');
						var particleColors    = getParams(targetCanvas , current_type , 'particleColors');
						var particleLimit     = getParams(targetCanvas , current_type , 'particleLimit');

						// Create ParticlesArray 
						var particlesArray = asterisk.components.canvas[current_type].particles_generateArray(targetCanvas , particleMaxRadius, particleColors , particleLimit);	

						var initializedCanvas = true;
						var activeCanvas      = true;
						var ccObj = { targetCanvas, current_type, particlesArray, particleMaxRadius, particleColors , particleLimit , initializedCanvas , activeCanvas };

						asterisk.components.canvas.settings.canvases_active.push(ccObj);

						// Run Animation
						asterisk.components.canvas.canvas_run(ccObj);
					}
				};

				asterisk.components.canvas.intermediary = {};

				asterisk.components.canvas.intermediary.getParams = function(targetCanvas__element , canvasType__string , targetParam__string) {

					var myCanvas = targetCanvas__element;
					var type     = canvasType__string;
					var param    = targetParam__string;

					var result = null;
					var dataAttr = myCanvas.getAttribute('data-canvas-' + param.toLowerCase());

					if (dataAttr) {

						dataAttr = dataAttr.replace(/'/g, '"');

						if (isJSON(dataAttr)) { result = setBreakpoint(dataAttr) } 
						else                  { result = dataAttr                }

					//} else if (asterisk.components.canvas.settings.viewportSpec_defaultSettings) {

					} else if (asterisk.components.canvas.settings.defaultSettings[param]) {

						result = asterisk.components.canvas.settings.defaultSettings[param]

					};

					return result
				};

				function setBreakpoint(data__object) {

					var data__object = JSON.parse(data__object);

					var mediaItems = [ 
						{ mediaType : 'xs' , index : 4 , bp_start :    0, bp_end :   576 } ,
						{ mediaType : 'sm' , index : 3 , bp_start :  576, bp_end :   768 } ,
						{ mediaType : 'md' , index : 2 , bp_start :  768, bp_end :   992 } ,
						{ mediaType : 'lg' , index : 1 , bp_start :  992, bp_end :  1200 } ,
						{ mediaType : 'xl' , index : 0 , bp_start : 1200, bp_end : 99999 }
					];

					var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
					var curr_mediaType = mediaItems.find(x => x.bp_start < windowWidth && windowWidth < x.bp_end);
					mediaItems_toCheck = ['xl' , 'lg' , 'md' , 'sm' , 'xs' , 'sm' , 'md' , 'lg' , 'xl'].slice(curr_mediaType['index']);

					var result; 
					for (var i=0; i<mediaItems_toCheck.length; i++) {
						var current = data__object[mediaItems_toCheck[i]];
						if (current && current != '') { result = current; break }
					};

					return result || null

				};

			// Run
			// -----------------------------------------------------

				asterisk.components.canvas.canvas_run = function(ccObj) { // ccObj = canvas-configuration object

					var context = ccObj.targetCanvas.getContext('2d');
					context.clearRect(0, 0, innerWidth, innerHeight); 
					ccObj.particlesArray.map(item => asterisk.components.canvas[ccObj.current_type].particle_update(ccObj.targetCanvas , item , ccObj.particlesArray));

					if (ccObj.activeCanvas) { 
						ccObj.reqAnimFrame = requestAnimationFrame(function(){ asterisk.components.canvas.canvas_run(ccObj) });
					};
				};

				asterisk.components.canvas.getCanvasConfigObject = function(canvasElem_or_ccObj) {
					if (canvasElem_or_ccObj instanceof HTMLElement) {
						canvasElem_or_ccObj = asterisk.components.canvas.settings.canvases_active.filter(obj => obj.targetCanvas === canvasElem_or_ccObj)[0];
					};

					return canvasElem_or_ccObj
				};

				// Function to pause
				asterisk.components.canvas.canvas_pause = function(targetElem) {

					var curr_ccObj = asterisk.components.canvas.getCanvasConfigObject(targetElem);

					if (curr_ccObj) { 
						curr_ccObj.activeCanvas = false 
					} else {
						console.log('Error in canvas_pause - invalid object')
					}
				};

				asterisk.components.canvas.canvas_resume = function(targetElem) {

					var curr_ccObj = asterisk.components.canvas.getCanvasConfigObject(targetElem);

					if (curr_ccObj) { 
						curr_ccObj.activeCanvas = true; 
						asterisk.components.canvas.canvas_run(curr_ccObj);
					} else {
						console.log('Error in canvas_pause - invalid object')
					}
					
				};

				// Function to remove the animation
				asterisk.components.canvas.canvas_disable = function(targetElem) {

					console.log(asterisk.components.canvas.settings.canvases_active);

					var curr_ccObj = asterisk.components.canvas.getCanvasConfigObject(targetElem);

					// clear what was already displayed on canves on previous frame
					var context = targetElem.getContext('2d');
					context.clearRect(0, 0, innerWidth, innerHeight);

					// cancel animation
					curr_ccObj.activeCanvas = 'false'; 
					cancelAnimationFrame(curr_ccObj.reqAnimFrame);

					asterisk.components.canvas.settings.canvases_active = asterisk.components.canvas.settings.canvases_active.filter(function(item){
						return item != curr_ccObj
					});

					console.log(asterisk.components.canvas.settings.canvases_active);
				};

			// checkDOM
			// -----------------------------------------------------

				asterisk.components.canvas.checkDOM = function() { console.log('checking DOM for canvas');

					// remove EventListeners from Elements that are no longer in the DOM 
					asterisk.components.canvas.settings.canvases_active = asterisk.components.canvas.settings.canvases_active.filter(function(item){

						if ((item !== document) && (!document.contains(item.targetCanvas)) ) {
							asterisk.components.canvas.canvas_disable(item.targetCanvas);
							console.log('Removed item : ', item.targetCanvas)
							return false
						} else {
							return true
						}
					});

				};

			// Bubbles
			// -----------------------------------------------------

				asterisk.components.canvas.settings.activeStyles.push('bgCanvas-bubbles');

				asterisk.components.canvas.bubbles = {};

				asterisk.components.canvas.bubbles.particles_generateArray = function(targetCanvas , particleMaxRadius, particleColors , particleLimit) {

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

						particlesArray.push(asterisk.components.canvas.bubbles.particle_generate(particleColors, nrOfColors, r, x, y, dx, dy)); 
					};

					return particlesArray
				};

				asterisk.components.canvas.bubbles.particle_generate = function(particleColors, nrOfColors, r, x, y, dx, dy) {

					var p = {}; 
					p.r = r ;
					p.x = x ;
					p.y = y ;
					p.dx = dx ;
					p.dy = dy ;
					p.color = particleColors[Math.floor(Math.random() * nrOfColors)];

					return p
				};

				asterisk.components.canvas.bubbles.particle_draw = function(targetCanvas , p) {
					var context = targetCanvas.getContext('2d');
					context.beginPath();
					context.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
					context.fillStyle = p.color;
					context.fill();
				};

				asterisk.components.canvas.bubbles.particle_update = function(targetCanvas , p) {

					var cvs_width  = targetCanvas.width;
					var cvs_height = targetCanvas.height;

					if (p.x + p.r > cvs_width  || p.x - p.r < 0) { p.dx = -p.dx };
					if (p.y + p.r > cvs_height || p.y - p.r < 0) { p.dy = -p.dy };

					p.x += p.dx;
					p.y += p.dy;

					asterisk.components.canvas.bubbles.particle_draw(targetCanvas , p);
				};

			// Confetti
			// -----------------------------------------------------

				asterisk.components.canvas.settings.activeStyles.push('bgCanvas-confetti');

				asterisk.components.canvas.confetti = {};

				asterisk.components.canvas.confetti.particles_generateArray = function(targetCanvas , particleMaxRadius, particleColors , particleLimit) {

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

						particlesArray.push(asterisk.components.canvas.confetti.particle_generate(particleColors, nrOfColors, r, x, y, dx, dy));
					};

					return particlesArray
				};

				asterisk.components.canvas.confetti.particle_generate = function(particleColors, nrOfColors, r, x, y, dx, dy) {

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

				asterisk.components.canvas.confetti.particle_draw = function(targetCanvas , p) {
					var context = targetCanvas.getContext('2d');
					context.beginPath();
					context.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
					context.fillStyle = p.color;
					context.fill(); 
				};

				asterisk.components.canvas.confetti.particle_update = function(targetCanvas , p) {

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

					asterisk.components.canvas.confetti.particle_draw(targetCanvas , p);
				};

			// Web
			// -----------------------------------------------------

				asterisk.components.canvas.settings.activeStyles.push('bgCanvas-web');

				asterisk.components.canvas.web = {};

				asterisk.components.canvas.web.particles_generateArray = function(targetCanvas , particleMaxRadius, particleColors , particleLimit) {

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

						particlesArray.push(asterisk.components.canvas.web.particle_generate(particleColors, nrOfColors, r, x, y, dx, dy));
					};

					return particlesArray
				};

				asterisk.components.canvas.web.particle_generate = function(particleColors, nrOfColors, r, x, y, dx, dy) {

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

				asterisk.components.canvas.web.particle_draw = function(targetCanvas , p) {
					var context = targetCanvas.getContext('2d');
					context.beginPath();
					context.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
					context.fillStyle = p.color;
					context.fill();
				};

				asterisk.components.canvas.web.particle_update = function(targetCanvas , p , particlesArray) { 
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

					asterisk.components.canvas.web.particle_draw(targetCanvas , p);
				};

		})();