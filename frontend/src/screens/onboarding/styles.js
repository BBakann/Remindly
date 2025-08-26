import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    slide: {
        width,
        height: height - 150,
        alignItems: 'center',
        padding: 20,
        paddingTop: height * 0.1, 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 18,
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 30,
        marginBottom: 40, 
    },
    image: {
        width: width * 1, 
        height: width * 1,
        resizeMode: 'contain',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingBottom: 50,
        paddingTop: 20,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    indicator: {
        height: 8,
        width: 8,
        backgroundColor: '#ddd',
        marginHorizontal: 5,
        borderRadius: 4,
    },
    activeIndicator: {
        backgroundColor: '#007AFF',
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    startButton: {
        backgroundColor: '#007AFF',
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    nextButton: {
        backgroundColor: '#007AFF',
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
    },
    skipButton: {
        backgroundColor: 'transparent',
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    skipButtonText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});

export default styles;
