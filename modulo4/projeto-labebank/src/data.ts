export type AccountStatement = [{
    accountValue: number,
    descriptionBillToPay: string,
    paymentDate: string

}]

export type User = {
    id: number,
    name: string,
    cpf: string,
    birthDate: string,
    balance:number,
    accountStatement: AccountStatement
}


export let users: User[] = [
    {
        id: 3,
        name: "will",
        cpf: "371.035.228-22",
        birthDate: "12/10/1989",
        balance:8000,
        accountStatement: [{
            accountValue: 800,
            descriptionBillToPay: "conta de agua",
            paymentDate: "12/04/2021"
        }
        ]
    },

    {
        id: 1,
        name: "luiz",
        cpf: "371.035.268-22",
        birthDate: "21/10/1980",
        balance:3000,
        accountStatement: [{
            accountValue: 1800,
            descriptionBillToPay: "conta de luz",
            paymentDate: "12/02/2021"
        }
        ]

    },

    {
        id: 2,
        name: "valdomira",
        cpf: "371.035.258-22",
        birthDate: "30/10/1996",
        balance:1000,
        accountStatement: [{
            accountValue: 300,
            descriptionBillToPay: "rachadinha",
            paymentDate: "12/03/2021"
        }
        ]
    },

    {
        id: 4,
        name: "marcos",
        cpf: "371.035.248-22",
        birthDate: "21/10/2000",
        balance:20000,
        accountStatement: [{
            accountValue: 1000,
            descriptionBillToPay: "iptu",
            paymentDate: "12/04/2021"
        }
        ]
    },

    {
        id: 5,
        name: "matheus",
        cpf: "371.035.238-22",
        birthDate: "21/10/1980",
        balance:3000,
        accountStatement: [{
            accountValue: 100,
            descriptionBillToPay: "ipva",
            paymentDate: "12/05/2021"
        }
        ]
    },
]