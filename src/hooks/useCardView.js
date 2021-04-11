import { useCallback, useState } from 'react';

const useCardViews = (id) => {
  const [cardViews, setCardViews] = useState({});

  if (cardViews[id] === undefined) {
    setCardViews(prevViews => ({
      ...prevViews,
      [id]: 0,
    }));
  }

  const incrementView = useCallback(viewId => {
    if (viewId) {
      setCardViews(prevViews => ({
        ...prevViews,
        [viewId]: prevViews[viewId] + 1,
      }));
    }
  }, []);

  return { cardViews, incrementView };
}

export default useCardViews;