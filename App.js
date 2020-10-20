import React from "react";
import styled from "styled-components/native";
import AppBar from "./component/AppBar";
import { StatusBar, ScrollView } from "react-native";
import ToolBar from "./component/ToolBar";
import User from "./component/User";
import Story from "./component/Story";
import Feeds from "./component/Feeds";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFF" barStyle="dark-content" />
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <User />
          <Story />
          <Feeds />
        </ScrollView>
      </Container>
    </>
  );
};

export default App;

const Container = styled.SafeAreaView`
  flex: 1;
`;
