import { useEffect, useState } from 'react';

import GlobalStyles from './GlobalStyles';
import { API_URL } from "./constants";

import Card from "./Components/Card/Card";
import { Container, Heading, ErrorMessage } from "./App.styled";

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // I used fetch because there's no need for 3rd party library like axios to handle a single request
    const getAccounts = async () => {
      const response = await fetch(API_URL);

      if (!response.ok) {
        setError('An error ocurred while loading locations data, please try again later.')
      } else {
        const data = await response.json();
        setAccounts(data)
      }
    }

    getAccounts();
  }, []);

  return (
    <>
      <Heading>All Locations</Heading>
      <Container>
        {accounts.map(account => {
          return <Card key={account.id} {...account} />
        })}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
