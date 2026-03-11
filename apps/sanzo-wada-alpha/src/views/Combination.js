import React from 'react'
import styled from 'styled-components'
import { comboData, SwatchHeader, CopyHex } from './../components'
import { flexRow, SwatchLink, ComboTitle, ComboHex, ButtonLink, media, microType } from './../styles'
import { spacing, shared, fonts } from './../styles/theme.json'

const Swatch = (props) =>
  <React.Fragment>
    <SwatchHeader>
      <ComboTitle>Combination: {props.slug}</ComboTitle>
      <ComboHex>
        {props.colors.map((color, i) =>
          <CopyHex hex={color.hex } key={`${props.slug}-title-${i}`}/>
        )}
      </ComboHex>
      <PrevNext>
        {props.slug !== '1' && (
          <ButtonLink className="prev" to={`/combination/${props.slug - 1}`}>
            <span>Prev</span>
          </ButtonLink>
        )}
        {props.slug !== '348' && (
          <ButtonLink className="next" to={`/combination/${parseInt(props.slug, 10) + 1}`}>
            <span>Next</span>
          </ButtonLink>
        )}
      </PrevNext>
    </SwatchHeader>
    <ComboSection>
      <ComboWrapper>
        {props.colors.map((color, i) =>
          <ColorBar key={`${props.slug}-${i}`} style={{ backgroundColor: color.hex }}>
            <SwatchLink to={`/swatch/${color.slug}`} hex={color.hex}>
              <p className={'name'}>{color.name}</p>
              <ColorValues className={'color-values'}>
                <span>{color.hex}</span>
                <span>{color.rgb}</span>
                <span>{color.cmyk}</span>
              </ColorValues>
            </SwatchLink>
          </ColorBar>
        )}
      </ComboWrapper>
    </ComboSection>
  </React.Fragment>

export default comboData(Swatch)

// STYLES
const PrevNext = styled.div`
  ${flexRow};
  align-items: center;
  height: 100%;
  margin-left: auto;
  a:first-child {
    margin-right: ${spacing.single_pad};
  }
  ${media.small`
    margin-left: 0;
    margin-top: ${spacing.single_pad};
  `}
`

const ComboSection = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: calc(${spacing.single_pad} + ${shared.nav_height});
  padding-left: ${spacing.single_pad};
  padding-right: ${spacing.single_pad};
  padding-bottom: ${spacing.double_pad};
`

const ComboWrapper = styled.div`
  ${flexRow};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 0;
`

const ColorValues = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: ${spacing.single_pad};
  top: calc(${spacing.single_pad} + ${shared.nav_height});
  opacity: 0;
  transition: opacity 300ms ease;
  will-change: opacity;
  span {
    ${microType};
    font-family: ${fonts.sans};
    display: block;
    padding-bottom: 0.4rem;
  }
`

const ColorBar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: ${spacing.single_pad};
  p {
    position: absolute;
    display: block;
    opacity: 0;
    transition: opacity 300ms ease;
    will-change: opacity;
  }
  .name {
    left: ${spacing.single_pad};
    top: calc(${spacing.single_pad} + ${shared.nav_height});
    text-align: right;
  }
  .hex {
    right: ${spacing.single_pad};
    top: calc(${spacing.single_pad} + ${shared.nav_height});
  }
  &:hover {
    p {
      opacity: 1;
    }
    .color-values {
      opacity: 1;
    }
  }
`
