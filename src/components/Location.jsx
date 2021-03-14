import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, Pressable, Text, View } from "react-native";
import style from "../content/style/style";
import { API_URL } from "../constants";

const Location = ({ navigation }) => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/location`)
      .then((res) => setLocation((res.data && res.data.results) || []))
      .catch((error) => console.error(error));
  }, []);

  const getResidents = (location) => {
    const characterIds = location.residents.map((r) => {
      const resident = r.split("/");
      return resident[resident.length - 1];
    });
    const requestUrl = `${API_URL}/character/${characterIds.join(",")}`;
    axios
      .get(requestUrl)
      .then(({ data } = response) => {
        navigation.navigate("Characters", {
          characters: location.residents.length === 1 ? Array.of(data) : data,
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={style.container}>
      <FlatList
        style={style.list}
        data={location}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => getResidents(item)}>
              <View style={style.locationContent} onTo>
                <View style={style.locationContainer}>
                  <Text style={style.textTitle}>Location Name: </Text>
                  <Text style={[style.text, { paddingBottom: 5 }]}>
                    {item.name}
                  </Text>
                  <Text style={style.textTitle}>Dimension Name: </Text>
                  <Text style={style.text}>{item.dimension}</Text>
                </View>
                <View style={style.locationContainer}>
                  <Text style={style.textTitle}>Location Type: </Text>
                  <Text style={[style.text, { paddingBottom: 5 }]}>
                    {item.type}
                  </Text>
                  <Text style={style.textTitle}>Residents Count: </Text>
                  <Text style={style.text}>{item.residents.length}</Text>
                </View>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(location) => location.id.toString()}
      />
    </View>
  );
};

export default Location;
