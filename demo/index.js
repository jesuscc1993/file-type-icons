const resolutions = [256, 16];

const fileGroups = resolutions.map((size) => ({
  path: `../PNG/${size}px/`,
  size,
  classname: size !== 256 ? 'pixelated' : undefined,
}));

const fetchJson = (url) => {
  return fetch(url).then((response) => response.json());
};

const initialize = () => {
  const output = jQuery('#output');

  fileGroups.forEach(({ path, size, classname }) => {
    const groupElement = jQuery(`
    <div class="group open px${size}"></div>
  `);
    // groupElement.css('--icon-size', `${Math.min(size, 96)}px`);
    const groupTitle = jQuery(`
    <div class="group__title">
      <span class="chevron">&#709;</span>
      ${size} x ${size}
    </div>
  `);
    const groupContent = jQuery(`<div class="group__content"></div>`);
    groupTitle.on('click', () => groupElement.toggleClass('open'));

    const filesGrid = jQuery(`<div class="grid"></div>`);
    files.forEach((file) => {
      const filePath = `${path}/${file}.png`;
      filesGrid.append(`
      <a class="cell" href="${filePath}" target="_blank">
        <img class="icon ${classname || ''}" src="${filePath}" title="${file}">
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
