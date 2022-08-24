import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  UseDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/icons";
import ModalComp from "./components/ModalComp";

const App = () => {
  const { isOpen, onOpen, onClose } = UseDisclosure();
  const [data, setData] = React.useState([]);
  const [dataEdit, setDataEdit] = React.useState([]);

  return (
    <Flex 
      h='100vh'
      align='center'
      justify='center'
      fontSize='20px'
      fontFamily='poppins'
    >
      <Box maxW={800} w='100%' h='100vh' py={10} px={2}>
        <Button colorScheme='blue' onClick={() => [setDataEdit({}), onOpen()]}>
          NOVO CADASTRO
        </Button>
      </Box>
    </Flex>
  );
};

export default App;
