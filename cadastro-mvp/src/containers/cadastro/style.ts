import styled from "styled-components";

const CadastroS = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.cep {
    display: block;
    margin-bottom: 16px;

    input {
        margin-right: 8px;
        margin-left: 8px;
        border-radius: 8px;
    }

    button {
        font-size: 16px;
    }
}

form {
    margin-top: 16px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 20px;
    width: 50%;
    border: 2px solid black;
    border-radius: 16px;
    box-shadow: 0px 16px 24px 4px;

    label {
        margin-bottom: 8px;
    }

    input {
        margin-bottom: 8px;
        height: 24px;
        border-radius: 8px;
    }

    button {
        margin-top: 16px;
        font-size: 24px;
        border-radius: 8px;
        padding: 4px;
        cursor: pointer;
        color: green;
        font-weight: bold;
        border: green 2px solid
    }
}
`

export default CadastroS