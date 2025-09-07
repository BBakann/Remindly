import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const HomeHeader = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#d01f1f' }}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Günaydın, Berdan!</Text>
                    <Text style={styles.describeText}>2 dökümanın süresi doluyor</Text>
                </View>
                <TouchableOpacity style={styles.headerIcon}>
                    <Ionicons name="person-circle" size={60} color="#fff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeHeader;
