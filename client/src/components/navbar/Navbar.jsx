import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () =>{
    const location = useLocation();
    const path = location.pathname;

    return(
        <Nav>
            <LI><Link 
                to={"/"}
                className={path === '/' ? 'active' : ''}
                style={{ color:'black', outline:'none', textDecoration:'none', fontSize:'24px'}}
                >Home
                </Link>
            </LI>
            <LI><Link 
                to={"/create-blog"}
                className={path === '/create-blog' ? 'active' : ''}
                style={{ color:'black', outline:'none', textDecoration:'none', fontSize:'24px'}}
                >Write
                </Link>
            </LI>
            <LI><Link 
                to={"/saved"}
                className={path === '/saved' ? 'active' : ''}
                style={{ color:'black', outline:'none', textDecoration:'none', fontSize:'24px'}}
                >Saved
                </Link>
            </LI>
        </Nav>
    )
}

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LI = styled.div`
    margin: 10px 80px;
`;