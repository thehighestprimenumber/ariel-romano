import React from 'react'
import { useTranslation } from 'react-i18next'

interface VideoItem {
  title: string;
  url: string;
  videoId: string;
}

const videoItems: VideoItem[] = [
  {
    title: "Irregular",
    url: "https://youtu.be/5p9cN66mTuE",
    videoId: "5p9cN66mTuE"
  },
  {
    title: "Algo Camina",
    url: "https://youtu.be/7Z9re5a4pMo",
    videoId: "7Z9re5a4pMo"
  }
];

const Videos: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="videos" className="section">
      <h2>{t('videos.title')}</h2>
      <p className="description">{t('videos.description')}</p>
      <div className="video-container">
        {videoItems.map((item, index) => (
          <div key={index} className="video-item">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${item.videoId}?si=qPJOIbEHfFRIAFUG`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ))}
      </div>
      {/* <a href="https://youtube.com/@arielromano" className="view-more">
        {t('videos.viewMore')}
      </a> */}
    </section>
  )
}

export default Videos 