import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionDashStc from './sectionDash.stc';
import { Container } from 'reactstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { GoCalendar } from 'react-icons/go';
import { CgNotes } from 'react-icons/cg';
import Link from 'next/link';
import Navb from '../../Atomes/navbar';



const SectionDash = () => {

    return ( 
        <SectionDashStc>
            <div className="container-fuid">
                <Navb/>
                <div className="main__container mx-auto">

                    <div className="main__title">
                        <img src="/img/LogoComJOb.png" 
                            className="rounded thumbnail" alt="logo" width="240px" />
                        <div className="main__greeting">
                            <h1>Hello Admin</h1>
                            <p>Welcome to your dashboard CRM</p>
                        </div>
                    </div>

                <div className="main__cards">

                    <div className="card">
                        <AiOutlineUser className="text-lightblue ikons"/>
                        <div className="card__inner">
                            <Link className="text-primari pe" href="/rdviso">Ajouter RDV ISO</Link>

                        </div>
                    </div>

                    <div className="card">
                        <GoCalendar className="text-red ikons"/>
                        <div className="card__inner">
                            <Link  className="text-primari pe" href="/rendezvous">Ajouter RDV CPF</Link>
                        </div>
                    </div>

                    <div className="card">
                        <AiOutlineUser className="text-black ikons"/>
                        <div className="card__inner">
                            <Link  className="text-primari pe" href="/rendezvous">Ajouter RDV ENERGIE</Link>
                        </div>
                    </div>

                    
                </div>
            </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className='charts__left__title'>
                            <div>
                                <h1>Statistiques Total</h1>
                                <p>Call Ain-Sebaâ, Casablanca</p>
                            </div>
                            <CgNotes className="ikons" />
                        </div>
                        <div id="chart">
                            <img src="/img/bgComjob.jpg" className="rounded thumbnail w-auto" alt="logo" width="30px" />
                        </div>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Statistiques Total</h1>
                                <p>Call-Name, Ain-Sebaâ, Casablanca</p>
                            </div>
                            <CgNotes className="ikons" /> 
                        </div>

                        <div className="charts__right__cards">

                            <div className="card1">
                                <h1>Isolation</h1>
                                <p>75,300</p>
                            </div>

                            <div className="card2">
                                <h1>CPF</h1>
                                <p>125,500</p>
                            </div>

                            <div className="card3">
                                <h1>Energie</h1>
                                <p>7300</p>
                            </div>

                            <div className="card4">
                                <h1>Annuler/en attente</h1>
                                <p>75,300</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
  
        </SectionDashStc>

        )
}

export default SectionDash;