import React from 'react'
import sys from 'native-system-components'
import Code from './Code'
import {Platform} from 'react-primitives'
const SampHelper = props =>
  <Code
    is={{
      web: 'samp'
    }[Platform.OS] || Code}
    {...props}
  />

export const Samp = sys({
  is: SampHelper
})

Samp.displayName = 'Samp'

export default Samp
