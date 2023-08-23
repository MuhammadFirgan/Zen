import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import { SafeAreaView } from 'react-native'
import Home from './src/views/pages/home'
import Detail from './src/views/pages/Detail'
import RightBar from './src/views/components/RightBar'
import LeftBar from './src/views/components/LeftBar'
import { COLORS } from './src/styles'

const Stack = createNativeStackNavigator()

export default function App() {
  const [ fontsLoaded ] = useFonts({
    DMBold: require('./src/assets/fonts/DMSans-SemiBold.ttf'),
    DMRegular: require('./src/assets/fonts/DMSans-Regular.ttf'),
    
  })
  
  if(!fontsLoaded) {
    return null
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              headerShadowVisible: false,
              headerStyle: { backgroundColor: COLORS.lightWhite },
              headerTitle: ''
            }}
          >
            <Stack.Screen name="Home" component={Home} options={{
                headerLeft: () => ( <LeftBar /> ),
                headerRight: () => ( <RightBar />)
              }}
            />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


