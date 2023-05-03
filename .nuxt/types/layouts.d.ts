import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "home"
declare module "/Users/motobecane/Documents/DEV/_LEGACY/vue-composables/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}