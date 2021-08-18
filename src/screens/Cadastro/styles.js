import { StyleSheet } from "react-native";
import dimensions from "../../helpers/dimensions";

const styles = StyleSheet.create({

    header: {
        alignItems: "center",
    },
    inputs: {
        alignItems: "center",

    },
    textInput: {
        borderWidth: 1,
        borderRadius: 8,
        width: dimensions.dimensions.width / 1.5,
        marginBottom: dimensions.dimensions.height / 50,
        padding: 10
    },
    buttonContainer: {
        alignItems: "center",
        marginTop: dimensions.dimensions.height / 20
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: dimensions.dimensions.width / 6,
        marginVertical: dimensions.dimensions.height / 20
    },
    textDecorator: {
        textDecorationLine: 'underline',
        marginLeft: 5
    }
})

export default styles;