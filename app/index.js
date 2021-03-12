import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'

class App extends React.Component {
  constructor(props){
    super(props)

    //allows us to use the state function w/ consumer 
    //so we can get access to the the toggle/theme itself (state)
    this.state = {
        theme: 'light',
        toggleTheme: () => {
          this.setState(( {theme} ) => ({
            theme: theme === 'light' ? 'dark' : 'light'
          }))
        }
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <div className='container'>
            <Nav />

            <Battle />
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)