import { Envelope, Lock } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { TextInput } from '../components/TextInput';
import { Text } from '../components/Text';
import { Logo } from '../logo';


export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

   async function handleSignIn(event: FormEvent) {
        event.preventDefault()

       await axios.post('/sessions', {
            email: 'jorgebruchado@gmail.com',
            password: '12345678',
        })

        setIsUserSignedIn(true)
}
    return (

        <div className="w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100">
            <header className="flex flex-col items-center">
                <Logo />

                <Heading size="lg" className="mt-4">
                    Ignite Lab
                </Heading>

                <text fontSize="lg" className="text-gray-400 mt-01"> Faça login e comece a usar! </text>

            </header>

            <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
                { isUserSignedIn && <Text>Login realizado!</Text> }
                
                <label htmlFor="email" className="flex flex-col gap-3">
                    <text className="font-semibold"> Endereço de e-mail</text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input type="email" id="email" placeholder='Digite seu e-mail' />
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-3">
                    <text className="font-semibold"> Sua senha</text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input type="password" id="password" placeholder='******' />
                    </TextInput.Root>
                </label>


                <label htmlFor='remember' className="flex items-center gap-2 mt-1">
                    <Checkbox id="remember" />
                    <text className="text-gray-200 text-xs">Lembrar de mim por 30 dias</text>
                </label>

                <Button className='mt-4' type="submit"> Entrar na plataforma
                </Button>

            </form>

            <footer className="flex flex-col items-center gap-4 mt-8 text-xs">
                <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
                <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
            </footer>


        </div>
     )
    }