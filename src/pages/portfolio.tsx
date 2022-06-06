import React, {ReactElement, useEffect, useState} from "react";
import {Heading, SimpleGrid,Box,Icon,Text, Container,Stack,Tag} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {FaGamepad, FaDumbbell, FaCode, FaUtensils} from "react-icons/fa";
import {DiPython, DiReact, DiGitBranch, DiScrum} from "react-icons/di";



const Portfolio: React.FC = (): ReactElement => {
    const [columnSize,setColumnSize] = useState<number>(3);



    useEffect(() => {
        console.log("tes");
        
        if (window.innerWidth <= 600){
            console.log("set");
            setColumnSize(1);
        }else{
            setColumnSize(3);
        }
    });


    return(
        <div>
            <Container maxW={'7xl'}>
                <Stack
                    minH={'100vh'}
                    py={{base: 20, md: 28}}
                    direction= {{base: 'column', md: 'row'}}>
                    <Stack flex={1} spacing={{base: 5, md: 10}}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{base: '3xl', sm: '4xl', lg: '6xl'}}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: '30%',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'red.400',
                                    zIndex: -1,
                                }}>
                                    Portfolio
                            </Text>
                        </Heading>
                        <Tabs orientation={'horizontal'} variant={'enclosed'}>
                        <TabList>
                            <Tab>About me</Tab>
                            <Tab>Experience</Tab>
                        </TabList>

                        <TabPanels>

                            <TabPanel>
                            <SimpleGrid columns={3} spacing={10}>
                                    <Box>
                                    <Icon p="4" as={FaCode} w="24" h="24"/>
                                        <Text p="4" fontSize="xl" fontWeight="semibold">
                                            Since i had my first laptop i have an obsession with coding. 
                                            
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Icon p="4" as={FaDumbbell} w="24" h="24"/>
                                        <Text p="4" fontSize="xl" fontWeight="semibold">
                                            Because of my job i do a lot of sports in my free time. 
                                            </Text> 
                                    </Box>
                                    <Box>
                                        <Icon p="4" as={FaUtensils} w="24" h="24"/>
                                        <Text p="4" fontSize="m" fontWeight="semibold">
                                           Next to sport i also love to cook. 
                                           Making healthy food by your own is the best feeling ever.
                                        </Text> 
                                    </Box>
                                </SimpleGrid>
                                
                            
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid columns={columnSize} spacing={10}>
                                    <Box>
                                        <Icon p="4" as={DiPython} w="24" h="24"/>
                                        <Text p="4" fontSize="xl" fontWeight="semibold">
                                            Python Backend development such as Django Rest.
                                        </Text>
                                        <Tag bg={'red.400'}>Over one year experience</Tag>
                                    </Box>
                                    <Box>
                                        <Icon p="4" as={DiReact} w="24" h="24"/>
                                        <Text p="4" fontSize="xl" fontWeight="semibold">
                                            React TypeScript Frontend development
                                        </Text> 
                                        <Tag bg={'red.400'}>One year experience</Tag>
                                    </Box>
                                    <Box>
                                        <Icon p="4" as={DiScrum} w="24" h="24"/>
                                        <Text p="4" fontSize="xl" fontWeight="semibold">
                                            Scrum project management method
                                        </Text> 
                                        <Tag bg={'red.400'}>Over one year experience</Tag>
                                    </Box>

                                    <Box>
                                        <Icon p="4" as={DiGitBranch} w="24" h="24"/>
                                        <Text p="4" fontSize="xl" fontWeight="semibold">
                                           Git versioning on Gitlab and Github
                                        </Text> 
                                        <Tag bg={'red.400'}>Over one year experience</Tag>
                                    </Box>

                                    <Box>
                                        <Icon p="4" as={FaGamepad} w="24" h="24"/>
                                        <Text p="4" fontSize="xl" fontWeight="semibold">
                                            Game development using Godot Engine
                                        </Text> 
                                        <Tag bg={'red.400'}>Two games developed</Tag>
                                    </Box>
                                </SimpleGrid>
                            </TabPanel>
                        </TabPanels>
                        </Tabs>
                    </Stack>
                </Stack>
            </Container>
        </div>

    )
}

export default Portfolio;