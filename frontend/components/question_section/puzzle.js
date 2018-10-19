import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    ScrollView
} from 'react-native';
import Button from '../home_login_signup/button'



class Puzzle extends Component {



    static navigationOptions = {
        header: null
    };
    navigateToHome = () => {
        this.props.navigation.navigate("Home");
    }
    navigateToQuestion = (index) => {
        // console.log("Navigate to question: ", puzzle) //undefined
        // let puzzle = { a:1, b:2}
         let puzzle = this.props.navigation.getParam('puzzle', 'Couldnt get puzzle');

        this.props.navigation.navigate("PuzzleQuestion", {puzzle, index});
        
    }

    render() { 
        let puzzle = this.props.navigation.getParam('puzzle', 'Couldnt get puzzle');
        // console.log(this.props.navigation.getParam('puzzle', 'couldnt get puzzle'))
        console.log("Here is my imported puzzle object", puzzle);
        for(var i = 0; i < puzzle.length; i++) {
            console.log(puzzle[i].question)
        }
        // console.log(this.props.navigation.getParam('question', 'couldnt get question'))
        // console.log(this.props.navigation.getParam('answer', 'couldnt get answer'))
        // console.log(this.props.navigation.getParam('puzzles_id', 'coudlnt get puzzles_id'))
        // let interview = this.props
        // console.log(interview.question)

        return ( 
            <View style = {styles.container}>
                <ScrollView>
                <View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15, borderRadius: 5, height: 50, borderWidth: 1, borderColor: 'white'}}>
                    <Button 
                    style={{ paddingRight: 2}}
                    text = "◄ Back "
                    onPress = {this.navigateToHome}
                    textStyle={{color: 'white', fontSize: 30,textAlign: 'center',}}
                    />
                </View>
                </View>

                
                {puzzle.map((x, index) => (
                    
                    <View style = {styles.questionCard} key = {index}>
                    <Button
                    style={{ paddingRight: 2}}
                    text = {x.question}
                    onPress = {(index) => {this.navigateToQuestion(index)}}
                    textStyle={{color: 'white', fontSize: 10,textAlign: 'center',}}
                    />
                    </View >
                    

                ))}





            </ScrollView>
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
        alignSelf: 'stretch',
        paddingBottom: 100
    },
    questionCard:  {
        marginBottom: 15,
        borderWidth: 1,
        height: 150,
        borderColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardStyles: {
        fontSize: 40,
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    }
})
 
export default Puzzle;