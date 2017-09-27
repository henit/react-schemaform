import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';

const block = bemCn('schema-form');

export default class SchemaForm extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleStringChange = this.handleStringChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleIntegerChange = this.handleIntegerChange.bind(this);

        this.state = {
            addItem: false
        };
    }

    toggleAddItem() {
        this.setState({
            addItem: !this.state.addItem
        });
    }

    handleChange(value) {
        this.props.onChange(value);
    }

    handleStringChange(value) {
        this.props.onChange(value || undefined);
    }

    handleNumberChange(value) {
        this.props.onChange(parseFloat(value) || undefined);
    }

    handleIntegerChange(value) {
        this.props.onChange(parseInt(value) || undefined);
    }

    render() {
        const { components, schema, value, autoFocus } = this.props;

        if (schema.const) {
            return (
                <div>
                    <em>Null</em><br />
                    { value }
                </div>
            );
        }

        if (Array.isArray(schema.type)) {
            return <em>Multiple types not supported yet</em>;
        }

        switch (schema.type) {
            case 'null':
                return <em>Null</em>;

            case 'object': {
                const { ObjectField, ObjectInput } = components;
                return (
                    <ObjectField schema={ schema }>
                        <ObjectInput
                            components={ components }
                            schema={ schema }
                            value={ value }
                            onChange={ this.handleChange } />
                    </ObjectField>
                );
            }

            case 'array': {
                const { ArrayField, ArrayInput } = components;
                return (
                    <ArrayField schema={ schema }>
                        <ArrayInput
                            components={ components }
                            schema={ schema }
                            value={ value }
                            onChange={ this.handleChange } />
                    </ArrayField>
                );
            }

            case 'integer': {
                const { IntegerField, IntegerInput } = components;
                return (
                    <IntegerField schema={ schema }>
                        <IntegerInput
                            schema={ schema }
                            value={ value }
                            onChange={ this.handleIntegerChange }
                            autoFocus={ autoFocus } />
                    </IntegerField>
                );
            }

            case 'number': {
                const { NumberField, NumberInput } = components;
                return (
                    <NumberField schema={ schema }>
                        <NumberInput
                            schema={ schema }
                            value={ value }
                            onChange={ this.handleNumberChange }
                            autoFocus={ autoFocus } />
                    </NumberField>
                );
            }

            case 'boolean': {
                const { BooleanField, BooleanInput } = components;
                return (
                    <BooleanField schema={ schema }>
                        <BooleanInput
                            schema={ schema }
                            value={ value }
                            onChange={ this.handleChange }
                            autoFocus={ autoFocus } />
                    </BooleanField>
                );
            }

            case 'string': {
                const { StringField, StringInput } = components;
                return (
                    <StringField schema={ schema }>
                        <StringInput
                            schema={ schema }
                            value={ value }
                            onChange={ this.handleStringChange }
                            autoFocus={ autoFocus } />
                    </StringField>
                );
            }
            default:
                return (
                    <em>Unsupported schema</em>
                );
        }

    }
}

SchemaForm.propTypes = {
    // key: PropTypes.string,
    components: PropTypes.object.isRequired,
    schema: PropTypes.object.isRequired,
    value: PropTypes.any,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func
};
