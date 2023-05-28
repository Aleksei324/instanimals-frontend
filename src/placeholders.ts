import { adsParams, stateParams } from "./helpers"


export const placeholderProfiles = [
  {
    userID: '2121335',
    tipo: 'USER',
    name: 'Apri',
    pic: '/placeholders/profile-photo.jpg',
    desc: 'Gatito de 2 añitos hiperactivo',
    raza: 'Gato',
    edad: 2
  },
  {
    userID: '2121336',
    tipo: 'USER',
    name: 'Anacleto',
    pic: '/placeholders/profile-photo-others.jpg',
    desc: 'Perrito de 1 añito muy cariñoso, muy amigable y juicioso',
    raza: 'Perro',
    edad: 1
  },
  {
    userID: '2121337',
    tipo: 'VET',
    name: 'NaranjasLab',
    pic: '/placeholders/profile-photo-vet.png',
    desc: '¡somos expertos en el cuidado de tu mascota!',
    nit: '3243655465633532432453563'
  }
]


export const placeholderPosts = [
  {
    postID: '1',
    user: {
      userID: placeholderProfiles[0].userID,
      name: placeholderProfiles[0].name,
      pic: placeholderProfiles[0].pic
    },
    pic: '/placeholders/post-photo-5.jpg',
    desc: 'Orion es un amor de perrito',
    likes: 72
  },
  {
    postID: '2',
    user: {
      userID: placeholderProfiles[1].userID,
      name: placeholderProfiles[1].name,
      pic: placeholderProfiles[1].pic
    },
    pic: '/placeholders/post-photo-1.jpg',
    desc: 'Probando mi nueva cajita',
    likes: 500
  },
  {
    postID: '3',
    user: {
      userID: placeholderProfiles[1].userID,
      name: placeholderProfiles[1].name,
      pic: placeholderProfiles[1].pic
    },
    pic: '/placeholders/post-photo-3.jpg',
    desc: 'Cortecito pal rey que tuve hoy en la mañanita',
    likes: 400
  },
  {
    postID: '4',
    user: {
      userID: placeholderProfiles[0].userID,
      name: placeholderProfiles[0].name,
      pic: placeholderProfiles[0].pic
    },
    pic: '/placeholders/post-photo-4.jpg',
    desc: 'Descansando en mi cesped favorito',
    likes: 550
  },
  {
    postID: '5',
    user: {
      userID: placeholderProfiles[1].userID,
      name: placeholderProfiles[1].name,
      pic: placeholderProfiles[1].pic
    },
    pic: '/placeholders/post-photo-2.jpg',
    desc: 'Levantado y listo para arañar muebles',
    likes: 60
  }
]


export const placeholderAds: adsParams[] = [
  {
    postID: '1',
    user: {
      userID: placeholderProfiles[2].userID,
      name: placeholderProfiles[2].name
    },
    pic: '/placeholders/post-photo-1.jpg',
    name: 'Juguete para gato tipo pez',
    price: 15000
  },
  {
    postID: '2',
    user: {
      userID: placeholderProfiles[2].userID,
      name: placeholderProfiles[2].name
    },
    pic: '/placeholders/post-photo-2.jpg',
    name: 'Comida para gato marca adulto',
    price: 11000
  },
  {
    postID: '3',
    user: {
      userID: placeholderProfiles[2].userID,
      name: placeholderProfiles[2].name
    },
    pic: '/placeholders/post-photo-3.jpg',
    name: 'Collar para perro',
    price: 9000
  },
  {
    postID: '4',
    user: {
      userID: placeholderProfiles[2].userID,
      name: placeholderProfiles[2].name
    },
    pic: '/placeholders/post-photo-4.jpg',
    name: 'Alimento vegetariano para gatitos',
    price: 16000
  }
]


export const placeholderComments: stateParams[] = [
  {
    name: 'Juanjo',
    text: 'Hey, que tal?'
  },
  {
    name: 'Aurelio',
    text: 'precioso'
  },
  {
    name: 'Matru',
    text: 'Graciassss'
  },
  {
    name: 'Apolo',
    text: 'me encanta <3'
  },
  {
    name: 'Juanjo',
    text: 'Hey, que tal?'
  },
  {
    name: 'Aurelio',
    text: 'precioso'
  },
  {
    name: 'Matru',
    text: 'Gracias por sus comentarios'
  },
  {
    name: 'Apolo',
    text: 'me encanta <3'
  },
  {
    name: 'Aurelio',
    text: 'precioso'
  },
  {
    name: 'Apolo',
    text: 'me encanta <3'
  },
  {
    name: 'Juanjo',
    text: 'Hey, que tal?'
  },
  {
    name: 'Aurelio',
    text: 'precioso'
  },
  {
    name: 'Matru',
    text: 'Gracias sfsidufns'
  },
  {
    name: 'Aurelio',
    text: 'precioso'
  },
  {
    name: 'Matru',
    text: 'Gracias por sus comentarios'
  },
  {
    name: 'Apolo',
    text: 'me encanta <3'
  },
  {
    name: 'Matru',
    text: 'Graciasss'
  },
  {
    name: 'Juanjo',
    text: 'Hey, que tal?'
  }
]
