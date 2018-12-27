
(function(){

	//

		var klasses = ['notifBox_setPosition-selectX', 'notifBox_setPosition-selectY', 'notifBox_setPosition-inputX', 'notifBox_setPosition-inputY'];

		klasses.map(function(klass){
			document.getElementsByClassName(klass)[0].addEventListener('input', update_notifBox_position)
		});

		function update_notifBox_position() { 
			
				var notifBox 	= document.getElementsByClassName('notifBox_setPosition-testArea-notifBox')[0];
				var targetElem 	= document.getElementsByClassName('notifBox_setPosition-testArea-target')[0];

				var x_start = document.getElementsByClassName('notifBox_setPosition-selectX')[0].value;
				var y_start = document.getElementsByClassName('notifBox_setPosition-selectY')[0].value;
				var xAxis_offset = parseInt(document.getElementsByClassName('notifBox_setPosition-inputX')[0].value) || null;
				var yAxis_offset = parseInt(document.getElementsByClassName('notifBox_setPosition-inputY')[0].value) || null;

				var set_x, set_y;

				switch (x_start) {

					case 'left-in': 
						set_x = 0;
						if (xAxis_offset) { set_x +=  xAxis_offset };
					break;

					case 'left-out': 
						set_x = -notifBox.offsetWidth;
						if (xAxis_offset) { set_x -= xAxis_offset };
					break;

					case 'center': 
						set_x = (targetElem.offsetWidth / 2) - (notifBox.offsetWidth / 2);
					break;

					case 'right-in': 
						set_x = targetElem.offsetWidth - notifBox.offsetWidth;
						if (xAxis_offset) { set_x -= xAxis_offset };
					break;

					case 'right-out': 
						set_x = targetElem.offsetWidth;
						if (xAxis_offset) { set_x +=  xAxis_offset };
					break;

				};

				switch (y_start) {

					case 'top-in': 
						set_y = 0;
						if (yAxis_offset) { set_y +=  yAxis_offset };
					break;

					case 'top-out': 
						set_y = -notifBox.offsetHeight;
						if (yAxis_offset) { set_y -= yAxis_offset };
					break;

					case 'center': 
						set_y = (targetElem.offsetHeight / 2) - (notifBox.offsetHeight / 2);
					break;

					case 'btm-in':
					case 'bottom-in': 
						set_y = targetElem.offsetHeight - notifBox.offsetHeight;
						if (yAxis_offset) { set_y -= yAxis_offset };
					break;

					case 'btm-out':
					case 'bottom-out': 
						set_y = targetElem.offsetHeight;
						if (yAxis_offset) { set_y +=  yAxis_offset };
					break;

				};

				if (xAxis_offset === null) { xAxis_offset = 0 };
				if (yAxis_offset === null) { yAxis_offset = 0 };

				notifBox.style.left = set_x + 'px';
				notifBox.style.top  = set_y + 'px';

				document.getElementsByClassName('notifBox_setPosition-testArea-finalArray')[0].innerHTML = 
				"<b-p>notifBox_setPosition</b-p> <b>: [ [ '" + x_start + "' , " + xAxis_offset + " ] , [ '" + y_start + "' , " + yAxis_offset + " ] ]</b>";
		};

	//

		var klasses2 = ['notifBox_setBubble-selectDir', 'notifBox_setBubble-selectPos'];

		klasses2.map(function(klass){
			document.getElementsByClassName(klass)[0].addEventListener('input', update_notifBox_bubble)
		});

		var notifBox_bubbleClasses = {
			positions  : [	'bubble-left'  , 'bubble-right' , 'bubble-top' 	, 'bubble-btm' , 'bubble-bottom' ] ,
			alignment  : [	'bubble-start' , 'bubble-center', 'bubble-end'	] ,
			allClasses : [	'bubble-left'  , 'bubble-right' , 'bubble-top' 	, 'bubble-btm' , 'bubble-bottom' , 'bubble-start' , 'bubble-center', 'bubble-end' ]
		};
		
		function update_notifBox_bubble() {

			var target = document.getElementsByClassName('notifBox_setBubble-testArea-target')[0];

			var classString = 
				document.getElementsByClassName('notifBox_setBubble-selectDir')[0].value + ' ' +
				document.getElementsByClassName('notifBox_setBubble-selectPos')[0].value;

			if (document.getElementsByClassName('notifBox_setBubble-selectDir')[0].value == ' ') {
				classString = ' '
			};

			document.getElementsByClassName('notifBox_setBubble-testArea-result')[0].innerHTML = 
				"<b-p>notifBox_setBubble</b-p> <b>: '" + classString + "' </b>";

			target.classList.remove(...notifBox_bubbleClasses.allClasses);
			target.className += ' ' + classString;
		};

})();
