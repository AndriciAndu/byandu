
	// [asteriskObj] init - if necessary
	// -----------------------------------------------------

		var asteriskObj = asteriskObj || {} ;
		asteriskObj.components = asteriskObj.components || {} ;

	// Asterisk Component - [Canvas]
	// -----------------------------------------------------

		(function(){

			// Component.Object Setup 
			// -----------------------------------------------------
			
				asteriskObj.components.canvas = {};
				var canvasObj = asteriskObj.components.canvas;

			// Dependencies
			// -----------------------------------------------------

				// dependencies Obj Setup 
				// -----------------------------------------------------

					asteriskObj.utility = asteriskObj.utility || {} ;

				// getFirstClass()
				// -----------------------------------------------------

					asteriskObj.utility.getFirstClass = asteriskObj.utility.getFirstClass || function( elem , ...classes ) {

						// to accept both scenarios: array-of-classes || multiple class strings
						if (Array.isArray(classes[0])) { classes = classes[0] };

						var result = classes.find( klass => (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1 );

						if (result != undefined) 	{ return result }
						else 						{ return false 	}
					};

					var getFirstClass = asteriskObj.utility.getFirstClass;

				// hex2rgb()
				// -----------------------------------------------------

					asteriskObj.utility.hex2rgb = asteriskObj.utility.hex2rgb || function( hex , alpha ) {

						var r = parseInt(hex.slice(1, 3), 16),
					        g = parseInt(hex.slice(3, 5), 16),
					        b = parseInt(hex.slice(5, 7), 16);

					    if (alpha) {
					        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
					    } else {
					        return "rgb(" + r + ", " + g + ", " + b + ")";
					    }
					};

					var hex2rgb = asteriskObj.utility.hex2rgb;

			// Canvas Object - host for settings and main functions
			// -----------------------------------------------------

				canvasObj.settings = {

					activeStyles : [],

					default	: {
						particleMaxRadius 	: 40,
						particleColors 		: [ '#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2980B9' ],
						particleLimit 		: 200
					},

					activeCanvases : []
				};

			// Init
			// -----------------------------------------------------

				canvasObj.initAll = function() {

					// Disable any previous Canvases that are no longer on page (for elements removed without page reload)
					canvasObj.disableUnavailableCanvases();

					// Get all Canvases and initializeaza each of them
					var canvasElements = Array.from(document.getElementsByClassName('bgCanvas'));

					canvasElements.map(canvas => canvasObj.init(canvas));
				};

				canvasObj.init = function(targetCanvas) {

					canvasObj.settings.activeCanvases.push(targetCanvas);

					// Set type of Canvas (animation style)
					var current_class = getFirstClass(targetCanvas, canvasObj.settings.activeStyles);
					var current_type  = targetCanvas.canvasType = current_class.replace('bgCanvas-', '');

					// Set width and height (as CSS does not work for this) - so the elements do not look distorted
					targetCanvas.setAttribute('width',  targetCanvas.parentElement.offsetWidth);
					targetCanvas.setAttribute('height', targetCanvas.parentElement.offsetHeight);

					// Set parameters
					targetCanvas.particleMaxRadius  = targetCanvas.getAttribute('data-canvas-particleMaxRadius') || canvasObj[current_type].particleMaxRadius 	|| canvasObj.settings.default.particleMaxRadius ;
					targetCanvas.particleColors 	= targetCanvas.getAttribute('data-canvas-particleColors') 	 || canvasObj[current_type].particleColors	 	|| canvasObj.settings.default.particleColors	;	
					targetCanvas.particleLimit 		= targetCanvas.getAttribute('data-canvas-particleLimit') 	 || canvasObj[current_type].particleLimit  		|| canvasObj.settings.default.particleLimit 	;

					// Create ParticlesArray
					if (!targetCanvas.initializedCanvas) {

						targetCanvas.generate_particlesArray = canvasObj[current_type].generate_particlesArray;
						targetCanvas.generate_particlesArray(targetCanvas);	

						targetCanvas.initializedCanvas 	= true;
						targetCanvas.activeCanvas 		= true;
					};

					// Function to animate the effect
					targetCanvas.canvas_run = function() {

						var context = this.getContext('2d');
						context.clearRect(0, 0, innerWidth, innerHeight);
						this.particlesArray.map(item => item.update());

						if (this.activeCanvas) { 
							targetCanvas.reqAnimFrame = requestAnimationFrame(function(){ targetCanvas.canvas_run(targetCanvas) });
						};
					};

					// Function to pause
					targetCanvas.canvas_pause = function() {
						this.activeCanvas = false; 
					};

					targetCanvas.canvas_resume = function() {
						this.activeCanvas = true; 
						this.canvas_run();
					};

					// Function to remove the animation
					targetCanvas.canvas_disable = function() {

						// clear what was already displayed on canves on previous frame
						var context = this.getContext('2d');
						context.clearRect(0, 0, innerWidth, innerHeight);

						// cancel animation
						this.activeCanvas = 'false'; 
						cancelAnimationFrame(this.reqAnimFrame);

						// remove properties - prevent memory leaks 
						// -- as elements removed from the DOM are not eliminated from memory if refferences are still present
						for (var key in this) { if (this.hasOwnProperty(key)) { delete this[key] } }
					};

					// Run Animation
					targetCanvas.canvas_run();
				};

				canvasObj.disableUnavailableCanvases = function() {

					canvasObj.settings.activeCanvases = canvasObj.settings.activeCanvases.filter( function(canvas) {
						if (!document.body.contains(canvas)) { 
							canvas.canvas_disable();
							return false 
						}
					})

				};

			// Bubbles
			// -----------------------------------------------------

				canvasObj.settings.activeStyles.push('bgCanvas-bubbles');

				canvasObj.bubbles = {};

				canvasObj.bubbles.generate_particlesArray = function(targetCanvas) {

					if (!targetCanvas.initializedCanvas) {

						var particleLimit = targetCanvas.particleLimit;
						targetCanvas.particlesArray = [];

						for (var i=0; i<particleLimit; i++) {
							var radius = Math.random() * 3 + 1;
							var x  =  Math.random() * (targetCanvas.width  - radius * 2) + radius;	
							var y  =  Math.random() * (targetCanvas.height - radius * 2) + radius;
							var dx = (Math.random() - 0.5) * 2;	
							var dy = (Math.random() - 0.5) * 2;

							targetCanvas.particlesArray.push(new Circle(x, y, dx, dy, radius));
						};
						
						function Circle(x, y, dx, dy, radius) {

							var context = targetCanvas.getContext('2d');

							this.x  = x;	this.y  = y;
							this.dx = dx;	this.dy = dy;
							this.radius 	= radius;
							this.minRadius 	= radius;
							this.color = targetCanvas.particleColors[Math.floor(Math.random() * targetCanvas.particleColors.length)];

							var current_canvasWidth  = targetCanvas.width;
							var current_canvasHeight = targetCanvas.height;

								this.draw = function() {
									context.beginPath();
									context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
									context.fillStyle = this.color;
									context.fill();
								};

								this.update = function() {

									if (this.x + this.radius > current_canvasWidth  || this.x - this.radius < 0) { this.dx = -this.dx };
									if (this.y + this.radius > current_canvasHeight || this.y - this.radius < 0) { this.dy = -this.dy };

									this.x += this.dx;
									this.y += this.dy;

									this.draw();
								};
						};

						targetCanvas.initializedCanvas = true;
					}
				};

			// Confetti
			// -----------------------------------------------------

				canvasObj.settings.activeStyles.push('bgCanvas-confetti');

				canvasObj.confetti = {};

				canvasObj.confetti.generate_particlesArray = function(targetCanvas) {

					if (!targetCanvas.initializedCanvas) {

						var particleLimit = targetCanvas.particleLimit;
						targetCanvas.particlesArray = [];

						for (var i=0; i<particleLimit; i++) {
							var radius = Math.random() * 3 + 1;
							var x  =  Math.random() * (targetCanvas.width  - radius * 2) + radius;	
							var y  =  Math.random() * (targetCanvas.height - radius * 2) + radius;
							var dx = (Math.random()) * 3;	
							var dy = (Math.random()) * 3 + 2;

							targetCanvas.particlesArray.push(new Circle(x, y, dx, dy, radius));
						};

						function Circle(x, y, dx, dy, radius) {

							var context = targetCanvas.getContext('2d');

							this.steps = 0;
							this.x  = x;	this.y  = y;
							this.dx = dx;	this.dy = dy;
							this.radius = radius;

							if (Math.random() < 0.5) { this.dx = -this.dx };

							this.maxSteps = (Math.random()) * 100 + 30;
							this.opacity = 0.5;

							this.HEXcolor = targetCanvas.particleColors[Math.floor(Math.random() * targetCanvas.particleColors.length)];
							this.color 	  = hex2rgb(this.HEXcolor, this.opacity);

							var current_canvasWidth  = targetCanvas.width;
							var current_canvasHeight = targetCanvas.height;

								this.draw = function() {
									context.beginPath();
									context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
									context.fillStyle = this.color;
									context.fill();
								};

								this.update = function() {

									this.x += this.dx;
									this.y += this.dy;

									this.steps += 1;

									if (this.steps < 5) 					{ this.opacity += 0.1; this.color = hex2rgb(this.HEXcolor, this.opacity) }
									if (this.steps > this.maxSteps - 10) 	{ this.opacity -= 0.1; this.color = hex2rgb(this.HEXcolor, this.opacity) };

									if (this.steps > this.maxSteps) { 
										this.x  = Math.random() * current_canvasWidth;
										this.y  = Math.random() * current_canvasHeight - 100 ;
										this.dx = Math.random() * 3;	if (Math.random() < 0.5) { this.dx = -this.dx };	
										this.dy = Math.random() * 3 + 2;
										this.steps 	 = 0;
										this.opacity = 0.5;
										this.color = hex2rgb(this.HEXcolor, this.opacity)
									};

									this.draw();
								};
						};

						targetCanvas.initializedCanvas = true;
					}
				};

			// Web
			// -----------------------------------------------------

				canvasObj.settings.activeStyles.push('bgCanvas-web');

				canvasObj.web = {};

				canvasObj.web.generate_particlesArray = function(targetCanvas) {

					if (!targetCanvas.initializedCanvas) {

						var particleLimit = targetCanvas.particleLimit;
						targetCanvas.particlesArray = [];

						for (var i=0; i<particleLimit; i++) {
							var radius = Math.random() * 2 + 1;
							var x  =  Math.random() * (targetCanvas.width  - radius * 2) + radius;	
							var y  =  Math.random() * (targetCanvas.height - radius * 2) + radius;
							var dx = (Math.random() - 0.5);	
							var dy = (Math.random() - 0.5);

							targetCanvas.particlesArray.push(new Circle(x, y, dx, dy, radius));
						};

						function Circle(x, y, dx, dy, radius) {

							var context = targetCanvas.getContext('2d');

							this.x  = x;	this.y  = y;
							this.dx = dx;	this.dy = dy;
							this.radius = radius;

							this.opacity 	= Math.round( Math.random() * 10 ) / 10;
							this.HEXcolor 	= targetCanvas.particleColors[Math.floor(Math.random() * targetCanvas.particleColors.length)];
							this.color 		= hex2rgb(this.HEXcolor, this.opacity) ;

							var current_canvasWidth  = targetCanvas.width;
							var current_canvasHeight = targetCanvas.height;

								this.draw = function() {
									context.beginPath();
									context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
									context.fillStyle = this.color;
									context.fill();
								};

								this.update = function() {

									if (this.x + this.radius > targetCanvas.width  || this.x - this.radius < 0) { this.dx = -this.dx };
									if (this.y + this.radius > targetCanvas.height || this.y - this.radius < 0) { this.dy = -this.dy };

									var myParticles = targetCanvas.particlesArray;

									for (var i=0; i<myParticles.length; i++) {

										if (this != myParticles[i]) {
											if (getDistance(this.x, this.y, myParticles[i].x, myParticles[i].y) < 40 ) {
												context.beginPath();
												context.moveTo(this.x, this.y)
												context.lineTo(myParticles[i].x, myParticles[i].y);
												context.closePath();
												context.lineWidth = 1;
												var currentOpacity = Math.round( (this.opacity + myParticles[i].opacity) * 5) / 10;
												if (currentOpacity > 0.5) { currentOpacity -= 0.5 }; 
												context.strokeStyle = hex2rgb(this.HEXcolor, currentOpacity) ;
												context.stroke();
											}
										}
									};

									this.x += this.dx;
									this.y += this.dy;

									this.draw();
								};

								function getDistance(x1, y1, x2, y2) {

									var xDistance = x2 - x1;
									var yDistance = y2 - y1;

									return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
								};
						};

						targetCanvas.initializedCanvas = true;
					}
				};

		})();