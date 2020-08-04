export const snakeCaseToCamelCase = (string) => {
    let split = string.split("-");

    if(split.length) {
        const firstWord = split.shift();

        split = split.map(word => word.trim()).filter(word => word.length > 0).map(word => {
            const firstLetter = word.substring(0, 1).toUpperCase();
            const restOfTheWord = word.substring(1).toLowerCase();

            return `${firstLetter}${restOfTheWord}`;
        });

        split.unshift(firstWord);

        return split.join("");
    } else {
        return string;
    }
};