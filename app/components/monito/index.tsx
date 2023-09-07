import { StyleSheet, View } from 'react-native';
import { Card } from '../card';

export function Monitor() {
  return (
  <View style={styles.monitoring}>
    <Card ValueDate={18} unitMeasurement="m/s" description="Velocidade"/>
    <View style={styles.line}/>
    <Card ValueDate={840} description="Altitude"/>
    <View style={styles.line}/>
    <Card ValueDate={5} unitMeasurement="km" description="Distância"/>
  </View>
  );
}

const styles = StyleSheet.create({
  monitoring: {
    margin: 20,
    alignSelf: 'flex-start',
    backgroundColor: "#202022",
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
  },
  line: {
    width:2,
    height:"100%",
    backgroundColor: "#353538",
  },
});
