import React from 'react';

import DeleteButton from './DeleteButton';


const styles = {
  card : {
    margin: 20,
    /* Add shadows to create the "card" effect */
    boxShadow: '0 4 8 0 rgba(0,0,0,0.2)',
    border: 'solid grey',
    width: 420,
    transition: '0.3s',
    borderRadius: 5 /* 5px rounded corners */
  },
  container: {
    padding: 20
  },
  input: {
    width: '200px'
  }
}

class Item extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const { otherCard } = this.props;
    console.log('---',this.props);
    return (
      <li >
      <center>
      <fieldset style={styles.card}>

        <div style={styles.container}>
        <form >
          <table>
          <tbody>
            <tr>
              <td>Username </td>
              <td><h5>{otherCard.username}</h5></td>
            </tr>
            <tr>
              <td>Name </td>
              <td>
                <h5>{otherCard.name}</h5>
              </td>
            </tr>
            <tr>
              <td>Company </td>
              <td>
                <h5>{otherCard.company}</h5>
              </td>
            </tr>
            <tr>
              <td>Position </td>
              <td>
                <h5>{otherCard.position}</h5>
              </td>
            </tr>
            <tr>
              <td>Email </td>
              <td>
                <h5>{otherCard.email}</h5>
              </td>
            </tr>
            <tr>
              <td>Phone </td>
              <td>
                <h5>{otherCard.phone}</h5>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <DeleteButton deletedId={otherCard.id} />
              </td>
            </tr>
          </tbody>
          </table>
        </form>
        </div>
        </fieldset>
      </center>
      </li>
    )
  }

}



export default Item;
