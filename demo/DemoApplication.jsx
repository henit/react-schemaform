import React from 'react';
// import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
// import SchemaForm from 'src/index.jsx';
import BasicSchemaForm from 'src/basic/BasicSchemaForm';
import 'src/basic/styles.scss';

export default class DemoApplication extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            demos: 'deep-object'
        };
        this._changeHandlers = {};
    }

    renderSchemaExample(title, formKey, schema) {
        this._changeHandlers[formKey] = this._changeHandlers[formKey]
            || (value => this.setState({ [formKey]: value }));

        const value = this.state[formKey];

        return (
            <div className="demo">
                { title &&
                    <h3>{ title }</h3>
                }
                <Tabs initialSelectedIndex={ 1 }>
                    <Tab label="Schema">
                        <Paper style={{ padding: 16 }} zDepth={ 1 } rounded={ false }>
                            <pre>{ JSON.stringify(schema, null, 4) }</pre>
                        </Paper>
                    </Tab>
                    <Tab label="Basic" >
                        <Paper style={{ padding: 16 }} zDepth={ 1 } rounded={ false }>
                            <BasicSchemaForm
                                schema={ schema }
                                value={ value }
                                onChange={ this._changeHandlers[formKey] }
                            />
                        </Paper>
                    </Tab>
                    <Tab label="Material UI">
                        <Paper style={{ padding: 16 }} zDepth={ 1 } rounded={ false }>
                            {/*<SchemaForm
                                render={ RenderMaterialUI }
                                schema={ schema }
                                value={ this.state[formKey] }
                                onChange={ this._changeHandlers[formKey] } />
                            */}
                        </Paper>
                    </Tab>
                </Tabs>

                <Paper style={{ marginTop: 8 }} zDepth={ 1 } rounded={ false }>
                    <Toolbar>
                        <ToolbarGroup>
                            Value
                        </ToolbarGroup>
                    </Toolbar>

                    <div className="value">
                        { value === undefined ?
                            <em>undefined</em>
                            :
                            <pre>{ JSON.stringify(value, null, 4) }</pre>
                        }
                    </div>
                </Paper>
            </div>
        );
    }

    handleOpen(demos) {
        this.setState({ demos });
    }

    render() {
        /* eslint-disable max-len */
        return (
            <div>
                <h1>React Schema Form</h1>

                <div className="row">
                    <div className="menu">
                        <Paper style={{ padding: 16, marginTop: 8 }} zDepth={ 1 } rounded={ false }>
                            <Menu
                                value={ this.state.demos }
                                onItemTouchTap={ (e, comp) => this.handleOpen(comp.props.value) }
                                disableAutoFocus
                            >
                                <Subheader>Primitive types</Subheader>
                                <MenuItem value="string" primaryText="String" />
                                <MenuItem value="number" primaryText="Number" />
                                <MenuItem value="integer" primaryText="Integer" />
                                <MenuItem value="boolean" primaryText="Boolean" />
                                <MenuItem value="null" primaryText="Null" />
                                <MenuItem value="array" primaryText="Array" />
                                <MenuItem value="object" primaryText="Object" />
                                <Divider />

                                <Subheader>Multiple types</Subheader>
                                <MenuItem value="multiple-types" primaryText="Multiple types" />
                                <Divider />

                                <Subheader>More complex structures</Subheader>
                                <MenuItem value="deep-object" primaryText="Deep object" />

                                {/*
                                <Subheader>With oneOf</Subheader>
                                <Subheader>With anyOf</Subheader>
                                <Subheader>With allOf</Subheader>
                                */}
                            </Menu>
                        </Paper>
                    </div>

                    { this.state.demos === 'string' &&
                        <div className="demos">
                            { this.renderSchemaExample('Simple schema', 'string-1', {
                                type: 'string'
                            }) }

                            { this.renderSchemaExample('Short string', 'string-2', {
                                title: 'String primitive',
                                type: 'string',
                                maxLength: 32
                            }) }

                            { this.renderSchemaExample('Long string', 'string-3', {
                                title: 'String primitive',
                                type: 'string'
                            }) }
                        </div>
                    }

                    { this.state.demos === 'number' &&
                        <div className="demos">
                            { this.renderSchemaExample('Number', 'number-1', {
                                type: 'number'
                            }) }

                            { this.renderSchemaExample('Number', 'number-2', {
                                title: 'Number',
                                description: 'Number type',
                                type: 'number'
                            }) }
                        </div>
                    }

                    { this.state.demos === 'integer' &&
                        <div className="demos">
                            { this.renderSchemaExample('Integer', 'integer-1', {
                                type: 'integer'
                            }) }

                            { this.renderSchemaExample('Integer', 'integer-2', {
                                title: 'Integer',
                                description: 'Integer type',
                                type: 'integer'
                            }) }
                        </div>
                    }

                    { this.state.demos === 'boolean' &&
                        <div className="demos">
                            { this.renderSchemaExample('Boolean', 'boolean-1', {
                                type: 'boolean'
                            }) }

                            { this.renderSchemaExample('Boolean', 'boolean-2', {
                                title: 'Boolean value',
                                type: 'boolean'
                            }) }
                        </div>
                    }

                    { this.state.demos === 'array' &&
                        <div className="demos">
                            { this.renderSchemaExample('Array of strings', 'array-1', {
                                title: 'Array',
                                description: 'Array type',
                                type: 'array',
                                items: { type: 'string' }
                            }) }

                            { this.renderSchemaExample('Array of numbers', 'array-2', {
                                title: 'Array',
                                description: 'Array type',
                                type: 'array',
                                items: { type: 'number' }
                            }) }

                            { this.renderSchemaExample('Array of objects', 'array-3', {
                                title: 'Array',
                                description: 'Array type',
                                type: 'array',
                                items: { type: 'object' }
                            }) }

                            { this.renderSchemaExample('Array (no item schema)', 'array-4', {
                                type: 'array'
                            }) }


                        </div>
                    }

                    { this.state.demos === 'object' &&
                        <div className="demos">
                            { this.renderSchemaExample('Object', 'object-1', {
                                title: 'Object value',
                                type: 'object',
                                properties: {
                                    name: { type: 'string' },
                                    age: { type: 'number' }
                                },
                                required: ['name']
                            }) }

                            { this.renderSchemaExample('Object', 'object-2', {
                                type: 'object'
                            }) }
                        </div>
                    }

                    { this.state.demos === 'null' &&
                        <div className="demos">
                            { this.renderSchemaExample('Null', 'null-1', {
                                type: 'null'
                            }) }

                            { this.renderSchemaExample('Null', 'null-2', {
                                title: 'Null value',
                                type: 'null'
                            }) }
                        </div>
                    }

                    { this.state.demos === 'multiple-types' &&
                        <div className="demos">
                            { this.renderSchemaExample('Multiple types', 'multitype-1', {
                                type: ['string', 'number']
                            }) }

                            { this.renderSchemaExample('Multiple types', 'multitype-2', {
                                title: 'Multiple types',
                                type: ['string', 'object', 'null']
                            }) }
                        </div>
                    }

                    { this.state.demos === 'deep-object' &&
                        <div className="demos">
                            { this.renderSchemaExample('Multiple object props', 'deep-object-1', {
                                title: 'Example schema',
                                type: 'object',
                                properties: {
                                    name: { type: 'string', title: 'Name', description: 'User name' },
                                    email: { type: 'string', format: 'email', title: 'E-mail' },
                                    createdAt: { type: 'string', format: 'date-time', description: 'User creation timestamp' },
                                    verified: { type: 'boolean', title: 'Verified', description: 'Is user verified by e-mail' },
                                    articles: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: { type: 'string', readOnly: true },
                                                title: { type: 'string', maxLength: 128 },
                                                content: { type: 'string' },
                                                published: { type: 'boolean', title: 'Published' },
                                                pinned: { type: 'boolean' }
                                            }
                                        }
                                    },
                                    config: {
                                        type: 'object',
                                        properties: {
                                            notifications: { type: 'boolean', title: 'Notifications', description: 'Receive notifications?' },
                                            twoFactorAuthentication: { type: 'boolean' },
                                            public: { type: 'boolean', title: 'Public', description: 'Show on website' }
                                        }
                                    }
                                },
                                required: []
                            }) }
                        </div>
                    }
                </div>
            </div>
        );
        /* eslint-enable max-len */
    }

}
