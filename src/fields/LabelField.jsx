import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';

const block = bemCn('rsf-label-field');

export default class LabelField extends React.PureComponent {

    render() {
        const { propName, schema, children } = this.props;

        return (
            <div className={ block() }>
                <label className={ block('label')() }>{ schema.title || propName || schema.type || <em>Unnamed field</em> }</label>
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
    propName: PropTypes.string,
    schema: PropTypes.object.isRequired,
    children: PropTypes.node
};
