import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (
    <SafeAreaView className="bg-[#FAFAFD] h-full">
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
      <LoginScreen />
    </SafeAreaView>
  );
}
