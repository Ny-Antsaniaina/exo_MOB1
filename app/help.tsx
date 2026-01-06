import { Text, View } from "react-native";

export default function Help() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28 }}>Aide</Text>
      <Text style={{ marginTop: 20, fontSize: 16 }}>
        - Le but du jeu est d’éviter les bombes.
        {"\n"}- Appuyez sur une case pour la révéler.
        {"\n"}- Un chiffre indique combien de bombes sont autour.
        {"\n"}- Si vous appuyez sur une bombe → vous perdez.
      </Text>
    </View>
  );
}
