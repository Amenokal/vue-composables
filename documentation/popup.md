# POPUPS

## usePopup()

```js
import Popup1 from '@/components/popups/Popup1.vue'
import Popup2 from '@/components/popups/Popup2.vue'

const popupComponents = [
  { name: "Popup1", component: Popup1 },
  { name: "Popup2", component: Popup2 },
]

const IS_OPEN = ref(false)
const POPUP_NAME = ref(null)
const POPUP_DATA = ref(null)

const usePopup = () => {

  /**
   * Ouvre une popup rangée dans le dossier @/components/popups
   * @param {*} name - Le nom de la popup à ouvrir
   * @param {*} data - (facultatif) Props à passer
   */
  function openPopup(name, data = {}) {
    if(!popupComponents.find(popup => popup.name === name))
    return console.warn(`usePopup() - ${name} n'est pas une popup enregistrée`)

    POPUP_NAME.value = name
    POPUP_DATA.value = data
    IS_OPEN.value = true
  }

  /**
   * Ferme la popup actuellement ouverte
   */
  function closePopup() {
    IS_OPEN.value = false
  }

  /**
   * Charge le composant ciblé
   * le name passé en paramètre de la méthode openPopup()
   * DOIT correspondre exactement au nom du composant (sans l'extension .vue)
   */
  const popup = computed(() => ({
    component: popupComponents.find(popup => popup.name === POPUP_NAME.value).component,
    data: POPUP_DATA.value,
  }))

  const popupIsOpen = computed(() => IS_OPEN.value )

  function popupInfo() {
    console.info("usePopup() - Infos", {
      popupsEnregistrees: popupComponents,
      nom: POPUP_NAME.value,
      data: POPUP_DATA.value
    })
  }

  return {
    popup,
    popupIsOpen,
    openPopup,
    closePopup,
    popupInfo
  }
}

export default usePopup
```