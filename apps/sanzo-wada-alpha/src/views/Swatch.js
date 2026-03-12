import React, { useState } from 'react'
import styled from 'styled-components'
import chroma from 'chroma-js'
import { swatchData, SwatchHeader, CopyHex } from './../components'
import { flexColumn, flexRow, flexRowCenteredVert, buttonInit, ComboLink, ComboHex, bigType, ComboTitle, smallType, microType, media } from './../styles'
import { spacing, colors, fonts } from './../styles/theme.json'

const Swatch = (props) => {
  const [helpOpen, setHelpOpen] = useState(false)
  return (
    <React.Fragment>
      <SwatchHeader>
        <ComboTitle>
          {props.name}
        </ComboTitle>
        <ComboHex>
          <CopyHex hex={props.hex} />
        </ComboHex>
      </SwatchHeader>
      <SwatchSection style={{ backgroundColor: props.hex }} hex={props.hex}>
        <ColorInfo hex={props.hex}>
          <ColorInfoItem>
            <span className="label">HEX</span>
            <span className="value">{props.hex}</span>
          </ColorInfoItem>
          <ColorInfoItem>
            <span className="label">RGB</span>
            <span className="value">{props.rgb}</span>
          </ColorInfoItem>
          <ColorInfoItem>
            <span className="label">CMYK</span>
            <span className="value">{props.cmyk}</span>
          </ColorInfoItem>
        </ColorInfo>
        <ComboHeaderRow hex={props.hex}>
          <ComboHeader><span>Combinations:</span></ComboHeader>
        </ComboHeaderRow>
        <ComboHeaderRow>
          <HelpButton hex={props.hex} onClick={() => setHelpOpen(true)}>How it works?</HelpButton>
        </ComboHeaderRow>
        <ComboList>
          {props.combinations.map((combo, i) =>
            <ComboLink to={`/combination/${combo}`} key={`${props.slug}-${combo}`} hex={props.hex}>{combo}</ComboLink>
          )}
        </ComboList>
      </SwatchSection>
      {helpOpen &&
        <Overlay onClick={() => setHelpOpen(false)}>
          <Modal onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setHelpOpen(false)}>&#10005;</CloseButton>
            <h2>What are Combinations?</h2>
            <ModalBody>
              <p>
                In Sanzo Wada's <em>Dictionary of Color Combinations</em>, each color appears
                in one or more numbered <strong>combinations</strong> — curated pairings of 2, 3,
                or more colors that work harmoniously together.
              </p>
              <p>
                The numbers listed below (e.g. 033, 034) correspond to these combination entries
                from the book. Tap any number to see the full color palette for that combination.
              </p>
              <SampleImage
                src={`${process.env.PUBLIC_URL}assets/combinations_sample.jpg`}
                alt="Sample page from Dictionary of Color Combinations showing numbered color pairings"
              />
              <Caption>A sample spread from the book showing combinations 033–036.</Caption>
            </ModalBody>
          </Modal>
        </Overlay>
      }
    </React.Fragment>
  )
}

export default swatchData(Swatch)

// STYLES
const SwatchSection = styled.section`
  ${flexColumn};
  width: 100%;
  flex: 1;
  padding: ${spacing.double_pad} 0 ${spacing.big_pad};
  * {
    color: ${(props) =>
      chroma.contrast(props.hex, colors.grey) > 2 ? colors.grey : colors.black}!important;
  }
`

const ColorInfo = styled.div`
  ${flexRow};
  flex-wrap: wrap;
  padding: 0 ${spacing.single_pad} ${spacing.double_pad};
  gap: ${spacing.double_pad};
  ${media.small`
    flex-direction: column;
    gap: ${spacing.single_pad};
  `}
`

const ColorInfoItem = styled.div`
  ${flexColumn};
  .label {
    ${smallType};
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.7;
    padding-bottom: ${spacing.micro_pad};
  }
  .value {
    ${smallType};
  }
`

const ComboList = styled.menu`
  ${flexColumn};
  padding: 0 ${spacing.single_pad};
`

const ComboHeaderRow = styled.div`
  ${flexRowCenteredVert};
  padding: 0 ${spacing.single_pad} ${spacing.single_pad};
  gap: ${spacing.single_pad};
`

const ComboHeader = styled.h2`
  ${bigType};
  margin-bottom: 0;
  padding: 0;
`

const HelpButton = styled.button`
  ${buttonInit};
  ${microType};
  border-radius: 1.5rem;
  border: 2px solid ${props =>
    chroma.contrast(props.hex, colors.grey) > 2 ? colors.grey : colors.black} !important;
  font-weight: 700;
  padding: 0.4rem 1.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 200ms ease;
  &:hover {
    opacity: 1;
  }
`

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
  max-width: 50rem;
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
    padding-bottom: ${spacing.single_pad};
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

const ModalBody = styled.div`
  p {
    ${microType};
    color: ${colors.black};
    line-height: 1.6;
    padding-bottom: ${spacing.single_pad};
  }
  em {
    font-style: italic;
  }
`

const SampleImage = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: ${spacing.micro_pad};
`

const Caption = styled.p`
  ${microType};
  color: ${colors.med_grey} !important;
  text-align: center;
  line-height: 1.4;
`
