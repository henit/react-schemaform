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

**Schema keywords supported**

- [x] title
- [x] description
- [x] type
  - [x] string
  - [x] number
  - [x] integer
  - [x] boolean
  - [x] null
  - [x] array
  - [x] object
- [x] maxLength (counter)
- [x] items (schema object)
- [ ] items (array of schemas)
- [x] properties
- [x] additionalProperties
- [x] const

- [ ] format
  - [ ] date-time
  - [ ] email
  - [ ] hostname
  - [ ] ipv4
  - [ ] ipv6
  - [ ] uri
  - [ ] uri-reference
  - [ ] uri-template
  - [ ] json-pointer
- [x] readOnly
- [ ] multipleOf
- [x] maximum
- [x] exclusiveMaximum
- [x] minimum
- [x] exclusiveMinimum
- [x] maxLength
- [x] minLength
- [x] pattern
- [ ] additionalItems
- [x] maxItems
- [x] minItems
- [ ] uniqueItems
- [ ] contains
- [x] maxProperties
- [x] minProperties
- [x] required
- [x] patternProperties
- [ ] dependencies
- [ ] propertyNames
- [x] enum
- [ ] allOf
- [ ] anyOf
- [ ] oneOf
- [ ] not

## Rendering frameworks

- Basic (no framework)
- [Material UI](http://www.material-ui.com/) (WIP)
