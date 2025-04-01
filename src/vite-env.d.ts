/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_TELEGRAM_BOT_TOKEN: string;
  readonly VITE_CHAT_ID: string;
  readonly VITE_TELEGRAM_API: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
