import { View , Image , Text, Pressable} from "react-native"

export const Menu = () => {
    return (
        <View>
            <View>
                <Image source={require('../../assets/images/bomb.png')}/>
                <Text>GTA 6 </Text>
            </View>
            <View>
                <Pressable>
                    <Text>New Game</Text>
                </Pressable>
                <Pressable>
                    <Text>Load Game</Text>
                </Pressable>
                <Pressable>
                    <Text>Settings</Text>
                </Pressable>
                <Pressable>
                    <Text>Exit</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Menu