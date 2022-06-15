import styled from "styled-components";

const Wrapper = styled.section`
	form {
		margin: 0 auto;
		width: 360px;
		position: relative;
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		height: 280px;
	}
	p {
		text-align: center;
		animation: dongle 1s;
	}

	@keyframes dongle {
		0% {
			transform: translateX(5%);
		}
		10% {
			transform: translateX(-5%);
		}
		30% {
			transform: translateX(5%);
		}
		50% {
			transform: translateX(-5%);
		}
		70% {
			transform: translateX(5%);
		}
		90% {
			transform: translateX(-5%);
		}
	}
`;

export default Wrapper;
