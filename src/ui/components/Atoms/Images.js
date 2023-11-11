export const image = props => {
    const images = [
        "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/08/26/20/30/hotel-1623064_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/07/14/07/18/greece-844269_1280.jpg", "https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596_1280.jpg", "https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_1280.jpg", "https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_1280.jpg", "https://cdn.pixabay.com/photo/2014/07/05/08/21/pool-384573_640.jpg", "https://cdn.pixabay.com/photo/2017/06/11/12/33/swimming-2392283_640.jpg" 
      ]
      const randomImage = images[Math.floor(Math.random() * images.length)]
    
    return randomImage
  }
  





   