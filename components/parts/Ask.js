import React from 'react'
import Display from './Display'

class Ask extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      choices: [],
      answer: undefined
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
    this.setState({ 
      choices: choices,
      answer: sessionStorage.answer
    })
  }
  
  selectAnswer(choice) {
    this.setState({ answer: choice })
    sessionStorage.answer = choice
    this.props.emit('answer', {
      question: this.props.question,
      choice: choice
    })
  }
  
  render () {
    return (
      <div id="currentQuestion">
        <Display if={!this.state.answer} >
          <h2>{this.props.question.q}</h2>
          <div className="row">
          {this.state.choices.map((choice, i) => {
            let buttonTypes = ['primary', 'success', 'warning', 'danger']
            return (
              <button 
                key={i}
                className={"col-xs-12 col-sm-6 btn btn-" + buttonTypes[i]}
                onClick={this.selectAnswer.bind(this, choice)}
              >
                {choice} : {this.props.question[choice]}
              </button>
            )
          })}
          </div>
        </Display>
        <Display if={this.state.answer} >
          <h3>You Answered: {this.state.answer}</h3>
          <p>{this.props.question[this.state.answer]}</p>
        </Display>
      </div>
    )
  }
}

export default Ask