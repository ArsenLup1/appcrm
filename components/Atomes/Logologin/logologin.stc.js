import Styled from 'styled-components';
import { Row } from 'reactstrap';

const LogologinStc=Styled(Row)`
    border-radius: .8rem;
    overflow: hidden!important;

    .login{
        margin-top: 5rem;
    }


.app{
    border-radius: .8rem;
    width: 34rem;
    }

    @media screen and (min-width: 340px) and (max-width: 860px){
        
            margin-top: 1rem!important;
            visibility: hidden;
            height: 0px;
    .login{
    margin-top: 8rem!important;
    }
    .imgLogoSignIn{
        margin-top: 2rem;
    }
}


`;
export default LogologinStc;