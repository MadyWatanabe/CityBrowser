import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, 
         TouchableOpacity, Linking, Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Button from './Button';
import * as WebBrowser from 'expo-web-browser';

// Use the following code in cmd to delay the SplashScreen: npx expo install expo-splash-screen
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

    

function HomeScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/art.png')} />
      
      <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync("https://www.artic.edu/")}>
          More Information
        </Button>
      </View>
  );
}

function Magnicent({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/mile.png')} />

      <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync("https://www.themagnificentmile.com/")}>
      More Information
        </Button>
    </View>
  );
}

function NavyPier({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/pier.png')} />

      <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync("https://navypier.org/")}>
      More Information
        </Button>
    </View>
  );
}

function WaterTower({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/water.png')} />

      <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync("https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html")}>
      More Information
        </Button>
    </View>
  );
}

function WillisTower({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}source={require('./assets/willis.png')} />

      <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync("https://www.willistower.com/")}>
      More Information
        </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
    return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home">
         {/* The options will show the text component at the top of the screen */}
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Art Institute of Chicago' }} />
        <Drawer.Screen name="Magnificent Mile" component={Magnicent}  options={{ title: 'Magnificent Mile' }} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} options={{ title: 'Navy Pier' }} />
        <Drawer.Screen name="Water Tower" component={WaterTower} options={{ title: 'Water Tower' }} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} options={{ title: 'Willis Tower' }} />
      </Drawer.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 360,
    width: 240,
    marginBottom: 20,
  }
});
export default App;
