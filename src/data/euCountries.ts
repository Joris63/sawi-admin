export interface TelCountry {
  code: string
  name: string
  dialCode: string
  flag: string
  mask: string
}

export interface VatCountry {
  code: string
  name: string
  vatPrefix: string
  flag: string
  mask: string
}

// Priority: BE, NL, FR, DE, LU — then rest alphabetically
export const TEL_COUNTRIES: TelCountry[] = [
  { code: 'BE', name: 'België', dialCode: '+32', flag: 'be', mask: '999 99 99 99' },
  { code: 'NL', name: 'Nederland', dialCode: '+31', flag: 'nl', mask: '99 9999 9999' },
  { code: 'FR', name: 'Frankrijk', dialCode: '+33', flag: 'fr', mask: '9 99 99 99 99' },
  { code: 'DE', name: 'Duitsland', dialCode: '+49', flag: 'de', mask: '9999 9999999' },
  { code: 'LU', name: 'Luxemburg', dialCode: '+352', flag: 'lu', mask: '999 999 999' },
  { code: 'AT', name: 'Oostenrijk', dialCode: '+43', flag: 'at', mask: '999 9999999' },
  { code: 'BG', name: 'Bulgarije', dialCode: '+359', flag: 'bg', mask: '99 999 9999' },
  { code: 'CY', name: 'Cyprus', dialCode: '+357', flag: 'cy', mask: '99 999999' },
  { code: 'CZ', name: 'Tsjechië', dialCode: '+420', flag: 'cz', mask: '999 999 999' },
  { code: 'DK', name: 'Denemarken', dialCode: '+45', flag: 'dk', mask: '99 99 99 99' },
  { code: 'EE', name: 'Estland', dialCode: '+372', flag: 'ee', mask: '9999 9999' },
  { code: 'ES', name: 'Spanje', dialCode: '+34', flag: 'es', mask: '999 999 999' },
  { code: 'FI', name: 'Finland', dialCode: '+358', flag: 'fi', mask: '99 999 9999' },
  { code: 'GR', name: 'Griekenland', dialCode: '+30', flag: 'gr', mask: '999 999 9999' },
  { code: 'HR', name: 'Kroatië', dialCode: '+385', flag: 'hr', mask: '99 999 9999' },
  { code: 'HU', name: 'Hongarije', dialCode: '+36', flag: 'hu', mask: '99 999 9999' },
  { code: 'IE', name: 'Ierland', dialCode: '+353', flag: 'ie', mask: '99 999 9999' },
  { code: 'IT', name: 'Italië', dialCode: '+39', flag: 'it', mask: '999 999 9999' },
  { code: 'LT', name: 'Litouwen', dialCode: '+370', flag: 'lt', mask: '999 99999' },
  { code: 'LV', name: 'Letland', dialCode: '+371', flag: 'lv', mask: '99 999 999' },
  { code: 'MT', name: 'Malta', dialCode: '+356', flag: 'mt', mask: '9999 9999' },
  { code: 'PL', name: 'Polen', dialCode: '+48', flag: 'pl', mask: '999 999 999' },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: 'pt', mask: '999 999 999' },
  { code: 'RO', name: 'Roemenië', dialCode: '+40', flag: 'ro', mask: '999 999 999' },
  { code: 'SE', name: 'Zweden', dialCode: '+46', flag: 'se', mask: '99 999 9999' },
  { code: 'SI', name: 'Slovenië', dialCode: '+386', flag: 'si', mask: '99 999 999' },
  { code: 'SK', name: 'Slowakije', dialCode: '+421', flag: 'sk', mask: '999 999 999' },
]

export const VAT_COUNTRIES: VatCountry[] = [
  { code: 'BE', name: 'België', vatPrefix: 'BE', flag: 'be', mask: '9999.999.999' },
  { code: 'NL', name: 'Nederland', vatPrefix: 'NL', flag: 'nl', mask: '999999999B99' },
  { code: 'FR', name: 'Frankrijk', vatPrefix: 'FR', flag: 'fr', mask: '99 999999999' },
  { code: 'DE', name: 'Duitsland', vatPrefix: 'DE', flag: 'de', mask: '999999999' },
  { code: 'LU', name: 'Luxemburg', vatPrefix: 'LU', flag: 'lu', mask: '99999999' },
  { code: 'AT', name: 'Oostenrijk', vatPrefix: 'ATU', flag: 'at', mask: '99999999' },
  { code: 'BG', name: 'Bulgarije', vatPrefix: 'BG', flag: 'bg', mask: '9999999999' },
  { code: 'CY', name: 'Cyprus', vatPrefix: 'CY', flag: 'cy', mask: '99999999*' },
  { code: 'CZ', name: 'Tsjechië', vatPrefix: 'CZ', flag: 'cz', mask: '9999999999' },
  { code: 'DK', name: 'Denemarken', vatPrefix: 'DK', flag: 'dk', mask: '99999999' },
  { code: 'EE', name: 'Estland', vatPrefix: 'EE', flag: 'ee', mask: '999999999' },
  { code: 'ES', name: 'Spanje', vatPrefix: 'ES', flag: 'es', mask: '*99999999*' },
  { code: 'FI', name: 'Finland', vatPrefix: 'FI', flag: 'fi', mask: '99999999' },
  { code: 'GR', name: 'Griekenland', vatPrefix: 'EL', flag: 'gr', mask: '999999999' },
  { code: 'HR', name: 'Kroatië', vatPrefix: 'HR', flag: 'hr', mask: '99999999999' },
  { code: 'HU', name: 'Hongarije', vatPrefix: 'HU', flag: 'hu', mask: '99999999' },
  { code: 'IE', name: 'Ierland', vatPrefix: 'IE', flag: 'ie', mask: '9*99999*' },
  { code: 'IT', name: 'Italië', vatPrefix: 'IT', flag: 'it', mask: '99999999999' },
  { code: 'LT', name: 'Litouwen', vatPrefix: 'LT', flag: 'lt', mask: '999999999999' },
  { code: 'LV', name: 'Letland', vatPrefix: 'LV', flag: 'lv', mask: '99999999999' },
  { code: 'MT', name: 'Malta', vatPrefix: 'MT', flag: 'mt', mask: '99999999' },
  { code: 'PL', name: 'Polen', vatPrefix: 'PL', flag: 'pl', mask: '9999999999' },
  { code: 'PT', name: 'Portugal', vatPrefix: 'PT', flag: 'pt', mask: '999999999' },
  { code: 'RO', name: 'Roemenië', vatPrefix: 'RO', flag: 'ro', mask: '9999999999' },
  { code: 'SE', name: 'Zweden', vatPrefix: 'SE', flag: 'se', mask: '999999999999' },
  { code: 'SI', name: 'Slovenië', vatPrefix: 'SI', flag: 'si', mask: '99999999' },
  { code: 'SK', name: 'Slowakije', vatPrefix: 'SK', flag: 'sk', mask: '9999999999' },
]
