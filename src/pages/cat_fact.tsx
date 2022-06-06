import React, {ReactElement, useEffect, useState} from "react";
import {
    Box, Flex,
    Heading,
    Stack,
    Table,
    TableCaption,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    Button
} from "@chakra-ui/react";
import axios from "axios";
import { SpinnerIcon } from '@chakra-ui/icons'


// Interface for the cat facts
interface IFact {
    fact: string;
}

/**
 * Cat Fact page
 * A page which gives you facts about cats using the catfact.ninja api.
 * @constructor
 */
const CatFact: React.FC = (): ReactElement => {
    const COUNTRY_URL = 'https://catfact.ninja/fact'
    const [facts, setFacts] = useState<IFact[]| null>(null);

    /**
     * Uses this function when this page gets loaded
     */
    useEffect(() => {
        getFacts();
    }, []);

    /**
     * gets facts about cats over the api and saves it in a react hook.
     */
    const getFacts = () => {
        axios.get(COUNTRY_URL).then((res: any) => {
            let obs: IFact[] = [];
            obs.push(res.data.fact)
            setFacts(obs);
        }).catch((err)=>{
            console.error(err);
            
        })
    }

    /**
     * shows the cat facts with using chakra table
     */
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'auto'} align='stretch' py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'} color={'red.400'}>
                        Daily dose of cat facts. </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Table variant='simple'>
                        <TableCaption>Daily dose of cat facts.</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Fact</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Array.isArray(facts) ? facts.map((fact,index) => (
                                <Tr>
                                    <Td key={index}>{fact}</Td>
                                </Tr>
                            )) : (
                                "No facts found"
                            )}
                        </Tbody>
                    </Table>
                </Box>
                <Button onClick={()=>getFacts()}>Get more</Button>  
            </Stack>
        </Flex>
    )
}

export default CatFact;
