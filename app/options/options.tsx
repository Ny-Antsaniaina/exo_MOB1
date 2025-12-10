import React, { useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { useSettings } from "../store/settings";

export default function Options({ navigation }: any) {
  const settings = useSettings();

  
  const [volume, setVolume] = useState(settings.volume);
  const [vibration, setVibration] = useState(settings.vibrationEnabled);
  const [level, setLevel] = useState(settings.level);

  const saveOptions = () => {
    settings.setVolume(volume);
    if (vibration !== settings.vibrationEnabled) settings.toggleVibration();
    settings.setLevel(level);

    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ color: "#fff", fontSize: 24, marginBottom: 20 }}>Options</Text>

     
      <Text style={{ color: "#fff" }}>Volume</Text>
      <Slider
        value={volume}
        onValueChange={setVolume}
        minimumValue={0}
        maximumValue={1}
      />

     
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
        <Text style={{ color: "#fff", marginRight: 10 }}>Vibration</Text>
        <Switch value={vibration} onValueChange={setVibration} />
      </View>

    
      <Text style={{ color: "#fff" }}>Niveau :</Text>
      <Picker selectedValue={level} onValueChange={(v) => setLevel(v)}>
        <Picker.Item label="Facile (10x10 - 20 bombes)" value="easy" />
        <Picker.Item label="Moyen (20x20 - 40 bombes)" value="medium" />
        <Picker.Item label="Difficile (30x30 - 60 bombes)" value="hard" />
      </Picker>

      
      <Pressable
        style={{
          marginTop: 20,
          backgroundColor: "green",
          padding: 15,
          borderRadius: 10,
        }}
        onPress={saveOptions}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Sauvegarder</Text>
      </Pressable>
    </View>
  );
}
