import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  IconButton,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Tooltip
} from '@chakra-ui/react';
import { FaGithub, FaRegFileAlt, FaLinkedinIn } from 'react-icons/fa';


export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Box
        borderTopWidth={1}
        borderBottomWidth={0}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container as={Stack} centerContent>
						<Stack direction={'row'} spacing={15}>
              <Tooltip label='LinkedIn'>
                <Link href={'https://www.linkedin.com/in/huai-chang-woon-165889249/'} style={{ textDecoration: 'none' }}>
                  <IconButton aria-label='LinkedIn' isRound icon={<FaLinkedinIn />}/>
                </Link>
              </Tooltip>
              <Tooltip label='Resume'>
                <Link href={"/portfolio/asset/resume.pdf"} style={{ textDecoration: 'none' }} target = "_blank">
                  <IconButton aria-label='Resume' isRound icon={<FaRegFileAlt />}/>
                </Link>
              </Tooltip>
              <Tooltip label='GitHub'>
                <Link href={'https://github.com/WoonHC'} style={{ textDecoration: 'none' }}>
                  <IconButton aria-label='GitHub' isRound icon={<FaGithub />}/>
                </Link>
              </Tooltip>
						</Stack>
            <Text pt={0} fontSize={'md'} textAlign={'center'}>
            Made by Woon Huai Chang
            <br></br>
            Contact: +6011-51204562
          </Text>
					</Container>
      </Box>
    </Box>
  );
}