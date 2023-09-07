import * as React from "react"
import { StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export const Compass = (props) => (
  <Svg
    style={styles.container}
    width={964*0.3}
    height={862*0.3}
    viewBox="0 0 964 862" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5 5h102.998l21.788 14.808L151.574 5H252.59"
      stroke="#1B4AF5"
      strokeWidth={10}
      strokeLinecap="round"
    />
  </Svg>
)
 
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 147,
    top: 170,
  },
});