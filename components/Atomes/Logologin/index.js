import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogologinStc from "./logologin.stc";

const LogoLogin = () => {

    return ( 
        <LogologinStc>
            <div className="col-lg-12 align-middle d-flex justify-content-center">
              <img src="/img/Logo_CRM.png" className="rounded thumbnail pt-5 mt-5" alt="logo" width="400px"/>
            </div>
        </LogologinStc>

        )
}

export default LogoLogin;