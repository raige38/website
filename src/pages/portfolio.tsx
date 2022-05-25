import React from "react";
import {Flex, Heading, Spacer, useColorMode, VStack, SimpleGrid,Box,Icon,Text, Container,Stack, GridItem,Tag} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {IconButton} from "@chakra-ui/button";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import {DiPython, DiFirefox, DiGit, DiReact, DiGitBranch, DiGithub, DiJava, DiAndroid, DiScrum} from "react-icons/di";



const Portfolio = () => {
    return(
        <div>
            <Container maxW={'7xl'}>
                <Stack
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
                                    Porfolio
                            </Text>
                        </Heading>
                        <Tabs orientation={'horizontal'} variant={'enclosed'}>
                        <TabList>
                            <Tab>Story</Tab>
                            <Tab>Experience</Tab>
                        </TabList>

                        <TabPanels>

                            <TabPanel>
                            
                            </TabPanel>
                            <TabPanel>
                                <SimpleGrid columns={3} spacing={10}>
                                    <Box>
                                    <Icon color="white" p="4" as={DiPython} w="24" h="24"/>
                                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                                        Python Backend development such as Django Rest.
                                    </Text>
                                    <Tag bg={'red.400'}>Over one year experience</Tag>

                                    </Box>
                                    <Box>
                                    <Icon color="white" p="4" as={DiReact} w="24" h="24"/>
                                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                                        React TypeScript Frontend development. 
                                    </Text> 
                                    <Tag bg={'red.400'}>One year experience</Tag>

                                    </Box>
                                    <Box>
                                    <Icon color="white" p="4" as={DiScrum} w="24" h="24"/>
                                    <Icon color="white" p="4" as={DiGitBranch} w="24" h="24"/>
                                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                                        Scrum + Git workflow.
                                    </Text> 
                                    <Tag bg={'red.400'}>Over one year experience</Tag>
                                    </Box>
                                    <Box>
                                    <Icon color="white" p="4" as={DiJava} w="24" h="24"/>
                                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                                        Java Object based.
                                    </Text> 
                                    <Tag bg={'red.400'}>One year experience.</Tag>
                                    </Box>
                                    <Box>
                                    <Icon color="white" p="4" as={DiScrum} w="24" h="24"/>
                                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                                        
                                    </Text> 
                                    <Tag bg={'red.400'}>One year experience.</Tag>
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