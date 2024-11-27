import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';

const Stacks = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
const ExpensrOverview = () => {
  return <Bottom.Navigator>
    <Bottom.Screen name="ExpressOverView" component={AllExpenses}></Bottom.Screen>

    <Bottom.Screen name="RecentExpress" component={RecentExpenses}></Bottom.Screen>

  </Bottom.Navigator>
}
export default function App() {
  return (
    <>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <Stacks.Navigator>
          <Stacks.Screen name="AllExpress" component={ExpensrOverview}></Stacks.Screen>
          <Stacks.Screen name="ManageExpress" component={ManageExpense}></Stacks.Screen>

        </Stacks.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
