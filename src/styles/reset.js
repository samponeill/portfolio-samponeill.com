import { css } from 'styled-components'
import theme from '../../config/theme'

const reset = css`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    overflow-y: auto !important;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 18px;
    h1 {
      font-size: 2.441rem;
    }
    h2 {
      font-size: 1.953rem;
    }
    h3 {
      font-size: 1.563rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1rem;
    }
    @media (max-width: ${theme.breakpoints.l}), (max-device-width: ${theme.breakpoints.l}) {
      font-size: 18px !important;
      h1 {
        font-size: 2.074rem;
      }
      h2 {
        font-size: 1.728rem;
      }
      h3 {
        font-size: 1.44rem;
      }
      h4 {
        font-size: 1.2rem;
      }
    }
    @media (max-width: ${theme.breakpoints.m}), (max-device-width: ${theme.breakpoints.m}) {
      font-size: 16px !important;
    }
    @media (max-width: ${theme.breakpoints.s}), (max-device-width: ${theme.breakpoints.s}) {
      h1 {
        font-size: 1.602rem;
      }
      h2 {
        font-size: 1.424rem;
      }
      h3 {
        font-size: 1.266rem;
      }
      h4 {
        font-size: 1.125rem;
      }
    }
  }
  body {
    color: ${theme.colors.body_color};
    background-color: ${theme.colors.bg_color};
  }
  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.link_color};
  }
  a {
    color: ${theme.colors.link_color};
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${theme.colors.link_color_hover};
    }
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  blockquote {
    border-left: 5px solid ${theme.colors.link_color};
    padding-left: 1rem !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    font-style: italic;
    p {
      line-height: 1.3 !important;
    }
  }
  [tabindex='-1']:focus {
    outline: none !important;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${theme.colors.bg_color};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${theme.colors.body_color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  input,
  button,
  select,
  textarea {
    line-height: inherit;
  }
  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }

  .gatsby-resp-image-image {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
  }

  .gatsby-resp-image-wrapper {
    display: block;
    border-radius: 10px;
    margin-top: 2rem;
  }
`

export default reset
