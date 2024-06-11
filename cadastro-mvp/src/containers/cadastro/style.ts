import styled from "styled-components";

const CadastroS = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: sans-serif;

.cep {
    display: block;
    margin-bottom: 16px;

    input {
        margin-right: 8px;
        margin-left: 8px;
    }

    button {
        font-size: 16px;
    }
}

form {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 20px;
    width: 50%;

    label {
        margin-bottom: 8px;
    }

    input {
        margin-bottom: 8px;
        height: 24px;
    }

    button {
        margin-top: 16px;
        font-size: 24px;
    }
}
`

export default CadastroS