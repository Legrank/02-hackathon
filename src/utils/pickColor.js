/**
 * Returns className color for progress bar accroding to technology
 * @param {string} technology name of technology (HTML, CSS...)
 * @returns string className
 */
export const pickColor = (technology) => {
  switch (technology) {
    case "html":
      return " bg-success";
    case "react":
      return " bg-info";
    case "css":
      return " bg-warning";
    case "javaScript":
      return " bg-danger";
    default:
      return "";
  }
};
