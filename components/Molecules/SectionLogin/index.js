import React from "react";
import LogoLogin from "../../Atomes/Logologin";
import LoginForm from "../../Atomes/login";
import SectionLoginStc from './SectionLogin.stc';
import 'bootstrap/dist/css/bootstrap.min.css';



const SectionLogin = () => {

    return ( 
        <div className="container m-2">
        <SectionLoginStc>
        <div className="row rounded ranger">
            <div className="col-lg mb-2">
                <LogoLogin />
            </div>
  
            <div className="col-lg mb-2">
                <LoginForm />
            </div>
        </div>
        </SectionLoginStc>
        </div>
    );
}

export default SectionLogin;