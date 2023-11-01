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
    const groupElement = jQuery(`
      <div class="group px${fileGroup.size}">
        <div class="title">${fileGroup.size}px</div>
      </div>
    `);
    const groupContent = jQuery(`<div class="content"></div>`);
    const filesGrid = jQuery(`<div class="grid"></div>`);

    files.forEach((file) => {
      const path = `${fileGroup.path}/${file}.png`;
      filesGrid.append(`
        <a href="${path}" target="_blank">
          <img class="icon ${fileGroup.classname}" src="${path}" title="${file}">
        </a>
      `);
    });

    groupContent.append(filesGrid);
    groupElement.append(groupContent);
    output.append(groupElement);
  });
};

initialize();
