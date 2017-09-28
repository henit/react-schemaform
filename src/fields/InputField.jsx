import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';
import './InputField.scss';

const block = bemCn('rsf-input-field');

export default class InputField extends React.PureComponent {

    render() {
        const { schema, children } = this.props;

        return (
            <div className={ block() }>
                { children }
                { schema.description &&
                    <span className={ block('description')() }>
                        { schema.description }
                    </span>
                }
            </div>
        );
    }

}

InputField.propTypes = {
    schema: PropTypes.object.isRequired,
    children: PropTypes.node
};
