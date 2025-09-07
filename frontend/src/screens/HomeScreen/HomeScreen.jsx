import { View } from 'react-native';
import HomeContent from '../../components/HomeContent/HomeContent';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeQuickAction from '../../components/HomeQuickAction/HomeQuickAction';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomeContent />
      <HomeQuickAction />
    </View>
  );
};


export default HomeScreen;
