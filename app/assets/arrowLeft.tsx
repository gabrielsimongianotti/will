import React, { useState } from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Svg, { Path } from "react-native-svg"

export  function ArrowLeft({sendWebSocketMessage}: { sendWebSocketMessage: (message: string) => void }) {
  const [active, setActive] = useState(false)
  return (
    <TouchableHighlight style={styles.container}
    onPressOut={()=>setActive(false)} 
    onPressIn={()=>setActive(true)} 
    underlayColor={active?"rgba(0, 0, 0, 0)":"rgba(0, 0, 0, 0)"}
    onPress={() => {
      console.log("web:turnLeft")
      sendWebSocketMessage("web:turnLeft")
    }}>
       { active?       
        <Svg width="40" height="205" viewBox="0 0 88 205" fill="none">
          <Path d="M81.8169 151.151C84.9777 155.49 84.9143 161.574 81.118 165.37L48.8291 197.659C44.8634 201.625 38.3838 201.574 34.7935 197.265C13.4594 171.663 0.628174 138.729 0.628174 102.797C0.628174 66.8648 13.4548 33.9406 34.7933 8.33497C38.3838 4.02652 44.8634 3.97571 48.8291 7.94146L81.118 40.2303C84.9143 44.0266 84.9777 50.1101 81.8167 54.4497C71.9361 68.0144 66.1005 84.7199 66.1005 102.797C66.1005 120.875 71.9362 137.585 81.8169 151.151Z" fill="#1B4AF5" opacity={0.15} stroke="#1B4AF5" strokeWidth={5} strokeOpacity={100}/>
          <Path d="M31.9852 103.06C33.9987 101.015 35.9086 99.069 37.8368 97.1347C39.4049 95.5544 41.0219 94.0228 42.5535 92.418C45.0369 89.8187 43.902 85.5291 40.4667 84.4735C38.7154 83.9365 37.129 84.3087 35.7439 85.5047C35.6035 85.6267 35.4693 85.761 35.335 85.8952C29.9533 91.277 24.5715 96.6588 19.1897 102.047C18.4636 102.773 18.4636 103.151 19.1775 103.865C24.5898 109.277 29.996 114.696 35.4205 120.102C36.7568 121.432 38.3798 121.878 40.1982 121.365C42.0165 120.852 43.1698 119.62 43.5969 117.783C44.0057 116.032 43.5115 114.488 42.2484 113.219C38.9656 109.924 35.6706 106.641 32.3757 103.359C32.2536 103.237 32.1011 103.151 31.9852 103.066V103.06Z" fill="#1B4AF5" />
        </Svg>
       :
        <Svg width="40" height="205" viewBox="0 0 88 205" fill="none">
          <Path d="M81.8169 151.151C84.9777 155.49 84.9143 161.574 81.118 165.37L48.8291 197.659C44.8634 201.625 38.3838 201.574 34.7935 197.265C13.4594 171.663 0.628174 138.729 0.628174 102.797C0.628174 66.8648 13.4548 33.9406 34.7933 8.33497C38.3838 4.02652 44.8634 3.97571 48.8291 7.94146L81.118 40.2303C84.9143 44.0266 84.9777 50.1101 81.8167 54.4497C71.9361 68.0144 66.1005 84.7199 66.1005 102.797C66.1005 120.875 71.9362 137.585 81.8169 151.151Z" fill="#353538"/>
          <Path d="M31.9852 103.06C33.9987 101.015 35.9086 99.069 37.8368 97.1347C39.4049 95.5544 41.0219 94.0228 42.5535 92.418C45.0369 89.8187 43.902 85.5291 40.4667 84.4735C38.7154 83.9365 37.129 84.3087 35.7439 85.5047C35.6035 85.6267 35.4693 85.761 35.335 85.8952C29.9533 91.277 24.5715 96.6588 19.1897 102.047C18.4636 102.773 18.4636 103.151 19.1775 103.865C24.5898 109.277 29.996 114.696 35.4205 120.102C36.7568 121.432 38.3798 121.878 40.1982 121.365C42.0165 120.852 43.1698 119.62 43.5969 117.783C44.0057 116.032 43.5115 114.488 42.2484 113.219C38.9656 109.924 35.6706 106.641 32.3757 103.359C32.2536 103.237 32.1011 103.151 31.9852 103.066V103.06Z" fill="#1B1B1D"/>
        </Svg>
      }
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 40,
    top: 35,
    position: "absolute",
    justifyContent: 'center',
  },
});