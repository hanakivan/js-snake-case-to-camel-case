import {snakeCaseToCamelCase} from './index';


test('tests case', () => {
    const myString = "text-transform";

    const camelCase = snakeCaseToCamelCase(myString);
    expect(camelCase).toBe("textTransform");
});