/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import styled from 'styled-components';
import Particles from 'react-particles-js';
import Logo from '../../components/Logo';
import Tweet from '../../components/Tweet';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Logo title="andrewjdick" subtitle="coming soon..." />

        <Tweet />

        <Particles
          height="100vh" width="100vw" params={{
            particles: {
              number: {
                value: 369,
                density: {
                  enable: true,
                  value_area: 6734.330655635195,
                },
              },
              color: {
                value: '#ffffff',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.7733646887996272,
                random: true,
                anim: {
                  enable: true,
                  speed: 3.196803196803197,
                  opacity_min: 0.08791208791208792,
                  sync: false,
                },
              },
              size: {
                value: 1,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 473.48858497936357,
                color: '#ffffff',
                opacity: 0,
                width: 0.6313181133058181,
              },
              move: {
                enable: true,
                speed: 1.5782952832645452,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'bounce',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 0,
                  rotateY: 0,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'bubble',
                },
                onclick: {
                  enable: true,
                  mode: 'bubble',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 215.7842157842158,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 239.76023976023976,
                  size: 2,
                  duration: 0.4795204795204795,
                  opacity: 0.8471528471528471,
                  speed: 3,
                },
                repulse: {
                  distance: 625.2994534720358,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
    );
  }
}
