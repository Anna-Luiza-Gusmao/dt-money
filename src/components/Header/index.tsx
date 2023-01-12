import { HeaderContainer, HeaderContent, NewTramsactionsButton } from "./styles"
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionsModal } from "../NewTransactionsModal"

export function Header (){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                    <NewTramsactionsButton>Nova Transação</NewTramsactionsButton>
                    </Dialog.Trigger>

                    <NewTransactionsModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}