import { writable } from 'svelte/store'
import { DEFAULT_COLORS } from './constants'
import type { Colors } from './types'

const storedColors = localStorage.getItem('colors')

export const colors = writable<Colors>(
  storedColors ? JSON.parse(storedColors) : DEFAULT_COLORS
)

colors.subscribe((value) =>
  localStorage.setItem('colors', JSON.stringify(value))
)
