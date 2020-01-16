import React from 'react';
import './App.css';
import {Admin,Resource} from 'react-admin';
import {ListParking,EditParking,CreateParking,ShowParking} from './parking/parking';
import dataProvider from 'ra-data-simple-rest';
// import jsonRestProvider from 'ra-data-fakerest';
// import data from './data/data';

// const NotMyDataProvider = jsonRestProvider(data, true);
class App extends React.Component{
  
  render(){
    const  myDataProvider = dataProvider('http://localhost:8081');
    return (
          <div>
            <Admin dataProvider={myDataProvider}>      
                <Resource name="parkings" list={ListParking} edit={EditParking} show={ShowParking} create={CreateParking}/>
            </Admin>  
          </div>
        );
  }
}
export default App;
