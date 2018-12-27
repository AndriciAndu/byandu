
(function(){

	var demoHeading = document.getElementsByClassName('demoHeading')[0];

	var heading_style = [ 'title-line-double' ];

	document.getElementsByClassName('heading-selectStyle')[0].addEventListener('change', function(){
		demoHeading.classList.remove(...heading_style);
		if (this.value != '') { demoHeading.classList.add(this.value) }
	});
	
	var heading_type = [ 'title-line-before' , 'title-line-after' , 'title-line-both' ];

	document.getElementsByClassName('heading-selectType')[0].addEventListener('change', function(){
		demoHeading.classList.remove(...heading_type);
		if (this.value != '') { demoHeading.classList.add(this.value) }
	});

	document.getElementsByClassName('heading-selectFontSize')[0].addEventListener('input', function(){
		demoHeading.style.fontSize = this.value + 'px';
	});

})();

