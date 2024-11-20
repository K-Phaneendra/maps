import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput, FlatList, Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const SearchBox = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const TableItem = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <Container>
      <SearchBox
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={data.filter(item => item.includes(searchText))}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TableItem>
            <Text>{item}</Text>
          </TableItem>
        )}
      />
    </Container>
  );
};

export default HomeScreen;
