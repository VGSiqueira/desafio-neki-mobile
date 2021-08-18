import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen")

const dimensions = {
    dimensions: {
        width: width,
        height: height
    }
}

export default dimensions;