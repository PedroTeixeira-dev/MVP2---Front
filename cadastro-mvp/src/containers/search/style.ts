import styled from "styled-components";

const SearchS = styled.div`
max-width: 1240px;
margin: 0 auto;
margin-top: 40px;
text-align: center;
margin-bottom: 24px;

h2 {
    margin-bottom: 16px;
    border-bottom: solid black 2px;
}

.search--header {
    margin-bottom: 24px;
    label {
        margin-right: 8px;
    }
    input {
        width: 210px;
        margin-right: 8px;
    }
    button {
        border-radius: 8px;
        width: 100px;
        font-weight: bold;
        cursor: pointer;
    }
}

input {
    margin-right: 8px;
}

button {
    margin-top: 8px;
    margin-right: 8px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 8px;
    font-size: 16px;
    color: green;
    font-weight: bold;
    border: green 2px solid;
    cursor: pointer;
}

.edit--btn {
    font-size: 16px;
    color: blue;
    font-weight: bold;
    border: blue 2px solid;
    cursor: pointer;
}

.del--btn {
    font-size: 16px;
    color: red;
    font-weight: bold;
    border: red 2px solid
}

`

export default SearchS
