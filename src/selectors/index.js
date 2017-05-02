export const filterProfile = (list, username) => {
  const result = list.filter(card => card.username === username)
  if(result.length === 0) return '';
  return result[0];
};

export const filterOtherCards = (list, cardIds) => {
  const result = list.filter(card => {
    if(cardIds.includes(card.id)) return card
  })
  return result;
};
