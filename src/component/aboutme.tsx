import {
	Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={15} w={'full'} maxW={'lg'}>
					<Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                bg: 'purple.200',
                zIndex: -1,
                width: 'full',
                height: useBreakpointValue({ base: '15%', md: '15%' }),
                position: 'absolute',
                bottom: 0,
                left: 0
              }}>
              About
            </Text>
          </Heading>
          <Text as={'span'} color={'grey'} fontSize={{base:'md',lg:'lg'}}>
						I'm Woon Huai Chang
					</Text>
					<Text color={'purple.400'} as={'span'}>
						Web Developer / Programmer / Cybersecurity
					</Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
					Self-motivated fresh graduate looking for hands-on experience in the real working environment and situations in the IT field. Proficient in a range of modern technologies including Java and PHP.
          </Text>
					<Box>
            <Link href={"/portfolio/asset/resume.pdf"} style={{ textDecoration: 'none' }} target = "_blank">
              <Button
                verticalAlign={'true'}
                colorScheme={'purple'}
                _hover={{
                  bg: 'purple.800',
                }}>
                Get Resume
              </Button>
            </Link>
					</Box>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image
          src={
            'https://wallpaperaccess.com/full/1639654.jpg'//IT related pic
          }
          alt={'Cover page'}
          objectFit={'cover'}
        />
      </Flex>
    </Stack>
  );
}