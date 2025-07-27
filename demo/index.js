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
      <div class="group open px${fileGroup.size}"></div>
    `);
    const groupTitle = jQuery(`
      <div class="group__title">
        <span class="chevron">&#709;</span>
        ${fileGroup.size} x ${fileGroup.size}
      </div>
    `);
    const groupContent = jQuery(`<div class="group__content"></div>`);
    groupTitle.on('click', () => groupElement.toggleClass('open'));

    const filesGrid = jQuery(`<div class="grid"></div>`);
    files.forEach((file) => {
      const path = `${fileGroup.path}/${file}.png`;
      filesGrid.append(`
        <a class="cell" href="${path}" target="_blank">
          <img class="icon ${fileGroup.classname}" src="${path}" title="${file}">
          <span>${file}</span>
        </a>
      `);
    });

    groupContent.append(filesGrid);
    groupElement.append(groupTitle);
    groupElement.append(groupContent);
    output.append(groupElement);
  });
};

initialize();
