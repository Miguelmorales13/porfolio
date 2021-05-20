import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242'
    },
    secondary: {
      main: '#757575'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    h1: {
      fontSize: '4.5rem'
    },
    h2: {
      fontSize: '4rem'
    },
    h3: {
      fontSize: '3.8rem'
    }
  }
})

export default theme