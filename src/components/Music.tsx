import React from 'react'
import { useTranslation } from 'react-i18next'

interface MusicItem {
  title: string;
  url: string;
  id: string;
  type: 'track' | 'album';
}

const musicItems: MusicItem[] = [
  {
    title: "Quinteto Vientos Madera 2 - Pintura Abstracta CTA",
    url: "https://arielromano.bandcamp.com/track/quinteto-vientos-madera-2-pintura-abstracta-cta",
    id: "1313254627",
    type: "track"
  },
  {
    title: "Quinteto Vientos Madera 1",
    url: "https://arielromano.bandcamp.com/track/quinteto-vientos-madera-1",
    id: "1022073116",
    type: "track"
  },
  {
    title: "Cinco Piezas para Cuarteto de Cuerdas",
    url: "https://arielromano.bandcamp.com/album/cinco-piezas-para-cuarteto-de-cuerdas",
    id: "1728600953",
    type: "album"
  },
  {
    title: "Desespero",
    url: "https://arielromano.bandcamp.com/track/desespero",
    id: "386933202",
    type: "track"
  },
  {
    title: "Otros Mundos 2",
    url: "https://arielromano.bandcamp.com/album/otros-mundos-2",
    id: "2701157496",
    type: "album"
  },
  {
    title: "Irregular",
    url: "https://arielromano.bandcamp.com/album/irregular",
    id: "1281794081",
    type: "album"
  },
  {
    title: "Algo Camina",
    url: "https://arielromano.bandcamp.com/track/algo-camina",
    id: "2700007952",
    type: "track"
  }
];

const Music: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="music" className="section">
      <h2>{t('music.title')}</h2>
      <p className="description">{t('music.description')}</p>
      <div className="bandcamp-container">
        {musicItems.map((item, index) => (
          <div key={index} className="music-item">
            <iframe
              style={{ border: '0', width: '100%', height: '42px' }}
              src={`https://bandcamp.com/EmbeddedPlayer/${item.type}=${item.id}/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/`}
              seamless
            >
              <a href={item.url}>{item.title} by ariel romano</a>
            </iframe>
          </div>
        ))}
      </div>
      <a href="https://arielromano.bandcamp.com" className="view-more">
        {t('music.viewMore')}
      </a>
    </section>
  )
}

export default Music 