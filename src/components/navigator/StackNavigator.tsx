import { createStackNavigator } from '@react-navigation/stack';
import Pantalla1Screens from './screens/Pantalla1Screens';
import Pantalla2Screens from './screens/Pantalla2Screens';
import Pantalla3Screens from './screens/Pantalla3Screens';
import Pantalla4Screens from './screens/Pantalla4Screens';
import Pantalla5Screens from './screens/Pantalla5Screens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Principal" component={Pantalla1Screens} />
      <Stack.Screen name="imagen 1" component={Pantalla2Screens} />
      <Stack.Screen name="imagen 2" component={Pantalla3Screens} />
      <Stack.Screen name=">=" component={Pantalla4Screens} />
      <Stack.Screen name="<=" component={Pantalla5Screens} />
    </Stack.Navigator>
  );
}