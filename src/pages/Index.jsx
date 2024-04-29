import { Box, VStack, Heading, Text, Image, SimpleGrid } from '@chakra-ui/react';
import { FaMedal, FaPortrait } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10} p={5}>
      <Heading as="h1" size="2xl" textAlign="center">Martin Van Buren</Heading>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="xl" my={2}><FaPortrait /> Biography</Heading>
        <Text fontSize="md">
          Martin Van Buren was the eighth President of the United States from 1837 to 1841. He was the first president born after the independence of the United States from the British Empire.
        </Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="xl" my={2}><FaMedal /> Achievements</Heading>
        <Text fontSize="md">
          Van Buren was a key organizer of the Democratic Party and a dominant figure in the Second Party System. He established the Independent Treasury system and advocated for the "hard-money" policies.
        </Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="xl" my={2}>Gallery</Heading>
        <SimpleGrid columns={2} spacing={5}>
          <Image src="https://example.com/image1.jpg" alt="Martin Van Buren Portrait" boxSize="300px" />
          <Image src="https://example.com/image2.jpg" alt="Historical Document" boxSize="300px" />
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Index;