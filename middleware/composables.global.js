export default defineNuxtRouteMiddleware(async (to, from) => {
  const { setSeo } = useSeo()
  setSeo(to)

  const { setTransition } = useTransition()
  setTransition(from, to)
})