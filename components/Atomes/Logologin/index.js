import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogologinStc from "./logologin.stc";

const LogoLogin = () => {

    return ( 
        <LogologinStc>
            <div className="col-lg-12 pt-5 mb-1 align-middle d-flex justify-content-center login">
              <img src="./img/Logo__ComJ.png" className="rounded thumbnail monlogo" alt="logo" width="300px" />
            </div>
        </LogologinStc>

        )
}

export default LogoLogin;