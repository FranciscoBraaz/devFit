export function useSourceImage(muscle: string) {
  let imageSource = null;
  switch (muscle) {
    case 'abs':
      imageSource = require('../assets/muscles/abs.png');
      break;
    case 'back':
      imageSource = require('../assets/muscles/back.png');
      break;
    case 'biceps':
      imageSource = require('../assets/muscles/biceps.png');
      break;
    case 'chest':
      imageSource = require('../assets/muscles/chest.png');
      break;
    case 'gluteos':
      imageSource = require('../assets/muscles/gluteos.png');
      break;
    case 'legs':
      imageSource = require('../assets/muscles/legs.png');
      break;
    case 'shoulders':
      imageSource = require('../assets/muscles/shoulders.png');
      break;
    case 'triceps':
      imageSource = require('../assets/muscles/triceps.png');
      break;
  }

  return imageSource;
}
