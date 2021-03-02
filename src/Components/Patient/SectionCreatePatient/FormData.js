export const InputData = [
    {
        classnameBox:"row col-md-12 col-lg-6",
        boxone: [
            {
                typeInputTag:'input',
                classNameDiv: 'col-md-6 mt-2',
                htmlforLabel: 'name-input',
                idInput: 'name-input',
                classNameLabel: 'form-label',
                nameLabel:'Nombre',
                typeInput: 'text',
                nameInput: 'name',
                classNameInput: 'form-control',
            },{
                typeInputTag:'input',
                classNameDiv: 'col-md-6 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'age-input',
                idInput: 'age-input',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Edad',
                // ==========input===================
                typeInput: 'number',
                nameInput: 'age',
                classNameInput: 'form-control',
            },{
                typeInputTag:'input',
                classNameDiv: 'col-md-6 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'date-birthday',
                idInput: 'date-birthday',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Fecha de Nacimiento',
                // ==========input===================
                typeInput: 'date',
                nameInput: 'birthday',
                classNameInput: 'form-control',
            },
            {
                typeInputTag:'select',
                classNameDiv: 'col-md-6 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'groupSelec-genger',
                idInput: 'groupSelec-genger',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Sexo',
                // ==========input===================
                nameInput: 'selecGenger',
                classNameInput: 'form-control',
                // =============option=================
                option: [
                    {
                        value: "default",
                        isSelected: true,
                        description: '--Seleccionar--'
                    },
                    {
                        value: "1",
                        isSelected: false,
                        description: 'Femenino'
                    },
                    {
                        value: "2",
                        isSelected: false,
                        description: 'Masculino'
                    },
                    {
                        value: "3",
                        isSelected: false,
                        description: 'No se identifica'
                    }
                ]
            },{
                typeInputTag:'input',
                classNameDiv: 'col-md-6 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'scholarship',
                idInput: 'scholarship',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Escolaridad',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'scholarship',
                classNameInput: 'form-control',
            },{
                typeInputTag:'select',
                classNameDiv: 'col-md-6 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'martital-status',
                idInput: 'martital-status',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Estado Civil',
                // ==========input===================
                nameInput: 'selectMaritalStatus',
                classNameInput: 'form-control',
                // =============option=================
                option: [
                    {
                        value: "default",
                        isSelected: true,
                        description: '--Seleccionar--'
                    },
                    {
                        value: "1",
                        isSelected: false,
                        description: 'Soltero/a'
                    },
                    {
                        value: "2",
                        isSelected: false,
                        description: 'Casado/a'
                    },
                    {
                        value: "3",
                        isSelected: false,
                        description: 'Viudo/a'
                    },
                    {
                        value: "4",
                        isSelected: false,
                        description: 'Divorciado/a'
                    },
                    {
                        value: "5",
                        isSelected: false,
                        description: 'Separado/a'
                    },
                    {
                        value: "6",
                        isSelected: false,
                        description: 'Conviviente'
                    }
                ]
            },{
                typeInputTag:'input',
                classNameDiv: 'col-md-6 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'profession',
                idInput: 'profession',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Ocupación',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'profession',
                classNameInput: 'form-control',
            },{
                typeInputTag:'input',
                classNameDiv: 'col-md-6 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'address',
                idInput: 'address',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Domicilio',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'address',
                classNameInput: 'form-control',
            },
            {
                typeInputTag:'input',
                classNameDiv: 'col-md-6 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'Cellphone',
                idInput: 'Cellphone',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Celular',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'Cellphone',
                classNameInput: 'form-control',
            },{
                typeInputTag:'input',
                classNameDiv: 'col-md-6 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'phone',
                idInput: 'phone',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Teléfono',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'phone',
                classNameInput: 'form-control',
            },
            {
                typeInputTag:'input',
                classNameDiv: 'col-md-12 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'email',
                idInput: 'email',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Correo Electrónico',
                // ==========input===================
                typeInput: 'mail',
                nameInput: 'email',
                classNameInput: 'form-control',
            },
            {
                typeInputTag:'textarea',
                classNameDiv: 'col-md-12 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'consul',
                idInput: 'consul',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Motivo Consulta',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'consul',
                classNameInput: 'form-control',
            },{
                typeInputTag:'textarea',
                classNameDiv: 'col-md-12 mt-2 mb-3',
                // ==========iguales label/input================
                htmlforLabel: 'interview',
                idInput: 'interview',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Entrevista Inicial',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'interview',
                classNameInput: 'form-control',
            }
        ]
    },
    {
        classnameBox:"row col-md-12 col-lg-6",
        boxone: [
            {
                typeInputTag:'textarea',
                classNameDiv: 'col-md-12 mt-3',
                // ==========iguales label/input================
                htmlforLabel: 'history-textarea',
                idInput: 'history-textarea',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Historia Clínica',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'clinicHistory',
                classNameInput: 'form-control',
            },
            {
                typeInputTag:'textarea',
                classNameDiv: 'col-md-12',
                // ==========iguales label/input================
                htmlforLabel: 'family-input',
                idInput: 'family-input',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Dinámica Familiar',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'family',
                classNameInput: 'form-control',
            },
            {
                typeInputTag:'textarea',
                classNameDiv: 'col-md-12 mt-2',
                // ==========iguales label/input================
                htmlforLabel: 'diagnosis-textarea',
                idInput: 'diagnosis-textarea',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Hipótesis y Posible Diagnóstico',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'diagnosis',
                classNameInput: 'form-control',
            },
            {
                typeInputTag:'textarea',
                classNameDiv: 'col-md-12 mt-3',
                // ==========iguales label/input================
                htmlforLabel: 'FamilyNucleus-textarea',
                idInput: 'FamilyNucleus-textarea',
                // =============label=============
                classNameLabel: 'form-label',
                nameLabel:'Descripción del Núcleo Familiar',
                // ==========input===================
                typeInput: 'text',
                nameInput: 'FamilyNucleus',
                classNameInput: 'form-control',
            }
        ]
    }
]