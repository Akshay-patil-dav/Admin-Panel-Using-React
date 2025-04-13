import React from 'react'
// import { CardsBox } from './Dashboard'
import CradSlide from './components/RecentActivityCard';
import SmallSalesChartCard from './components/SmallSalesChartCard ';
import ProjectBalanceCard from './components/ProjectBalanceCard ';
import ContactSourceCard from './components/ContactSourceCard ';
import TransactionListCard from './components/TransactionListCard';

export function CardsBox() {
    return (

        <div class="c-dashboardInfo col-lg-3 col-md-6">
            <div class="wrap">
                <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Portfolio Balance<svg
                    class="MuiSvgIcon-root-19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
                    </path>
                </svg></h4><span class="hind-font caption-12  c-dashboardInfo__count">€10,500</span>
            </div>
        </div>

    );
}


export function Cards() {
    return (
        <div id="cardsbox">
            <div class="container pt-5">
                <div class="row align-items-stretch">


                    <CardsBox />
                    <CardsBox />
                    <CardsBox />
                    <CardsBox />
                    <CardsBox />
                    <CardsBox />
                    <CardsBox />
                    <CardsBox />
                    <CardsBox />
                    <CardsBox />
                    <CardsBox />
                    <CardsBox />


                </div>
            </div>
        </div>
    )
}

export default function CRM() {
    return (
        <div className="eduler-layout">
            <main className="eduler-main">
                <div className="eduler-main__container">
                    {/* lkejdl */}
                    <div className='fx'>
                        <h4><b>Dashboard /</b></h4><h4><p className='mx-3'>CRM</p></h4>
                    </div>
                    {/* ***************** */}
                    <div className='fx'>
                        <div>
                            {/* <Cards /> */}
                            <SmallSalesChartCard />
                            <Cards />
                            <ContactSourceCard />

                        </div>
                        <div className='boxleft '>
                            {/* <br /> */}
                            <CradSlide />
                            <br />
                            <ProjectBalanceCard />
                            <TransactionListCard />

                            <div className='mt-4 subscriptionCard'>
                                <img className='subscription ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg91nNJNLvZUlTCyGJ2pEoP0ZvVDXn2-c6uA&s" alt="" />
                                <button type="button" class=" Subscriptionsbut">Subscriptions</button>
                                <div className='subcr-card'>
                                </div>
                            </div>
                          

                        </div>
                    </div>
                    {/* ****************  */}


                </div>
            </main>
        </div>

    )
}
