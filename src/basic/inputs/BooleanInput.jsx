import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';

const block = bemCn('rsf-boolean-input');

export default class BooleanInput extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.checked);
    }

    render() {
        const {
            className,
            // styled,
            schema,
            value
            // autoFocus,
            // onChange,
            // onFocus,
            // onBlur
        } = this.props;

        const label = schema.title || schema.description;
        const uid = `bool-${Math.round(Math.random()*10000000)}`;

        return (
            <div className={ block.mix(className)() }>
                <input
                    id={ uid }
                    className={ block('input')() }
                    type="checkbox"
                    onClick={ this.handleChange }
                    checked={ Boolean(value) } />
                { label &&
                    <label htmlFor={ uid }>{ label }</label>
                }
            </div>
        );
    }
}

BooleanInput.propTypes = {
    className: PropTypes.string,
    // styled: PropTypes.bool,
    schema: PropTypes.object.isRequired,
    value: PropTypes.bool,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

BooleanInput.defaultProps = {
    value: false,
    // styled: true,
    autoFocus: false
};
