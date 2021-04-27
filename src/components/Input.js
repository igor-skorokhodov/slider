import React from 'react'

function Input (props) {

    return (
        <form className="form">
            <input onChange={props.onChange} className="form__input" placeHolder='Введите текст'></input>
            <button onClick={props.onClick} className="form__button" type="button">Добавить</button>
        </form>
    ) 
}

export default Input