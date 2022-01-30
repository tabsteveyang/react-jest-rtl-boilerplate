// import axios from 'axios'

export const getSettings = (payload) => {
  // return axios.get('/getSettings', payload)
  //   .then(res => {
  //     return res
  //   })

  // use Promise to mimic an api:
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title: 'Title fetched from dummy API'
      })
    }, 1000)
  })
}