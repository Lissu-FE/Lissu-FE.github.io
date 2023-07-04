// Copyright (C) 2021 B factory, Inc. All rights reserved

import { useMediaQuery } from 'react-responsive'

import { breakpoints } from '../styles/theme'

export const useUpXMaximum = (): boolean => {
  return useMediaQuery({ minWidth: breakpoints.values.maximum })
}

export const useDownMaximum = (): boolean => {
  return useMediaQuery({ maxWidth: breakpoints.values.maximum })
}

export const useUpXl = (): boolean => {
  return useMediaQuery({ minWidth: breakpoints.values.xl })
}

export const useDownXl = (): boolean => {
  return useMediaQuery({ maxWidth: breakpoints.values.xl })
}

export const useUpLg = (): boolean => {
  return useMediaQuery({ minWidth: breakpoints.values.lg })
}

export const useDownLg = (): boolean => {
  return useMediaQuery({ maxWidth: breakpoints.values.lg })
}

export const useUpMd = (): boolean => {
  return useMediaQuery({ minWidth: breakpoints.values.md })
}

export const useDownMd = (): boolean => {
  return useMediaQuery({ maxWidth: breakpoints.values.md })
}

export const useUpSm = (): boolean => {
  return useMediaQuery({ minWidth: breakpoints.values.sm })
}

export const useDownSm = (): boolean => {
  return useMediaQuery({ maxWidth: breakpoints.values.sm })
}

export const useUpXs = (): boolean => {
  return useMediaQuery({ minWidth: breakpoints.values.xs })
}

export const useDownXs = (): boolean => {
  return useMediaQuery({ maxWidth: breakpoints.values.xs })
}

export const useUpCustom = (value: number): boolean => {
  return useMediaQuery({ minWidth: value })
}

export const useDownCustom = (value: number): boolean => {
  return useMediaQuery({ maxWidth: value })
}
