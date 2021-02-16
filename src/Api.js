// Exemplo de https://reactnative.dev/docs/network
// Aula Flavio https://drive.google.com/file/d/1vSB_DLWMgGeeRhme9QFgO0tIELyUOeUp/view

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const ExemploApiScreen1 = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/TrabalhoFinalBase/APIServlet')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
      //renderiza os dados na forma de lista
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.nome}, {item.email}</Text>
          )}
        />
      )}
    </View>
  );
};