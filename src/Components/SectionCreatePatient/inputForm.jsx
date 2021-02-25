import React from 'react';
import {InputData} from './FormData';



function inputForm() {
    const renderSwitch = (param, item)  => {
        switch(param) {
            case 'input':
                return  <input 
                            type={item.typeInput}
                            name={item.nameInput}
                            className={item.classNameInput} 
                            id={item.idInput}
                            autoComplete="off"
                            // onChange={handleOnChange}
                        />;
            case 'select':
                return  <select name={item.nameInput}
                                className={item.classNameInput} 
                                id={item.idInput}
                                // onChange={handleOnChange}
                        >
                            {
                                item.option.map((i) => {
                                    return (
                                        <option
                                            value={i.value}
                                        >{i.description}</option>
                                    )
                                })
                            }
                        </select>
            case 'textarea':
                return  <textarea
                            name={item.nameInput}
                            type={item.typeInput}
                            className={item.classNameInput}
                            id={item.idInput}
                            rows="3"
                        />
            default:
                return <p>¡No info!</p>;
        }
    }

    return (
        <>
            
                {
                    InputData.map((item, key) => {
                        return (
                            <div className={item.classnameBox} key={key}>
                                {
                                    item.boxone.map((dat, index) => {
                                        return (
                                            <div 
                                                className={dat.classNameDiv}
                                                key={index}
                                            > 
                                                <label 
                                                    htmlFor={dat.htmlforLabel}
                                                    className={dat.classNameLabel}
                                                >{dat.nameLabel}</label>
                                                
                                                {renderSwitch(dat.typeInputTag, dat)}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
        </>
    )
}

export default inputForm;
