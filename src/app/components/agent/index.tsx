import React, { useCallback } from 'react'
import Image from 'next/image'
import { agentsList } from './agents'
import { Container, Wrapper, AgentsSelectorsWrapper, AgentIcon, AgentImage, AgentInfoWrapper, AgentName, AgentFunction, AgentStory, HorizontalLine } from './style'

interface Agent {
    id: number;
    name: string;
    role: string;
    story: string;
    icon: string;
    image: string;
}

export default function Agent() {
    const [agentInfo, setAgentInfo] = React.useState(agentsList[0])
    const [agentImage, setAgentImage] = React.useState<string>(agentsList[0].image)
    const [animation, setAnimation] = React.useState<number>(0)

    const setAgent = useCallback((agent: Agent) => {
        setAgentInfo(agent)
        setAgentImage(agent.image)
        setAnimation(1)
    }, []);

    
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
                    <div id='imgwrapper' data-animation={animation} onAnimationEnd={() => setAnimation(0)}>
                        <Image 
                            src={agentImage}
                            width={550}
                            height={900}
                            alt='agent'
                        />
                    </div>
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
