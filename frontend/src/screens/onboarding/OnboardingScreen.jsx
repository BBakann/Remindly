import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../assets/images/splash-icon.png'),
    title: 'Hoş Geldiniz',
    description: 'Remindly ile hatırlatmalarınızı kolayca yönetin',
  },
  {
    id: '2',
    image: require('../../assets/images/splash-icon.png'),
    title: 'Kolay Kullanım',
    description: 'Basit ve kullanıcı dostu arayüz ile hatırlatmalarınızı oluşturun',
  },
  {
    id: '3',
    image: require('../../assets/images/splash-icon.png'),
    title: 'Başlayalım',
    description: 'Hemen şimdi ilk hatırlatmanızı oluşturun',
  },
];

const OnboardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const router = useRouter();
  const ref = useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && styles.activeIndicator,
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {currentSlideIndex == slides.length - 1 ? (
            <TouchableOpacity 
              style={styles.btn} 
              onPress={() => router.replace('/home')}>
              <Text style={styles.btnText}>BAŞLA</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.btn, { backgroundColor: 'transparent' }]}
                onPress={skip}>
                <Text style={[styles.btnText, { color: '#000' }]}>GEÇ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text style={styles.btnText}>İLERİ</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      <Footer />
    </View>
  );
};

export default OnboardingScreen;
