import styled from "styled-components";

export const StyledWrapper = styled.div`
    margin: auto;
    width: 50%;

    h1 {
        text-align: center;
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color:  ${({theme}) => theme.colors.white};
        border: 1px solid ${({theme}) => theme.colors.pink};
        border-radius: 20px;
        padding: 2rem;

        label {
            margin: 3px 0;
        }
        input {
            height: 35px;
            border: 1px solid ${({theme}) => theme.colors.pink};
            border-radius: 20px;
        }
        p {
            color: red;
            font-size: 14px;
            margin: 0;
        }
        button {
            width: 50%;
            height: 30px;
            margin: auto;
            margin-top: 10px;
            background-color:  ${({theme}) => theme.colors.green};
            color: ${({theme}) => theme.colors.white};
            border-radius: 20px;
            border: none;
            cursor: pointer;
        }
    }
`

