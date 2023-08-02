import styles from './Column.module.css'

export default function Column(props){
    const date = new Date();
    let day = date.getDay();
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDay = "";
    let str = weekDays[day+1].slice(0, 3).toLocaleLowerCase();
    if(str == props.day){currentDay = styles.currentDay;}
    return(
        <div className={`center ${styles.chartContainer}`}>
            <div className={`center ${styles.amount}`}>${props.amount}</div>
            <div className={`${styles.column} ${currentDay}`} style={{height: `${props.amount*2.5}px`}}></div>
            <p style={{color: 'var(--MediumBrown)'}}>{props.day}</p>
        </div>
    )
}