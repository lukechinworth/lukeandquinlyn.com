var header = document.getElementById('header');

window.addEventListener('scroll', function(e) {
	if (window.pageYOffset > 0) {
		header.classList.remove('display-none');
		return;
	}

	header.classList.add('display-none');
});
