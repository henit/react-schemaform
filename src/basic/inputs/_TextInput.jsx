import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';

const block = bemCn('rsf-text-input');

export default class TextInput extends React.PureComponent {

    handleKeyDown(e) {
        const {
            onPressEnter,
            multiline
        } = this.props;

        if (!onPressEnter) {
            return;
        }

        const {
            keyCode,
            shiftKey: shiftKeyDown
        } = e;
        const enterKey = (keyCode === 13);

        if (enterKey) {
            // Enter key pressed
            if (multiline) {
                // .. in a multiline input
                if (onPressEnter && !shiftKeyDown) {
                    e.preventDefault(); // Avoid newline (default behaviour)
                    onPressEnter();
                }
            } else {
                // In a singleline input
                onPressEnter();
            }
        }
    }

    handleKeyUp(e) {
        // Auto-ajust height of textarea
        if (this.props.multiline) {
            this.fixHeight();
        }
    }

    fixHeight() {
        if (!this._textarea) {
            return;
        }

        const clientHeight = this._textarea.clientHeight;
        const scrollHeight = this._textarea.scrollHeight;

        if (scrollHeight > clientHeight) {
            this._textarea.style.height = `${Math.min(scrollHeight, this.props.maxHeight)}px`;
        }
    }

    componentDidMount() {
        this.fixHeight();
    }

    componentDidUpdate() {
        this.fixHeight();
    }

    render() {
        const {
            className,
            styled,
            type,
            placeholder,
            multiline,
            value,
            counter,
            maxLength,
            onChange,
            onFocus,
            onBlur
        } = this.props;

        const invalid = Boolean(maxLength && value.length > maxLength);
        const elementValue = value ? value.toString() : '';

        return (
            <div className={ block.mix(className)() }>
                { counter &&
                    <div className={ block('counter', { invalid })() }>
                        { value.length }{ maxLength && ` / ${maxLength}` }
                    </div>
                }
                { (multiline && type === 'text') ?
                    <textarea
                        rows="1"
                        className={ block('input', { multiline, styled })() }
                        value={ elementValue }
                        placeholder={ placeholder }
                        onChange={ onChange ? e => onChange(e.target.value) : undefined }
                        onFocus={ onFocus }
                        onBlur={ onBlur }
                        onKeyDown={ e => this.handleKeyDown(e) }
                        onKeyUp={ e => this.handleKeyUp(e) }
                        ref={ (input) => this._textarea = input } />
                    :
                    <input
                        className={ block('input', { styled })() }
                        type={ type }
                        value={ elementValue }
                        placeholder={ placeholder }
                        onChange={ onChange ? e => onChange(e.target.value) : undefined }
                        onFocus={ onFocus }
                        onBlur={ onBlur }
                        onKeyDown={ e => this.handleKeyDown(e) } />
                }
            </div>
        );
    }
}

TextInput.propTypes = {
    className: PropTypes.string,
    styled: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'number', 'email', 'url']),
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    counter: PropTypes.bool,
    maxLength: PropTypes.number, // Max value characters
    maxHeight: PropTypes.number, // Pixels
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onPressEnter: PropTypes.func
};

TextInput.defaultProps = {
    value: '',
    styled: true,
    type: 'text',
    multiline: false,
    maxHeight: 400
};
