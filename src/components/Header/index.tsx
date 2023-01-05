import { HeaderContainer, HeaderContent, NewTramsactionsButton } from "./styles"
import logoImg from '../../assets/logo.svg'

export function Header (){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <NewTramsactionsButton>Nova Transação</NewTramsactionsButton>
            </HeaderContent>
        </HeaderContainer>
    )
}