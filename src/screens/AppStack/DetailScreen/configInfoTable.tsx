import moment from 'moment';

const config = (photoDetail: any) => {
  const { location } = photoDetail;
  return {
    sections: [
      {
        header: 'Informations',
        content: [
          {
            label: 'User',
            content: photoDetail.user.name,
          },
          {
            label: 'Taken',
            content: moment(photoDetail.createdAt).format(
              'MMMM Do YYYY, h:mm:ss a',
            ),
          },
          {
            label: 'Description',
            content: photoDetail.description,
          },
          {
            label: 'Location',
            content: `${location.city || 'No city'}, ${
              location.country || 'No country'
            }`,
          },
          {
            label: 'Size',
            content: `W: ${photoDetail.width}, H: ${photoDetail.height}`,
          },
          {
            label: 'Color',
            content: photoDetail.color.toUpperCase(),
          },
        ],
      },
      {
        header: 'Statistics',
        content: [
          {
            label: 'Views',
            content: photoDetail.views.total,
          },
          {
            label: 'Views\nIn the past 30 days',
            content: photoDetail.views.historic,
          },
          {
            label: 'Likes',
            content: photoDetail.likes.total,
          },
          {
            label: 'Likes\nFor the past 30 days',
            content: photoDetail.likes.historic,
          },
          {
            label: 'Download',
            content: photoDetail.downloads.total,
          },
          {
            label: 'Download\nFor the past 30 days',
            content: photoDetail.downloads.historic,
          },
        ],
      },
    ],
  };
};

export default config;
