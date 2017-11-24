import React from 'react'

class Questions extends React.Component {
  constructor(props){
    super(props)
  }
  
  ask(question) {
    this.props.emit('ask', question)
  }
  
  render() {
    return (
      <div id="questions" className="row">
        <h2>Questions</h2>
        {this.props.questions.map((question, i) => {
          return (
            <div key={i} className="col-xs-12 col-sm-6 col-md-3">
              <span onClick={this.ask.bind(this, question)}>{question.q}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Questions