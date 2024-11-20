import React from 'react';
import styled from 'styled-components/native';
import { FlatList, Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const SettingItem = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const settingsData = [
  { id: '1', name: 'Setting 1' },
  { id: '2', name: 'Setting 2' },
  { id: '3', name: 'Setting 3' },
];

const SettingsScreen = () => {
  return (
    <Container>
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SettingItem>
            <Text>{item.name}</Text>
          </SettingItem>
        )}
      />
    </Container>
  );
};

export default SettingsScreen;
