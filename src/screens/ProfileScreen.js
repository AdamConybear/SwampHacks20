import React, {Component} from 'react';
import { Text, StyleSheet,View, Button, Alert, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';

var gender_props = [
    {label: 'Male', value: 'male' },
    {label: 'Female', value: 'female' },
    {label: 'Other', value: 'other' }
];
var age_props = [
    {label: 'Yes', value: 'above' },
    {label: 'No', value: 'below' },
];
var problems_props = [
    {label: 'Depression', value: 'depression' },
    {label: 'Anxiety', value: 'anxiety' },
    {label: 'Stress', value: 'stress' },
    {label: 'Other', value: 'other' },
];

export default class ProfileScreen extends Component {
    constructor(){
        super();
        this.state = {
            isChecked: false,
            wantToHelp: false,
            gender: '',
            aboveEighteen: '',
            problem: '',
            username: '',
        }
    }
        

    checkSettings = () => {
        if(this.state.needHelp && this.state.wantToHelp){ //if they check true for both
            //tell them to only pick one
            Alert.alert("please only choose one help option");
        }else if(this.state.username == ''){ /* username already exists*/
            Alert.alert("Please enter a username");
        }else if(this.state.gender == '' || this.state.problem == '' || this.state.aboveEighteen == ''){
            Alert.alert("Please fill out all sections");
        }else{
            console.log(this.state.gender);
            console.log(this.state.aboveEighteen);
            console.log(this.state.problem);
            console.log(this.state.username);
            //this.props.navigation.navigate('Match');//if everything is filled out correct send them to matching screen
        }
    }

    render(){
        return(
            <View>
                <View style={styles.section}>
                    <Text style={styles.header}>Fill out your profile</Text>
                </View>
                <View>
                    <Text style={styles.text}>Choose a username</Text>
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
                <View> 
                    <CheckBox
                        title = "Do you need help"
                        checked = {this.state.needHelp}
                        onPress={() => this.setState({needHelp: !this.state.needHelp})}
        
                    />
                </View>
                <Text style={styles.orStyle}>or</Text>
                <View style={{marginBottom: 10}}> 
                    <CheckBox 
                        title = "Do you want to help"
                        checked = {this.state.wantToHelp}
                        onPress={() => this.setState({wantToHelp: !this.state.wantToHelp})}
                    />
                </View>
                <View>
                    <Text>What is your gender?</Text>
                    <RadioForm
                        style={{marginLeft: 5}}
                        radio_props={gender_props}
                        initial={'male'}
                        onPress={(value) => {this.setState({gender:value})}}
                    />

                </View>
                <View>
                    <Text>Are you above 18?</Text>
                    <RadioForm
                        style={{marginLeft: 5}}
                        radio_props={age_props}
                        initial={'above'}
                        onPress={(value) => {this.setState({aboveEighteen:value})}}
                    />

                </View>
                <View>
                    <Text>What are you struggling with?</Text>
                    <RadioForm 
                        style={{marginLeft: 5}}
                        radio_props={problems_props}
                        initial={'depression'}
                        onPress={(value) => {this.setState({problem:value})}}
                    />
                </View>
                <View style={styles.buttonStyle}> 
                    <Button 
                        title = "Done"
                        color = 'black'
                        onPress = {this.checkSettings}
                    />
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    section: {
      alignItems: 'center',
      margin: 16,
      justifyContent: 'center'
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      top:5,
      padding:5
    },
    text: {
        fontSize: 16,
        padding: 5

    },
    orStyle: {
        fontSize: 16,
        fontWeight:'bold',
        textAlign:'center',
        padding: 5
    },
    buttonStyle: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10

    },
    inputStyle: {
        padding: 10,
        borderRadius: 7,
        borderColor: '#307CB8',
        borderWidth: 2,
        marginBottom: 10

    },
    user:{
        fontSize: 16,
        fontWeight:'bold',
        padding: 5
    }
  });
  