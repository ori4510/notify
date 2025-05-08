class NotifyPlugin {
	constructor({
		title = 'Default title',
		content = 'Default content',
		duration = 5,
		lightTheme = false,
		shortMode = false,
		coloredBackground = false,
		hideTimeline = false,
		bottomTimeline = false,
		icon = null
	}) {
		this.title = title;
		this.content = content;
		this.duration = duration * 1000;
		this.lightTheme = lightTheme,
		this.shortMode = shortMode,
		this.coloredBackground = coloredBackground,
		this.hideTimeline = hideTimeline,
		this.bottomTimeline = bottomTimeline,
		this.icon = icon

		return {
			show: () => this.createNotify('dom-notify-default'),
			showInfo: () => this.createNotify('dom-notify-info'),
			showDanger: () => this.createNotify('dom-notify-danger'),
			showWarning: () => this.createNotify('dom-notify-warning'),
			showSuccess: () => this.createNotify('dom-notify-success')
		};
	}

	static iconList = {
		ok: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M335 175 224 286.1 176.1 239c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l64 64C211.7 341.7 217.8 344 224 344s12.28-2.344 16.97-7.031l128-128c9.375-9.375 9.375-24.56 0-33.94S344.4 165.7 335 175zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z"/></svg>',
		no: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M336.1 175c-9.375-9.375-24.56-9.375-33.94 0L256 222.1 208.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03L175 303c-9.375 9.375-9.375 24.56 0 33.94 9.373 9.373 24.56 9.381 33.94 0L256 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0 9.375-9.375 9.375-24.56 0-33.94l-47.03-47.03 47.03-47.03c9.33-9.33 9.33-24.53-.87-33.93zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z"/></svg>',
		info: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 512 512"><path d="M230.4 229.5c0-14.1 11.5-25.6 25.6-25.6s25.6 11.5 25.6 25.6v153.6c0 14.1-11.5 25.6-25.6 25.6s-25.6-11.5-25.6-25.6V229.5zM256 103.3c-14.1 0-25.6 11.5-25.6 25.6s11.5 25.6 25.6 25.6 25.6-11.5 25.6-25.6-11.5-25.6-25.6-25.6z"/><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208z"/></svg>',
		like: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1c0-16.8-14.3-32-32-32zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78-46.61 0-59.36 32.44-69.61 58.5-31.66 80.5-60.33 66.39-60.33 93.47 0 12.84 10.36 23.99 24.02 23.99a23.88 23.88 0 0 0 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7 16.08 0 22.06 12.75 22.06 20.79 0 7.404-7.594 39.55-25.55 71.59a23.934 23.934 0 0 0-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71-12.66.86-22.36 11.4-22.36 23.94 0 15.47 11.39 15.95 11.39 28.91 0 25.37-35.03 12.34-35.03 42.15 0 11.22 6.392 13.03 6.392 22.25 0 22.66-29.77 13.76-29.77 40.64 0 4.515 1.11 5.961 1.11 9.456 0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51a23.851 23.851 0 0 0-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04 0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2 17.77-12.23 28.83-32.51 28.83-54.83a65.97 65.97 0 0 0-.64-9.122c17.84-12.15 29.28-32.58 29.28-55.28 0-5.311-.641-10.54-1.876-15.64C499.9 270.1 512 250.2 512 227z"/></svg>',
		heart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.1 62.86C438.8 41.92 408.9 31.1 378.7 32c-37.49 0-75.33 15.4-103 43.98L256 96.25l-19.7-20.27C208.6 47.4 170.8 32 133.3 32c-30.2 0-60.07 9.93-84.26 30.86-62.14 53.79-65.25 149.7-9.23 207.6l193.2 199.7c6.39 6.54 14.59 9.84 22.89 9.84 8.332 0 16.69-3.267 23.01-9.804l193.1-199.7C528.2 212.5 525.1 116.6 462.1 62.86zM437.6 237.1 256 424.9 74.34 237.1c-32.24-33.3-39.88-99 6.12-137.95 39.9-34.54 94.59-17.5 121.4 10.17l54.17 55.92 54.16-55.92c26.42-27.27 81.26-44.89 121.4-10.17C477.1 138.6 470.5 203.1 437.6 237.1z"/></svg>',
		email: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128c0-35.35-28.7-64-64-64zM64 112h384c8.822 0 16 7.178 16 16v22.16l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47.016L48 150.2V128c0-8.8 7.18-16 16-16zm384 288H64c-8.822 0-16-7.178-16-16V212.7l136.1 113.4c20.2 16.7 45.7 25.9 71.9 25.9s51.75-9.188 71.97-25.98L464 212.7V384c0 8.8-7.2 16-16 16z"/></svg>',
		calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 64h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 248h80v-56H48v56zm0 48v64h80v-64H48zm128 0v64h96v-64h-96zm144 0v64h80v-64h-80zm80-104h-80v56h80v-56zm0 216h-80v56h64c8.8 0 16-7.2 16-16v-40zm-128 0h-96v56h96v-56zm-144 0H48v40c0 8.8 7.16 16 16 16h64v-56zm144-216h-96v56h96v-56z"/></svg>',
		question: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 512 512" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208-93.3 208-208 208zm0-128c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32s-14.9-32-32-32zm33.1-208H238c-39 0-70 31-70 70 0 13 11 24 24 24s24-11 24-24c0-12 9.1-22 21.1-22h51.1c12.9 0 23.8 10 23.8 22 0 8-4 14.1-11 18.1L244 251c-8 5-12 13-12 21v16c0 13 11 24 24 24s24-11 24-24v-2l45.1-28c21-13 34-36 34-60 .9-39-30.1-70-70-70z"/></svg>',
		message: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 .027 125.1.027 240c0 47.63 19.91 91.25 52.91 126.2-14.88 39.5-45.87 72.88-46.37 73.25-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25 28 9.05 60.2 14.25 92.9 14.25 141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zm.1 368c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29 7.375-12.12 14.37-25.75 19.88-40.25l10.62-28-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg>',
		chat: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M208 0c114.9 0 208 78.8 208 176s-93.1 176-208 176c-18.7 0-36.8-2.3-54.1-6.2-30.6 19-74.77 38.2-128.95 38.2-9.98 0-19.02-5.9-22.932-15.1-3.914-9.2-2.025-19.8 4.721-27 .521-.4 22.641-24.5 38.991-56C17.18 255.8 0 217.6 0 176 0 78.8 93.13 0 208 0zm-43.4 298.1c14.6 4.2 29.2 5.9 43.4 5.9 88.2 0 160-57.4 160-128S296.2 48 208 48 48 105.4 48 176c0 35.2 17.71 61.2 32.57 76.9l23.53 24.9-15.79 30.3c-3.57 6-7.58 13.8-11.76 20.4 17.71-5.1 35.15-13 52.15-24.4l16.7-9.5 19.2 3.5zm277-169.9C552 132.4 640 209.5 640 304c0 41.6-17.2 79.8-45.7 109.9 16.3 31.5 38.4 55.6 39 56 6.7 7.2 8.6 17.8 3.8 27-3 9.2-12.1 15.1-22.1 15.1-54.1 0-98.3-19.2-128.9-38.2-17.3 3.9-35.4 6.2-54.1 6.2-82 0-152.9-40.2-186.8-98.5 17.3-2.3 33.9-6.2 49.7-11.6 28 37.2 79 62.1 137.1 62.1 14.2 0 28.8-1.7 43.4-5.9l19.2-3.5 16.7 9.5c17 11.4 34.4 19.3 52.2 24.4-4.2-6.6-8.2-14.4-11.8-20.4l-15.8-30.3 23.5-24.9c14.9-15.6 32.6-41.7 32.6-76.9 0-66.3-63.3-120.9-144.9-127.4l.9-.6c0-16.5-2.2-32.5-6.4-47.8z"/></svg>',
	}

	createNotify(type) {
		let container = document.querySelector('.dom-notify-container');
		
		if (!container) {
			container = document.createElement('div');
			container.classList.add('dom-notify-container');
			document.body.appendChild(container);
		}

		const item = document.createElement('div');
		item.classList.add('dom-notify', type);

		if (this.lightTheme === true) {
			item.classList.add('dom-notify-light-theme');
		}
		
		if (this.bottomTimeline && this.hideTimeline !== true) {
			item.classList.add('dom-notify-bottom-timeline');
		}
		
		if (this.shortMode === true && this.hideTimeline !== true) {
			item.classList.add('dom-notify-bottom-timeline', 'dom-notify-short');
		}
		
		switch (this.coloredBackground) {
			case 'all':
				if (this.shortMode) {
					item.classList.add('dom-notify-colored-title');
				} else {
					item.classList.add('dom-notify-colored-content', 'dom-notify-colored-title');
				}
				break;
			case 'title':
				item.classList.add('dom-notify-colored-title');
				break;
		}

		const headerElem = document.createElement('div');
		headerElem.classList.add('dom-notify-header');

		if (this.icon && this.constructor.iconList[this.icon]) {
			const iconElem = document.createElement('div');
			iconElem.classList.add('dom-notify-icon');
			iconElem.innerHTML = this.constructor.iconList[this.icon];
			headerElem.appendChild(iconElem);
		}
		
		const titleElem = document.createElement('p');
		titleElem.classList.add('dom-notify-title')
		titleElem.innerHTML = this.title;

		const exitElem = document.createElement('div');
		exitElem.classList.add('dom-notify-exit');
		exitElem.innerHTML = '<svg width="22" height="22" stroke-width="2" stroke="currentColor" stroke-linecap="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12"></path></svg>';

		headerElem.appendChild(titleElem);
		headerElem.appendChild(exitElem);
		item.appendChild(headerElem);

		const barElem = document.createElement('div');
		barElem.classList.add('dom-notify-timeline-bar');
		
		if (this.hideTimeline !== true) {
			const barInnElem = document.createElement('div');
			barInnElem.classList.add('dom-notify-timeline-bar-progress');

			barElem.appendChild(barInnElem);
			
			barInnElem.style.animationDuration = `${this.duration}ms`;
		}

		if (this.shortMode !== true || (this.shortMode === true && this.hideTimeline !== true)) {
			item.appendChild(barElem);
		}
		
		if (this.shortMode !== true) {
			const contentElem = document.createElement('div');
			contentElem.classList.add('dom-notify-content');
			contentElem.innerHTML = this.content;
			item.appendChild(contentElem);
		}
		
		container.appendChild(item);
		setTimeout(() => {
			item.classList.add('show-notify');
		}, 10);
		
		exitElem.onclick = () => {
			this.closeNotify(item);
		}

		setTimeout(() => {
			this.closeNotify(item);
		}, this.duration);
	}

	closeNotify(elem) {
		elem.style.opacity = 0;
		setTimeout(() => {
			elem.remove();
			this.removeContainerNotify();
		}, 200);
	}

	removeContainerNotify() {
		const notifyItems = document.querySelectorAll('.dom-notify-container .dom-notify');
		
		if (notifyItems.length === 0) {
			const container = document.querySelector('.dom-notify-container');
			if (container) container.remove();
		}
	}
}

function Notify(options = {}) {
	return new NotifyPlugin(options);
}