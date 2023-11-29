import React, { useEffect, useState } from "react";
import Spinner from "../../components/spinners/Spinners";
import { showToast } from "../../services/toastServices";
import { getPostById } from "../../features/getPost/getPostById";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";

const PostDetail = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.singlePost.data);
  const [tag, setTag] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setLoading(true); // Set loading to true when starting to fetch data
    dispatch(getPostById(postId))
      .then(() => {
        console.log("done");
      })
      .catch((error) => {
        showToast("Somthing went wrong", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when data fetching is done
      });
  }, [dispatch, postId]);

  const fadeInFromBottom = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (post && post.tags && post.tags.length > 0) {
      setTag(post.tags[0]);
    }
  }, [post]);

  if (loading) {
    return <Spinner />;
  }

  if (!post) {
    return <div>Error loading post data.</div>;
  }

  return (
    <animated.div
      style={fadeInFromBottom}
      className='content-wrapper post w-container snipcss0-1-1-2'>
      <div className='post-content snipcss-Oqx4n'>
        <div className='main-image-box'>
          <div className='tag'>{tag}</div>
          <img
            alt=''
            src='https://images.pexels.com/photos/296115/pexels-photo-296115.jpeg'
            className='main-image'
          />
        </div>
        <div className='post-content-text'>
          <h1 className='big'>{post.title}</h1>

          <div className='social-icons-box'>
            <div className='embed w-embed'>
              <a
                className='w-inline-block social-icon facebook'
                href='https://www.facebook.com/sharer/sharer.php?u=&t='
                target='_blank'
                rel='noopener noreferrer'></a>
            </div>
            <div className='embed w-embed'>
              <a
                className='w-inline-block social-icon twitter'
                href='https://twitter.com/intent/tweet?'
                target='_blank'
                rel='noopener noreferrer'></a>
            </div>
            <div className='embed w-embed'>
              <a
                className='w-inline-block social-icon email'
                href='mailto:?subject=&body=:'
                target='_self'
                rel='noopener noreferrer'></a>
            </div>
          </div>
          <div className='authors-box less-padding'>
            <div className='post-details left'>
              <div>
                <a
                  href='#Author'
                  className='authors-picture mini w-inline-block'></a>
              </div>
              <div className='expand'>
                <div className='details-text'>By</div>
                <a href='#Author' className='author'>
                  {post.author || "Author"}
                </a>
                <div className='details-text'>{post.date || "22.01.2022"}</div>
              </div>
            </div>
          </div>
          <div className='rich-text-block w-richtext'>
            <p>{post.body}</p>
          </div>
          <div className='post-details tags'>
            <div className='w-dyn-list'>
              <div role='list' className='flex-wrapper w-dyn-items'>
                <div className='details-text dark'>Tags:</div>
                <div role='listitem' className='tag-item w-dyn-item'>
                  <span className='tags'>{tag || "Japan"}</span>
                </div>
              </div>
            </div>
            <Link to='/' className='back-button'>
              <FiArrowLeftCircle size={30} className='icon' />
            </Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default PostDetail;
