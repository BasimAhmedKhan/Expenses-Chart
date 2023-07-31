import Column from '@/components/Column/Column'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Expenses Chart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <div className="container center">
          <div class="balanceHead">
            <div class="balance">
              <p>My Balance</p>
              <h1 id="balanceVal">$921.48</h1>
            </div>
            <Image className='logo' src={'./logo.svg'} width={100} height={100} />
          </div>
          <div className="bodySection">
            <h2>Spending - Last 7 days</h2>
            <div className="chart center">
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
              <Column />
            </div>
            <div className="divider"></div>
            <div className="bottom center" style={{justifyContent: 'space-between'}}>
              <div className="thisMonth">
                <p style={{color: 'var(--MediumBrown)'}}>Total this month</p>
                <h1>$478.33</h1>
              </div>
              <div className="lastMonth">
                <p style={{fontWeight: '700'}}>+2.4% this</p>
                <p style={{color: 'var(--MediumBrown)'}}>from last month</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
