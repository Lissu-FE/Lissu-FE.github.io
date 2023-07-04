import { DefaultTheme, CSSProp } from 'styled-components'

const up = (
  value: 'maximum' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'minimum' | number
): CSSProp => `
    @media only screen and (min-width: ${
      typeof value === 'number' ? value : breakpoints.values[value]
    }px)
  `

const down = (
  value: 'maximum' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'minimum' | number
): CSSProp => `
@media only screen and (max-width: ${
  typeof value === 'number' ? value : breakpoints.values[value]
}px)
`

const between = (
  minValue: 'maximum' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'minimum' | number,
  maxValue: 'maximum' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'minimum' | number
): CSSProp => `
    @media only screen and (min-width: ${
      typeof minValue === 'number' ? minValue : breakpoints.values[minValue]
    }px) and (max-width: ${
  typeof maxValue === 'number' ? maxValue : breakpoints.values[maxValue]
}px)
  `

export const breakpoints = {
  values: {
    maximum: 2560,
    xl: 1560,
    lg: 1400,
    md: 1360,
    sm: 1040,
    xs: 600,
    minimum: 360
  },
  up,
  down,
  between
}

const lightColor = {
  background_color: '#FFFFFF',

  white: '#FFFFFF',
  black: '#000000',

  gray_25: '#FCFCFC',
  gray_50: '#FBFBFB',
  gray_100: '#F5F5F5',
  gray_200: '#E6E6E6',
  gray_300: '#CFCFCF',
  gray_400: '#9E9E9E',
  gray_500: '#7A7A7A',
  gray_600: '#676767',
  gray_700: '#545454',
  gray_800: '#393939',
  gray_900: '#1A1A1A',

  error_25: '#FFFBFA',
  error_50: '#FEF3F2',
  error_100: '#FEE4E2',
  error_200: '#FECDCA',
  error_300: '#FDA29B',
  error_400: '#F97066',
  error_500: '#F04438',
  error_600: '#D92D20',
  error_700: '#B42318',
  error_800: '#912018',
  error_900: '#7A271A',

  warning_25: '#FFFCF5',
  warning_50: '#FFFAEB',
  warning_100: '#FEF0C7',
  warning_200: '#FEDF89',
  warning_300: '#FEC84B',
  warning_400: '#FDB022',
  warning_500: '#F79009',
  warning_600: '#DC6803',
  warning_700: '#B54708',
  warning_800: '#93370D',
  warning_900: '#7A2E0E',

  success_25: '#F6FEF9',
  success_50: '#ECFDF3',
  success_100: '#D1FADF',
  success_200: '#A6F4C5',
  success_300: '#6CE9A6',
  success_400: '#32D583',
  success_500: '#12B76A',
  success_600: '#039855',
  success_700: '#027A48',
  success_800: '#05603A',
  success_900: '#054F31',

  information_25: '#F5FAFF',
  information_50: '#EFF8FF',
  information_100: '#D1E9FF',
  information_200: '#B2DDFF',
  information_300: '#84CAFF',
  information_400: '#53B1FD',
  information_500: '#2E90FA',
  information_600: '#1570EF',
  information_700: '#175CD3',
  information_800: '#1849A9',
  information_900: '#194185'
}

const darkColor = {
  background_color: '#141414',

  white: '#FFFFFF',
  black: '#000000',

  gray_25: '#101828',
  gray_50: '#1A1A1A',
  gray_100: '#393939',
  gray_200: '#676767',
  gray_300: '#7A7A7A',
  gray_400: '#9E9E9E',
  gray_500: '#CFCFCF',
  gray_600: '#E6E6E6',
  gray_700: '#F5F5F5',
  gray_800: '#FBFBFB',
  gray_900: '#FCFCFC',

  error_25: '#7A271A',
  error_50: '#912018',
  error_100: '#B42318',
  error_200: '#D92D20',
  error_300: '#F04438',
  error_400: '#F97066',
  error_500: '#FDA29B',
  error_600: '#FECDCA',
  error_700: '#FEE4E2',
  error_800: '#FEF3F2',
  error_900: '#FFFBFA',

  warning_25: '#7A2E0E',
  warning_50: '#93370D',
  warning_100: '#B54708',
  warning_200: '#DC6803',
  warning_300: '#F79009',
  warning_400: '#FDB022',
  warning_500: '#FEC84B',
  warning_600: '#FEDF89',
  warning_700: '#FEF0C7',
  warning_800: '#FFFAEB',
  warning_900: '#FFFCF5',

  success_25: '#054F31',
  success_50: '#05603A',
  success_100: '#027A48',
  success_200: '#039855',
  success_300: '#12B76A',
  success_400: '#32D583',
  success_500: '#6CE9A6',
  success_600: '#A6F4C5',
  success_700: '#D1FADF',
  success_800: '#ECFDF3',
  success_900: '#F6FEF9',

  information_25: '#194185',
  information_50: '#1849A9',
  information_100: '#175CD3',
  information_200: '#1570EF',
  information_300: '#2E90FA',
  information_400: '#53B1FD',
  information_500: '#84CAFF',
  information_600: '#B2DDFF',
  information_700: '#D1E9FF',
  information_800: '#EFF8FF',
  information_900: '#F5FAFF'
}

