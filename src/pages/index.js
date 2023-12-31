import Column from '@/components/Column/Column'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home(props) {
  const {data, day} = props;
  if(!data){
    return <div>Loading...</div>
  }
  const column = data.map((e) => {
    return <Column key={e.day} day={e.day} amount={e.amount} crDay={day} />;
  });

  return (
    <>
      <Head>
        <title>Expenses Chart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <div className={`${styles.container} center`}>
          <div className={styles.balanceHead}>
            <div className={styles.balance}>
              <p>My Balance</p>
              <h1>$921.48</h1>
            </div>
            <Image style={{width: '4rem', height: 'auto'}} src={'./logo.svg'} width={100} height={100} alt='mastercard logo' />
          </div>
          <div className={styles.bodySection}>
            <h2>Spending - Last 7 days</h2>
            <div className={`center ${styles.chart}`}>
              {column}
            </div>
            <div className={styles.divider}></div>
            <div className={`center ${styles.bottom}`} style={{justifyContent: 'space-between'}}>
              <div className={styles.thisMonth}>
                <p style={{color: 'var(--MediumBrown)'}}>Total this month</p>
                <h1>$478.33</h1>
              </div>
              <div className={styles.lastMonth}>
                <p style={{fontWeight: '700'}}>+2.4%</p>
                <p style={{color: 'var(--MediumBrown)'}}>from last month</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(){
  const response = await fetch("https://expenses-chart-mauve.vercel.app/api/expenses");
  const data = await response.json();
  const day = (new Date()).toString().split(' ')[0].toLocaleLowerCase();
  return{
    props: {
      data: data,
      day: day
    }
  };
}