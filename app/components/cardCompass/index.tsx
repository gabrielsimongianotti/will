import { StyleSheet, Image, View } from 'react-native';
import { Gyroscope } from '../../assets/gyroscope';
import { Compass } from '../../assets/compass';

export function CardCompass() {
  return (
  <View style={styles.compass}>
    <Gyroscope />
    <Compass />
  </View>
  );
}

const styles = StyleSheet.create({
  compass: {
    position: "absolute",
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: "15%",
    justifyContent: "center",
    left: "25%",
    top: "-27%",
    // transform: [{ rotate: '-1deg'}],
    width: 370,
    // backgroundColor: "red",
    height: 270,
  },
});
