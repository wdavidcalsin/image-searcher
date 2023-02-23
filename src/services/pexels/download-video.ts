export const downloadVideo = (linkVideo: string, author: string) => {
  fetch(linkVideo)
    .then(async (response) => await response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');

      link.href = url;

      link.download = `video_${author}.mp4`;

      link.click();

      URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error(error);
    });
};
