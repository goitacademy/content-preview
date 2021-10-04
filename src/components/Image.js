import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const styles = {
  display: 'block',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 'var(--ifm-leading)',
};

export default function Image({
  src = '',
  alt = '',
  maxWidth = 480,
  fullWidth = false,
}) {
  const mWidth = fullWidth ? '100%' : maxWidth;

  return (
    <img
      src={useBaseUrl(src)}
      alt={alt}
      style={{ ...styles, maxWidth: mWidth }}
    />
  );
}
