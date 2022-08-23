import styled from "styled-components";

const Wrapper = styled.div`
	.avatar {
		width: 300px;
	}
	.media {
		display: flex;
	}
	.infos {
		padding-left: 10px;
	}

	@media screen and (max-width: 550px) {
		.media {
			flex-direction: column;
			margin-top: 30px;
		}
		.infos {
			margin: 10px 0;
		}
	}
`;

export default Wrapper;
