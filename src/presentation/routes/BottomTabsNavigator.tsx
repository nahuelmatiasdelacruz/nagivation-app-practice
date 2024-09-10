import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent'
        }
      }}
    >
      <Tab.Screen name="Tab 1" options={{title: 'Tab1', tabBarIcon: ({color}) => (<Text style={{color: color}}>1</Text>)}} component={Tab1Screen} />
      <Tab.Screen name="Tab 2" options={{title: 'Tab2', tabBarIcon: ({color}) => (<Text style={{color: color}}>2</Text>)}} component={TopTabsNavigator} />
      <Tab.Screen name="Tab 3" options={{title: 'Tab3', tabBarIcon: ({color}) => (<Text style={{color: color}}>3</Text>)}} component={StackNavigator} />
    </Tab.Navigator>
  );
}