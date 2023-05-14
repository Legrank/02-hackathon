export function setToggle(id,prevState) {
    const prevLS = parse() ?? {};
    return localStorage.setItem(
        "favourite",
        JSON.stringify({ ...prevLS, [id]: !prevState[id] })
    );
}
export function parse() {
    return JSON.parse(localStorage.getItem("favourite"));
}

const localStorageService = {
    setToggle,
    parse,
};
export default localStorageService;
