import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from "./menu/menu";
import Game from './play/game';
export  function App() {
  const Stack =  createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Game" component={Game}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
