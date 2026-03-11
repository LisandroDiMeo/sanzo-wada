import React from 'react'
import styled from 'styled-components'
import chroma from 'chroma-js'
import { swatchData, SwatchHeader, CopyHex } from './../components'
import { flexColumn, flexRow, ComboLink, ComboHex, bigType, ComboTitle, smallType, media } from './../styles'
import { spacing, colors } from './../styles/theme.json'

const Swatch = (props) => {
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
        <ComboHeader><span>Combinations:</span></ComboHeader>
        <ComboList>
          {props.combinations.map((combo, i) =>
            <ComboLink to={`/combination/${combo}`} key={`${props.slug}-${combo}`} hex={props.hex}>{combo}</ComboLink>
          )}
        </ComboList>
      </SwatchSection>
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

const ComboHeader = styled.h2`
  ${bigType};
  padding: 0 ${spacing.single_pad} ${spacing.single_pad};
`
