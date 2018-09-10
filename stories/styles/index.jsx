import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DesignTokens from './DesignTokens';
import Fonts from './Fonts';
import Typography from './typography';

const wrapHTML = (component) => {
  return (
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
      {component}
    </div>
  );
}

// -------------------------------------------------------------------------
const StyleStories = storiesOf('Styles', module)

StyleStories.add('Fonts', () => wrapHTML(<Fonts />));
StyleStories.add('Colors', () => wrapHTML(<DesignTokens />));
StyleStories.add('Typography', () => wrapHTML(<Typography />));
// -------------------------------------------------------------------------

export default StyleStories;
