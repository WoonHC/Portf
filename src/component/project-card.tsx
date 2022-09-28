import {
    Box,
    Heading,
    Badge,
    Center,
    Text,
    Tag,
    Stack,
    Button,
    Link,
    useColorModeValue,
    Wrap,
    Image,
    useDisclosure
  } from '@chakra-ui/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  
  import ProjectData from "../data/project-data.json";
  
  type ProjectList = {
      name: string;
      tags: string[];
      lang: string[];
      link: string;
      des: string;
      pic: string;
  }

  function checklink(link: string){
    if (link==""){
        return(
        <VerticallyCenter/>
        );
    }else{
        return(
        <Link href={link} isExternal style={{ textDecoration: 'none' }}>
            <Button aria-label="Link">
                Get
            </Button>
        </Link>
        );
    }
  }

  function VerticallyCenter() {
      const { isOpen, onOpen, onClose } = useDisclosure()
    
      return (
        <>
          <Button onClick={onOpen}>Details</Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Unable to disclose source code due to confidential agreement.
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }
  
  const CreateCard = ( {name, des, tags, lang, link, pic}: ProjectList ) => (
      <Center py={6}>
          <Box
              maxW={'400px'}
              w={'full'}
              bg={useColorModeValue('white', 'white')}
              boxShadow={'xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}
              transition= {"transform 0.3s ease-in-out"}
              _hover={{transform: 'scale(1.1, 1.1)'}}
              marginInline={'3'}>
              <Box
                  h={'210px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}>
                <Image
					minInlineSize={'100%'}
					height={'100%'}
					fit={'cover'}
					src={`/portfolio/asset/${pic}.png`}
					alt={name}
				/>
              </Box>
              <Stack>
                  <Wrap>
                      {lang.map((stack) => (
                          <Tag key={stack} colorScheme='blue'>
                              {stack}
                          </Tag>
                      ))}
                  </Wrap>
                  <Heading
                      color={useColorModeValue('black', 'white')}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      {name}
                  </Heading>
                  <Wrap>
                      {tags.map((tag) => (
                          <Badge key={tag} colorScheme='purple'>
                              {tag}
                          </Badge>
                      ))}
                  </Wrap>
                  <Text color={'black'} h={'70px'}>
                      {des}
                  </Text>
              </Stack>
              <Stack direction={'row-reverse'} marginTop={'5'}>
                  {checklink(link)}
              </Stack>
          </Box>
      </Center>
  );
  
  export default function Projects() {
    return (
          <Box>
              <Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} textAlign={'center'} marginY={'5'}>
                  Projects
              </Heading>
              <Box>
                  <Wrap justify={'center'}>
                      {Object.entries(ProjectData).map((Objects) => (
                          <CreateCard 
                              name={Objects[1].name}
                              des={Objects[1].des}
                              tags={Objects[1].tags}
                              lang={Objects[1].lang}
                              link={Objects[1].link}
                              pic={Objects[1].pic}
                              key={Objects[0]}/>
                          ))}
                  </Wrap>
              </Box>
          </Box>
    );
  }