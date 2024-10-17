'use strict';

// dark theme
document.querySelector('#b1-1').onclick = () => {
	Notify({
		title: 'Show',
		content: 'Hello, content!',
		duration: 20,
	}).show();
}
document.querySelector('#b1-2').onclick = () => {
	Notify({
		title: 'showInfo',
		content: 'Hello, content!',
		icon: 'info',
		duration: 20,
	}).showInfo();
}
document.querySelector('#b1-3').onclick = () => {
	Notify({
		title: 'showSuccess',
		content: 'Hello, content!',
		icon: 'ok',
		duration: 20,
	}).showSuccess();
}
document.querySelector('#b1-4').onclick = () => {
	Notify({
		title: 'showWarning',
		content: 'Hello, content!',
		icon: 'message',
		duration: 20,
	}).showWarning();
}
document.querySelector('#b1-5').onclick = () => {
	Notify({
		title: 'showDanger',
		content: 'Hello, content!',
		icon: 'no',
		duration: 20,
	}).showDanger();
}

// white theme
document.querySelector('#b2-1').onclick = () => {
	Notify({
		title: 'Show',
		content: 'Hello, content!',
		duration: 10,
		lightTheme: true,
	}).show();
}
document.querySelector('#b2-2').onclick = () => {
	Notify({
		title: 'showInfo',
		content: 'Hello, content!',
		icon: 'info',
		duration: 10,
		lightTheme: true,
	}).showInfo();
}
document.querySelector('#b2-3').onclick = () => {
	Notify({
		title: 'showSuccess',
		content: 'Hello, content!',
		icon: 'ok',
		duration: 10,
		lightTheme: true,
	}).showSuccess();
}
document.querySelector('#b2-4').onclick = () => {
	Notify({
		title: 'showWarning',
		content: 'Hello, content!',
		icon: 'message',
		duration: 10,
		lightTheme: true,
	}).showWarning();
}
document.querySelector('#b2-5').onclick = () => {
	Notify({
		title: 'showDanger',
		content: 'Hello, content!',
		icon: 'no',
		duration: 10,
		lightTheme: true,
	}).showDanger();
}

// color theme
document.querySelector('#b3-1').onclick = () => {
	Notify({
		title: 'Show',
		content: 'Hello, content!',
		duration: 10,
		coloredBackground: 'all',
	}).show();
}
document.querySelector('#b3-2').onclick = () => {
	Notify({
		title: 'showInfo',
		content: 'Hello, content!',
		icon: 'info',
		duration: 10,
		coloredBackground: 'all',
	}).showInfo();
}
document.querySelector('#b3-3').onclick = () => {
	Notify({
		title: 'showSuccess',
		content: 'Hello, content!',
		icon: 'ok',
		duration: 10,
		coloredBackground: 'all',
	}).showSuccess();
}
document.querySelector('#b3-4').onclick = () => {
	Notify({
		title: 'showWarning',
		content: 'Hello, content!',
		icon: 'message',
		duration: 10,
		coloredBackground: 'all',
	}).showWarning();
}
document.querySelector('#b3-5').onclick = () => {
	Notify({
		title: 'showDanger',
		content: 'Hello, content!',
		icon: 'no',
		duration: 10,
		coloredBackground: 'all',
	}).showDanger();
}

// color title theme
document.querySelector('#b4-1').onclick = () => {
	Notify({
		title: 'Show',
		content: 'Hello, content!',
		duration: 10,
		coloredBackground: 'title',
	}).show();
}
document.querySelector('#b4-2').onclick = () => {
	Notify({
		title: 'showInfo',
		content: 'Hello, content!',
		icon: 'info',
		duration: 10,
		coloredBackground: 'title',
	}).showInfo();
}
document.querySelector('#b4-3').onclick = () => {
	Notify({
		title: 'showSuccess',
		content: 'Hello, content!',
		icon: 'ok',
		duration: 10,
		coloredBackground: 'title',
	}).showSuccess();
}
document.querySelector('#b4-4').onclick = () => {
	Notify({
		title: 'showWarning',
		content: 'Hello, content!',
		icon: 'message',
		duration: 10,
		coloredBackground: 'title',
	}).showWarning();
}
document.querySelector('#b4-5').onclick = () => {
	Notify({
		title: 'showDanger',
		content: 'Hello, content!',
		icon: 'no',
		duration: 10,
		coloredBackground: 'title',
	}).showDanger();
}

