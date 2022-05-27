import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import {FaCoffee, FaGitlab, FaLinkedin,FaGithub} from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
                          children,
                          label,
                          href,
                      }: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            target='_blank'
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};


export default function SmallWithSocial() {
    return (
        <div  style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "green"
          }}
          >
            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>Copyright © 2022 - Developed by raige v1.4</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/regthihan-jeyasanthan-57a048209/'}>
                            <FaLinkedin />
                        </SocialButton>
                        <SocialButton label={'GitLab'} href={'https://gitlab.com/regthihan.jeyasanthan'}>
                            <FaGitlab />
                        </SocialButton>
                        <SocialButton label={'GitHub'} href={'https://github.com/raige38'}  >
                            <FaGithub />
                        </SocialButton> 
                    </Stack>
                </Container>
            </Box>
        </div>
        
    );
}
