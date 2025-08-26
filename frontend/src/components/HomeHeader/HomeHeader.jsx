import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const HomeHeader = () => {
    return (
        <View style={styles.headerContainer}>   
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Günaydın, Berdan!</Text>
                <Text style={styles.describeText}>2 dökümanın süresi doluyor</Text>
            </View>
            <TouchableOpacity style={styles.headerIcon}>
                <Ionicons name="person-circle" size={60} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

export default HomeHeader;
