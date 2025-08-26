import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        padding: 24,
        backgroundColor: '#d01f1f',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerTextContainer: {
        flex: 1
    },
    headerText: {
        fontSize: 32,
        fontFamily: 'Inter_700Bold',
        color: 'white',
        marginBottom: 8
    },
    describeText: {
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        color: '#fff',
        opacity: 0.9
    },
    headerIcon: {
        marginLeft: 20,
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 35,
        padding: 5,
        elevation: 3
    }
});

export default styles;
