import 'styled-components'
import { palette } from '../theme/palette'

type ThemeType = typeof palette

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}