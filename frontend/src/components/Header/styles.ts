import styled from "styled-components"


export const Container = styled.header`
    background: var(--dark-900);
    color: var(--white);
    position: fixed;
    width: 100%;
    font-size: 18px;
    font-weight: 300;
`
export const Content = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    height: 60px;
    align-items: center;
    
`
export const Logo = styled.h1`
    width: calc(100%/6);
`

export const Nav = styled.nav`
    display: flex;
    flex: 1;
    height: 100%;   
    a{
        display: flex;
        align-items: center;
        padding: 0 20px 0 20px;
        text-decoration: none;
        &:hover {
            color: var(--green-600) ;
        } 
    }
    
    
`
export const DivSearch = styled.div`
    position: relative;
    display: flex;
    
    input{
        padding: 0.2rem 0 0.2rem 1.5rem;
        border: 0;
        background: transparent;
        font-size: 18px;
        color: var(--white);
        
    }
    input:focus{
        outline: 0;
        background: var(--dark-700);
        border-radius: 0.25rem;
    }
    .bs-search{
        position: absolute;
        padding: 0.1875rem 0 0 0.2rem;
        top: 0.1875rem;
    }
`
