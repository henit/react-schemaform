import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';
import Helpers from '../../Helpers';
import SchemaForm from '../../SchemaForm';

const block = bemCn('rsf-array-input');
const allTypes = ['string', 'number', 'null', 'boolean', 'object', 'array'];

export default class ArrayInput extends React.PureComponent {

    constructor(props) {
        super(props);

        this._inputRefs = {};

        this.toggleAddItem = this.toggleAddItem.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);

        this.state = {
            addItem: false,
            focus: null
        };
    }

    handleChange(value) {
        this.props.onChange(value);
    }

    toggleAddItem() {
        this.setState({
            addItem: !this.state.addItem
        });
    }

    handleAddItem() {
        const { schema, value, onChange } = this.props;
        onChange((value || []).concat(Helpers.getDefaultValue(schema.items)));
    }

    handleItemChange(key, value) {
        this.props.onChange(
            (this.props.value || []).map((item, i) =>
                i === key ? value : item
            )
        );
    }

    handleRemoveItem(index) {
        const { value, onChange } = this.props;
        onChange((value || []).filter((item, i) => Boolean(i !== index)));
    }

    render() {
        const { className, components, schema, value } = this.props;

        const multiple = Boolean((value || []).length > 0);
        const items = value || [];

        return (
            <div className={ block.mix(className)({ multiple })() }>
                { items.length > 0 &&
                    <div className={ block('items')() }>
                        { items
                            .map((itemValue, i) =>
                                <div className={ block('row')() } key={ `item-${i}` }>
                                    <SchemaForm
                                        components={ components }
                                        schema={ schema.items || { type: allTypes }}
                                        value={ itemValue }
                                        onChange={ value => this.handleItemChange(i, value) } />
                                    <button
                                        className={ block('button', { color: 'red' })}
                                        onClick={ () => this.handleRemoveItem(i) }>Delete</button>
                                </div>
                            )
                        }
                    </div>
                }

                <div className={ block('add-item')() }>
                    <button
                        className={ block('button', { color: 'green' })() }
                        onClick={ this.handleAddItem }>Add item</button>
                </div>

            </div>
        );
    }
}

ArrayInput.propTypes = {
    className: PropTypes.string,
    components: PropTypes.object,
    schema: PropTypes.object.isRequired,
    value: PropTypes.array,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onPressEnter: PropTypes.func
};

ArrayInput.defaultProps = {
    components: {},
    value: [],
    autoFocus: false
};
