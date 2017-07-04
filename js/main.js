var header = document.getElementById('header');
var scroll = document.getElementById('scroll');

window.addEventListener('scroll', showHeader);
window.addEventListener('scroll', hideScroll);

function showHeader() {
        if (window.pageYOffset > 0) {
                header.classList.remove('display-none');
                return;
        }

        header.classList.add('display-none');
}

function hideScroll() {
	window.removeEventListener('scroll', hideScroll);

	scroll.classList.add('display-none');
}
