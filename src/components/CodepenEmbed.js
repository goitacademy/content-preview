import React from 'react';

const styles = {
  container: {
    marginBottom: 20,
  },
  frame: {
    width: '100%',
    border: 0,
    height: 500,
    borderRadius: 4,
    overflow: 'hidden',
  },
};

export default function CodepenEmbed({ src, title, height }) {
  const frameStyles = height ? { ...styles.frame, height } : styles.frame;

  return (
    <div style={styles.container}>
      <iframe
        src={src}
        style={frameStyles}
        title={title}
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}
