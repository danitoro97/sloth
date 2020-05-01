import { h, Component, Prop } from '@stencil/core';
import  {
    SlothButtonMethod,
    SlothButtonTarget,
    SlothButtonType,
} from '../../types/sloth-button';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: true,
})
// TODO: #2 add unit test

export class Slide {
  //FIXME: #2 @arturobabaro add id prop

  /**
   * Specifies that a button should
   * automatically get focus when the page loads
   * @type boolean
   */
  @Prop() autofocus: boolean;

  /**
   * Specifies that a button should be disabled
   * @type boolean
   */
  @Prop() disabled: boolean;

  /**
   * Specifies which form the button belongs to
   * @type string form_id
   */
  @Prop() form: string;

  /**
   * Specifies where to send the form-data when
   * a form is submitted. Only for type="submit"
   * @type string URL
   */
  @Prop() formaction: string;

  /**
   * Specifies where to send the form-data when
   * a form is submitted. Only for type="submit"
   * @type SlothButtonMethod
   * application/x-www-form-urlencoded |
   * multipart/form-data |
   * text/plain
   */
  @Prop() formenctype: SlothButtonMethod;

  /**
   * Specifies how to send the form-data
   * (which HTTP method to use).
   * Only for type="submit"
   */
  @Prop() formmethod: SlothButtonMethod;

  /**
   * Specifies that the form-data should not
   * be validated on submission.
   * Only for type="submit"
   * @type boolean
   */
  @Prop() formnovalidate: boolean;

  /**
   * Specifies where to display
   * the response after submitting the form.
   * Only for type="submit"
   * @type SlothButtonTarget
   */
  @Prop() formtarget: SlothButtonTarget;

  /**
   * Specifies a name for the button
   * @type string
   */
  @Prop() name: string;

  /**
   * Specifies the type of button
   * @type button|reset|submit
   */
  @Prop() type: SlothButtonType;

  /**
   * Specifies an initial value for the button
   * @type string
   */
  @Prop() value: string;

  /**
   * Specifies a visible label for the button
   * @type string
   */
  @Prop() label: string;

 // TODO: add properties to template
  render() {
    return (
        <button>{this.label}</button>
    );
  }
}