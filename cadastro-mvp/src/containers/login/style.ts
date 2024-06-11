import styled from "styled-components";

const LoginS = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: sans-serif;

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

export default LoginS