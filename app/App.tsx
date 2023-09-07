import {  StyleSheet, View } from 'react-native';
import { Home } from './page/home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131314',
  },
});
