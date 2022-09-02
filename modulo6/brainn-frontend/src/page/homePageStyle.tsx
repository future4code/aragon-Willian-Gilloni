import styled from "styled-components"

export const StyleAll = styled.main`    
    #Color0{
        background-color: #6BEFA3;
    }
    #Color1{
        background-color: #8666EF;
    }
    #Color2{
        background-color: #DD7AC6;
    }
    #Color3{
        background-color: #FFAB64;
    }
    #Color4{
        background-color: #5AAD7D;
    }
    #Color5{
        background-color: #BFAF83;
    }
    .fullScreen {
        display: flex;
        height: 100vh;
    }
    .sectionLight {
        height: 100vh;
        width: 75vw;
        background-color: #EFEFEF;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .pEnd {
            text-align: center;
            width: 65%;
            font-style: normal;
            font-weight: 400;
            font-size: 1.3vw;
            line-height: 20px;
            color: #000000;
            opacity: 70%;
        }
    }
    .sectionColor {
        height: 100vh;
        width: 25vw;
        background-color: #6BEFA3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;   
    }
    @media ( max-width: 900px ) {
    .fullScreen {
        flex-direction: column;
    }
    
    .sectionLight {
        height: 60vh;
        width: 100vw;

        .pEnd {
            font-size: 3vw;
            line-height: 20.64px;
        }
    }
    
    .sectionColor {
        width: 100vw;
        height: 50vh;
        justify-content: space-around;
    }
}
`