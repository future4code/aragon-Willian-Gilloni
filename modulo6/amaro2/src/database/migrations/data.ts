import { IProductDB, IproductTagDB, ITagDB } from "../../models/Product"
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "willian",
        email: "willian@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Luiz",
        email: "Luiz@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Valdomira",
        email: "Valdomira@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]

export const products: IProductDB[] = [
    {
        "id": "8371",
        "name": "VESTIDO TRICOT CHEVRON",
        "tags": ["balada", "neutro"]
    },
    {
        "id": "8367",
        "name": "VESTIDO MOLETOM COM CAPUZ MESCLA",
        "tags": ["balada"]
    },
    {
        "id": "8360",
        "name": "VESTIDO FEMININO CANELADO",
        "tags": ["neutro,delicado"]
    }
]

export const tags: ITagDB[] = [
    {
        "id": "201",
        "name": "neutro"
    },
    {
        "id": "202",
        "name": "balada"
    },
    {
        "id": "203",
        "name": "delicado"
    }
]

export const productsTags: IproductTagDB[] = [
    {
        "id": "301",
        "product_id": "8371",
        "tag_id": "201"
    },
    {
        "id": "302",
        "product_id": "8371",
        "tag_id": "202"
    },
    {
        "id": "303",
        "product_id": "8367",
        "tag_id": "202"
    },
]