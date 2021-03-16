import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import style from "../content/style/style";

const Characters = ({ route }) => {
  const { characters } = route.params;
  

  const getStatus = (status) => {
    if (status === "Alive") {
      return style.textAlive;
    } else if (status === "Dead") {
      return style.textDead;
    }
    return style.textUnk;
  };

  return (
    <View style={style.container}>
      <FlatList
        style={style.list}
        data={characters}
        renderItem={({ item }) => {
          return (
            <View style={style.row}>
              <Image
                source={{ uri: item.image }}
                style={style.image}
                resizeMode="contain"
              />
              <View style={style.column}>
                <Text style={[style.textTitle, { fontWeight: "bold" }]}>
                  {item.name}
                </Text>
                <View style={style.statusContainer}>
                  <Text style={style.text}>
                    {" - "}
                    {item.species}
                  </Text>
                  <Text style={getStatus(item.status)}>{item.status}</Text>
                </View>

                <Text style={style.textUnk}>Last known location:</Text>
                <Text style={[style.text, { paddingBottom: 3 }]}>
                  {item.location.name}
                </Text>
                <Text style={style.textUnk}>First seen in:</Text>
                <Text style={style.text}>{item.origin.name}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(characters) => characters.id.toString()}
      />
    </View>
  );
};

export default Characters;
