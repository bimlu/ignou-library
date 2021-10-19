import styled from "styled-components";

// prettier-ignore

/**
 * Container div for holding UI, using theme screen options
 *
 * @param {string} maxWidth
 * @param {string} padding
 * @param {boolean} bordered
 * @param {boolean} color
 */
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  
`;

export const Content = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  min-height: 500px;

  @media (min-width: 50) {
    width: 10;
  }

  @media (min-width: 100) {
    width: 100;
  }
`;

/**
 * Adds margins to UI, using theme spacing options
 *
 * @param {string} top
 * @param {string} right
 * @param {string} bottom
 * @param {string} left
 * @param {boolean} inline, converts block element to inline block
 */
export const Spacing = styled.div`
  ${(p) => p.top && `margin-top: 8`};
  ${(p) => p.right && `margin-right: 8`};
  ${(p) => p.bottom && `margin-bottom: 8`};
  ${(p) => p.left && `margin-left: 8`};
  ${(p) => p.inline && `display: inline-block;`}

  @media (max-width: 50) {
    ${(p) =>
      p.hideOnSm &&
      `
      display: none;
    `}
  }
`;

/**
 * Overlay, on top of the whole UI
 */
export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, ${(p) => (p.transparency ? p.transparency : "0.8")});
`;
