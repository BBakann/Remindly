import { useRef, useState } from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const useOnboarding = (slidesLength) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef();

    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slidesLength) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slidesLength - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    return {
        currentSlideIndex,
        ref,
        updateCurrentSlideIndex,
        goToNextSlide,
        skip
    };
};
