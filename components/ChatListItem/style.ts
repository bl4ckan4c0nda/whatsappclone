import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  senderContainer: {
    justifyContent: "space-around",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: "gray",
  },
  time: {
    fontSize: 16,
    color: "gray",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
});

export default styles;
