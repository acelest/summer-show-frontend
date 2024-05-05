const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Filtrer ou ignorer les avertissements spécifiques
    if (config.stats) {
      config.stats.warningsFilter = (warning) => {
        return (
          warning.indexOf(
            "Extra attributes from the server: cz-shortcut-listen"
          ) > -1
        );
      };
    }

    return config;
  },
};

export default nextConfig;
