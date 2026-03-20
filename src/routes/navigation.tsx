import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Lojas } from "../screens/Lojas";
import { Restaurantes } from "../screens/Restaurantes";
import { Cinema } from "../screens/Cinema";
import { Promocoes } from "../screens/Promocoes";
import { Mapa } from "../screens/Mapa";

const { Navigator, Screen } = createStackNavigator();

export function Navigation() {
  return (
    <Navigator id="mainNavigator" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="lojas" component={Lojas} />
      <Screen name="restaurantes" component={Restaurantes} />
      <Screen name="cinema" component={Cinema} />
      <Screen name="promocoes" component={Promocoes} />
      <Screen name="mapa" component={Mapa} />
    </Navigator>
  );
}
