import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { useSettings } from "./settings";


export default function Options() {
  const s = useSettings();

  const [volume, setVolume] = useState(s.volume);
  const [vibration, setVibration] = useState(s.vibration);
  const [level, setLevel] = useState(s.level);

  const save = () => {
  s.setVolume(volume);

  if (vibration !== s.vibration) {
    s.toggleVibration();
  }

  s.setLevel(level);
  router.back();
};


  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Options</Text>

      <Ionicons name="volume-high" size={24} />
      <Slider value={volume} onValueChange={setVolume} />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Vibration</Text>
        <Switch value={vibration} onValueChange={setVibration} />
        <Ionicons name={vibration ? "phone-portrait" : "phone-portrait-outline"} size={20} />
      </View>

      <Picker selectedValue={level} onValueChange={setLevel}>
        <Picker.Item label="Facile (10x10)" value="easy" />
        <Picker.Item label="Moyen (20x20)" value="medium" />
        <Picker.Item label="Difficile (30x30)" value="hard" />
      </Picker>

      <Pressable onPress={save} style={{ backgroundColor: "green", padding: 15 }}>
        <Text style={{ color: "#fff", textAlign: "center" }}>Sauvegarder</Text>
      </Pressable>
    </View>
  );
}
