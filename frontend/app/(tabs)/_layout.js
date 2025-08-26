import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#d01f1fff',
                tabBarInactiveTintColor: '#252a2bff',
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: '#E5E5EA',
                    height: 70,
                    paddingBottom: 25,
                    paddingTop: 8,
                    position: 'absolute',
                    borderRadius: 3,
                    backgroundColor: '#fff',
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Ana Sayfa',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="document"
                options={{
                    title: 'Evraklar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="file-document" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="assistant"
                options={{
                    title: 'Sesli Asistan',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="assistant" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="reminders"
                options={{
                    title: 'Hatırlatıcılar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
