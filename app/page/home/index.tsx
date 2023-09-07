import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Monitor } from '../../components/monito';
import { ArrowTop } from '../../assets/arrowTop';
import { ArrowLeft } from '../../assets/arrowLeft';
import { ArrowDown } from '../../assets/arrowDown';
import { ArrowRight } from '../../assets/arrowRight';
import { CardCompass } from '../../components/cardCompass';
import useWebSocket from 'react-use-websocket';

export function Home() {
  const [socketUrl, setSocketUrl] = useState('ws://192.168.100.5:3000')

  const { sendMessage } = useWebSocket(socketUrl)
  const handleMove = useCallback(
    (message: string) => {
      sendMessage(message)
    }, [])
  const handleStop = (event:string) => { console.log(event) }
  return (
    <View style={styles.container}>
      <Monitor />
      <View style={styles.page}>
        <View style={styles.joystick}>
          <ArrowTop
            sendWebSocketMessage={handleMove}
          />
          <ArrowLeft 
            sendWebSocketMessage={handleMove}
          />
          <ArrowRight 
            sendWebSocketMessage={handleMove}
            />
          <ArrowDown
            sendWebSocketMessage={handleMove}
          />
        </View>
        <CardCompass />
        <View style={styles.joystick}>
        <ArrowTop
            sendWebSocketMessage={(message)=>handleMove("web:stopEngene")}
          />
          <ArrowLeft 
            sendWebSocketMessage={handleMove}
          />
          <ArrowRight 
            sendWebSocketMessage={handleMove}
            />
          <ArrowDown
            sendWebSocketMessage={handleMove}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 70,
    height: 58,
    border: "10",
    borderColor: "red"
  },
  page: {
    flex: 3,
    alignItems: 'flex-end',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  joystick: {
    width: 140,
    height: 150,
    margin: 40,
  }
});
