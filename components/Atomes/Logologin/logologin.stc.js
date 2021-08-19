import Styled from 'styled-components';
import { Row } from 'reactstrap';

const LogologinStc=Styled(Row)`
    
    border-radius: .8rem;
    width: 100%;
    overflow: hidden;

    .login{
        margin-top: 5rem;
    }


.app{
    border-radius: .8rem;
    width: 34rem;
    }

    @media screen and (max-width: 980px){
    .login{
    margin-top: 15rem;
    }
}


`;
export default LogologinStc;