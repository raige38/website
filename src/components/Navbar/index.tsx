import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure, Button, useColorMode,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon, MoonIcon, SunIcon
} from '@chakra-ui/icons';
import logoBlack from './logoblack.png';
import logoWhite from './logowhite.png';
import {Link as RouterLink} from 'react-router-dom';


/**
 * Navigation bar for Desktop and mobile using chakra
 *
 * Navbar with Subnavigation
 */
export default function WithSubnavigation() {
    const {colorMode, toggleColorMode} = useColorMode()
    const {isOpen, onToggle} = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{base: 1, md: 'auto'}}
                    ml={{base: -2}}
                    display={{base: 'flex', md: 'none'}}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <a href="/">
                    {colorMode === 'light' ? <img src={logoBlack} alt="Logo" height={200} width={120}/> :
                        <img src={logoWhite} alt="Logo" height={200} width={120}/>}

                </a>
                <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}}>
                    <Flex display={{base: 'none', md: 'flex'}} ml={10} mt={10}>
                        <DesktopNav/>
                    </Flex>
                </Flex>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                </Button>


            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav/>
            </Collapse>
        </Box>
    );
}

/**
 * Navbar sized for desktop
 */
const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('red.400', 'red.400');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                as={RouterLink}
                                to={navItem.href ?? '#'}

                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

/**
 * Subnavbar sized for Desktop
 * @param label
 * @param href
 * @param subLabel
 * @constructor
 */
const DesktopSubNav = ({label, href, subLabel}: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            as={RouterLink}
            to={href ?? '#'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{bg: useColorModeValue('gray.50', 'gray.900')}}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{color: 'red.400'}}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'red.400'} w={5} h={5} as={ChevronRightIcon}/>
                </Flex>
            </Stack>
        </Link>
    );
};

/**
 * Mobile Navbar
 * @constructor
 */
const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{md: 'none'}}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};


/**
 * List of elements for the mobile versioned navbar
 * @param label
 * @param children
 * @param href
 * @constructor
 */
const MobileNavItem = ({label, children, href}: NavItem) => {
    const {isOpen, onToggle} = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={RouterLink} 
                to={href ?? '#'}

                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2}           
                             as={RouterLink} to={child.href ?? '#'}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

/**
 * Nav items
 */
const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Apps',
        children: [
            {
                label: 'Daily dose of facts',
                subLabel: 'Get some facts about cats for your daily dose',
                href: '/cat-facts',
            },
           
        ],
    },
    {
        label: 'Portfolio',
        href: '/portfolio',
    },
   
];
