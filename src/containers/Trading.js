import React from 'react'
import {api} from '../services/api'

class Trading extends React.Component {

state = {
    stockPrices: [],
}


componentDidMount() {
    const token = localStorage.getItem("token")
    if(token){
      api.stockPrices.getStockPrices()
      .then(data => {
        this.setState({stockPrices: data})
      })
    }
  }

filterPortfolios = () => {
    console.log(this.props.currentUser)
}

render() {
    console.log(this.props)
    return (
        <div>
            <h1>
            {this.props.currentUser.id}
            </h1>
        </div>
    );
}

}

export default Trading;