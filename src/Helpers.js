import 'core-js/fn/array/is-array';

let Helpers = {};

/**
 * Get default value for a given schema
 * @param {object} schema Schema
 * @param {boolean} required For schemas of object properties, send property required setting
 * @return {mixed} Default value
 */
Helpers.getDefaultValue = (schema = {}, required = false) => {
    if (schema.default !== undefined) {
        return schema.default;
    }

    if (schema.const !== undefined) {
        return schema.const;
    }

    if (!required) {
        return;
    }

    const type = Array.isArray(schema.type) ? (schema.type[0] || '') : schema.type;
    switch (type) {
        case 'null': return null;
        case 'boolean': return false;
        case 'object': return {};
        case 'array': return [];
        case 'integer':
        case 'number': return 0;
        case 'string': return '';
    }
};

export default Helpers;
