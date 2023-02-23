export const downloadImage = (urlImage: string, author: string) => {
  fetch(urlImage)
    .then(async (response) => await response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');

      a.href = url;

      a.download = `image_${author}.jpg`;

      a.click();

      URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error(error);
    });
};
