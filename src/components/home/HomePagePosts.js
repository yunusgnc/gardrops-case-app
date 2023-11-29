import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import { searchPosts } from "../../features/filterPost/filterPost";
import { Link } from "react-router-dom";
import Spinner from "../spinners/Spinners";
import { showToast } from "../../services/toastServices";
import SocialMediaIcons from "../social-media-icons";

export default function HomePageCards() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const [loading, setLoading] = useState(true);
  const [filterTitle, setFilterTitle] = useState("");

  // react-spring için animasyon değerleri
  const props = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? "translateY(-20px)" : "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
  });

  useEffect(() => {
    dispatch(searchPosts(filterTitle))
      .then(() => {
        console.log("done");
        // 2 saniye sonra loading durumunu false yaparak Spinner'ı kaldır
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        showToast("Somthing went wrong", error);
      });
  }, [dispatch, filterTitle]);

  if (loading || !posts || !posts.posts) {
    return <Spinner />;
  }

  return (
    <div>
      <animated.div
        style={props}
        className='content-wrapper w-container snipcss-f5Mqh'>
        <div className='title-box bottom-border'>
          <h1 className='heading-1 medium'>All Posts</h1>
        </div>
        <div class='search-container'>
          <input
            type='text'
            class='search-input'
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
            placeholder='Filter by Title'
          />
          <span class='search-icon'>&#128269;</span>
        </div>
        <div className='flex-wrapper'>
          <div className='_70-percent-column'>
            <div className='w-dyn-list'>
              <div role='list' className='w-dyn-items'>
                {posts.posts.map((post) => (
                  <div key={post.id} className='w-dyn-item'>
                    <div className='flex-wrapper section'>
                      <div className='post-preview-image _50-percent'>
                        <img
                          src='https://images.pexels.com/photos/296115/pexels-photo-296115.jpeg'
                          loading='lazy'
                          alt=''
                        />
                        <Link
                          to={`/detail/${post.id}`}
                          style={{
                            backgroundImage:
                              'url("https://images.pexels.com/photos/296115/pexels-photo-296115.jpeg")',
                          }}
                          className='post-image-link w-inline-block'>
                          <div
                            data-ix='no-opacity-on-load'
                            className='overlay style-8xA6x'
                            id='style-8xA6x'>
                            <div
                              className='button-rounded style-H9PDs'
                              id='style-H9PDs'>
                              read more
                            </div>
                          </div>
                        </Link>
                        <Link
                          to={`/detail/${post.id}`}
                          style={{ backgroundColor: "#673ab7" }}
                          className='tag'>
                          {post.tags[0]}
                        </Link>
                      </div>
                      <div className='_50-percent-column'>
                        <Link
                          to={`/detail/${post.id}`}
                          className='mini-title-link'>
                          {post.tags[2]}
                        </Link>
                        <Link
                          to={`/detail/${post.id}`}
                          className='heading-link-box bottom-border w-inline-block'>
                          <h2 className='heading-hover'>{post.title}</h2>
                        </Link>
                        <p className='paragraph medium'>
                          {post.body.substring(0, 100)}...
                        </p>
                        <div>
                          <p className='details-text'>By</p>
                          <div
                            to={`/author/${post.author}`}
                            className='details-text-link less-right-border'>
                            {post.author}
                          </div>
                          <p className='details-text'>
                            {post.views || "Author"}
                          </p>
                          <p className='details-text'>
                            {post.date || "22.01.2022"}
                          </p>
                        </div>
                        <div class='social-icons-box'>
                          <SocialMediaIcons
                            title={post.title}
                            body={post.body}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className='_30-percent-column style-dmUs5'
            id='style-dmUs5'></div>
        </div>
      </animated.div>
    </div>
  );
}
