import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn';

const block = bemCn('rsf-input-field-description');

export default class FieldDescription extends React.PureComponent {

    render() {
        const { className, schema } = this.props;

        return (
            <div className={ block.mix(className)() }>
                { schema.readOnly &&
                    <em>(Read only) </em>
                }
                { schema.const &&
                    <em>(Const) </em>
                }
                { schema.description &&
                    <span className={ block('description')() }>
                        { schema.description }
                    </span>
                }
            </div>
        );
    }

}

FieldDescription.propTypes = {
    className: PropTypes.string,
    schema: PropTypes.object.isRequired
};
