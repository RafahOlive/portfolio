const sizes = {
    extraSmall: '600px',
    small: '600px',
    medium: '768px',
    large: '1024px',
  };

  export const devices = {
    extraSmall: `only screen and (max-width: ${sizes.extraSmall})`,
    small: `only screen and (min-width: ${sizes.small})`,
    medium: `only screen and (min-width: ${sizes.medium})`,
    large: `only screen and (min-width: ${sizes.large})`,
  };