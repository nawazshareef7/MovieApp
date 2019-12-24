import React, {Component} from 'react';
import { Text, View,StyleSheet,Image  } from 'react-native';
import { NavigationNativeContainer, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
//import Icon from "react-native-vector-icons/FontAwesome";
import { Appbar, Icon } from 'react-native-paper';
import { createStackNavigator } from 'react-navigation-stack';

// class CustomHeader extends React.Component{
//   render() {
//     let {title , isHome} = this.props
//     return(
     
//        <Appbar.Header style={{justifyContent:"center", backgroundColor:"white"}}>
//         {/* <Appbar.BackAction
//           onPress={this._goBack}
//         /> */}
//         <Appbar.Content style={{alignItems:"center", }}
//           title="Home" 
          
//         />
//         <Appbar.Action icon="filter" size={30} color="#900"  style={{position:"absolute", right:0}}   onPress={this._handleMore} />
//       </Appbar.Header>
      
//     );
//   }
// }
const styles = StyleSheet.create({
  top: {
   backgroundColor:'white',
    alignItems: "center"
  },
});

class HomeScreen extends React.Component{
  render(){
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header style={{justifyContent:"center", backgroundColor:"white"}}>
        {/* <Appbar.BackAction
          onPress={this._goBack}
        /> */}
        <Appbar.Content style={{alignItems:"center", }}
          title="Home" 
          
        />
        <Appbar.Action icon="filter" size={30} color="#900"  style={{position:"absolute", right:0}}   onPress={this._handleMore} />
      </Appbar.Header>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
        
      <Text>Home!</Text>
        </View>
        
    </View>
    )
  }
}
class SearchScreen extends React.Component{
  render(){
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header style={{justifyContent:"center", backgroundColor:"white"}}>
        {/* <Appbar.BackAction
          onPress={this._goBack}
        /> */}
        <Appbar.Content style={{alignItems:"center", }}
          title="search" 
          
        />
        <Appbar.Action icon="rocket" size={30} color="#900"  style={{position:"absolute", right:0}}   onPress={this._handleMore} />
      </Appbar.Header>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Click Me' light>
          <Text>Go to search</Text>
        </Button>
      <Text>Search!</Text>
        </View>
        
    </View>
    )
  }
}
class MoreScreen extends React.Component{
  render(){
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header style={{justifyContent:"center", backgroundColor:"white"}}>
        {/* <Appbar.BackAction
          onPress={this._goBack}
        /> */}
        <Appbar.Content style={{alignItems:"center", }}
          title="More" 
          
        />
        <Appbar.Action icon="rocket" size={30} color="#900"  style={{position:"absolute", right:0}}   onPress={this._handleMore} />
      </Appbar.Header>
        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Click Me' onPress={ ()=>this.props.navigation.navigate('Search')}>
          <Text>Go to search</Text>
        </Button>
      <Text>More!</Text>
        </View>
        
    </View>
    )
  }
}


const tabNavigator = createBottomTabNavigator({
  Home:HomeScreen, 
  Search: SearchScreen,
  More: MoreScreen
});



export default createAppContainer(tabNavigator);