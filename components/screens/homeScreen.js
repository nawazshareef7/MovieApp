import React, {useEffect, useState} from 'react';
import {  createAppContainer,navgation } from 'react-navigation';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
  ListView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ['Bumblebee', 'Aquaman', "Dragon Ball Super: Broly", "Steelman"],
      data1:[2,4,3,8],
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
     

      headerRight: () => (
          <Image
            source={require('../assets/list-menu.png')}
            style={{marginRight: 10, width: 22, height: 22}}
          />
      ),
    };
  };
  renderSeparator = () => {
    return (
        <View
            style={{
                height: 10,
                width: 3,
                backgroundColor: "#D81458"
            }}
        />
    );
};
render() {
    return (
      <View style={styles.MainContainer}>
        
        <View style={styles.titleContainer}>
         <View>
         <Text style={styles.textStyleForTitle}>Most Popular</Text>
         </View>
         
          <Image
            style={{marginTop:6, width: 25, height: 25}}
            source={require('../assets/list-menu.png')}
          />
        </View>
        <ScrollView>
        <View style={styles.flexMainContainer}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details')}>
          <FlatList
          
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item,item2}) => (
            
            <View style={styles.flexMainContainer}>
              <Image
                style={{width: 120, height: 170, borderRadius: 15,}}
                source={require('../assets/123.jpg')}
              />
             <View style={{marginLeft:10}}>
             <Text style={{paddingLeft:5, fontSize:20, fontWeight:'300'}}>{item}</Text>
             
             <View style={{flex:1,
            flexDirection:"row"
            }}>
              <Text style={styles.yearsAndLangTextStyle}>2018</Text>
              <View style style={styles.verticleSeperator}/>
               <Text style={styles.yearsAndLangTextStyle}>EN</Text>
             </View>
             <View>
             <Text style={styles.actionAndPublicTextStyle}>Action, Adventure</Text>

             </View>
             <Text style={styles.ratingText}>6.9</Text>
             <Text style={styles.publicTextStyle}>Public</Text>

             </View>
             
            </View>
            
          )}
          
        />
          </TouchableOpacity>
         
        </View>
        </ScrollView>
  
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
  titleContainer:
  {flex:1,flexDirection:'row',margin:10,paddingBottom:50,
        justifyContent:'space-between',
       
        },
  flexContainer: {
    flex: 1,
    margin: 5,
    marginTop: 0,
justifyContent:'space-between',
    backgroundColor: 'blue',
    flexDirection: 'row',

    // flexDirection: 'row',
    // marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  textStyleForTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  flexMainContainer: {
    flex: 1,
    margin: 3,
    marginBottom:20,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  verticleSeperator: {
    height: 16,
    width: 2,
    marginTop:3,
    marginLeft:5,
    backgroundColor: "#D81458"
},
yearsAndLangTextStyle:{
  paddingLeft:5, 
  fontSize:15,
  color: "#D81458"
},
actionAndPublicTextStyle:{
  marginBottom:50,
  paddingLeft:5, 
  fontSize:15,
  color: '#D81458'
},
ratingText:{
  paddingLeft:5,
  paddingTop:10, 
  fontSize:15,
  fontWeight:'bold',
  color: '#D81458'
},
publicTextStyle:{
  paddingLeft:5, 
  fontSize:15,
  color: '#D81458'
},
});

export default HomeScreen;
