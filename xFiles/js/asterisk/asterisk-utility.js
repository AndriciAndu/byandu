

// https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
 

// CREATE VERSION WITH ENCAPSULATION // asterisk.hasClass() etc
// OR NOT - clean utility named functions should not interfere

// components and initialization - within componentsObject


	function obj_deepClone( myObject ) {
		return JSON.parse(JSON.stringify(myObject));
	};

	function isObject ( item ) {
		return (typeof item === "object" && !Array.isArray(item) && item !== null);
	};

// Checks || has* is*
// -----------------------------------------------------

	// has*
	// -----------------------------------------------------

		// hasClass()
		// -----------------------------------------------------

			function hasClass ( elem , klass ) {
				return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1
			};

			
			// function hasClass ( elem , klass ) {

			// 	if ( !(elem instanceof HTMLElement) ) { 

			// 		var consoleStyles = {
			// 			'color-red'   : 'color: #be0c0c;' ,
			// 			'color-blue'  : 'color: #613dcc;' ,
			// 			'error-title' : 'color: #be0c0c; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px;' ,
			// 			'log-title'   : 'text-decoration: underline' ,
			// 			'wrap-span'   : 'color: #613dcc; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px; font-weight: bold' ,
			// 			'line'        : 'color: rgba(3,3,3,.2);'
			// 		};

			// 		console.groupCollapsed( '%cError : hasClass( elem , klass ) | Wrong argument [type]' , consoleStyles['error-title'] );

			// 			console.group('1. %cError Details' , consoleStyles['log-title']);
			// 				console.log(
			// 					'%c * Argument %celem%c is not a %c[HTML Element]%c :' ,
			// 					consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] ,
			// 					elem);
			// 			console.groupEnd();

			// 			console.groupCollapsed('2. %cCall Path' , consoleStyles['log-title']);
			// 				console.trace();
			// 			console.groupEnd();

			// 			console.log('%c─────────────────────' , consoleStyles['line']);

			// 		console.groupEnd();

			// 		try {
			// 		  throw new TypeError('Whoops!');
			// 		} catch (e) {
			// 		  console.log(e.name + ': ' + e.message);
			// 		}

			// 	} else if ( !(typeof klass === 'string' || klass instanceof String) ) {

			// 		var consoleStyles = {
			// 			'color-red'   : 'color: #be0c0c;' ,
			// 			'color-blue'  : 'color: #613dcc;' ,
			// 			'error-title' : 'color: #be0c0c; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px;' ,
			// 			'log-title'   : 'text-decoration: underline' ,
			// 			'wrap-span'   : 'color: #613dcc; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px; font-weight: bold' ,
			// 			'line'        : 'color: rgba(3,3,3,.2);'
			// 		};

			// 		console.groupCollapsed( '%cError : hasClass( elem , klass ) | Wrong argument [type]' , consoleStyles['error-title'] );

			// 			console.group('1. %cError Details' , consoleStyles['log-title']);
			// 				console.log(
			// 					'%c * Argument %cklass%c is not a %c[String]%c :' ,
			// 					consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] ,
			// 					klass);
			// 			console.groupEnd();

			// 			console.groupCollapsed('2. %cCall Path' , consoleStyles['log-title']);
			// 				console.trace();
			// 			console.groupEnd();

			// 			console.log('%c─────────────────────' , consoleStyles['line']);

			// 		console.groupEnd();

			// 		try {
			// 		  throw new TypeError('Whoops!');
			// 		} catch (e) {
			// 		  console.log(e.name + ': ' + e.message);
			// 		}

			// 	} else {

			// 		return (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1

			// 	}

			// };

			//hasClass ( 'asdf' , 'klass' );
			//hasClass ( document.body , 24 );
			

		// hasTag()
		// -----------------------------------------------------

			function hasTag ( elem , tagName ) {
				return ( elem.tagName == tagName.toUpperCase() )
			};

		// hasAnyClass()
		// -----------------------------------------------------

			function hasAnyClass ( elem, ...classes ) {

				// to accept both scenarios: array of class-strings || multiple individual class-strings
				if ( Array.isArray(classes[0]) ) { classes = classes[0] };

				var result = classes.find( klass => (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1 );

				return result !== undefined

			};

				/*function hasAnyClass( elem, classArray, willCreateLog ) {
					if (classArray.constructor === Array) {
						for (var i=0; i<classArray.length; i++) {
							if ((" " + elem.className + " " ).indexOf( " " + classArray[i] + " " ) > -1 ) { return true }
						};
					} else if (willCreateLog) {
						console.log('Error in hasAnyClass() function - invalid argument - classArray is not an array: ');
						console.log(classArray);
						console.log('- - -');
					};

					return false
				};*/

				/* // Old Version

					function hasAnyClass( elem , classArray ) {
						for (var i=0; i<classArray.length; i++) {
							if ((" " + elem.className + " " ).indexOf( " " + classArray[i] + " " ) > -1 ) { return true }
						};
						return false
					};
					*/
 
		// hasAnyTag()
		// -----------------------------------------------------

			function hasAnyTag( elem, ...tagNames ) {

				// to accept both scenarios: array of tagName-strings || multiple individual tagName-strings
				if (Array.isArray(tagNames[0])) { tagNames = tagNames[0] };

				var result = tagNames.find( current_tag => elem.tagName.toUpperCase() == current_tag );

				return result !== undefined

			};

	// is*
	// -----------------------------------------------------

		// isElement()
		// -----------------------------------------------------
			function isElement(target) {
				return target instanceof HTMLElement
			};

		// isHTMLCollection()
		// -----------------------------------------------------

			function isHTMLCollection(target) {
				return target instanceof HTMLCollection
			};

			function isHTMLCollectionOrArray(targetVariable) { 
				return targetVariable instanceof HTMLCollection || targetVariable.constructor === Array
			};

		// isString()
		// -----------------------------------------------------

			function isString(current_input) {
				return (typeof current_input === 'string' || current_input instanceof String)
			};
			
		// isJSON()
		// -----------------------------------------------------

			function isJSON(data__string) {

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


// Returns || get* fetch*
// -----------------------------------------------------

	// getParent()
	// -----------------------------------------------------

		function getParent( elem, identifier ) {

			elemParent = elem.parentElement;

			if (elemParent) {

				var firstChar = identifier.charAt(0);

				if 	(verify()) 	{ return elemParent	} 
				else 			{ return getParent(elemParent, identifier) }

			} else { return null };

			// Check if elemParent has the required identifier
			function verify() {

				var identif_substr = identifier.substring(1); // remove first char - for class/id cases

				// search for class
				if (firstChar === '.') { 

					return ( " " + elemParent.className + " " ).indexOf( " " + identif_substr + " " ) > -1 

				// search for id
				} else if (firstChar === '#') { 

					return (elemParent.id 	 == identif_substr) 

				// search for tag
				} else { 

					return (elemParent.tagName == identifier.toUpperCase()) 

				}
			}
		};  

	// getChildren()
	// -----------------------------------------------------

		function getChildren(targetElement, identifier) {

			var children = Array.from(targetElement.children);

			if (identifier) {

				var firstChar = identifier.charAt(0);
				var identif_substr = identifier.substring(1); // remove first char - for class

				if 	(firstChar === '.') { children = children.filter(child => hasClass(child, identif_substr)) } 
				else 					{ children = children.filter(child => child.tagName == identifier.toUpperCase()) }

			};

			if (children.length < 1) { children = null };

			return children

		};

	// getOwnedClasses()
	// -----------------------------------------------------

		function getOwnedClasses( elem , ...classes ) {

			// to accept both scenarios: array-of-classes || multiple class strings
			if (Array.isArray(classes[0])) { classes = classes[0] };

			var resultsArray = classes.filter( klass => (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1 );

			if (resultsArray.length > 0) 	{ return resultsArray 	}
			else 							{ return null  			}

		};

	// getFirstClass()
	// -----------------------------------------------------

		function getFirstClass( elem, ...classes ) {

			// to accept both scenarios: array-of-classes || multiple class strings
			if (Array.isArray(classes[0])) { classes = classes[0] };

			var result = classes.find( klass => (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1 );

			if (result != undefined) 	{ return result }
			else 						{ return false 	}

		};

	// fetchHTML() - from HTML File (fetch HTTP Request)
	// -----------------------------------------------------

		 function fetchHTML(urlString) { 
			fetch(urlString)
				.then(function(response) { return response.text() })
		};

		// myElem.innerHTML = getHTML(linkToHTMLFile);

	// getObjectLength()
	// -----------------------------------------------------

		function getObjectLength(obj) {
			var size = 0, key;
			for (key in obj) { if (obj.hasOwnProperty(key)) { size++ } }
			return size;
		};

	// getFocusableChildren()
	// -----------------------------------------------------

		function getFocusableChildren(elem) {

			var initial_activeElem = document.activeElement;

			var children_all = Array.from(elem.getElementsByTagName("*"));
			var children_focusable = children_all.filter(function(child){
				child.focus();
				return document.activeElement === child
			});

			initial_activeElem.focus();

			return children_focusable
		};

	// getFocusableChildren()
	// -----------------------------------------------------
	
		function getHeight(elem) {
			return (elem.offsetHeight +
			parseInt(getComputedStyle(elem, null).getPropertyValue("margin-top")) +
			parseInt(getComputedStyle(elem, null).getPropertyValue("margin-bottom")))
		};

// Remove || remove*
// -----------------------------------------------------

	// removeClasses()
	// -----------------------------------------------------

		function removeClasses( elem, ...classes ) {

			// to accept both scenarios: array-of-classes || multiple class strings
			if (Array.isArray(classes[0])) { classes = classes[0] };

			elem.classList.remove(...classes);

		};

		// Just syntactic-sugar : can be substituted with element.classList.remove(...array) or element.classList.remove('arg', 'arg', 'arg')


// Array
// -----------------------------------------------------

	// Clone Array
	// -----------------------------------------------------

		function array_clone( myArray ) {

			if (Array.isArray(myArray)) { 

				return myArray.slice(0) 

			} else {

				var consoleStyles = {
					'color-red'   : 'color: #be0c0c;' ,
					'color-blue'  : 'color: #613dcc;' ,
					'error-title' : 'color: #be0c0c; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px;' ,
					'log-title'   : 'text-decoration: underline' ,
					'wrap-span'   : 'color: #613dcc; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px; font-weight: bold' ,
					'line'        : 'color: rgba(3,3,3,.2);'
				};

				console.groupCollapsed( '%cError : array_clone( myArray ) | Wrong argument [type]' , consoleStyles['error-title'] );

					console.group('1. %cError Details' , consoleStyles['log-title']);
						console.log(
							'%c * Argument %cmyArray%c is not an %c[array]%c :' ,
							consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] ,
							myArray);
					console.groupEnd();

					console.groupCollapsed('2. %cCall Path' , consoleStyles['log-title']);
						console.trace();
					console.groupEnd();

					console.log('%c─────────────────────' , consoleStyles['line']);

				console.groupEnd();
			}
			
		};

		//array_clone( document.body )

		/*
		function array_clone( myArray ) {

			if (Array.isArray(myArray)) { 

				return myArray.slice(0) 

			} else {

				var consoleStyles = {
					'color-red'   : 'color: #be0c0c;' ,
					'color-blue'  : 'color: #613dcc;' ,
					'wrap-title'  : 'color: #be0c0c; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px;' ,
					'wrap-span'   : 'color: #613dcc; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px; font-weight: bold' ,
				};

				console.groupCollapsed( '%cError : array_clone( myArray ) | Wrong argument [type]' , consoleStyles['wrap-title'] );
					console.log(
						'%c * Argument %cmyArray%c is not an %c[array]%c:'  ,
						consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] ,
						myArray);
					console.trace();
				console.groupEnd('Error : array_clone() | Wrong argument [type]');

			}
			
		};
		*/

		/*
		function array_clone( myArray ) {

			if (Array.isArray(myArray)) { 

				return myArray.slice(0) 

			} else {

				console.groupCollapsed(
					'%c%s' , 
					'color: #be0c0c; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px;' , 
					'Error : array_clone() | Wrong argument [type]');
					console.log('%c%s' , 'color: #be0c0c;' , '* Argument provided is not an [array] : ' , myArray);
					console.trace();
				console.groupEnd('Error : array_clone() | Wrong argument [type]');

			}
			
		};
		*/


	// Sort Array 
	// -----------------------------------------------------
		
		// 'in-place' sorting - just by calling the function, the initial array is modified
		// -----------------------------------------------------

			// array of objects
			function array_sort_objects ( current_array , targetProperty ) {
				current_array.sort(function(a, b) { return parseFloat(a[targetProperty]) - parseFloat(b[targetProperty]) })
			};

			// array of numbers
			function array_sort_values  ( current_array ) {
				current_array.sort(function(a, b) { return parseFloat(a) - parseFloat(b) })
			};

			// array of strings
			function array_sort_strings ( current_array ) {	
				current_array.sort()
			};

			function array_sort ( current_array , targetProperty ) {
				if (targetProperty) {
					current_array.sort(function(a, b) { return parseFloat(a[targetProperty]) - parseFloat(b[targetProperty]) })
				} else if (!isNaN(current_array[0])) {
					current_array.sort(function(a, b) { return parseFloat(a) - parseFloat(b) })
				} else {
					current_array.sort()
				}
			};

		// new Array sorting - returns cloned, sorted array
		// -----------------------------------------------------

			// array of objects
			function array_cloneAndSort_objects ( current_array , targetProperty ) {	
				var newArray = current_array.slice(0);
				newArray.sort(function(a, b) { return parseFloat(a[targetProperty]) - parseFloat(b[targetProperty]) });
				return newArray
			};

			// array of numbers
			function array_cloneAndSort_values  ( current_array ) {				
				var newArray = current_array.slice(0);
				newArray.sort(function(a, b) { return parseFloat(a) - parseFloat(b) });
				return newArray
			};

			// array of strings
			function array_cloneAndSort_strings ( current_array ) {				
				var newArray = current_array.slice(0);
				newArray.sort();
				return newArray
			};

			function array_cloneAndSort ( current_array , targetProperty ) {

				var newArray = current_array.slice(0);

				if (targetProperty) {
					newArray.sort(function(a, b) { return parseFloat(a[targetProperty]) - parseFloat(b[targetProperty]) });
				} else if (!isNaN(newArray[0])) {
					newArray.sort(function(a, b) { return parseFloat(a) - parseFloat(b) });
				} else {
					newArray.sort();
				};

				return newArray
			};

			// sort by property alphabetically
			// var asdf = colorsMainObj_concat.slice(0);

			// asdf.sort(function(a, b) {
			//     var textA = a.name;
			//     var textB = b.name;
			//     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			// });


	// Shuffle Array
	// -----------------------------------------------------
		// https://github.com/Daplie/knuth-shuffle
		// https://stackoverflow.com/a/12646864

		// 'in-place' shuffle - just by calling the function, the initial array is modified
		// -----------------------------------------------------

			function array_shuffle ( myArray ) {

				if (Array.isArray(myArray)) { 

					for (var i = myArray.length - 1; i > 0; i--) {
						var j = Math.floor(Math.random() * (i + 1));
						var temp = myArray[i];
						myArray[i] = myArray[j];
						myArray[j] = temp;
					}

				} else {

					var consoleStyles = {
						'color-red'   : 'color: #be0c0c;' ,
						'color-blue'  : 'color: #613dcc;' ,
						'error-title' : 'color: #be0c0c; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px;' ,
						'log-title'   : 'text-decoration: underline' ,
						'wrap-span'   : 'color: #613dcc; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px; font-weight: bold' ,
						'line'        : 'color: rgba(3,3,3,.2);'
					};

					console.groupCollapsed( '%cError : array_shuffle( myArray ) | Wrong argument [type]' , consoleStyles['error-title'] );

						console.group('1. %cError Details' , consoleStyles['log-title']);
							console.log(
								'%c * Argument %cmyArray%c is not an %c[array]%c :' ,
								consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] ,
								myArray);
						console.groupEnd();

						console.groupCollapsed('2. %cCall Path' , consoleStyles['log-title']);
							console.trace();
						console.groupEnd();

						console.log('%c─────────────────────' , consoleStyles['line']);

					console.groupEnd();
				}

			};

			//array_shuffle(document.body)

		// new Array shuffle - returns cloned, shuffled array
		// -----------------------------------------------------

			function array_cloneAndShuffle ( myArray ) {

				if (Array.isArray(myArray)) { 

					var newArray = myArray.slice(0);

					for (var i = newArray.length - 1; i > 0; i--) {
						var j = Math.floor(Math.random() * (i + 1));
						var temp = newArray[i];
						newArray[i] = newArray[j];
						newArray[j] = temp;
					};

					return newArray

				} else {

					var consoleStyles = {
						'color-red'   : 'color: #be0c0c;' ,
						'color-blue'  : 'color: #613dcc;' ,
						'error-title' : 'color: #be0c0c; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px;' ,
						'log-title'   : 'text-decoration: underline' ,
						'wrap-span'   : 'color: #613dcc; background: rgba(3,3,3,.1); padding: 0 5px; border-radius: 3px; font-weight: bold' ,
						'line'        : 'color: rgba(3,3,3,.2);'
					};

					console.groupCollapsed( '%cError : array_cloneAndShuffle( myArray ) | Wrong argument [type]' , consoleStyles['error-title'] );

						console.group('1. %cError Details' , consoleStyles['log-title']);
							console.log(
								'%c * Argument %cmyArray%c is not an %c[array]%c :' ,
								consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] , consoleStyles['wrap-span'] , consoleStyles['color-red'] ,
								myArray);
						console.groupEnd();

						console.groupCollapsed('2. %cCall Path' , consoleStyles['log-title']);
							console.trace();
						console.groupEnd();

						console.log('%c─────────────────────' , consoleStyles['line']);

					console.groupEnd();
				}
			};

			//array_cloneAndShuffle(document.body)


	// Array from
	// -----------------------------------------------------

		function array_from(current_input) {

			var newArray;

			if (isHTMLCollection(current_input)) { 
				
				newArray = Array.from(current_input)
				// old version: // [].slice.call(current_input)

			} else if (isJSON(current_input.replace(/'/g, '"'))) { 			// case "['a', 'b']"
				
				newArray = JSON.parse(current_input.replace(/'/g, '"')) 

			} else if (isString(current_input)) { 
				
				current_input = current_input	.replace('['    , ''  )		// case "[a, b]"				- remove the brackets
												.replace(']'    , ''  )		// ---
												.replace(/  +/g , ' ' )		// case "a  b   c d      e"		- remove multiple spaces
												.replace(/ ,/g  , ',' )		// case "a, b , c,d, e"			- remove spaces near comas
												.replace(/, /g  , ',' )		// ---
												.replace(/ , /g , ',' ); 	// ---

				// case "a b c d e"	(separated by space, not by comas)
				// check only if no comas are available (to not affect if multiple items in same string split "mathew, edward jones, michael scott, john, meh" )
				if (current_input.indexOf(',') == -1) { 
					current_input = current_input.replace(/ /g  , ',' ) 
				};	

				newArray = current_input.split(',')

			};

			return newArray
		};


	// Create Parent for Element (wrapper)
	// -----------------------------------------------------
		// unpure function - creates the element, and also returns the result to be used further on
		// use case: var new_parent = element_createParent(myTarget);

		function element_createParent(targetElement) {

			var current_parent = targetElement.parentElement;
			var parentToBe = document.createElement('div');

			current_parent.replaceChild(parentToBe, targetElement);		// set the parentToBe as child (instead of the targetElement)
			parentToBe.appendChild(targetElement);						// set element as child of parentToBe

			return parentToBe
		};

// Extra
// -----------------------------------------------------

	// copyText()
	// -----------------------------------------------------

		function copyText( elem ) {

			if (document.selection) { 

				var range = document.body.createTextRange();
				range.moveToElementText(elem);
				range.select().createTextRange();

			} else if (window.getSelection) {

				var range = document.createRange();
				range.selectNode(elem);
				window.getSelection().addRange(range);
	
			};

			document.execCommand("copy"); 

			var current_selection = window.getSelection ? window.getSelection() : document.selection;

			if (current_selection) {
				if (current_selection.removeAllRanges) {
					current_selection.removeAllRanges()
				} else if (current_selection.empty) { 
					current_selection.empty()
				}
			}

		};

	// Capitalize First Letter of String
	// -----------------------------------------------------------------

		function capitalizeFirstLetter(string) { return string.charAt(0).toUpperCase() + string.slice(1) };

// Need Further Dev
// -----------------------------------------------------

	// ScrollToTop() 						>> not actual scrolling, atm
	// ------------------------------------------------------------------
		function scrollToTop() {
			window.scrollTo(0, 0);
		};

	// .myScroll()
	// ------------------------------------------------------------------

		function myScroll(elem_toBeScrolled, elem_toScrollTo, offsetValue) {

			// if only the elem_toScrollTo (the desired target) is provided - aka ommiting the paret-to-be-scrolled (elem_toBeScrolled)
			if (!(elem_toBeScrolled instanceof HTMLElement && elem_toScrollTo instanceof HTMLElement)) {

				// if above condition, and an offset value was provided
				if (elem_toScrollTo && !isNaN(elem_toScrollTo)) { 
					offsetValue = elem_toScrollTo 
				};

				elem_toScrollTo = elem_toBeScrolled;
				elem_toBeScrolled = document.body;
			};

			var offset = offsetValue || 0;
			var initial_distance, finalPosition;

			if (elem_toBeScrolled === document.body) {
				initial_distance = elem_toScrollTo.getBoundingClientRect().top;
				finalPosition 	 = initial_distance + window.pageYOffset + offset;
			} else {
				initial_distance = elem_toScrollTo.offsetTop - elem_toBeScrolled.scrollTop;
				finalPosition 	 = initial_distance + elem_toBeScrolled.scrollTop + offset;
			};

			var step = Math.ceil(initial_distance / 16);

			runScroll(initial_distance, step, finalPosition);

			// ---

				function runScroll(distance, step, finalPosition) {

					if (elem_toBeScrolled === document.body) {
						var yOffset = window.pageYOffset;
						var scrolledElement = window;
					} else {
						var yOffset = elem_toBeScrolled.scrollTop;
						var scrolledElement = elem_toBeScrolled;
					};

					scrolledElement.scrollTo(0, yOffset + step);
					distance = distance - step;

					if (distance > 0) {

						if (distance > step) {
							requestAnimationFrame(function(){ runScroll(distance, step, finalPosition) })
						} else {
							requestAnimationFrame(function(){ scrolledElement.scrollTo(0, finalPosition) })
						}

					} else {

						if (distance < step) {
							requestAnimationFrame(function(){ runScroll(distance, step, finalPosition) })
						} else {
							requestAnimationFrame(function(){ scrolledElement.scrollTo(0, finalPosition) })
						}
					}
				}

		};

		function asdf_scroll(target) {

			var targets = getScrollableParents(target);
			targets.map(target => myScroll(target[0], target[1]));

			function getScrollableParents(target) {

				var scrollableParents = [];
				createScrollGroups(target);
				scrollableParents.reverse();

				return scrollableParents;

				// ---

					function createScrollGroups(elem) {

						var firstScrollableParent = getNearestScrollableParent(elem);
						scrollableParents.push([firstScrollableParent, elem]);

						if (firstScrollableParent != document.body) {
							createScrollGroups(firstScrollableParent)
						}
					};

					function getNearestScrollableParent(elem) {

						var current_parent = elem.parentElement;

						if (current_parent != null && current_parent != document.body ) { 
							if (isScrollable(current_parent)) 		{ return current_parent 							}
							else 									{ return getNearestScrollableParent(current_parent) }
						} else if (current_parent == document.body) { return document.body								}
					};

					function isScrollable(elem) {

						var rekt = elem.getBoundingClientRect();
						var innerHeight = rekt.bottom - rekt.top;
						var scrollHeight = elem.scrollHeight;

						return scrollHeight > innerHeight || innerHeight > window.innerHeight;
					};
			};

		}



	// .scrollIntoView()
	// ------------------------------------------------------------------

		function scrollIntoView(currentTarget, offsetValue) { 

			var offset = offsetValue || 0;
			var initial_distance = currentTarget.getBoundingClientRect().top - offset;
			var finalPosition 	 = initial_distance + window.pageYOffset;

			var step = Math.ceil(initial_distance / 16);

			function scrollFTW(distance, step, finalPosition) {

				window.scrollTo(0, window.pageYOffset + step);
				distance = distance - step;

				if (distance > 0) {

					if (distance > step) {
						requestAnimationFrame(function(){ scrollFTW(distance, step, finalPosition) })
					} else {
						requestAnimationFrame(function(){ window.scrollTo(0, finalPosition) })
					}

				} else {

					if (distance < step) {
						requestAnimationFrame(function(){ scrollFTW(distance, step, finalPosition) })
					} else {
						requestAnimationFrame(function(){ window.scrollTo(0, finalPosition) })
					}

				}
			};

			scrollFTW(initial_distance, step, finalPosition);
		};

	// scrollElementTo	
	// ------------------------------------------------------------------

		function scrollElementTo(elementToBeScrolled, currentTarget, offsetValue) { 

			// console.log({elementToBeScrolled, currentTarget, offsetValue})

			var offset = offsetValue || 0;
			var initial_distance = currentTarget.offsetTop - elementToBeScrolled.scrollTop - offset;
			var finalPosition 	 = initial_distance + elementToBeScrolled.scrollTop;

			var step = Math.ceil(initial_distance / 16);

			function scrollFTW(distance, step, finalPosition) {

				elementToBeScrolled.scrollTo(0, elementToBeScrolled.scrollTop + step);
				distance = distance - step;

				if (distance > 0) {

					if (distance > step) {
						requestAnimationFrame(function(){ scrollFTW(distance, step, finalPosition) })
					} else {
						requestAnimationFrame(function(){ elementToBeScrolled.scrollTo(0, finalPosition) })
					}

				} else {

					if (distance < step) {
						requestAnimationFrame(function(){ scrollFTW(distance, step, finalPosition) })
					} else {
						requestAnimationFrame(function(){ elementToBeScrolled.scrollTo(0, finalPosition) })
					}

				}
			};

			scrollFTW(initial_distance, step, finalPosition);
		};

	// Insert Element in DOM
	// -----------------------------------------------------------------
		function  insertAfter(newNode, referenceNode) 	{ referenceNode.parentNode.insertBefore(newNode, referenceNode)};
		function insertBefore(newNode, referenceNode) 	{ referenceNode.parentNode.insertBefore(newNode, referenceNode.nextElementSibling)};


// Need remaster
// -----------------------------------------------------

	// .rgb2hex()  											>> Take RGB value >>> return Hex value
	// -----------------------------------------------------

		function rgb2hex(currentValue) {

			if (currentValue.indexOf('rgba(') > -1) { var justValues = currentValue.replace('rgba(', '') }
			else                                    { var justValues = currentValue.replace( 'rgb(', '') };

			var currentColor = '';
			var color_1 = '';
			var color_2 = '';
			var color_3 = '';
			var currentStep = 1;
			
			for (var i=0; i<justValues.length; i++) {
				if (justValues[i] != ',' && justValues[i] != ')') { 
					currentColor = currentColor + justValues[i];
				} else if (currentStep < 4) { 
					if      (color_1 == '') { color_1 = currentColor }
					else if (color_2 == '') { color_2 = currentColor }
					else                    { color_3 = currentColor };
					currentColor = ''; currentStep++;
				}
			};

			color_2 = color_2.replace(' ', '');
			color_3 = color_3.replace(' ', '');

			color_1 = parseInt(color_1);
			color_2 = parseInt(color_2);
			color_3 = parseInt(color_3);

			function componentToHex(c) {
				var hex = c.toString(16);
				return hex.length == 1 ? "0" + hex : hex;
			};

			return componentToHex(color_1) + componentToHex(color_2) + componentToHex(color_3);
		};

	// Hex to RGB
	// -----------------------------------------------------------------

		function hex2rgb(hex, alpha) {
		    var r = parseInt(hex.slice(1, 3), 16),
		        g = parseInt(hex.slice(3, 5), 16),
		        b = parseInt(hex.slice(5, 7), 16);

		    if (alpha) {
		        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
		    } else {
		        return "rgb(" + r + ", " + g + ", " + b + ")";
		    }
		};

		function __asterisk__RGB_retRed(hex) 	{ var r = parseInt(hex.slice(1, 3), 16); return r };
		function __asterisk__RGB_retGreen(hex) 	{ var g = parseInt(hex.slice(3, 5), 16); return g };
		function __asterisk__RGB_retBlue(hex) 	{ var b = parseInt(hex.slice(5, 7), 16); return b };


/*
	var newElem = document.createElement('div');
	newElem.classList = '1 2 3 4 5';
	console.log(hasAnyClass(newElem, 'asdf',  '14'))
*/


/* */

	function string_remove_tabSpaces(myString) {
		return myString.replace(/\t/g, '')
	};

/* */
	
	function isInDOM( elem ) {
		return document.contains(elem)
	}

	// var test121212 = function() {
	// 	var newElem = document.createElement('div');
	// 	newElem.id = "test123";
	// 	console.log(document.contains(newElem));
	// 	console.log(newElem.getBoundingClientRect());
	// 	document.body.appendChild(newElem);
	// 	console.log(document.contains(newElem));
	// 	console.log(newElem.getBoundingClientRect());
	// 	newElem.parentElement.removeChild(newElem);
	// 	console.log(document.contains(newElem));
	// 	console.log(newElem.getBoundingClientRect());
	// 	console.log(newElem)
	// }; test121212();

	// function run123(klass) {
	// 	var items = Array.from(document.getElementsByClassName(klass));

	// 	items.map(function(item){
	// 		console.log(item);
	// 		console.log(document.body.contains(item))
	// 	})
	// };