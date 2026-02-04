module.exports = {
  tagPrefix: "",
  bumpFiles: [
    "package.json",
    { filename: "src/palettes/vanilla-dark_aqua.tdesktop-palette", updater: "src/meta-updater.js" },
    { filename: "src/palettes/vanilla-dark_cream.tdesktop-palette", updater: "src/meta-updater.js" },
    { filename: "src/palettes/vanilla-dark_mint.tdesktop-palette", updater: "src/meta-updater.js" },
    { filename: "src/palettes/vanilla-dark_rose.tdesktop-palette", updater: "src/meta-updater.js" }
  ],
  scripts: {
    prerelease: "npm run lint:all && npm run build && git add src/themes/*.tdesktop-theme"
  },
  writerOpts: {
    finalizeContext(context) {
      if (!context.commitGroups?.length) {
        context.commitGroups = [{ commits: [{ header: "No significant changes" }] }];
      }
      return context;
    }
  }
};
