import Styled from 'styled-components';
import { Row } from 'reactstrap';

const LogologinStc=Styled(Row)`
    
    border-radius: .8rem;
    width: 100%;
    overflow: hidden!important;

    .login{
        margin-top: 5rem;
    }


.app{
    border-radius: .8rem;
    width: 34rem;
    }

    @media screen and (min-width: 340px) and (max-width: 860px){
        
            margin-top: 10rem!important;
    .login{
    margin-top: 20rem!important;
    }
    .imgLogoSignIn{
        margin-top: 3rem;
    }
}


`;
export default LogologinStc;