import React from 'react'

function LanguagePicker(props) {

    return (
        <div>
			<input type="radio" name="language" value="en" checked={ props.language === 'en' } onChange={props.setLanguage} />EN |
			<input type="radio" name="language" value="ru" checked={ props.language === 'ru' } onChange={props.setLanguage}/>RU
        </div>
    )
}

export default LanguagePicker
