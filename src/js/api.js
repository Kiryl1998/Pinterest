let url = 'https://6535568ac620ba9358ec6737.mockapi.io/cards';
export let fetchHeader = (createCards) =>
  fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((task) =>
      task.forEach((element) => {
        createCards(element.file);
      })
    );
