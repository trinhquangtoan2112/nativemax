import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import { GlobalStyle } from "./constant/color";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Icon from "./UI/Icon";

const Stacks = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();
const ExpensrOverview = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyle.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyle.colors.primary500 },
        tabBarActiveTintColor: GlobalStyle.colors.accent500,
        headerRight: ({ tintColor }) => (
          <Icon
            name="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpress");
            }}
          ></Icon>
        ),
      })}
    >
      <Bottom.Screen
        name="ExpressOverView"
        component={AllExpenses}
        options={{
          title: "Express OverView",
          tabBarLabel: "Overview",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="calendar" size={size} color={color} />;
          },
        }}
      ></Bottom.Screen>

      <Bottom.Screen
        name="RecentExpress"
        component={RecentExpenses}
        options={{
          title: "Recent Express",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" size={size} color={color} />;
          },
        }}
      ></Bottom.Screen>
    </Bottom.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <Stacks.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyle.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stacks.Screen
            name="AllExpress"
            component={ExpensrOverview}
            options={{ headerShown: false }}
          ></Stacks.Screen>
          <Stacks.Screen
            name="ManageExpress"
            component={ManageExpense}
            options={{ title: "Manage Express", presentation: "modal" }}
          ></Stacks.Screen>
        </Stacks.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
