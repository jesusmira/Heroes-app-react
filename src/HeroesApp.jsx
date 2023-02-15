import { AuthProvider } from './auth';
import { Approuter } from './router/Approuter';


export const HeroesApp = () => {
  return (
    <>
        <AuthProvider>
          <Approuter/>
        </AuthProvider>
    </>
  )
}
