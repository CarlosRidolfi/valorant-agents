import React from 'react'
import styled from 'styled-components'
import Bg from '../../../../public/bg.jpg'
import Sova from '../../../../public/sova.png'
import Image from 'next/image'
import { agentsList } from './agents'

const Container = styled.div`
    position: relative;
    height: 100vh;
    background-image: url(${Bg?.src});
    background-size: cover;
    padding: 4rem;
    overflow: hidden;
`

const Wrapper = styled.div`
    position: relative;
    max-width: 1440px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    column-gap: 30px;
`

const AgentsSelectorsWrapper = styled.div`
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

const AgentIcon = styled.button`
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

const AgentImage = styled.div`
    img[animation='1'] {
        animation: slide 1s forwards;       
        

        @keyframes slide {
            0% {
                transform: translateX(-50px);
            }
            100% {
                transform: translateX(0px);
            }
        }
    }
`

const VerticalLine = styled.div`
    width: 2px;
    height: 120px; 
    background-color: #FF4655;
`

const HorizontalLine = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 1px; 
    background-color: lightgrey;
`

const AgentInfoWrapper = styled.div`
    display: flex;
    align-items: start;
    row-gap: 10px;
    flex-direction: column;
`

const AgentName = styled.h1`
    width: 100%;
    font-family: 'Tungsten';
    font-size: 10rem;
    color: #FF4655;

    @media screen and (max-width: 1400px){
        font-size: 8rem;
    }
`

const AgentFunction = styled.h2`
    font-family: 'Tungsten';
    font-size: 5rem;
`

const AgentStory = styled.p`
    font-family: 'din';
    font-size: 24px;
    max-width: 600px;
`

export default function Agent() {
    const [agentInfo, setAgentInfo] = React.useState(agentsList[0])
    const [agentImage, setAgentImage] = React.useState(Sova)
    const [animation, setAnimation] = React.useState(0)

    const setAgent = (agent: any) => {
        setAgentInfo(agent)
        setAgentImage(agent.image)
        setAnimation(1)
    }
    
    return (
        <Container>
            <Wrapper>
                <AgentsSelectorsWrapper>
                    {
                        agentsList.map((agent) => (
                            <AgentIcon onClick={() => setAgent(agent)} key={agent.id}>
                                <Image
                                    src={agent.icon}
                                    alt={agent.name}
                                    width={150}
                                    height={150} />
                            </AgentIcon>
                        ))
                    }
                </AgentsSelectorsWrapper>
                <AgentImage>
                    <Image 
                        src={agentImage}
                        width={550}
                        height={900}
                        alt='agent'
                        animation={animation}
                        onAnimationEnd={() => setAnimation(0)}
                    />
                </AgentImage>
                <AgentInfoWrapper>
                    <AgentName>{agentInfo.name}</AgentName>
                    <AgentFunction>{agentInfo.role}</AgentFunction>
                    <AgentStory>{agentInfo.story}</AgentStory>
                    <HorizontalLine />
                </AgentInfoWrapper>
            </Wrapper>
        </Container>
    )
}
