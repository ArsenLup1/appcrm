import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionDashStc from './sectionDash.stc';
import { Container } from 'reactstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { GoCalendar } from 'react-icons/go';
import { IoLogoUsd } from 'react-icons/io';



const SectionDash = () => {

    return ( 
        <SectionDashStc>
            <div className="container-fuid">
                
                <div className="main__container mx-auto">

                    <div className="main__title">
                        <img src="/img/logo.png" 
                            className="rounded thumbnail" alt="logo" width="200px" />
                        <div className="main__greeting">
                            <h1>Hello Admin</h1>
                            <p>Welcome to your dashboard CRM</p>
                        </div>
                    </div>

                <div className="main__cards">

                    <div className="card">
                        <AiOutlineUser className="text-lightblue ikons"/>
                        <div className="card__inner">
                            <a className="text-primari-p" href="/rendezvous">Ajouter RDV ISO</a>

                        </div>
                    </div>

                    <div className="card">
                        <GoCalendar className="text-red ikons"/>
                        <div className="card__inner">
                            <a className="text-primari-p" href="/rendezvous">Ajouter RDV CPF</a>
                        </div>
                    </div>

                    <div className="card">
                        <AiOutlineUser className="text-black ikons"/>
                        <div className="card__inner">
                            <a className="text-primari-p" href="/rendezvous">Ajouter RDV ENERGIE</a>
                        </div>
                    </div>

                    
                </div>
            </div>
                <div className="charts">
                    <div className="charts__left">
                        <div className='charts__left__title'>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Lupin, Ain-Sebaâ, Casablanca</p>
                            </div>
                            <IoLogoUsd className="ikons" />
                        </div>
                        <div id="chart">
                            <img src="/img/bgComjob.jpg" className="rounded thumbnail w-auto" alt="logo" width="30px" />
                        </div>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Cupertino, Ain-Sebaâ, Casablanca</p>
                            </div>
                            <IoLogoUsd className="ikons" /> 
                        </div>

                        <div className="charts__right__cards">

                            <div className="card1">
                                <h1>En attente</h1>
                                <p>$75,300</p>
                            </div>

                            <div className="card2">
                                <h1>Confirmer</h1>
                                <p>$125,500</p>
                            </div>

                            <div className="card3">
                                <h1>Users</h1>
                                <p>$7300</p>
                            </div>

                            <div className="card4">
                                <h1>Annuler</h1>
                                <p>$75,300</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
  
        </SectionDashStc>

        )
}

export default SectionDash;