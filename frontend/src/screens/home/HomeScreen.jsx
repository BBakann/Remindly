import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Remindly</Text>
                <Text>Hoş Geldiniz!</Text>
                
                <View>
                    <TouchableOpacity>
                        <Text>Hatırlatıcı Ekle</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Text>Hatırlatıcılarım</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default HomeScreen;
