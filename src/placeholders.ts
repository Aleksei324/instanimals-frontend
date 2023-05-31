import { adsParams, postParams, stateParams } from "./helpers"


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
    pic: '/placeholders/profile-photo-other.jpg',
    desc: 'Perrito de 1 añito muy amigable y no tan juicioso',
    raza: 'Perro',
    edad: 1
  },
  {
    userID: '2121337',
    tipo: 'USER',
    name: 'Orion',
    pic: '/placeholders/profile-photo-other2.png',
    desc: 'Doberman de 4 añitos muy cariñoso, muy amigable y juicioso',
    raza: 'Perro',
    edad: 4
  },
  {
    userID: '3121335',
    tipo: 'VET',
    name: 'NaranjasLab',
    pic: '/placeholders/profile-photo-vet.png',
    desc: '¡somos expertos en el cuidado de tu mascota!',
    nit: '1322759335'
  },
  {
    userID: '3121336',
    tipo: 'VET',
    name: 'Doggo Industries',
    pic: '/placeholders/profile-photo-vet2.png',
    desc: '¡Tambien somos expertos en el cuidado de las mascotas!',
    nit: '1222123334'
  }
]


export const placeholderPosts: postParams[] = [
  {
    postID: '1',
    user: {
      userID: placeholderProfiles[2].userID,
      name: placeholderProfiles[2].name,
      pic: placeholderProfiles[2].pic
    },
    pic: '/placeholders/post-photo-5.jpg',
    desc: 'Orion es un amor de perrito',
    likes: 72,
    liked: true
  },
  {
    postID: '2',
    user: {
      userID: placeholderProfiles[1].userID,
      name: placeholderProfiles[1].name,
      pic: placeholderProfiles[1].pic
    },
    pic: '/placeholders/post-photo-1.jpg',
    desc: 'jajaja mira ese gato',
    likes: 500,
    liked: false
  },
  {
    postID: '3',
    user: {
      userID: placeholderProfiles[0].userID,
      name: placeholderProfiles[0].name,
      pic: placeholderProfiles[0].pic
    },
    pic: '/placeholders/post-photo-6.png',
    desc: 'El gato de mi prima es todo bello',
    likes: 50,
    liked: false
  },
  {
    postID: '4',
    user: {
      userID: placeholderProfiles[1].userID,
      name: placeholderProfiles[1].name,
      pic: placeholderProfiles[1].pic
    },
    pic: '/placeholders/post-photo-3.jpg',
    desc: 'hoy en la mañanita me encontre ese gatito jeje',
    likes: 400,
    liked: true
  },
  {
    postID: '5',
    user: {
      userID: placeholderProfiles[0].userID,
      name: placeholderProfiles[0].name,
      pic: placeholderProfiles[0].pic
    },
    pic: '/placeholders/post-photo-4.jpg',
    desc: 'Mi otro hijito anda descansando en su cesped favorito',
    likes: 550,
    liked: false
  },
  {
    postID: '6',
    user: {
      userID: placeholderProfiles[1].userID,
      name: placeholderProfiles[1].name,
      pic: placeholderProfiles[1].pic
    },
    pic: '/placeholders/post-photo-2.jpg',
    desc: 'siempre levantado y listo para arañar muebles',
    likes: 60,
    liked: false
  }
]


export const placeholderAds: adsParams[] = [
  {
    postID: '1',
    user: {
      userID: placeholderProfiles[3].userID,
      name: placeholderProfiles[3].name
    },
    pic: '/placeholders/ad-photo-2.png',
    name: 'Juguete para perro tipo Kong',
    price: 15000,
    bought: false
  },
  {
    postID: '2',
    user: {
      userID: placeholderProfiles[4].userID,
      name: placeholderProfiles[4].name
    },
    pic: '/placeholders/ad-photo-3.png',
    name: 'Comida para perro marca adulto',
    price: 11000,
    bought: false
  },
  {
    postID: '3',
    user: {
      userID: placeholderProfiles[3].userID,
      name: placeholderProfiles[3].name
    },
    pic: '/placeholders/ad-photo-5.png',
    name: 'Collar para perro',
    price: 9000,
    bought: false
  },
  {
    postID: '4',
    user: {
      userID: placeholderProfiles[3].userID,
      name: placeholderProfiles[3].name
    },
    pic: '/placeholders/ad-photo-1.png',
    name: 'Peluche de perrito',
    price: 9000,
    bought: false
  },
  {
    postID: '5',
    user: {
      userID: placeholderProfiles[4].userID,
      name: placeholderProfiles[4].name
    },
    pic: '/placeholders/ad-photo-4.png',
    name: 'Alimento vegetariano para gatitos',
    price: 16000,
    bought: false
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
    name: 'Apri',
    text: 'Graciassss'
  },
  {
    name: 'Apolo',
    text: 'me encanta <3'
  },
  {
    name: 'Orion',
    text: 'Gracias por sus comentarios'
  }
]
