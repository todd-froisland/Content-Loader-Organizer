import React from 'react';

const ExampleDesktop = () => {
  return (
    <>
      <rect x="100" y="24" rx="3" ry="3" width="72" height="72" />
      <rect x="38" y="120" rx="3" ry="3" width="196" height="32" />
      <rect x="23" y="168" rx="3" ry="3" width="226" height="48" />
      <rect x="77" y="240" rx="3" ry="3" width="118" height="40" />
    </>
  );
};

const ExampleMobile = () => {
  return (
    <>
      <rect x="20" y="16" rx="3" ry="3" width="48" height="48" />
      <rect x="80" y="16" rx="3" ry="3" width="196" height="32" />
      <rect x="80" y="64" rx="3" ry="3" width="248" height="48" />
      <rect x="80" y="128" rx="3" ry="3" width="118" height="40" />
    </>
  );
};

export { ExampleDesktop, ExampleMobile };
