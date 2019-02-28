import React, { Component } from 'react'
class Booklist extends Component {
  render () {
    return (
      <div>
        <tr>
          <td>{author.books.title}</td>
          <td>`${author.first_name} ${author.last_name}`</td>
          <td>
            <button className='btn' style={{ backgroundColor: 'blue' }} />
          </td>
        </tr>
        <tr>
          <td>I SHOULD BE ANOTHER BOOK NAME</td>
          <td>I SHOULD BE A STRING OF THIS OTHER BOOK'S AUTHORS</td>
          <td>
            <button className='btn' style={{ backgroundColor: 'red' }} />
          </td>
        </tr>
      </div>
    )
  }
}

export default Booklist
