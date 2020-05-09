import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Footer() {
  return (
    <>
      <footer style={{ position: 'relative', padding: '1rem' }}>
        <a
          style={{
            textDecoration: 'none !important',
            position: 'absolute',
            top: '30%',
            left: '2rem',
          }}
          href='https://twitter.com/share?ref_src=twsrc%5Etfw'
          className='twitter-share-button'
          dataShowCount='false'
        >
          <TwitterIcon />
        </a>
        <script
          async
          src='https://platform.twitter.com/widgets.js'
          charSet='utf-8'
        ></script>
        Made with ❤️by Vincenzo
      </footer>
    </>
  );
}
