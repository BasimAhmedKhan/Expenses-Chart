import { useState } from 'react';
import styles from './Column.module.css'

export default function Column(props) {

    // const [day, setDay] = useState((new Date()).toString().split(' ')[0].toLocaleLowerCase());

    return (
        <div className={`center ${styles.chartContainer}`}>
            <div className={`center ${styles.amount}`}>${props.amount}</div>
            <div className={`${styles.column} ${props.day === props.crDay ? styles.currentDay : ""}`} style={{ height: `${props.amount * 2.5}px` }}></div>
            <p style={{ color: 'var(--MediumBrown)' }}>{props.day}</p>
        </div>
    )
}
