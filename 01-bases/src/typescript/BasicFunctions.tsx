const addTwoNumbers = (a: number, b: number): string => {
    return `${a + b}`;
};
export const BasicFunctions = () => {
    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es = {addTwoNumbers(2, 4)}</span>
        </>
    )
}
