import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogologinStc from "./logologin.stc";
import Image from 'next/image';

const LogoLogin = () => {

    return ( 
        <LogologinStc>
            <div className="login col-lg-12 pt-5 mb-1 align-middle d-flex justify-content-center">
              <Image src="/img/Logo__ComJ.png" alt="Logo" width={350} height={306}/>
            </div>
        </LogologinStc>

        )
}

export default LogoLogin;
