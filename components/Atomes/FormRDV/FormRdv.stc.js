import Styled from 'styled-components';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const FormRdvStc=Styled(Container)`
    
    padding-left: 1.5rem;

    .dropdown.btn-group{
        width: inherit!important;
    }

    .super-colors.dropdown-menu.show{
        width: inherit;
    }

    button#dropdown-custom-1-dropdown-toggle.btn{
        text-align: inherit;
    }

    .rappel{
        display: flex;
        justify-content: left;
        font-size: xx-large;
        font-weight: 600;
        color: darkgreen;
        padding-top: .5rem;
    }
    .rdv_btn{
        width: -webkit-fill-available;
    }

`;
export default FormRdvStc;