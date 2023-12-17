import styled from "styled-components";
import { useState } from "react";

import { Navbar } from "../../components/navbar/Navbar";
import { ForYou } from "./ForYou";
import { Following } from "./Following";

export const Home = () =>{
    const [forYou, setForYou] = useState(true);
    return(
        <Main>
            <Navbar />
            <Selection>
                <ForYouButton
                    onClick = {(e) => {setForYou(true);}}   
                >
                    For You
                </ForYouButton> 
                <FollowingButton 
                    onClick = {(e) => setForYou(false)}
                >
                    Following
                </FollowingButton>
            </Selection>
            <BlogsList>
                {
                    forYou  ? 
                    <ForYou />
                    :
                    <Following />
                }
            </BlogsList>
            
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`;

const Selection = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
    width: 110px;
    button{
        
    }
`;

const ForYouButton = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
`;

const FollowingButton = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
`;

const BlogsList = styled.div``;