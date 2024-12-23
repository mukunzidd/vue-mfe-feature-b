declare module '@mknz/vue-mfe-wrapper' {
  import type { Component } from 'vue'

  export interface Feature {
    name: string
    components: Record<string, Component>
  }

  export interface FrameworkConfig {
    features: Feature[]
  }

  export const FrameworkWrapper: Component
}
