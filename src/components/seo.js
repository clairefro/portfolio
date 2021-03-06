import React from 'react'
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const SEO = ({
    title,
    titleTemplate,
    description,
    keywords,
    canonical,
    ogImage,
    ogTitle,
    ogDescription,
    ogUrl,
    article,
    meta,
    link,
    lang
  }) => {

  const { site } = useStaticQuery(query)
  const { pathname } = useLocation()
  // const { langKey } = usePageContext()

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : site.siteMetadata.website
  const fullUrl = `${baseUrl}${pathname}`

  // all props except 'link' and 'meta' are overridden when props are defined in component
  // 'link' and 'meta' defaults appear on every page. If defined in props, they are appended to defaults
  const defaults = {
    title: "Portfolio",
    titleTemplate: "%s | Claire Froelich - Full stack web developer",
    description: "'I like to build things with people'. See my projects and learn how to get in touch.",
    keywords: ["Claire Froelich", "web developer", "full stack web development"],
    // lang: langKey,
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width'
      },
    ],
    link: [
      {
        rel: "canonical",
        href: canonical || fullUrl,
      },
    ],
    // OG defaults
    og: {
      title: 'Portfolio',
      description: "'I like to build things with people'. See my projects and learn how to get in touch.",
      url: fullUrl,
      type: 'website',
      image: site.siteMetadata.image,
      alt: 'Claire Froelich - full stack web developer'
    },
  }

  // logic for props ultimately rendered in <head>
  const seo = {
    title: title || defaults.title,
    titleTemplate: titleTemplate || defaults.titleTemplate,
    description: description || defaults.description,
    keywords: keywords ? defaults.keywords.concat(keywords) : defaults.keywords,
    meta: meta ? defaults.meta.concat(meta) : defaults.meta,
    link: link ? defaults.link.concat(link) : defaults.link,
    lang: lang || defaults.lang,
    og: {
      title: ogTitle ? defaults.titleTemplate.replace(/%s/, ogTitle) : defaults.titleTemplate.replace(/%s/, title),
      description: ogDescription || description || defaults.og.description,
      url: ogUrl || defaults.og.url,
      type: article ? 'article' : defaults.og.type,
      image: `${article ? 'https://' : baseUrl}${ogImage || defaults.og.image}`, // articles have https:// prefix only
      alt: ogTitle || title || defaults.og.title,
    },
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={seo.titleTemplate}
      description={seo.description}
      link={ [ ...seo.link ] }
      meta={[
        ...seo.meta
      ]
      // site description
      .concat([
        {
          name: 'description',
          content: seo.description,
        },
        {
          name: 'keywords',
          content: seo.keywords.join(','),
        },
      ])
      // FB OG data
      .concat([
        {
          property: 'og:title',
          content: seo.og.title,
        },
        {
          property: 'og:description',
          content: seo.og.description,
        },
        {
          property: 'og:url',
          content: seo.og.url,
        },
        {
          property: 'og:type',
          content: seo.og.type,
        },
        {
          property: 'og:image',
          content: seo.og.image,
        },
        {
          property: 'og:image:alt',
          content: seo.og.alt,
        },
        {
          property: 'og:image:width',
          content: 800,
        },
        {
          property: 'og:image:height',
          content: 600,
        },
        {
          property: 'og:locale',
          content: seo.lang,
        },
      ])
      // Twitter og data mirrors fb og data
      .concat([
        {
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'twitter:title',
          content: seo.og.title,
        },
        {
          property: 'twitter:description',
          content: seo.og.description,
        },
        {
          property: 'twitter:image',
          content: seo.og.image,
        },
      ])
    }
    >
      <html lang={seo.lang} xmlns="http://www.w3.org/1999/xhtml"
      prefix="og: http://ogp.me/ns# fb: http://www.facebook.com/2008/fbml"/>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  canonical: PropTypes.string,
  ogImage: PropTypes.string,
  article: PropTypes.bool,
  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        image
        website
      }
    }
  }
`

const t = {
  tt: {
    en: "%s | The Power of Vegetables, a children's book",
    fr: "%s | « Le pouvoir des légumes », un livre pour enfants",
    ja: "%s　〜　『やさいのちから』　〜　子ども向けの絵本",
  },
  keywords: {
    en: ['The Power of Vegetables',"funny children's books","educational children's books","children's books","kids books",'picture books','Claire Froelich','Varvara Fomina','Miki Sugawara','kids','vegetables','great gifts for children','humorous','toots','deer','animals','colors','reading'],
    fr: ['The Power of Vegetables','livres drôles pour enfants','livres amusants pour enfants','livres éducatifs pour enfants','cadeaux pour les enfants','livre pour enfants', `livre d'enfant`,'Claire Froelich','Varvara Fomina','Miki Sugawara','enfants','légumes','drôle','pets','chevreuils','cerf','animaux','couleurs','apprendre à lire'],
    ja: ['The Power of Vegetables','やさいのちから','子供へのプレゼント','教育的な絵本','子供への贈り物','おもしろい絵本','Claire Froelich','Varvara Fomina','Miki Sugawara','絵本', '子ども','野菜','面白い','おなら','鹿','動物','色','読書','クレア・フレリク','バーバラ・フォミナ','菅原美樹',],
  }
}
