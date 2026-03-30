declare module "react-native-bcrypt" {
  export function hashSync(data: string, saltOrRounds: number): string;
  export function compareSync(data: string, encrypted: string): boolean;
  export function genSaltSync(rounds: number): string;
}