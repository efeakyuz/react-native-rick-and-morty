import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f2228",
    flexWrap: "wrap",
  },
  list: {
    flex: 1,
    width: "100%",
    height: 220,
    marginTop: 10,
  },
  image: {
    width: 170,
    height: 170,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: "auto",
    marginTop: "auto",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    margin: 8,
    backgroundColor: "#3c3e43",
    borderWidth: 0,
    borderRadius: 10,
    borderColor: "#808080",
    elevation: 10,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10,
  },
  locationContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    margin: 10,
  },
  locationContent: {
    flex: 1,
    flexDirection: "row",
    margin: 8,
    backgroundColor: "#3c3e43",
    borderWidth: 0,
    borderRadius: 10,
    borderColor: "#808080",
    elevation: 10,
    overflow: "hidden",
  },
  statusContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    marginBottom: 5,
  },
  textTitle: {
    fontSize: 20,
    color: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  textUnk: {
    fontSize: 18,
    color: "grey",
  },
  textAlive: {
    fontSize: 18,
    color: "green",
  },
  textDead: {
    fontSize: 18,
    color: "red",
  },
});
