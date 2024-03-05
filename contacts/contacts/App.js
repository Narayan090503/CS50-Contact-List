import React from 'react';
import { Button, SectionList, FlatList, ScrollView,FlatView, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'
import contact, {compareNames} from './contact';
import Row from './Row'
import ContactList from './contactlist' 
import Addcontactform from './Addcontactform'

export default class App extends React.Component {
    state = {
    showcontact: false,
    showForm:false,
    contact:contact,
    }

    addContact = newContact => {
      this.setState(prevState=>({showForm: false, contact: [...prevState.contact, newContact]}))
    }

    togglecontact=()=>{
        this.setState(prevState=>({showcontact:!prevState.showcontact}))
    }
    toggleForm=()=>{
        this.setState(prevState=>({showForm:!prevState.showForm}))
    }


    sort =() =>{
      this.setState(prevState => ({
        contact:[...prevState.contact].sort(compareNames),
      }))
    }
    showForm =() =>{
      this.setState({showForm:true})
    }


renderItem= obj =><Row name={obj.item.name} phone={obj.item.phone}/>
renderSectionHeader=obj=><Text>{obj.section.title}</Text>

  render() {
    if(this.state.showForm) return <Addcontactform onSubmit={this.addContact}/>
      return(
      <View style={styles.container}>
          <Button title="toggle contact" onPress={this.togglecontact} />
          <Button title="Add Contact" onPress={this.toggleForm} />
          {this.state.showcontact && <ContactList contact={this.state.contact}
          />}
      </View>
      );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
})