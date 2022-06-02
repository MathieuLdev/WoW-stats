import styled from "styled-components";

const Wrapper = styled.section`
	form {
		position: relative;
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		height: 280px;
	}

	select,
	input,
	a {
		height: 2.8rem;
		font-size: 1.4rem;
		color: var(--color-primary);
		width: 300px;
		margin: 0 auto 5px;
		padding-left: 5px;
		background: transparent;
		backdrop-filter: blur(4px);
		border: 2px solid;
		border-color: var(--color-primary);
	}

	option {
		color: var(--color-primary);
		background: rgba(0, 0, 0, 0.9);
	}

	select,
	input[type="submit"],
	a {
		cursor: pointer;
	}

	input[type="submit"],
	a {
		position: relative;
		transition: 0.2s ease-in;

		&:hover {
			color: rgba(0, 0, 0, 0.9);
			background: whitesmoke;
		}

		&:focus {
			border-radius: 30px;
			letter-spacing: 2px;
		}
	}
`;

export default Wrapper;
