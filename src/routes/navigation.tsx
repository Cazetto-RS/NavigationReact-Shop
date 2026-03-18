import { createStackNavigator } from "@react-navigation/stack"
import {Home} from "../screens/Home"
import {Details} from "../screens/Details"

const {Navigator, Screen} = createStackNavigator()

export function Navigation(){
    return (
        <Navigator id="mainNavigator" screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>
            <Screen name="details" component={Details}/>
        </Navigator>
    )
}