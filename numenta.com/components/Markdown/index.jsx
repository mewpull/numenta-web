import catchLinks from 'catch-links'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import styles from './index.css'


/**
 *
 */
class Markdown extends React.Component {

  static propTypes = {
    children: React.PropTypes.any.isRequired,
  }

  static contextTypes = {
    router: React.PropTypes.object,
  }

  componentDidMount() {
    const {router} = this.context

    // take over markdown local content links
    catchLinks(this._markdown, (href) => {
      const url = prefixLink(href)
      console.log(href, url)
      if (href.match(/^\/assets\//)) global.window.location = url
      else router.push(url)
      return
    })
  }

  render() {
    const {children} = this.props

    return (
      <div
        className={styles.markdown}
        ref={(ref) => this._markdown = ref}
      >
        {children}
      </div>
    )
  }

}

export default Markdown