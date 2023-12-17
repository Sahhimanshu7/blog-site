import styled from "styled-components"
import { BlogDescBox } from "../../components/misc/BlogDescBox"

export const ForYou = () =>{
    return (
        <Main>
            <Header>For You</Header>
            <BlogDescBox />
        </Main>
    )
}

const Header = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin: 10px;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;