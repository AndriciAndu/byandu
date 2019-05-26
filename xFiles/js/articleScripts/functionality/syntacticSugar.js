	
	(function(){

		let codeBlocks = [

			//`Returns | get*` ,

			// getParents
			// ----------------------------

				{
					name     : 'getParents' ,
					icons    : [ 'fa-arrow-up' ] ,
					short    : 'Return All Parents' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> of <span class="wrapper">HTML Elements</span>, containing all of the <span class="wrapper">target__HTMLElement</span>'s Parent Elements. </p> 
						<p class="sub-heading mt-0"> The <span class="wrapper">Array</span> will be empty if the <span class="wrapper">target__HTMLElement</span> has no Parent Elements. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' }
					] ,

					exampleVarName : 'allParents_ofTarget', 

					baseline : 
						`    <i class="comment">// getParents()</i>
						    <i class="comment">// ----------------------------</i>

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
						`    <i class="comment">// getParents()</i>
						    <i class="comment">// ----------------------------</i>

						        function getParents ( target__HTMLElem , skipWarning__boolean ) {

						            let args = { target__HTMLElem };

						            <i class="comment">// if all Arguments are valid</i>
						            <i class="comment">// ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment">// normal execution</i>
						                    <i class="comment">// ----------------------------</i>

						                        let elemParent = target__HTMLElem.parentElement;
						                        let parents = [];

						                        if (elemParent) {

						                            while (elemParent) {
						                                parents.push(elemParent);
						                                elemParent = elemParent.parentElement;
						                            };

						                        <i class="comment">// If no [Parent] found -- Log [warning] to console</i>
						                        <i class="comment">// ----------------------------</i>

						                        } else if (!skipWarning__boolean) { 
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
						                        };

						                    <i class="comment">// Return all matches found</i>
						                    <i class="comment">// ----------------------------</i>

						                        return parents

						            <i class="comment">// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError]</i>
						            <i class="comment">// ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args);
						                };
						        };
						` ,
					minified : 
						`    <i class="comment">// getParents()</i>
						    <i class="comment">// ----------------------------</i>

						        function getParents(a){let y=a.parentElement,z=[];while(y){z.push(y);y=y.parentElement};return z};
						`
				} ,

			// getParentsByClassName
			// ----------------------------

				{
					name     : 'getParentsByClassName' ,
					icons    : [ 'fa-arrow-up' ] ,
					short    : 'Return All Parents that have a specific class' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> of <span class="wrapper">HTML Elements</span>, containing all of the <span class="wrapper">target__HTMLElement</span>'s Parent Elements, which have the specified <span class="wrapper">class__string</span>. </p> 
						<p class="sub-heading mt-0"> The <span class="wrapper">Array</span> will be empty if the <span class="wrapper">target__HTMLElement</span> has no Parent Elements which have the specified <span class="wrapper">class__string</span>. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' } ,
						{ name : 'class__string'    , type : 'string'      }
					],

					exampleVarName : 'allParents_withSpecifiedClass_ofTarget', 

					baseline : 
						`    <i class="comment">// getParentsByClassName()</i>
						    <i class="comment">// ----------------------------</i>

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
						`    <i class="comment">// getParentsByClassName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getParentsByClassName ( target__HTMLElem , class__string , skipWarning__boolean ) {

						            let args = { target__HTMLElem , class__string };

						            <i class="comment">// if all Arguments are valid</i>
						            <i class="comment">// ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment">// normal execution</i>
						                    <i class="comment">// ----------------------------</i>

						                        let elemParent = target__HTMLElem.parentElement;
						                        let parentsWithClass = [];

						                        if (elemParent) {

						                            while (elemParent) {
						                                if ((" "+elemParent.className+" ").indexOf(" "+class__string+" ") > -1) { 
						                                    parentsWithClass.push(elemParent) 
						                                };
						                                elemParent = elemParent.parentElement;
						                            };

						                            <i class="comment">// If no [Matches] found -- Log [warning] to console</i>
						                            <i class="comment">// ----------------------------</i>

						                            if (!skipWarning__boolean && parentsWithClass.length === 0) {
						                                asteriskUtilityDebugger.createLog('warning' , args , [\`No Parent Elements with "&#36;{class__string}" class were found, for :\` , target__HTMLElem])
						                            };

						                        <i class="comment">// If no [Parent] found -- Log [warning] to console</i>
						                        <i class="comment">// ----------------------------</i>

						                        } else if (!skipWarning__boolean) { 
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
						                        };

						                    <i class="comment">// Return all matches found</i>
						                    <i class="comment">// ----------------------------</i>

						                        return parentsWithClass

						            <i class="comment">// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] </i>
						            <i class="comment">// ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args)
						                };
						        };
						` ,
					minified : 
						`    <i class="comment">// getParentsByClassName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getParentsByClassName(a,b){let y=a.parentElement,z=[];while(y){if((" "+y.className+" ").indexOf(" "+b+" ")>-1){z.push(y)};y=y.parentElement};return z};
						`
				} ,

			// getFirstParentByClassName
			// ----------------------------

				{
					name     : 'getFirstParentByClassName' ,
					icons    : [ 'fa-arrow-up' ] ,
					short    : 'Return First Parent Element that has a specific class' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">HTML Element</span>, representing the <span class="wrapper">target__HTMLElement</span>'s nearest Parent Element, which has the specified <span class="wrapper">class__string</span>. </p> 
						<p class="sub-heading mt-0"> <b-r>Returns</b-r> <span class="wrapper">null</span> if the <span class="wrapper">target__HTMLElement</span> has no Parent Elements which have the specified <span class="wrapper">class__string</span>. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' } ,
						{ name : 'class__string'    , type : 'string'      }
					],

					exampleVarName : 'firstParent_withSpecifiedClass_ofTarget', 

					baseline : 
						`    <i class="comment">// getFirstParentByClassName()</i>
						    <i class="comment">// ----------------------------</i>

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
						`    <i class="comment">// getFirstParentByClassName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getFirstParentByClassName ( target__HTMLElem , class__string , skipWarning__boolean ) {

						            let args = { target__HTMLElem , class__string };

						            <i class="comment">// if all Arguments are valid</i>
						            <i class="comment">// ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment">// normal execution</i>
						                    <i class="comment">// ----------------------------</i>

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

						                            <i class="comment">// If no [matches] found -- Log [warning] to console</i>
						                            <i class="comment">// ----------------------------</i>

						                            if (!skipWarning__boolean && elemParent === null) {
						                                asteriskUtilityDebugger.createLog('warning' , args , [\`No Parent Element with "&#36;{class__string}" class was found for :\` , target__HTMLElem])
						                            };

						                        <i class="comment">// If no [Parents] found -- Log [warning] to console</i>
						                        <i class="comment">// ----------------------------</i>

						                        } else if (!skipWarning__boolean) {
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
						                        };

						                    <i class="comment">// Return all matches found</i>
						                    <i class="comment">// ----------------------------</i>

						                        return elemParent

						            <i class="comment">// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] </i>
						            <i class="comment">// ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args)
						                }
						        };
						` ,
					minified : 
						`    <i class="comment">// getFirstParentByClassName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getFirstParentByClassName(a,b){let y=a.parentElement,z=false;while(y&&!z){(" "+y.className+" ").indexOf(" "+b+" ")>-1?z=!z:y=y.parentElement};return y};
						`
				} ,

			// getParentsByTagName
			// ----------------------------

				{
					name     : 'getParentsByTagName' ,
					icons    : [ 'fa-arrow-up' ] ,
					short    : 'Return All Parents that have a specific tagName' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> of <span class="wrapper">HTML Elements</span>, containing all of the <span class="wrapper">target__HTMLElement</span>'s Parent Elements, which have the specified <span class="wrapper">tagName__string</span>. </p> 
						<p class="sub-heading mt-0"> The <span class="wrapper">Array</span> will be empty if the <span class="wrapper">target__HTMLElement</span> has no Parent Elements which have the specified <span class="wrapper">tagName__string</span>. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' } ,
						{ name : 'tagName__string'  , type : 'string'      }
					],

					exampleVarName : 'allParents_withSpecifiedTagName_ofTarget', 

					baseline : 
						`    <i class="comment">// getParentsByTagName()</i>
						    <i class="comment">// ----------------------------</i>

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
						`    <i class="comment">// getParentsByTagName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getParentsByTagName ( target__HTMLElem , tagName__string , skipWarning__boolean ) {

						            let args = { target__HTMLElem , tagName__string };

						            <i class="comment">// if all Arguments are valid</i>
						            <i class="comment">// ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment">// normal execution</i>
						                    <i class="comment">// ----------------------------</i>

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

						                            <i class="comment">// If no [matches] found -- Log [warning] to console</i>
						                            <i class="comment">// ----------------------------</i>

						                            if (!skipWarning__boolean && parentsWithTag.length === 0) {
						                                asteriskUtilityDebugger.createLog('warning' , args , [\`No Parent Elements with "&#36;{tagName__string}" tagName was found for :\` , target__HTMLElem])
						                            };

						                        <i class="comment">// If no [Parents] found -- Log [warning] to console</i>
						                        <i class="comment">// ----------------------------</i>

						                        } else if (!skipWarning__boolean) {
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
						                        };

						                    <i class="comment">// Return all matches found</i>
						                    <i class="comment">// ----------------------------</i>

						                        return parentsWithTag

						            <i class="comment">// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] </i>
						            <i class="comment">// ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args)
						                }
						        };
						` ,
					minified : 
						`    <i class="comment">// getParentsByTagName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getParentsByTagName(a,b){let x=b.toUpperCase(),y=a.parentElement,z=[];while(y){y.tagName===x&&z.push(y);y=y.parentElement};return z};
						`
				} ,

			// getFirstParentByTagName
			// ----------------------------

				{
					name     : 'getFirstParentByTagName' ,
					icons    : [ 'fa-arrow-up' ] ,
					short    : 'Return First Parent Element that has a specific tagName' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">HTML Element</span>, representing the <span class="wrapper">target__HTMLElement</span>'s nearest Parent Element, which has the specified <span class="wrapper">tagName__string</span>. </p> 
						<p class="sub-heading mt-0"> <b-r>Returns</b-r> <span class="wrapper">null</span> if the <span class="wrapper">target__HTMLElement</span> has no Parent Elements which have the specified <span class="wrapper">tagName__string</span>. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' } ,
						{ name : 'tagName__string'  , type : 'string'      }
					],

					exampleVarName : 'firstParent_withSpecifiedTagName_ofTarget', 

					baseline : 
						`    <i class="comment">// getFirstParentByTagName()</i>
						    <i class="comment">// ----------------------------</i>

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
						`    <i class="comment">// getFirstParentByTagName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getFirstParentByTagName ( target__HTMLElem , tagName__string , skipWarning__boolean ) {

						            let args = { target__HTMLElem , tagName__string };

						            <i class="comment"> if all Arguments are valid</i>
						            <i class="comment"> ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment"> normal execution</i>
						                    <i class="comment"> ----------------------------</i>

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

						                            <i class="comment"> If no [matches] found -- Log [warning] to console</i>
						                            <i class="comment"> ----------------------------</i>

						                            if (!skipWarning__boolean && elemParent === null) {
						                                asteriskUtilityDebugger.createLog('warning' , args , [\`No Parent Element with "&#36;{tagName__string}" tagName was found for :\` , target__HTMLElem])
						                            };

						                        <i class="comment"> If no [Parents] found -- Log [warning] to console</i>
						                        <i class="comment"> ----------------------------</i>

						                        } else if (!skipWarning__boolean) {
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Elements.'])
						                        };

						                    <i class="comment"> Return all matches found</i>
						                    <i class="comment"> ----------------------------</i>

						                        return elemParent

						            <i class="comment"> if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] </i>
						            <i class="comment"> ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args)
						                }
						        };
						` ,
					minified : 
						`    <i class="comment">// getFirstParentByTagName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getFirstParentByTagName(a,b){let x=b.toUpperCase(),y=a.parentElement,z=false;while(y&&!z){y.tagName===x?z=!z:y=y.parentElement};return y}
						`
				} ,


			// getSiblings
			// ----------------------------

				{
					name     : 'getSiblings' ,
					icons    : [ 'fa-arrows-h' ] ,
					short    : 'Return All Sibling Elements' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> of <span class="wrapper">HTML Elements</span>, containing all of the <span class="wrapper">target__HTMLElement</span>'s Sibling Elements. </p> 
						<p class="sub-heading mt-0"> The <span class="wrapper">Array</span> will be empty if the <span class="wrapper">target__HTMLElement</span> has no Sibling Elements. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' }
					],

					exampleVarName : 'allSiblings_ofTarget', 

					baseline : 
						`    <i class="comment">// getSiblings()</i>
						    <i class="comment">// ----------------------------</i>

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
						`    <i class="comment">// getSiblings()</i>
						    <i class="comment">// ----------------------------</i>

						        function getSiblings ( target__HTMLElem , skipWarning__boolean ) {

						            let args = { target__HTMLElem };

						            <i class="comment">// if all Arguments are valid</i>
						            <i class="comment">// ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment">// normal execution</i>
						                    <i class="comment">// ----------------------------</i>

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

						                            <i class="comment">// If no [matches] found -- Log [warning] to console</i>
						                            <i class="comment">// ----------------------------</i>

						                            if (!skipWarning__boolean && siblings.length === 0) {
						                                asteriskUtilityDebugger.createLog('warning' , args , [\`No Siblings were found for :\` , target__HTMLElem])
						                            };

						                        <i class="comment">// If no [Parent] found -- Log [warning] to console</i>
						                        <i class="comment">// ----------------------------</i>

						                        } else if (!skipWarning__boolean) { 
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Element.'])
						                        };

						                    <i class="comment">// Return all matches found</i>
						                    <i class="comment">// ----------------------------</i>

						                        return siblings

						            <i class="comment">// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] </i>
						            <i class="comment">// ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args);
						                };
						        };
						` ,
					minified : 
						`    <i class="comment">// getSiblings()</i>
						    <i class="comment">// ----------------------------</i>

						            function getSiblings(a){let x=a.parentElement,y=x?x.firstElementChild:null,z=[];while(y){y!==a&&z.push(y);y=y.nextElementSibling};return z};
						`
				} ,

			// getSiblingsByClassName
			// ----------------------------

				{
					name     : 'getSiblingsByClassName' ,
					icons    : [ 'fa-arrows-h' ] ,
					short    : 'Return All Sibling Elements that have a specific class' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> of <span class="wrapper">HTML Elements</span>, containing all of the <span class="wrapper">target__HTMLElement</span>'s Sibling Elements, which have the specified <span class="wrapper">class__string</span>. </p> 
						<p class="sub-heading mt-0"> The <span class="wrapper">Array</span> will be empty if the <span class="wrapper">target__HTMLElement</span> has no Sibling Elements which have the specified <span class="wrapper">class__string</span>. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' } ,
						{ name : 'class__string'    , type : 'string'      }
					],

					exampleVarName : 'allSiblings_withSpecifiedClass_ofTarget', 

					baseline : 
						`    <i class="comment">// getSiblingsByClassName()</i>
						    <i class="comment">// ----------------------------</i>

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
						`    <i class="comment">// getSiblingsByClassName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getSiblingsByClassName ( target__HTMLElem , class__string , skipWarning__boolean ) {

						            let args = { target__HTMLElem , class__string };

						            <i class="comment">// if all Arguments are valid</i>
						            <i class="comment">// ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment">// normal execution</i>
						                    <i class="comment">// ----------------------------</i>

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

						                            <i class="comment">// If no [matches] found -- Log [warning] to console</i>
						                            <i class="comment">// ----------------------------</i>

						                            if (!skipWarning__boolean && siblingsWithClass.length === 0) {
						                                if (elemParent.children.length === 1) {
						                                    asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Sibling Elements.'])
						                                } else {
						                                    asteriskUtilityDebugger.createLog('warning' , args , [\`No Siblings with "&#36;{class__string}" class were found for :\` , target__HTMLElem])
						                                }
						                            };

						                        <i class="comment">// If no [Parent] found -- Log [warning] to console</i>
						                        <i class="comment">// ----------------------------</i>

						                        } else if (!skipWarning__boolean) { 
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Element.'])
						                        };

						                    <i class="comment">// Return all matches found</i>
						                    <i class="comment">// ----------------------------</i>

						                        return siblingsWithClass

						            <i class="comment">// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] </i>
						            <i class="comment">// ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args);
						                };
						        };
						` ,
					minified : 
						`    <i class="comment">// getSiblingsByClassName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getSiblingsByClassName(a,b){let y=a.parentElement.firstElementChild,z=[];while(y){(y!==a&&(" "+y.className+" ").indexOf(" "+b+" ")>-1)&&z.push(y);y=y.nextElementSibling};return z};
						`
				} ,
			
			// getSiblingsByTagName
			// ----------------------------

				{
					name     : 'getSiblingsByTagName' ,
					icons    : [ 'fa-arrows-h' ] ,
					short    : 'Return All Sibling Elements that have a specific tagName' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> of <span class="wrapper">HTML Elements</span>, containing all of the <span class="wrapper">target__HTMLElement</span>'s Sibling Elements, which have the specified <span class="wrapper">tagName__string</span>. </p> 
						<p class="sub-heading mt-0"> The <span class="wrapper">Array</span> will be empty if the <span class="wrapper">target__HTMLElement</span> has no Sibling Elements which have the specified <span class="wrapper">tagName__string</span>. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' } ,
						{ name : 'tagName__string'  , type : 'string'      }
					],

					exampleVarName : 'allSiblings_withSpecifiedTagName_ofTarget', 

					baseline : 
						`    <i class="comment">// getSiblingsByTagName()</i>
						    <i class="comment">// ----------------------------</i>

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
						`    <i class="comment">// getSiblingsByTagName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getSiblingsByTagName ( target__HTMLElem , tagName__string , skipWarning__boolean ) {

						            let args = { target__HTMLElem , tagName__string };

						            <i class="comment">// if all Arguments are valid</i>
						            <i class="comment">// ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment">// normal execution</i>
						                    <i class="comment">// ----------------------------</i>

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

						                            <i class="comment">// If no [matches] found -- Log [warning] to console</i>
						                            <i class="comment">// ----------------------------</i>

						                            if (!skipWarning__boolean && siblingsWithTag.length === 0) {
						                                if (elemParent.children.length === 1) {
						                                    asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Sibling Elements.'])
						                                } else {
						                                    asteriskUtilityDebugger.createLog('warning' , args , [\`No Siblings with "&#36;{tagName__string}" tagName were found for :\` , target__HTMLElem])
						                                }
						                            };

						                        <i class="comment">// If no [Parent] found -- Log [warning] to console</i>
						                        <i class="comment">// ----------------------------</i>

						                        } else if (!skipWarning__boolean) { 
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Parent Element.'])
						                        };

						                    <i class="comment">// Return all matches found</i>
						                    <i class="comment">// ----------------------------</i>

						                        return siblingsWithTag

						            <i class="comment">// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] </i>
						            <i class="comment">// ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args);
						                };
						        };
						` ,
					minified : 
						`    <i class="comment">// getSiblingsByTagName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getSiblingsByTagName(a,b){let x=b.toUpperCase(),y=a.parentElement.firstElementChild,z=[];while(y){(y!==a&&y.tagName===x)&&z.push(y);y=y.nextElementSibling};return z};
						`
				} ,
			

			// getChildrenByClassName
			// ----------------------------

				{
					name     : 'getChildrenByClassName' ,
					icons    : [ 'fa-level-up' ] ,
					icons_extraStyleClass : [ 'rotate90deg' ],
					short    : 'Return All Child Elements that have a specific class' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> of <span class="wrapper">HTML Elements</span>, containing all of the <span class="wrapper">target__HTMLElement</span>'s Child Elements, which have the specified <span class="wrapper">class__string</span>. </p> 
						<p class="sub-heading mt-0"> The <span class="wrapper">Array</span> will be empty if the <span class="wrapper">target__HTMLElement</span> has no Child Elements which have the specified <span class="wrapper">class__string</span>. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' } ,
						{ name : 'class__string'    , type : 'string'      }
					],

					exampleVarName : 'allChildren_withSpecifiedClass_ofTarget', 

					baseline : 
						`    <i class="comment">// getChildrenByClassName()</i>
						    <i class="comment">// ----------------------------</i>

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
						` ,
					log : 
						`    <i class="comment">// getChildrenByClassName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getChildrenByClassName ( target__HTMLElem , class__string , skipWarning__boolean ) {

						            let args = { target__HTMLElem , class__string };

						            <i class="comment">// if all Arguments are valid</i>
						            <i class="comment">// ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment">// normal execution</i>
						                    <i class="comment">// ----------------------------</i>

						                        let child = target__HTMLElem.firstElementChild;
						                        let childrenWithClass = [];

						                        if (child) {

						                            while (child) {
						                                if ((" "+child.className+" ").indexOf(" "+class__string+" ") > -1) {
						                                    childrenWithClass.push(child)
						                                };
						                                child = child.nextElementSibling
						                            };

						                            <i class="comment">// If no [matches] found -- Log [warning] to console</i>
						                            <i class="comment">// ----------------------------</i>

						                            if (!skipWarning__boolean && childrenWithClass.length === 0) {
						                                asteriskUtilityDebugger.createLog('warning' , args , [\`No Children with "&#36;{class__string}" class were found for :\` , target__HTMLElem])
						                            };

						                        <i class="comment">// If no [Parent] found -- Log [warning] to console</i>
						                        <i class="comment">// ----------------------------</i>

						                        } else if (!skipWarning__boolean) {
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Child Elements.'])
						                        };

						                    <i class="comment">// Return all matches found</i>
						                    <i class="comment">// ----------------------------</i>

						                        return childrenWithClass

						            <i class="comment">// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] </i>
						            <i class="comment">// ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args);
						                };
						        };
						` ,
					minified : 
						`    <i class="comment">// getChildrenByClassName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getChildrenByClassName(a,b){let y=a.firstElementChild,z=[];while(y){(" "+y.className+" ").indexOf(" "+b+" ")>-1&&z.push(y);y=y.nextElementSibling};return z};
						`
				} ,
			
			// getChildrenByTagName
			// ----------------------------

				{
					name     : 'getChildrenByTagName' ,
					icons    : [ 'fa-level-up' ] ,
					icons_extraStyleClass : [ 'rotate90deg' ],
					short    : 'Return All Child Elements that have a specific tagName' ,
					descript : 
						`
						<p> <b-r>Returns</b-r> an <span class="wrapper">Array</span> of <span class="wrapper">HTML Elements</span>, containing all of the <span class="wrapper">target__HTMLElement</span>'s Child Elements, which have the specified <span class="wrapper">tagName__string</span>. </p> 
						<p class="sub-heading mt-0"> The <span class="wrapper">Array</span> will be empty if the <span class="wrapper">target__HTMLElement</span> has no Child Elements which have the specified <span class="wrapper">tagName__string</span>. </p>
						` ,

					takesArguments : [
						{ name : 'target__HTMLElem' , type : 'HTMLElement' } ,
						{ name : 'tagName__string'  , type : 'string'      }
					],

					exampleVarName : 'allChildren_withSpecifiedTagName_ofTarget', 

					baseline : 
						`    <i class="comment">// getChildrenByTagName()</i>
						    <i class="comment">// ----------------------------</i>

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
						` ,
					log : 
						`    <i class="comment">// getChildrenByTagName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getChildrenByTagName ( target__HTMLElem , tagName__string , skipWarning__boolean ) {

						            let args = { target__HTMLElem , tagName__string };

						            <i class="comment">// if all Arguments are valid</i>
						            <i class="comment">// ----------------------------</i>

						                if (asteriskUtilityDebugger.areArgumentsTypesValid__returnBoolean(args)) {

						                    <i class="comment">// normal execution</i>
						                    <i class="comment">// ----------------------------</i>

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

						                            <i class="comment">// If no [matches] found -- Log [warning] to console</i>
						                            <i class="comment">// ----------------------------</i>

						                            if (!skipWarning__boolean && childrenWithTag.length === 0) {
						                                asteriskUtilityDebugger.createLog('warning' , args , [\`No Children with "&#36;{tagName__string}" tagName were found for :\` , target__HTMLElem])
						                            };

						                        <i class="comment">// If no [Parent] found -- Log [warning] to console</i>
						                        <i class="comment">// ----------------------------</i>

						                        } else if (!skipWarning__boolean) {
						                            asteriskUtilityDebugger.createLog('warning' , args , [target__HTMLElem , ' has no Child Elements.'])
						                        };

						                    <i class="comment">// Return all matches found</i>
						                    <i class="comment">// ----------------------------</i>

						                        return childrenWithTag

						            <i class="comment">// if any Argument is NOT valid -- Log [Error Report] to console && Throw [TypeError] </i>
						            <i class="comment">// ----------------------------</i>

						                } else {
						                    asteriskUtilityDebugger.createLog('typeError' , args);
						                };
						        };
						` ,
					minified : 
						`    <i class="comment">// getChildrenByTagName()</i>
						    <i class="comment">// ----------------------------</i>

						        function getChildrenByTagName(a,b){let x=b.toUpperCase(),y=a.firstElementChild,z=[];while(y){y.tagName===x&&z.push(y);y=y.nextElementSibling};return z};
						`
				} ,
		];

		function generateHTML(codeBlockObject) {

			let lastIndex = codeBlockObject.takesArguments.length - 1;
			let argumentsString = '';
			codeBlockObject.takesArguments.map(function(x, index) {
				argumentsString += ' <span class="wrapper"> <span class="tooltip-before tooltip-top tooltip-nowrap" data-tooltipText="Required Type : '+x.type+'">'+x.name+'</span></span> ';
				if (index !== lastIndex) { argumentsString += ',' };
			});

			let iconExtraStyleClass = codeBlockObject.icons_extraStyleClass || '';

			let HTMLcodeString = 
				`<div class="title-withSpoilerBtn">
					<div class="col-12 sm-col-5"> 
						<b-r><i class="fa ${codeBlockObject.icons[0]} ${iconExtraStyleClass}"></i> | 
						${codeBlockObject.name}</b-r>
					</div>
					<div class="col-12 sm-col-5"> ${codeBlockObject.short} </div> 
					<button class="col-12 sm-col-2 xs-o-my-sm spoiler-btn spoiler-btn-autoText" data-spoiler-id="${codeBlockObject.name}"> </button>
				</div>

				<div class="spoiler" data-spoiler-id="${codeBlockObject.name}">
					<div class="spoiler-content px-md">

						<div class="tabs">
							<div class="tabs-btnGroup buttons-fill">
								<button class="tabs-btn tabs-btn--active"	 data-tabs-id="1"> <i class="fa fa-info-circle"></i> &nbsp; Description </button>
								<button class="tabs-btn"					 data-tabs-id="2"> <i class="fa fa-code"></i> &nbsp; Baseline	 </button>
								<button class="tabs-btn"					 data-tabs-id="3"> <i class="fa fa-code"></i> &nbsp; Logs		 </button>
								<button class="tabs-btn"					 data-tabs-id="4"> <i class="fa fa-code"></i> &nbsp; Minified	 </button>
							</div>

							<div class="tabs-contentGroup">
								<div class="tabs-content tabs-content--active"	 data-tabs-id="1">
									${codeBlockObject.descript}

									<div class="wrapper">
										<line> let <b>${codeBlockObject.exampleVarName}</b> = <b-p>${codeBlockObject.name}(</b-p> ${argumentsString} <b-p>)</b-p> </line>
									</div>
								</div>

								<div class="tabs-content"	 					 data-tabs-id="2">
									<div class="wrapper py-0">
										<div class="copyContext-btnContainer copyContext-btnContainer--syntacticSugar" data-copyContextId="${codeBlockObject.name}-2">
											<button class="copyContext-btn copyContext-btn-copyText"> </button>
											<button class="copyContext-btn copyContext-btn-showLightbox"> </button>
										</div>

										<div class="copyContext" data-copyContextId="${codeBlockObject.name}-2"> 
											<pre>
												${codeBlockObject.baseline}
											</pre> 
										</div>
									</div>
								</div>
								<div class="tabs-content"						 data-tabs-id="3">
									<div class="wrapper py-0"> 
										<div class="copyContext-btnContainer copyContext-btnContainer--syntacticSugar" data-copyContextId="${codeBlockObject.name}-3">
											<button class="copyContext-btn copyContext-btn-copyText"> </button>
											<button class="copyContext-btn copyContext-btn-showLightbox"> </button>
										</div>

										<div class="copyContext" data-copyContextId="${codeBlockObject.name}-3"> 
											<pre>
												${codeBlockObject.log}
											</pre> 
										</div>
									</div>
								</div>
								<div class="tabs-content"						 data-tabs-id="4">
									<div class="wrapper py-0"> 
										<div class="copyContext-btnContainer copyContext-btnContainer--syntacticSugar" data-copyContextId="${codeBlockObject.name}-4">
											<button class="copyContext-btn copyContext-btn-copyText"> </button>
											<button class="copyContext-btn copyContext-btn-showLightbox"> </button>
										</div>

										<div class="copyContext" data-copyContextId="${codeBlockObject.name}-4"> 
											<pre>
												${codeBlockObject.minified}
											</pre> 
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>`;

			HTMLcodeString = HTMLcodeString.replace(/\t/g, '');
			return HTMLcodeString
		};

		let codeString = '';

		codeBlocks.map(codeBlockObject => codeString += generateHTML(codeBlockObject) );
		var newTemplate = document.createElement('template');
		newTemplate.innerHTML = codeString;

		document.getElementById('qwe').appendChild(newTemplate.content)

	})();