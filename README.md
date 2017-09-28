# React schema form

Light weight react components for rendering forms based on [JSON Schema](http://json-schema.org/)

Using dependency injection to support multiple rendering themes/libraries. Easily extendable by replacing some or all rendering components. Inspired by libraries like *json-schema-form*.

## Getting started

**Install**

    npm install react-schemaform --save

**Usage**

    import SchemaForm from 'react-schemaform';

    const schema = {
        title: 'Test schema',
        type: 'object',
        properties: {
            name: { type: 'string' },
            age: { type: 'integer' }
        }
    };

    const value = {
        name: 'John Doe',
        age: 42
    };

    <SchemaForm
        schema={ schema }
        value={ value }
        onChange={ value => console.info('Form change', value) }
    />

## Status

*Work in progress*

### TODO

- Inline validation
- Unsupported validation keywords (list below)

## JSON Schema feature support

**Schema keywords**

- title
- description
- type
  - string
  - number
  - integer
  - boolean
  - null
  - array
  - object
- maxLength (counter)
- items (schema object)
- properties
- additionalProperties
- const

**TODO (not supported)**

- items (array of schemas)
- format
  - date-time
  - email
  - hostname
  - ipv4
  - ipv6
  - uri
  - uri-reference
  - uri-template
  - json-pointer
- multipleOf
- maximum
- exclusiveMaximum
- minimum
- exclusiveMinimum
- maxLength
- minLength
- pattern
- additionalItems
- maxItems
- minItems
- uniqueItems
- contains
- maxProperties
- minProperties
- required
- patternProperties
- dependencies
- propertyNames
- enum
- allOf
- anyOf
- oneOf
- not
- readOnly

## Rendering frameworks

- Basic (no framework)
- [Material UI](http://www.material-ui.com/) (WIP)
