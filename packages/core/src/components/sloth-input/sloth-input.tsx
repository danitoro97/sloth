import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { SlothInputType, SlothInputAutocomplete } from '../../types/sloth-input';

@Component({
  tag: 'sloth-input',
  styleUrl: 'sloth-input.scss',
  shadow: true,
})
export class SlothInput implements ComponentInterface {

  // TODO: Check global attributes
  // TODO: Add event listeners
  // Source: https://www.w3schools.com/tags/tag_input.asp

  /**
   * Id assigned to input element
   */
  @Prop() sid!: string;

  /**
   * Specifies a filter for what file types the user can pick
   * from the file input dialog box (only for type="file")
   *
   * Values: file_extension, audio/*, video/*, image/*, media_type
   */
  @Prop() accept: string;

  /**
   * Specifies an alternate text for images
   * (only for type="image")
   */
  @Prop() alt: string;

  /**
   * Specifies whether an <input> element should have
   * autocomplete enabled
   */
  @Prop() autocomplete: SlothInputAutocomplete;

  /**
   * Specifies that an <input> element should
   * automatically get focus when the page loads
   */
  @Prop() autofocus: boolean;

  /**
   * Specifies that an <input> element should be
   * pre-selected when the page loads
   * (for type="checkbox" or type="radio")
   */
  @Prop() checked: boolean;

  /**
   * Specifies that an <input> element should be disabled
   */
  @Prop() disabled: boolean;

  /**
   * Specifies the form the <input> element belongs to
   */
  @Prop() form: string;

  /**
   * Defines that form elements should not be validated
   * when submitted
   */
  @Prop() formnovalidate: boolean;

  /**
   * Refers to a <datalist> element that contains
   * pre-defined options for an <input> element
   */
  @Prop() list: string;

  /**
   * Specifies the maximum value for an <input> element
   */
  @Prop() max: number | string;

  /**
   * Specifies the maximum number of characters
   * allowed in an <input> element
   */
  @Prop() maxlength: number;

  /**
   * Specifies a minimum value for an <input> element
   */
  @Prop() min: number | string;

  /**
   * Specifies the minimum number of characters
   * required in an <input> element
   */
  @Prop() minlength: number;

  /**
   * Specifies that a user can enter more than
   * one value in an <input> element
   */
  @Prop() multiple: boolean;

  /**
   * Specifies the name of an <input> element
   */
  @Prop() name: string;

  /**
   * Specifies a regular expression that an
   * <input> element's value is checked against
   */
  @Prop() pattern: string;

  /**
   * Specifies a short hint that describes
   * the expected value of an <input> element
   */
  @Prop() placeholder: string;

  /**
   * Specifies that an input field is read-only
   */
  @Prop() readonly: boolean;

  /**
   * Specifies that an input field must be
   * filled out before submitting the form
   */
  @Prop() required: boolean;

  /**
   * Specifies the width, in characters, of an <input> element
   */
  @Prop() size: number;

  /**
   * Specifies the interval between legal
   * numbers in an input field
   */
  @Prop() step: number | any;

  /**
   * Specifies the type <input> element to display
   */
  @Prop() type: SlothInputType = "text";

  /**
   * Specifies the value of an <input> element
   */
  @Prop() value: string;

  @Prop() label: string;

  render() {
    return (
      <Host>
        {this.label && <label htmlFor={this.sid}>{this.label}</label>}
        <input
          id={this.sid}
          accept={this.accept}
          alt={this.alt}
          autocomplete={this.autocomplete}
          autofocus={this.autofocus}
          checked={this.checked}
          disabled={this.disabled}
          form={this.form}
          formnovalidate={this.formnovalidate}
          list={this.list}
          max={this.max}
          maxlength={this.maxlength}
          min={this.minlength}
          minlength={this.minlength}
          multiple={this.multiple}
          name={this.name || this.sid}
          pattern={this.pattern}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
          size={this.size}
          step={this.step}
          type={this.type}
          value={this.value}
        ></input>
      </Host>
    );
  }

}
