import { TrpcProvider } from './lib/trpc'
import { AllNewsPage } from './pages/AllNewsPages'

export const App = () => {
  return (
    <TrpcProvider>
      <AllNewsPage />
    </TrpcProvider>
  )
}
