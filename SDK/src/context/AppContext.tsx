import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect
} from 'react';

interface ApiKeyContextType {
  apiKey: string;
  isValid: boolean;
  feature: any;
  user: any;
  verifyApiKey: (key: string) => Promise<boolean>;
  setApiKey: (key: string) => void;
}

interface ApiKeyProviderProps {
  children: ReactNode;
  apiKey: string;
}

// Custom error class for API key validation failures
export class ApiKeyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ApiKeyError';
  }
}

const ApiKeyContext = createContext<ApiKeyContextType>({
  apiKey: '',
  isValid: false,
  feature: null,
  user: null,
  verifyApiKey: async (_key: string) => false,
  setApiKey: (_key: string) => {}
});

export const ApiKeyProvider: React.FC<ApiKeyProviderProps> = ({ 
  children,
  apiKey: initialApiKey 
}) => {
  const [apiKey, setApiKey] = useState<string>(initialApiKey);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [feature, setFeature] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const verifyApiKey = useCallback(async (key: string): Promise<boolean> => {
    try {
      const res = await fetch('http://localhost:5000/apikey/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key })
      });
      
      const data = await res.json();
      
      if (!data.valid) {
        throw new ApiKeyError('Invalid API key');
      }
      
      setIsValid(true);
      setApiKey(key);
      setFeature(data.feature ?? null);
      setUser(data.user ?? null);
      setError(null);
      return true;
    } catch (err) {
      setIsValid(false);
      setFeature(null);
      setUser(null);
      setError(err instanceof Error ? err : new Error('Failed to verify API key'));
      return false;
    }
  }, []);

  // Automatically verify the initial API key when component mounts
  useEffect(() => {
    if (initialApiKey) {
      verifyApiKey(initialApiKey);
    }
  }, [initialApiKey, verifyApiKey]);

  // If API key is invalid and error exists, throw it
  if (!isValid && error) {
    throw error;
  }

  return (
    <ApiKeyContext.Provider
      value={{ apiKey, isValid, feature, user, verifyApiKey, setApiKey }}
    >
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = (): ApiKeyContextType => useContext(ApiKeyContext);