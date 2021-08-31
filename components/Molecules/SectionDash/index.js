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
                        <img src="/img/Logo__ComJ.png" 
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
                            <Link className="text-primari title" href="/rdviso">Ajouter RDV ISO</Link>


                        </div>
                    </div>

                    <div className="card">
                        <GoCalendar className="text-red ikons"/>
                        <div className="card__inner">
                            <Link  className="text-primari title" href="/rendezvous">Ajouter RDV CPF</Link>
                        </div>
                    </div>

                    <div className="card">
                        <AiOutlineUser className="text-black ikons"/>
                        <div className="card__inner">
                            <Link  className="text-primari title" href="/rendezvous">Ajouter RDV ENERGIE</Link>
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
                        <div className="charts__right__cards">
                            <div className="card1">
                                    <h1>Confirmé</h1>
                            </div>
                            <div className="card2">
                                <h1>POSE</h1>
                            </div>
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

                            <div className="card3">
                                <h1>NRP</h1>
                            </div>

                            <div className="card4">
                                <h1>Annulée</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
  
        </SectionDashStc>

        )
}

export default SectionDash;
