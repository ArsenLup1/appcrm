import Styled from 'styled-components';
import { Container } from 'reactstrap';

const loginFormStc=Styled(Container)`
    background: #FfFfFf;

    .loginn{
        width: 300px;
        margin: 1rem 2rem 2rem 2rem;
    }

    /*.monlogo{
        width: 200px;
    }*/

    @media screen and (min-width: 340px) and (max-width: 860px){
    .loginn{
    margin: 2rem;
    }
    .connxion{
        margin-left: 1rem;
    }
}

    .sign-in{
        display: flex;
        justify-content: center
    }



`;
export default loginFormStc;