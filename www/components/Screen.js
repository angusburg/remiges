import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import {Link as GatsbyLink} from 'gatsby'
import {
  Box,
  Global,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarNavigation,
  defaultTheme as theme,
} from 'remiges'
import Logo from '../assets/logo.svg'
import Favicon16 from '../assets/favicon/favicon-16x16.png'
import Favicon32 from '../assets/favicon/favicon-32x32.png'
import Favicon96 from '../assets/favicon/favicon-96x96.png'

const Base = ({children, noFooter}) => (
  <React.Fragment>
    <Global />
    <Helmet
      title="Remiges"
      meta={[
        {name: 'description', content: 'React UI Component Kit by @angushtlam'},
        {name: 'keywords', content: 'react, ui, component, kit'},
      ]}
    >
      <html lang="en" />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
      <link rel="icon" type="image/png" sizes="96x96" href={Favicon96} />
      <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Navbar background={theme.color90} fixed>
      <NavbarBrand>
        <Link height="100%" to="/" using={GatsbyLink}>
          <Box flex alignItems="center" height="100%">
            <Image fillParent src={Logo} />
            <Box padding>Remiges</Box>
          </Box>
        </Link>
      </NavbarBrand>
      <NavbarNavigation>
        <Link to="/styles" using={GatsbyLink}>
          Style Guide
        </Link>
        <Link to="/components" using={GatsbyLink}>
          Components
        </Link>
        <Link to="https://github.com/angushtlam/remiges" target="_blank">
          Fork me on GitHub!
        </Link>
      </NavbarNavigation>
    </Navbar>
    <Box direction="vertical" minHeight="100vh">
      {children}
    </Box>
    {!noFooter && (
      <Box>
        <Box flex readingContainer justifyContent="spaceBetween" padding>
          <Box>
            <Link to="#">Back to Top</Link>{' '}
          </Box>
          <Box>
            &copy;{' '}
            <Link target="_blank" to="https://angus.dev/">
              Angus Lam
            </Link>{' '}
            {new Date().getFullYear()}
          </Box>
        </Box>
      </Box>
    )}
  </React.Fragment>
)

Base.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Base
