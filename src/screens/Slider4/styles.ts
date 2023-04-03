import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "#142A4A"

    },
    panel: {
        flex: 1,
        marginTop: 40,
        margin: 20,
        borderRadius: 20,
        backgroundColor: colors.thirdLight
    },
    buttonSlider: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginBottom: 20
    },
    buttonEntrar: {
        backgroundColor: colors.primary,
        marginBottom: 30,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 5,
        borderRadius: 8
    },
    buttonEntrarText: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20
    }
});