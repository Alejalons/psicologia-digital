export const renderSwitch = (param, item, handleOnchange, isValid)  => {
    switch(param) {
        case 'input':
            return  <input 
                        type={item.typeInput}
                        name={item.nameInput}
                        className={`${item.classNameInput} ${isValid(item.nameInput) && 'is-invalid'}`}
                        id={item.idInput}
                        autoComplete="off"
                        onChange={handleOnchange}
                    />;
        case 'select':
            return  <select name={item.nameInput}
                            className={`${item.classNameInput} ${isValid(item.nameInput) && 'is-invalid'}`} 
                            id={item.idInput}
                            onChange={handleOnchange}
                    >
                        {
                            item.option.map((i, k) => {
                                return (
                                    <option
                                        value={i.value}
                                        key={k}
                                    >{i.description}</option>
                                )
                            })
                        }
                    </select>
        case 'textarea':
            return  <textarea
                        name={item.nameInput}
                        type={item.typeInput}
                        className={`${item.classNameInput} ${isValid(item.nameInput) && 'is-invalid'}`}
                        id={item.idInput}
                        onChange={handleOnchange}
                        autoComplete="off"
                        rows="3"
                    />
        default:
            return <p>¡No info!</p>;
    }
}