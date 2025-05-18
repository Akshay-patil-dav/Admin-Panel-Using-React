import React from 'react'



export const ProgressCard = () => {
    return (
        <>
            {/* ****** */}
            <div className='upgrade-aleart progressbar mt-2 '>
                {/* <br /> */}
                <div className="progress">
                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <br />
                <b className='Adding'>Adding sample data</b>





                <button className="button-2 mt-3 container" role="button">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                    </svg>
                    <b className='mx-2 '>New Update </b>

                </button>
            </div>
        </>
    )
}

export const UpgradeCard = () => {
    return (
        <>
            {/* ************* */}
           
                <div className='upgrade-aleart '>

                    <div className='container mt-3 fx'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-exclamation-circle text-white" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                        </svg>
                        <h6><b className='mx-2 text-white '>Your Trial End Soon</b></h6>
                    </div>

                    <div className='container Upgrade-text mt-2 mx-2'>
                        <b>
                            Upgrade to team to get latest exclusive features.
                        </b>
                    </div>


                    <button className="button-87 mt-3" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning-charge" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                        </svg>

                        <b className='mx-2 '>Upgrade plan</b>
                    </button>
                </div>

        </>
    )
};


export default function AleartCard(props) {

    if (props.type === 'User') {
        return (
            <ProgressCard />
        );
    } else {
        return (
            <UpgradeCard />
        );
    }


}
