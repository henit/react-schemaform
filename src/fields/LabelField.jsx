import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';
import FieldDescription from './FieldDescription';
import FieldValidation from './FieldValidation';

const block = bemCn('rsf-label-field');

export default class LabelField extends React.PureComponent {

    render() {
        const { propName, value, schema, children } = this.props;

        const label = schema.title || propName || schema.type || <em>Unnamed field</em>;

        return (
            <div className={ block() }>
                <label className={ block('label')() }>{ label }</label>
                { children }
                <FieldDescription schema={ schema } />
                <FieldValidation schema={ schema } value={ value } />
            </div>
        );
    }

}

LabelField.propTypes = {
    propName: PropTypes.string,
    value: PropTypes.any,
    schema: PropTypes.object.isRequired,
    children: PropTypes.node
};
