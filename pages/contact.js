import React from "react";
import styled from "styled-components/native";
import { ScrollView, View } from "react-native";
import { ListItem, Icon } from "react-native-material-ui";
const MockContact = [
  {
    primaryText: "appman 1",
  },
  {
    primaryText: "appman 2",
  },
  {
    primaryText: "appman 3",
  },
  {
    primaryText: "appman 4",
  },
  {
    primaryText: "appman 5",
  },
];
const RootContact = () => {
  return (
    <ScrollView>
      {MockContact.map((item) => {
        return (
          <WrapperItems key={item.primaryText}>
            <ListItem
              divider
              centerElement={{
                primaryText: item.primaryText,
              }}
              onPress={() => {}}
            />
            <CustomIcon name="phone" />
          </WrapperItems>
        );
      })}
    </ScrollView>
  );
};

export default RootContact;

const WrapperItems = styled.View``;

const CustomIcon = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;
