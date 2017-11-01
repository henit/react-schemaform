import _get from 'lodash/fp/get';
import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';
import Sert from 'sert-schema';

const block = bemCn('rsf-input-field-validation');

export default class FieldDescription extends React.PureComponent {

    render() {
        const { className, value, schema } = this.props;

        if (value === undefined) {
            return null;
        }

        const error = Sert.validate(schema, value);

        const messages = error && _get(['propMessages', ''], error);

        if (!messages) {
            return null;
        }

        return (
            <div className={ block.mix(className)() }>
                { messages.map(message =>
                    <em key={ message }>{ message }<br /></em>
                ) }
            </div>
        );
    }

}

FieldDescription.propTypes = {
    className: PropTypes.string,
    value: PropTypes.any,
    schema: PropTypes.object.isRequired
};
