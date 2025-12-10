import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./menuStyles";

type Props = {
  navigation: any;
};

export const Menu = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/bomb.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>DÉMINEUR</Text>
      </View>

      <View style={styles.buttonContainer}>
        
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Game")}
        >
          <Text style={styles.buttonText}>Nouveau Jeu</Text>
        </Pressable>

        
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Game")}
        >
          <Text style={styles.buttonText}>Continuer le Jeu</Text>
        </Pressable>

        
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Options")}
        >
          <Text style={styles.buttonText}>Options</Text>
        </Pressable>

        
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Help")}
        >
          <Text style={styles.buttonText}>Aide</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Menu;
