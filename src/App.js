import React, { Component } from 'react'

// Data
import authors from './data'

// Components
import Sidebar from './Sidebar'
import AuthorsList from './AuthorsList'
import AuthorDetails from './AuthorDetail'

class App extends Component {
  state = {
    currentAuthor: null,
    filterAuth: authors
  }
  selectAuthor = author => {
    this.setState({ currentAuthor: author })
  }
  unselectAuthor = author => {
    this.setState({ currentAuthor: null })
  }

  filterAuthors = query => {
    let myfilter = authors.filter(author => author.first_name.includes(query))
    this.setState({ filterAuth: myfilter })
  }

  render () {
    let getlist = () => {
      if (this.state.currentAuthor) {
        return <AuthorDetails author={this.state.currentAuthor} />
      } else {
        return (
          <AuthorsList
            authors={this.state.filterAuth}
            selectAuthor={this.selectAuthor}
            filterAuthors={this.filterAuthors}
          />
        )
      }
    }

    return (
      <div id='app' className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className='content col-10'>{getlist()}</div>
        </div>
      </div>
    )
  }
}

export default App
