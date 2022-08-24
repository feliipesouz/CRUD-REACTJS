import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [name, setName] = React.useState(dataEdit.name || "");
  const [email, setEmail] = React.useState(dataEdit.email || "");

  const handleSave = () => {
    if (!name || !email) return;

    if (emailAlreadyExists()) {
      return alert("E-mail já cadastrado!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { nome, email };
    }
  };

  const newDataArray = !Object.keys(setData)
    ? [...(data ? data : []), { nome, email }]
    : [...(data ? data : [])];

  localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

  setData(newDataArray);

  onClose();

  const emailAlreadyExists = () => {
    if (dataEdit.email !== email && data?.length) {
      return data.find((item) => item.email === email);
    }
    return false;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display={"flex"} flexDir={"column"} gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type={"text"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justfyContent={"start"}>
            <Button colorScheme={"green"} mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme={"red"} onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
