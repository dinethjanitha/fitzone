export const isTokenValid = () => {
  const token = localStorage.getItem('token')
  if (!token) return false

  const payload = JSON.parse(atob(token.split('.')[1]))
  const exp = payload.exp
  const now = Date.now() / 1000

  console.log('payload is: ', payload.id)

  return exp > now
}
