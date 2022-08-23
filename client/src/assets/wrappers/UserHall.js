import styled from "styled-components";

const Wrapper = styled.div`
	.user-hall {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 70vh;
	}

	@media screen and (max-width: 950px) {
		.user-hall {
			flex-direction: column;
		}
	}
`;

export default Wrapper;
