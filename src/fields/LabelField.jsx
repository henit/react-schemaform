import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';

const block = bemCn('rsf-label-field');

export default class LabelField extends React.PureComponent {

    render() {
        const { schema, children } = this.props;

        return (
            <div className={ block() }>
                <label className={ block('label')() }>{ schema.title || schema.type || <em>Unnamed field</em> }</label>
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

LabelField.propTypes = {
    schema: PropTypes.object.isRequired,
    children: PropTypes.node
};
