import styled from "styled-components";

const Wrapper = styled.div`
	.battleground-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 10px;
		row-gap: 15px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		height: 60%;
		padding-left: 10px;
		padding-right: 10px;
	}
	.battleground {
		text-align: center;
		background-color: rgb(0, 0, 0, 0.3);
		border-radius: 8px;
		align-self: center;
	}
`;

export default Wrapper;
