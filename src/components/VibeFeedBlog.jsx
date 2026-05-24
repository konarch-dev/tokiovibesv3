import React from 'react';

const mainPost = {
  id: 1,
  tag: 'TATTOO',
  date: 'MAY 18, 2024 • 6 MIN READ',
  title: 'Black & Grey vs Color Tattoos:\nWhich One Suits You?',
  img: '/images/bk.jpg'
};

const subPosts = [
  { id: 2, tagIcon: '✨', tag: 'ANIME', date: 'MAY 14, 2024 • 4 MIN READ', title: '5 Anime That Every\nTattoo Lover Must Watch', img: '/images/anime.jpg' },
  { id: 3, tagIcon: '🔥', tag: 'LIFESTYLE', date: 'MAY 8, 2024 • 4 MIN READ', title: 'Tattoo Aftercare Tips\nYou Should Never Ignore', img: '/images/5t.webp' },
  { id: 4, tagIcon: '⚡', tag: 'STREETWEAR', date: 'MAY 10, 2024 • 5 MIN READ', title: 'How Streetwear & Tattoos\nGo Hand in Hand', img: '/images/blogt.jpg' },
  { id: 5, tagIcon: '⛩️', tag: 'CULTURE', date: 'MAY 6, 2024 • 3 MIN READ', title: 'Understanding Irezumi:\nMore Than Just Ink', img: '/images/jt.jpg' }
];

const VibeFeedBlog = () => {
  return (
    <div className="vibe-feed-wrapper">
      <section className="vibe-feed-section container">

        <div className="vf-header">
          <div className="vf-header-left">
            <div className="vf-subtitle">
              <span className="text-blue">✦ OUR BLOG</span> <span className="text-blue">OUR BLOG</span>
            </div>
            <div className="vf-title-container">
              <h2 className="vf-main-title">VIBE FEED</h2>
              <span className="vf-script-bg">Vibe Feed</span>
            </div>
          </div>

          <div className="vf-header-center">
            <p>Daily dose of ink, anime and<br />street culture. Stay inspired.</p>
          </div>

          <div className="vf-header-right">
            <button className="vf-view-all-btn">
              VIEW ALL ARTICLES <span className="vf-arrow">→</span>
            </button>
          </div>
        </div>

        <div className="vf-grid">
          {/* Main Large Post */}
          <div className="vf-main-post" style={{ backgroundImage: `url(${mainPost.img})` }}>
            <div className="vf-card-overlay"></div>

            <div className="vf-tag-pill">
              <span className="text-blue">✦</span> {mainPost.tag}
            </div>

            <div className="vf-main-content">
              <div className="vf-date">{mainPost.date}</div>
              <h3 className="vf-main-post-title">
                {mainPost.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>{line}<br /></React.Fragment>
                ))}
              </h3>
            </div>

            <button className="vf-circle-btn">➔</button>
          </div>

          {/* Sub Posts Grid (2x2) */}
          <div className="vf-sub-posts-grid">
            {subPosts.map(post => (
              <div key={post.id} className="vf-sub-post" style={{ backgroundImage: `url(${post.img})` }}>
                <div className="vf-card-overlay"></div>

                <div className="vf-tag-pill">
                  <span>{post.tagIcon}</span> {post.tag}
                </div>

                <div className="vf-sub-content">
                  <div className="vf-date">{post.date}</div>
                  <h4 className="vf-sub-post-title">
                    {post.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>{line}<br /></React.Fragment>
                    ))}
                  </h4>
                </div>

                <button className="vf-circle-btn">➔</button>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default VibeFeedBlog;
