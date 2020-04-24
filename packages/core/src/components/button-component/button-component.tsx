import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: true,
})
export class Slide {

  @Prop() label: string;

  render() {
    return (
        <button>{this.label}</button>
    );
  }
}
