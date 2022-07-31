import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  VStack,
  Text,
  Image,
  Switch,
  useColorMode
} from "native-base";

import { MaterialIcons } from '@expo/vector-icons';

export function SignIn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Center
        height={"full"}
        _dark={{ bg: "gray.900" }}
        _light={{ bg: "white" }}
      >
        <Image
          alt={"Imagem logo"}
          size={150}
          source={{ uri: 'https://github.com/nomar113.png' }}
          borderRadius={100}
          resizeMode={"contain"}
        />
        <VStack width={"full"} p={10}>
          <Box width={"full"}>
            <Heading
              _dark={{ color: "white" }}
              _light={{ color: "coolGray.700" }}
            >
              Entrar
            </Heading>

            <VStack width={"full"}>
              <FormControl isRequired>
                <FormControl.Label>E-mail</FormControl.Label>
                <Input
                  placeholder={"seu@email.com"}
                  mt={3}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name={"person"} />}
                      size={5}
                      ml={2}
                      color={"muted.400"}
                    />
                  }
                />
              </FormControl>
              <FormControl isRequired>
                <FormControl.Label>Senha</FormControl.Label>
                <Input
                  placeholder={"seu@email.com"}
                  mt={3}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name={"lock"} />}
                      size={5}
                      ml={2}
                      color={"muted.400"}
                    />
                  }
                />
              </FormControl>

              <Button
                mt={"7"}
                colorScheme={"cyan"}
              >
                Entrar
              </Button>
            </VStack>
          </Box>

          <HStack mt={5}>
            <Checkbox value={"agree"}>
              <Text ml={3}>
                Concordo com a política de segurança
              </Text>
            </Checkbox>
          </HStack>

          <Center>
            <HStack alignItems={"center"}>
              <Text>Dark</Text>
              <Switch
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                aria-label={
                  colorMode === "light" ? "troque para o tema escuro" : "troque para o tema claro"
                }
              />
              <Text>Light</Text>
            </HStack>
          </Center>

        </VStack>
      </Center>
    </Box>
  )
};
