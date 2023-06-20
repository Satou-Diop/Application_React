import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';

function App({signOut,user}) {
  return (
    <div >
      <header >
        
        <button onClick={signOut}> Deconnexion </button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
