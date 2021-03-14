import React from "react";
import { View, Text, Button } from "react-native";
import style from "../content/style/style";

function Main({ navigation }) {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button
        title="Characters Page"
        onPress={() => navigation.navigate("Characters")}
      />
      <Button
        title="Location Page"
        onPress={() => navigation.navigate("Location")}
      />
    </View>
  );
}

export default Main;
