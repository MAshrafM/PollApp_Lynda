import React from 'react'
import Display from './parts/Display'

const BarChart = require('react-d3-components').BarChart

export class Board extends React.Component {
  constructor (props) {
    super(props)
    this.barGraphData = this.barGraphData.bind(this)
  }
  
  barGraphData(results) {
    return Object.keys(results).map( choice => {
      return {
        label: choice,
        value: results[choice]
      }
    })
  }
  
  render () {
    let chartSeries = [
      {
        field: 'label',
        name: 'Answer'
      }
    ],
    x = function(d) {
      return d.value;
    }
    console.log(this.barGraphData(this.props.results))
    
    return (
      <div>
        <Display if={this.props.status === 'connected' && this.props.currentQuestion}>
          <div id="scoreboard">
          <BarChart 
            data={this.barGraphData(this.props.results)}
            title={this.props.currentQuestion.q}
            height={window.innerHeight * 0.6}
            width={window.innerWidth * 0.9}
            chartSeries={chartSeries}
            x={x}
          />
          </div>
        </Display>
        <Display if={this.props.status === 'connected' && !this.props.currentQuestion}>
          <h3>Awaiting a Question...</h3>
        </Display>
      </div>
    )
  }
}

export default Board