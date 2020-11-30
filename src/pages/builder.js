import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import EditorJs from 'react-editor-js';
import {EDITOR_JS_TOOLS} from './utilities/tools';
import BuilderWrap from './primitives/builderWrap';
class builderApp extends React.Component {
  componentDidMount() {
    this.editorInstance; // access editor-js
  }
  
  render() {
    return (
      
      <Layout location={this.props.location}>
        <BuilderWrap >
          <EditorJs 
            tools={EDITOR_JS_TOOLS}
            instanceRef={instance => this.editorInstance = instance}
          />
        </BuilderWrap>
      </Layout>
    )
  }
}

export default builderApp
