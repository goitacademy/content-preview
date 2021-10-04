import React from 'react';

const styles = {
  figure: {
    display: 'block',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'var(--ifm-leading)',
  },
  caption: {
    width: '80%',
    fontSize: 14,
    textAlign: 'center',
  },
};

export default function Figure({ description, children }) {
  return (
    <figure style={styles.figure}>
      {children}
      <figcaption style={styles.caption}>{description}</figcaption>
    </figure>
  );
}
