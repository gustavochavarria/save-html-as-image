import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
} from '@chakra-ui/react';
import { saveAs } from 'file-saver';

import { FaAddressBook, FaAirbnb, FaAlgolia } from 'react-icons/fa';

import { saveAsJpeg, saveAsPng } from 'save-html-as-image';

import Pie from './components/Pie';

const data = [
  {
    id: 'make',
    label: 'make',
    value: 124,
    color: 'hsl(285, 70%, 50%)',
  },
  {
    id: 'python',
    label: 'python',
    value: 433,
    color: 'hsl(29, 70%, 50%)',
  },
  {
    id: 'php',
    label: 'php',
    value: 444,
    color: 'hsl(151, 70%, 50%)',
  },
  {
    id: 'hack',
    label: 'hack',
    value: 489,
    color: 'hsl(264, 70%, 50%)',
  },
  {
    id: 'haskell',
    label: 'haskell',
    value: 571,
    color: 'hsl(347, 70%, 50%)',
  },
];

function App() {
  const handleDownloadAsImage = (method) => {
    const element = document.getElementById('download-area');

    if (method === 'png') {
      saveAsPng(element, {}, { backgroundColor: 'white' });
      return;
    }

    saveAsJpeg(element, {}, { backgroundColor: 'white' });
  };

  return (
    <Box bg="white">
      <Flex gap="8px" justifyContent="center" my="10px">
        <Button onClick={() => handleDownloadAsImage('jpg')}>
          Download document as JPG
        </Button>
        <Button onClick={() => handleDownloadAsImage('png')}>
          Download document as PNG
        </Button>
      </Flex>

      <Box id="download-area" textAlign="center">
        <Heading>Charts</Heading>

        <Flex width="100%" gap="8px" justifyContent="center">
          <Box width="600px" height="400px">
            <Pie data={data} />
          </Box>

          <Box width="600px" height="400px">
            <Pie data={data} />
          </Box>
        </Flex>

        <Heading my="16px">Fontawesome Icons</Heading>
        <Box mx="auto" width="500px">
          <Grid
            gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
            justifyContent="space-between"
            gap="8px"
          >
            <Icon
              as={FaAddressBook}
              color="white"
              bg="blue.700"
              rounded="lg"
              width="100px"
              height="100px"
              padding="10px"
            />

            <Icon
              as={FaAirbnb}
              color="white"
              bg="blue.700"
              rounded="lg"
              width="100px"
              height="100px"
              padding="10px"
            />

            <Icon
              as={FaAlgolia}
              color="white"
              bg="blue.700"
              rounded="lg"
              width="100px"
              height="100px"
              padding="10px"
            />

            <Icon
              as={FaAlgolia}
              color="white"
              bg="blue.700"
              rounded="lg"
              width="100px"
              height="100px"
              padding="10px"
            />
          </Grid>
        </Box>

        <Heading my="16px">Image</Heading>
        <Box mx="auto" width="500px">
          <Image src="leon-nicaragua.jpg" my="16px" rounded="lg" />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
