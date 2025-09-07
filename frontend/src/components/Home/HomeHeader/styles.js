import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        backgroundColor: '#d01f1f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        elevation: 5,
        shadowColor: '#000',
    },
    headerTextContainer: {
        flex: 1
    },
    headerText: {
        fontSize: 25,
        fontFamily: 'Inter_700Bold',
        color: 'white',
        marginBottom: 8,
        marginLeft: 5
    },
    describeText: {
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        color: '#fff',
        opacity: 0.9,
        marginLeft: 5
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
