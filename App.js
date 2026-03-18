import { NavigationContainer } from '@react-navigation/native';
import {Navigation} from "./src/routes/navigation"; 

export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}
