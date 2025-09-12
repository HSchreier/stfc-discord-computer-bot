import { I18n } from 'i18n';
import path from 'path';
import config from '../config';

class LocaleService {
  private static _instance: I18n;

  static get instance(): I18n {
    if (!LocaleService._instance) {
      const i18n = new I18n();
      i18n.configure({
        locales: ['en', 'es', 'de', 'uk'], // supported
        directory: path.join(__dirname, '../locales'),
        defaultLocale: 'en',
        objectNotation: true,
      });
      LocaleService._instance = i18n;
    }
    return LocaleService._instance;
  }

  /**
   * Try to detect locale from the input string.
   * If unsupported, return "en" and notify user via config message.
   */
  static detectLocale(input: string): string {
    // Normalize input for detection
    const lowerInput = input.toLowerCase();

    // Spanish
    if (/^(ayuda|hola|qué|cual|versión)/i.test(lowerInput)) return 'es';

    // German
    if (/^(hilfe|guten|was|welche|version)/i.test(lowerInput)) return 'de';

    // Ukrainian
    if (/^(допомога|привіт|що|яка|версія)/i.test(lowerInput)) return 'uk';

    // Default to English
    return 'en';
  }

  /**
   * Fallback handler for unsupported locales
   */
  static getBackupResponse(): string {
    return config.unsupportedLanguageMessage || "Sorry, I can only respond in English right now.";
  }
}

export default LocaleService;
