import style from "./style.module.css";

export default function Homepage() {
	return (
		<div className={style.container}>
			<header>
				<p>CS & EPS</p>
				<p>ABSORTECH</p>
			</header>

			<main>
				<h1>FAÇA SEU CADASTRO</h1>
				<div>
					<label htmlFor="name">Name: </label>
					<input type="name" />

					<label htmlFor="usuario">Usuário: </label>
					<input type="usuario" />

					<label htmlFor="email">E-mail: </label>
					<input type="email" />

					<label htmlFor="senha">Senha: </label>
					<input type="senha" />

					<label htmlFor="confirmarSenha">Confirmar Senha: </label>
					<input type="confirmarSenha" />

					<button>CADASTRAR</button>
				</div>
			</main>

			<footer>
				<iframe
					src=""
					frameBorder="0"
				></iframe>
				<div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Explicabo ex facere non aut sit. Vel, quos
						voluptatum dolorum nam labore exercitationem laudantium
						similique, unde repellat necessitatibus itaque
						reiciendis modi numquam!
					</p>
				</div>
				<div>
					<p>contatos</p>
				</div>
			</footer>
		</div>
	);
}
