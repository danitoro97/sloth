import { h, Component, Event, EventEmitter, Prop } from '@stencil/core';
import { SlideValue, AdvancedType } from '../../types/sloth-component';

@Component({
  tag: 'sloth-component',
  shadow: true,
  styles: `
    :host {
      background-color: red;
    }
    input {
      padding: 10px;
    }
  `,
})
export class Slide {
  @Event() slideChanged!: EventEmitter<SlideValue>;

  @Prop() min: number = 0;

  @Prop() max: number = 10;

  @Prop() advanced: AdvancedType = null;

  @Prop({ mutable: true }) value?: string | null = '';

  changeOccurred = (e: Event) => {
    this.value = (e.currentTarget as HTMLInputElement).value;
    this.slideChanged.emit({
      value: parseInt(this.value, 10),
    });
  };

  render() {
    return <input type="range" name="points" min={this.min} max={this.max} onChange={this.changeOccurred} />;
  }
}
