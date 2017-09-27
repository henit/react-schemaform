import _ from 'lodash/fp';
import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';
import Helpers from '../../Helpers';
import SchemaForm from '../../SchemaForm';
import _TextInput from './_TextInput';
// import addIcon from '../icons/add.svg';
import './ObjectInput.scss';

const block = bemCn('rsf-object-input');
const allTypes = ['string', 'number', 'null', 'boolean', 'object', 'array'];
const allTypesSchema = { type: allTypes };

// <img className={ block('icon')() } src={ addIcon } />

export default class ObjectInput extends React.PureComponent {

    constructor(props) {
        super(props);

        // this.toggleAddItem = this.toggleAddItem.bind(this);
        this.handleChangeAddPropKey = this.handleChangeAddPropKey.bind(this);
        this.handleAddProp = this.handleAddProp.bind(this);

        this.state = {
            addProp: '',
            focus: null
        };
    }

    handleChange(value) {
        this.props.onChange(value);
    }

    /*toggleAddItem() {
        this.setState({
            addItem: !this.state.addItem
        });
    }*/

    handleChangeAddPropKey(addProp) {
        this.setState({ addProp });
    }

    handleAddProp() {
        this.props.onChange({
            ...(this.props.value || {}),
            [this.state.addProp]: Helpers.getDefaultValue()
        });
        this.setState({
            addProp: ''
        });
    }

    handlePropChange(propName, value) {
        this.props.onChange({
            ...(this.props.value || {}),
            [propName]: value
        });
    }

    render() {
        const { className, components, schema, value } = this.props;

        // const numItems = (value || []).length;

        return (
            <div className={ block.mix(className)() }>
                { _.union(Object.keys(value || {}), Object.keys(schema.properties || {}))
                    .map(propName =>
                        <div className={ block('row')() } key={ `item-${propName}` }>
                            <SchemaForm
                                components={ components }
                                schema={ _.get(`properties.${propName}`, schema) || allTypesSchema }
                                value={ _.get(propName, value) }
                                onChange={ value => this.handlePropChange(propName, value) } />
                            {/*<button onClick={ this.toggleAddItem }>Cancel</button>*/}
                        </div>
                    )
                    /*.concat(schema.additionalProperties !== false ?
                        <div className={ block('row')() } key="add-this-----------">
                            <_TextInput
                                value={ this.state.addProp }
                                onChange={ this.handleChangeAddPropKey }
                                placeholder="Property key" />

                            <button
                                className={ block('add-button')() }
                                onClick={ this.handleAddProp }>
                                Add property
                            </button>
                        </div>
                        // this.state.addProp
                        :
                        <div></div>
                    )*/


                    // Concat to array to avoid re-mount and loosing focus
                    /*.concat((this.state.addProp && false) ?
                        <div className={ block('row')() } key={ `item-${numItems}` }>
                            <span><_TextInput value={ 'x' } onChange={ () => null } placeholder="key" />: </span>
                            <SchemaForm
                                components={ components }
                                autoFocus={ true }
                                schema={ schema.items || allTypesSchema}
                                onChange={ this.handleAdd } />
                            <button onClick={ this.toggleAddItem }>Cancel</button>
                        </div>
                        :
                        []
                    )*/
                }

                { schema.additionalProperties !== false &&
                    <div className={ block('add-property')() }>
                        <_TextInput
                            className={ block('add-property-key')() }
                            value={ this.state.addProp }
                            placeholder="Property key"
                            onChange={ this.handleChangeAddPropKey } />

                        <button
                            className={ block('button', { color: 'blue' })() }
                            onClick={ this.handleAddProp }>Add property</button>
                    </div>
                }
            </div>
        );
    }
}

ObjectInput.propTypes = {
    className: PropTypes.string,
    components: PropTypes.object,
    schema: PropTypes.object.isRequired,
    value: PropTypes.object,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onPressEnter: PropTypes.func
};

ObjectInput.defaultProps = {
    components: {},
    value: {},
    autoFocus: false
};
