import React from 'react'

interface VideoItem {
  title: string;
  url: string;
  videoId: string;
}

const videoItems: VideoItem[] = [
  {
    title: "Video 1",
    url: "https://youtu.be/5p9cN66mTuE",
    videoId: "5p9cN66mTuE"
  },
  {
    title: "Video 2",
    url: "https://youtu.be/7Z9re5a4pMo",
    videoId: "7Z9re5a4pMo"
  }
];

const Videos: React.FC = () => {
  return (
    <section id="videos" className="section">
      <h2>Videos</h2>
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
    </section>
  )
}

export default Videos 