// short mode
document.querySelector('#b5-1').onclick = () => {
	Notify({
		title: 'Show',
		content: 'Hello, content!',
		duration: 10,
		shortMode: true,
	}).show();
}
document.querySelector('#b5-2').onclick = () => {
	Notify({
		title: 'showInfo',
		content: 'Hello, content!',
		icon: 'info',
		duration: 10,
		shortMode: true,
	}).showInfo();
}
document.querySelector('#b5-3').onclick = () => {
	Notify({
		title: 'showSuccess',
		content: 'Hello, content!',
		icon: 'ok',
		duration: 10,
		shortMode: true,
	}).showSuccess();
}
document.querySelector('#b5-4').onclick = () => {
	Notify({
		title: 'showWarning',
		content: 'Hello, content!',
		icon: 'message',
		duration: 10,
		shortMode: true,
	}).showWarning();
}
document.querySelector('#b5-5').onclick = () => {
	Notify({
		title: 'showDanger',
		content: 'Hello, content!',
		icon: 'no',
		duration: 10,
		shortMode: true,
	}).showDanger();
}

// bottom timeline
document.querySelector('#b6-1').onclick = () => {
	Notify({
		title: 'Show',
		content: 'Hello, content!',
		duration: 10,
		bottomTimeline: true,
	}).show();
}
document.querySelector('#b6-2').onclick = () => {
	Notify({
		title: 'showInfo',
		content: 'Hello, content!',
		icon: 'info',
		duration: 10,
		bottomTimeline: true,
	}).showInfo();
}
document.querySelector('#b6-3').onclick = () => {
	Notify({
		title: 'showSuccess',
		content: 'Hello, content!',
		icon: 'ok',
		duration: 10,
		bottomTimeline: true,
	}).showSuccess();
}
document.querySelector('#b6-4').onclick = () => {
	Notify({
		title: 'showWarning',
		content: 'Hello, content!',
		icon: 'message',
		duration: 10,
		bottomTimeline: true,
	}).showWarning();
}
document.querySelector('#b6-5').onclick = () => {
	Notify({
		title: 'showDanger',
		content: 'Hello, content!',
		icon: 'no',
		duration: 10,
		bottomTimeline: true,
	}).showDanger();
}

// off timeline
document.querySelector('#b7-1').onclick = () => {
	Notify({
		title: 'Show',
		content: 'Hello, content!',
		duration: 10,
		hideTimeline: true,
	}).show();
}
document.querySelector('#b7-2').onclick = () => {
	Notify({
		title: 'showInfo',
		content: 'Hello, content!',
		icon: 'info',
		duration: 10,
		hideTimeline: true,
	}).showInfo();
}
document.querySelector('#b7-3').onclick = () => {
	Notify({
		title: 'showSuccess',
		content: 'Hello, content!',
		icon: 'ok',
		duration: 10,
		hideTimeline: true,
	}).showSuccess();
}
document.querySelector('#b7-4').onclick = () => {
	Notify({
		title: 'showWarning',
		content: 'Hello, content!',
		icon: 'message',
		duration: 10,
		hideTimeline: true,
	}).showWarning();
}
document.querySelector('#b7-5').onclick = () => {
	Notify({
		title: 'showDanger',
		content: 'Hello, content!',
		icon: 'no',
		duration: 10,
		hideTimeline: true,
	}).showDanger();
}

// copy
const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click', function(event) {
	if (event.target.closest('.dom-copy-btn')) {
		navigator.clipboard
			.writeText(event.target.nextElementSibling.textContent)
			.then( ()=> {
				let info = document.createElement('div');
				info.classList.add('dom-copy-alert');
				info.textContent = '✔';
				event.target.appendChild(info);
				setTimeout(function() {
					event.target.removeChild(info);
				}, 1500);
			});
	}

	// highlight active code
	if (event.target.closest('.btn')) {
		const allDemoCode = document.querySelectorAll('pre');
		allDemoCode.forEach( (elem) => {
			elem.classList.remove('active');
		});

		const id = event.target.id;
		document.querySelector(`[data-target=${id}]`).classList.add('active');
	}
});

scrollToTop();
// scroll to top
function scrollToTop() {
	const btnScrollToTop = document.createElement('span');
	btnScrollToTop.classList.add('scrollToTop');
	document.body.append(btnScrollToTop);

	chechScrollOffset();

	window.onscroll = chechScrollOffset;

	function chechScrollOffset() {
		if (window.pageYOffset > 150) {
			btnScrollToTop.classList.add('scrollToTopVisible');
		} else {
			btnScrollToTop.classList.remove('scrollToTopVisible');
		}
	}

	btnScrollToTop.onclick = () => {
		history.pushState('', document.title, window.location.pathname + window.location.search);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
};