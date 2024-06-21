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

// Price Section

// notepad

const chooseNoteBtn = document.querySelectorAll('.price-btn__note')
const priceNoteContent = document.querySelectorAll('.price__price-note')

chooseNoteBtn.forEach(function (element) {
	element.addEventListener('click', openNote)
})

function openNote(evt) {
	const target = evt.currentTarget
	const button = target.dataset.button
	const contentActive = document.querySelectorAll(`.${button}`)

	chooseNoteBtn.forEach(function (item) {
		item.classList.remove('price-note--active')
	})

	target.classList.add('price-note--active')

	priceNoteContent.forEach(function (item) {
		item.classList.remove('price__price-note--active')
	})

	contentActive.forEach(function (item) {
		item.classList.add('price__price-note--active')
	})
}

// telephone

const chooseTelBtn = document.querySelectorAll('.price-btn__tel')
const priceTelContent = document.querySelectorAll('.price__price-tel')

chooseTelBtn.forEach(function (element) {
	element.addEventListener('click', openTel)
})

function openTel(evt) {
	const target = evt.currentTarget
	const button = target.dataset.button
	const contentActive = document.querySelectorAll(`.${button}`)

	chooseTelBtn.forEach(function (item) {
		item.classList.remove('price-tel--active')
	})

	target.classList.add('price-tel--active')

	priceTelContent.forEach(function (item) {
		item.classList.remove('price__price-tel--active')
	})

	contentActive.forEach(function (item) {
		item.classList.add('price__price-tel--active')
	})
}
