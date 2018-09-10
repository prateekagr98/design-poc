import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import variables from '../../src/library/styles/variables.json';
import styles from '../../src/library/styles/utilities/colors.scss';

const COLORS = variables.colors;

const DesignTokens = () => {
  return (
    <div style={{padding: "10px"}}>
      <h3>Design Tokens</h3>
      <p>
        Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.
      </p>

      <table className="table table-bordered">
        <tr className="table-active">
          <th>Name</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
        {
          Object.entries(COLORS).map(([key, value]) => {
            return (
              <tr>
                <td>{key}</td>
                <td>{value}</td>
                <td>
                  <span className={`bg-${key}`} style={{"width": "30px", "height": "30px", "borderRadius": "3px", "display": "inline-block"}}></span>
                  <span className={`text-${key}`}>Lorem Ipsum</span>
                </td>
              </tr>
            );
          })
        }
      </table>

    </div>
  )
}

export default DesignTokens;
