import { SafeAreaView } from 'react-native-safe-area-context';
import HomeContent from '../../components/HomeContent/HomeContent';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import styles from './styles';


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader />
            <HomeContent/>
        </SafeAreaView>
    );
}

export default HomeScreen;
