
const contas = [
    {
        email: "astrodev@labenu.com",
        senha: "abc123",
    },
    {
        email: "bananinha@gmail.com",
        senha: "bananinha",
    },
];

function verificaLogin(email, senha) {

    let checkEmail = contas.findIndex(usuario => usuario.email === email);
    let checkSenha = contas.findIndex(usuario => usuario.senha === senha);

    if (checkEmail !== -1 && email.includes("@")) {
        if (checkSenha !== -1 && senha.length >= 6) {

            if (checkEmail === checkSenha) {
                return console.log("Login realizado com sucesso!");
            } else {
                return console.log("Email ou senha incorretos.");
            }
        } else {
            return console.log("Senha deve possuir no mínimo 6 caracteres");
        }
    } else {
        return console.log("Email inválido");
    }
}

verificaLogin("astrodev.labenu.com", "abc123");
verificaLogin("astrodev@labenu.com", "abc123");
verificaLogin("astrodev@labenu.com", "abc1");
verificaLogin("bananinha@gmail.com", "banana");
verificaLogin("bananinha@gmail.com", "bananinha");
