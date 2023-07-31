import styles from './Column.module.css'

export default function Column(props){
    return(
        <div className={styles.chartContainer}>
            <div className={styles.column} style={{height: '8rem'}}></div>
            <p style={{color: 'var(--MediumBrown)'}}>mon</p>
        </div>
    )
}