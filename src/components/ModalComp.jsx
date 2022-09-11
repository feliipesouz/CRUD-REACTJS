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
    //Verifico se tem alguma informação no name ou no email
    if (!name || !email) return;

    if (emailAlreadyExists()) {
      //Chamo a função e verifico se o email que eu to cadastrando ou editando já existe
      return alert("E-mail já cadastrado!");
    }

    if (Object.keys(dataEdit).length) {
      //Aqui verifico se o que eu estou fazendo é uma edição
      data[dataEdit.index] = { nome, email };
    }
  };

  const newDataArray = !Object.keys(setData) //Verifico se não é uma edição (Pego os items que eu tenho cadastrado + o name e o email que eu acabei de inserir, se não eu só passo o data que eu modifiquei, e irá ficar om o objeto editado)
    ? [...(data ? data : []), { nome, email }]
    : [...(data ? data : [])];

  localStorage.setItem("cad_cliente", JSON.stringify(newDataArray)); //Aqui seto na localStorage 

  setData(newDataArray);

  onClose(); //Depois que eu salvar eu fecho o modal

  const emailAlreadyExists = () => {
    //Função que faz a verificação da existencia do email que eu to inserindo (criação ou edição)
    if (dataEdit.email !== email && data?.length) {
      //Desde que eu não esteja editando o próprio email.
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
