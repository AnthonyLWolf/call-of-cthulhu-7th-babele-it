Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'call-of-cthulhu-7th-babele-it',
			lang: 'it',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/call-of-cthulhu-7th-babele-it/img/fvtt-anvil-it.png";
		
	}
});