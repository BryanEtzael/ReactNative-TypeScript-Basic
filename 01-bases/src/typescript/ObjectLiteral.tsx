
interface Person {
    age: number,
    firstName: string,
    lastName: string,
    address: Address,
}
interface Address {
    country: string,
    houseNo: string,
    street?: string,
}
export const ObjectLiteral = () => {
    const person: Person = {
        age: 28,
        firstName: 'Bryan',
        lastName: 'Delgado',
        address: {
            country: 'Mexico',
            houseNo: '21'
        },
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}
