import MainTemplate from "../../templates/mainForm/MainForm";
/* import Generic from "../../components/Generic/Generic"; */
import Styles from "./NotFound.module.css";

function NotFound() {
    return (
        <MainTemplate> 
                <section className={Styles.NotFoundContainer}>
                    <h1>404 - Página não encontrada 🚀</h1>
                    <div className={Styles.NotFoundContent}>

                        <p>
                            Opa! Parece que a página que você está tentando acessar não existe.
                            Talvez ela tenha tirado férias, resolvido explorar o universo ou se
                            perdido em algum lugar entre dois buracos negros. 🌌
                        </p>
                        <p>
                            Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
                            segurança para a <a href='/'>página principal</a> ou{' '}
                            <a href='/history'>para o histórico</a> — ou pode ficar por aqui e
                            fingir que achou uma página secreta que só os exploradores mais
                            legais conseguem acessar. 🧭✨
                        </p>
                        <p>
                            Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
                            segurança para a <a href='/'>página principal</a> ou{' '}
                            <a href='/history'>para o histórico</a> — ou pode ficar por aqui e
                            fingir que achou uma página secreta que só os exploradores mais
                            legais conseguem acessar. 🧭✨
                        </p>
                        <p>
                            Enquanto isso, fica aqui uma reflexão: "Se uma página não existe na
                            internet, será que ela existiu de verdade?" 🤔💭
                        </p>
                    </div>
                </section>
        </MainTemplate>
    );
}

export default NotFound;