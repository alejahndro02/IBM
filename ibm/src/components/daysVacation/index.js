import React, {Component} from 'react';
import './daysVacation.css';


class daysVacation extends Component{

  render(){
    return(
        <div className="App-daysVacation">
        <h1>Encuentra tus dias de vacaciones </h1>
        <form> 
          <input
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
        <button type="submit">Buscar</button>
        </form>
      </div>
    );
    }
}

export default daysVacation;