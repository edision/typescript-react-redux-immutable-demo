import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Counter from '../src/components/Counter';
import EasyDrag from 'COMPONENTS/EasyDrag';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf("Counter", module)
  .add("默认", () => (
    <Counter count={0} step={1} increment={action('increment')} decrement={action('decrement')} setStep={action('setStep')} />
  ));

storiesOf("EasyDrag", module)
.add("拖动测试", () => (<EasyDrag>我可以拖动</EasyDrag>));