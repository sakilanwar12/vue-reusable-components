import create from 'vue-zustand'

const siteConfig = {
    theme:"light"
}

export const useStore = create(() => ({
    ...siteConfig,
  }))