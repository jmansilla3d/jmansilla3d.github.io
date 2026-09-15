const projects = [
  {
    "title": "Game of Thrones",
    "year": "2017",
    "category": "Television",
    "image": "artstation-got.jpg",
    "alt": "Game of Thrones — cover from Javier Mansilla’s ArtStation",
    "note": "Project and cover published in Javier Mansilla’s ArtStation portfolio. Platform / company: HBO.",
    "source": "https://www.artstation.com/artwork/0lL6NV",
    "company": "HBO"
  },
  {
    "title": "Halo",
    "year": "2024",
    "category": "Television · Season 2",
    "image": "artstation-halo.jpg",
    "alt": "Halo — cover from Javier Mansilla’s ArtStation",
    "note": "Project and cover published in Javier Mansilla’s ArtStation portfolio. Platform / company: Paramount+.",
    "source": "https://www.artstation.com/artwork/a0d1xk",
    "company": "Paramount+"
  },
  {
    "title": "John Wick: Chapter 3 – Parabellum",
    "year": "2019",
    "category": "Feature film",
    "image": "artstation-john-wick-3.jpg",
    "alt": "John Wick: Chapter 3 – Parabellum — cover from Javier Mansilla’s ArtStation",
    "note": "Project and cover published in Javier Mansilla’s ArtStation portfolio. Platform / company: Lionsgate.",
    "source": "https://www.artstation.com/artwork/y4RRYn",
    "company": "Lionsgate"
  },
  {
    "title": "A Monster Calls",
    "year": "2016",
    "category": "Feature film",
    "image": "artstation-monster-calls.jpg",
    "alt": "A Monster Calls — cover from Javier Mansilla’s ArtStation",
    "note": "Project and cover published in Javier Mansilla’s ArtStation portfolio. Platform / company: Focus Features. Historical role: Lighting and Creature FX Lead.",
    "source": "https://www.artstation.com/artwork/JrkVl0",
    "company": "Focus Features"
  },
  {
    "title": "Warcraft",
    "year": "2016",
    "category": "Feature film",
    "image": "warcraft.jpg",
    "alt": "Warcraft — production image",
    "note": "CG Supervisor credit listed in public film crew records.",
    "source": "https://www.moviefone.com/movie/warcraft/20069325/credits/",
    "company": "Legendary Pictures"
  },
  {
    "title": "See",
    "year": "2021",
    "category": "Television · Season 2",
    "image": "artstation-see.jpg",
    "alt": "See — cover from Javier Mansilla’s ArtStation",
    "note": "Project and cover published in Javier Mansilla’s ArtStation portfolio. Platform / company: Apple TV+.",
    "source": "https://www.artstation.com/artwork/L4OxdP",
    "company": "Apple TV+"
  },
  {
    "title": "Locke & Key",
    "year": "2020",
    "category": "Television · Season 1",
    "image": "artstation-locke-key.jpg",
    "alt": "Locke & Key — cover from Javier Mansilla’s ArtStation",
    "note": "Project and cover published in Javier Mansilla’s ArtStation portfolio. Platform / company: Netflix.",
    "source": "https://www.artstation.com/artwork/WXYYRD",
    "company": "Netflix"
  },
  {
    "title": "3 Body Problem",
    "year": "2024",
    "category": "Television",
    "image": "3body-poster.png",
    "alt": "3 Body Problem — official poster supplied by Javier Mansilla",
    "note": "VFX Supervisor and CFX Artist, El Ranchito. Poster supplied by Javier Mansilla.",
    "source": "https://www.imdb.com/name/nm2338054/",
    "company": "Netflix"
  },
  {
    "title": "One Hundred Years of Solitude",
    "year": "2024",
    "category": "Television",
    "company": "Netflix",
    "image": "artstation-solitude.jpg",
    "alt": "One Hundred Years of Solitude — portfolio cover",
    "note": "Selected visual effects work. Project and cover from Javier Mansilla’s ArtStation portfolio.",
    "source": "https://www.artstation.com/artwork/eR392G"
  },
  {
    "title": "Lost in Space",
    "year": "2018–2021",
    "category": "Television",
    "company": "Netflix",
    "image": "artstation-lost.jpg",
    "alt": "Lost in Space — portfolio cover",
    "note": "Selected visual effects work. Project and cover from Javier Mansilla’s ArtStation portfolio.",
    "source": "https://www.artstation.com/artwork/WXYk1X"
  },
  {
    "title": "Shadow and Bone",
    "year": "2021–2023",
    "category": "Television",
    "company": "Netflix",
    "image": "artstation-shadow.jpg",
    "alt": "Shadow and Bone — portfolio cover",
    "note": "Selected visual effects work. Project and cover from Javier Mansilla’s ArtStation portfolio.",
    "source": "https://www.artstation.com/artwork/8BODGG"
  },
  {
    "title": "Society of the Snow",
    "year": "2023",
    "category": "Feature film",
    "company": "Netflix",
    "image": "society-poster.png",
    "alt": "Society of the Snow — portfolio cover",
    "note": "Selected visual effects work. Poster supplied by Javier Mansilla.",
    "source": "https://www.imdb.com/name/nm2338054/"
  }
];
const animationProjects = [
  {
    "title": "Donkey Xote",
    "year": "2007",
    "category": "Animated feature · Filmax",
    "image": "donkey-xote.webp",
    "alt": "Donkey Xote — production image",
    "note": "Lead Lighting / Senior Look Development, as credited on Javier’s Behance project. Film year verified with Filmax. Stills supplied from Javier’s Donkey Xote archive.",
    "source": "https://www.behance.net/gallery/8036523/Donkey-Xote-Film",
    "gallery": [
      "donkey-xote-02.webp",
      "donkey-xote-03.webp"
    ]
  },
  {
    "title": "Nocturna",
    "year": "2007",
    "category": "Animated feature · Filmax",
    "image": "nocturna.jpg",
    "alt": "Nocturna — production image",
    "note": "Lead Lighting, as listed in the public crew record. Film year and Filmax association verified with the distributor’s official film page.",
    "source": "https://www.filmax.com/produccion/nocturna-una-aventura-magica/189"
  },
  {
    "title": "Stargate Unleashed",
    "year": "2013",
    "category": "Cinematic trailer",
    "image": "stargate.jpg",
    "alt": "Stargate Unleashed — production image",
    "note": "CGI Supervisor / Lighting Supervisor. Stargate SG-1 Unleashed cinematic trailer, published in Javier’s Behance portfolio on 4 April 2013.",
    "source": "https://www.behance.net/gallery/7980427/Stargate-Unleashed-Cinematic-Trailer"
  },
  {
    "title": "No Pets Allowed",
    "year": "2013",
    "category": "Animated film project · Teaser",
    "image": "no-pets.jpg",
    "alt": "No Pets Allowed — production image",
    "note": "CGI Supervisor / Lighting Supervisor. Teaser for an animated film project, published in Javier’s Behance portfolio on 4 April 2013. The date refers to the portfolio publication, not a theatrical release.",
    "source": "https://www.behance.net/gallery/7982181/No-Pets-Allowed-Film-Trailer"
  }
];
