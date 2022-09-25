import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CartContextProvider } from "./contexts/CoffeCartContext"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { palette } from "./theme/palette"

function App() {
  return (
    <ThemeProvider theme={palette}> 
      <GlobalStyle/>
      <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
