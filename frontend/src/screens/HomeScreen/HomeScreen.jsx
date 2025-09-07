import { View } from 'react-native';
import HomeContent from '../../components/Home/HomeContent/HomeContent';
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader';
import HomeQuickAction from '../../components/Home/HomeQuickAction/HomeQuickAction';
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
