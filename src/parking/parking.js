import React from 'react';
import {Create,Edit,SimpleForm,TextInput,NumberInput,List,Datagrid, 
    TextField,EditButton,Show,SimpleShowLayout} from 'react-admin';

// import { GMapInput,GMapField } from '@fusionworks/ra-google-maps-input';


export class CreateParking extends React.Component{
    constructor(props){
      super(props);
    }
  //Create,SimpleForm,TextInput,RichTextInput,NumberInput
    render(){
      return(
        <Create {...this.props}>
            <SimpleForm  redirect="show">
                <TextInput source="longitude" />
                <TextInput source="latitude" />
                <TextInput source="title" />
                <TextInput source="description" />
                <TextInput source="address" />              
                <TextInput source="currency" />
                <NumberInput source="price" />
                <NumberInput source="type" />
                <NumberInput source="capacity" />                               
            </SimpleForm>
        </Create>
      )
    }
  
  }
  
  export class EditParking extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
      <Edit {...this.props}>
        <SimpleForm>          
        <TextInput source="longitude" />
                <TextInput   source="latitude" />
                <TextInput   source="title" />
                <TextInput   source="description" />
                <TextInput   source="address" />              
                <TextInput   source="currency" />
                <NumberInput source="price" />
                <NumberInput source="type" />
                <NumberInput source="capacity" />               
        </SimpleForm>
      </Edit>
      )
    }
  
  }
  
  export class ListParking extends React.Component{
    constructor(props){
      super(props);
    }
  
    render(){
      return(
        //List,Datagrid, TextField
      <List {...this.props}>
        <Datagrid rowClick="show">
          <TextField source="latitude" />
          <TextField source="longitude" />
          <TextField source="title" />      
          <TextField source="description"/>
          <TextField source="address" />
          <TextField source="currency" />
          <TextField source="price" />      
          <TextField source="type" />        
          <TextField source="capacity" />
          <EditButton />
        </Datagrid>
       
      </List>
      )
    }
  
  }
  
  export class ShowParking extends React.Component{
    constructor(props){
      super(props);
    }
  
    render(){
      return(
        //List,Datagrid, TextField
      <Show {...this.props}>   
        <SimpleShowLayout>
          <TextField source="latitude" />
          <TextField source="longitude" />
          <TextField source="title" />      
          <TextField source="description"/>
          <TextField source="address" />
          <TextField source="currency" />
          <TextField source="price" />      
          <TextField source="type" />        
          <TextField source="capacity" />        
        </SimpleShowLayout>
      </Show>
      )
    }
  
  }
  