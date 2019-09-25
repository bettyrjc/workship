import React, { Component } from 'react'

 class showOneComment extends Component {
  render() {
    const { name, body, email}  = this.props.comment;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col s12 ">
              <div className="card">
                {this.props.comment.id}
                <span className="card-title">{name}</span>
                <p className="card-content">
                  {body}
                </p>
                <span>Para comunicarte con {name}, puedes esccribirle al {email}</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default showOneComment;