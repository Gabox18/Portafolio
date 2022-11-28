// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: '#030312',
    secondary: '#bd1b19',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ colors })