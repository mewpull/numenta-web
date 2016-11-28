// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import NextSection from 'numenta-web-shared-components/NextSection'
import {scrollToSection} from 'numenta-web-shared-utils/client'
import Section from 'numenta-web-shared-components/Section'

import MainSections, {getNextSection} from '../_MainSections'
import SectionCareers from './_Section'

const Default = (<SectionCareers key="sectionCareers" />)
const title = 'Careers & Team'


/**
 * Careers & Team page and MainSection wrapper - React view component.
 */
class CareersPage extends React.Component {

  constructor(props) {
    super(props)
    const next = getNextSection(Default)

    this.state = {
      sections: (
        <Section headline={true} open={true} title={title}>
          {Default}
          <NextSection {...next} />
        </Section>
      ),
    }
  }

  componentDidMount() {
    this.setState({
      sections: (<MainSections current={Default} />),
    })
  }

  componentDidUpdate() {
    scrollToSection(global.document.getElementById(Default.key))
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    return (
      <div>
        <Helmet title={title} />
        {sections}
      </div>
    )
  }
}

export default CareersPage