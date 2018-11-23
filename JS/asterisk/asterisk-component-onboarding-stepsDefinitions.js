

	// Each [onboarding] component requires defining an [stepsObj] property upon it, before the actual initialization

	/*

		// Example:
		// ----------------------------------

			var onboarding_1 = document.getElementsByClassName('onboarding')[0];

			onboarding_1.stepsObj = [
				
				{
					step_defaultTarget : document.getElementsByClassName('onboarding')[0] ,
					notifBox_setPosition : [['center', 0], ['center', 0]] ,
					notifBox_setBubble : ' ' ,
					notifBox_setText : '<p> First Step </p>'
				} ,

				{
					step_defaultTarget : document.getElementById('myId') ,
					highlight : true ,
					scrollTo : true ,
					notifBox_setPosition : [['right-out', 10], ['center', 10]] ,
					notifBox_setBubble : 'bubble-left bubble-center' ,
					notifBox_setText : '<p> Second Step </p>'
				} 

			];

	*/