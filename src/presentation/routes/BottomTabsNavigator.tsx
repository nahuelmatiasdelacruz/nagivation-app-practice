import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
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
      <Tab.Screen 
        name="Tab 1"
        options={{title: 'Tab1',tabBarIcon: ({color}) => (<IonIcon name='accessibility-outline' color={globalColors.primary}/>)}} 
        component={Tab1Screen} />
      <Tab.Screen 
        name="Tab 2"
        options={{title: 'Tab2', tabBarIcon: ({color}) => (<IonIcon name='airplane-outline' color={globalColors.primary}/>)}} 
        component={TopTabsNavigator} />
      <Tab.Screen 
        name="Tab 3"
        options={{title: 'Tab3', tabBarIcon: ({color}) => (<IonIcon name='bar-chart-outline' color={globalColors.primary}/>)}} 
        component={StackNavigator} />
    </Tab.Navigator>
  );
}