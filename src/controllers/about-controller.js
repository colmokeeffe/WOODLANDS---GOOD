export const aboutController = {
  index: {
    handler: function (request, h) {
      const viewData = {
        title: "About [WOODLANDS]",
      };
      return h.view("about-view", viewData);
    },
  },
};
