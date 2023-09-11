const fileGroups = [
  { path: '../PNG', size: 256 },
  { path: '../PNG/16px', size: 16, classname: 'pixelated' },
];

const fetchJson = (url) => {
  return fetch(url).then((response) => response.json());
};

const initialize = () => {
  const output = jQuery('#output');

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
        `<img class="icon ${fileGroup.classname}" src="${fileGroup.path}/${file}.png" alt="${file}">`
      );
    });

    groupElement.append(filesGrid);
    output.append(groupElement);
  });
};

initialize();
