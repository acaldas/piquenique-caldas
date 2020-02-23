import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ContactImage = ({ name, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      ines: file(relativePath: { eq: "ines-2x.jpg" }) {
        childImageSharp {
          fixed(width: 152) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sara: file(relativePath: { eq: "sara-2x.jpg" }) {
        childImageSharp {
          fixed(width: 152) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tomas: file(relativePath: { eq: "tomas-2x.jpg" }) {
        childImageSharp {
          fixed(width: 152) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      afonso: file(relativePath: { eq: "afonso-2x.jpg" }) {
        childImageSharp {
          fixed(width: 152) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data[name].childImageSharp.fixed} {...props} />
}

export default ContactImage
