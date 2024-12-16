
export const BasicTypes = () => {
    const name: string = 'Bryan';
    const age: number = 28;
    const isActive: boolean = true;
    const powers: string[] = ['React', 'ReactNative', 'Atro'];
    return (
        <>
            <h3>Tipos de datos</h3>
            {name} - {age} - {isActive ? 'Activo' : 'No Activo'}
            <p>
                {powers.join(', ')}
            </p>
        </>
    )
}
