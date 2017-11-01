import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';
import FieldDescription from './FieldDescription';
import FieldValidation from './FieldValidation';

const block = bemCn('rsf-input-field');

export default class InputField extends React.PureComponent {

    render() {
        const { value, schema, children } = this.props;

        return (
            <div className={ block() }>
                { children }
                <FieldDescription schema={ schema } />
                <FieldValidation schema={ schema } value={ value } />
            </div>
        );
    }

}

InputField.propTypes = {
    value: PropTypes.any,
    schema: PropTypes.object.isRequired,
    children: PropTypes.node
};
