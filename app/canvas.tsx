import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const canvas = () => {
    const router = useRouter()
    function handleBack(){
        router.back()
    }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>canvas</Text>
        <TouchableOpacity onPress={handleBack}><Text>back</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default canvas

const styles = StyleSheet.create({})