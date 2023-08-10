import styles from './Column.module.css'

export default function Column(props){
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let day = date.getDay();
    let currentDay = "";
    let str = weekDays[day].slice(0, 3).toLocaleLowerCase();
    if(str == props.day){currentDay = styles.currentDay;}
    return(
        <div className={`center ${styles.chartContainer}`}>
            <div className={`center ${styles.amount}`}>${props.amount}</div>
            <div className={`${styles.column} ${currentDay}`} style={{height: `${props.amount*2.5}px`}}></div>
            <p style={{color: 'var(--MediumBrown)'}}>{props.day}</p>
        </div>
    )
}