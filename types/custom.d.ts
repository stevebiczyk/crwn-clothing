declare global {
  interface ImportMeta {
    env: Record<string, string>;
  }
}

// declare module "*.svg" {
//   const src: string;
//   export default src;
// }
