import React, { Component } from 'react'

class ParentChild extends Component {
  render() {
    return (
      <div>
        <div className='myFeedBack'>    
            {this.props.FeedBack.map((item)=>{
                return(
                    <h4>Name: {item.name} | Department: {item.department} | Rating: {item.rating}</h4>
                    )
                })}
        </div>

        <button className='btn btn2' onClick={this.props.Tf}>Go Back</button>
      </div>
    )
  }
}

export default ParentChild;

