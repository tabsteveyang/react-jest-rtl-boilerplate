// import axiosInstance from 'src/js/modules/axiosInstance'
// const axios = axiosInstance()

export const getSettings = (payload) => {
  // return axios().get('/getSettings', payload)
  //   .then(res => {
  //     return res
  //   })
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title: 'Title fetched from dummy API'
      })
    }, 1000)
  })
}
