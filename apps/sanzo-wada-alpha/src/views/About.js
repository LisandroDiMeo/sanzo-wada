import React from 'react'
import styled from 'styled-components'
import { SwatchHeader, Title } from './../components'
import { Section, lgBodyCopy, mediumType, smallType, media } from './../styles'
import { spacing, colors } from './../styles/theme.json'

export default () =>
  <React.Fragment>
    <SwatchHeader>
      <Title/>
    </SwatchHeader>
    <Section>
      <BookSection>
        <BookImage>
          <a href="https://en.seigensha.com/books/978-4-86152-247-5/" target="_blank" rel="noopener noreferrer">
            <img src="https://en.seigensha.com/wp-content/uploads/978-4-86152-247-5-1.jpg" alt="A Dictionary of Color Combinations by Sanzo Wada" />
          </a>
        </BookImage>
        <BookInfo>
          <h2>A Dictionary of Color Combinations</h2>
          <p className="author">Sanzo Wada (1883-1967)</p>
          <p>
            Originally published in 1934, this book is a collection of 348 color combinations
            created by Japanese artist and color theorist Sanzo Wada. Each combination is a
            carefully selected pairing of two, three, or four colors drawn from a palette of
            159 hues. Wada's work laid the groundwork for modern color studies in Japan and
            remains an essential reference for artists, designers, and anyone interested in color.
          </p>
          <p>
            The original publication, titled <em>Color Schemes</em> (<span lang="ja-jp">&#37197;&#33394;&#32207;&#37969;</span>),
            was an eleven-volume boxed series containing postcard-sized cards of precisely printed
            and die-cut color combinations with bilingual descriptions.
          </p>
          <BookLink href="https://en.seigensha.com/books/978-4-86152-247-5/" target="_blank" rel="noopener noreferrer">
            View on Seigensha
          </BookLink>
        </BookInfo>
      </BookSection>
      <CreditsWrapper>
        <AboutCopy>
          <h3>About This Site</h3>
          <p>
            This interactive site allows you to explore the full collection of Wada's color
            combinations digitally. Browse individual swatches, view color combinations,
            and copy color values in HEX, RGB, and CMYK formats.
          </p>
          <p>
            This project is based on the original open-source repository by{' '}
            <a href="https://github.com/dblodorn/sanzo-wada">Dain Blodorn Kim</a>,
            with biography research by <a href="http://ianlynam.com/about/">Ian Lynam</a>.
          </p>
          <h3>Original Project Contributors</h3>
          <p>
            <a href="https://github.com/paolotremadio">Paolo Tremadio</a>,{' '}
            <a href="https://github.com/mattdesl">Matt DesLauriers</a>,{' '}
            <a href="https://github.com/fand">Takayosi Amagi</a>
          </p>
          <h3>Related Projects</h3>
          <p>
            <a href="https://github.com/jmaasch/sanzo">R Package for Data Visualization</a> by{' '}
            <a href="https://github.com/jmaasch">Jacqueline Maasch</a>
          </p>
        </AboutCopy>
      </CreditsWrapper>
    </Section>
  </React.Fragment>

// STYLES
const BookSection = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 84rem;
  margin: auto;
  padding: ${spacing.double_pad} ${spacing.single_pad};
  ${media.medium`
    flex-direction: column;
    align-items: center;
  `}
`

const BookImage = styled.div`
  flex-shrink: 0;
  margin-right: ${spacing.double_pad};
  ${media.medium`
    margin-right: 0;
    margin-bottom: ${spacing.double_pad};
  `}
  img {
    width: 28rem;
    height: auto;
    display: block;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
    ${media.small`
      width: 100%;
      max-width: 28rem;
    `}
  }
`

const BookInfo = styled.div`
  * {
    color: ${colors.black};
  }
  h2 {
    ${lgBodyCopy};
    padding-bottom: ${spacing.micro_pad};
  }
  .author {
    ${smallType};
    color: ${colors.med_grey};
    padding-bottom: ${spacing.double_pad};
  }
  p {
    ${mediumType};
    line-height: 1.5;
    padding-bottom: ${spacing.single_pad};
  }
  em {
    font-style: italic;
  }
`

const BookLink = styled.a`
  ${smallType};
  display: inline-block;
  margin-top: ${spacing.single_pad};
  padding: 0.75rem 2rem;
  background-color: ${colors.black};
  color: ${colors.white} !important;
  text-decoration: none;
  border-radius: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity 250ms ease;
  &:hover {
    opacity: 0.8;
  }
`

const AboutCopy = styled.article`
  width: 100%;
  max-width: 84rem;
  margin: auto;
  padding-top: ${spacing.double_pad};
  padding-bottom: ${spacing.big_pad};
  padding-left: ${spacing.single_pad};
  padding-right: ${spacing.single_pad};
  * {
    color: ${colors.black}
  }
  h2, h3 {
    ${lgBodyCopy};
    padding-bottom: ${spacing.micro_pad};
  }
  p {
    ${mediumType};
    color: ${colors.black};
    padding-bottom: ${spacing.double_pad};
    line-height: 1.5;
    &:last-child {
      padding-bottom: 0;
    }
  }
  a {
    text-decoration: underline;
  }
`

const CreditsWrapper = styled.div`
  border-top: 1px solid ${colors.med_grey};
  width: 100%;
`
