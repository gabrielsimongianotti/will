import { StyleSheet, Text, View } from 'react-native';

export function Card({ValueDate, description,unitMeasurement= ""}) {
  return (
  <View style={styles.blockDate}>
    <View style={styles.date}>
      <Text style={styles.textDate}>{ValueDate} </Text>
      <Text style={styles.textMeasurement}>{unitMeasurement}</Text>
    </View>
    <Text style={styles.text}>{description}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  textDate: {
    color: "#E6E9F2",
    fontSize: 24,
    fontWeight: "bold",
  }, 
  text: {
    color: "rgba(230, 233, 242, 0.66)",
    fontSize: 18,
  }, 
  textMeasurement:{
    color: "#EEE",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: "9%",
  },
  date:{
    flexDirection: "row",
  },
  blockDate:{
    margin: 5,
    alignItems: "center"
  },
});
