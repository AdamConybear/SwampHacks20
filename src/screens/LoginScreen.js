import React, {Component} from 'react';
import { Text, StyleSheet,View,TextInput, TouchableOpacity,Button,Image, Alert} from 'react-native';

export default class LoginScreen extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
        }
    }

    loadUser = (user) => {
        console.log("username located")
        //if username is found in DB return to mach screen
        //else alert them that username is not located
        this.props.navigation.navigate('Match',{userName:user})
    }

    render(){
        return(
            <View style={{backgroundColor:'#f3f3f3x'}}>
                <View>
                    <Text style={styles.about}>Enter your username</Text>
                    <TextInput  
                        placeholder="fluffyPanda19"  
                        underlineColorAndroid='transparent'  
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        clearButtonMode = 'always'
                        style={styles.inputStyle}  
                        onChangeText = {username => this.setState({username})}
                    />
                </View>

               <View style={styles.buttonStyle}> 
                    <TouchableOpacity style={styles.button} onPress = {() => this.loadUser(this.state.username)}>
                        <Text style= {styles.Buttontext}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    about: {
        textAlign:'center',
        fontSize: 24,
        padding: 15,
        fontWeight:'bold'
        
    },
    inputStyle: {
        padding: 10,
        borderRadius: 7,
        borderColor: '#26A69A',
        borderWidth: 2,
        marginBottom: 10

    },
    Buttontext: {
        fontSize: 16,
        padding: 5,
        color: '#FFFFFF'

    },
    buttonStyle: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10

    },
    button:{
        backgroundColor: '#000000',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 12,
        //https://codeburst.io/a-tale-of-three-buttons-exploring-react-native-styling-fa931159ef69
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

});