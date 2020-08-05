import {snakeCaseToCamelCase} from './index';

const TEST_CASES = {
    "text-transform": "textTransform",
    "backgroundColor": "backgroundColor",
    "text_transform": "text_transform",
    "text-transform-ellipsys": "textTransformEllipsys",
};

Object.entries(TEST_CASES).forEach(pair => {
    const source = pair[0];
    const result = pair[1];

    test(`test case: ${source}: ${result}`, () => {
        expect(snakeCaseToCamelCase(source)).toBe(result);
    });
});