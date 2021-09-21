const URL = 'http://maxn.xyz:80/api'

interface tGetData {
  from: string,
  to: string
}

function getData ({ from, to }: tGetData) {
  return GetFetch(`${URL}/full_new_payment/${from}/${to}`)
}
export {
  getData
}

function GetFetch (url: string) {
  return fetch(
    url,
    {
      // mode: 'no-cors',
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    }
  ).then(async (response) => {
    const result = await response.json()
    return JSON.parse(result)
  })
}
