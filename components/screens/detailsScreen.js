import React from 'react';
import { Text,StyleSheet, FlatList,Image, View,Button, TouchableOpacity, Alert,ActivityIndicator } from 'react-native';
import { Header,HeaderIcon } from 'react-native-elements';
import { Appbar } from 'react-native-paper';
 export default class DetailScreen extends React.Component{
    render(){

      return (
        <Appbar style={styles.bottom}>
          <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
          <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
          <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
          <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
        </Appbar>
      );
    }
  }
  
  const styles = StyleSheet.create({
    bottom: {
      
    },
  });