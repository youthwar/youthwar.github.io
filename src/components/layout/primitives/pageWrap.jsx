import React from 'react'
import styled from '@emotion/primitives'
import { rhythm, scale } from '../../../utils/typography';

export default styled.div({
  backgroundColor: 'whiteSmoke',
  minHeight: '100vh', /* will cover the 100% of viewport */
  overflow: 'hidden',
  display: 'block',
  position: 'relative',
  paddingBottom: '0px' /* height of your footer */
});