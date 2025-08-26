import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen 
                    name="index"
                    options={{
                        title: 'Remindly'
                    }}
                />
                <Stack.Screen 
                    name="onboarding/index"
                    options={{
                        title: 'Hoş Geldiniz'
                    }}
                />
                <Stack.Screen 
                    name="home/index"
                    options={{
                        title: 'Ana Sayfa'
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    );
}
