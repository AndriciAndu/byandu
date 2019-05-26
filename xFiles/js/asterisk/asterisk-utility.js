
						//let allParametersAreValid = (logArguments.find(x => !x.isValid) === undefined);

// https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
 

// CREATE VERSION WITH ENCAPSULATION // asterisk.hasClass() etc
// OR NOT - clean utility named functions should not interfere

// components and initialization - within componentsObject

// https://davidwalsh.name/javascript-arguments
function getArgs(func) {
  // First match everything inside the function argument parens.
  var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
 
  // Split the arguments string into an array comma delimited.
  return args.split(',').map(function(arg) {
    // Ensure no inline comments are parsed and trim the whitespace.
    return arg.replace(/\/\*.*\*\//, '').trim();
  }).filter(function(arg) {
    // Ensure no undefined values are added.
    return arg;
  });
}



	function elem_removeChildren ( elem ) {

		if (elem instanceof HTMLElement) {
			var trashBin = document.createElement('DIV');

			var children = Array.from(elem.querySelectorAll('*'));
			children.map(x => trashBin.appendChild(x));

			children.map(function(x) { 

				trashBin.removeChild(x);
				x.innerHTML = '';
				x = null;

				for (var key in x) {
					if (x.hasOwnProperty(key)) {
						x[key] = undefined
					}
				};
			});

			trashBin.innerHTML = '';
		}
	};


	function obj_deepClone( myObject ) {
		return JSON.parse(JSON.stringify(myObject));
	};

	function isObject ( item ) {
		return (typeof item === "object" && !Array.isArray(item) && item !== null);
	};



	var asdasd = document.createElement('div');
	asdasd.classList = "myClass asdfmnuih";

	// Utility debugger
	// ----------------------------

		let asteriskUtilityDebugger = {};

		// Check validity of arguments
		// ----------------------------

			asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean = function( arguments__obj ) {
				return Object.keys(arguments__obj).find(function(key) {
					let arg = arguments__obj[key];
					if      ( (key.indexOf('__HTMLElem') > -1) && !(arg instanceof HTMLElement) ) { return true }
					else if ( (key.indexOf('__string')   > -1) && !(typeof arg === 'string')    ) { return true }
				}) === undefined;
			};

		// Warning
		// ----------------------------

			asteriskUtilityDebugger.createLog = function( scenario__string , arguments__obj , logMessages__array ) {

				let logArguments = asteriskUtilityDebugger.createLogArguments(arguments__obj);
				let argumentsString = Object.keys(arguments__obj).join(' , ');
				let callerFunctionName = arguments.callee.caller.name;

				// Styles for the console.log()
				// ----------------------------

					let logStyles = {
						'error'     : 'color: crimson;'   ,
						'warning'   : 'color: orangered;' ,
						'function'  : 'color: teal;'      ,
						'argument'  : 'color: navy;'      ,
						'wrap'      : 'font-weight: bold; background-color: rgba(3,3,3,.1);' ,
						'reset'     : '' 
					};

				switch (scenario__string) {

					case 'warning' :
						console.groupCollapsed(
							`%c\u2691 Warning %c| ${callerFunctionName}(%c ${argumentsString} %c) | `, 
							logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
							...logMessages__array);
							console.table(logArguments);
							console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
							console.log('─────────────────────');
						console.groupEnd();
						break;

					case 'typeError' :
						console.groupCollapsed(
							`%c\u274C Error Report %c| ${callerFunctionName}(%c ${argumentsString} %c) | `, 
							logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
							'Invalid function arguments :');
							console.table(logArguments);
							console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
							console.log('─────────────────────');
						console.groupEnd();

						throw new TypeError(`${callerFunctionName}( ${argumentsString} ) | Invalid function arguments. Check [Error Report] above.`);
				}
			};

		// Create log objects -- used when logging warnings/errors
		// ----------------------------

			asteriskUtilityDebugger.createLogArguments = function( arguments__obj ) {

				let logArguments = [];

				Object.keys(arguments__obj).map(function(key){
					let argumentName = key;
					let providedArgument = arguments__obj[key];
					let currentType = typeof providedArgument;
					let requiredType, isValid;

					if (argumentName.indexOf('__HTMLElem')>-1) { 
						requiredType = 'HTMLElement (object)';
						isValid = providedArgument instanceof HTMLElement;
					} else if (argumentName.indexOf('__string')>-1) { 
						requiredType = 'string';
						isValid = typeof providedArgument === 'string';
					};

					logArguments.push({
						argumentName     ,
						isValid          ,
						providedArgument ,
						currentType      ,
						requiredType
					})
				});

				return logArguments
			};

// Checks || has* is*
// ----------------------------

	// has*
	// ----------------------------

		// hasClass()
		// ----------------------------

			// Baseline
			// ----------------------------

				function hasClass ( target__HTMLElem , class__string ) {
					return (" " + target__HTMLElem.className + " " ).indexOf( " " + class__string + " " ) > -1
				};

			// Log
			// ----------------------------

				function hasClass ( target__HTMLElem , class__string ) {

					let args = { target__HTMLElem , class__string };

					if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {
						return (" " + target__HTMLElem.className + " " ).indexOf( " " + class__string + " " ) > -1
					} else {
						asteriskUtilityDebugger.createLog('typeError' , args)
					};
				};

				// hasClass(asdasd);
				// hasClass('asd');
				//hasClass(asdasd, 12);

			// Min
			// ----------------------------

				// function hasClass(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1};

		// hasAnyClass()
		// ----------------------------

			// Baseline
			// ----------------------------

				function hasAnyClass ( target__HTMLElem , classes__Array ) {
					return classes__Array.find(klass => (" " + target__HTMLElem.className + " " ).indexOf( " " + klass + " " ) > -1) !== undefined
				};

			// Log
			// ----------------------------

				function hasAnyClass ( target__HTMLElem , classes__Array ) {

					// Create log objects -- used when logging warnings/errors
					// ----------------------------

						function createLogArguments( obj ) {

							let logArguments = [];

							Object.keys(obj).map(function(key){
								let argumentName = key;
								let providedArgument = obj[key];
								let currentType = typeof providedArgument;
								let requiredType, isValid;

								if (argumentName.indexOf('__HTMLElem')>-1) { 
									requiredType = 'HTMLElement (object)';
									isValid = providedArgument instanceof HTMLElement;
								} else if (argumentName.indexOf('__Array')>-1) { 
									requiredType = 'array';
									isValid = providedArgument instanceof Array;
								};

								logArguments.push({
									argumentName     ,
									isValid          ,
									providedArgument ,
									currentType      ,
									requiredType
								})
							});

							return logArguments
						};

						let logArguments = createLogArguments( { target__HTMLElem , classes__Array } );
						let allParametersAreValid = (logArguments.find(x => !x.isValid) === undefined);

					// Styles for the console.log()
					// ----------------------------

						let logStyles = {
							'error'     : 'color: crimson;'   ,
							'warning'   : 'color: orangered;' ,
							'function'  : 'color: teal;'      ,
							'argument'  : 'color: navy;'  
						};

					// Normal function run
					// ----------------------------

					if ( allParametersAreValid ) {

						let invalidTypesFound = false;

						let wasAnyClassFound__Boolean = classes__Array.find( function(klass) {
							if (typeof klass !== 'string') {
								invalidTypesFound = true;
								return false
							} else {
								return (" " + target__HTMLElem.className + " " ).indexOf( " " + klass + " " ) > -1 
							}
						}) !== undefined;

						if (invalidTypesFound) {

							let warning_logArguments = [];

							classes__Array.map(function(x){
								let obj = {
									name    : x ,
									isValid : (typeof x === 'string') ,
									type    : (typeof x) ,
									requiredType : 'string'
								};
								warning_logArguments.push(obj)
							});

							console.groupCollapsed(
								'%c\u2691 Warning %c| hasAnyClass(%ctarget__HTMLElem , classes__Array%c) | ', 
								logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
								'Invalid arguments were found within : ', classes__Array);

								console.table(warning_logArguments);
								console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
								console.log('─────────────────────');
							console.groupEnd();
						};

						return wasAnyClassFound__Boolean

					// log [Error (Silent)] -- if any parameter is Invalid 
					// ----------------------------

					} else {

						console.groupCollapsed(
							'%c\u274C Error (Silent) %c| hasAnyClass(%ctarget__HTMLElem, classes__Array %c) | ', 
							logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
							'Invalid function arguments :');
							console.table(logArguments);
							console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
							console.log('─────────────────────');
						console.groupEnd();

						return false

					}
				};

				// hasAnyClass(asdasd , ['asd', 24]);
				// hasAnyClass('asd');
				// hasAnyClass(asdasd, 12);

			// Min
			// ----------------------------

				// function hasAnyClass(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1};

		// hasTag()
		// ----------------------------

			// Baseline
			// ----------------------------

				function hasTag ( target__HTMLElem , tagName__string ) {
					return target__HTMLElem.tagName == tagName__string.toUpperCase()
				};

			// Log
			// ----------------------------

				function hasTag ( target__HTMLElem , tagName__string ) {

					// Create log objects -- used when logging warnings/errors
					// ----------------------------

						function createLogArguments( obj ) {

							let logArguments = [];

							Object.keys(obj).map(function(key){
								let argumentName = key;
								let providedArgument = obj[key];
								let currentType = typeof providedArgument;
								let requiredType, isValid;

								if (argumentName.indexOf('__HTMLElem')>-1) { 
									requiredType = 'HTMLElement (object)';
									isValid = providedArgument instanceof HTMLElement;
								} else if (argumentName.indexOf('__string')>-1) { 
									requiredType = 'string';
									isValid = typeof providedArgument === 'string';
								};

								logArguments.push({
									argumentName     ,
									isValid          ,
									providedArgument ,
									currentType      ,
									requiredType
								})
							});

							return logArguments
						};

						let logArguments = createLogArguments( { target__HTMLElem , tagName__string } );
						let allParametersAreValid = (logArguments.find(x => !x.isValid) === undefined);

					// Styles for the console.log()
					// ----------------------------

						let logStyles = {
							'error'     : 'color: crimson;'   ,
							'warning'   : 'color: orangered;' ,
							'function'  : 'color: teal;'      ,
							'argument'  : 'color: navy;'  
						};

					// Normal function run
					// ----------------------------

					if ( allParametersAreValid ) {

						return target__HTMLElem.tagName == tagName__string.toUpperCase()

					// log [Error (Silent)] -- if any parameter is Invalid 
					// ----------------------------

					} else {

						console.groupCollapsed(
							'%c\u274C Error (Silent) %c| hasTag(%ctarget__HTMLElem, tagName__string %c) | ', 
							logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
							'Invalid function arguments :');
							console.table(logArguments);
							console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
							console.log('─────────────────────');
						console.groupEnd();

						return []

					}
				};

				// hasTag(asdasd);
				// hasTag('asd');
				// hasTag(asdasd, 12);

			// Min
			// ----------------------------

				// function hasTag(a,b){return a.tagName==b.toUpperCase()};



		
 
		// hasAnyTag()
		// ----------------------------

			function hasAnyTag( elem, ...tagNames ) {

				// to accept both scenarios: array of tagName-strings || multiple individual tagName-strings
				if (Array.isArray(tagNames[0])) { tagNames = tagNames[0] };

				var result = tagNames.find( current_tag => elem.tagName.toUpperCase() == current_tag );

				return result !== undefined

			};

	// is*
	// ----------------------------

		// isElement()
		// ----------------------------
			function isElement(target) {
				return target instanceof HTMLElement
			};

		// isHTMLCollection()
		// ----------------------------

			function isHTMLCollection(target) {
				return target instanceof HTMLCollection
			};

			function isHTMLCollectionOrArray(targetVariable) { 
				return targetVariable instanceof HTMLCollection || targetVariable.constructor === Array
			};

		// isString()
		// ----------------------------

			function isString(current_input) {
				return (typeof current_input === 'string' || current_input instanceof String)
			};
			
		// isJSON()
		// ----------------------------

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
// ----------------------------

	// Parents
	// ----------------------------

		// getParents()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getParents ( target__HTMLElem ) {

					let elemParent = target__HTMLElem.parentElement;
					let parents = [];

					while (elemParent) {
						parents.push(elemParent);
						elemParent = elemParent.parentElement;
					};
						
					return parents
				};

			// Log
			// ----------------------------

				function getParents ( target__HTMLElem , skipWarning__boolean ) {

					let args = { target__HTMLElem };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let elemParent = target__HTMLElem.parentElement;
								let parents = [];

								if (elemParent) {

									while (elemParent) {
										parents.push(elemParent);
										elemParent = elemParent.parentElement;
									};

								// If no [Parent] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) { 
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
								};

							// Return all matches found
							// ----------------------------

								return parents

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args);
						};
				};

				// Test cases
				// ----------------------------

					// getParents(asdasd);
					// getParents();
					// getParents(12);

			// Min
			// ----------------------------

				// function getParents(a){let y=a.parentElement,z=[];while(y){z.push(y);y=y.parentElement};return z};

		// getParentsByClassName()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getParentsByClassName ( target__HTMLElem , class__string ) {

					let elemParent = target__HTMLElem.parentElement;
					let parentsWithClass = [];

					while (elemParent) {
						if ((" "+elemParent.className+" ").indexOf(" "+class__string+" ") > -1) { 
							parentsWithClass.push(elemParent) 
						};
						elemParent = elemParent.parentElement;
					};
						
					return parentsWithClass
				};

			// Log
			// ----------------------------

				function getParentsByClassName ( target__HTMLElem , class__string , skipWarning__boolean ) {

					let args = { target__HTMLElem , class__string };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let elemParent = target__HTMLElem.parentElement;
								let parentsWithClass = [];

								if (elemParent) {

									while (elemParent) {
										if ((" "+elemParent.className+" ").indexOf(" "+class__string+" ") > -1) { 
											parentsWithClass.push(elemParent) 
										};
										elemParent = elemParent.parentElement;
									};

									// If no [Matches] found -- Log [warning] to console
									// ----------------------------

									if (!skipWarning__boolean && parentsWithClass.length === 0) {
										asteriskUtilityDebugger.createLog('warning' , args , [`No Parent Elements with "${class__string}" class were found, for :` , target__HTMLElem])
									};

								// If no [Parent] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) { 
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
								};

							// Return all matches found
							// ----------------------------

								return parentsWithClass

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args)
						};
				};

				// Test cases
				// ----------------------------

					// getParentsByClassName(asdasd, 'asd');
					// getParentsByClassName('asd');
					// getParentsByClassName(asdasd);
					// getParentsByClassName(24, 'asd');
					// getParentsByClassName(asdasd, 24);

			// Min
			// ----------------------------

				// function getParentsByClassName(a,b){let y=a.parentElement,z=[];while(y){if((" "+y.className+" ").indexOf(" "+b+" ")>-1){z.push(y)};y=y.parentElement};return z};

		// getFirstParentByClassName()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getFirstParentByClassName ( target__HTMLElem , class__string ) {

					let elemParent = target__HTMLElem.parentElement;
					let parentFound = false;

					while (elemParent && !parentFound) {
						if ((" "+elemParent.className+" ").indexOf(" "+class__string+" ") > -1) { 
							parentFound = true;
						} else {
							elemParent = elemParent.parentElement;
						}
					};
						
					return elemParent
				};

			// Log
			// ----------------------------

				function getFirstParentByClassName ( target__HTMLElem , class__string , skipWarning__boolean ) {

					let args = { target__HTMLElem , class__string };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let elemParent = target__HTMLElem.parentElement;
								let parentFound = false;

								if (elemParent) {

									while (elemParent && !parentFound) {
										if ((" "+elemParent.className+" ").indexOf(" "+class__string+" ") > -1) { 
											parentFound = true;
										} else {
											elemParent = elemParent.parentElement;
										}
									};

									// If no [matches] found -- Log [warning] to console
									// ----------------------------

									if (!skipWarning__boolean && elemParent === null) {
										asteriskUtilityDebugger.createLog('warning' , args , [`No Parent Element with "${class__string}" class was found for :` , target__HTMLElem])
									};

								// If no [Parents] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) {
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
								};

							// Return all matches found
							// ----------------------------

								return elemParent

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args)
						}
				};

				// Test cases
				// ----------------------------

					// getFirstParentByClassName(asdasd, 'asd');
					// getFirstParentByClassName('asd');
					// getFirstParentByClassName(asdasd);
					// getFirstParentByClassName(24, 'asd');
					// getFirstParentByClassName(asdasd, 24);

			// Min
			// ----------------------------

				// function getFirstParentByClassName(a,b){let y=a.parentElement,z=false;while(y&&!z){(" "+y.className+" ").indexOf(" "+b+" ")>-1?z=!z:y=y.parentElement};return y};

		// getParentsByTagName()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getParentsByTagName ( target__HTMLElem , tagName__string ) {

					let tagName = tagName__string.toUpperCase();
					let elemParent = target__HTMLElem.parentElement;
					let parentsWithTag = [];

					while (elemParent) {
						if (elemParent.tagName === tagName) { 
							parentsWithTag.push(elemParent) 
						};
						elemParent = elemParent.parentElement;
					};

					return parentsWithTag
				};

			// Log
			// ----------------------------

				function getParentsByTagName ( target__HTMLElem , tagName__string , skipWarning__boolean ) {

					let args = { target__HTMLElem , tagName__string };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let tagName = tagName__string.toUpperCase();
								let elemParent = target__HTMLElem.parentElement;
								let parentsWithTag = [];

								if (elemParent) {

									while (elemParent) {
										if (elemParent.tagName === tagName) { 
											parentsWithTag.push(elemParent) 
										};
										elemParent = elemParent.parentElement;
									};

									// If no [matches] found -- Log [warning] to console
									// ----------------------------

									if (!skipWarning__boolean && parentsWithTag.length === 0) {
										asteriskUtilityDebugger.createLog('warning' , args , [`No Parent Elements with "${tagName__string}" tagName was found for :` , target__HTMLElem])
									};

								// If no [Parents] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) {
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
								};

							// Return all matches found
							// ----------------------------

								return parentsWithTag

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args)
						}
				};

				// Test cases
				// ----------------------------

					// getParentsByTagName(asdasd, 'asd');
					// getParentsByTagName('asd');
					// getParentsByTagName(asdasd);
					// getParentsByTagName(24, 'asd');
					// getParentsByTagName(asdasd, 24);

			// Min
			// ----------------------------

				// function getParentsByTagName(a,b){let x=b.toUpperCase(),y=a.parentElement,z=[];while(y){y.tagName===x&&z.push(y);y=y.parentElement};return z};
		
		// getFirstParentByTagName()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getFirstParentByTagName ( target__HTMLElem , tagName__string ) {

					let tagName = tagName__string.toUpperCase();
					let elemParent = target__HTMLElem.parentElement;
					let parentFound = false;

					while (elemParent && !parentFound) {
						if (elemParent.tagName === tagName) { 
							parentFound = true;
						} else {
							elemParent = elemParent.parentElement;
						}
					};
						
					return elemParent
				};

			// Log
			// ----------------------------

				function getFirstParentByTagName ( target__HTMLElem , tagName__string , skipWarning__boolean ) {

					let args = { target__HTMLElem , tagName__string };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let tagName = tagName__string.toUpperCase();
								let elemParent = target__HTMLElem.parentElement;
								let parentFound = false;

								if (elemParent) {

									while (elemParent && !parentFound) {
										if (elemParent.tagName === tagName) { 
											parentFound = true;
										} else {
											elemParent = elemParent.parentElement;
										}
									};

									// If no [matches] found -- Log [warning] to console
									// ----------------------------

									if (!skipWarning__boolean && elemParent === null) {
										asteriskUtilityDebugger.createLog('warning' , args , [`No Parent Element with "${tagName__string}" tagName was found for :` , target__HTMLElem])
									};

								// If no [Parents] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) {
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
								};

							// Return all matches found
							// ----------------------------

								return elemParent

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args)
						}
				};

				// Test cases
				// ----------------------------

					// getFirstParentByTagName(asdasd, 'asd');
					// getFirstParentByTagName('asd');
					// getFirstParentByTagName(asdasd);
					// getFirstParentByTagName(24, 'asd');
					// getFirstParentByTagName(asdasd, 24);

			// Min
			// ----------------------------

				// function getFirstParentByTagName(a,b){let x=b.toUpperCase(),y=a.parentElement,z=false;while(y&&!z){y.tagName===x?z=!z:y=y.parentElement};return y}


	// Siblings
	// ----------------------------

		// getSiblings()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getSiblings ( target__HTMLElem ) {

					let elemParent = target__HTMLElem.parentElement;
					let sibling = elemParent ? elemParent.firstElementChild : null;
					let siblings = [];

					while (sibling) {
						if (sibling !== target__HTMLElem) {
							siblings.push(sibling);
						}
						sibling = sibling.nextElementSibling
					};

					return siblings;
				};

			// Log
			// ----------------------------

				function getSiblings ( target__HTMLElem , skipWarning__boolean ) {

					let args = { target__HTMLElem };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let elemParent = target__HTMLElem.parentElement;
								let sibling = elemParent ? elemParent.firstElementChild : null;
								let siblings = [];

								if (elemParent) {

									while (sibling) {
										if (sibling !== target__HTMLElem) {
											siblings.push(sibling);
										}
										sibling = sibling.nextElementSibling
									};

									// If no [matches] found -- Log [warning] to console
									// ----------------------------

									if (!skipWarning__boolean && siblings.length === 0) {
										asteriskUtilityDebugger.createLog('warning' , args , [`No Siblings were found for :` , target__HTMLElem])
									};

								// If no [Parent] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) { 
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Element.'])
								};

							// Return all matches found
							// ----------------------------

								return siblings

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args);
						};
				};

				// Test cases
				// ----------------------------

					// getSiblings(asdasd);
					// getSiblings();
					// getSiblings(12);

			// Min
			// ----------------------------

				// function getSiblings(a){let x=a.parentElement,y=x?x.firstElementChild:null,z=[];while(y){y!==a&&z.push(y);y=y.nextElementSibling};return z};

		// getSiblingsByClassName()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getSiblingsByClassName ( target__HTMLElem , class__string ) {

					let elemParent = target__HTMLElem.parentElement;
					let sibling = elemParent ? elemParent.firstElementChild : null;
					let siblingsWithClass = [];

					while (sibling) {
						if (sibling !== target__HTMLElem && (" "+sibling.className+" ").indexOf(" "+class__string+" ") > -1) {
							siblingsWithClass.push(sibling);
						}
						sibling = sibling.nextElementSibling
					};

					return siblingsWithClass
				};

			// Log
			// ----------------------------

				function getSiblingsByClassName ( target__HTMLElem , class__string , skipWarning__boolean ) {

					let args = { target__HTMLElem , class__string };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let elemParent = target__HTMLElem.parentElement;
								let sibling = elemParent ? elemParent.firstElementChild : null;
								let siblingsWithClass = [];

								if (elemParent) {

									while (sibling) {
										if (sibling !== target__HTMLElem && (" "+sibling.className+" ").indexOf(" "+class__string+" ") > -1) {
											siblingsWithClass.push(sibling);
										}
										sibling = sibling.nextElementSibling
									};

									// If no [matches] found -- Log [warning] to console
									// ----------------------------

									if (!skipWarning__boolean && siblingsWithClass.length === 0) {
										if (elemParent.children.length === 1) {
											asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Sibling Elements.'])
										} else {
											asteriskUtilityDebugger.createLog('warning' , args , [`No Siblings with "${class__string}" class were found for :` , target__HTMLElem])
										}
									};

								// If no [Parent] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) { 
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Element.'])
								};

							// Return all matches found
							// ----------------------------

								return siblingsWithClass

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args);
						};
				};

				// Test cases
				// ----------------------------

					// getSiblingsByClassName(asdasd, 'asd');
					// getSiblingsByClassName('asd');
					// getSiblingsByClassName(asdasd);
					// getSiblingsByClassName(24, 'asd');
					// getSiblingsByClassName(asdasd, 24);

			// Min
			// ----------------------------

				// function getSiblingsByClassName(a,b){let y=a.parentElement.firstElementChild,z=[];while(y){(y!==a&&(" "+y.className+" ").indexOf(" "+b+" ")>-1)&&z.push(y);y=y.nextElementSibling};return z};

		// getSiblingsByTagName()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getSiblingsByTagName ( target__HTMLElem , tagName__string ) {

					let tagName = tagName__string.toUpperCase();
					let parent  = target__HTMLElem.parentElement;
					let sibling = parent ? parent.firstElementChild : null;
					let siblingsWithTag = [];

					while (sibling) {
						if (sibling !== target__HTMLElem && sibling.tagName === tagName) {
							siblingsWithTag.push(sibling);
						}
						sibling = sibling.nextElementSibling
					};

					return siblingsWithTag
				};

			// Log
			// ----------------------------

				function getSiblingsByTagName ( target__HTMLElem , tagName__string , skipWarning__boolean ) {

					let args = { target__HTMLElem , tagName__string };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let tagName = tagName__string.toUpperCase();
								let elemParent = target__HTMLElem.parentElement;
								let sibling = elemParent ? elemParent.firstElementChild : null;
								let siblingsWithTag = [];

								if (elemParent) {

									while (sibling) {
										if (sibling !== target__HTMLElem && sibling.tagName === tagName) {
											siblingsWithTag.push(sibling);
										}
										sibling = sibling.nextElementSibling
									};

									// If no [matches] found -- Log [warning] to console
									// ----------------------------

									if (!skipWarning__boolean && siblingsWithTag.length === 0) {
										if (elemParent.children.length === 1) {
											asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Sibling Elements.'])
										} else {
											asteriskUtilityDebugger.createLog('warning' , args , [`No Siblings with "${tagName__string}" tagName were found for :` , target__HTMLElem])
										}
									};

								// If no [Parent] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) { 
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Element.'])
								};

							// Return all matches found
							// ----------------------------

								return siblingsWithTag

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args);
						};
				};

				// Test cases
				// ----------------------------

					// getSiblingsByTagName(asdasd, 'asd');
					// getSiblingsByTagName('asd');
					// getSiblingsByTagName(asdasd);
					// getSiblingsByTagName(24, 'asd');
					// getSiblingsByTagName(asdasd, 24);

			// Min
			// ----------------------------

				// function getSiblingsByTagName(a,b){let x=b.toUpperCase(),y=a.parentElement.firstElementChild,z=[];while(y){(y!==a&&y.tagName===x)&&z.push(y);y=y.nextElementSibling};return z};


	// Children
	// ----------------------------

		// getChildrenByClassName()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getChildrenByClassName ( target__HTMLElem , class__string ) {

					let child = target__HTMLElem.firstElementChild;
					let childrenWithClass = [];

					while (child) {
						if ((" "+child.className+" ").indexOf(" "+class__string+" ") > -1) {
							childrenWithClass.push(child)
						};
						child = child.nextElementSibling
					};

					return childrenWithClass

				};

			// Log
			// ----------------------------

				function getChildrenByClassName ( target__HTMLElem , class__string , skipWarning__boolean ) {

					let args = { target__HTMLElem , class__string };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let child = target__HTMLElem.firstElementChild;
								let childrenWithClass = [];

								if (child) {

									while (child) {
										if ((" "+child.className+" ").indexOf(" "+class__string+" ") > -1) {
											childrenWithClass.push(child)
										};
										child = child.nextElementSibling
									};

									// If no [matches] found -- Log [warning] to console
									// ----------------------------

									if (!skipWarning__boolean && childrenWithClass.length === 0) {
										asteriskUtilityDebugger.createLog('warning' , args , [`No Children with "${class__string}" class were found for :` , target__HTMLElem])
									};

								// If no [Parent] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) {
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Child Elements.'])
								};

							// Return all matches found
							// ----------------------------

								return childrenWithClass

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args);
						};
				};

				// Test cases
				// ----------------------------

					// getChildrenByClassName(asdasd, 'asd');
					// getChildrenByClassName('asd');
					// getChildrenByClassName(asdasd);
					// getChildrenByClassName(24, 'asd');
					// getChildrenByClassName(asdasd, 24);

			// Min
			// ----------------------------

				// function getChildrenByClassName(a,b){let y=a.firstElementChild,z=[];while(y){(" "+y.className+" ").indexOf(" "+b+" ")>-1&&z.push(y);y=y.nextElementSibling};return z};

		// getChildrenByTagName()
		// ----------------------------

			// Baseline
			// ----------------------------

				function getChildrenByTagName ( target__HTMLElem , tagName__string ) {

					let tagName = tagName__string.toUpperCase();
					let child   = target__HTMLElem.firstElementChild;
					let childrenWithTag = [];

					while (child) {
						if (child.tagName === tagName) {
							childrenWithTag.push(child)
						};
						child = child.nextElementSibling
					};

					return childrenWithTag

				};

			// Log
			// ----------------------------

				function getChildrenByTagName ( target__HTMLElem , tagName__string , skipWarning__boolean ) {

					let args = { target__HTMLElem , tagName__string };

					// if all Arguments are valid
					// ----------------------------

						if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

							// normal execution
							// ----------------------------

								let tagName = tagName__string.toUpperCase();
								let child = target__HTMLElem.firstElementChild;
								let childrenWithTag = [];

								if (child) {

									while (child) {
										if (child.tagName === tagName) {
											childrenWithTag.push(child)
										};
										child = child.nextElementSibling
									};

									// If no [matches] found -- Log [warning] to console
									// ----------------------------

									if (!skipWarning__boolean && childrenWithTag.length === 0) {
										asteriskUtilityDebugger.createLog('warning' , args , [`No Children with "${tagName__string}" tagName were found for :` , target__HTMLElem])
									};

								// If no [Parent] found -- Log [warning] to console
								// ----------------------------

								} else if (!skipWarning__boolean) {
									asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Child Elements.'])
								};

							// Return all matches found
							// ----------------------------

								return childrenWithTag

					// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] 
					// ----------------------------

						} else {
							asteriskUtilityDebugger.createLog('typeError' , args);
						};
				};

				// Test cases
				// ----------------------------

					// getChildrenByTagName(asdasd, 'asd');
					// getChildrenByTagName('asd');
					// getChildrenByTagName(asdasd);
					// getChildrenByTagName(24, 'asd');
					// getChildrenByTagName(asdasd, 24);

			// Min
			// ----------------------------

				// function getChildrenByTagName(a,b){let x=b.toUpperCase(),y=a.firstElementChild,z=[];while(y){y.tagName===x&&z.push(y);y=y.nextElementSibling};return z};


	// getOwnedClasses()
	// ----------------------------

		function getOwnedClasses( elem , ...classes ) {

			// to accept both scenarios: array-of-classes || multiple class strings
			if (Array.isArray(classes[0])) { classes = classes[0] };

			var resultsArray = classes.filter( klass => (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1 );

			if (resultsArray.length > 0) 	{ return resultsArray 	}
			else 							{ return null  			}

		};

	// getFirstClass()
	// ----------------------------

		function getFirstClass( elem, ...classes ) {

			// to accept both scenarios: array-of-classes || multiple class strings
			if (Array.isArray(classes[0])) { classes = classes[0] };

			var result = classes.find( klass => (" " + elem.className + " " ).indexOf( " " + klass + " " ) > -1 );

			if (result != undefined) 	{ return result }
			else 						{ return false 	}

		};

	// fetchHTML() - from HTML File (fetch HTTP Request)
	// ----------------------------

		 function fetchHTML(urlString) { 
			fetch(urlString)
				.then(function(response) { return response.text() })
		};

		// myElem.innerHTML = getHTML(linkToHTMLFile);

	// getObjectLength()
	// ----------------------------

		function getObjectLength(obj) {
			var size = 0, key;
			for (key in obj) { if (obj.hasOwnProperty(key)) { size++ } }
			return size;
		};

	// getFocusableChildren()
	// ----------------------------

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

// Remove || remove*
// ----------------------------

	// removeClasses()
	// ----------------------------

		function removeClasses( elem, ...classes ) {

			// to accept both scenarios: array-of-classes || multiple class strings
			if (Array.isArray(classes[0])) { classes = classes[0] };

			elem.classList.remove(...classes);

		};

		// Just syntactic-sugar : can be substituted with element.classList.remove(...array) or element.classList.remove('arg', 'arg', 'arg')


// Array
// ----------------------------

	// Clone Array
	// ----------------------------

		// function array_clone( myArray ) {
		// 	return myArray.slice(0) 
		// };


	// Sort Array 
	// ----------------------------
		
		// 'in-place' sorting - just by calling the function, the initial array is modified
		// ----------------------------

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
		// ----------------------------

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
	// ----------------------------
		// https://github.com/Daplie/knuth-shuffle
		// https://stackoverflow.com/a/12646864

		// 'in-place' shuffle - just by calling the function, the initial array is modified
		// ----------------------------

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
		// ----------------------------

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
	// ----------------------------

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
	// ----------------------------
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
// ----------------------------

	// copyText() // Change name to copyElementInnerText
	// ----------------------------

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

		// function selectElementInnerText ( elem ) {
		// 	if (document.selection) { 

		// 		var range = document.body.createTextRange();
		// 		range.moveToElementText(elem);
		// 		range.select().createTextRange();

		// 	} else if (window.getSelection) {

		// 		var range = document.createRange();
		// 		range.selectNode(elem);
		// 		window.getSelection().addRange(range);
	
		// 	}
		// };

		// function copyStringToClipboard ( myString ) {

		// 	if (typeof myVar === 'string' || myVar instanceof String) {

		// 		var elem = document.createElement('textarea');
		// 		elem.value = myString;
		// 		elem.setAttribute('readonly', '');// Set non-editable to avoid focus and move outside of view
		// 		elem.style = "{position: 'absolute', left: '-9999px'}";
		// 		document.body.appendChild(elem);
		// 		elem.select();
		// 		document.execCommand('copy');
		// 		document.body.removeChild(elem);

		// 	} else {
		// 		console.log( 'Argument provided for [ addStringToClipboard( myString ) ] is not a string : ' , myString)
		// 	}

		// }

	// Capitalize First Letter of String
	// ----------------------------------------

		function capitalizeFirstLetter(string) { return string.charAt(0).toUpperCase() + string.slice(1) };

// Need Further Dev
// ----------------------------

	// ScrollToTop() 						>> not actual scrolling, atm
	// -----------------------------------------
		function scrollToTop() {
			window.scrollTo(0, 0);
		};

	// .myScroll()
	// -----------------------------------------

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
	// -----------------------------------------

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
	// -----------------------------------------

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
	// ----------------------------------------
		function  insertAfter(newNode, referenceNode) 	{ referenceNode.parentNode.insertBefore(newNode, referenceNode)};
		function insertBefore(newNode, referenceNode) 	{ referenceNode.parentNode.insertBefore(newNode, referenceNode.nextElementSibling)};


// Need remaster
// ----------------------------

	// .rgb2hex()  											>> Take RGB value >>> return Hex value
	// ----------------------------

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
	// ----------------------------------------

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



	function loadScript ( url__string , callback__function ) {
		var script = document.createElement("script");
		script.type = "text/javascript";

		if (script.readyState) { // IE
			script.onreadystatechange = function(){
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback__function();
				}
			}
		} else { // Others
			script.onload = function(){
				callback__function()
			};
		}

		script.src = url__string;
		document.getElementsByTagName("head")[0].appendChild(script);
	};


