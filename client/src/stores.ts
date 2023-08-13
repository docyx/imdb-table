import { writable } from 'svelte/store'
import { COLORBLIND_COLORS, DEFAULT_COLORS } from './constants'
import type { Colors } from './types'

const storedColors = localStorage.getItem('colors')

export const colors = writable<Colors>(
  storedColors ? JSON.parse(storedColors) : DEFAULT_COLORS
)

colors.subscribe((value) => {
  localStorage.setItem('colors', JSON.stringify(value))
})

const storedVersion = localStorage.getItem('version')
const version = storedVersion ? parseInt(storedVersion) : -1

const migrate = (oldVersion: number) => {
  switch (oldVersion) {
    case -1: {
      const oldColors = localStorage.getItem('colors')
      if (!oldColors) return

      // It's the old "colorblind" colors
      if (JSON.parse(oldColors)[0] === 'bg-[#018571]') {
        localStorage.clear()
        colors.set(COLORBLIND_COLORS)
      }

      break
    }
    case 0: {
      const oldDefaultColors = localStorage.getItem('colors')
      if (!oldDefaultColors) return

      if (JSON.parse(oldDefaultColors)[0] === 'bg-green-500') {
        localStorage.clear()
        colors.set(DEFAULT_COLORS)
      }
    }
  }
}

if (version < __LOCALSTORAGE_VERSION__) {
  migrate(version)

  localStorage.setItem('version', JSON.stringify(__LOCALSTORAGE_VERSION__))
}
