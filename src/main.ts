interface MusicItem {
  title: string;
  url: string;
  type: 'bandcamp' | 'youtube';
}

const musicItems: MusicItem[] = [
  {
    title: "Quinteto Vientos Madera 2 - Pintura Abstracta CTA",
    url: "https://arielromano.bandcamp.com/track/quinteto-vientos-madera-2-pintura-abstracta-cta",
    type: "bandcamp"
  },
  {
    title: "Quinteto Vientos Madera 1",
    url: "https://arielromano.bandcamp.com/track/quinteto-vientos-madera-1",
    type: "bandcamp"
  },
  {
    title: "Cinco Piezas para Cuarteto de Cuerdas",
    url: "https://arielromano.bandcamp.com/album/cinco-piezas-para-cuarteto-de-cuerdas",
    type: "bandcamp"
  },
  {
    title: "Desespero",
    url: "https://arielromano.bandcamp.com/track/desespero",
    type: "bandcamp"
  },
  {
    title: "Otros Mundos 2",
    url: "https://arielromano.bandcamp.com/album/otros-mundos-2",
    type: "bandcamp"
  },
  {
    title: "Irregular",
    url: "https://arielromano.bandcamp.com/album/irregular",
    type: "bandcamp"
  },
  {
    title: "Algo Camina",
    url: "https://arielromano.bandcamp.com/track/algo-camina",
    type: "bandcamp"
  }
];

const videoItems: MusicItem[] = [
  {
    title: "Video 1",
    url: "https://youtu.be/5p9cN66mTuE",
    type: "youtube"
  },
  {
    title: "Video 2",
    url: "https://youtu.be/7Z9re5a4pMo",
    type: "youtube"
  }
];

function createBandcampEmbed(url: string): HTMLIFrameElement {
  const iframe = document.createElement('iframe');
  iframe.style.border = '0';
  iframe.style.width = '100%';
  iframe.style.height = '42px';
  iframe.src = url.replace('track', 'EmbeddedPlayer/track').replace('album', 'EmbeddedPlayer/album') + '/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/';
  return iframe;
}

function createYoutubeEmbed(url: string): HTMLIFrameElement {
  const videoId = url.split('v=')[1];
  const iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '315';
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  return iframe;
}

function loadContent() {
  const bandcampContainer = document.querySelector('.bandcamp-container');
  const videoContainer = document.querySelector('.video-container');

  if (bandcampContainer) {
    musicItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'music-item';
      const embed = createBandcampEmbed(item.url);
      div.appendChild(embed);
      bandcampContainer.appendChild(div);
    });
  }

  if (videoContainer) {
    videoItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'video-item';
      const embed = createYoutubeEmbed(item.url);
      div.appendChild(embed);
      videoContainer.appendChild(div);
    });
  }
}

document.addEventListener('DOMContentLoaded', loadContent); 