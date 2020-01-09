import Ajv from 'ajv';
import data from '../data.json';
import schema from '../schema/data-schema.json';

const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate(data);
if (!valid) {
    console.log(validate.errors);
    throw new Error('Validation failed');
}
