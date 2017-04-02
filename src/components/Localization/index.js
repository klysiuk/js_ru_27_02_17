export default function I18N(language) {
	return value => texts[language][value.toUpperCase()] || value;
}

const texts = {
	'en' : {
		'ENTER_YOUR_NAME' : 'Enter your name',
		'MENU_HEADER' : 'Menu',
		'INCREMENT_ME' : 'Increment Me',
		'COUNT' : 'Count',
		'USER' : 'user',
		'DELETE_ME' : 'delete me'
	},
	'ru' : {
		'ENTER_YOUR_NAME' : 'Введіть своє ім\'я',
		'MENU_HEADER' : 'Меню',
		'INCREMENT_ME' : 'Збільшити',
		'COUNT' : 'Лічильник',
		'USER' : 'користувач',
		'DELETE_ME' : 'видалити'
	},
}
