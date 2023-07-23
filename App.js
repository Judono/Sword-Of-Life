import RootNavigator from './src/navigation';
import { AuthenticatedUserProvider } from './src/providers';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
}