import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { goToLoginPage } from "../routes/coordinator";
import { requestSignUp } from "../services/requests";

function SignupPage () {

    useUnprotectedPage()

    const navigate = useNavigate()

    const {form, onChange,clear} = useForm({name:"", email:"", password:""})
    
    const signup = (event)=> {
        event.preventDefault()
        requestSignUp(form, clear, navigate)
    }

    return (
        <main>
            <Header
                isProtected={false}
            />
            <hr/>
            <section>
                <h2>Cadastro de Novo Usuário</h2>
                <form onSubmit={signup}>
                    <label htmlFor="name">Nome:</label>
                    <input
                    id="name"
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"o nome deve ter no minimo 3 caracteres"}
                    required
                    />
                    <br/>
                    <label htmlFor="email">Email:</label>
                    <input
                    id="email"
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                     required
                    />
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input
                    id="password"
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    pattern={"^.{8,30}$"}
                    title={"o nome deve ter no minimo 8 e no máximo 30 caracteres"}
                    required
                    />
                    <br/>
                    <button type={"submit"}>cadastrar usuário</button>
                </form>
                <button onClick={()=> goToLoginPage(navigate)}>Voltar</button>
            </section>
        </main>
    );
}

export default SignupPage;