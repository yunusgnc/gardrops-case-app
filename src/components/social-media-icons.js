import React from "react";

const SocialMediaIcons = ({ title, body }) => {
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=&t=${encodeURIComponent(
      title
    )}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      body
    )}`;
    window.open(url, "_blank");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(title);
    const emailBody = encodeURIComponent(body);
    window.location.href = `mailto:?subject=${subject}&body=${emailBody}`;
  };

  return (
    <div>
      <div className='embed w-embed'>
        <button
          className='w-inline-block social-icon facebook'
          onClick={shareOnFacebook}></button>
      </div>
      <div className='embed w-embed'>
        <button
          className='w-inline-block social-icon twitter'
          onClick={shareOnTwitter}></button>
      </div>
      <div className='embed w-embed'>
        <button
          className='w-inline-block social-icon email'
          onClick={sendEmail}></button>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
