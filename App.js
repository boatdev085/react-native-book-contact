import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { BottomNavigation } from "react-native-material-ui";
import styled from "styled-components/native";
import RootRouter from "./Router";
import { Actions } from "react-native-router-flux";

export default function App() {
  const handleSetMenu = (menu, action) => {
    action();
  };
  return (
    <View style={styles.container}>
      <RootRouter />
      <SafeAreaView>
        <CustomBottomMenu active={Actions.currentScene} hidden={false}>
          <BottomNavigation.Action
            key="calendar"
            icon="today"
            label="calendar"
            onPress={() => handleSetMenu("calendar", Actions.calendar)}
          />
          <BottomNavigation.Action
            key="contact"
            icon="contacts"
            label="contact"
            onPress={() => handleSetMenu("contact", Actions.contact)}
          />
          <BottomNavigation.Action
            key="orgChart"
            icon="people"
            label="org-chart"
            onPress={() => handleSetMenu("org-chart", Actions.orgChart)}
          />
        </CustomBottomMenu>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CustomBottomMenu = styled(BottomNavigation)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
