import React, { Component } from 'react'

// Components
// import Booklist from './Booklist'

class AuthorDetail extends Component {
  render () {
    const selectedAuth = this.props.author
    let bkList = selectedAuth.books.map(book => (
      <tr>
        <td>{book.title}</td>
        <td>
          {selectedAuth.first_name} {selectedAuth.last_name}
        </td>
        <td>
          <button className='btn' style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    ))
    return (
      <div>
        <div>
          <h3>{selectedAuth.first_name + ' ' + selectedAuth.last_name}</h3>
          <img
            src={selectedAuth.imageUrl}
            className={selectedAuth.first_name + ' ' + selectedAuth.last_name}
            alt={selectedAuth.first_name}
          />
        </div>
        <table className='mt-3 table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{bkList}</tbody>
        </table>
      </div>
    )
  }
}

export default AuthorDetail
