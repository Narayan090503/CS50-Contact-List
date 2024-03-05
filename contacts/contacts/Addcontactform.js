import React from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth:100,
    marginTop:20,
    marginHorizontal:20,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius: 3,
  },
});

export default class Addcontactform extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  };
  componentDidUpdate(prevProps, prevState){
    if(this.state.name!== prevState.name || this.state.phone!== prevState.phone)
    this.validateForm()
  }

  gethandler =key =>val => {
      this.setState({[key]: val})
  }

  handleNameChange=this.gethandler('name')
  handlePhoneChange=this.gethandler('phone')

  /*handleNameChange = (name) => {
    this.setState({ name });
  };*/

  handlePhoneChange = (phone) => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({ phone });
    }
  };

  validateForm = () =>{
    console.log(this.state)
    const names=this.state.name.split(' ')
    if(+this.state.phone >=0 && this.state.phone.length===10 && names.length >=2 && names[1] && names[0]){
     this.setState({isFormValid: true})
    }else {
     this.setState({isFormValid: false})
    }
  }

  validateForm2 = () =>{
    if(+this.state.phone >=0 && this.state.phone.length===10 && this.state.name.length >=3){
      return true
    }else {
      return false
    }
  }
  handleSubmit = () => {
      this.props.onSubmit(this.state);
  };

  render() {
    console.warn('This is also warning')
    return (
      <KeyboardAvoidingView behavior="padding" style={{ paddingTop: 20 }}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.gethandler('name')}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.gethandler('phone')}
          placeholder="Phone"
        />
        <Button title="Add Contact" onPress={this.handleSubmit} disabled={!this.state.isFormValid}
        />
      </KeyboardAvoidingView>
    );
  }
}
