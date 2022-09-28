import * as React from "react"
import { extendTheme } from '@chakra-ui/react'
import Footer from "./component/footer"

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import AboutMe from "./component/aboutme";
import Projects from "./component/project-card";

export const App = () => (
  <ChakraProvider theme={theme}>
    <header>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </header>
  </ChakraProvider>
);
