import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

/* eslint-disable */
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}