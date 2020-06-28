import { COLOR_NAMES, COLORS } from 'Components/styles/tokens';

export function resolveColor(color) {
  return color && COLOR_NAMES.includes(color) ? COLORS[color] : color;
}