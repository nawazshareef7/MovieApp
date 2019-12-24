import React, {useEffect, useState} from 'react';
import {  createAppContainer,navgation } from 'react-navigation';
import { Appbar } from 'react-native-paper';

import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['Heelo World', 2, 3, 4],
      data1:[2,,3,8],
    };
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.flexContainer}>
          <Text style={styles.textStyleForTitle}>Most Popular</Text>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/list-menu.png')}
          />
        </View>
        <View style={styles.flexMainContainer}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details')}>
          <FlatList
          
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            
            <View style={styles.flexMainContainer}>
              <Image
                style={{width: 100, height: 130, borderRadius: 15,}}
                source={require('../assets/123.jpg')}
              />
             <View>
             <Text style={{paddingLeft:5, fontSize:20, fontWeight:'300'}}>{item}</Text>
             <Text style={{paddingLeft:5, fontSize:15,}}>{this.state.data1}</Text>
             <Text style={{paddingLeft:5, fontSize:15,}}>{this.state.data1}</Text>
             <Text style={{paddingLeft:5,paddingTop:16, fontSize:15,}}>{this.state.data1}</Text>
             <Text style={{paddingLeft:5, fontSize:15,}}>{this.state.data1}</Text>

             </View>
             
            </View>
            
          )}
        />
          </TouchableOpacity>
         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 5,
    // backgroundColor:"blue"
  },
  flexContainer: {
    flex: 1,
    margin: 5,
    marginBottom: 15,
justifyContent:'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',

    // flexDirection: 'row',
    // marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  textStyleForTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  flexMainContainer: {
    flex: 20,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});

export default HomeScreen;
