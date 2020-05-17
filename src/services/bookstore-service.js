
export default class BookstoreService {
  
  data = [
    {
      id: 1,
      title: "Site Reliability Engineering",
      author: "Michael T. Nygard",
      price: "34",
      coverImage: "https://cv4.litres.ru/pub/c/elektronnaya-kniga/cover_330/32481440-andrey-kurpatov-krasnaya-tabletka-posmotri-pravde-v-glaza.jpg"
    },
    {
      id: 2,
      title: "Site Reliability Engineering",
      author: "Michael T. Nygard",
      price: "34",
      coverImage: "https://cv4.litres.ru/pub/c/elektronnaya-kniga/cover_330/32481440-andrey-kurpatov-krasnaya-tabletka-posmotri-pravde-v-glaza.jpg"
    }
  ]

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 600)
    })
  }



}