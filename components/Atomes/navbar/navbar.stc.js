import Styled from 'styled-components';
import { Container, Navbar, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarStc=Styled(Navbar)`
    background: transparent;
    width: fit-content;
    padding: 0;
    margin: 0;

    a{
        position: relative;
        font-size: 15px;
        font-weight: 600;
        font-family: -webkit-pictograph;
        color: #000;
    }
    a:after{
        content: "";
        position: absolute;
        background-color: #ff3c78;
        height: 3px;
        width: 0;
        left: 0;
        bottom: -10px;
    }
    a:hover{
        color: blue!important;
    }
    a:hover:after{
        width: 100%;
        transition: 1s;
    }

    .sidebar__logout {
    margin: auto;
    color: #e65061;
    padding: 10px;
    margin-left: 5rem;
}

.sidebar__logout > a{
    text-decoration: none;
    color: #e65061;
    font-weight: 700;
    text-transform: uppercase;
}

@media screen and (min-width: 340px) and (max-width: 860px){
    width: 100%;
}


`;
export default NavbarStc;