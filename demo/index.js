const fileGroups = [
  { path: '../PNG', size: 256 },
  { path: '../PNG/16px', size: 16 },
];

const fetchJson = (url) => {
  return fetch(url).then((response) => response.json());
};

const initialize = () => {
  const output = jQuery('#output');

  fetchJson('files.json').then((files) => {
    fileGroups.forEach((fileGroup) => {
      const groupKey = `${fileGroup.size}px`;

      const groupElement = jQuery(`
        <div class="group">
          <h2>${groupKey}</h2>
        </div>
      `);
      const filesGrid = jQuery(`<div class="grid"></div>`);

      files.forEach((file) => {
        filesGrid.append(
          `<img class="icon ${groupKey}" src="${fileGroup.path}/${file}.png" title="${file}">`
        );
      });

      groupElement.append(filesGrid);
      output.append(groupElement);
    });
  });
};

initialize();
