
	// Generate Demos
	// --------------------------------

		(function(){

			var demoItemsArray = [ 'bgCanvas-bubbles' , 'bgCanvas-confetti' , 'bgCanvas-web' ];

				var generateDemos_container = document.getElementsByClassName('_route_mainView-generateDemos')[0];

				demoItemsArray.map(function(effect) {

					var particleLimit;
					switch (effect) {
						case 'bgCanvas-bubbles' 	: particleLimit = 300; 	break;
						case 'bgCanvas-confetti' 	: particleLimit = 200; 	break;
						case 'bgCanvas-web' 		: particleLimit = 100; 	break;
					};

					var newElem = document.createElement('siv');
					newElem.classList = 'section-title';
					newElem.innerHTML = effect;
					generateDemos_container.appendChild(newElem);

					var newElem = document.createElement('div');
					newElem.classList = 'col-12 p-0';
					newElem.innerHTML = 
						'<div class="demoItem-container demoItem-container-'+effect+'" data-finalCodeId="'+effect+'" style="height: 250px"> '	+
							'<canvas class="demoItem bgCanvas '+effect+'" data-canvas-particleLimit="'+particleLimit+'"> </canvas> '			+
						'</div>'																												;
					generateDemos_container.appendChild(newElem);
				});


			// Generate HTML for Code-Tab(3)
			// --------------------------------

				byAndu_generateHTML_forCodeTab();
				byAndu_finalCode_generateRadioSelects('html', demoItemsArray, 'bgCanvas-');
				byAndu_finalCode_generateCheckboxes('js', demoItemsArray, 'bgCanvas-');
				byAndu_finalCode_initCheckboxes();

            // Generate codeBlocks innerHTML - HTML
            // --------------------------------

                var htmlCodeContainer = document.getElementsByClassName('finalCode-blockContainer-html')[0];

                demoItemsArray.map(function(effect){

                    var newElem = document.createElement('PRE');

                    newElem.classList = 'finalCode-block hidden';
                    newElem.classList.add('finalCode-block-'+effect);
                    newElem.setAttribute('data-finalCodeId', effect);

                    newElem.innerHTML = '    &lt;canvas class="bgCanvas '+effect+'"></canvas> ';

                    htmlCodeContainer.appendChild(newElem);
                });

                htmlCodeContainer.getElementsByClassName('finalCode-block')[0].classList.remove('hidden');

		})();

