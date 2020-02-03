import React, {Component} from 'react';
import { Text, StyleSheet,View, TouchableOpacity, Alert, TextInput, AsyncStorage, SafeAreaView,ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import RadioForm from 'react-native-simple-radio-button';
//import { addUser, getUsers } from '../backend/server';

var gender_props = [
    {label: 'Male', value: 'male' },
    {label: 'Female', value: 'female' },
    {label: 'Other', value: 'other' }
];
var age_props = [
    {label: 'Yes', value: true },
    {label: 'No', value: false },
];
var problems_props = [
    {label: 'Depression', value: 'depression' },
    {label: 'Anxiety', value: 'anxiety' },
    {label: 'Stress', value: 'stress' },
    {label: 'Eating', value: 'eating' },
    {label: 'Trauma', value: 'trauma' },
    {label: 'Fear', value: 'fear' },
    {label: 'Other', value: 'other' },
    {label: 'N/A', value: 'nothing' },
];
var help_props = [
    {label: 'I need help', value: true },
    {label: 'I want to help', value: false },
];

export default class ProfileScreen extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            help:false,
            gender: '',
            aboveEighteen: false,
            problem: '',
        }
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem(this.state.username, JSON.stringify({"help":this.state.help,"gender": this.state.gender,"aboveEighteen": this.state.aboveEighteen,"problem":this.state.problem}));
            console.log("Profile saved!");
        } catch (error) {
            // Error saving data
            console.log("error saving data");
        }
    };
    saveUserData = () => {
        try{
            //var userData = JSON.stringify({"user":this.state.username,"help": this.state.help,"gender": this.state.gender,"aboveEighteen":this.state.aboveEighteen,"problem":this.state.problem});
            //add userdata to function param
            //addUser(userData); // add user to database
            Alert.alert("Your profile has been created")
            console.log('Profile saved');
        }catch{
            //something went wrong
        }
    }
        

    checkSettings = () => {
        //iterate through all users check to make sure this.state.username != username in DB
        // var userArr = JSON.parse(getUsers());
        // var count = 0;

        // for(let i = 0; i < userArr.length();i++){
        //     if (userArr[i] == this.state.username){
        //         count++;
        //     }
        // }
        
        // if(count > 0){
        //     Alert.alert("Username is taken! Choose another");
        //     count = 0;
        // }
        if(this.state.username == ''){ /* username already exists*/
            Alert.alert("Please enter a username");
        }else if(this.state.gender == '' || this.state.problem == ''){
            Alert.alert("Please fill out all sections");
        }else if(this.state.help){

        }else{
            //add user to mongoDB
            this._storeData();
            this.saveUserData(); //save user data to local async
            this.props.navigation.navigate('Match',{
                userName: this.state.username}); // pass along username
            //if everything is filled out correct send them to matching screen
        }
    }

    render(){
        return(
            <SafeAreaView style ={{backgroundColor:'#f3f3f3'}}>
                <ScrollView>
                    <View style={styles.section}>
                        <Text style={styles.header}>Fill out your profile</Text>
                    </View>
                    <View>
                        <Text style={styles.middleText}>Choose a username</Text>
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
                        <Text style={styles.middleText}>Why are you here?</Text>
                        <RadioForm
                            style={{marginLeft: 5}}
                            buttonColor={'#26A69A'} // #2196f3
                            selectedButtonColor = {'#26A69A'}
                            radio_props={help_props}
                            initial={-1}
                            onPress={(value) => {this.setState({help:value})}}
                        />

                    </View>
                    <View>
                        <Text style={styles.middleText}>What is your gender?</Text>
                        <RadioForm
                            style={{marginLeft: 5}}
                            radio_props={gender_props}
                            buttonColor={'#26A69A'} // #2196f3
                            selectedButtonColor = {'#26A69A'}
                            initial={-1}
                            onPress={(value) => {this.setState({gender:value})}}
                        />

                    </View>
                    <View>
                        <Text style={styles.middleText}>Are you above 18?</Text>
                        <RadioForm
                            style={{marginLeft: 5}}
                            radio_props={age_props}
                            buttonColor={'#26A69A'} // #2196f3
                            selectedButtonColor = {'#26A69A'}
                            initial={-1}
                            onPress={(value) => {this.setState({aboveEighteen:value})}}
                        />

                    </View>
                    
                    <View>
                        <Text style={styles.middleText}>What are you struggling with?</Text>
                        <RadioForm 
                            style={{marginLeft: 5}}
                            radio_props={problems_props}
                            buttonColor={'#26A69A'} // #2196f3
                            selectedButtonColor = {'#26A69A'}
                            initial={-1}
                            onPress={(value) => {this.setState({problem:value})}}
                        />
                    </View>
                    <View style={styles.buttonStyle}> 
                        <TouchableOpacity style={styles.button} onPress = {() => this.checkSettings()}>
                            <Text style= {styles.Buttontext}>Create Profile</Text>
                        </TouchableOpacity>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
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
    text:{
        fontSize: 16,
        padding: 5,
    },
    Buttontext: {
        fontSize: 16,
        padding: 5,
        color: '#FFFFFF'

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
        borderRadius: 8,
        borderColor: '#26A69A',
        borderWidth: 2,
        marginBottom: 10

    },
    user:{
        fontSize: 16,
        fontWeight:'bold',
        padding: 5
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
    middleText:{
        fontSize: 16,
        padding: 5,
        fontWeight:'bold'
    }
  });
  