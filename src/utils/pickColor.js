/**
 * Returns className color
 * @param {string} color  (red, green, blue, yellow, cyan)
 * @returns string className
 */
export const pickColor = (color) => {
    switch (color) {
        case "green":
            return " bg-success";
        case "cyan":
            return " bg-info";
        case "yellow":
            return " bg-warning";
        case "red":
            return " bg-danger";
        case "blue":
            return " bg-primary";
        default:
            return "";
    }
};
