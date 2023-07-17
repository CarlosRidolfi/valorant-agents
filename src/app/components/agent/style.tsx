import styled from "styled-components"
import Bg from '../../../../public/bg.jpg'

export const Container = styled.div`
    position: relative;
    height: 100vh;
    background-image: url(${Bg?.src});
    background-size: cover;
    padding: 4rem;
    overflow: hidden;
`

export const Wrapper = styled.div`
    position: relative;
    max-width: 1440px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    column-gap: 30px;
`

export const AgentsSelectorsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    row-gap: 10px;
    width: 500px;
    max-height: 800px;
    padding: 30px 0px 30px 0px;

    &::-webkit-scrollbar { 
        display: none; 
    }
`

export const AgentIcon = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    transition: all ease 1s;

    &:hover {
        transform: scale(1.1);
    }

    img {
        border: 1px solid white;
        border-radius: 90px;
        background-color: #0F1823;
        max-width: 120px;
        max-height: 120px;
    }
`

export const AgentImage = styled.div`
    #imgwrapper[data-animation='1'] {
        animation: slide 1s forwards;    
    }

    @keyframes slide {
        0% {
            transform: translateX(-50px);
        }
        100% {
            transform: translateX(0px);
        }
    }
`

export const HorizontalLine = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 1px; 
    background-color: lightgrey;
`

export const AgentInfoWrapper = styled.div`
    display: flex;
    align-items: start;
    row-gap: 10px;
    flex-direction: column;
`

export const AgentName = styled.h1`
    width: 100%;
    font-family: 'Tungsten';
    font-size: 10rem;
    color: #FF4655;

    @media screen and (max-width: 1400px){
        font-size: 8rem;
    }
`

export const AgentFunction = styled.h2`
    font-family: 'Tungsten';
    font-size: 5rem;
`

export const AgentStory = styled.p`
    font-family: 'din';
    font-size: 24px;
    max-width: 600px;
`
