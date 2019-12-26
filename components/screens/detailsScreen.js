import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {NavigationNativeContainer, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
//import Icon from "react-native-vector-icons/Ionicons";
import {Appbar, Avatar, Icon} from 'react-native-paper';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import ViewMoreText from 'react-native-read-more-text';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ['image', 'image', 'image', 'image','image','image','image'],
      data1: [2, 4, 3, 8],
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Movie Details',
      headerLeft: (
        <View style={{flex: 1, flexDirection: 'row'}}>
          <HeaderBackButton
            onPress={_ => navigation.goBack(null)}></HeaderBackButton>

          <View style={{paddingTop: 18}}>
            <Text> Home</Text>
          </View>
        </View>
      ),

      headerRight: () => (
        <TouchableOpacity>
          <Image
            source={require('../assets/upload.png')}
            style={{marginRight: 10, width: 22, height: 22}}
          />
        </TouchableOpacity>
      ),
    };
  };

  renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={{color: 'red'}}>
        View more
      </Text>
    );
  }
  renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={{color: 'red'}}>
        View less
      </Text>
    );
  }
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Image
              style={{
                width: '100%',
                height: 200,
                //resizeMode: 'contain',
              }}
              source={require('../assets/apple.jpg')}
            />
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                fontWeight: 'bold',
                position: 'absolute',
                left: 20,
                top: 120,
              }}>
              Bohemian Musician
            </Text>
            <Image
              style={styles.starOne}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.starTwo}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.starThree}
              source={require('../assets/star.png')}
            />
            <Image
              style={styles.playButtonStyle}
              source={require('../assets/play.png')}
            />

            <View></View>
            <View style={styles.firststRowStyle}>
              <Text style={styles.rowTextStyle}>Duration</Text>
              <Text
                style={{
                  marginRight: 80,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Genre
              </Text>
              <Text style={styles.rowTextStyle}>Language</Text>
            </View>

            <View style={styles.secondrowStyle}>
              <Text style={styles.secondrowTextStyle}>02h 30m</Text>
              <Text style={styles.dramaMusicTextStyle}>Drama, Music</Text>
              <Text style={styles.secondrowTextStyle}>English</Text>
            </View>
          </View>
          <View style={styles.detailTextStyle}>
            <Text style={styles.rowTextStyle}>Main Cast</Text>
            <View>
              <ViewMoreText
                numberOfLines={3}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
                textStyle={{textAlign: 'justify'}}>
                <Text>
                  Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri
                  molestie constituto eu. Eum enim tantas sadipscing ne, ut
                  omnes malorum nostrum cum. Errem populo qui ne, ea ipsum
                  antiopam definitionem eos.
                </Text>
              </ViewMoreText>
              <Text style={styles.headingTextStyle}>Synopsis</Text>
            </View>
            <View>
              <FlatList
                horizontal={true}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View>
                    
                    <Text style={styles.horizontalFlatListStyle}>
                      {item}
                    </Text>
                    
                    <Avatar.Image style={{flex:1,flexDirection:'row',margin:5,marginTop:10}}
                     source={require('../assets/123.jpg')} />
                     
                    <View>
                      <Text style={styles.horizontalFlatListStyle}>
                        {item}
                      </Text>
                    </View>
                  </View>
                )}
              />
              <Text style={styles.headingTextStyle}>Main Technical Cast</Text>
            </View>
          </View>
          <View style={{margin: 0}}>
            <Image source={require('../assets/apple.jpg')} />
          </View>
          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  appBarStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  starImageStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  starOne: {position: 'absolute', left: 20, top: 150, width: 30, height: 30},
  starTwo: {position: 'absolute', left: 45, top: 150, width: 30, height: 30},
  starThree: {position: 'absolute', left: 75, top: 150, width: 30, height: 30},
  dramaMusicTextStyle: {
    marginRight: 66,
    fontSize: 20,
    marginLeft: 42,
    fontSize: 15,
    // fontWeight: 'bold'
  },
  playButtonStyle: {
    marginRight: 10,
    position: 'absolute',
    right: 10,
    top: 170,
    width: 43,
    height: 43,
  },
  firststRowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  rowTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 48,
  },
  headingTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 48,
    paddingTop:10
  },
  secondrowTextStyle: {
    fontSize: 15,
    marginRight: 48,
    justifyContent: 'space-between',
    // margin:5
    // fontWeight: 'bold'
  },
  secondrowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',

    margin: 10,
    // marginRight:40,
    //paddingLeft: 0,
    //paddingRight: 10,
    position: 'absolute',
    top: 230,
    left: 10,
  },
  detailTextStyle: {
    margin: 20,
    paddingTop: 5,
  },
  horizontalFlatListStyle:
  {paddingTop:5, fontSize: 15,flex:1,flexDirection:'row',marginLeft:20}
});
