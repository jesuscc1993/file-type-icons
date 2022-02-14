const fetchJson = (url) => {
  return fetch(url).then((response) => response.json());
};

const initialize = () => {
  const output = jQuery('#output');

  fetchJson('files.json').then((filesMap) => {
    Object.keys(filesMap).forEach((groupKey) => {
      const group = filesMap[groupKey];

      const groupElement = jQuery(`
        <div class="group">
          <h2>${group.title}</h2>
        </div>
      `);
      const filesGrid = jQuery(`<div class="grid"></div>`);

      group.files.forEach((file) => {
        filesGrid.append(
          `<img class="icon" src="../PNG${
            groupKey ? `/${groupKey}` : ``
          }/${file}.png" title="${file}">`
        );
      });

      groupElement.append(filesGrid);
      output.append(groupElement);
    });
  });
};

initialize();
