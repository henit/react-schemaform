import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';
import _TextInput from './_TextInput';
import './NumberInput.scss';

const block = bemCn('rsf-number-input');

export default function NumberInput({ schema, value, onChange }) {
    return (
        <_TextInput
            className={ block() }
            value={ value }
            styled={ true }
            type="number"
            placeholder={ schema.title }
            multiline={ Boolean(!schema.maxLength || schema.maxLength > 255) }
            minLength={ schema.minLength }
            maxLength={ schema.maxLength }
            counter={ Boolean(schema.minLength !== undefined || schema.maxLength !== undefined) }
            onChange={ onChange } />
    );
}

NumberInput.propTypes = {
    className: PropTypes.string,
    schema: PropTypes.object.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onPressEnter: PropTypes.func
};

NumberInput.defaultProps = {
    value: '',
    autoFocus: false
};
