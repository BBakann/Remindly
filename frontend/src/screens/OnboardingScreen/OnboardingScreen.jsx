import { useRouter } from 'expo-router';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useOnboarding } from '../../hooks/useOnboarding';
import { onboardingSlides } from '../../utils/onboarding/onboardingData';
import styles from './styles';

const OnboardingScreen = () => {
  const router = useRouter();
  const { 
    currentSlideIndex, 
    ref, 
    updateCurrentSlideIndex, 
    goToNextSlide, 
    skip 
  } = useOnboarding(onboardingSlides.length);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={onboardingSlides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
      <View style={styles.footer}>
        <View style={styles.indicatorContainer}>
          {onboardingSlides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && styles.activeIndicator,
              ]}
            />
          ))}
        </View>

        {currentSlideIndex == onboardingSlides.length - 1 ? (
          <TouchableOpacity
            style={styles.startButton}
                          onPress={() => router.replace('/(tabs)')}>
            <Text style={styles.buttonText}>BAŞLA</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.navigationButtons}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.skipButton}
              onPress={skip}>
              <Text style={styles.skipButtonText}>GEÇ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={goToNextSlide}
              style={styles.nextButton}>
              <Text style={styles.buttonText}>İLERİ</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default OnboardingScreen;
