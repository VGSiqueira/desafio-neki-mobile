import { StyleSheet } from "react-native";
import dimensions from "../../helpers/dimensions";

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginTop: -50
    },
    picker: {
        width: dimensions.dimensions.width / 2,
        borderWidth: 1,
      },
})

export default styles;