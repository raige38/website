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


// Interface for the cat facts
interface IFact {
    fact: string;
    length: string;
}

/**
 * Cat Fact page
 * A page which gives you facts about cats using the catfact.ninja api.
 * @constructor
 */
const CatFact: React.FC = (): ReactElement => {
    const COUNTRY_URL = 'https://catfact.ninja/facts'
    const [facts, setFacts] = useState<IFact[]>([{fact: 'Hallo', length: '5'}]);

    /**
     * Uses this function when this page gets loaded
     */
    useEffect(() => {
        getFacts();
        console.log(facts);
    }, []);

    /**
     * gets facts about cats over the api and saves it in a react hook.
     */
    const getFacts = () => {
        let infos: IFact[] = [];
        axios.get(COUNTRY_URL).then((res: any) => {
            for (let item of res.data.data) {
                let factItem = {
                    fact: item.fact,
                    length: item.length
                };
                console.log(facts)
                infos.push(factItem);
            }
            setFacts(infos);
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
                                <Th isNumeric>Length</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Array.isArray(facts) ? facts.map((fact) => (
                                <Tr>
                                    <Td>{fact.fact}</Td>
                                    <Th isNumeric>{fact.fact.length}</Th>

                                </Tr>
                            )) : (
                                "No news found"
                            )}
                        </Tbody>
                    </Table>
                </Box>
                <Button
                    colorScheme="red"
                    bgGradient="linear(to-r, red.400, red.500, red.600)"
                    color="white"
                    onClick={() => window.location.reload()}
                    variant="solid">
                    Get new cat facts
                 </Button>
            </Stack>
        </Flex>


    )
}

export default CatFact;
