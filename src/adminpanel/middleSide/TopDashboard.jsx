import React, { useEffect, useState } from 'react';
import './TopDashboard.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RecentUpdates from '../rightSide/RecentUpdates';
import TableSection from './TableSection';
// import { Direction } from 'react-data-table-component';

function TopDashboard({ themeToggle }) {
    const [sales, setSales] = useState(60);
    const [expense, setExpense] = useState(90);
    const [income, setIncome] = useState(50);
    //Time
    var [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <main className='main-side'>
                 {/* part 1 */}
               <div>
                    <div className='time_live'>
                        <h1>Dashboard</h1>
                        <h1>{time.toLocaleTimeString()}</h1>
                    </div>

                    <div className='date'>
                        <input type='date' />
                    </div>

                    <div className='cards'>
                        {/* Start Sales */}
                        <div className='sales'>
                            <span className="material-symbols-outlined">trending_up</span>
                            <div className='middle'>
                                <div className='left'>
                                    <h3>Total sales</h3>
                                    <h1>$2,410</h1>
                                </div>
                                <div className='progress'>
                                    <CircularProgressbar
                                        value={sales}
                                        text={`${sales}%`}
                                        styles={buildStyles({
                                            textColor: 'red',
                                            pathColor: 'turquoise',
                                            trailColor: 'gold',
                                        })}
                                    />
                                </div>
                            </div>
                            <small className="text-muted">Last 24 hours</small>
                        </div>
                        {/* End sales */}

                        {/* Start Expenses */}
                        <div className='expense'>
                            <span className="material-symbols-outlined">local_mall</span>
                            <div className='middle'>
                                <div className='left'>
                                    <h3>Expenses</h3>
                                    <h1>$24,010</h1>
                                </div>
                                <div className='progress'>
                                    <CircularProgressbar
                                        value={expense}
                                        text={`${expense}%`}
                                        styles={buildStyles({
                                            textColor: 'red',
                                            pathColor: 'turquoise',
                                            trailColor: 'gold',
                                        })}
                                    />
                                </div>
                            </div>
                            <small className="text-muted">Last 24 hours</small>
                        </div>
                        {/* End Expenses */}

                        {/* Start Income */}
                        <div className="income">
                            <span className="material-symbols-outlined">person_outline</span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Sales</h3>
                                    <h1>$25,024</h1>
                                </div>
                                <div className="progress">
                                    <CircularProgressbar
                                        value={income}
                                        text={`${income}%`}
                                        styles={buildStyles({
                                            textColor: 'red',
                                            pathColor: 'turquoise',
                                            trailColor: 'gold',
                                        })}
                                    />
                                </div>
                            </div>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        {/* End Income */}
                    </div>
                    <TableSection />
                </div>
                {/* part 2 */}
                <div style={{marginLeft:"20px"}}>
                <RecentUpdates themeToggle={themeToggle} />
                </div>
               

            </main>
        </>
    );
}

export default TopDashboard;
