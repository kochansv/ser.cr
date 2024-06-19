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
