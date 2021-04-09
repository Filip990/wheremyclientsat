import { useEffect, useState } from 'react';

import GlobalStyles from './GlobalStyles';
import {Container, Heading} from "./App.styled";

import { getAccounts } from "./request";

import Card from "./Components/Card/Card";

const App = () => {

  const [accounts, setAccounts] = useState([]);

   useEffect(() => {
    getAccounts().then(acc => {
      setAccounts(acc.data)
    })

  },[])

  return (
    <div>
        <Heading>All Locations</Heading>
      <Container>
        {accounts && accounts.map(item => {
          return <Card key={item.id} {...item} />
        })}
      <GlobalStyles />
      </Container>
        </div>

  );
}

export default App;
