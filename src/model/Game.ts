export type GameConfig = {
  width: number;
  height: number;
  mines: number;
};

export type DifficultyOption = {
  label: string,
  config: GameConfig;
};

export const DIFFICULTY_OPTIONS: DifficultyOption[] = [
  {
    label: 'expert',
    config: {
      mines :99,
      width: 16,
      height: 16,
    },
  }
];
