import styled from "styled-components";

const Wrapper = styled.div`
	.stats-container {
		display: flex;
		flex-direction: column;
	}

	.stats {
		position: absolute;
		margin-top: 30px;
		display: flex;
		justify-content: space-evenly;
		width: 100vw;
		top: 50%;
		transform: translateY(-50%);
	}

	@media screen and (max-width: 850px) {
		.stats {
			flex-direction: column;
			text-align: center;
		}
	}
`;

export default Wrapper;
