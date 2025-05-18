// Export all components and types
export * from './types';
export { ApiKeyProvider } from './Context/AppContext';
export { Chat } from './components/Chat';  // Add this line to export the Chat component
// Add other exports as needed

module.exports = {
  entry: './src/index.ts',
  // other webpack config...
}


