import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import thumbCards from '../public/images/links/cards.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Toronto, Ontario!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Taylor-James
          </Heading>
          {/* <p>Digital Craftsman ( Artist / Developer / Designer )</p> */}
          <p>Junior Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          {/* Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/inkdrop" scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . */}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Languages</BioYear>
          HTML, CSS, Javascript, Java, Dart, Python, C
        </BioSection>
        <BioSection>
          <BioYear>Front End Frameworks</BioYear>
          ReactJS, Vue
        </BioSection>
        <BioSection>
          <BioYear>Backend and DB</BioYear>
          Express, PostgreSQL, NodeJS
        </BioSection>
        <BioSection>
          <BioYear>Tools</BioYear>
          Git, Github, Visual Studio
        </BioSection>
        </Section>
        {/* <BioSection>
          <BioYear>2012 to present</BioYear>
          Works as a freelance
        </BioSection> 
        */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        I am a Person with {' '}
        <Link href="https://twitter.com/hashtag/audhd">#AuDHD</Link>,
      passionate about creating a world that is more accessible for people with
      cognitive and mental disabilities. My coding journey started with editing
      tumblr blogs when I was in high school. I studied computer science at the
      University of Toronto. After my 3rd year I went on leave to focus on life
      outside of academics. In that time, I began creating more art, aquired a
      diploma in web developemnt at{' '}
      <Link href="https://www.lighthouselabs.ca/">Lighthouse Labs</Link> and started
      my career as a tech developer. My favourite frameworks right now is React
      and Express. and I'm having a lot of fun learning new languages such as
      Vue and TypeScript.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Photography📸, Nature🍃,  Fighting Games🕹, {' '}
          <Link href="https://www.instagram.com/soulofeclipse/" target="_blank">
          Divination🔮
          </Link>
          , Art🎨, Poetry📝
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mbtj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Mbtj
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/mbtj_dev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @Mbtj_dev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/TJTaylor-James/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                /in/TJTaylor-James
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.instagram.com/soulofeclipse/"
            title="Eclipse Tarot"
            thumbnail={thumbCards}
          >
            My Tarot Instagram
          </GridItem>
          {/* <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem> */}
        </SimpleGrid>

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
