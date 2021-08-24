import React from 'react';
import theme from 'theme';

/**
 * College (Building-foundatio) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const CollegeIcon = ({ width, color }) => {
  const DEFAULT_WIDTH = '16';
  const DEFAULT_COLOR = theme.colors.text.secondary;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || DEFAULT_WIDTH}
      viewBox="0 0 24 24"
      fill={theme.colors[color] || DEFAULT_COLOR}
    >
      <rect fill="none" height="24" width="24" />
      <path d="M19,12h3L12,3L2,12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2V12z M7,15v-4.81l4-3.6V15H7z M13,15V6.59l4,3.6V15H13z" />
    </svg>
  );
};
