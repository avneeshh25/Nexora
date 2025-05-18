import React, { useEffect, useState } from 'react';

interface WithApiKeyProps {
  apiKey: string;
  serverUrl: string;
}

export function withApiKeyVerification<T extends WithApiKeyProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithApiKeyVerification(props: T) {
    const [isValidKey, setIsValidKey] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const verifyApiKey = async () => {
        try {
          const response = await fetch(`http://localhost:5000/apikey/verify`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: props.apiKey }),
          });

          if (!response.ok) {
            throw new Error('Invalid API key');
          }

          setIsValidKey(true);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to verify API key');
          setIsValidKey(false);
        } finally {
          setLoading(false);
        }
      };

      verifyApiKey();
    }, [props.apiKey, props.serverUrl]);

    if (loading) {
      return <div className="text-center p-4">Verifying API key...</div>;
    }

    if (error || !isValidKey) {
      return (
        <div className="text-red-500 text-center p-4">
          {error || 'Invalid API key'}
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}