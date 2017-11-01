import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';

const block = bemCn('rsf-enum-input');

export default class EnumInput extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (!e.target.value) {
            this.props.onChange(undefined);
            return;
        }

        this.props.onChange(e.target.value);
    }

    render() {
        const {
            className,
            schema,
            value,
            autoFocus,
            onFocus,
            onBlur
        } = this.props;

        const optionValues = schema.enum || [];

        return (
            <div className={ block.mix(className)() }>
                <select
                    className={ block('input')() }
                    value={ value }
                    onChange={ this.handleChange }
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    autoFocus={ autoFocus }>

                    <option></option>
                    { optionValues.map(optionValue => {
                        const valueText = optionValue
                            // camelCase => camel case
                            .replace(/([a-z]{1})([A-Z]{1})/g, (match, a, b) => `${a} ${b.toLowerCase()}`)
                            // All lower case
                            .toLowerCase()
                            // lo_dash => lo dash
                            .replace(/([a-zA-Z0-9]{1})_([a-zA-Z0-9]{1})/g, (match, a, b) => `${a} ${b}`);

                        return (
                            <option
                                key={ `value-${optionValue}` }
                                value={ optionValue }>

                                { valueText.charAt(0).toUpperCase() + valueText.substr(1) }
                            </option>
                        );
                    }) }
                </select>
            </div>
        );
    }
}

EnumInput.propTypes = {
    propName: PropTypes.string,
    className: PropTypes.string,
    schema: PropTypes.object.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

EnumInput.defaultProps = {
    value: false,
    autoFocus: false
};
