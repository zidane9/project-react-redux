import React from 'react';
import { connect } from 'react-redux'

import Card from './Card';
import logo from '../logo.svg';
import { filterProfile, filterOtherCards } from '../selectors';

const styles = {
  loading: {
    animation: 'App-logo-spin infinite 1s linear',
    height: 200
  }
}

class ListCard extends React.Component {

  render(){
    const cards = filterOtherCards(this.props.cards, this.props.profile.otherCards);
    return (
      <div>
      {cards.length === 0 && <img src={logo} style={styles.loading} alt="logo" />}
      <ul>
        { cards.map((card) => {
          // console.log(item);
          return (
          <Card key={card.id} otherCard={card} ></Card>
          )
        })
        }
      </ul>
      </div>
    )
  }

}



const mapStateToProps = (state) => {
  return {
    profile: filterProfile(state.cards, state.user.username),
    cards: state.cards
  }
}


export default connect(mapStateToProps, null)(ListCard);
