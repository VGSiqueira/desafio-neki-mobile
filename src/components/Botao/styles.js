import { StyleSheet } from "react-native"
import dimensions from "../../helpers/dimensions";

const styles = StyleSheet.create({

    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF"
    },
    botao: {
        backgroundColor: "#1E90FF",
        alignItems: "center",
        justifyContent: "center",
        width: dimensions.dimensions.width / 1.5,
        borderRadius: 8,
        height: dimensions.dimensions.height / 20
    },


})

export default styles;