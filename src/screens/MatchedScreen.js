import React, {Component} from 'react';
import { Text, StyleSheet,View,TouchableOpacity, AsyncStorage,Button,Image, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
//import styled from 'styled-components/native'
//import * as Font from 'expo-font';


//stored profile setup
//[needHelp,wantToHelp,gender,above18,problem]
//would need to parse by comma to get back

export default class MatchedScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            //user: this.props.navigation.state.params.userName,
            numMatches:0,
            matchOne: '_______',
            matchTwo: '',
            matchThree:''
        }
    }

    _retrieveData = async () => {
    try {
        console.log(this.state.user);
        const value = await AsyncStorage.getItem(this.state.user);
        const obj = JSON.parse(value);
        console.log(obj.gender);
        if (obj.gender !== '') {
            // We have data!!     
            console.log(obj.gender);
        }
    } catch (error) {
        // Error retrieving data
        console.log("error retrieving data");
    }
    };
    // async componentDidMount() {
    //     await Font.loadAsync({
    //         'Dosis-Light': require('../../assets/fonts/Dosis-Light.ttf'
    //         ),
    //     });

    //     this.setState({ fontLoaded: true });
    // }
    // //'../../assets/fonts/Dosis-Light.ttf'

    matchUser = () => {
        if(this.state.numMatches < 3){ //only three matches at a time
            this.state.numMatches++;
            this.increaseMatches();
            this.findMatch(); // find a new match
            
        }else{
            Alert.alert("You can only have three matches");
        }
        //this.getMatches();
        console.log("in function");
        //access users from mongo database
        //once user is matched return username of match
        //makes 
        console.log(this.state.numMatches);

        // this.setState({
        //     numMatches: this.state.numMatches,
        // })
    };
    increaseMatches = () => {
        this.setState({
            numMatches: this.state.numMatches,
        })
    }
    findMatch = () => {
        var userMatch = this.randName();
        // if(this.state.numMatches == 1){
        //     this.setState({
        //         matchOne: userMatch
        //     })
        // }else if(this.state.numMatches == 2){
        //     this.setState({
        //         matchTwo: userMatch
        //     })
        // }else{
        //     this.setState({
        //         matchThree: userMatch
        //     })
        // }
        this.setState({
            matchOne: userMatch
        })
    }
    randName = () => {
        var names = ["Esme", "Steven", "Mary", "Bobby", "Claudia", "Brent", "Trisha","Trevor", "Amelia","Noah"];
        var index = Math.floor(Math.random() * 10); //random number 0-9
        return names[index];
    }
    goChat =(match) =>{
        //pass user and who they are matched with to chat screen
        this.props.navigation.navigate('Profile', {matched:match});
    }

    // showMatch = ()=> {
    //     if
    // }
    goProfile = () => {
        this.props.navigation.navigate('Profile');
    }

    goLogin =() => {
        this.props.navigation.navigate('Login');
    }

    render(){
        return(
            <View style={styles.main}>
                <LinearGradient
                    colors={['#FFFFFF', '#26A69A']}
                    style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 200,
                    width: null,
                    justifyContent: 'flex-end'
                    }}
                />
                <View style={styles.match}>
                    <Text style ={{fontSize:24, fontWeight:'bold'}}>Number of matches: {this.state.numMatches}</Text>
                </View>
                {/* <TouchableOpacity style={styles.matchedStyle} onPress = {() => this.goChat()}> 
                    <Text style={{fontSize:22, fontWeight:'bold'}}>TEST</Text>
                </TouchableOpacity> */}
                <View style={styles.toChat}>
                    <TouchableOpacity style={styles.matchedStyle} onPress = {() => this.goChat(this.state.matchOne)}>
                        <Text style={{fontSize:22, fontWeight:'bold'}}>{this.state.matchOne}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1, bottom: 50}}>
            {/* Rest of the app comes ABOVE the action button component !*/}
                    <ActionButton buttonColor="#00897B">
                        <ActionButton.Item buttonColor='#9e2c64' title="Update Profile" onPress={() => this.goProfile()}>
                            <Icon name="md-rocket" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#8f2c9e' title="Login" onPress={() => this.goLogin()}>
                            <Icon name="md-cloud" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                    </ActionButton>
                </View>
                {/* <View style={{flex:2}}>
                    <TouchableOpacity style={styles.matchedStyle} onPress = {() => this.goChat(this.state.matchTwo)}>
                        <Text style={{fontSize:22, fontWeight:'bold'}}>{this.state.matchTwo}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:3}}>
                    <TouchableOpacity style={styles.matchedStyle} onPress = {() => this.goChat(this.state.matchThree)}>
                        <Text style={{fontSize:22, fontWeight:'bold'}}>{this.state.matchThree}</Text>
                    </TouchableOpacity>
                </View> */}
                {/* <View style={styles.matchedStyle}>
                    <Button
                        title = 'test'
                        color = 'black'
                        onPress = {() => this.props.navigation.navigate('Profile')}
                    />
                </View> */}
                {/* <View style={{justifyContent:'center',alignContent:'center',right:15}}>
                    <Text style={{fontWeight:'bold',fontSize:22, textAlign:'center'}}>Welcome to Confided, where you can talk to real people about your real problems. 
                     Confided is completely anonymous so you can express your concerns freely. Make an account
                         in settings and click 'Pair Me' to begin.</Text>
                </View> */}
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.matchUser()}>
                        <Text style= {styles.buttonText}>Pair Me</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity style={styles.learningStyle} onPress = {() => this.props.navigation.navigate('Profile')}>
                    <Image source={require('../../assets/settings.png')}/>
                </TouchableOpacity> */}
            </View>

        );
    }
}


const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      //textAlign:'center',
      justifyContent:'center',
      alignContent:'center',
      fontWeight:'bold'
    
      },
    container: {
        flex: 1,
        //backgroundColor: '#3498db',
        position:'absolute',
        alignItems: 'center',
        //justifyContent: 'flex-end',
        bottom: 10


    },
    buttonContainer: {
        backgroundColor: '#00897B',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 12,
        //https://codeburst.io/a-tale-of-three-buttons-exploring-react-native-styling-fa931159ef69
        paddingHorizontal: 30,
        paddingVertical: 20,
        bottom: 60,
        alignSelf: 'center',
        position: 'absolute'
        //https://reactnativeforyou.com/how-to-align-button-to-bottom-of-the-screen-in-react-native/
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 30
    },
    match:{
        //flex: 1,
        //backgroundColor: '#3498db',
        position:'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 60

    },
    learningStyle:{
      backgroundColor: 'transparent',
      // flex: 1,
      height: 45,
      padding:5,
      left:2,
      position: 'absolute'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    main: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#26A69A'
    },
    matchedStyle:{
        //position:"absolute",
        position:'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        //fontSize: 22,
        //fontWeight:'bold',
        top: 100,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,

    },
    toChat:{
        flex:1,
        //position:'absolute',
        left:165
    },
    about: {
        position:'relative',
        //justifyContent: 'center',
        //alignContent:'center',
        //top:50
    }

  });
  //https://facebook.github.io/react-native/docs/flexbox