const typography = {
  display_2xl: {
    fontSize: '4.5rem',
    lineHeight: '5.625rem'
  },
  display_xl: {
    fontSize: '3.75rem',
    lineHeight: '4.625rem'
  },
  display_lg: {
    fontSize: '3rem',
    lineHeight: '3.75rem'
  },
  display_md: {
    fontSize: '2.25rem',
    lineHeight: '2.75rem'
  },
  display_sm: {
    fontSize: '1.875rem',
    lineHeight: '2.375rem'
  },
  display_xs: {
    fontSize: '1.5rem',
    lineHeight: '2rem'
  },
  text_xl: {
    fontSize: '1.25rem',
    lineHeight: '1.875rem'
  },
  text_lg: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem'
  },
  text_md: {
    fontSize: '1rem',
    lineHeight: '1.5rem'
  },
  text_sm: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem'
  },
  text_xs: {
    fontSize: '0.75rem',
    lineHeight: '1.25rem'
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900
  }
}

const figure = 0.5

const shadow = {
  xs: '0px 1px 2px rgba(26, 26, 26, 0.05)',
  sm: '0px 1px 3px rgba(26, 26, 26, 0.1), 0px 1px 2px rgba(26, 26, 26, 0.06)',
  md: '0px 4px 8px -2px rgba(26, 26, 26, 0.1), 0px 2px 4px -2px rgba(26, 26, 26, 0.06)',
  lg: '0px 12px 16px -4px rgba(26, 26, 26, 0.1), 0px 4px 6px -2px rgba(26, 26, 26, 0.05)',
  xl: '0px 20px 24px -4px rgba(26, 26, 26, 0.1), 0px 8px 8px -4px rgba(26, 26, 26, 0.04)',
  xxl: '0px 24px 48px -12px rgba(26, 26, 26, 0.25)',
  xxxl: '0px 32px 64px -12px rgba(26, 26, 26, 0.2)'
}

const pointer = {
  cursor: 'pointer',
  userSelect: 'none',
  '&:focus': {
    outline: 'none'
  }
}

const focusRingLight = {
  gray_100: `0px 0px 0px 4px ${lightColor.gray_100}`,
  gray_100_xs: `0px 1px 2px rgba(40, 40, 40, 0.05), 0px 0px 0px 4px ${lightColor.gray_100}`,
  gray_100_sm: `0px 1px 3px rgba(40, 40, 40, 0.1), 0px 1px 2px rgba(40, 40, 40, 0.06), 0px 0px 0px 4px ${lightColor.gray_100}`,
  error_100: `0px 0px 0px 4px ${lightColor.error_100}`,
  error_100_xs: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${lightColor.error_100}`,
  error_600_xs: `0px 0px 0px 4px ${lightColor.error_900}`,
  gray_600: `0px 0px 0px 4px ${lightColor.gray_600}`,
  gray_700: `0px 0px 0px 4px ${lightColor.gray_700}`,
  success_500: `0px 0px 0px 4px ${lightColor.success_500}`,
  information_500: `0px 0px 0px 4px ${lightColor.information_500}`,
  information_600: `0px 0px 0px 4px ${lightColor.information_600}`
}

const focusRingDark = {
  gray_100: `0px 0px 0px 4px ${lightColor.gray_700}`,
  gray_100_xs: `0px 1px 2px rgba(40, 40, 40, 0.05), 0px 0px 0px 4px ${lightColor.gray_700}`,
  gray_100_sm: `0px 1px 3px rgba(40, 40, 40, 0.1), 0px 1px 2px rgba(40, 40, 40, 0.06), 0px 0px 0px 4px ${lightColor.gray_700}`,
  error_100: `0px 0px 0px 4px ${darkColor.error_25}`,
  error_100_xs: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${darkColor.error_25}`,
  error_600_xs: `0px 0px 0px 4px ${darkColor.error_600}`,
  gray_600: `0px 0px 0px 4px ${darkColor.gray_600}`,
  gray_700: `0px 0px 0px 4px ${darkColor.gray_700}`,
  success_500: `0px 0px 0px 4px ${darkColor.success_300}`,
  information_500: `0px 0px 0px 4px ${darkColor.information_500}`,
  information_600: `0px 0px 0px 4px ${darkColor.information_600}`
}

const blurLight = {
  sm: {
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(8px)'
  },
  md: {
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(16px)'
  },
  lg: {
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(24px)'
  },
  xl: {
    background: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(40px)'
  }
}

const blurDark = {
  sm: {
    background: 'rgba(16, 24, 40, 0.6)',
    backdropFilter: 'blur(8px)'
  },
  md: {
    background: 'rgba(16, 24, 40, 0.6)',
    backdropFilter: 'blur(16px)'
  },
  lg: {
    background: 'rgba(16, 24, 40, 0.6)',
    backdropFilter: 'blur(24px)'
  },
  xl: {
    background: 'rgba(16, 24, 40, 0.6)',
    backdropFilter: 'blur(40px)'
  }
}

const spacing = {
  0: 0,
  2: '0.125rem',
  4: '0.25rem',
  6: '0.375rem',
  8: '0.5rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  24: '1.5rem',
  26: '26px',
  28: '1.75rem',
  32: '2rem',
  36: '2.25rem',
  40: '2.5rem',
  44: '2.75rem',
  48: '3rem',
  56: '3.5rem',
  60: '3.75rem',
  64: '4rem',
  80: '5rem',
  96: '96px',
  120: '7.5rem',
  160: '160px',
  360: '360px'
}

const defalutTheme = {
  toRem: (value) =>
    typeof value === 'number' ? `${(value / 16).toFixed(3)}rem` : value,
  breakpoints,
  typography,
  shadow,
  figure,
  pointer,
  spacing
}

export const lightTheme: DefaultTheme = {
  ...defalutTheme,
  theme: 'light',
  color: lightColor,
  focus_ring: focusRingLight,
  blur: blurLight
}

export const darkTheme: DefaultTheme = {
  ...defalutTheme,
  theme: 'dark',
  color: darkColor,
  focus_ring: focusRingDark,
  blur: blurDark
}
