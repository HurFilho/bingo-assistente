import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberPanel } from './src/components/numberPanel'
import { loadTheme, resetDrawnNumbers } from './src/utils/localStorage';
import { Sidebar } from './src/components/sidebar';
import themes from './src/themes.json'

export default function App() {
  const [theme, setTheme] = useState(themes['Crotilda'])
  const [lastDrawnNumber, setLastDrawnNumber] = useState('0')
  const [reset, setReset] = useState(false)

  useEffect(() => {
    const fetchTheme = async () => {
      const chosenTheme = await loadTheme()
      chosenTheme.name !== undefined ? setTheme(chosenTheme) : await fetchTheme()
    }
    fetchTheme()
  }, [])

  useEffect(() => {
    if (reset) {
      resetDrawnNumbers()
      setLastDrawnNumber("0")
      setReset(false)
    }
  }, [reset])


  return (
    <View style={style(theme.appBgColor)}>
      <NumberPanel theme={theme} setLastDrawnNumber={setLastDrawnNumber} reset={reset}>{8}</NumberPanel>
      <Sidebar setReset={setReset}>{lastDrawnNumber}</Sidebar>
      <StatusBar style="dark" hidden />
    </View>
  )
}

const style = color => {
  return StyleSheet.create({
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color,
    padding: 5,
  })
}
