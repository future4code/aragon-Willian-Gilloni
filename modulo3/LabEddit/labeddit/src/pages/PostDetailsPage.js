import Header from "../components/Header";
import useProtectedPage from "../hooks/useProtectedPage";

function DetailsPage () {

    useProtectedPage()

    return (
        <main>
            <Header
                isProtected={true}
            />
            <hr/>
            <section>
                <h2>Informações do Post </h2>
            </section>
            <section>
                <h2>Escreva seu comentário</h2>
            </section>
            <section>
                <h2>Lista de Comentários</h2>
            </section>
        </main>
    );
}

export default DetailsPage;