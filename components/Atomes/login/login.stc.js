import Styled from 'styled-components';
import { Container } from 'reactstrap';

const loginFormStc=Styled(Container)`
    background: #F0F0F0;

    .login{
        width: 300px;
        margin: 10rem 5rem 5rem 0;
    }

    /*.monlogo{
        width: 200px;
    }*/

    .sign-in{
        display: flex;
        justify-content: center
    }


`;
export default loginFormStc;