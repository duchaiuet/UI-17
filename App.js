import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// You can import from local files
// or any pure javascript modules available in npm


export default class Dictionary extends React.Component {
  // static navigationOptions = {
  //   title: "dịch",
  //   headerStyle: {
  //     backgroundColor: '#385999',
  //   },
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  //   headerTintColor: '#fff',
  // };
  constructor(props) {
    super(props);
    this.state = {
      INPUT: '',
      OUTPUT: '',
      dictionary: [
        { English: "I have an apple", VietNamese: "Tôi có một trái táo" },
        { English: "I have a pen", VietNamese: "Tôi có một cái bút" },
        { English: "I have an orange ", VietNamese: "Tôi có một quả cam" },
        { English: "I have a bread", VietNamese: "Tôi có một cái bánh mì " },
        { English: "I have a book", VietNamese: "Tôi có một quyển sách" },
        { English: "I have a card", VietNamese: "Tôi có một cái thẻ" },
        { English: "I have a shirt", VietNamese: "Tôi có một cái áo" },
        { English: "Apple", VietNamese: "trái táo" },
        { English: "Orange", VietNamese: "trái cam" },
        { English: "pen", VietNamese: "bút" },
        { English: "bag", VietNamese: "cặp sách" },
        { English: "shoes", VietNamese: "đôi giày" },
        { English: "book", VietNamese: "quyển sách" }
      ]
    };

  }
  TranslateToVietNamese() {
    let check = false;
    let index ;
    for (let i = 0; i < this.state.dictionary.length; i++) {
      if (this.state.INPUT === this.state.dictionary[i].English){
        check = true;
        index = i;
      } 
    }
    if (check == true) this.setState({ OUTPUT: this.state.dictionary[index].VietNamese })
    else this.setState({ OUTPUT: this.state.INPUT })
  }
  TranslateToEnglish() {
    let check = false;
    let index ;
    for (let i = 0; i < this.state.dictionary.length; i++) {
      if (this.state.INPUT === this.state.dictionary[i].VietNamese){
        check = true;
        index = i;
      } 
    }
    if (check == true) this.setState({ OUTPUT: this.state.dictionary[index].English })
    else this.setState({ OUTPUT: this.state.INPUT })
  }
  render() {
    return (

      <View style={styles.container}>

        <TextInput
          placeholder="Nhập từ cần tra"
          onChangeText={(INPUT) => this.setState({ INPUT })}
          value={this.state.INPUT}
          style={styles.In}
          autoFocus="true"
          keyboardType='default'
        />

        <TouchableOpacity
          onPress={() => this.TranslateToVietNamese()}
          style={styles.buttonVietNam} >
          <Text style={{ color: 'white' }}>
            Tiếng Việt
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.TranslateToEnglish()}
          style={styles.buttonEnglish} >
          <Text style={{ color: 'white' }}>
            English
            </Text>
        </TouchableOpacity>


        <Text
          style={styles.Out}
          editable={false}
          maxLength={200}
          multiline={true}
          numberOfLines={4}
        >
          {this.state.OUTPUT}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#385999',
    padding: 15,
    elevation: 4,
    shadowColor: '#000000',
    shadowRadius: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  In: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: '#385999',
    borderRadius: 10,
    margin: 15,
    padding: 7,
    fontSize: 21,
  },
  Out: {
    height: 200,
    borderWidth: 1,
    borderColor: '#385999',
    width: 300,
    borderRadius: 10,
    margin: 15,
    marginBottom: 30,
    padding: 7,
    fontSize: 21,
  },
  buttonVietNam: {
    width: 300,
    alignItems: 'center',
    backgroundColor: '#385999',
    padding: 15,
    borderRadius: 7,
    margin: 19,
  },
  buttonEnglish: {
    width: 300,
    alignItems: 'center',
    backgroundColor: '#385999',
    padding: 15,
    borderRadius: 7,
    margin: 19,
  },

});
