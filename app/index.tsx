import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Menu() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1e1e1e", alignItems: "center", justifyContent: "center" }}>
      <Image source={require("../assets/images/bomb.png")} style={{ width: 120, height: 120 }} />
      <Text style={{ color: "#fff", fontSize: 32, marginBottom: 30 }}>DÉMINEUR</Text>

      <Pressable onPress={() => router.push("/game")} style={btn}>
        <Text style={txt}>Nouveau jeu</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/game")} style={btn}>
        <Text style={txt}>Continuer</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/options")} style={btn}>
        <Text style={txt}>Options</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/help")} style={btn}>
        <Text style={txt}>Aide</Text>
      </Pressable>
    </View>
  );
}

const btn = {
  backgroundColor: "#4CAF50",
  padding: 15,
  width: 220,
  borderRadius: 10,
  marginBottom: 10,
};

const txt = { color: "#fff", textAlign: "center", fontSize: 18 };
