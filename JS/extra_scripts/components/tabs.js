
	// Remove [tab] spaces from <pre> elements
	// --------------------------------
	// allows to properly index <pre> elements within the markup, without offsetting the displayed content >> css tab-space is not globally supported

		(function(){

			var targetedPreElements = Array.from(document.getElementsByClassName('pre-removeTabSpaces'));

			targetedPreElements.map(function(item) {
				item.innerHTML = string_remove_tabSpaces(item.innerHTML)
			});

		})();

	(function(){

	var tabsBtnStyles = [ 'buttons-start', 'buttons-center', 'buttons-end', 'buttons-fill' ];

	document.getElementsByClassName('select-tabs-btnStyle')[0].addEventListener('change', function() {

		var target = document.getElementsByClassName('testTabs1-btnGroup')[0];
		tabsBtnStyles.map(klass => target.classList.remove(klass));
		if (this.value != '') { target.classList.add(this.value) };

	});

	var tabsBtnAlign_hor = [ 'btnText-left', 'btnText-right' ];

	document.getElementsByClassName('select-tabs-btnTextAlign-hor')[0].addEventListener('change', function() {

		var target = document.getElementsByClassName('testTabs1-btnGroup')[0];
		tabsBtnAlign_hor.map(klass => target.classList.remove(klass));
		if (this.value != '') { target.classList.add(this.value) };

	});

	var tabsBtnAlign_ver = [ 'btnText-top', 'btnText-btm' ];

	document.getElementsByClassName('select-tabs-btnTextAlign-ver')[0].addEventListener('change', function() {

		var target = document.getElementsByClassName('testTabs1-btnGroup')[0];
		tabsBtnAlign_ver.map(klass => target.classList.remove(klass));
		if (this.value != '') { target.classList.add(this.value) };

	});

	document.getElementsByClassName('select-tabs-vertical')[0].addEventListener('change', function() {

		var target = document.getElementsByClassName('testTabs1')[0];
		target.classList.remove('tabs-vertical');
		if (this.value != '') { target.classList.add(this.value) };

	});

	document.getElementsByClassName('select-tabs-reverse')[0].addEventListener('change', function() {

		var target = document.getElementsByClassName('testTabs1')[0];
		target.classList.remove('tabs-reverse');
		if (this.value != '') { target.classList.add(this.value) };

	});

	document.getElementsByClassName('input-tabs-height')[0].addEventListener('input', function() {
		var target = document.getElementsByClassName('testTabs1')[0];
		if (this.value != '') 	{ target.style.height = this.value + 'px'	}
		else 					{ target.style.height = 'auto'				};
	});

})();

/*
	var asdf_extra = 
		`<div class="bg-hvr">
			<div class="bg-hvr-1"></div>
			<div class="bg-hvr-2"></div>
			<div class="bg-hvr-3"></div>
		</div>
		`;

	document.getElementById('asdf').insertAdjacentHTML('afterbegin', asdf_extra);
	*/