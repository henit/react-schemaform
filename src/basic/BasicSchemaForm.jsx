import React from 'react';
import PropTypes from 'prop-types';
import SchemaForm from '../SchemaForm';

import LabelField from '../fields/LabelField';
import InputField from '../fields/InputField';

import ArrayInput from './inputs/ArrayInput';
import BooleanInput from './inputs/BooleanInput';
import IntegerInput from './inputs/IntegerInput';
import NumberInput from './inputs/NumberInput';
import ObjectInput from './inputs/ObjectInput';
import StringInput from './inputs/StringInput';
import EnumInput from './inputs/EnumInput';

export default class BasicSchemaForm extends React.PureComponent {

    render() {
        const schemaFieldProps = {
            ...this.props,
            components: {
                ...this.props.components,
                ArrayField: LabelField,
                BooleanField: InputField,
                IntegerField: LabelField,
                MultiTypeField: LabelField,
                NullField: LabelField,
                NumberField: LabelField,
                ObjectField: LabelField,
                StringField: LabelField,
                EnumField: LabelField,
                ArrayInput,
                BooleanInput,
                IntegerInput,
                NumberInput,
                ObjectInput,
                StringInput,
                EnumInput
            }
        };

        return (
            <SchemaForm { ...schemaFieldProps } />
        );
    }
}

BasicSchemaForm.propTypes = {
    schema: PropTypes.object,
    components: PropTypes.object,
    value: PropTypes.any,
    onChange: PropTypes.func
};

BasicSchemaForm.defaultProps = {
    schema: {},
    components: {},
    value: undefined,
    onChange: undefined
};
