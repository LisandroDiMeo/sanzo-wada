import React from 'react'
import styled from 'styled-components'
import { flexColumn, mediumType, smallType, microType, buttonInit, media } from './../styles'
import { spacing, colors, fonts } from './../styles/theme.json'

const HelpModal = ({ onClose }) =>
  <Overlay onClick={onClose}>
    <Modal onClick={e => e.stopPropagation()}>
      <CloseButton onClick={onClose}>&#10005;</CloseButton>
      <h2>Understanding Color Formats</h2>

      <FormatSection>
        <h3>HEX</h3>
        <p>
          A six-character code (e.g. <code>#FF6B35</code>) representing a color
          using hexadecimal notation. It encodes RGB values in base-16, where the
          first two digits are red, the middle two are green, and the last two are blue.
        </p>
      </FormatSection>

      <FormatSection>
        <h3>RGB</h3>
        <p>
          Stands for Red, Green, Blue. This is an <em>additive</em> color model used
          by screens and displays. Each channel ranges from 0 to 255. When all three
          are at maximum (255, 255, 255), the result is white.
        </p>
      </FormatSection>

      <FormatSection>
        <h3>CMYK</h3>
        <p>
          Stands for Cyan, Magenta, Yellow, and Key (Black). This is a <em>subtractive</em> color
          model used in print. Values represent ink percentages (0-100). This is the
          original format used in Wada's book.
        </p>
      </FormatSection>

      <Divider />

      <FormatSection>
        <h3>Why Colors May Differ from the Book</h3>
        <p>
          The original <em>Dictionary of Color Combinations</em> was produced using
          precise CMYK printing on specific paper stock. The colors you see on screen
          are computed conversions from those CMYK values to RGB using the chroma.js library.
        </p>
        <p>
          This conversion is inherently approximate because CMYK and RGB represent
          fundamentally different color spaces. Additionally, every screen renders
          color slightly differently depending on its technology, calibration, and
          color profile. The colors shown here are faithful digital approximations,
          but they will never be a perfect match for the printed originals.
        </p>
      </FormatSection>
    </Modal>
  </Overlay>

export default HelpModal

// STYLES
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.single_pad};
`

const Modal = styled.div`
  ${flexColumn};
  background-color: ${colors.white};
  max-width: 60rem;
  max-height: 90vh;
  overflow-y: auto;
  padding: ${spacing.double_pad};
  position: relative;
  border-radius: 4px;
  ${media.small`
    padding: ${spacing.single_pad};
  `}
  h2 {
    font-family: ${fonts.sans};
    font-size: ${fonts.sizes.med};
    font-weight: 700;
    color: ${colors.black};
    padding-bottom: ${spacing.double_pad};
    line-height: 1.3;
  }
`

const CloseButton = styled.button`
  ${buttonInit};
  position: absolute;
  top: ${spacing.single_pad};
  right: ${spacing.single_pad};
  font-size: 1.8rem;
  color: ${colors.med_grey};
  line-height: 1;
  padding: 0.5rem;
  &:hover {
    color: ${colors.black};
  }
`

const FormatSection = styled.div`
  padding-bottom: ${spacing.single_pad};
  h3 {
    ${smallType};
    color: ${colors.black};
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-bottom: ${spacing.micro_pad};
  }
  p {
    ${microType};
    color: ${colors.black};
    line-height: 1.6;
    padding-bottom: ${spacing.micro_pad};
    &:last-child {
      padding-bottom: 0;
    }
  }
  em {
    font-style: italic;
  }
  code {
    font-family: monospace;
    background-color: ${colors.grey};
    padding: 0.1rem 0.4rem;
    border-radius: 2px;
    font-size: 0.9em;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${colors.grey};
  margin: ${spacing.single_pad} 0;
`
