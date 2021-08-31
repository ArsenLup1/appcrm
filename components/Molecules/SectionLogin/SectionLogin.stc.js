import { Container, Row } from 'reactstrap';
import Styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const SectionLoginStc =Styled(Container)`

    background: #f7f49dad;
    
    
    .ranger{       
        box-shadow: 3px 3px 5px #d9d9d9, 
                -3px -3px 5px #ffffff!important;
    }

    /*.coline{ 
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("/img/bg-login.png")!important;
        background-size: contain;
        }*/

    .login-in{
        background: khaki;
        height: 100%;
    }
    


`;

export default SectionLoginStc;
