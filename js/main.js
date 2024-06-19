// Burger menu

const menu = document.querySelector('.menu-list')
const menuBtn = document.querySelector('.menu-icon')

const body = document.body

if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})
}

// Modal

const buttonModal = document.querySelector('.menu-button')
const modalElem = document.querySelector('.modal-call')
const crossElem = document.querySelector('.modal-call__close')

modalElem.style.cssText = `
	display: flex;
	visibility: hidden;
	opacity: 0;
	transition: opacity 300ms ease-in-out;
`

// Function closeModal

const closeModal = e => {
	const target = e.target

	if (
		target === modalElem ||
		target.closest('.modal-call__close') ||
		e.code === 'Escape'
	) {
		modalElem.style.opacity = '0'

		setTimeout(() => {
			modalElem.style.visibility = 'hidden'
		}, 300)
	}
}

// Function openModal

const openModal = () => {
	modalElem.style.visibility = 'visible'
	modalElem.style.opacity = '1'

	window.addEventListener('keydown', closeModal)
}

buttonModal.addEventListener('click', openModal)
modalElem.addEventListener('click', closeModal)

if (modalElem && buttonModal) {
	menuBtn.addEventListener('click', () => {
		body.classList.toggle('lock')
	})
}