// Generate codeBlocks innerHTML - JS
// --------------------------------

	(function(){

		var finalCode_codeBlocks_js = [

			// General Init
				{
				name : null ,
				code : 	
				`    // [asteriskObj] init - if necessary
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
				`
				},

			// Dependencies
				{
				name : 'dependencies' ,
				code :
				`            // Dependencies (not required if using [asterisk-utility.js])
			            // -----------------------------------------------------

			                // getFirstClass()
			                // -----------------------------------------------------

			                    if (getFirstClass === undefined) {

			                        function getFirstClass( elem, ...classes ) {

			                            // to accept both scenarios: array-of-classes || multiple class strings
			                            if (Array.isArray(classes[0])) { classes = classes[0] };

			                            var result = classes.find( klass => (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1 );

			                            if (result != undefined)    { return result }
			                            else                        { return false  }

			                        }
			                    };

			                // hex2rgb()
			                // -----------------------------------------------------

			                    if (hex2rgb === undefined) {

			                        function hex2rgb(hex, alpha) {

			                            var r = parseInt(hex.slice(1, 3), 16),
			                                g = parseInt(hex.slice(3, 5), 16),
			                                b = parseInt(hex.slice(5, 7), 16);

			                            if (alpha) {
			                                return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
			                            } else {
			                                return "rgb(" + r + ", " + g + ", " + b + ")";
			                            }
			                        }
			                    };
				`
				},

			// Shared
				{
				name : null ,
				code : 
				`            // Canvas Object - host for settings and main functions
			            // -----------------------------------------------------

			                canvasObj.settings = {

			                    canvas_styles : [],

			                    default_settings    : {
			                        default_maxRadius       : 40,
			                        default_colorArray      : [ '#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2980B9' ],
			                        default_particleLimit   : 200
			                    },

			                    current_canvases : []
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

			                    canvasObj.settings.current_canvases.push(targetCanvas);

			                    // Set type of Canvas (animation style)
			                    var current_class = getFirstClass(targetCanvas, canvasObj.settings.canvas_styles);
			                    var current_type  = targetCanvas.canvasType = current_class.replace('bgCanvas-', '');

			                    // Set width and height (as CSS does not work for this) - so the elements do not look distorted
			                    targetCanvas.setAttribute('width',  targetCanvas.parentElement.offsetWidth);
			                    targetCanvas.setAttribute('height', targetCanvas.parentElement.offsetHeight);

			                    // Set parameters
			                    targetCanvas.maxRadius      = targetCanvas.getAttribute('data-canvas-maxRadius')     || canvasObj[current_type].default_maxRadius    || canvasObj.settings.default_settings.default_maxRadius   ;
			                    targetCanvas.colorArray     = targetCanvas.getAttribute('data-canvas-colorArray')    || canvasObj[current_type].default_colorArray   || canvasObj.settings.default_settings.default_colorArray  ;   
			                    targetCanvas.particleLimit  = targetCanvas.getAttribute('data-canvas-particleLimit') || canvasObj[current_type].default_particleLimit  || canvasObj.settings.default_settings.default_particleLimit ;

			                    // Create ParticlesArray
			                    if (!targetCanvas.initializedCanvas) {

			                        targetCanvas.generate_particlesArray = canvasObj[current_type].generate_particlesArray;
			                        targetCanvas.generate_particlesArray(targetCanvas); 

			                        targetCanvas.initializedCanvas  = true;
			                        targetCanvas.activeCanvas       = true;
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

			                    canvasObj.settings.current_canvases = canvasObj.settings.current_canvases.filter( function(canvas) {
			                        if (!document.body.contains(canvas)) { 
			                            canvas.canvas_disable();
			                            return false 
			                        }
			                    })

			                };
				`
				},

			// Canvas Bubbles
				{
				name : 'bgCanvas-bubbles',
				code : 
				`            // Bubbles
			            // -----------------------------------------------------

			                canvasObj.settings.canvas_styles.push('bgCanvas-bubbles');

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

			                            this.x  = x;    this.y  = y;
			                            this.dx = dx;   this.dy = dy;
			                            this.radius     = radius;
			                            this.minRadius  = radius;
			                            this.color = targetCanvas.colorArray[Math.floor(Math.random() * targetCanvas.colorArray.length)];

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
				`
				},

			// Canvas Confetti
				{
				name : 'bgCanvas-confetti' ,
				code : 
				`            // Confetti
			            // -----------------------------------------------------

			                canvasObj.settings.canvas_styles.push('bgCanvas-confetti');

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
			                            this.x  = x;    this.y  = y;
			                            this.dx = dx;   this.dy = dy;
			                            this.radius = radius;

			                            if (Math.random() < 0.5) { this.dx = -this.dx };

			                            this.maxSteps = (Math.random()) * 100 + 30;
			                            this.opacity = 0.5;

			                            this.HEXcolor = targetCanvas.colorArray[Math.floor(Math.random() * targetCanvas.colorArray.length)];
			                            this.color    = hex2rgb(this.HEXcolor, this.opacity);

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

			                                    if (this.steps < 5)                     { this.opacity += 0.1; this.color = hex2rgb(this.HEXcolor, this.opacity) }
			                                    if (this.steps > this.maxSteps - 10)    { this.opacity -= 0.1; this.color = hex2rgb(this.HEXcolor, this.opacity) };

			                                    if (this.steps > this.maxSteps) { 
			                                        this.x  = Math.random() * current_canvasWidth;
			                                        this.y  = Math.random() * current_canvasHeight - 100 ;
			                                        this.dx = Math.random() * 3;    if (Math.random() < 0.5) { this.dx = -this.dx };    
			                                        this.dy = Math.random() * 3 + 2;
			                                        this.steps   = 0;
			                                        this.opacity = 0.5;
			                                        this.color = hex2rgb(this.HEXcolor, this.opacity)
			                                    };

			                                    this.draw();
			                                };
			                        };

			                        targetCanvas.initializedCanvas = true;
			                    }
			                };
				`
				},

			// Canvas Web
				{
				name : 'bgCanvas-web',
				code : 
				`            // Web
			            // -----------------------------------------------------

			                canvasObj.settings.canvas_styles.push('bgCanvas-web');

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

			                            this.x  = x;    this.y  = y;
			                            this.dx = dx;   this.dy = dy;
			                            this.radius = radius;

			                            this.opacity    = Math.round( Math.random() * 10 ) / 10;
			                            this.HEXcolor   = targetCanvas.colorArray[Math.floor(Math.random() * targetCanvas.colorArray.length)];
			                            this.color      = hex2rgb(this.HEXcolor, this.opacity) ;

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

				`
				},

			// Closing Tags
				{
				name : null ,
				code : 
				`        })();`
				}
		];

		finalCode_codeBlocks_js = byAndu_codeBlock_formatCodeString(finalCode_codeBlocks_js);
		byAndu_codeBlock_generateInnerHTML(finalCode_codeBlocks_js , 'js');

	})();

	// Init Canvases
	// ----------------------------------

		asteriskObj.components.canvas.initAll();
