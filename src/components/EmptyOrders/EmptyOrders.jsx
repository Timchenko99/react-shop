import React from 'react'
import classes from './EmptyOrders.module.css';

function EmptyOrders() {
    return (
        <div className={classes.EmptyOrders}>
            <h2>ВАША КОРЗИНА ПУСТА!</h2>
            <p>Зарегистрируйтесь, чтобы сохранить выбранные товары или получить доступ к уже сохраненным товарам в Вашей корзине.</p>
        </div>
    )
}

export default EmptyOrders
