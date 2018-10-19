import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
} from 'react-native';
import Button from '../home_login_signup/button'



class PuzzleQuestion extends Component {

    state = {
        questionInput: '',
        answerInput: ''

    }

    static navigationOptions = {
        header: null
    };

    questionInputChange = (event) => {
        this.setState({questionInput: event.target.value})
    }

    answerInputChange = (event) => {
        this.setState({answerInput: event.target.value})
    }

    navigateToPuzzle = () => {
        this.props.navigation.navigate("Puzzle");
    }
    

    render() { 
        let puzzle = this.props.navigation.getParam('puzzle', 'Couldnt get puzzle');
        let index = this.props.navigation.getParam('index', 'Couldnt get index');
        // console.log(this.props.navigation.getParam('puzzle', 'couldnt get puzzle'))
        console.log("Here is my imported puzzle object", puzzle);
        console.log("Here is my imported index ", index);
        for(var i = 0; i < puzzle.length; i++) {
            console.log(puzzle[i].question)
        }
        console.log(puzzle)
        return ( 
            <View style = {styles.container}>
                <View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderRadius: 5, height: 50, borderWidth: 1, borderColor: 'white'}}>
                    <Button 
                    style={{ paddingRight: 2}}
                    text = "◄ Back "
                    onPress = {this.navigateToPuzzle}
                    textStyle={{color: 'white', fontSize: 30,textAlign: 'center',}}
                    />
                </View>
                {/* <TextInput onChangeText = {this.questionInputChange} value={this.state.questionInput} />
                <TextInput onChangeText = {this.answerInputChange} value={this.state.answerInput} /> */}

                </View>

          <View>
            <View style={styles.questionCard} >
              <Text style={styles.cardStyles}> Question: {puzzle[index].question} </Text>
            </View>
            <View style={styles.questionCard}>
              <Text style={styles.cardStyles}> Answer: {puzzle[index].answer} </Text>
            </View>
          </View>


            </View>
         );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        paddingTop: 80,
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'
    },
    questionCard:  {
        marginBottom: 35,
        borderWidth: 1,
        height: 'auto',
        borderColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardStyles: {
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    }
})
 
export default PuzzleQuestion;