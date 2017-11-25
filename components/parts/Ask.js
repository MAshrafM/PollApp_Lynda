import React from 'react'

class Ask extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      choices: []
    }
    this.setUpChoices = this.setUpChoices.bind(this)
  }
  
  componentWillMount () {
    this.setUpChoices()
  }
  
  componentWillReceiveProps() {
    this.setUpChoices()
  }
  
  setUpChoices () {
    let choices = Object.keys(this.props.question)
    choices.shift()
    this.setState({ choices: choices })
  }
  
  render () {
    return (
      <div id="currentQuestion">
        <h2>{this.props.question.q}</h2>
        <div className="row">
        {this.state.choices.map((choice, i) => {
          let buttonTypes = ['primary', 'success', 'warning', 'danger']
          return (
            <button 
              key={i}
              className={"col-xs-12 col-sm-6 btn btn-" + buttonTypes[i]}
            >
              {choice} : {this.props.question[choice]}
            </button>
          )
        })}
        </div>
      </div>
    )
  }
}

export default Ask