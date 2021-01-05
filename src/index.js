import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #000;
`;

const Input = styled.TextInput`
  font-size: 15px;
  border: 1px solid #000;
  height: 50px;
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
`;

const Salvar = styled.Button``;

const NameArea = styled.View`
  margin-top: 20px;
  padding: 20px;
  background-color: #ccc;
  width: 90%;
  align-items: center;
`;

const Home = () => {
  const [nome, setNome] = useState("");
  const [novoNome, setNovoNome] = useState("");

  const handleSave = async () => {
    if (novoNome != "") {
      await AsyncStorage.setItem("@nome", novoNome);
      setNome(novoNome);
      setNovoNome("");
    }
  };

  const getNome = async () => {
    const n = await AsyncStorage.getItem("@nome");
    setNome(n);
  };

  useEffect(() => {
    getNome();
  }, []);

  return (
    <Container>
      <Input
        placeholder="Qual seu nome ??"
        value={novoNome}
        onChangeText={(e) => setNovoNome(e)}
      />
      <Salvar title="Salvar" onPress={handleSave} />
      <NameArea>
        <Text>{nome}</Text>
      </NameArea>
    </Container>
  );
};

export default Home;
