	
	(function(){

		getParents()
		getParents(12)

		let codeBlocks = [

			`Returns | get*` ,

			// getParents
			// ----------------------------

				{
					name     : 'getParents' ,
					short    : 'Return All Parents' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> containing all of the <b>target__HTMLElement</b>'s Parent Elements. </p> 
						<p> The <span class="wrapper">Array</span> will be empty if the <b>target__HTMLElement</b> has no Parent Elements. </p>` ,

					baseline : 
						`    // getParents()
						    // ----------------------------

						        function <b-p>getParents</b-p> ( <b>target__HTMLElem</b> ) {

						            let elemParent = <b>target__HTMLElem</b>.parentElement;
						            let parents = [];

						            while (elemParent) {
						                parents.push(elemParent);
						                elemParent = elemParent.parentElement;
						            };

						            <b-r>return</b-r> parents
						        };
						` ,
					log : 
						`    // getParents()
						    // ----------------------------

						        function getParents ( target__HTMLElem ) {

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

						                let logArguments = createLogArguments( { target__HTMLElem } );
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

						                let elemParent = target__HTMLElem.parentElement;
						                let parents = [];

						                if (elemParent) {

						                    while (elemParent) {
						                        parents.push(elemParent);
						                        elemParent = elemParent.parentElement;
						                    };

						                // log [Warning] -- if no items match the query
						                // ----------------------------

						                } else { 
						                    console.groupCollapsed(
						                        '%c!! Warning %c| getParents(%ctarget__HTMLElem%c) | ', 
						                        logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                        'No Parent Element was found.');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();
						                };

						                return parents

						            // log [Error (Silent)] -- if any parameter is Invalid 
						            // ----------------------------

						            } else {

						                console.groupCollapsed(
						                    '%c!! Error (Silent) %c| getParents(%ctarget__HTMLElem%c) | ', 
						                    logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
						                    'Invalid function arguments :');

						                    console.table(logArguments);
						                    console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                    console.log('─────────────────────');
						                console.groupEnd();

						                return []

						            }
						        };
						` ,
					minified : 
						`    // getParents()
						    // ----------------------------

						        function getParents(a){let y=a.parentElement,z=[];while(y){z.push(y);y=y.parentElement};return z};
						`
				} ,

			// getParentsByClassName
			// ----------------------------

				{
					name     : 'getParentsByClassName' ,
					short    : 'Return All Parents that have a specific class' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> containing all <b>target__HTMLElement</b>'s Parent Elements, which have the specified <b>class__string</b>. </p> 
						<p> The <span class="wrapper">Array</span> will be empty if the <b>target__HTMLElement</b> has no Parent Elements which have the specified <b>class__string</b>. </p>` ,

					baseline : 
						`    // getParentsByClassName()
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
						` ,
					log : 
						`    // getParentsByClassName()
						    // ----------------------------

						        function getParentsByClassName ( target__HTMLElem , class__string ) {

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

						                let logArguments = createLogArguments( { target__HTMLElem , class__string } );
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

						                    let elemParent = target__HTMLElem.parentElement;
						                    let parentsWithClass = [];

						                    while (elemParent) {
						                        if ((" "+elemParent.className+" ").indexOf(" "+class__string+" ") > -1) { 
						                            parentsWithClass.push(elemParent) 
						                        };
						                        elemParent = elemParent.parentElement;
						                    };

						                    // log [Warning] -- if no items match the query
						                    // ----------------------------

						                    if (parentsWithClass.length === 0) {
						                        console.groupCollapsed(
						                            '%c!! Warning %c| getParentsByClassName(%ctarget__HTMLElem , class__string%c) | ', 
						                            logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                            'No Parent Element with the class of "'+class__string+'" was found, for ', target__HTMLElem);

						                            console.table(logArguments);
						                            console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                            console.log('─────────────────────');
						                        console.groupEnd();
						                    };
						                        
						                    return parentsWithClass

						            // log [Error (Silent)] -- if any parameter is Invalid 
						            // ----------------------------

						                } else {

						                    console.groupCollapsed(
						                        '%c!! Error (Silent) %c| getParentsByClassName(%ctarget__HTMLElem, class__string%c) | ', 
						                        logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
						                        'Invalid function arguments :');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();

						                    return []

						                }
						        };
						` ,
					minified : 
						`    // getParentsByClassName()
						    // ----------------------------

						        function getParentsByClassName(a,b){let y=a.parentElement,z=[];while(y){if((" "+y.className+" ").indexOf(" "+b+" ")>-1){z.push(y)};y=y.parentElement};return z};
						`
				} ,

			// getFirstParentByClassName
			// ----------------------------

				{
					name     : 'getFirstParentByClassName' ,
					short    : 'Return First Parent Element that has a specific class' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> a <span class="wrapper">HTML Element</span>, Parent of <b>target__HTMLElement</b>, which has the specified <b>class__string</b>. </p> 
						<p> <b-r>Returns</b-r> <span class="wrapper"><b-p>null</b-p></span> if none of the <b>target__HTMLElement</b>'s' Parent Elements have the specified <b>class__string</b>. </p>` ,

					baseline : 
						`    // getFirstParentByClassName()
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
						` ,
					log : 
						`    // getFirstParentByClassName()
						    // ----------------------------

						        function getFirstParentByClassName ( target__HTMLElem , class__string ) {

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

						                let logArguments = createLogArguments( { target__HTMLElem , class__string } );
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

						                    let elemParent = target__HTMLElem.parentElement;
						                    let parentFound = false;

						                    while (elemParent && !parentFound) {
						                        if ((" "+elemParent.className+" ").indexOf(" "+class__string+" ") > -1) { 
						                            parentFound = true;
						                        } else {
						                            elemParent = elemParent.parentElement;
						                        }
						                    };

						                    // log [Warning] -- if no items match the query
						                    // ----------------------------

						                    if (elemParent === null) {
						                        console.groupCollapsed(
						                            '%c!! Warning %c| getFirstParentByClassName(%ctarget__HTMLElem , class__string%c) | ', 
						                            logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                            'No Parent Element with the class of "'+class__string+'" was found, for ', target__HTMLElem);

						                            console.table(logArguments);
						                            console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                            console.log('─────────────────────');
						                        console.groupEnd();
						                    }

						                    return elemParent

						            // log [Error (Silent)] -- if any parameter is Invalid 
						            // ----------------------------

						                } else {

						                    console.groupCollapsed(
						                        '%c!! Error (Silent) %c| getFirstParentByClassName(%ctarget__HTMLElem, class__string%c) | ', 
						                        logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
						                        'Invalid function arguments :');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();

						                    return null

						                }
						        };
						` ,
					minified : 
						`    // getFirstParentByClassName()
						    // ----------------------------

						        function getFirstParentByClassName(a,b){let y=a.parentElement,z=false;while(y&&!z){(" "+y.className+" ").indexOf(" "+b+" ")>-1?z=!z:y=y.parentElement};return y};
						`
				} ,

			// getParentsByTagName
			// ----------------------------

				{
					name     : 'getParentsByTagName' ,
					short    : 'Return All Parents that have a specific tagName' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> containing all <b>target__HTMLElement</b>'s Parent Elements, which have the specified <b>tagName__string</b>. </p> 
						<p> The <span class="wrapper">Array</span> will be empty if the <b>target__HTMLElement</b> has no Parent Elements which have the specified <b>tagName__string</b>. </p>` ,

					baseline : 
						`    // getParentsByTagName()
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
						` ,
					log : 
						`    // getParentsByTagName()
						    // ----------------------------

						        function getParentsByTagName ( target__HTMLElem , tagName__string ) {

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

						                    let tagName = tagName__string.toUpperCase();
						                    let elemParent = target__HTMLElem.parentElement;
						                    let parentsWithTag = [];

						                    while (elemParent) {
						                        if (elemParent.tagName === tagName) { 
						                            parentsWithTag.push(elemParent) 
						                        };
						                        elemParent = elemParent.parentElement;
						                    };

						                    // log [Warning] -- if no items match the query
						                    // ----------------------------

						                    if (parentsWithTag.length === 0) {
						                        console.groupCollapsed(
						                            '%c!! Warning %c| getParentsByTagName(%ctarget__HTMLElem , tagName__string%c) | ', 
						                            logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                            'No Parent Element with the tagName of "'+tagName+'" was found, for ', target__HTMLElem);

						                            console.table(logArguments);
						                            console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                            console.log('─────────────────────');
						                        console.groupEnd();
						                    };

						                    return parentsWithTag

						            // log [Error (Silent)] -- if any parameter is Invalid 
						            // ----------------------------

						                } else {

						                    console.groupCollapsed(
						                        '%c!! Error (Silent) %c| getParentsByTagName(%ctarget__HTMLElem, tagName__string%c) | ', 
						                        logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
						                        'Invalid function arguments :');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();

						                    return []

						                }
						        };
						` ,
					minified : 
						`    // getParentsByTagName()
						    // ----------------------------

						        function getParentsByTagName(a,b){let x=b.toUpperCase(),y=a.parentElement,z=[];while(y){y.tagName===x&&z.push(y);y=y.parentElement};return z};
						`
				} ,

			// getFirstParentByTagName
			// ----------------------------

				{
					name     : 'getFirstParentByTagName' ,
					short    : 'Return First Parent Element that has a specific tagName' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> a <span class="wrapper">HTML Element</span>, Parent of <b>target__HTMLElement</b>, which has the specified <b>tagName__string</b>. </p> 
						<p> <b-r>Returns</b-r> <span class="wrapper"><b-p>null</b-p></span> if none of the <b>target__HTMLElement</b>'s' Parent Elements have the specified <b>tagName__string</b>. </p>` ,

					baseline : 
						`    // getFirstParentByTagName()
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
						` ,
					log : 
						`    // getFirstParentByTagName()
						    // ----------------------------

						        function getFirstParentByTagName ( target__HTMLElem , tagName__string ) {

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

						                    // log [Warning] -- if no items match the query
						                    // ----------------------------

						                    if (elemParent === null) {
						                        console.groupCollapsed(
						                            '%c!! Warning %c| getFirstParentByTagName(%ctarget__HTMLElem , tagName__string%c) | ', 
						                            logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                            'No Parent Element with the tagName of "'+tagName+'" was found, for ', target__HTMLElem);

						                            console.table(logArguments);
						                            console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                            console.log('─────────────────────');
						                        console.groupEnd();
						                    };
						                        
						                    return elemParent

						            // log [Error (Silent)] -- if any parameter is Invalid 
						            // ----------------------------

						                } else {

						                    console.groupCollapsed(
						                        '%c!! Error (Silent) %c| getFirstParentByTagName(%ctarget__HTMLElem, tagName__string%c) | ', 
						                        logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
						                        'Invalid function arguments :');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();

						                    return null

						                }
						        };
						` ,
					minified : 
						`    // getFirstParentByTagName()
						    // ----------------------------

						        function getFirstParentByTagName(a,b){let x=b.toUpperCase(),y=a.parentElement,z=false;while(y&&!z){y.tagName===x?z=!z:y=y.parentElement};return y}
						`
				} ,


			// getSiblings
			// ----------------------------

				{
					name     : 'getSiblings' ,
					short    : 'Return All Sibling Elements' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span>, containing all of the <b>target__HTMLElement</b>'s Sibling Elements. </p> 
						<p> The <span class="wrapper">Array</span> will be empty if the <b>target__HTMLElement</b> has no Sibling Elements. </p>` ,

					baseline : 
						`    // getSiblings()
						    // ----------------------------

						        function getSiblings ( target__HTMLElem ) {

						            let parent   = target__HTMLElem.parentElement;
						            let sibling  = parent ? parent.firstElementChild : null;
						            let siblings = [];

						            while (sibling) {
						                if (sibling !== target__HTMLElem) {
						                    siblings.push(sibling);
						                }
						                sibling = sibling.nextElementSibling
						            };

						            return siblings;
						        };
						` ,
					log : 
						`    // getSiblings()
						    // ----------------------------

						        function getSiblings ( target__HTMLElem ) {

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

						                let logArguments = createLogArguments( { target__HTMLElem } );
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

						                let parent   = target__HTMLElem.parentElement;
						                let sibling  = parent ? parent.firstElementChild : null;
						                let siblings = [];

						                while (sibling) {
						                    if (sibling !== target__HTMLElem) {
						                        siblings.push(sibling);
						                    }
						                    sibling = sibling.nextElementSibling
						                };

						                // log [Warning] -- if the element has no Parent
						                // ----------------------------

						                if (!parent) {

						                    console.groupCollapsed(
						                        '%c!! Warning %c| getSiblings(%ctarget__HTMLElem%c) | ', 
						                        logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                        'No Parent Element was found.');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();

						                // log [Warning] -- if no items match the query
						                // ----------------------------

						                } else if (siblings.length === 0) {

						                    console.groupCollapsed(
						                        '%c!! Warning %c| getSiblings(%ctarget__HTMLElem%c) | ', 
						                        logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                        'No Sibling Element was found.');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();
						                    
						                };

						                return siblings

						            // log [Error (Silent)] -- if any parameter is Invalid 
						            // ----------------------------

						            } else {

						                console.groupCollapsed(
						                    '%c!! Error (Silent) %c| getSiblings(%ctarget__HTMLElem%c) | ', 
						                    logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
						                    'Invalid function arguments :');

						                    console.table(logArguments);
						                    console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                    console.log('─────────────────────');
						                console.groupEnd();

						                return []

						            }
						        };
						` ,
					minified : 
						`    // getSiblings()
						    // ----------------------------

						            function getSiblings(a){let x=a.parentElement,y=x?x.firstElementChild:null,z=[];while(y){y!==a&&z.push(y);y=y.nextElementSibling};return z};
						`
				} ,

			// getSiblingsByClassName
			// ----------------------------

				{
					name     : 'getSiblingsByClassName' ,
					short    : 'Return All Sibling Elements that have a specific class' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span>, containing all of the <b>target__HTMLElement</b>'s Sibling Elements, which have the specified <b>class__string</b>. </p> 
						<p> The <span class="wrapper">Array</span> will be empty if the <b>target__HTMLElement</b> has no Sibling Elements which have the specified <b>class__string</b>. </p>` ,

					baseline : 
						`    // getSiblingsByClassName()
						    // ----------------------------

						        function getSiblingsByClassName ( target__HTMLElem , class__string ) {

						            let parent  = target__HTMLElem.parentElement;
						            let sibling = parent ? parent.firstElementChild : null;
						            let siblingsWithClass = [];

						            while (sibling) {
						                if (sibling !== target__HTMLElem && (" "+sibling.className+" ").indexOf(" "+class__string+" ") > -1) {
						                    siblingsWithClass.push(sibling);
						                }
						                sibling = sibling.nextElementSibling
						            };

						            return siblingsWithClass
						        };
						` ,
					log : 
						`    // getSiblingsByClassName()
						    // ----------------------------

						        function getSiblingsByClassName ( target__HTMLElem , class__string ) {

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

						                let logArguments = createLogArguments( { target__HTMLElem , class__string } );
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

						                let parent  = target__HTMLElem.parentElement;
						                let sibling = parent ? parent.firstElementChild : null;
						                let siblingsWithClass = [];

						                while (sibling) {
						                    if (sibling !== target__HTMLElem && (" "+sibling.className+" ").indexOf(" "+class__string+" ") > -1) {
						                        siblingsWithClass.push(sibling);
						                    }
						                    sibling = sibling.nextElementSibling
						                };

						                // log [Warning] -- if the element has no Parent
						                // ----------------------------

						                if (!parent) {

						                    console.groupCollapsed(
						                        '%c!! Warning %c| getSiblingsByClassName(%ctarget__HTMLElem, class__string%c) | ', 
						                        logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                        'No Parent Element was found.');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();

						                // log [Warning] -- if no items match the query
						                // ----------------------------

						                } else if (siblings.length === 0) {

						                    console.groupCollapsed(
						                        '%c!! Warning %c| getSiblingsByClassName(%ctarget__HTMLElem, class__string%c) | ', 
						                        logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                        'No Sibling Element with the class of "'+class__string+'" was found.');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();
						                    
						                };

						                return siblingsWithClass

						            // log [Error (Silent)] -- if any parameter is Invalid 
						            // ----------------------------

						            } else {

						                console.groupCollapsed(
						                    '%c!! Error (Silent) %c| getSiblingsByClassName(%ctarget__HTMLElem, class__string%c) | ', 
						                    logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
						                    'Invalid function arguments :');

						                    console.table(logArguments);
						                    console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                    console.log('─────────────────────');
						                console.groupEnd();

						                return []

						            }
						        };
						` ,
					minified : 
						`    // getSiblingsByClassName()
						    // ----------------------------

						        function getSiblingsByClassName(a,b){let y=a.parentElement.firstElementChild,z=[];while(y){(y!==a&&(" "+y.className+" ").indexOf(" "+b+" ")>-1)&&z.push(y);y=y.nextElementSibling};return z};
						`
				} ,
			
			// getSiblingsByTagName
			// ----------------------------

				{
					name     : 'getSiblingsByTagName' ,
					short    : 'Return All Sibling Elements that have a specific tagName' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span>, containing all of the <b>target__HTMLElement</b>'s Sibling Elements, which have the specified <b>tagName__string</b>. </p> 
						<p> The <span class="wrapper">Array</span> will be empty if the <b>target__HTMLElement</b> has no Sibling Elements which have the specified <b>tagName__string</b>. </p>` ,

					baseline : 
						`    // getSiblingsByTagName()
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
						` ,
					log : 
						`    // getSiblingsByTagName()
						    // ----------------------------

						        function getSiblingsByTagName ( target__HTMLElem , tagName__string ) {

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

						                    // log [Warning] -- if the element has no Parent
						                    // ----------------------------

						                    if (!parent) {

						                        console.groupCollapsed(
						                            '%c!! Warning %c| getSiblingsByTagName(%ctarget__HTMLElem, tagName__string%c) | ', 
						                            logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                            'No Parent Element was found.');

						                            console.table(logArguments);
						                            console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                            console.log('─────────────────────');
						                        console.groupEnd();

						                    // log [Warning] -- if no items match the query
						                    // ----------------------------

						                    } else if (siblingsWithTag.length === 0) {
						                        console.groupCollapsed(
						                            '%c!! Warning %c| getSiblingsByTagName(%ctarget__HTMLElem , tagName__string%c) | ', 
						                            logStyles['warning'] , logStyles['function'], logStyles['argument'], logStyles['function'], 
						                            'No Sibling Element with the tagName of "'+tagName+'" was found, for ', target__HTMLElem);

						                            console.table(logArguments);
						                            console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                            console.log('─────────────────────');
						                        console.groupEnd();
						                    };

						                    return siblingsWithTag

						            // log [Error (Silent)] -- if any parameter is Invalid 
						            // ----------------------------

						                } else {

						                    console.groupCollapsed(
						                        '%c!! Error (Silent) %c| getSiblingsByTagName(%ctarget__HTMLElem, tagName__string%c) | ', 
						                        logStyles['error'] , logStyles['function'], logStyles['argument'], logStyles['function'],  
						                        'Invalid function arguments :');

						                        console.table(logArguments);
						                        console.groupCollapsed('Show Trace'); console.trace(); console.groupEnd();
						                        console.log('─────────────────────');
						                    console.groupEnd();

						                    return []

						                }
						        };
						` ,
					minified : 
						`    // getSiblingsByTagName()
						    // ----------------------------

						        function getSiblingsByTagName(a,b){let x=b.toUpperCase(),y=a.parentElement.firstElementChild,z=[];while(y){(y!==a&&y.tagName===x)&&z.push(y);y=y.nextElementSibling};return z};
						`
				} ,
			
		]

	})();